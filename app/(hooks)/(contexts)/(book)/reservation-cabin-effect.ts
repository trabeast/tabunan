import { useEffect } from 'react';
import { ActionType } from '@/hooks/contexts/book/cabin-being-booked-state.value';
import { DateRange } from 'react-day-picker';

export default function useReservationCabinEffect(
  setCabin: (action: ActionType) => void,
  reservation: DateRange | undefined,
) {
  useEffect(() => {
    setCabin({ type: 'reservation', reservation });
  }, [reservation, setCabin]);
}
