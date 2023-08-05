import { GalleryProps } from '@/components/ui/gallery';

export interface BookProps extends GalleryProps {
  name: string;
  description: string;
}

export default function Book({ name, description }: BookProps) {
  return <div></div>;
}
