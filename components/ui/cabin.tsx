'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './card';
import Gallery from './gallery';
import { Button } from './button';
import { useMemo, useState } from 'react';
import { CabinProps, GalleryProps } from '@/app/types';
import Book from '@/components/ui/book';
import { BookContext } from '@/app/contexts';

export default function Cabin({
  id,
  name,
  description,
  images,
}: CabinProps & GalleryProps) {
  const [book, setBook] = useState(false);

  const bookContext = useMemo(() => ({ book: book, setBook: setBook }), [book]);

  return (
    <BookContext.Provider value={bookContext}>
      <Card className={'lg:w-[500px] sm:w-[100%] sm:mx-5'}>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <CardContent>
            <Gallery images={images} />
          </CardContent>
        </CardHeader>
        <CardFooter>
          <Book id={id} name={name} description={description} images={images}>
            <Button onClick={() => setBook(true)}>Book</Button>
          </Book>
        </CardFooter>
      </Card>
    </BookContext.Provider>
  );
}
