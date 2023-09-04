'use client';

import {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useReducer,
} from 'react';
import { CabinProps, ReservationProps } from '@/app/types';
import { queryReservationsByCabinId } from '@/api/database';

type ReservingCabin = Pick<CabinProps, 'id'> & {
  reservedDates: ReservationProps;
  loading: boolean;
};

const initialState: ReservingCabin = {
  id: -1,
  reservedDates: undefined,
  loading: false,
};

type CabinContextType =
  | {
      book: (id?: number) => void;
      cabin: ReservingCabin;
    }
  | undefined;

type CabinContextProviderProps = {
  children: ReactNode;
};

export const CabinContext = createContext<CabinContextType>(undefined);

type ActionType =
  | { type: 'fetch'; id: number }
  | { type: 'data'; id: number; reserved: ReservationProps }
  | { type: 'error'; id: number }
  | undefined;

function reducer(state: ReservingCabin, action: ActionType): ReservingCabin {
  switch (action?.type) {
    case 'fetch':
      return {
        ...state,
        id: action.id,
        loading: true,
      };
    case 'data':
      return {
        ...state,
        id: action.id,
        reservedDates: action.reserved,
      };
    case 'error':
      return {
        ...state,
        id: action.id,
      };
    default:
      return initialState;
  }
}

export default function CabinContextProvider({
  children,
}: CabinContextProviderProps) {
  const [cabin, dispatch] = useReducer(reducer, initialState);

  const book = (id?: number) => {
    if (id) {
      dispatch({ type: 'fetch', id });
      queryReservationsByCabinId(id)
        .then((reserved) => dispatch({ type: 'data', id, reserved }))
        .catch((e) => {
          console.error(e);
          dispatch({ type: 'error', id });
        });
    } else {
      dispatch(undefined);
    }
  };

  const context = useMemo(() => ({ book, cabin }), [cabin]);

  return (
    <CabinContext.Provider value={context}>{children}</CabinContext.Provider>
  );
}

export function useCabinContext() {
  const context = useContext(CabinContext);
  if (!context) {
    throw new Error('useCabinContext must be used within a CabinContext');
  }
  return context;
}
