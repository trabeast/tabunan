'use client';

import { Calendar } from '@/components/ui/calendar';
import { ReactNode } from 'react';
import { useSelectedCabinContext } from '@/hooks/contexts/selected-cabin/selected-cabin-context';

type CalendarPickerProps = { className?: string } & { children: ReactNode };

export default function CalendarPicker({
  className,
  children,
}: CalendarPickerProps) {
  const { reservation, setReservation, disabledDays } =
    useSelectedCabinContext();

  return (
    <Calendar
      className={className}
      initialFocus={true}
      mode={'range'}
      selected={reservation}
      numberOfMonths={1}
      showOutsideDays={false}
      disabled={disabledDays}
      onSelect={setReservation}
      footer={children}
    />
  );
}
