'use client';

import React, { useState } from 'react';
import { ReservationProps } from '@/app/types';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { DateRange } from 'react-day-picker';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';

export default function DatePicker({ reservations }: ReservationProps) {
  const disabledDays = reservations?.map(({ during: { from, to } }) => {
    return { from: from, to: to };
  });

  const [date, setDate] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });

  const setDatePickerDisplay = (date: DateRange | undefined) => {
    if (date?.from && date.to) {
      return (
        <>
          {format(date.from, 'LLL dd, y')} - {format(date.to, 'LLL dd, y')}
        </>
      );
    } else if (date?.from) {
      return format(date.from, 'LLL dd, y');
    } else {
      return <span>Pick a date</span>;
    }
  };

  return (
    <div className={cn('grid gap-2')}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id='date'
            variant={'outline'}
            className={cn(
              'w-[300px] justify-start text-left font-normal',
              !date && 'text-muted-foreground',
            )}
          >
            <CalendarIcon className='mr-2 h-4 w-4' />
            {setDatePickerDisplay(date)}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0' align='start'>
          <Calendar
            initialFocus
            mode='range'
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            showOutsideDays={false}
            disabled={disabledDays}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
