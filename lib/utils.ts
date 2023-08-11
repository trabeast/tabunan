import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import {
  PartialCabinImagesConnection,
  PartialCabinsConnection,
  PartialReservationsConnection,
} from '@/lib/queries/types';
import { Images } from '@/app/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function imagesDto(
  images: PartialCabinImagesConnection,
): Images | undefined {
  return images
    ? images.edges.map((image) => {
        return {
          id: image.node.id,
          src: image.node.src ?? '',
          alt: image.node.alt ?? '',
          width: 0,
          height: 0,
        };
      })
    : undefined;
}

export function reservationsDto(reservations: PartialReservationsConnection) {
  return reservations.edges.map((reservation) => {
    return {
      id: reservation.node.id,
      during: reservation.node.during,
    };
  });
}

export function cabinsDto(cabins: PartialCabinsConnection) {
  return cabins.edges.map((cabin) => {
    return {
      id: cabin.node.id,
      name: cabin.node.name ?? '',
      description: cabin.node.description ?? '',
      images: cabin.node.cabin_imagesCollection
        ? imagesDto(cabin.node.cabin_imagesCollection)
        : undefined,
      reservations: cabin.node.reservationsCollection
        ? reservationsDto(cabin.node.reservationsCollection)
        : undefined,
    };
  });
}
