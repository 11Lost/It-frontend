// components/Header.js
import { UserCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-2xl font-bold text-zinc-600">Dashboard</span>
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            <Link href="/about" className="hover:text-blue-600 transition">About</Link>
            <Link href="/services" className="hover:text-blue-600 transition">Services</Link>
            <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
          </nav>

          {/* User Icon */}
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-gray-600 hover:text-blue-600 transition">
              <UserCircleIcon className="h-8 w-8" />
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}
