'use client';

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import debug, { displayDateRange } from '@/debug/debug';
import { ReservationProps } from '@/app/types';
import useSelectedCabinState from '@/hooks/contexts/selected-cabin/selected-cabin-state';
import { queryReservationsByCabinId } from '@/api/database';
import { DisabledDays } from '@/lib/datepicker-utils';

export type SelectedCabinBase = {
  loading: boolean;
  reservedDates: ReservationProps;
  disabledDays: DisabledDays;
};
export type SelectedCabinContextValue = SelectedCabinBase & {
  id: number | undefined;
  getCabinById: (id: number | undefined) => void;
};

export type BookContextProviderProps = {
  children: ReactNode;
};

export const SelectedCabinContext = createContext<
  SelectedCabinContextValue | undefined
>(undefined);

export function useSelectedCabinContext() {
  const context = useContext(SelectedCabinContext);
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
  const [id, setId] = useState<number | undefined>(undefined);
  const { reservedDates, loading, disabledDays, setCabin } =
    useSelectedCabinState();

  useEffect(() => {
    if (id) {
      setCabin({ type: 'fetch' });
      queryReservationsByCabinId(id)
        .then((reserved: ReservationProps) =>
          setCabin({ type: 'reserved', reserved }),
        )
        .catch((e) => {
          console.error(e);
          setCabin({ type: 'error' });
        });
    } else {
      setCabin(undefined);
    }
  }, [id, setCabin]);

  const context: SelectedCabinContextValue = useMemo(
    () => ({
      id,
      reservedDates,
      loading,
      disabledDays,
      getCabinById: setId,
    }),
    [id, reservedDates, loading, disabledDays],
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
  debug(context?.reservedDates, (reservedDates: ReservationProps) =>
    reservedDates
      ? reservedDates.map((reservation) => displayDateRange(reservation.during))
      : 'no cabin being booked',
  );
}
