import { GalleryProps } from './gallery';

export interface BookProps extends GalleryProps {
  name: string;
  description: string;
}

export default function Book({ name, description }: BookProps) {
  return <div></div>;
}
