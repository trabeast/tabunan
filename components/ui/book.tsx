'use client';

import { CabinProps, GalleryProps } from '@/app/types';
import React from 'react';
import { Button } from '@/components/ui/button';

export default function Book({
  id,
  name,
  description,
  images,
  children,
  book,
  setBook,
}: CabinProps &
  GalleryProps & {
    children: React.ReactNode;
    book: boolean;
    setBook: React.Dispatch<React.SetStateAction<boolean>>;
  }) {
  return (
    <dialog className={'border rounded-md w-[80%] h-[80%]'} open={book}>
      <article>
        <section>
          <h1>{name}</h1>
          <h6>{description}</h6>
          {children}
          <footer>
            <Button onClick={() => setBook(false)}>Close</Button>
          </footer>
        </section>
      </article>
    </dialog>
  );
}
