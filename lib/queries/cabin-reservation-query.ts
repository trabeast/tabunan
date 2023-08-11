import { graphql } from 'lib/queries/gql';

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
