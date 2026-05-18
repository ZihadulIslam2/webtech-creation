'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { name: 'Corporate', href: '/presentations-powerpoint/corporate' },
    {
      name: 'Stratégie et finance',
      href: '/presentations-powerpoint/strategie-et-finance',
    },
    {
      name: 'Événementielle',
      href: '/presentations-powerpoint/evenementielle',
    },
    { name: 'Commerciale', href: '/presentations-powerpoint/commerciale' },
    { name: 'Investisseurs', href: '/presentations-powerpoint/investisseurs' },
    {
      name: 'Communication interne',
      href: '/presentations-powerpoint/communication-interne',
    },
    { name: "Appel d'offres", href: '/presentations-powerpoint/appel-doffres' },
    { name: 'Template', href: '/presentations-powerpoint/template' },
  ];

  const complementaryServices = [
    {
      name: 'Conseil éditorial',
      href: '/services-complementaires/conseil-editorial',
    },
    {
      name: 'Formations PowerPoint',
      href: '/services-complementaires/formation-powerpoint',
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
      <div className="max-w-full px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <svg
              width="82"
              height="19"
              viewBox="0 0 82 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-auto"
            >
              <title>mprez logo</title>
              <path
                d="M37.2024 4.25023C36.8972 3.3702 36.4621 2.62054 35.8972 1.99474C35.3388 1.36894 34.6634 0.880032 33.8842 0.528019C33.105 0.176006 32.2349 0 31.2738 0C30.1829 0 29.2154 0.286825 28.3647 0.866995C27.5141 1.44716 26.8518 2.21638 26.3777 3.18767V0.352013H23.9297V18.8783H26.5141C26.4622 18.3242 26.4232 17.7832 26.4037 17.2356C26.3842 16.6945 26.3777 16.1535 26.3777 15.6189V11.2057C26.8518 12.1575 27.5076 12.9202 28.3647 13.4873C29.2154 14.0544 30.1764 14.3413 31.2479 14.3413C32.1894 14.3413 33.0531 14.1653 33.8453 13.8132C34.631 13.4612 35.3063 12.9723 35.8712 12.3465C36.4362 11.7207 36.8712 10.9646 37.1894 10.078C37.5076 9.19145 37.6634 8.22015 37.6634 7.17063C37.6634 6.12111 37.5076 5.13026 37.2024 4.25023Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-sm text-gray-400">#file:logo.jpg</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="text-white hover:text-lime-400 transition-colors py-2">
                Services
              </button>
              {/* Dropdown */}
              <div className="absolute left-0 mt-0 w-64 bg-black/95 border border-white/10 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pt-2">
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-lime-400 mb-3">
                    Design de présentation
                  </h3>
                  <div className="space-y-2 mb-4">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block text-sm text-gray-300 hover:text-white transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                  <hr className="border-white/10 my-3" />
                  <h3 className="text-xs font-semibold text-gray-400 uppercase mb-3">
                    Services complémentaires
                  </h3>
                  <div className="space-y-2">
                    {complementaryServices.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block text-sm text-gray-300 hover:text-white transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="text-white hover:text-lime-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="/portfolio"
              className="text-white hover:text-lime-400 transition-colors"
            >
              Portfolios
            </Link>
            <Link
              href="/pricing"
              className="text-white hover:text-lime-400 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className="text-white hover:text-lime-400 transition-colors"
            >
              Blog
            </Link>
          </div>

          {/* Contact Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link
              href="/contact"
              className="px-6 py-2 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors hidden sm:inline-block"
            >
              Contact
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white hover:text-lime-400 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-white/10">
            <div className="py-2">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full text-left px-4 py-2 text-white hover:text-lime-400 transition-colors"
              >
                Services
              </button>
              {servicesOpen && (
                <div className="pl-4 space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block text-sm text-gray-300 hover:text-white transition-colors py-1"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/portfolio"
              className="block px-4 py-2 text-white hover:text-lime-400 transition-colors"
            >
              Portfolios
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-white hover:text-lime-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="/pricing"
              className="block px-4 py-2 text-white hover:text-lime-400 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className="block px-4 py-2 text-white hover:text-lime-400 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 text-white hover:text-lime-400 transition-colors"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
