'use client';

import React, { useMemo, useState } from 'react';
import { ReservationProps } from '@/app/types';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import {
  DateAfter,
  DateBefore,
  DateInterval,
  DateRange,
  isDateAfterType,
  isDateBeforeType,
  isDateInterval,
  isDateRange,
} from 'react-day-picker';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from './calendar';
import { format, isAfter, isBefore } from 'date-fns';
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
  const rangeIncludeDate = (range: DateRange, date: Date): boolean =>
    Boolean(
      range.from &&
        range.to &&
        isAfter(date, range.from) &&
        isBefore(date, range.to),
    );

  const handleSelect = (range: DateRange | undefined, selectedDate: Date) => {
    setRange(() => {
      const isIncluded =
        range &&
        disabledDays?.some((date) => {
          if (isDateRange(date)) {
            return (
              (date.from && rangeIncludeDate(range, date.from)) ||
              (date.to && rangeIncludeDate(range, date.to))
            );
          } else if (isDateInterval(date)) {
            return (
              rangeIncludeDate(range, date.before) ||
              rangeIncludeDate(range, date.after)
            );
          } else if (isDateAfterType(date)) {
            return rangeIncludeDate(range, date.after);
          } else if (isDateBeforeType(date)) {
            return rangeIncludeDate(range, date.before);
          } else {
            return rangeIncludeDate(range, date);
          }
        });

      const isBeforeSelectedDate =
        range &&
        disabledDays?.some((date) => {
          if (isDateRange(date)) {
            return (
              (date.from && isBefore(selectedDate, date.from)) ||
              (date.to && isBefore(selectedDate, date.to))
            );
          } else if (isDateInterval(date)) {
            return (
              isBefore(selectedDate, date.before) ||
              isBefore(selectedDate, date.after)
            );
          } else if (isDateAfterType(date)) {
            return isBefore(selectedDate, date.after);
          } else if (isDateBeforeType(date)) {
            return isBefore(selectedDate, date.before);
          } else {
            return isBefore(selectedDate, date);
          }
        });

      const isAfterSelectedDate =
        range &&
        disabledDays?.some((date) => {
          if (isDateRange(date)) {
            return (
              (date.from && isAfter(selectedDate, date.from)) ||
              (date.to && isAfter(selectedDate, date.to))
            );
          } else if (isDateInterval(date)) {
            return (
              isAfter(selectedDate, date.before) ||
              isAfter(selectedDate, date.after)
            );
          } else if (isDateAfterType(date)) {
            return isAfter(selectedDate, date.after);
          } else if (isDateBeforeType(date)) {
            return isAfter(selectedDate, date.before);
          } else {
            return isAfter(selectedDate, date);
          }
        });

      if (isIncluded) {
        if (range.to && isAfterSelectedDate) {
          return { from: selectedDate, to: undefined };
        }

        if (range.from && isBeforeSelectedDate) {
          return { from: range.from, to: undefined };
        } else {
          return { from: range.to, to: undefined };
        }
      }
      return range;
    });
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
            onSelect={handleSelect}
            numberOfMonths={2}
            showOutsideDays={false}
            disabled={disabledDays}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
