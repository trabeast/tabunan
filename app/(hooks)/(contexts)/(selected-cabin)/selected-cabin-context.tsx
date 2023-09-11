'use client';

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
} from 'react';
import debug, { displayDateRange } from '@/debug/debug';
import { ReservationProps } from '@/app/types';
import useSelectedCabinState from '@/hooks/contexts/selected-cabin/selected-cabin-state';
import { queryReservationsByCabinId } from '@/api/database';
import { DisabledDays } from '@/lib/datepicker-utils';

export type SelectedCabinContextValue = {
  id: number | undefined;
  getCabinById: (id: number | undefined) => void;
  loading: boolean;
  reservedDates: ReservationProps[] | undefined;
  disabledDays: DisabledDays;
};

export type BookContextProviderProps = {
  children: ReactNode;
};

export const SelectedCabinContext = createContext<
  SelectedCabinContextValue | undefined
>(undefined);

export function useSelectedCabinContext(): SelectedCabinContextValue {
  const context = useContext<SelectedCabinContextValue | undefined>(
    SelectedCabinContext,
  );
  if (!context) {
    throw new Error(
      'useSelectedCabinContext must be used within a SelectedCabinContextProvider',
    );
  }
  useSelectedCabinContextDebug(context);
  return context;
}

export default function SelectedCabinContextProvider({
  children,
}: BookContextProviderProps) {
  const { id, reservedDates, loading, disabledDays, setCabin } =
    useSelectedCabinState();

  const getCabinById = useCallback(
    (id: number | undefined) => {
      if (id) {
        setCabin({ type: 'fetch', id: id });
        queryReservationsByCabinId(id)
          .then((reserved: ReservationProps[] | undefined) =>
            setCabin({ type: 'reserved', reserved }),
          )
          .catch((e) => {
            console.error(e);
            setCabin({ type: 'error' });
          });
      } else {
        setCabin(undefined);
      }
    },
    [setCabin],
  );

  const context: SelectedCabinContextValue = useMemo(
    () => ({
      id,
      reservedDates,
      loading,
      disabledDays,
      getCabinById,
    }),
    [id, reservedDates, loading, disabledDays, getCabinById],
  );

  return (
    <SelectedCabinContext.Provider value={context}>
      {children}
    </SelectedCabinContext.Provider>
  );
}

function useSelectedCabinContextDebug(
  context: SelectedCabinContextValue | undefined,
) {
  debug(context?.loading ? 'is loading' : 'is not loading');
  debug(context?.id, (id: number | undefined) =>
    id ? `cabin: ${id} being booked` : 'no cabin being booked',
  );
  debug(
    context?.reservedDates,
    (reservedDates: ReservationProps[] | undefined) =>
      reservedDates
        ? reservedDates.map((reservation) =>
            displayDateRange(reservation.during),
          )
        : 'no cabin being booked',
  );
}
