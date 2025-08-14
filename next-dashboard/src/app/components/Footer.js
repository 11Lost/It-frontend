// components/Footer.js
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid gap-8 md:grid-cols-3">
          
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Dashboard</h2>
            <p className="text-gray-400">
              Building modern web experiences with passion and precision.  
              Your success is our mission.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-400 transition">
                <FaTwitter />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-700 transition">
                <FaLinkedinIn />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-pink-500 transition">
                <FaInstagram />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Dashboard. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
