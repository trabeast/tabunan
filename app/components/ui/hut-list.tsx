import Hut, { HutProps } from '@/components/ui/hut';

export interface HutsProps {
  huts: HutProps[];
}

export default function HutList({ huts }: HutsProps) {
  return (
    <div className={'grid lg:grid-cols-2 sm:grid-cols-1 gap-5 content-center'}>
      {huts.map((hut) => {
        return (
          <Hut
            key={hut.id}
            id={hut.id}
            name={hut.name}
            description={hut.description}
            images={hut.images}
          ></Hut>
        );
      })}
    </div>
  );
}
