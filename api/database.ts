import 'server-only';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import cabinsQuery from '@/lib/queries/cabins-query';
import { CabinProps, GalleryProps, ReservationProps } from '@/app/types';
import { cabinsDto, reservationsDto } from '@/lib/utils';
import reservationQuery from '@/lib/queries/reservation-query';

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

export function queryReservationsByCabinId(
  cabinId: number,
): Promise<ReservationProps> {
  return Promise.resolve(
    client
      .query({
        query: reservationQuery,
        variables: { cabin_id: cabinId },
        fetchPolicy: 'no-cache',
      })
      .then(({ data }) => {
        return { reservations: reservationsDto(data.reservationsCollection!) };
      }),
  );
}
