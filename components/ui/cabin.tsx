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
import { useEffect, useMemo, useState } from 'react';
import { CabinProps, GalleryProps, ReservationProps } from '@/app/types';
import Book from '@/components/ui/book';
import { Reservation } from '@/components/ui/reservation';
import { queryReservationsByCabinId } from '@/api/database';
import { BookContext } from '@/app/contexts';

export default function Cabin({
  id,
  name,
  description,
  images,
}: CabinProps & GalleryProps) {
  const [book, setBook] = useState(false);
  const [{ reservations }, setReservation] = useState<ReservationProps>({
    reservations: [],
  });

  const bookContext = useMemo(() => ({ book: book, setBook: setBook }), [book]);

  useEffect(() => {
    book
      ? (async () => {
          const { reservations } = await queryReservationsByCabinId(id);
          setReservation({ reservations });
        })()
      : setReservation({ reservations: [] });
  }, [book]);

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
          <Button onClick={() => setBook(true)}>Book</Button>
        </CardFooter>
      </Card>
      <Book id={id} name={name} description={description} images={images}>
        {reservations?.length! > 0 && (
          <Reservation id={id} reservations={reservations} />
        )}
      </Book>
    </BookContext.Provider>
  );
}
