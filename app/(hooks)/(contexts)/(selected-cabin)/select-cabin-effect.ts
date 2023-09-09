import { useEffect } from 'react';
import { queryReservationsByCabinId } from '@/api/database';
import { ReservationProps } from '@/app/types';
import { ActionType } from '@/hooks/contexts/selected-cabin/cabin-being-booked-state.value';

export default function useSelectCabinEffect(
  id: number | undefined,
  setCabin: (action: ActionType) => void,
) {
  useEffect(() => {
    if (id) {
      setCabin({ type: 'fetch', id });
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
}
