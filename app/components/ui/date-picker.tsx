'use client';

import React, { useMemo, useState } from 'react';
import { ReservationProps } from '@/app/types';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import {
  DateAfter,
  DateBefore,
  DateInterval,
  DateRange,
} from 'react-day-picker';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from './calendar';
import { format } from 'date-fns';
import { Button } from './button';

export default function DatePicker({
  reservations,
}: {
  reservations: ReservationProps;
}) {
  const [range, setRange] = useState<DateRange | undefined>(undefined);

  const disabledDays = useMemo(() => {
    let disabledDays:
      | (DateRange | DateInterval | DateBefore | DateAfter)[]
      | undefined;

    if (reservations && reservations.length > 0) {
      disabledDays = reservations?.map(({ during: { from, to } }) => {
        return { from: from, to: to };
      });
    } else {
      disabledDays = [];
    }

    disabledDays.push({ before: new Date() });
    return disabledDays;
  }, [reservations]);

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
            variant={'outline'}
            className={cn(
              'w-[300px] justify-start text-left font-normal',
              !range && 'text-muted-foreground',
            )}
          >
            <CalendarIcon className='mr-2 h-4 w-4' />
            {setDatePickerDisplay(range)}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0' align='start'>
          <Calendar
            initialFocus={true}
            mode='range'
            selected={range}
            onSelect={setRange}
            numberOfMonths={2}
            showOutsideDays={false}
            disabled={disabledDays}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
