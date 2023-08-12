import Cabin from '@/components/ui/cabin';
import React from 'react';
import { queryCabinsWithImages } from '@/api/database';

export default async function CabinList() {
  const cabins = await queryCabinsWithImages();

  return (
    <div className={'flex justify-center'}>
      <div
        className={'grid lg:grid-cols-2 sm:grid-cols-1 gap-5 content-center'}
      >
        {cabins.map(({ id, name, description, images }) => {
          return (
            <Cabin
              key={id}
              id={id}
              name={name}
              description={description}
              images={images}
            />
          );
        })}
      </div>
    </div>
  );
}
