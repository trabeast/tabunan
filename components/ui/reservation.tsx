'use client';

import React from 'react';
import { ReservationProps } from '@/app/types';

export function Reservation({ reservations }: ReservationProps) {
  return (
    <>
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
