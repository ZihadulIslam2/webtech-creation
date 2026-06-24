'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function WebKookerMaintenancePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaqId, setOpenFaqId] = useState<number | null>(0);

  const stats = [
    { label: 'Websites Monitored', value: '270k+' },
    { label: 'Client Rating', value: '5.0' },
    { label: 'Hours Saved Monthly', value: '40k+' }
  ];

  const essentials = [
    { title: '24/7 Security Updates', desc: 'Continuous patch management and vulnerability scanning.' },
    { title: 'Regular Backups', desc: 'Automated database and file archives stored securely offsite.' },
    { title: 'Performance Optimization', desc: 'Database cleaning, script minification, and caching tuning.' },
    { title: 'Bug Fixing & Support', desc: 'Direct developer access to quickly troubleshoot stylesheet or runtime issues.' },
    { title: 'Content Updates', desc: 'Assistance publishing blogs, products, banner assets, or copy revisions.' }
  ];

  const faqs = [
    {
      id: 0,
      question: 'Why does my website need ongoing maintenance?',
      answer: 'Just like any software, websites run on plugins, APIs, and frameworks that release security patches regularly. Unmaintained sites suffer from script conflicts, slow load speeds, and security vulnerabilities that can hurt Google search rankings.'
    },
    {
      id: 1,
      question: 'How do offsite backups work?',
      answer: 'We schedule daily or weekly archives depending on your tier. Backups include all database files, media assets, and codebase snapshots, which are encrypted and stored in decentralized cloud containers for immediate recovery.'
    },
    {
      id: 2,
      question: 'Can I request custom feature additions during maintenance?',
      answer: 'Yes! Our Premium Plan includes dedicated developer hours that can be used for new section creations, API connections, layout refinements, or payment checkout styling adjustments.'
    },
    {
      id: 3,
      question: 'What is the response turnaround SLA for bug troubleshooting?',
      answer: 'Standard plans receive support response within 24 hours. Premium subscribers get priority developer assignment with target response SLAs under 4 hours for critical site outages.'
    }
  ];

  const projects = [
    { title: 'Urban E-Commerce', category: 'Online Storefront', image: '/images/project_jack_creative.png' },
    { title: 'TechNova Agency', category: 'Corporate Site', image: '/images/project_city_online.png' },
    { title: 'Luxe Portfolio', category: 'Creative Showcase', image: '/images/project_jack_creative.png' },
    { title: 'EduLearn Portal', category: 'Learning Platform', image: '/images/project_city_online.png' },
    { title: 'CareFirst Portal', category: 'Medical & Health', image: '/images/project_jack_creative.png' },
    { title: 'Prime Estates', category: 'Real Estate App', image: '/images/project_city_online.png' }
  ];

  return (
    <main className="bg-[#020f0e] min-h-screen text-white selection:bg-[#00df89] selection:text-black antialiased">
      
      {/* 1. WebKooker Custom Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020f0e]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">
            {/* Logo: WebKooker circle with W */}
            <Link href="/services/webkooker" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center border border-purple-400 shadow-[0_0_15px_rgba(147,51,234,0.4)] transition-transform group-hover:scale-105">
                <span className="text-white font-black text-lg font-mono">W</span>
              </div>
              <span className="text-white font-black text-2xl tracking-tight transition-colors group-hover:text-purple-300">
                WebKooker
              </span>
            </Link>

            {/* Links */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'Services', 'Pricing', 'About Us'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, '')}`}
                  className="text-gray-300 hover:text-emerald-400 font-medium tracking-wide transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Get Started white button */}
            <div className="flex items-center space-x-4">
              <Link
                href="#pricing"
                className="px-6 py-2.5 bg-white text-black rounded-full font-bold text-sm hover:bg-gray-100 transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]"
              >
                Get Started
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

        {/* Mobile menu dropdown */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 pt-2 border-t border-white/10 bg-[#020f0e] px-6">
            <div className="flex flex-col space-y-4">
              {['Home', 'Services', 'Pricing', 'About Us'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, '')}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-300 hover:text-emerald-400 font-medium transition-colors text-base"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* 2. Hero Section */}
      <section id="home" className="relative min-h-screen pt-36 pb-20 overflow-hidden flex items-center border-b border-white/5">
        <div className="absolute top-1/4 left-1/10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/10 w-[450px] h-[450px] bg-purple-500/5 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left side column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="inline-flex rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-purple-300 mb-6">
                WebKooker Care Packages
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
                Professional Website{' '}
                <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-purple-400 bg-clip-text text-transparent">
                  Maintenance Services
                </span>
              </h1>
              <p className="text-gray-300 text-base sm:text-lg mt-6 leading-relaxed max-w-xl font-light">
                Keep your digital storefront secure, fast, and fully updated. We monitor server statuses, patch framework vulnerabilities, and perform design revisions so you can scale.
              </p>

              {/* CTA button */}
              <div className="mt-10">
                <Link
                  href="#pricing"
                  className="inline-flex items-center px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-extrabold text-base rounded-full transition-all hover:scale-105 shadow-[0_10px_30px_rgba(13,148,136,0.3)] group"
                >
                  <span>Learn More Now</span>
                  <svg className="w-5 h-5 ml-3 stroke-[2.5] transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>

              {/* Statistics Panel */}
              <div className="flex gap-8 sm:gap-12 mt-12 border-t border-white/15 pt-8 w-full">
                {stats.map((s, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-white text-3xl sm:text-4xl font-black tracking-tight">{s.value}</span>
                    <span className="text-gray-400 text-xs sm:text-sm mt-1.5 font-medium">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side graphics: Sleek purple window with rotating teal gears */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[380px] aspect-square rounded-[3rem] border border-white/10 bg-gradient-to-tr from-[#020f0e] to-[#123835] p-8 shadow-[0_30px_70px_rgba(0,0,0,0.8)] overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_75%)] pointer-events-none" />

                <div className="relative w-full h-full flex flex-col justify-between items-center z-10">
                  <div className="w-full bg-black/60 border border-white/5 rounded-xl px-4 py-2 flex items-center justify-between">
                    <span className="text-[10px] text-gray-500 font-mono">webkooker.io/operations</span>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-500/60" />
                      <div className="w-2 h-2 rounded-full bg-green-500/60" />
                    </div>
                  </div>

                  {/* Core Graphic: Animated rotating gears */}
                  <div className="relative flex items-center justify-center flex-1 w-full my-6">
                    {/* Gear 1: Large Purple/Teal */}
                    <div className="relative w-28 h-28 text-purple-500 animate-spin" style={{ animationDuration: '12s' }}>
                      <svg viewBox="0 0 100 100" fill="currentColor">
                        <path d="M50 35c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15zm0 24c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z" />
                        <path d="M50 0c-2.8 0-5 2.2-5 5v8.3c-2.9.8-5.6 2.1-8 3.8l-5.9-5.9c-2-2-5.1-2-7.1 0l-7.1 7.1c-2 2-2 5.1 0 7.1l5.9 5.9c-1.7 2.4-3 5.1-3.8 8H5c-2.8 0-5 2.2-5 5v10c0 2.8 2.2 5 5 5h8.3c.8 2.9 2.1 5.6 3.8 8l-5.9 5.9c-2 2-2 5.1 0 7.1l7.1 7.1c2 2 5.1 2 7.1 0l5.9-5.9c2.4 1.7 5.1 3 8 3.8V95c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5v-8.3c2.9-.8 5.6-2.1 8-3.8l5.9 5.9c2 2 5.1 2 7.1 0l7.1-7.1c2-2 2-5.1 0-7.1l-5.9-5.9c1.7-2.4 3-5.1 3.8-8H95c2.8 0 5-2.2 5-5V45c0-2.8-2.2-5-5-5h-8.3c-.8-2.9-2.1-5.6-3.8-8l5.9-5.9c2-2 2-5.1 0-7.1l-7.1-7.1c-2-2-5.1-2-7.1 0l-5.9 5.9c-2.4-1.7-5.1-3-8-3.8V5c0-2.8-2.2-5-5-5H50z" opacity="0.8" />
                      </svg>
                    </div>
                    {/* Gear 2: Smaller Teal */}
                    <div className="absolute bottom-4 right-4 w-18 h-18 text-teal-400 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}>
                      <svg viewBox="0 0 100 100" fill="currentColor">
                        <path d="M50 35c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15zm0 24c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z" />
                        <path d="M50 0c-2.8 0-5 2.2-5 5v8.3c-2.9.8-5.6 2.1-8 3.8l-5.9-5.9c-2-2-5.1-2-7.1 0l-7.1 7.1c-2 2-2 5.1 0 7.1l5.9 5.9c-1.7 2.4-3 5.1-3.8 8H5c-2.8 0-5 2.2-5 5v10c0 2.8 2.2 5 5 5h8.3c.8 2.9 2.1 5.6 3.8 8l-5.9 5.9c-2 2-2 5.1 0 7.1l7.1 7.1c2 2 5.1 2 7.1 0l5.9-5.9c2.4 1.7 5.1 3 8 3.8V95c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5v-8.3c2.9-.8 5.6-2.1 8-3.8l5.9 5.9c2 2 5.1 2 7.1 0l7.1-7.1c2-2 2-5.1 0-7.1l-5.9-5.9c1.7-2.4 3-5.1 3.8-8H95c2.8 0 5-2.2 5-5V45c0-2.8-2.2-5-5-5h-8.3c-.8-2.9-2.1-5.6-3.8-8l5.9-5.9c2-2 2-5.1 0-7.1l-7.1-7.1c-2-2-5.1-2-7.1 0l-5.9 5.9c-2.4-1.7-5.1-3-8-3.8V5c0-2.8-2.2-5-5-5H50z" />
                      </svg>
                    </div>
                  </div>

                  {/* Operational status indicator */}
                  <div className="w-full bg-[#051716] border border-white/5 rounded-xl p-3 flex justify-between items-center">
                    <span className="text-[10px] text-emerald-400 font-bold tracking-wider">SYSTEM STATUS: OPTIMAL</span>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Essential Website Maintenance Services On WebKooker */}
      <section id="services" className="relative py-20 md:py-28 bg-black overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-teal-400">
              Core Deliverables
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Essential Website Maintenance Services On WebKooker
            </h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base">
              Protect, refresh, and optimize your web pages continuously. A 2x2 custom suite designed to target key operational vulnerabilities.
            </p>
          </div>

          {/* 2x2 Grid of Gradient Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {[
              {
                title: 'Security Safeguards',
                desc: 'Daily malware scanning, firewall management, plugin audit patches, and full data encryption to keep client information secure.',
                icon: '🛡️',
                grad: 'from-teal-600/30 via-teal-900/10 to-transparent border-teal-500/20'
              },
              {
                title: 'Data Archives / Backups',
                desc: 'Automated database snapshots and media file recovery packages archived offsite. Restoration checks performed regularly.',
                icon: '💾',
                grad: 'from-purple-600/25 via-purple-900/10 to-transparent border-purple-500/20'
              },
              {
                title: 'Performance & Speed Checkups',
                desc: 'Asset optimization, script refactoring, database cleaning, and caching setups targeting under 1.5s load speeds.',
                icon: '⚡',
                grad: 'from-cyan-600/30 via-cyan-900/10 to-transparent border-cyan-500/20'
              },
              {
                title: 'Developer Fixes & Revisions',
                desc: 'Direct ticket access to troubleshoot visual glitches, update product fields, sync API hooks, and resolve runtime code issues.',
                icon: '🛠️',
                grad: 'from-indigo-600/30 via-indigo-900/10 to-transparent border-indigo-500/20'
              }
            ].map((card, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br ${card.grad} border rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 group shadow-2xl`}
              >
                <div>
                  <div className="w-12 h-12 bg-black/50 border border-white/10 rounded-2xl flex items-center justify-center text-2xl mb-6">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-black text-white group-hover:text-teal-300 transition-colors mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Lack of Maintenance Kills Your Website's Rank */}
      <section className="relative py-20 md:py-28 bg-[#020d0e] overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column Text */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal-400 mb-4">
                SEO &amp; Index Safety
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                Lack of Maintenance Kills Your Website&apos;s Rank
              </h2>
              <p className="text-gray-300 mt-6 text-sm sm:text-base leading-relaxed font-light">
                Google continuously downgrades slow, outdated, or insecure web pages. Broken links, outdated site metadata, and unresolved script errors increase bounce rates, signaling search crawlers to slide your rank lower. Dedicated maintenance preserves your search positions.
              </p>
              
              <div className="mt-8">
                <Link
                  href="#pricing"
                  className="inline-flex items-center px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-extrabold text-sm rounded-full transition-all group"
                >
                  <span>See Our Maintenance Packages</span>
                  <svg className="w-5 h-5 ml-3 stroke-[2.5] transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Column Laptop illustration */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[450px] aspect-[4/3] flex flex-col justify-end items-center">
                <div className="w-11/12 aspect-[1.6] rounded-t-2xl border-4 border-slate-700 bg-black relative flex flex-col p-2 overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none z-10" />
                  
                  {/* Web page rendering inside laptop */}
                  <div className="relative w-full h-full bg-[#041a1b] rounded-lg p-2.5 flex flex-col justify-between">
                    <div className="flex justify-between items-center border-b border-white/5 pb-1">
                      <span className="text-[7px] text-purple-400 font-mono">Rank Visibility Monitor</span>
                      <span className="text-[6px] text-gray-500">Live Analytics</span>
                    </div>

                    <div className="flex-1 flex gap-2 items-center justify-center mt-2 relative">
                      <div className="w-32 h-20 bg-black/40 border border-white/5 rounded p-1.5 flex flex-col justify-between">
                        <span className="text-[6px] text-gray-400">ORGANIC GOOGLE IMPRESSIONS</span>
                        {/* Custom visual showing upward graphing */}
                        <div className="flex items-end justify-between h-8 mt-1 border-b border-white/10 pb-0.5">
                          <div className="w-1 bg-[#00df89]/30 h-1.5" />
                          <div className="w-1 bg-[#00df89]/30 h-3" />
                          <div className="w-1 bg-[#00df89]/50 h-2.5" />
                          <div className="w-1 bg-[#00df89]/60 h-4" />
                          <div className="w-1 bg-[#00df89]/80 h-5" />
                          <div className="w-1 bg-purple-500 h-7" />
                        </div>
                      </div>
                      
                      {/* Gears & Cloud Sync overlay */}
                      <div className="flex flex-col gap-1 items-center">
                        <span className="text-[14px]">☁️</span>
                        <span className="text-[9px] text-[#00df89] font-bold">98/100</span>
                      </div>
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

      {/* 5. Website Maintenance Essentials Checklist */}
      <section className="relative py-20 md:py-28 bg-black overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Checklist list */}
            <div className="lg:col-span-6 flex flex-col justify-center text-left">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal-400 mb-4">
                Operations checklist
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                Website Maintenance Essentials
              </h2>
              <p className="text-gray-300 mt-6 text-sm sm:text-base leading-relaxed font-light">
                Continuous developer assistance covers key maintenance benchmarks, ensuring your web systems are optimized around the clock.
              </p>

              <ul className="mt-8 space-y-4">
                {essentials.map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-teal-400/10 border border-teal-400/30 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-teal-400" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-extrabold text-sm sm:text-base">{item.title}</h4>
                      <p className="text-gray-400 text-xs sm:text-sm mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Toolbox and Clock graphics */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[400px] aspect-square rounded-[2.5rem] border border-white/10 bg-gradient-to-tr from-[#020f0e] to-[#0f2e2c] p-8 shadow-[0_30px_70px_rgba(0,0,0,0.85)] flex flex-col justify-between items-center">
                <div className="w-full flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">Toolkit Panel</span>
                  <span className="text-[10px] text-[#00df89] font-bold font-mono">SLA ACTIVE</span>
                </div>

                <div className="relative flex items-center justify-center flex-1 w-full my-6 gap-6">
                  {/* Clock with Gears symbol */}
                  <div className="relative w-28 h-28 border-4 border-slate-700 bg-black/60 rounded-full flex items-center justify-center shadow-lg">
                    {/* Clock ticking hands */}
                    <div className="absolute w-1 h-10 bg-teal-400 rounded-full origin-bottom -translate-y-5 animate-spin" style={{ animationDuration: '60s' }} />
                    <div className="absolute w-1 h-6 bg-purple-500 rounded-full origin-bottom -translate-y-3 animate-spin" style={{ animationDuration: '360s' }} />
                    <div className="w-3 h-3 bg-white rounded-full z-10" />
                  </div>
                  
                  {/* Stylized Toolbox */}
                  <div className="w-24 h-20 bg-gradient-to-br from-purple-600 to-indigo-800 rounded-xl border border-purple-400/40 p-3 flex flex-col justify-between shadow-2xl transition-transform hover:scale-105">
                    <span className="text-2xl text-purple-200">🛠️</span>
                    <span className="text-[8px] text-white/90 font-mono font-black uppercase">WebKooker SDK</span>
                  </div>
                </div>

                <div className="w-full bg-[#051716] border border-white/5 rounded-xl p-2.5 flex justify-center">
                  <span className="text-[10px] text-teal-400 font-bold font-mono">24/7 MONITORING ENGAGED</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Choose Your Maintenance Plan */}
      <section id="pricing" className="relative py-20 md:py-28 bg-[#020d0e] overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-teal-400">
              Clear Pricing
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Choose Your Maintenance Plan
            </h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base">
              Subscription based website maintenance packages providing everything you need to launch and maintain a professional online presence.
            </p>
          </div>

          {/* Pricing cards side-by-side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
            
            {/* Standard Plan */}
            <div className="bg-[#051716]/60 border border-white/5 rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between shadow-2xl hover:border-teal-500/20 transition-all group">
              <div>
                <span className="inline-flex rounded-full bg-teal-400/10 border border-teal-400/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-teal-300">
                  Standard Plan
                </span>
                <div className="flex items-baseline mt-6">
                  <span className="text-5xl font-black text-white">$49</span>
                  <span className="text-gray-400 text-sm font-semibold ml-2">/ month</span>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm mt-4">
                  Perfect for business landing pages, blogs, and static sites requiring constant health checkups.
                </p>
                
                {/* Features checklist */}
                <ul className="mt-8 space-y-3.5 border-t border-white/5 pt-6">
                  {['Daily Offsite backups', '24/7 Plugin security scans', 'Monthly speed performance optimization', 'Email ticketing dashboard support', 'SSL security validation checks'].map((f, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-teal-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300 text-xs sm:text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-10">
                <Link
                  href="mailto:hello@webkooker.io?subject=Standard Plan Sign Up"
                  className="w-full inline-flex justify-center items-center py-4 bg-teal-500 hover:bg-teal-600 text-white font-extrabold text-sm rounded-xl transition-all shadow-[0_4px_15px_rgba(13,148,136,0.2)]"
                >
                  Choose Plan
                </Link>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-[#051716]/60 border border-purple-500/20 rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-purple-600 text-white text-[9px] font-black uppercase tracking-wider py-1 px-6 rounded-bl-xl border-l border-b border-purple-400/25">
                Popular Choice
              </div>
              
              <div>
                <span className="inline-flex rounded-full bg-purple-500/10 border border-purple-500/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-purple-300">
                  Premium Plan
                </span>
                <div className="flex items-baseline mt-6">
                  <span className="text-5xl font-black text-white">$149</span>
                  <span className="text-gray-400 text-sm font-semibold ml-2">/ month</span>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm mt-4">
                  Engineered for growing e-commerce platforms, databases, and portals requiring developer execution support.
                </p>

                {/* Features checklist */}
                <ul className="mt-8 space-y-3.5 border-t border-white/5 pt-6">
                  {['Hourly encrypted database backups', 'Continuous real-time threat scans', 'Premium page load optimization', 'Dedicated 4-hour developer turnaround support SLA', '3 hours included design/copy revision support monthly', 'API and payment Gateway audit diagnostics'].map((f, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-purple-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300 text-xs sm:text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <Link
                  href="mailto:hello@webkooker.io?subject=Premium Plan Sign Up"
                  className="w-full inline-flex justify-center items-center py-4 bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-sm rounded-xl transition-all shadow-[0_4px_15px_rgba(147,51,234,0.3)]"
                >
                  Choose Plan
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Word from Satisfied Clients on WebKooker (White BG testimonial card) */}
      <section className="relative py-20 md:py-24 bg-white overflow-hidden text-black">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10 w-full text-center">
          <span className="inline-flex rounded-full bg-purple-100 border border-purple-200 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-purple-700 mb-6">
            Word from Satisfied Clients on WebKooker
          </span>
          
          <div className="relative max-w-3xl mx-auto my-8">
            <span className="text-5xl text-purple-200 absolute -top-8 -left-4 font-serif">&ldquo;</span>
            <p className="text-xl sm:text-2xl font-bold text-slate-800 leading-relaxed italic relative z-10">
              WebKooker has completely transformed our business operations. Previously, database conflicts and plugin failures cost us sales every week. Since signing up, our store runs flawlessly with zero downtime.
            </p>
            <span className="text-5xl text-purple-200 absolute -bottom-12 -right-4 font-serif">&rdquo;</span>
          </div>

          <div className="flex flex-col items-center mt-8">
            {/* Person avatar circle */}
            <div className="w-12 h-12 bg-purple-600 text-white flex items-center justify-center rounded-full font-black text-base shadow-lg">
              JS
            </div>
            <h4 className="text-slate-900 font-extrabold text-base mt-3">Sarah Jenkins</h4>
            <span className="text-slate-500 text-xs font-semibold uppercase mt-0.5">Director, TechNova Solutions</span>
          </div>
        </div>
      </section>

      {/* 8. Frequently Asked Questions */}
      <section className="relative py-20 md:py-28 bg-[#020d0e] overflow-hidden border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10 w-full">
          <div className="text-center mb-16 md:mb-20">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-teal-400">
              Support FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          {/* Accordions */}
          <div className="space-y-4">
            {faqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-[#051716]/60 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/10 shadow-xl"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full flex justify-between items-center p-6 text-left text-white font-extrabold text-sm sm:text-base focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <span className="ml-4 shrink-0">
                      <svg className={`w-5 h-5 text-teal-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-56 border-t border-white/5' : 'max-h-0'}`}>
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

      {/* 9. Website Audit Banner (White area container) */}
      <section className="relative py-20 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 md:p-16 text-black shadow-2xl flex flex-col lg:flex-row justify-between items-center gap-8 relative overflow-hidden group">
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-teal-100/50 rounded-full filter blur-3xl pointer-events-none" />

            <div className="flex-1 text-left relative z-10">
              <span className="inline-flex rounded-full bg-emerald-100 border border-emerald-200 px-3.5 py-1 text-[11px] font-black uppercase tracking-wider text-emerald-800 mb-4">
                Organic Performance Audit
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Ready to Review The Organic Aspect of Your Website?
              </h2>
              <p className="text-slate-600 mt-4 text-sm sm:text-base max-w-xl">
                Enter your details to receive a free, comprehensively scoped audit mapping out load delays, database bottlenecks, and search ranking updates.
              </p>
            </div>

            <div className="shrink-0 relative z-10 w-full lg:w-auto text-center">
              <Link
                href="mailto:hello@webkooker.io?subject=Free Website Audit Request"
                className="inline-flex w-full lg:w-auto justify-center items-center px-8 py-5 bg-[#020d0e] hover:bg-[#072426] text-white font-extrabold text-base sm:text-lg rounded-full transition-all group"
              >
                <span>Get a Free Website Audit</span>
                <svg className="w-5 h-5 ml-3 stroke-[2.5] transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Our Projects (2x3 Grid of Laptop Previews) */}
      <section id="portfolio" className="relative py-20 md:py-28 bg-[#020d0e] overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-teal-400">
              Operations Portfolio
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Our Projects
            </h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base">
              A selection of corporate platforms, storefront sites, and agency systems supported continuously under our upkeep tiers.
            </p>
          </div>

          {/* 2x3 Grid of Laptops */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((proj, idx) => (
              <div key={idx} className="flex flex-col group items-center">
                
                {/* Laptop Mockup */}
                <div className="relative w-full max-w-[320px] aspect-[4/3] flex flex-col justify-end items-center transition-transform duration-300 group-hover:-translate-y-1">
                  
                  {/* Laptop screen */}
                  <div className="w-11/12 aspect-[1.6] rounded-t-xl border-3 border-slate-700 bg-black relative flex flex-col p-1.5 overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none z-10" />
                    
                    {/* Browser rendering */}
                    <div className="relative w-full h-full bg-[#031516] rounded-md overflow-hidden">
                      <Image
                        src={proj.image}
                        alt={proj.title}
                        fill
                        sizes="(max-w-768px) 100vw, 30vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Laptop Base */}
                  <div className="w-full h-2.5 bg-slate-600 rounded-b-lg border-t border-slate-500 relative flex items-center justify-center">
                    <div className="w-10 h-0.5 bg-slate-800 rounded-b-md absolute top-0" />
                  </div>
                </div>

                {/* Description Text below mockup */}
                <div className="mt-4 text-center">
                  <h4 className="text-white font-extrabold text-sm group-hover:text-teal-400 transition-colors">
                    {proj.title}
                  </h4>
                  <span className="text-gray-500 text-xs font-semibold mt-0.5 uppercase tracking-wide">
                    {proj.category}
                  </span>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Our Websites Might Make Your Business Too Successful! (White Block) */}
      <section className="relative py-20 md:py-24 bg-white overflow-hidden text-black">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10 w-full flex flex-col lg:flex-row justify-between items-center gap-10">
          
          <div className="flex-1 text-left">
            <span className="inline-flex rounded-full bg-purple-100 border border-purple-200 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-purple-700 mb-4">
              Growth &amp; Scaling
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Our Websites Might Make Your Business Too Successful!
            </h2>
            <p className="text-slate-600 mt-4 text-sm sm:text-base leading-relaxed">
              We design layouts featuring custom interfaces, dynamic elements, and search ranking configurations that drive organic inquiries continuously.
            </p>
            <div className="mt-8">
              <Link
                href="#pricing"
                className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-sm rounded-full transition-all shadow-lg"
              >
                Watch Our Latest Success Stories
              </Link>
            </div>
          </div>

          {/* Success Arrow Illustration */}
          <div className="shrink-0 w-full lg:w-96 flex justify-center items-center">
            <div className="w-72 h-44 rounded-2xl bg-slate-950 border border-slate-800 p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden text-white">
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">Conversion metrics</span>
                <span className="text-yellow-400 text-sm">★★★★★</span>
              </div>

              {/* Graphic showing up trending arrows */}
              <div className="flex gap-4 items-end justify-center h-20 relative">
                <div className="absolute inset-0 flex items-center justify-center text-4xl font-black text-emerald-400 select-none animate-pulse">
                  📈 +420%
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 12. How Your Business Website Can Do More Than Just Look Good */}
      <section className="relative py-20 md:py-28 bg-black overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-teal-400">
            Maximizing Utility
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-16">
            How Your Website Can Do More
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
            {/* White Card 1: 24/7 Availability */}
            <div className="bg-white text-black rounded-[2rem] p-8 flex flex-col justify-between shadow-2xl border border-slate-100 hover:scale-[1.02] transition-transform">
              <span className="text-3xl mb-4 block text-purple-600">🕰️</span>
              <div>
                <h4 className="font-extrabold text-lg text-slate-900 mb-2">24/7 Availability</h4>
                <p className="text-slate-600 text-xs sm:text-sm">Never miss an inquiry. Maintain active backend server monitoring so clients can reach your business anytime.</p>
              </div>
            </div>

            {/* White Card 2: Enhanced Credibility */}
            <div className="bg-white text-black rounded-[2rem] p-8 flex flex-col justify-between shadow-2xl border border-slate-100 hover:scale-[1.02] transition-transform">
              <span className="text-3xl mb-4 block text-teal-600">🛡️</span>
              <div>
                <h4 className="font-extrabold text-lg text-slate-900 mb-2">Enhanced Credibility</h4>
                <p className="text-slate-600 text-xs sm:text-sm">Continuous SSL checks and clean codes maintain user trust and avoid security warnings on search listings.</p>
              </div>
            </div>

            {/* Central Purple Card */}
            <div className="bg-gradient-to-br from-purple-600 to-indigo-800 text-white rounded-[2rem] p-8 flex flex-col justify-between shadow-2xl border border-purple-400/30 hover:scale-[1.02] transition-transform row-span-1 md:col-span-2 lg:col-span-1">
              <span className="text-3xl mb-4 block">🔮</span>
              <div>
                <h4 className="font-extrabold text-lg mb-2">WebKooker Core Engine</h4>
                <p className="text-purple-100 text-xs sm:text-sm">An optimized maintenance model designed to safeguard visual interfaces, transactional checkouts, and databases simultaneously.</p>
              </div>
            </div>

            {/* White Card 3: Affordable Pricing */}
            <div className="bg-white text-black rounded-[2rem] p-8 flex flex-col justify-between shadow-2xl border border-slate-100 hover:scale-[1.02] transition-transform">
              <span className="text-3xl mb-4 block text-emerald-600">💳</span>
              <div>
                <h4 className="font-extrabold text-lg text-slate-900 mb-2">Affordable Pricing</h4>
                <p className="text-slate-600 text-xs sm:text-sm">Flat subscription rates that give you developer hours on-demand, avoiding expensive in-house engineering overhead.</p>
              </div>
            </div>

            {/* White Card 4: Reliable Support */}
            <div className="bg-white text-black rounded-[2rem] p-8 flex flex-col justify-between shadow-2xl border border-slate-100 hover:scale-[1.02] transition-transform">
              <span className="text-3xl mb-4 block text-cyan-600">📞</span>
              <div>
                <h4 className="font-extrabold text-lg text-slate-900 mb-2">Reliable Support</h4>
                <p className="text-slate-600 text-xs sm:text-sm">Guaranteed service SLA times that place your tickets directly into active engineering tracks for speedy delivery.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. Our Reputed Clients */}
      <section className="relative py-16 md:py-20 bg-[#020d0e] border-t border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-teal-400 mb-10">
            Trusted by Reputed Teams Globally
          </p>
          
          {/* Logo Grid */}
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 opacity-60 hover:opacity-100 transition-opacity">
            {['Nexa Fintech', 'Cosmo Beauty', 'Aura Storefront', 'EduLearn Inc', 'CareFirst Group', 'Prime Property'].map((logo, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 border border-white/10 rounded-2xl px-6 py-3.5 bg-black/40 text-sm font-semibold tracking-wide text-white/80 cursor-default"
              >
                <span>🏢</span>
                <span>{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. WebKooker Custom Footer */}
      <footer className="bg-black border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
            
            {/* Logo column */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-purple-600 flex items-center justify-center border border-purple-400/30">
                  <span className="text-white font-black text-sm">W</span>
                </div>
                <span className="text-white font-black text-xl tracking-tight">WebKooker</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Flat monthly maintenance plans giving your business security checks, server backups, speed optimization, and direct developer access.
              </p>
            </div>

            {/* Services links */}
            <div>
              <h4 className="text-white font-bold mb-6">Upkeep Services</h4>
              <ul className="space-y-3">
                {['Security Upgrades', 'Daily Backups', 'Performance Checkups', 'Developer Support'].map((srv) => (
                  <li key={srv}>
                    <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                      {srv}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-bold mb-6">Legal Area</h4>
              <ul className="space-y-3">
                {['Terms of Service', 'Privacy Policy', 'Cookie Policies', 'SLA Agreements'].map((legal) => (
                  <li key={legal}>
                    <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                      {legal}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact details */}
            <div>
              <h4 className="text-white font-bold mb-6">Get in Touch</h4>
              <ul className="space-y-3 font-medium">
                <li>
                  <a href="mailto:hello@webkooker.io" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                    hello@webkooker.io
                  </a>
                </li>
                <li className="text-gray-400 text-sm">
                  Support ticket dashboard: 24/7 active.
                </li>
              </ul>
            </div>

          </div>

          <hr className="border-white/10 mb-8" />

          {/* Bottom footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm">
              &copy; 2026 WebKooker Services. All rights reserved.
            </p>
            <div className="flex gap-6">
              {['Terms', 'Privacy', 'Security'].map((term) => (
                <a key={term} href="#" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">
                  {term}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
