'use client';

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
import { ReactNode, useState } from 'react';
import BookForm from '@/components/ui/book-form';
import { useSelectedCabinContext } from '@/hooks/contexts/selected-cabin/selected-cabin-context';
import { CabinProps } from '@/components/ui/cabin';

export default function Book({
  id,
  name,
  description,
  images,
  children,
}: CabinProps & { images: GalleryProps['images'] } & { children: ReactNode }) {
  const { getCabinById } = useSelectedCabinContext();
  const [, setOpen] = useState(false);
  const handleOpen = (open: boolean) => {
    setOpen(open);
    open ? getCabinById(id) : getCabinById(undefined);
  };
  return (
    <Dialog onOpenChange={handleOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className={cn('max-w-[70%]')}>
        <div className={'flex flex-row space-x-5 divide-x'}>
          <div className={'basis-3/5'}>
            <Gallery images={images}>
              <DialogHeader>
                <DialogTitle>{name}</DialogTitle>
                <DialogDescription>{description}</DialogDescription>
              </DialogHeader>
            </Gallery>
          </div>
          <div className={'basis-2/5'}>
            <BookForm>
              <DialogTitle>Booking Details</DialogTitle>
            </BookForm>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
