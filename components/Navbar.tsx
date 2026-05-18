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
            <img
              src="/images/logo.jpg"
              alt="logo"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
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
