import React from 'react';
import Cabin from '@/components/ui/cabin';
import client from '@/api/apollo-client';
import { cabinsCollectionQuery } from '@/lib/queries/cabins';

export default async function Home() {
  const { data } = await client.query({
    query: cabinsCollectionQuery,
  });

  const cabins = data.cabinsCollection?.edges.map((cabin) => {
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

  return (
    <div className={'flex justify-center'}>
      <div
        className={'grid lg:grid-cols-2 sm:grid-cols-1 gap-5 content-center'}
      >
        {cabins!.map((cabin) => {
          return (
            <Cabin
              key={cabin.id}
              id={cabin.id}
              name={cabin.name}
              description={cabin.description}
              images={cabin.images}
            ></Cabin>
          );
        })}
      </div>
    </div>
  );
}
