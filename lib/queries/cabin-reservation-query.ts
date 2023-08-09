import { graphql } from '@/gql';
import { CabinReservation } from '@/app/booking/[id]/page';
import { CabinReservationQuery } from '@/gql/graphql';
import { DateRange } from 'react-day-picker';

export default graphql(`
  query CabinReservation($id: BigInt!) {
    cabinsCollection(filter: { id: { eq: $id } }) {
      edges {
        node {
          id
          name
          description
          reservationsCollection {
            edges {
              node {
                id
                during
              }
            }
          }
          cabin_imagesCollection {
            edges {
              node {
                id
                src
                alt
              }
            }
          }
        }
      }
    }
  }
`);

export function CabinReservationQueryDto(
  data: CabinReservationQuery,
): CabinReservation {
  return data.cabinsCollection!.edges.map((cabin) => {
    return {
      id: cabin.node.id,
      name: cabin.node.name,
      description: cabin.node.description,
      images: cabin.node.cabin_imagesCollection?.edges.map((imageEdge) => {
        return {
          id: imageEdge.node.id,
          src: imageEdge.node.src ?? '',
          alt: imageEdge.node.alt ?? '',
          width: 0,
          height: 0,
        };
      }),
      reservations: cabin.node.reservationsCollection!.edges.map(
        (reservationEdge) => {
          return {
            id: reservationEdge.node.id,
            during: reservationEdge.node.during as unknown as DateRange,
          };
        },
      ),
    };
  })[0];
}
