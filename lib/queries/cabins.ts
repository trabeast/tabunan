import { graphql } from '@/gql';

export const cabinsQuery = graphql(`
  query Cabins {
    cabinsCollection {
      edges {
        node {
          id
          name
          description
          cabin_imagesCollection {
            edges {
              node {
                id
                source
              }
            }
          }
        }
      }
    }
  }
`);
