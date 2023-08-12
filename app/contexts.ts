import { createContext } from 'react';

export const BookContext = createContext({
  book: false,
  setBook: (book: boolean) => {},
});
