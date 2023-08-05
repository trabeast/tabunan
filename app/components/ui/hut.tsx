'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Gallery, { GalleryProps } from '@/components/ui/gallery';
import { Button } from '@/components/ui/button';
import React from 'react';
import { useRouter } from 'next/navigation';

export interface HutProps extends GalleryProps {
  id: string;
  name: string;
  description: string;
}

export default function Hut({ id, name, description, images }: HutProps) {
  const router = useRouter();

  return (
    <Card className={'lg:w-[500px] sm:w-[100%] sm:mx-5'}>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardContent>
          <Gallery images={images} />
        </CardContent>
      </CardHeader>
      <CardFooter>
        <Button onClick={() => router.push(`/booking/${id}`)}>Book</Button>
      </CardFooter>
    </Card>
  );
}
