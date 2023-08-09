import { graphql } from '@/gql';
import { CabinsQuery } from '@/gql/graphql';
import { CabinProps } from '@/components/ui/cabin';

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

export function CabinsQueryDto(data: CabinsQuery): CabinProps[] {
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
    };
  });
}
