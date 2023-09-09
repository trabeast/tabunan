import { useDebugValue } from 'react';
import { DateRange } from 'react-day-picker';
import { format } from 'date-fns';

export const debug: typeof useDebugValue | (() => void) =
  process.env.NODE_ENV === 'development' ? useDebugValue : () => {};

export function displayDateRange(during: DateRange) {
  return `reserved from: ${during.from && format(during.from, 'y-MM-dd')} to: ${
    during.to && format(during.to, 'y-MM-dd')
  }`;
}

export default debug;
