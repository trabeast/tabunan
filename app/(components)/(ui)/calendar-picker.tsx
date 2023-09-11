'use client';

import { Calendar } from '@/components/ui/calendar';
import { ReactNode } from 'react';
import { useSelectedCabinContext } from '@/hooks/contexts/selected-cabin/selected-cabin-context';
import { useReservationContext } from '@/hooks/contexts/reservation/reservation-context';
import { DateRange } from 'react-day-picker';

type CalendarPickerProps = {
  className?: string;
  children?: ReactNode;
};

export default function CalendarPicker({
  className,
  children,
}: CalendarPickerProps) {
  const { disabledDays } = useSelectedCabinContext();
  const { reservation, setReservation } = useReservationContext();

  function handleSelect(range: DateRange | undefined, selectedDate: Date) {
    setReservation(range, selectedDate);
  }

  return (
    <Calendar
      className={className}
      initialFocus={true}
      mode={'range'}
      selected={reservation}
      numberOfMonths={1}
      showOutsideDays={false}
      disabled={disabledDays}
      onSelect={handleSelect}
      footer={children}
    />
  );
}
