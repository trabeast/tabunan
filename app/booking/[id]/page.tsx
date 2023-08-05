export default function Page({ params }: { params: { id: string } }) {
  return <div>Booking {params.id}</div>;
}
