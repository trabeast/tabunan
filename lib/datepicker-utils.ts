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
import { format, isAfter, isBefore } from 'date-fns';

export function rangeIncludeDate(range: DateRange, date: Date): boolean {
  return Boolean(
    range.from &&
      range.to &&
      isAfter(date, range.from) &&
      isBefore(date, range.to),
  );
}

export type DisabledDays =
  | (DateRange | DateInterval | DateBefore | DateAfter)[]
  | undefined;

function check<T>(
  this: DisabledDays,
  date: T,
  checker: (date: T, dateToCompare: Date) => boolean,
): boolean {
  return Boolean(
    this?.some((disabledDay) => {
      if (isDateRange(disabledDay)) {
        return (
          (disabledDay.from && checker(date, disabledDay.from)) ||
          (disabledDay.to && checker(date, disabledDay.to))
        );
      } else if (isDateInterval(disabledDay)) {
        return (
          checker(date, disabledDay.before) || checker(date, disabledDay.after)
        );
      } else if (isDateAfterType(disabledDay)) {
        return checker(date, disabledDay.after);
      } else if (isDateBeforeType(disabledDay)) {
        return checker(date, disabledDay.before);
      } else {
        return false;
      }
    }),
  );
}

export const checkForDateRange = check<DateRange>;
export const checkForDate = check<Date>;

export function setDatePickerDisplay(date: DateRange | undefined) {
  if (date?.from && date.to) {
    return `${format(date.from, 'LLL dd, y')} - ${format(
      date.to,
      'LLL dd, y',
    )}`;
  } else if (date?.from) {
    return format(date.from, 'LLL dd, y');
  } else {
    return 'Pick a date';
  }
}
