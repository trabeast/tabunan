'use client';

import React, { useMemo, useState } from 'react';
import { ReservationProps } from '@/app/types';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { DateRange } from 'react-day-picker';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from './calendar';
import { isAfter, isBefore } from 'date-fns';
import { Button } from './button';

import {
  checkForDate,
  checkForDateRange,
  DisabledDays,
  rangeIncludeDate,
  setDatePickerDisplay,
} from '@/lib/datepicker-utils';

type DatePickerProps = {
  className: string;
  reserved: ReservationProps;
};

export default function DatePicker({ className, reserved }: DatePickerProps) {
  const [reservation, setReservation] = useState<DateRange | undefined>(
    undefined,
  );

  const disabledDays = useMemo(
    () => disabledDaysMemo.apply(reserved),
    [reserved],
  );

  const handleSelect = (range: DateRange | undefined, selectedDate: Date) => {
    setReservation(() => {
      if (
        range &&
        checkForDateRange.call(disabledDays, range, rangeIncludeDate)
      ) {
        const date = selectedDate;

        if (range.to && checkForDate.call(disabledDays, date, isAfter)) {
          return { from: selectedDate, to: undefined };
        }

        if (range.from && checkForDate.call(disabledDays, date, isBefore)) {
          return { from: range.from, to: undefined };
        } else {
          return { from: range.to, to: undefined };
        }
      }
      return range;
    });
  };

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
            onSelect={handleSelect}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

function disabledDaysMemo(this: ReservationProps): DisabledDays {
  let disabledDays: DisabledDays;

  if (this && this.length > 0) {
    disabledDays = this?.map(({ during: { from, to } }) => {
      return { from: from, to: to };
    });
  } else {
    disabledDays = [];
  }

  disabledDays.push({ before: new Date() });
  return disabledDays;
}
