import { AspectRatio } from './aspect-ratio';
import Image from 'next/image';
import { Button } from './button';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { cva, VariantProps } from 'class-variance-authority';
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

const buttonVariants = cva('absolute z-10 top-1/2', {
  variants: {
    variant: {
      left: '-left-5',
      right: '-right-5',
    },
  },
  defaultVariants: {
    variant: 'left',
  },
});

interface ChevronButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

function ChevronButton({ variant }: ChevronButtonProps) {
  return (
    <Button
      asChild={true}
      variant={'ghost'}
      size={'icon'}
      className={cn(buttonVariants({ variant }))}
    >
      {variant === 'left' ? (
        <ChevronLeftIcon className={'h-4 w-4'} />
      ) : (
        <ChevronRightIcon className={'h-4 w-4'} />
      )}
    </Button>
  );
}

type ImageProps = {
  src: string;
  alt: string;
  width: number;
  id: number;
  height: number;
};

export type GalleryProps = {
  images: ImageProps[] | undefined;
  children?: ReactNode;
};

export default function Gallery({ images, children }: GalleryProps) {
  return (
    <div className={'relative'}>
      <div className={'mb-5'}>{children}</div>
      {images && images.length > 0 ? (
        <>
          {images.map((image) => {
            return (
              <AspectRatio key={image.id} ratio={16 / 9}>
                <Image src={image.src} alt={image.alt} fill></Image>
              </AspectRatio>
            );
          })}
          {images.length > 1 && (
            <>
              <ChevronButton variant={'left'} />
              <ChevronButton variant={'right'} />
            </>
          )}
        </>
      ) : (
        <em>No Images</em>
      )}
    </div>
  );
}
