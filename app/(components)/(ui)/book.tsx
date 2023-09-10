'use client';

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from './dialog';
import { GalleryProps } from './gallery';
import { ReactNode, useState } from 'react';
import BookForm from '@/components/ui/book-form';
import { useSelectedCabinContext } from '@/hooks/contexts/selected-cabin/selected-cabin-context';
import { CabinProps } from '@/components/ui/cabin';

export default function Book({
  id,
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
      <DialogContent className={'max-w-max'}>
        <BookForm>
          <DialogTitle>Booking Details</DialogTitle>
        </BookForm>
      </DialogContent>
    </Dialog>
  );
}
