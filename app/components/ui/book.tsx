'use client';

import { CabinProps, GalleryProps, ReservationProps } from '@/app/types';
import { ReactNode, useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog';
import DatePicker from './date-picker';
import Gallery from './gallery';
import { cn } from '@/lib/utils';
import { useCabinContext } from '@/app/contexts/cabin-context';
import { queryReservationsByCabinId } from '@/api/database';

export default function Book({
  id,
  name,
  description,
  images,
  children,
}: CabinProps & { images: GalleryProps } & {
  children: ReactNode;
}) {
  const { cabin } = useCabinContext();

  const [reservations, setReservations] = useState<ReservationProps>([]);

  useEffect(() => {
    cabin.id === id &&
      (async () => setReservations(await queryReservationsByCabinId(id)))();
  }, [cabin]);

  return (
    <Dialog>
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
