import { ReservationProps } from '@/app/types';
import DatePicker from '@/components/ui/date-picker';
import { ReactNode } from 'react';

type BookFormProps = {
  reservedDates: ReservationProps;
} & { children: ReactNode };

export default function BookForm({ reservedDates, children }: BookFormProps) {
  return (
    <form className={'mx-5'}>
      <label htmlFor='name'>{children}</label>
      <DatePicker className={'mt-5'} reserved={reservedDates} />
    </form>
  );
}
