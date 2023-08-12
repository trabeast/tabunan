import { graphql } from 'lib/queries/gql';

export default graphql(`
  query Reservations($cabin_id: BigInt!) {
    reservationsCollection(filter: { cabin_id: { eq: $cabin_id } }) {
      edges {
        node {
          id
          during
        }
      }
    }
  }
`);
