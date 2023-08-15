'use client';

import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

type CabinContextProviderProps = {
  children: ReactNode;
};

type CabinContextType = {
  book: boolean;
  setBook: (book: boolean) => void;
};

export const CabinContext = createContext<CabinContextType | null>(null);

export default function CabinContextProvider({
  children,
}: CabinContextProviderProps) {
  const [book, setBook] = useState<boolean>(false);
  const cabinContext = useMemo(() => ({ book, setBook }), [book, setBook]);

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
