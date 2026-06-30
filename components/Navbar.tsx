'use client';

import Link from 'next/link';
import { useState } from 'react';
import { services } from '@/data/services';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { 
      name: 'Services', 
      href: '#',
      subLinks: services.map(s => ({ name: s.title, href: s.href, icon: s.icon, description: s.tagline }))
    },
    { name: 'Portfolios', href: '/#portfolios' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#061F21]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/#home" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center">
              <svg className="w-9 h-9 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28 12C28 12 14 12 14 20C14 28 28 28 28 28" stroke="url(#cGrad)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                  <linearGradient id="cGrad" x1="14" y1="12" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#c084fc" />
                    <stop offset="1" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="text-white font-black text-2xl tracking-tight group-hover:text-purple-300 transition-colors">
              Crafix
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              if (link.subLinks) {
                return (
                  <div
                    key={link.name}
                    className="relative group py-2"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <button
                      className="flex items-center gap-1.5 text-gray-300 hover:text-emerald-400 font-medium tracking-wide transition-colors duration-200 text-sm focus:outline-none"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      <span>{link.name}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Dropdown Card Grid */}
                    <div
                      className={`absolute left-0 mt-2 w-[600px] rounded-2xl border border-white/10 bg-[#061F21] backdrop-blur-lg shadow-2xl p-4 transition-all duration-200 ${
                        isDropdownOpen
                          ? 'opacity-100 translate-y-0 pointer-events-auto'
                          : 'opacity-0 translate-y-2 pointer-events-none'
                      }`}
                    >
                      <div className="grid grid-cols-2 gap-2">
                        {link.subLinks.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="flex items-start gap-3 p-3 rounded-xl text-gray-300 hover:text-emerald-400 hover:bg-white/5 transition-all group"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <span className="text-xl shrink-0 mt-0.5">{sub.icon}</span>
                            <div>
                              <span className="block text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                                {sub.name}
                              </span>
                              <span className="block text-xs text-gray-400 mt-0.5 leading-snug">
                                {sub.description}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-emerald-400 font-medium tracking-wide transition-colors duration-200 text-sm"
                >
                  {link.name}
                </Link>
              );
            })}
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
              {navLinks.map((link) => {
                if (link.subLinks) {
                  return (
                    <div key={link.name} className="flex flex-col px-4">
                      <button
                        onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                        className="flex justify-between items-center text-gray-300 hover:text-emerald-400 font-medium transition-colors py-2 text-left w-full"
                      >
                        <span>{link.name}</span>
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${isMobileDropdownOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div
                        className={`pl-4 flex flex-col space-y-2 mt-1 transition-all duration-200 ${
                          isMobileDropdownOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                        }`}
                      >
                        {link.subLinks.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => {
                              setIsOpen(false);
                              setIsMobileDropdownOpen(false);
                            }}
                            className="flex items-start gap-3 p-3 rounded-xl text-gray-400 hover:text-emerald-400 hover:bg-white/5 transition-all"
                          >
                            <span className="text-lg shrink-0">{sub.icon}</span>
                            <div>
                              <span className="text-sm font-bold text-white">{sub.name}</span>
                              <span className="block text-xs text-gray-500 mt-0.5">{sub.description}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 text-gray-300 hover:text-emerald-400 font-medium transition-colors"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
