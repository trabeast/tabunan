'use client';

import { CabinProps, GalleryProps } from '@/app/types';
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
import { ReactNode } from 'react';
import { useCabinContext } from '@/contexts/cabin-context';

export default function Book({
  id,
  name,
  description,
  images,
  children,
}: CabinProps & { images: GalleryProps } & { children: ReactNode }) {
  const { setId, cabin, loading } = useCabinContext();
  const handleOpen = (isOpen: boolean) =>
    isOpen ? setId(id) : setId(undefined);
  return (
    <Dialog onOpenChange={handleOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
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
              <DatePicker reserved={cabin.reservedDates} />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
