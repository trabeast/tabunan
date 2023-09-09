'use client';

import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import debug, { displayDateRange } from '@/debug/debug';
import { DateRange } from 'react-day-picker';
import useDisabledDaysMemo from '@/hooks/contexts/book/disabled-days-memo';
import { ReservationProps } from '@/app/types';
import { DisabledDays } from '@/lib/datepicker-utils';
import useCabinBeingBookedState, {
  CabinBeingBooked,
} from '@/hooks/contexts/book/cabin-being-booked-state.value';
import useSelectCabinEffect from '@/hooks/contexts/book/select-cabin-effect';
import useReservationState from '@/hooks/contexts/book/reservation-state';
import useReservationCabinEffect from '@/hooks/contexts/book/reservation-cabin-effect';

export type BookContextValue =
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

export function useBookContext() {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error('useCabinContext must be used within a CabinContext');
  }
  useBookContextDebug(context);
  return context;
}

export default function BookContextProvider({
  children,
}: BookContextProviderProps) {
  const [id, setId] = useState<number | undefined>(undefined);
  const { cabin, loading, setCabin } = useCabinBeingBookedState();
  const disabledDays = useDisabledDaysMemo(cabin.reservedDates);
  const { reservation, setReservation } = useReservationState(disabledDays);
  useSelectCabinEffect(id, setCabin);
  useReservationCabinEffect(setCabin, reservation);

  const context: BookContextValue = useMemo(
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
    <BookContext.Provider value={context}>{children}</BookContext.Provider>
  );
}

export const BookContext = createContext<BookContextValue | undefined>(
  undefined,
);

function useBookContextDebug(context: BookContextValue | undefined) {
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
