'use client';

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';
import { CabinProps, ReservationProps } from '@/app/types';
import { queryReservationsByCabinId } from '@/api/database';

type ReservedCabin = Pick<CabinProps, 'id'> & {
  reservedDates: ReservationProps;
};

const initialState: ReservedCabin = {
  id: -1,
  reservedDates: undefined,
};

type CabinContextType =
  | {
      setId: Dispatch<SetStateAction<number | undefined>>;
      cabin: ReservedCabin;
      loading: boolean;
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

function reducer(
  this: Dispatch<SetStateAction<boolean>>,
  state: ReservedCabin,
  action: ActionType,
): ReservedCabin {
  switch (action?.type) {
    case 'fetch':
      this(true);
      return {
        ...state,
        id: action.id,
      };
    case 'data':
      this(false);
      return {
        ...state,
        id: action.id,
        reservedDates: action.reserved,
      };
    case 'error':
      this(false);
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
  const [id, setId] = useState<number | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [cabin, dispatch] = useReducer(reducer.bind(setLoading), initialState);

  useEffect(() => {
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
  }, [id]);

  const context = useMemo(() => ({ setId, cabin, loading }), [cabin, loading]);

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
