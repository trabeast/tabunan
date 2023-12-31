import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './card';
import Gallery, { GalleryProps } from './gallery';
import { Button } from './button';
import Book from './book';
import SelectedCabinContextProvider from '@/hooks/contexts/selected-cabin/selected-cabin-context';
import ReservationContextProvider from '@/hooks/contexts/reservation/reservation-context';

export type CabinProps = {
  id: number;
  name: string;
  description: string;
};

export default function Cabin({
  id,
  name,
  description,
  images,
}: CabinProps & { images: GalleryProps['images'] }) {
  return (
    <SelectedCabinContextProvider>
      <ReservationContextProvider>
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
              <Button>Book</Button>
            </Book>
          </CardFooter>
        </Card>
      </ReservationContextProvider>
    </SelectedCabinContextProvider>
  );
}
