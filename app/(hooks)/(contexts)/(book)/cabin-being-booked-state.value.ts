import { Dispatch, SetStateAction, useReducer, useState } from 'react';
import { CabinProps, ReservationProps } from '@/app/types';
import { DateRange } from 'react-day-picker';

export type CabinBeingBookedStateValue = {
  loading: boolean;
  cabin: CabinBeingBooked;
  setCabin: (action: ActionType) => void;
};

export default function useCabinBeingBookedState(): CabinBeingBookedStateValue {
  const [loading, setLoading] = useState<boolean>(false);
  const [cabin, dispatch] = useReducer(reducer.bind(setLoading), initialState);

  return {
    loading,
    cabin,
    setCabin: dispatch,
  };
}

export type CabinBeingBooked = Partial<Pick<CabinProps, 'id'>> & {
  reservedDates: ReservationProps;
  reservation: DateRange | undefined;
};

export const initialState: CabinBeingBooked = {
  id: undefined,
  reservedDates: undefined,
  reservation: undefined,
};

export type ActionType =
  | { type: 'fetch'; id: number }
  | { type: 'reserved'; reserved: ReservationProps }
  | { type: 'error' }
  | { type: 'reservation'; reservation: DateRange | undefined }
  | undefined;

function reducer(
  this: Dispatch<SetStateAction<boolean>>,
  state: CabinBeingBooked,
  action: ActionType,
): CabinBeingBooked {
  switch (action?.type) {
    case 'fetch':
      this(true);
      return {
        ...state,
      };
    case 'reserved':
      this(false);
      return {
        ...state,
        reservedDates: action.reserved,
      };
    case 'error':
      this(false);
      return {
        ...state,
      };
    case 'reservation':
      this(false);
      return {
        ...state,
        reservation: action.reservation,
      };
    default:
      return initialState;
  }
}
