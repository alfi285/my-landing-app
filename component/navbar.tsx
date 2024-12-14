import React from 'react';
import Link from 'next/link';

type NavbarProps = {
  brand: string;
};

const Navbar: React.FC<NavbarProps> = ({ brand }) => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-xl">{brand}</div>
        <ul className="flex space-x-6">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/careers">Careers</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/support">Support</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
