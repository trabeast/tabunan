'use client';

import { Calendar } from '@/components/ui/calendar';
import { ReactNode } from 'react';
import { useBookContext } from '@/hooks/contexts/book/book-context';

type CalendarPickerProps = { className?: string } & { children: ReactNode };

export default function CalendarPicker({
  className,
  children,
}: CalendarPickerProps) {
  const { reservation, setReservation, disabledDays } = useBookContext();

  return (
    <Calendar
      className={className}
      initialFocus={true}
      mode={'range'}
      selected={reservation}
      numberOfMonths={2}
      showOutsideDays={false}
      disabled={disabledDays}
      onSelect={setReservation}
      footer={children}
    />
  );
}
