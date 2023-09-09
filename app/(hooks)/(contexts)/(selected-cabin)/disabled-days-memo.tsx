import { useMemo } from 'react';
import { ReservationProps } from '@/app/types';
import { DisabledDays } from '@/lib/datepicker-utils';

export default function useDisabledDaysMemo(
  reserved: ReservationProps[] | undefined,
): DisabledDays {
  return useMemo(() => disabledDaysMemo.apply(reserved), [reserved]);
}

function disabledDaysMemo(this: ReservationProps[] | undefined): DisabledDays {
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
