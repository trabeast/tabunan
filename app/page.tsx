import React from 'react';
import CabinList from '@/components/ui/cabin-list';
import { queryCabinsWithImages } from '@/api/database';

export default async function Home() {
  const cabins = await queryCabinsWithImages();
  return <CabinList cabins={cabins} />;
}
