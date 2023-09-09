import { useEffect } from 'react';
import { DateRange } from 'react-day-picker';
import { ActionType } from '@/hooks/contexts/selected-cabin/cabin-being-booked-state.value';

export default function useReservationCabinEffect(
  setCabin: (action: ActionType) => void,
  reservation: DateRange | undefined,
) {
  useEffect(() => {
    setCabin({ type: 'reservation', reservation });
  }, [reservation, setCabin]);
}
