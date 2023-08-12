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
import React from 'react';
import { CabinProps, GalleryProps } from '@/app/types';
import Book from '@/components/ui/book';

export default function Cabin({
  id,
  name,
  description,
  images,
  children,
}: CabinProps & GalleryProps & { children: React.ReactNode }) {
  const [book, setBook] = React.useState(false);

  return (
    <>
      <Card className={'lg:w-[500px] sm:w-[100%] sm:mx-5'}>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <CardContent>
            <Gallery images={images} />
          </CardContent>
        </CardHeader>
        <CardFooter>
          <Button onClick={() => setBook(true)}>Book</Button>
        </CardFooter>
      </Card>
      {book && (
        <Book
          id={id}
          name={name}
          description={description}
          images={images}
          book={book}
          setBook={setBook}
        >
          {children}
        </Book>
      )}
    </>
  );
}
