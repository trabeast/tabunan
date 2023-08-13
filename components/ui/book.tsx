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
import DatePicker from '@/components/ui/date-picker';
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
  }, [id, book]);

  return (
    <Dialog onOpenChange={() => setBook(false)}>
      <DialogTrigger asChild={true}>{children}</DialogTrigger>
      <DialogContent className={cn('max-w-[70%]')}>
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className={'flex flex-row space-x-5 divide-x'}>
          <div className={'basis-2/3'}>
            <Gallery images={images} />
          </div>
          <div className={'basis-1/3'}>
            <div className={'mx-5'}>
              <DatePicker reservations={reservations} />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
