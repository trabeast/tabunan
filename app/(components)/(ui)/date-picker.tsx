'use client';

import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from './calendar';
import { Button } from './button';

import { setDatePickerDisplay } from '@/lib/datepicker-utils';
import { useBookContext } from '@/hooks/contexts/book/book-context';
type DatePickerProps = { className?: string };

export default function DatePicker({ className }: DatePickerProps) {
  const { reservation, setReservation, disabledDays } = useBookContext();

  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={'outline'}
            className={cn(
              'w-[300px] justify-start text-left font-normal',
              !reservation && 'text-muted-foreground',
            )}
          >
            <CalendarIcon className='mr-2 h-4 w-4' />
            {setDatePickerDisplay(reservation)}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0' align='start'>
          <Calendar
            initialFocus={true}
            mode='range'
            selected={reservation}
            numberOfMonths={2}
            showOutsideDays={false}
            disabled={disabledDays}
            onSelect={setReservation}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
