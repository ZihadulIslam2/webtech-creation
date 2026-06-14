'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolios', href: '#portfolios' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#061F21]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center">
              <svg className="w-9 h-9 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Left Wing of 'W' */}
                <path d="M8 12L15 28L20 18" stroke="url(#grad1)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
                {/* Right Wing of 'W' */}
                <path d="M20 18L25 28L32 12" stroke="url(#grad2)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                  <linearGradient id="grad1" x1="8" y1="12" x2="20" y2="28" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#c084fc" />
                    <stop offset="1" stopColor="#a855f7" />
                  </linearGradient>
                  <linearGradient id="grad2" x1="20" y1="18" x2="32" y2="28" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#a855f7" />
                    <stop offset="1" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="text-white font-black text-2xl tracking-tight group-hover:text-purple-300 transition-colors">
              Webtech
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-emerald-400 font-medium tracking-wide transition-colors duration-200 text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Client Login & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Link
              href="#login"
              className="px-6 py-2.5 bg-white text-[#061F21] rounded-full font-bold text-sm hover:bg-gray-100 transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              Client Login
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white hover:text-emerald-400 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 pt-2 border-t border-white/10 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-gray-300 hover:text-emerald-400 font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
