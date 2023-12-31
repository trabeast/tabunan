import {
  PartialCabinImagesConnection,
  PartialCabinsConnection,
  PartialReservationsConnection,
} from '@/lib/queries/types';
import { GalleryProps } from '@/components/ui/gallery';
import { ReservationProps } from '@/app/types';
import { CabinProps } from '@/components/ui/cabin';

type CabinImages = PartialCabinImagesConnection;
type Reservations = PartialReservationsConnection;
type Cabins = PartialCabinsConnection;

export function imagesDto(images: CabinImages): GalleryProps['images'] {
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

export function reservationsDto(
  reservations: Reservations,
): ReservationProps[] | undefined {
  return reservations.edges.map((reservation) => {
    const convertDateRangeString = (dateRangeString: string) => {
      const [from, to] = dateRangeString.replace(/[[)]/g, '').split(',');
      return {
        from: new Date(from),
        to: new Date(to),
      };
    };

    return {
      id: reservation.node.id,
      during: convertDateRangeString(reservation.node.during),
    };
  });
}

export function cabinsDto(cabins: Cabins): (CabinProps & {
  images: GalleryProps['images'];
} & {
  reservations: ReservationProps[] | undefined;
})[] {
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
