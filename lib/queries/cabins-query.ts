import { graphql } from 'lib/queries/gql';

export default graphql(`
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
