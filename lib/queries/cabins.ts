import { graphql } from '@/gql';

export const cabinsCollectionQuery = graphql(`
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
