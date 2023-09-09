'use client';

import { CabinProps } from '@/app/types';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog';
import Gallery, { GalleryProps } from './gallery';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { useCabinContext } from '@/contexts/cabin-context';
import BookForm from '@/components/ui/book-form';

export default function Book({
  id,
  name,
  description,
  images,
  children,
}: CabinProps & { images: GalleryProps['images'] } & { children: ReactNode }) {
  const { setId, cabin, loading } = useCabinContext();
  const handleOpen = (isOpen: boolean) =>
    isOpen ? setId(id) : setId(undefined);
  return (
    <Dialog onOpenChange={handleOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className={cn('max-w-[70%]')}>
        <div className={'flex flex-row space-x-5 divide-x'}>
          <div className={'basis-2/3'}>
            <Gallery images={images}>
              <DialogHeader>
                <DialogTitle>{name}</DialogTitle>
                <DialogDescription>{description}</DialogDescription>
              </DialogHeader>
            </Gallery>
          </div>
          <div className={'basis-1/3'}>
            <BookForm reservedDates={cabin.reservedDates}>
              <DialogTitle>Booking Details</DialogTitle>
            </BookForm>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}