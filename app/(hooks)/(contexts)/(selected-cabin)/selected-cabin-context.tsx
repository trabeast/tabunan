'use client';

import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import debug, { displayDateRange } from '@/debug/debug';
import { DateRange } from 'react-day-picker';
import { ReservationProps } from '@/app/types';
import { DisabledDays } from '@/lib/datepicker-utils';
import useCabinBeingBookedState, {
  CabinBeingBooked,
} from '@/hooks/contexts/selected-cabin/cabin-being-booked-state.value';
import useReservationState from '@/hooks/contexts/selected-cabin/reservation-state';
import useSelectCabinEffect from '@/hooks/contexts/selected-cabin/select-cabin-effect';
import useReservationCabinEffect from '@/hooks/contexts/selected-cabin/reservation-cabin-effect';
import useDisabledDaysMemo from '@/hooks/contexts/selected-cabin/disabled-days-memo';

export type SelectedCabinContextValue =
  | {
      setId: (id: number | undefined) => void;
      setReservation: (
        range: DateRange | undefined,
        selectedDate: Date,
      ) => void;
      loading: boolean;
      disabledDays: DisabledDays;
    } & CabinBeingBooked;

export type BookContextProviderProps = {
  children: ReactNode;
};

export function useSelectedCabinContext() {
  const context = useContext(SelectedCabinContext);
  if (!context) {
    throw new Error('useCabinContext must be used within a CabinContext');
  }
  useSelectedCabinContextDebug(context);
  return context;
}

export default function SelectedCabinContextProvider({
  children,
}: BookContextProviderProps) {
  const [id, setId] = useState<number | undefined>(undefined);
  const { cabin, loading, setCabin } = useCabinBeingBookedState();
  const disabledDays = useDisabledDaysMemo(cabin.reservedDates);
  const { reservation, setReservation } = useReservationState(disabledDays);
  useSelectCabinEffect(id, setCabin);
  useReservationCabinEffect(setCabin, reservation);

  const context: SelectedCabinContextValue = useMemo(
    () => ({
      setId,
      setReservation,
      ...cabin,
      loading,
      disabledDays,
    }),
    [setReservation, cabin, loading, disabledDays],
  );

  return (
    <SelectedCabinContext.Provider value={context}>
      {children}
    </SelectedCabinContext.Provider>
  );
}

export const SelectedCabinContext = createContext<
  SelectedCabinContextValue | undefined
>(undefined);

function useSelectedCabinContextDebug(
  context: SelectedCabinContextValue | undefined,
) {
  debug(context?.loading ? 'is loading' : 'is not loading');
  debug(context?.id, (id: number | undefined) =>
    id ? `cabin: ${id} being booked` : 'no cabin being booked',
  );
  debug(context?.reservedDates, (reservations: ReservationProps) =>
    reservations
      ? reservations.map((reservation) => displayDateRange(reservation.during))
      : 'no cabin being booked',
  );
  debug(context?.reservation, (booking: DateRange | undefined) =>
    booking ? displayDateRange(booking) : 'no cabin being booked',
  );
}
