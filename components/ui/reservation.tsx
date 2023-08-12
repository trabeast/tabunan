'use client';

import React from 'react';
import { CabinProps, ReservationProps } from '@/app/types';

export function Reservation({
  id,
  reservations,
}: Pick<CabinProps, 'id'> & ReservationProps) {
  return (
    <>
      <div>Reservation {id}</div>
      {reservations?.map(({ id, during: { from, to } }) => {
        return (
          <div key={id}>
            {from.toDateString()} - {to.toDateString()}
          </div>
        );
      })}
    </>
  );
}
