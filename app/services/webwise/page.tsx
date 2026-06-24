'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectSlide {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tags: string[];
  description: string;
  metrics: { label: string; value: string }[];
  accentColor: string;
}

export default function WebWiseEcommercePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [openFaqId, setOpenFaqId] = useState<number | null>(0);

  const storefronts: ProjectSlide[] = [
    {
      id: 'aura-cosmetics',
      title: 'Aura Cosmetics Shop',
      subtitle: 'Modern Clean Beauty Experience',
      image: '/images/project_jack_creative.png',
      tags: ['Customizable Design', 'Responsive & Mobile-First', 'Performance Optimization'],
      description: 'A custom-built aesthetic experience featuring high-definition media rendering, instant filtering, and responsive structures that look beautiful on any screen.',
      metrics: [
        { label: 'Conversion Rate', value: '4.8%' },
        { label: 'Mobile Conversion', value: '+52%' },
        { label: 'Page Load Grade', value: '99/100' }
      ],
      accentColor: 'from-[#a855f7] to-[#ec4899]'
    },
    {
      id: 'nexa-shop',
      title: 'Nexa Fintech Hub',
      subtitle: 'Scalable Digital Goods Delivery',
      image: '/images/project_city_online.png',
      tags: ['Seamless Integration', 'Scalability & Security', 'Inventory & CRM'],
      description: 'A bulletproof platform integrated with real-time stock syncs, automated keys generation, and Stripe multi-currency processing gateways.',
      metrics: [
        { label: 'Checkout Time', value: '1.2s' },
        { label: 'Uptime Reliability', value: '99.99%' },
        { label: 'AOV Lift', value: '+18%' }
      ],
      accentColor: 'from-[#00df89] to-[#06b6d4]'
    }
  ];

  const valueDials = [
    { title: 'Performance Goals', value: '99/100', percentage: '99%', desc: 'Optimized lighthouse index' },
    { title: 'Conversion Rate', value: '4.8%', percentage: '88%', desc: 'Optimized buyer pathing' },
    { title: 'Average Order Value', value: '+18%', percentage: '72%', desc: 'Upsell & bundling logic' },
    { title: 'Customer Lifetime Value', value: '+30%', percentage: '80%', desc: 'Retention marketing tools' }
  ];

  const faqs = [
    {
      id: 0,
      question: 'What is Customizable Design in eCommerce?',
      answer: 'Customizable design means we build your storefront layout from scratch rather than relying on bloated standard templates. Every spacing, font selection, interactive button hover state, and page sequence is engineered to highlight your products and match your exact brand identity.'
    },
    {
      id: 1,
      question: 'How do you handle API and Inventory sync integrations?',
      answer: 'We connect your storefront directly with modern ERP, CRM, and inventory databases (like Salesforce, HubSpot, SAP, or custom REST APIs). Updates to stock levels, ordering details, and shipping parameters synchronize instantly, eliminating overselling and administrative errors.'
    },
    {
      id: 2,
      question: 'What measures are taken for checkout security?',
      answer: 'We design all checkout sequences to support PCI-DSS compliant payment gateways, tokenized data handling, and secure TLS connections. We support instant secure wallets (Apple Pay, Google Pay, Stripe Connect) so transaction credentials never hit your database.'
    },
    {
      id: 3,
      question: 'How does WebWise optimize mobile checkout conversions?',
      answer: 'We design checkouts using mobile-first paradigms. By removing unnecessary input fields, introducing auto-fill capabilities, implementing inline error handling, and making CTA buttons large and thumb-friendly, we minimize cart abandonment rates.'
    }
  ];

  return (
    <main className="bg-black min-h-screen text-white selection:bg-[#00df89] selection:text-black antialiased">
      
      {/* 1. Header / Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020d0e]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">
            {/* Logo: WebWise */}
            <Link href="/services/webwise" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#a855f7] to-[#00df89] p-[2px] transition-transform group-hover:scale-105">
                <div className="w-full h-full bg-[#020d0e] rounded-[10px] flex items-center justify-center font-black text-white text-base">
                  W
                </div>
              </div>
              <span className="text-white font-black text-2xl tracking-tight transition-colors group-hover:text-[#00df89]">
                WebWise
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'Services', 'Portfolio', 'About Us', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`/#${link.toLowerCase().replace(/\s+/g, '')}`}
                  className="text-gray-300 hover:text-[#00df89] font-medium tracking-wide transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Right Sign Up button */}
            <div className="flex items-center space-x-4">
              <Link
                href="#signup"
                className="px-6 py-2.5 bg-[#00df89] text-[#020d0e] rounded-full font-bold text-sm hover:bg-[#00c578] transition-all hover:shadow-[0_0_20px_rgba(0,223,137,0.3)]"
              >
                Sign Up
              </Link>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-white hover:text-[#00df89] transition-colors"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu dropdown */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 pt-2 border-t border-white/10 bg-[#020d0e] px-6">
            <div className="flex flex-col space-y-4">
              {['Home', 'Services', 'Portfolio', 'About Us', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`/#${link.toLowerCase().replace(/\s+/g, '')}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-300 hover:text-[#00df89] font-medium transition-colors text-base"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* 2. Hero Section */}
      <section className="relative min-h-screen bg-[#020d0e] pt-36 pb-20 overflow-hidden flex items-center border-b border-white/5">
        {/* Glowing backgrounds */}
        <div className="absolute top-1/4 left-1/10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/10 w-[450px] h-[450px] bg-purple-500/5 rounded-full blur-[130px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left side column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="inline-flex rounded-full border border-[#00df89]/20 bg-[#00df89]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#00df89] mb-6">
                WebWise eCommerce
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
                Professional eCommerce Website Design &amp;{' '}
                <span className="bg-gradient-to-r from-[#00df89] via-emerald-200 to-purple-400 bg-clip-text text-transparent">
                  Development
                </span>
              </h1>
              <p className="text-gray-300 text-base sm:text-lg mt-6 leading-relaxed max-w-xl font-light">
                Empower your business with modular designs, lightning-speed rendering networks, and automated checkout engines designed to skyrocket your brand globally.
              </p>

              {/* Get a Quote Today CTA */}
              <div className="mt-10 flex flex-wrap gap-4 items-center">
                <Link
                  href="#quote-form"
                  className="inline-flex items-center px-8 py-4 bg-[#00df89] hover:bg-[#00c578] text-black font-extrabold text-base rounded-full transition-all hover:scale-105 shadow-[0_10px_30px_rgba(0,223,137,0.35)] group"
                >
                  <svg className="w-5 h-5 mr-3 stroke-[3] transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                  <span>Get a Quote Today</span>
                </Link>
                
                <span className="text-gray-400 text-xs font-semibold pl-2">
                  ✓ Free Discovery Consultation Included
                </span>
              </div>
            </div>

            {/* Right side graphic: Floating purple t-shirt mockup */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[400px] aspect-square rounded-[3.5rem] border border-white/10 bg-gradient-to-tr from-[#020d0e] to-[#0d2a2c] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.8)] overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,223,137,0.15),transparent_70%)] pointer-events-none group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

                <div className="relative w-full h-full flex flex-col justify-between items-center z-10">
                  <div className="w-full flex justify-between items-center bg-black/50 border border-white/5 rounded-xl px-4 py-2.5 backdrop-blur-md">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-500/80" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                      <div className="w-2 h-2 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-[9px] text-[#00df89] font-mono">webwise.store/checkout</span>
                    <span className="w-3 h-3 rounded-full bg-purple-500" />
                  </div>

                  {/* Purple T-Shirt SVG */}
                  <div className="relative flex items-center justify-center flex-1 w-full my-6">
                    <div className="absolute w-44 h-44 bg-purple-500/10 rounded-full filter blur-2xl animate-pulse" />
                    <div className="w-36 h-36 rounded-2xl bg-[#041a1b] border border-emerald-400/25 flex items-center justify-center shadow-xl">
                      <svg className="w-20 h-20 text-purple-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.6)] animate-bounce" style={{ animationDuration: '3.5s' }} viewBox="0 0 100 100" fill="currentColor">
                        <path d="M30 15c-3 0-5 2-6 5l-10 18c-1 2 0 4 2 5l10 5c2 1 4 0 5-2l4-8v37c0 3 2 5 5 5h20c3 0 5-2 5-5V38l4 8c1 2 3 3 5 2l10-5c2-1 3-3 2-5L76 20c-1-3-3-5-6-5h-8c-2 0-3 2-4 3a8 8 0 0 1-16 0c-1-1-2-3-4-3h-8z" />
                      </svg>
                    </div>
                  </div>

                  {/* Add to bag bar */}
                  <div className="w-full bg-black/60 border border-white/5 rounded-xl p-3 backdrop-blur-md flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Premium Gear</span>
                      <span className="text-xs font-bold text-white">Creative Fit Tee</span>
                    </div>
                    <span className="bg-[#00df89]/10 text-[#00df89] text-[10px] font-black rounded px-2 py-0.5">$24.99</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. We Solve the Toughest eCommerce Hurdles */}
      <section className="relative py-20 md:py-28 bg-black overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#00df89]">
              Overcoming Barriers
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              We Solve the Toughest{' '}
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-[#00df89] bg-clip-text text-transparent">
                eCommerce Hurdles
              </span>
            </h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base">
              Standard site builders suffer from poor mobile loading speeds and fragile checkout pipelines. We resolve these vulnerabilities at the structural layer.
            </p>
          </div>

          {/* Three Columns Challenges & Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                challenge: 'High Cart Abandonment',
                solution: 'Swift Checkout Pipelines',
                desc: 'Standard multi-step forms fatigue customers. We introduce fields-optimized checkout streams, instant smart auto-fills, and digital card token support.',
                accent: 'border-emerald-500/20 text-[#00df89]',
                icon: '🛒'
              },
              {
                challenge: 'Slow Mobile Performance',
                solution: 'Lightweight Serverless Frameworks',
                desc: 'Web page delays cause conversions to drop. We build on headless rendering frameworks that serve layouts under 1.2s, satisfying core web vitals.',
                accent: 'border-purple-500/20 text-purple-400',
                icon: '⚡'
              },
              {
                challenge: 'Fragile Stock Tracking',
                solution: 'Real-time ERP & CRM Syncing',
                desc: 'Over-selling items destroys customer loyalty. We synchronize stock databases and shipment logs via secure, low-latency API handlers.',
                accent: 'border-cyan-500/20 text-cyan-400',
                icon: '🔄'
              }
            ].map((col, idx) => (
              <div
                key={idx}
                className="bg-[#051716]/40 border border-white/5 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 group shadow-2xl"
              >
                <div>
                  <div className="w-12 h-12 bg-black/50 border border-white/10 rounded-2xl flex items-center justify-center text-2xl mb-6">
                    {col.icon}
                  </div>
                  <span className="text-xs text-gray-500 uppercase tracking-widest font-black">Challenge</span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-4">{col.challenge}</h3>
                  <span className={`text-xs uppercase tracking-widest font-black ${col.accent.split(' ')[1]}`}>Our Solution</span>
                  <h4 className="text-white font-extrabold text-sm sm:text-base mt-1">{col.solution}</h4>
                  <p className="text-gray-400 text-xs sm:text-sm mt-3 leading-relaxed">{col.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Our eCommerce Development Services? */}
      <section className="relative py-20 md:py-28 bg-[#020d0e] overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left side explanations */}
            <div className="lg:col-span-6 flex flex-col justify-center text-left">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#00df89] mb-4">
                Quality Engineering
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                Why Choose Our eCommerce Development Services?
              </h2>
              <p className="text-gray-300 mt-6 text-sm sm:text-base leading-relaxed font-light">
                Our approach delivers customizable UX, smooth third-party APIs, and fully responsive layouts that function perfectly on desktop and mobile browsers alike.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  { title: 'Modular Customizable Frontends', text: 'Tailored code elements built specifically for your catalog structure, ensuring zero design compromises.' },
                  { title: 'API-Driven Architecture', text: 'Clean microservice integrations for CRM, POS, logistics, and multi-region custom tax modules.' },
                  { title: 'Secure Payment Infrastructures', text: 'Fully compliant integrations with trusted gateways guaranteeing card detail tokenization and transaction safety.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-[#00df89]/10 border border-[#00df89]/30 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-[#00df89]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-extrabold text-sm sm:text-base">{item.title}</h4>
                      <p className="text-gray-400 text-xs sm:text-sm mt-1">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side Laptop visual */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[450px] aspect-[4/3] flex flex-col justify-end items-center">
                
                {/* Laptop display */}
                <div className="w-11/12 aspect-[1.6] rounded-t-2xl border-4 border-slate-700 bg-black relative flex flex-col p-2 overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none z-10" />
                  
                  {/* Laptop web page contents */}
                  <div className="relative w-full h-full bg-[#041a1b] rounded-lg p-2.5 flex flex-col justify-between z-0">
                    <div className="flex justify-between items-center border-b border-white/5 pb-1">
                      <span className="text-[7px] text-[#00df89] font-mono">Store Administrator</span>
                      <span className="text-[6px] text-gray-500">Live Status</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 flex-1 mt-2">
                      <div className="bg-black/40 border border-white/5 p-1 rounded flex flex-col justify-between">
                        <span className="text-[5px] text-gray-500 uppercase">Sales Today</span>
                        <span className="text-[10px] text-white font-bold">$12,840</span>
                      </div>
                      <div className="bg-black/40 border border-white/5 p-1 rounded flex flex-col justify-between">
                        <span className="text-[5px] text-gray-500 uppercase">Conversion</span>
                        <span className="text-[10px] text-[#00df89] font-bold">4.8%</span>
                      </div>
                      <div className="bg-black/40 border border-white/5 p-1 rounded flex flex-col justify-between">
                        <span className="text-[5px] text-gray-500 uppercase">Server SLA</span>
                        <span className="text-[10px] text-cyan-400 font-bold">99.99%</span>
                      </div>
                      
                      {/* Graph Simulation */}
                      <div className="col-span-3 bg-black/50 border border-white/5 rounded p-1.5 flex items-end justify-between h-10 mt-1">
                        <div className="w-2.5 bg-[#00df89]/80 h-3 rounded-sm" />
                        <div className="w-2.5 bg-[#00df89]/80 h-5 rounded-sm" />
                        <div className="w-2.5 bg-[#00df89]/80 h-7 rounded-sm" />
                        <div className="w-2.5 bg-purple-500/80 h-4 rounded-sm" />
                        <div className="w-2.5 bg-[#00df89] h-8 rounded-sm animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Laptop body */}
                <div className="w-full h-3.5 bg-slate-600 rounded-b-xl border-t border-slate-500 relative flex items-center justify-center">
                  <div className="w-16 h-1 bg-slate-800 rounded-b-md absolute top-0" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Our eCommerce Specializations */}
      <section className="relative py-20 md:py-28 bg-black overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#00df89]">
              Specialist Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Our eCommerce{' '}
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-purple-400 bg-clip-text text-transparent">
                Specializations
              </span>
            </h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base">
              Explore the core competencies we deliver in our e-commerce packages, designed to build long-term value.
            </p>
          </div>

          {/* Specializations Grid - 6 Rounded Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Customizable Design',
                desc: 'Bespoke storefront experiences with tailored visual component files, tailored typography, and clean asset branding overlays.',
                icon: '🎨',
                grad: 'from-pink-500/20 to-purple-500/5'
              },
              {
                title: 'Seamless Integration',
                desc: 'Connect Stripe, POS registers, logistics systems, marketing pipelines, and regional tax APIs with zero conflicts.',
                icon: '🔌',
                grad: 'from-blue-500/20 to-cyan-500/5'
              },
              {
                title: 'Responsive & Mobile-First',
                desc: 'Fluid layouts optimized for small screens, finger-taps checkout spacing, and fast image scaling parameters.',
                icon: '📱',
                grad: 'from-emerald-500/20 to-teal-500/5'
              },
              {
                title: 'Performance Optimization',
                desc: 'Instant page transition logic, optimized bundle sizing, and clean static page serving to achieve PageSpeed grades of 99/100.',
                icon: '⚡',
                grad: 'from-yellow-500/20 to-amber-500/5'
              },
              {
                title: 'Scalability & Security',
                desc: 'Support traffic surges without performance drop. Integrated with TLS databases, secure gates, and PCI-DSS compliance audits.',
                icon: '🛡️',
                grad: 'from-red-500/20 to-rose-500/5'
              },
              {
                title: 'Inventory & CRM',
                desc: 'Synchronize inventory levels across external channels like Shopify, Amazon, or POS centers with real-time analytics dashboards.',
                icon: '📊',
                grad: 'from-purple-500/20 to-indigo-500/5'
              }
            ].map((spec, idx) => (
              <div
                key={idx}
                className={`group relative rounded-[2rem] border border-white/5 bg-gradient-to-br ${spec.grad} p-8 hover:-translate-y-1.5 transition-all duration-300 hover:border-emerald-400/20 shadow-2xl`}
              >
                <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_40%)] pointer-events-none" />
                <div className="w-12 h-12 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center text-2xl mb-6">
                  {spec.icon}
                </div>
                <h3 className="text-xl font-extrabold text-white mb-3 transition-colors group-hover:text-[#00df89]">
                  {spec.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {spec.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Featured Storefronts */}
      <section className="relative py-20 md:py-28 bg-[#020d0e] overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#00df89]">
              Case Studies
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Featured{' '}
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-[#00df89] bg-clip-text text-transparent">
                Storefronts
              </span>
            </h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base">
              Review live projects where we optimized brand aesthetics and transaction metrics to achieve maximum return.
            </p>
          </div>

          {/* Active Carousel Card */}
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-[#051716]/60 border border-white/5 rounded-[2.5rem] p-6 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,223,137,0.06),transparent_50%)] pointer-events-none" />

              {/* Left Column: Mockup Image */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="w-full rounded-2xl border border-white/10 bg-[#030e0f] overflow-hidden shadow-inner relative aspect-[4/3]">
                  {/* Browser Bar */}
                  <div className="bg-black border-b border-white/5 px-4 py-2 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                    </div>
                    <div className="bg-white/5 text-[9px] text-gray-500 rounded px-4 py-0.5 mx-auto font-mono">
                      https://{storefronts[activeSlide].id}.webwise.agency
                    </div>
                  </div>

                  {/* Browser Image */}
                  <div className="relative w-full h-[calc(100%-28px)] overflow-hidden">
                    <Image
                      src={storefronts[activeSlide].image}
                      alt={storefronts[activeSlide].title}
                      fill
                      sizes="(max-w-768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Text & Metrics */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {storefronts[activeSlide].tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-white/5 border border-white/5 px-2.5 py-1 text-[10px] font-semibold text-white/85"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                    {storefronts[activeSlide].title}
                  </h3>
                  <p className="text-[#00df89] text-xs sm:text-sm font-semibold mt-1">
                    {storefronts[activeSlide].subtitle}
                  </p>
                  
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mt-4 sm:mt-6">
                    {storefronts[activeSlide].description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 border-t border-white/5 pt-6 mt-6 sm:mt-8">
                    {storefronts[activeSlide].metrics.map((metric, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className={`text-xl sm:text-2xl font-black bg-gradient-to-r ${storefronts[activeSlide].accentColor} bg-clip-text text-transparent`}>
                          {metric.value}
                        </span>
                        <span className="text-[9px] sm:text-[10px] text-gray-500 font-bold mt-1 uppercase tracking-wide leading-tight">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* External demo link */}
                <div className="mt-8">
                  <Link
                    href="#quote-form"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#00df89]/10 hover:bg-[#00df89]/20 border border-[#00df89]/20 px-5 py-2.5 text-xs font-bold text-[#00df89] transition-all"
                  >
                    <span>View Case Study</span>
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>

            </div>

            {/* Slider Dots & Buttons */}
            <div className="flex justify-between items-center mt-8">
              <div className="flex gap-1.5">
                {storefronts.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeSlide === idx ? 'w-8 bg-[#00df89]' : 'w-2.5 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to case ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setActiveSlide((prev) => (prev === 0 ? storefronts.length - 1 : prev - 1))}
                  className="w-11 h-11 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center text-white active:scale-95 transition-transform"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => setActiveSlide((prev) => (prev === storefronts.length - 1 ? 0 : prev + 1))}
                  className="w-11 h-11 rounded-full border border-white/10 bg-[#00df89] hover:bg-[#00c578] flex items-center justify-center text-black active:scale-95 transition-transform"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Our eCommerce Value Dials */}
      <section className="relative py-20 md:py-28 bg-black overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#00df89]">
              Growth Optimization
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Our eCommerce{' '}
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-[#00df89] bg-clip-text text-transparent">
                Value Dials
              </span>
            </h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base">
              Fine-tuning four key dials representing conversion optimization, load speeds, average order sizing, and lifetime customer ratios.
            </p>
          </div>

          {/* Dials List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueDials.map((dial, idx) => (
              <div
                key={idx}
                className="bg-[#031516] border border-white/5 rounded-3xl p-8 flex flex-col items-center text-center shadow-2xl hover:border-emerald-500/20 transition-all"
              >
                <div className="relative w-32 h-32 flex items-center justify-center mb-6">
                  {/* Circular Dial SVG */}
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="4" strokeOpacity="0.03" fill="none" />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#00df89"
                      strokeWidth="6"
                      strokeDasharray="251.2"
                      strokeDashoffset={251.2 - (251.2 * parseFloat(dial.percentage)) / 100}
                      strokeLinecap="round"
                      fill="none"
                      className="drop-shadow-[0_0_8px_rgba(0,223,137,0.4)]"
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center">
                    <span className="text-2xl font-black text-white tracking-tighter">{dial.value}</span>
                  </div>
                </div>

                <h3 className="text-white font-extrabold text-sm sm:text-base mb-1">
                  {dial.title}
                </h3>
                <span className="text-gray-500 text-[10px] font-semibold uppercase tracking-wider">
                  {dial.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Web Development Expertise in Demand */}
      <section className="relative py-20 md:py-28 bg-[#020d0e] overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column Stats */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="bg-[#051716] border border-white/5 p-6 rounded-2xl flex flex-col justify-between">
                <span className="text-3xl font-black text-[#00df89]">Robust Backend</span>
                <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                  Highly secure server processes engineered to manage inventory locks, heavy checkout volumes, and client sessions.
                </p>
              </div>
              <div className="bg-[#051716] border border-white/5 p-6 rounded-2xl flex flex-col justify-between">
                <span className="text-3xl font-black text-purple-400">API Integrations</span>
                <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                  Connect logistics dispatchers, localized tax rules, email newsletters, and warehouse logs without latency.
                </p>
              </div>
              <div className="bg-[#051716] border border-white/5 p-6 rounded-2xl flex flex-col justify-between col-span-2">
                <span className="text-3xl font-black text-cyan-400">Scalable Solutions</span>
                <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                  Server structures and content serving networks deployed to scale automatically during massive seasonal promotions.
                </p>
              </div>
            </div>

            {/* Right Column Explanation */}
            <div className="lg:col-span-6 flex flex-col justify-center text-left">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#00df89] mb-4">
                Advanced Systems
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                Web Development Expertise in Demand
              </h2>
              <p className="text-gray-300 mt-6 text-sm sm:text-base leading-relaxed font-light">
                Modern commerce mandates a dedicated tech stack configured by experienced developers. We implement scalable architectures that separate styling layers from databases, resulting in speed advantages and stronger security bounds.
              </p>
              <div className="mt-8 flex flex-col gap-3">
                {['Database cluster scaling configurations', 'Stripe checkout customized forms', 'Web security configurations'].map((text, idx) => (
                  <div key={idx} className="flex gap-3 items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#00df89]" />
                    <span className="text-white font-bold text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. Checkout & User Flows */}
      <section className="relative py-20 md:py-28 bg-black overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left side text */}
            <div className="lg:col-span-6 flex flex-col justify-center text-left">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#00df89] mb-4">
                Conversion Design
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                Checkout &amp; User Flows
              </h2>
              <p className="text-gray-300 mt-6 text-sm sm:text-base leading-relaxed font-light">
                We remove every bit of friction from the purchase flow. By designing checkouts with inline validations, instant billing indicators, and multi-gateway processors, we turn interest into successful conversions.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-[#031516] border border-white/5 rounded-xl p-4">
                  <h4 className="text-white font-extrabold text-sm mb-1">Instant Billing</h4>
                  <p className="text-gray-400 text-xs">Auto address matching via maps API sync.</p>
                </div>
                <div className="bg-[#031516] border border-white/5 rounded-xl p-4">
                  <h4 className="text-white font-extrabold text-sm mb-1">Inline Errors</h4>
                  <p className="text-gray-400 text-xs">Real-time indicators showing invalid entries.</p>
                </div>
              </div>
            </div>

            {/* Right side Laptop display */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[450px] aspect-[4/3] flex flex-col justify-end items-center">
                {/* Screen Housing */}
                <div className="w-11/12 aspect-[1.6] rounded-t-2xl border-4 border-slate-700 bg-black relative flex flex-col p-2 overflow-hidden shadow-2xl">
                  {/* Laptop web page checkout layout */}
                  <div className="relative w-full h-full bg-[#041a1b] rounded-lg p-2.5 flex flex-col justify-between">
                    <div className="flex justify-between items-center border-b border-white/5 pb-1">
                      <span className="text-[7px] text-[#00df89] font-mono">Secure Payment Funnel</span>
                      <span className="text-[6px] text-gray-500">Step 3 of 3</span>
                    </div>

                    <div className="flex gap-2 flex-1 mt-2">
                      <div className="flex-1 flex flex-col gap-1">
                        <div className="bg-black/30 border border-white/5 p-1 rounded">
                          <div className="h-1 bg-white/20 rounded w-1/3 mb-1" />
                          <div className="h-2 bg-white/5 rounded" />
                        </div>
                        <div className="bg-black/30 border border-white/5 p-1 rounded">
                          <div className="h-1 bg-white/20 rounded w-1/4 mb-1" />
                          <div className="h-2 bg-white/5 rounded" />
                        </div>
                      </div>
                      
                      <div className="w-24 bg-[#030e0f] rounded border border-white/5 p-1.5 flex flex-col justify-between">
                        <div className="flex flex-col gap-0.5">
                          <span className="text-[5px] text-gray-500 font-bold">TOTAL</span>
                          <span className="text-[9px] text-white font-black">$120.00</span>
                        </div>
                        
                        {/* Pay Button Click Animation */}
                        <div className="relative">
                          <div className="w-full bg-[#00df89] h-3.5 rounded flex items-center justify-center shadow-lg cursor-pointer">
                            <span className="text-[5px] text-black font-black uppercase">Place Order</span>
                          </div>
                          
                          <div className="absolute -bottom-1 -right-1 text-white animate-pulse">
                            <svg className="w-3.5 h-3.5 text-emerald-300 drop-shadow-[0_0_8px_rgba(16,185,129,0.7)]" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Order success modal animation */}
                    <div className="absolute inset-0 bg-[#041a1b]/95 rounded-lg flex flex-col items-center justify-center z-20 animate-pulse" style={{ animationDuration: '4s' }}>
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center mb-1">
                        <svg className="w-3.5 h-3.5 text-[#00df89]" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-[8px] font-black text-white">Payment Confirmed</span>
                    </div>

                  </div>
                </div>

                {/* Keyboard Base */}
                <div className="w-full h-3.5 bg-slate-600 rounded-b-xl border-t border-slate-500 relative flex items-center justify-center">
                  <div className="w-16 h-1 bg-slate-800 rounded-b-md absolute top-0" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 10. Standards Delivered in Every Store */}
      <section className="relative py-16 md:py-20 bg-[#020d0e] overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#00df89]">
            Reliability &amp; Standards
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-16">
            Standards Delivered in Every Store
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'SEO Friendly', desc: 'Pre-rendered static tags mapping schema catalogs.', icon: '🔍' },
              { label: 'Mobile Optimized', desc: 'Liquid viewport layouts checking tap boundaries.', icon: '📱' },
              { label: 'PCI Compliant', desc: 'Encrypted token data gateways shielding orders.', icon: '🛡️' },
              { label: 'API Ready', desc: 'Modular web hooks synced with backend inventory.', icon: '🔌' }
            ].map((std, idx) => (
              <div
                key={idx}
                className="bg-[#051716] border border-white/5 rounded-2xl p-6 shadow-2xl hover:border-[#00df89]/30 transition-all hover:scale-105"
              >
                <span className="text-3xl mb-4 block">{std.icon}</span>
                <h4 className="text-white font-extrabold text-sm sm:text-base mb-2">{std.label}</h4>
                <p className="text-gray-400 text-xs">{std.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Frequently Asked Questions */}
      <section className="relative py-20 md:py-28 bg-[#051c1d] overflow-hidden border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10 w-full">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#00df89]">
              FAQs
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-[#00df89] bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base">
              Got questions? We have answer parameters detailing design customization, syncing APIs, and security measures.
            </p>
          </div>

          {/* Accordion list */}
          <div className="space-y-4">
            {faqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-[#031516] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/10"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full flex justify-between items-center p-6 text-left text-white font-extrabold text-sm sm:text-base focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <span className="ml-4 shrink-0">
                      <svg className={`w-5 h-5 text-emerald-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-60 border-t border-white/5' : 'max-h-0'}`}>
                    <p className="p-6 text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. CTA Banner (Bright Rounded Banner) */}
      <section id="quote-form" className="relative py-20 md:py-28 bg-[#020d0e] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
          <div className="bg-gradient-to-r from-emerald-400 via-teal-500 to-[#00df89] rounded-[2.5rem] p-8 sm:p-12 md:p-16 text-black shadow-2xl flex flex-col lg:flex-row justify-between items-center gap-10 relative overflow-hidden group">
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/20 rounded-full filter blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-purple-500/20 rounded-full filter blur-3xl pointer-events-none" />

            <div className="flex-1 text-left relative z-10">
              <span className="inline-flex rounded-full bg-black/10 border border-black/10 px-3.5 py-1 text-[11px] font-black uppercase tracking-wider text-black mb-4">
                Partner with WebWise
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-tight">
                Raise The Bar for your eCommerce Online Store With Our Professionals
              </h2>
              <p className="text-black/80 mt-4 text-sm sm:text-base max-w-2xl font-medium">
                Reach out to schedule a scoping session. We will map your catalog structures, API synchronizations, and custom UX layout parameters.
              </p>
            </div>

            <div className="shrink-0 relative z-10 w-full lg:w-auto text-center">
              <Link
                href="mailto:hello@webwise.agency?subject=WebWise eCommerce Discussion"
                className="inline-flex w-full lg:w-auto justify-center items-center px-8 py-5 bg-black hover:bg-neutral-900 text-white font-extrabold text-base sm:text-lg rounded-full transition-all hover:scale-105 shadow-2xl group"
              >
                <span>Let&apos;s Discuss Project</span>
                <svg className="w-5 h-5 ml-3 stroke-[2.5] transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 13. WebWise Custom Footer */}
      <footer className="bg-[#010808] border-t border-white/10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00df89]/5 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
            
            {/* Brand Column */}
            <div>
              <h3 className="text-white font-black text-2xl mb-4">WebWise</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Tailored eCommerce systems engineered for maximum load speeds, high conversion checkouts, and clean data integrations.
              </p>
              <div className="flex gap-4">
                {['facebook', 'instagram', 'linkedin'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-gray-400 hover:text-[#00df89] transition-colors hover:scale-110"
                    aria-label={`WebWise ${social}`}
                  >
                    <span className="capitalize text-xs font-bold font-mono">[{social.slice(0, 2)}]</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold mb-6">eCommerce Services</h4>
              <ul className="space-y-3">
                {['Custom UI/UX Storefronts', 'Stripe & Gateway syncs', 'Automated ERP Integrations', 'Speed Optimization'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-[#00df89] transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations */}
            <div>
              <h4 className="text-white font-bold mb-6">Locations</h4>
              <ul className="space-y-3">
                {['San Francisco, CA', 'New York, NY', 'Austin, TX', 'London, UK'].map((loc) => (
                  <li key={loc} className="text-gray-400 text-sm">
                    {loc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact details */}
            <div>
              <h4 className="text-white font-bold mb-6">Contact Us</h4>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:hello@webwise.agency" className="text-gray-400 hover:text-[#00df89] transition-colors text-sm font-semibold">
                    hello@webwise.agency
                  </a>
                </li>
                <li className="text-gray-400 text-sm">
                  +1 (800) 555-WISE
                </li>
              </ul>
            </div>

          </div>

          <hr className="border-white/10 mb-8" />

          {/* Bottom Footer bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm">
              &copy; 2026 WebWise Agency. All rights reserved.
            </p>
            <div className="flex gap-6">
              {['Terms of Service', 'Privacy Policy', 'Cookies settings'].map((item) => (
                <a key={item} href="#" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
