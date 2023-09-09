import Link from 'next/link';

export default function Navbar() {
  return (
    <nav
      className={
        'sticky top-0 z-50 mb-5 px-5 font-bold align-middle text-white text-lg' +
        ' bg-primary text-accent'
      }
    >
      <Link href='/'>Tabunan</Link>
    </nav>
  );
}
