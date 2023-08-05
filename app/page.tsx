'use client';

import hut1JPG from '../public/hut1.jpg';
import hut2JPG from '../public/hut2.jpg';
import hut3JPG from '../public/hut3.jpg';
import HutList from '@/components/ui/hut-list';
import React from 'react';
import { HutProps } from '@/components/ui/hut';

export default function Home() {
  const huts: HutProps[] = [
    {
      id: 'hut1',
      name: 'Hut 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur fermentum felis vitae porta. Donec a mauris eget lectus tincidunt egestas. Nulla hendrerit maximus nunc, a hendrerit ligula pretium vel. Etiam urna quam, viverra eget nunc sit amet, vulputate finibus nulla. Fusce nec dui eros. ',
      images: [
        {
          id: '1',
          src: hut1JPG.src,
          width: hut1JPG.width,
          height: hut1JPG.height,
          alt: 'hut1',
        },
      ],
    },
    {
      id: 'hut2',
      name: 'Hut 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur fermentum felis vitae porta. Donec a mauris eget lectus tincidunt egestas. Nulla hendrerit maximus nunc, a hendrerit ligula pretium vel. Etiam urna quam, viverra eget nunc sit amet, vulputate finibus nulla. Fusce nec dui eros. ',
      images: [
        {
          id: '2',
          src: hut2JPG.src,
          width: hut2JPG.width,
          height: hut2JPG.height,
          alt: 'hut2',
        },
      ],
    },
    {
      id: 'hut3',
      name: 'Hut 3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur fermentum felis vitae porta. Donec a mauris eget lectus tincidunt egestas. Nulla hendrerit maximus nunc, a hendrerit ligula pretium vel. Etiam urna quam, viverra eget nunc sit amet, vulputate finibus nulla. Fusce nec dui eros. ',
      images: [
        {
          id: '3',
          src: hut3JPG.src,
          width: hut3JPG.width,
          height: hut3JPG.height,
          alt: 'hut3',
        },
      ],
    },
  ];

  return (
    <div className={'flex justify-center'}>
      <HutList huts={huts}></HutList>
    </div>
  );
}
