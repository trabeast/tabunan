import React from 'react';
import Cabin from '@/components/ui/cabin';
import supabase from '@/api/supabase';

export default async function Home() {
  const { data: cabins } = await supabase.from('cabins').select('*');

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
