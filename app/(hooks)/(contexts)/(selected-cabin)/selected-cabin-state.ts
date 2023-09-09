import { Dispatch, SetStateAction, useReducer, useState } from 'react';
import { ReservationProps } from '@/app/types';
import useDisabledDaysMemo from '@/hooks/contexts/selected-cabin/disabled-days-memo';

import { SelectedCabinBase } from '@/hooks/contexts/selected-cabin/selected-cabin-context';

export type SelectedCabinStateValue = SelectedCabinBase & {
  setCabin: Dispatch<ActionType>;
};

export default function useSelectedCabinState(): SelectedCabinStateValue {
  const [loading, setLoading] = useState<boolean>(false);
  const [reservedDates, dispatch] = useReducer(
    reducer.bind(setLoading),
    undefined,
  );
  const disabledDays = useDisabledDaysMemo(reservedDates);

  return {
    loading,
    reservedDates,
    disabledDays,
    setCabin: dispatch,
  };
}

export type ActionType =
  | { type: 'fetch' }
  | { type: 'reserved'; reserved: ReservationProps[] | undefined }
  | { type: 'error' }
  | undefined;

function reducer(
  this: Dispatch<SetStateAction<boolean>>,
  state: ReservationProps[] | undefined,
  action: ActionType,
): ReservationProps[] | undefined {
  switch (action?.type) {
    case 'fetch':
      this(true);
      return state;
    case 'reserved':
      this(false);
      return action.reserved;
    case 'error':
      this(false);
      return state;
    default:
      return undefined;
  }
}
