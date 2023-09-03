import { DateRange } from 'react-day-picker';

export type GalleryProps =
  | {
      src: string;
      alt: string;
      width: number;
      id: number;
      height: number;
    }[]
  | undefined;

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
