import { DateRange } from 'react-day-picker';

export type ReservationProps =
  | {
      id: number;
      during: DateRange;
    }[]
  | undefined;

export type CabinProps = {
  id: number;
  name: string;
  description: string;
};
