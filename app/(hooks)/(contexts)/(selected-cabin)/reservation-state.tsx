import { useState } from 'react';
import { DateRange } from 'react-day-picker';
import {
  checkForDate,
  checkForDateRange,
  DisabledDays,
  rangeIncludeDate,
} from '@/lib/datepicker-utils';
import { isAfter, isBefore } from 'date-fns';

export default function useReservationState(disabledDays: DisabledDays) {
  const [reservation, setReservation] = useState<DateRange | undefined>(
    undefined,
  );

  function handleSelect(range: DateRange | undefined, selectedDate: Date) {
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
  }

  return {
    reservation,
    setReservation: handleSelect,
  };
}
