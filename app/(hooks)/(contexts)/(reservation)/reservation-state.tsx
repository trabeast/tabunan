import { useState } from 'react';
import { DateRange } from 'react-day-picker';
import {
  checkForDate,
  checkForDateRange,
  DisabledDays,
  rangeIncludeDate,
} from '@/lib/datepicker-utils';
import { isAfter, isBefore } from 'date-fns';

export type ReservationStateValue = {
  reservation: DateRange | undefined;
  setReservation: (
    range: DateRange | undefined,
    selectedDate: Date | undefined,
  ) => void;
};

export default function useReservationState(
  disabledDays: DisabledDays,
): ReservationStateValue {
  const [reservation, setReservation] = useState<DateRange | undefined>(
    undefined,
  );

  function handleSelect(
    range: DateRange | undefined,
    selectedDate: Date | undefined,
  ) {
    setReservation(() => {
      if (
        range &&
        checkForDateRange.call(disabledDays, range, rangeIncludeDate)
      ) {
        const date = selectedDate;

        if (
          range.to &&
          date &&
          checkForDate.call(disabledDays, date, isAfter)
        ) {
          return { from: selectedDate, to: undefined };
        }

        if (
          range.from &&
          date &&
          checkForDate.call(disabledDays, date, isBefore)
        ) {
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
