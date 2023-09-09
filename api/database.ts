import { ApolloClient, InMemoryCache } from '@apollo/client';
import cabinsQuery from '@/lib/queries/cabins-query';
import { CabinProps, ReservationProps } from '@/app/types';
import reservationQuery from '@/lib/queries/reservation-query';
import { GalleryProps } from '@/components/ui/gallery';
import { cabinsDto, reservationsDto } from '@/lib/dto-utils';

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/graphql/v1?apikey=${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
  cache: new InMemoryCache(),
});

export async function queryCabinsWithImages(): Promise<
  (CabinProps & { images: GalleryProps['images'] })[]
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
        return reservationsDto(data.reservationsCollection!);
      }),
  );
}
