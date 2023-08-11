import { ApolloClient, InMemoryCache } from '@apollo/client';
import cabinsQuery from '@/lib/queries/cabins-query';
import { CabinProps, GalleryProps, ReservationProps } from '@/app/types';
import cabinReservationQuery from '@/lib/queries/cabin-reservation-query';
import { cabinsDto } from '@/lib/utils';

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/graphql/v1?apikey=${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
  cache: new InMemoryCache(),
});

export function queryCabinsWithImages(): Promise<
  (CabinProps & GalleryProps)[]
> {
  return Promise.resolve(
    client.query({ query: cabinsQuery }).then(({ data }) => {
      return cabinsDto(data.cabinsCollection!);
    }),
  );
}

export function queryCabinWithImagesAndReservations(
  id: number,
): Promise<CabinProps & GalleryProps & ReservationProps> {
  return Promise.resolve(
    client
      .query({ query: cabinReservationQuery, variables: { id } })
      .then(({ data }) => {
        return cabinsDto(data.cabinsCollection!)[0];
      }),
  );
}
