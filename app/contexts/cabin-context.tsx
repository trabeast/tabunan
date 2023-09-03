'use client';

import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { CabinProps } from '@/app/types';

type CabinContextType = {
  cabin: CabinProps;
  setCabin: (cabin: CabinProps) => void;
};

type CabinContextProviderProps = {
  children: ReactNode;
};

export const CabinContext = createContext<CabinContextType | undefined>(
  undefined,
);

export default function CabinContextProvider({
  children,
}: CabinContextProviderProps) {
  const [cabin, setCabin] = useState({
    id: -1,
    name: '',
    description: '',
  });

  const cabinContext = useMemo(() => ({ cabin, setCabin }), [cabin]);

  return (
    <CabinContext.Provider value={cabinContext}>
      {children}
    </CabinContext.Provider>
  );
}

export const useCabinContext = () => {
  const context = useContext(CabinContext);
  if (!context) {
    throw new Error('useCabinContext must be used within a CabinContext');
  }
  return context;
};
