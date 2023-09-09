'use client';

import { ReactNode } from 'react';
import CalendarPicker from '@/components/ui/calendar-picker';
import { format } from 'date-fns';
import { useSelectedCabinContext } from '@/hooks/contexts/selected-cabin/selected-cabin-context';

export default function BookForm({ children }: { children: ReactNode }) {
  const { reservation } = useSelectedCabinContext();

  const formId = 'book-form-id';

  return (
    <form className={'mx-5'} id={formId}>
      <label htmlFor='name'>{children}</label>
      <CalendarPicker>
        <input
          id={formId}
          type='text'
          onChange={() => console.log('To Changed!')}
          value={`${displayDate(reservation?.from)} - ${displayDate(
            reservation?.to,
          )} `}
        />
      </CalendarPicker>
    </form>
  );
}

function displayDate(date: Date | undefined) {
  return `${date ? format(date, 'y-MM-dd') : ''}`;
}
