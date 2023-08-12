import { CabinProps } from '@/app/types';
import React from 'react';
import { queryReservationsByCabinId } from '@/api/database';

export async function Reservation({ id }: Pick<CabinProps, 'id'>) {
  const { reservations } = await queryReservationsByCabinId(id);

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
