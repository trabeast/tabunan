import React from 'react';
import client from '@/api/apollo-client';
import CabinList from '@/components/ui/cabin-list';
import cabinsQuery, { CabinsQueryDto } from '@/lib/queries/cabins-query';

export default async function Home() {
  const { data } = await client.query({
    query: cabinsQuery,
  });

  const cabins = CabinsQueryDto(data);

  return <CabinList cabins={cabins} />;
}
