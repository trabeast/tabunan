'use client';

import { CabinProps, GalleryProps, ReservationProps } from '@/app/types';
import { ReactNode, useContext, useEffect, useState } from 'react';
import { BookContext } from '@/app/contexts';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { queryReservationsByCabinId } from '@/api/database';
import { Reservation } from '@/components/ui/reservation';
import Gallery from '@/components/ui/gallery';
import { cn } from '@/lib/utils';

export default function Book({
  id,
  name,
  description,
  images,
  children,
}: CabinProps &
  GalleryProps & {
    children: ReactNode;
  }) {
  const { book, setBook } = useContext(BookContext);

  const [{ reservations }, setReservation] = useState<ReservationProps>({
    reservations: [],
  });

  useEffect(() => {
    book
      ? (async () => {
          const { reservations } = await queryReservationsByCabinId(id);
          setReservation({ reservations });
        })()
      : setReservation({ reservations: [] });
  }, [book]);

  return (
    <Dialog onOpenChange={() => setBook(false)}>
      <DialogTrigger asChild={true}>{children}</DialogTrigger>
      <DialogContent className={cn('max-w-[80%]')}>
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className={'flex flex-row gap-x-5'}>
          <div className={'basis-2/3'}>
            <Gallery images={images} />
          </div>
          <div className={'basis-1/3'}>
            {reservations?.length! > 0 && (
              <Reservation reservations={reservations} />
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
