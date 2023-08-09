import client from '@/api/apollo-client';
import { CabinProps } from '@/components/ui/cabin';
import { DateRange } from 'react-day-picker';
import cabinReservationQuery, {
  CabinReservationQueryDto,
} from '@/lib/queries/cabin-reservation-query';

interface BookingProps {
  id: number;
}

export interface CabinReservation extends CabinProps {
  reservations: {
    id: string;
    during: DateRange;
  }[];
}

export default async function Page({
  params: { id },
}: {
  params: BookingProps;
}) {
  const { data } = await client.query({
    query: cabinReservationQuery,
    variables: { id },
  });

  const cabinReservation = CabinReservationQueryDto(data);

  return (
    <div>
      <div>Booking {cabinReservation.name}</div>
      <div>{cabinReservation.description}</div>
    </div>
  );
}
