'use client';

import { CabinProps, GalleryProps } from '@/app/types';
import { ReactNode, useContext } from 'react';
import { Button } from '@/components/ui/button';
import { BookContext } from '@/app/contexts';
import Gallery from '@/components/ui/gallery';

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

  return (
    <dialog className={'z-50 border rounded-md w-[80%] h-[80%]'} open={book}>
      <article className={'m-5'}>
        <section>
          <h3 className={'text-2xl font-semibold'}>{name}</h3>
          <p className={'text-sm text-muted-foreground'}>{description}</p>
          <div className={'w-[500px]'}>
            <Gallery images={images} />
          </div>
          {children}
          <footer>
            <Button onClick={() => setBook(false)}>Close</Button>
          </footer>
        </section>
      </article>
    </dialog>
  );
}
