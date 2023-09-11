import { Dispatch, useReducer } from 'react';
import { ReservationProps } from '@/app/types';
import useDisabledDaysMemo from '@/hooks/contexts/selected-cabin/disabled-days-memo';
import { DisabledDays } from '@/lib/datepicker-utils';

export type SelectedCabinStateValue = {
  id: number | undefined;
  loading: boolean;
  reservedDates: ReservationProps[] | undefined;
  disabledDays: DisabledDays;
  setCabin: Dispatch<ActionType>;
};

export default function useSelectedCabinState(): SelectedCabinStateValue {
  const [state, dispatch] = useReducer(reducer, undefined);
  const { id, reserved, loading } = state ?? {};
  const disabledDays = useDisabledDaysMemo(reserved);

  return {
    id,
    loading: loading ?? false,
    reservedDates: reserved,
    disabledDays,
    setCabin: dispatch,
  };
}

export type ActionType =
  | { type: 'fetch'; id: number | undefined }
  | { type: 'reserved'; reserved: ReservationProps[] | undefined }
  | { type: 'error' }
  | undefined;

export type SelectedCabinReducerStateValue = {
  id: number | undefined;
  reserved: ReservationProps[] | undefined;
  loading: boolean;
};

function reducer(
  state: SelectedCabinReducerStateValue | undefined,
  action: ActionType,
): SelectedCabinReducerStateValue | undefined {
  switch (action?.type) {
    case 'fetch':
      return {
        loading: true,
        id: action.id,
        reserved: undefined,
      };
    case 'reserved':
      return {
        loading: false,
        id: state?.id,
        reserved: action.reserved,
      };
    case 'error':
      return state;
    default:
      return undefined;
  }
}
