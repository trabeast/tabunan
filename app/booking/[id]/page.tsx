import { queryCabinWithImagesAndReservations } from '@/api/database';

interface BookingProps {
  id: number;
}

export default async function Page({
  params: { id },
}: {
  params: BookingProps;
}) {
  const cabinReservation = await queryCabinWithImagesAndReservations(id);

  return (
    <div>
      <div>Booking {cabinReservation.name}</div>
      <div>{cabinReservation.description}</div>
    </div>
  );
}
