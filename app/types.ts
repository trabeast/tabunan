import { DateRange } from 'react-day-picker';

export type Images =
  | {
      src: string;
      alt: string;
      width: number;
      id: number;
      height: number;
    }[]
  | undefined;

export type Reservations =
  | {
      id: number;
      during: DateRange;
    }[]
  | undefined;

export interface GalleryProps {
  images: Images;
}

export interface ReservationProps {
  reservations: Reservations;
}

export interface CabinProps {
  id: number;
  name: string;
  description: string;
}
