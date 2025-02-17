import Link from 'next/link';

const menuItems = [
  { label: 'HOME', path: '/' },
  { label: 'CONTACT', path: '/contact' },
];

export default function Header() {
  return (
    <section className="fixed top-4 z-10 flex justify-center space-x-24 lg:w-11/12 bg-black/50 border border-gray-700 p-6 rounded-lg self-center backdrop-blur-md">
      {menuItems.map((item, i) => (
        <Link
          key={i}
          href={item.path}
          className="relative w-1/2 text-lg text-gray-300 hover:text-white text-center group z-10 transition-colors duration-500"
        >
          {item.label}
          <div className="absolute -top-8 -z-10 w-full h-24 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1)_0%,_rgba(0,0,0,0)_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Link>
      ))}
    </section>
  );
}
