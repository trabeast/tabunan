'use client';

import { DateRange } from 'react-day-picker';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
} from 'react';
import useReservationState from '@/hooks/contexts/reservation/reservation-state';
import { useSelectedCabinContext } from '@/hooks/contexts/selected-cabin/selected-cabin-context';
import debug, { displayDateRange } from '@/debug/debug';

export type ReservationBase = {
  reservation: DateRange | undefined;
};

export type ReservationContextValue = ReservationBase & {
  setReservation: (
    range: DateRange | undefined,
    selectedDate: Date | undefined,
  ) => void;
};

export type ReservationContextProviderProps = {
  children: ReactNode;
};

export const ReservationContext = createContext<
  ReservationContextValue | undefined
>(undefined);

export function useReservationContext() {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error(
      'useReservationContext must be used within a ReservationContextProvider',
    );
  }

  useReservationContextDebug(context);

  return context;
}

export default function ReservationContextProvider({
  children,
}: ReservationContextProviderProps) {
  const { id, disabledDays } = useSelectedCabinContext();
  const { reservation, setReservation } = useReservationState(disabledDays);

  useEffect(() => {
    !id && setReservation(undefined, undefined);
  }, [id, setReservation]);

  const context: ReservationContextValue = useMemo(
    () => ({
      reservation,
      setReservation,
    }),
    [reservation, setReservation],
  );

  return (
    <ReservationContext.Provider value={context}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservationContextDebug(
  context: ReservationContextValue | undefined,
) {
  debug(
    context?.reservation,
    (reservation: ReservationContextValue['reservation']) =>
      reservation ? displayDateRange(reservation) : 'has no reservation',
  );
}
