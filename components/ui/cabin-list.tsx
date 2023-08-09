'use client';

import Cabin, { CabinProps } from '@/components/ui/cabin';
import React from 'react';

interface CabinListProps {
  cabins: CabinProps[];
}

export default function CabinList({ cabins }: CabinListProps) {
  return (
    <div className={'flex justify-center'}>
      <div
        className={'grid lg:grid-cols-2 sm:grid-cols-1 gap-5 content-center'}
      >
        {cabins.map((cabin) => {
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
