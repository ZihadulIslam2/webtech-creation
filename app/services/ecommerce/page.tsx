'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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

export default function EcommerceServicePage() {
  // Carousel 1: Featured Storefronts
  const [activeCarousel1, setActiveCarousel1] = useState(0);
  const featuredStorefronts: ProjectSlide[] = [
    {
      id: 'aura-cosmetics',
      title: 'Aura Cosmetics Shop',
      subtitle: 'Premium Headless Commerce Storefront',
      image: '/images/project_jack_creative.png',
      tags: ['Shopify Plus', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
      description: 'A luxurious shopping experience designed for high-end beauty brands. Fully headless storefront integrated with Shopify Admin API, resulting in instant transitions and optimized page loads.',
      metrics: [
        { label: 'Conversion Rate', value: '+4.2%' },
        { label: 'Page Load Speed', value: '0.9s' },
        { label: 'Mobile Sales Increase', value: '+62%' }
      ],
      accentColor: 'from-[#ec4899] to-[#8b5cf6]'
    },
    {
      id: 'nexa-shop',
      title: 'Nexa Fintech Store',
      subtitle: 'Digital Products Marketplace',
      image: '/images/project_city_online.png',
      tags: ['Next.js', 'Stripe Connect', 'Tailwind CSS', 'PostgreSQL'],
      description: 'A robust and secure marketplace supporting global instant payouts, automated license generation, and multi-currency checkouts. Scalable infrastructure designed for heavy traffic surges.',
      metrics: [
        { label: 'Uptime Reliability', value: '99.99%' },
        { label: 'Monthly Active Buyers', value: '45,000+' },
        { label: 'Checkout Time', value: '1.4s' }
      ],
      accentColor: 'from-[#00df89] to-[#3b82f6]'
    }
  ];

  // Carousel 2: Checkout & User Flow Projects
  const [activeCarousel2, setActiveCarousel2] = useState(0);
  const userFlowProjects: ProjectSlide[] = [
    {
      id: 'custom-checkout',
      title: 'One-Click Checkout Optimization',
      subtitle: 'Seamless Transaction Flow Design',
      image: '/images/project_city_online.png',
      tags: ['UX/UI Design', 'Cart Optimization', 'Stripe Elements'],
      description: 'A complete redesign of the checkout funnel that minimizes cart abandonment by eliminating fields, integrating digital wallets (Apple Pay, Google Pay), and utilizing smart auto-fill technology.',
      metrics: [
        { label: 'Cart Abandonment', value: '-38%' },
        { label: 'Average Order Value', value: '+15%' },
        { label: 'Checkout Clicks', value: 'Reduced to 2' }
      ],
      accentColor: 'from-[#8b5cf6] to-[#06b6d4]'
    },
    {
      id: 'inventory-dashboard',
      title: 'Real-time Backoffice & Inventory',
      subtitle: 'E-commerce Management Dashboard',
      image: '/images/project_jack_creative.png',
      tags: ['Admin Panel', 'GraphQL', 'Next.js', 'Node.js'],
      description: 'An advanced inventory control and analytics dashboard synced across Shopify, Amazon, and physical brick-and-mortar locations. Provides real-time notifications and predictive restocking recommendations.',
      metrics: [
        { label: 'Sync Latency', value: '< 200ms' },
        { label: 'Order Processing', value: '100% Automated' },
        { label: 'Admin Efficiency', value: '+300%' }
      ],
      accentColor: 'from-[#f59e0b] to-[#ec4899]'
    }
  ];

  // FAQ State
  const [openFaqId, setOpenFaqId] = useState<number | null>(0);
  const faqs = [
    {
      id: 0,
      question: 'Which platforms do you build e-commerce websites on?',
      answer: 'We build tailored e-commerce solutions based on your scale and requirements. For high-speed headless stores, we utilize Next.js combined with headless Shopify or BigCommerce. For standard, highly customizable setups, we develop Shopify custom themes, WooCommerce (WordPress), and Webflow Commerce. We recommend the stack that fits your budget and growth targets.'
    },
    {
      id: 1,
      question: 'Can you migrate my existing online store to a new platform?',
      answer: 'Absolutely. We specialize in secure database migrations, ensuring all your customer accounts, order histories, product details, descriptions, images, and reviews are safely transferred. We also map URLs properly to prevent any negative impact on your SEO rankings.'
    },
    {
      id: 2,
      question: 'How do you ensure the online store loads quickly on mobile devices?',
      answer: 'Speed is our top priority. We optimize images (WebP format), implement lazy loading, minify stylesheet and script delivery, utilize global CDNs, and follow static site generation principles with Next.js when building headless commerce. Most of our custom builds achieve mobile PageSpeed scores above 90.'
    },
    {
      id: 3,
      question: 'Do you design custom checkouts and payment integrations?',
      answer: 'Yes, we design secure checkouts integrated with Stripe, PayPal, Apple Pay, Google Pay, Klarna, and local gateway solutions. We optimize the UI to minimize input fields, implement inline error validation, and guarantee compliance with PCI-DSS security standards.'
    },
    {
      id: 4,
      question: 'How does your subscription maintenance work for e-commerce?',
      answer: 'Our subscription covers security updates, server monitoring, bug fixes, theme maintenance, monthly inventory audits support, payment gateway checks, speed monitoring, and small design adjustments. You get peace of mind and ongoing developer access without hiring a full-time in-house team.'
    }
  ];

  const valueDials = [
    { title: 'Performance Grade', value: '99/100', percentage: '99%', color: 'from-[#00df89] to-[#10b981]' },
    { title: 'Checkout Conversion Rate', value: '4.8%', percentage: '88%', color: 'from-[#8b5cf6] to-[#ec4899]' },
    { title: 'Uptime SLA Guarantee', value: '99.99%', percentage: '99.99%', color: 'from-[#06b6d4] to-[#3b82f6]' },
    { title: 'Average Cart Retrieval', value: '28%', percentage: '65%', color: 'from-[#f59e0b] to-[#ef4444]' }
  ];

  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-[#052021] pt-32 pb-20 overflow-hidden flex items-center">
        {/* Background glow effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#083032]/40 via-[#041a1b]/80 to-black pointer-events-none" />
        <div className="absolute top-1/4 left-1/10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/10 w-[450px] h-[450px] bg-purple-500/5 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute -top-20 right-1/4 w-[350px] h-[350px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Hero Left Column */}
            <div className="lg:col-span-7 text-left flex flex-col items-start animate-slideUp">
              <span className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#00df89] mb-6">
                Premium eCommerce Solutions
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-tight">
                Professional{' '}
                <span className="bg-gradient-to-r from-[#00df89] via-emerald-300 to-purple-400 bg-clip-text text-transparent">
                  eCommerce Website
                </span>{' '}
                Design &amp; Development
              </h1>
              <p className="text-gray-300 text-base sm:text-lg mt-6 leading-relaxed max-w-2xl font-light">
                We craft lightning-fast, high-converting digital storefronts tailored to skyrocket your brand. Backed by automated workflows, smooth checkout pathways, and robust payment integrations.
              </p>
              
              {/* Stat Badges */}
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="bg-[#071715] border border-white/5 px-4 py-2.5 rounded-2xl flex flex-col">
                  <span className="text-white font-black text-lg">+45%</span>
                  <span className="text-gray-400 text-xs font-semibold">Avg. Conversion Rate</span>
                </div>
                <div className="bg-[#071715] border border-white/5 px-4 py-2.5 rounded-2xl flex flex-col">
                  <span className="text-white font-black text-lg">Under 1.5s</span>
                  <span className="text-gray-400 text-xs font-semibold">Mobile Load Speed</span>
                </div>
                <div className="bg-[#071715] border border-white/5 px-4 py-2.5 rounded-2xl flex flex-col">
                  <span className="text-white font-black text-lg">100% Secure</span>
                  <span className="text-gray-400 text-xs font-semibold">PCI-DSS Compliant</span>
                </div>
              </div>

              {/* Call to Action Button */}
              <div className="mt-10">
                <Link
                  href="#contact-form"
                  className="inline-flex items-center px-8 py-4 bg-[#00df89] hover:bg-[#00c578] text-[#052021] font-extrabold text-base rounded-full transition-all hover:scale-105 shadow-[0_10px_30px_rgba(0,223,137,0.3)] hover:shadow-[0_15px_40px_rgba(0,223,137,0.5)] group"
                >
                  <svg 
                    className="w-5 h-5 mr-3 stroke-[3] transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-200" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                  <span>Get Started Today</span>
                </Link>
              </div>
            </div>

            {/* Hero Right Column: 3D-styled SVG/CSS Graphic */}
            <div className="lg:col-span-5 flex justify-center items-center relative animate-fadeIn">
              <div className="relative w-full max-w-[420px] aspect-square rounded-[3rem] border border-white/10 bg-gradient-to-tr from-[#020d0e] to-[#0b3336] p-8 shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden group">
                {/* Radial Glow Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,223,137,0.15),transparent_70%)] pointer-events-none group-hover:scale-110 transition-transform duration-700" />
                
                {/* Decorative Grid Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                {/* Floating T-Shirt Canvas */}
                <div className="relative w-full h-full flex flex-col justify-between items-center z-10">
                  {/* Store Header Simulation */}
                  <div className="w-full flex justify-between items-center bg-black/40 border border-white/5 rounded-xl px-4 py-2.5 backdrop-blur-md">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                    </div>
                    <span className="text-[10px] text-emerald-400 font-mono tracking-wider">mystore.com/checkout</span>
                    <div className="w-4.5 h-4.5 rounded-full bg-[#00df89]/20 flex items-center justify-center">
                      <span className="text-[8px] text-[#00df89] font-bold">1</span>
                    </div>
                  </div>

                  {/* Core Graphic: Floating T-Shirt */}
                  <div className="relative my-8 flex items-center justify-center w-full flex-1">
                    {/* Glowing background halo */}
                    <div className="absolute w-52 h-52 bg-emerald-500/20 rounded-full filter blur-3xl animate-pulse" />
                    
                    {/* Gradient borders and Floating frame */}
                    <div className="relative w-44 h-44 rounded-2xl bg-[#041a1b] border border-emerald-400/30 flex items-center justify-center shadow-2xl transition-transform duration-300 hover:scale-105">
                      {/* Stylized Purple T-Shirt SVG */}
                      <svg className="w-28 h-28 text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] animate-bounce" style={{ animationDuration: '4s' }} viewBox="0 0 100 100" fill="currentColor">
                        <path d="M30 15c-3 0-5 2-6 5l-10 18c-1 2 0 4 2 5l10 5c2 1 4 0 5-2l4-8v37c0 3 2 5 5 5h20c3 0 5-2 5-5V38l4 8c1 2 3 3 5 2l10-5c2-1 3-3 2-5L76 20c-1-3-3-5-6-5h-8c-2 0-3 2-4 3a8 8 0 0 1-16 0c-1-1-2-3-4-3h-8z" />
                      </svg>

                      {/* Float indicators */}
                      <span className="absolute -top-3 -right-3 bg-purple-500/90 border border-purple-300/30 text-white text-[10px] font-black rounded-lg px-2 py-1 shadow-lg">
                        $29.99
                      </span>
                    </div>
                  </div>

                  {/* Store Card Footer Simulation */}
                  <div className="w-full flex flex-col gap-2 bg-black/50 border border-white/5 rounded-xl p-3.5 backdrop-blur-md">
                    <div className="flex justify-between items-center">
                      <span className="text-[11px] font-bold text-white">Minimalist Tee</span>
                      <span className="text-[10px] text-gray-400">Size: M</span>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <div className="flex gap-0.5 text-yellow-400">
                        {"★★★★★".split("").map((char, i) => (
                          <span key={i} className="text-[10px]">{char}</span>
                        ))}
                      </div>
                      <span className="text-[9px] text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded font-bold">In Stock</span>
                    </div>
                    <button className="w-full mt-2 py-2 bg-[#00df89] hover:bg-[#00c578] text-[#052021] text-[11px] font-extrabold rounded-lg shadow-[0_4px_12px_rgba(0,223,137,0.3)] transition-all">
                      Add to Cart
                    </button>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 md:py-28 bg-[#020d0e] overflow-hidden">
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#00df89]">
              Store Performance &amp; Benefits
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              We Solve the Toughest{' '}
              <span className="bg-gradient-to-r from-teal-200 to-[#00df89] bg-clip-text text-transparent">
                eCommerce Hurdles
              </span>
            </h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base">
              Slow websites and clunky mobile checkouts destroy margins. Our builds optimize the entire user journey to ensure users complete purchases with zero hesitation.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Benefit 1: Mobile Funnel */}
            <div className="bg-[#051716]/60 border border-white/5 rounded-[2rem] p-8 flex flex-col justify-between hover:border-emerald-500/20 transition-all duration-300 group shadow-2xl">
              <div>
                <h3 className="text-xl font-extrabold text-white group-hover:text-[#00df89] transition-colors mb-3">
                  Interactive Mobile Funnels
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  Designed explicitly for thumb-friendly shopping. Over 70% of traffic is mobile — our screens are built to reduce click fatigue and optimize buying velocity.
                </p>
              </div>

              {/* Graphic: Mobile Checkout Simulation */}
              <div className="relative w-full h-44 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-center p-4 overflow-hidden">
                <div className="w-24 h-40 rounded-xl border border-white/10 bg-[#041a1b] p-2 flex flex-col justify-between relative shadow-lg">
                  <div className="h-2 w-12 bg-white/10 rounded-full mx-auto" />
                  
                  {/* Shopping Cart Mini Block */}
                  <div className="bg-emerald-400/10 border border-emerald-400/20 p-1.5 rounded-lg flex items-center gap-1.5 mt-2">
                    <svg className="w-4 h-4 text-[#00df89]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <div className="flex-1">
                      <div className="h-1 w-10 bg-white/20 rounded-full" />
                      <div className="h-1 w-6 bg-white/10 rounded-full mt-1" />
                    </div>
                  </div>

                  {/* Pulsing Click Hand cursor */}
                  <div className="absolute bottom-6 right-2 w-6 h-6 text-[#00df89] animate-ping" />
                  <div className="absolute bottom-4 right-1 text-[#00df89] transform translate-y-0.5">
                    <svg className="w-6 h-6 drop-shadow-[0_0_10px_rgba(0,223,137,0.8)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.259-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.259zm8.861 2.502a1 1 0 011.066.883A5.002 5.002 0 0017 13a1 1 0 11-2 0 3.003 3.003 0 01-4-2.829V5a1 1 0 112 0v2.242zm-5.029-.272a1 1 0 00-1.932.518l.259.966a1 1 0 001.932-.518l-.259-.966zM3.204 9.076a1 1 0 011.25.688l.967 3.607a1 1 0 01-.688 1.25 1 1 0 01-1.25-.688l-.967-3.607a1 1 0 01.688-1.25zM15.083 4a1 1 0 011 .998v4.32a3 3 0 01-1.127 2.348l-2.909 2.263a1 1 0 01-1.294.02l-1.077-.852a1 1 0 00-1.282.028l-3.146 2.62a1 1 0 11-1.296-1.524l3.148-2.622a3 3 0 013.844-.083l.534.422 2.193-1.706a1 1 0 00.376-.783V5a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  </div>

                  {/* Payment Button Simulation */}
                  <div className="w-full bg-[#00df89] h-4.5 rounded flex items-center justify-center">
                    <span className="text-[7px] text-[#052021] font-black">Pay Securely</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefit 2: Admin Dashboard */}
            <div className="bg-[#051716]/60 border border-white/5 rounded-[2rem] p-8 flex flex-col justify-between hover:border-purple-500/20 transition-all duration-300 group shadow-2xl">
              <div>
                <h3 className="text-xl font-extrabold text-white group-hover:text-[#a855f7] transition-colors mb-3">
                  Digital Admin Dashboard
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  Complete dashboard setup displaying operations at a glance. Manage orders, monitor shipping statuses, track stock, and review customer lifecycle graphs.
                </p>
              </div>

              {/* Graphic: Dashboard interface */}
              <div className="relative w-full h-44 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-center p-4">
                <div className="w-full h-36 bg-[#030e0f] rounded-xl border border-white/10 p-3 flex flex-col justify-between">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-gray-400 font-bold">Revenue Insights</span>
                    <span className="text-[9px] text-[#00df89] font-black">+32% MoM</span>
                  </div>
                  {/* Sales bar mock chart */}
                  <div className="flex gap-2.5 items-end justify-center h-16 pt-3">
                    <div className="w-3 bg-white/10 h-8 rounded-sm" />
                    <div className="w-3 bg-white/15 h-11 rounded-sm" />
                    <div className="w-3 bg-white/20 h-7 rounded-sm" />
                    <div className="w-3 bg-purple-500/60 h-14 rounded-sm animate-pulse" />
                    <div className="w-3 bg-emerald-500/70 h-18 rounded-sm animate-pulse" />
                  </div>
                  <div className="flex justify-between text-[8px] text-gray-500 font-mono mt-1">
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefit 3: Fast Storefront */}
            <div className="bg-[#051716]/60 border border-white/5 rounded-[2rem] p-8 flex flex-col justify-between hover:border-teal-500/20 transition-all duration-300 group shadow-2xl">
              <div>
                <h3 className="text-xl font-extrabold text-white group-hover:text-teal-400 transition-colors mb-3">
                  Blazing Fast Storefront
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  Supercharged by Next.js and static caching. We build clean, lightweight e-commerce storefronts that load instantly, preventing visitor bounces and boost SEO.
                </p>
              </div>

              {/* Graphic: Speed Indicator on Laptop */}
              <div className="relative w-full h-44 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-center p-4">
                <div className="relative flex flex-col items-center">
                  <svg className="w-20 h-20 text-[#00df89]" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                    {/* Circle Background */}
                    <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="4" strokeOpacity="0.05" />
                    {/* Progress Circle Arc */}
                    <circle cx="50" cy="50" r="40" stroke="url(#emeraldGrad)" strokeWidth="6" strokeDasharray="251.2" strokeDashoffset="45" strokeLinecap="round" />
                    <defs>
                      <linearGradient id="emeraldGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#00df89" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>
                    </defs>
                  </svg>
                  {/* Digital text inside circle */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <span className="text-[17px] font-black text-white tracking-tighter">0.9s</span>
                    <span className="text-[8px] text-emerald-400 font-mono tracking-widest uppercase">LOAD</span>
                  </div>
                  {/* Floating speed badge */}
                  <span className="absolute -bottom-2 bg-black border border-white/10 rounded px-2 py-0.5 text-[8px] text-gray-300 font-bold">
                    Grade A Performance
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20 md:py-28 bg-[#051c1d] overflow-hidden">
        {/* Glowing background circles */}
        <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-purple-500/5 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-[350px] h-[350px] bg-emerald-500/5 rounded-full blur-[110px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Text Content */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#00df89] mb-4">
                Our Technical Edge
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                Why Choose Our eCommerce Development Services?
              </h2>
              <p className="text-gray-300 mt-6 text-sm sm:text-base leading-relaxed">
                Building an online store requires a delicate balance of user-friendly interface design, lightning-fast rendering speeds, and ironclad transaction security. We do not use generic plugins or bloated builders that drag down speeds. Instead, we implement optimized code structures that guarantee superior performance.
              </p>

              {/* Core value list */}
              <ul className="mt-8 space-y-4">
                {[
                  { title: 'Tailored UX/UI Design', desc: 'No templates. Every button, banner, and product list is designed from scratch to complement your brand identity.' },
                  { title: 'Lightning Fast Speeds', desc: 'Optimized asset serving that satisfies Google Web Vitals, resulting in lower bounce rates and better SEO index rankings.' },
                  { title: 'Ironclad Security Standard', desc: 'Fully compliant integrations with trusted gateways ensuring safe customer data handling and secure web payments.' }
                ].map((val, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-[#00df89]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-extrabold text-sm sm:text-base">{val.title}</h4>
                      <p className="text-gray-400 text-xs sm:text-sm mt-1">{val.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Glowing Laptop display simulation */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[500px] aspect-[4/3] flex flex-col justify-end items-center">
                {/* Screen Housing */}
                <div className="w-11/12 aspect-[1.6] rounded-t-2xl border-4 border-slate-700 bg-black relative flex flex-col p-2 overflow-hidden shadow-2xl">
                  {/* Glass reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none z-10" />
                  
                  {/* Simulation of a website checkout page */}
                  <div className="relative w-full h-full bg-[#041a1b] rounded-lg p-2.5 flex flex-col justify-between z-0">
                    <div className="flex justify-between items-center border-b border-white/5 pb-1.5 mb-1.5">
                      <span className="text-[8px] font-black text-white uppercase tracking-wider">Premium Cart</span>
                      <span className="text-[7px] text-gray-500">2 Items</span>
                    </div>

                    <div className="flex gap-2 flex-1">
                      {/* Product items list */}
                      <div className="flex-1 flex flex-col gap-1.5">
                        <div className="bg-black/40 border border-white/5 p-1 rounded flex justify-between items-center">
                          <div className="flex items-center gap-1.5">
                            <div className="w-4 h-4 bg-purple-500/20 rounded flex items-center justify-center text-[7px] text-purple-400">👕</div>
                            <span className="text-[6px] text-white">Classic Tee</span>
                          </div>
                          <span className="text-[6px] text-gray-300 font-mono">$29.99</span>
                        </div>
                        <div className="bg-black/40 border border-white/5 p-1 rounded flex justify-between items-center">
                          <div className="flex items-center gap-1.5">
                            <div className="w-4 h-4 bg-emerald-500/20 rounded flex items-center justify-center text-[7px] text-emerald-400">👜</div>
                            <span className="text-[6px] text-white">Leather Bag</span>
                          </div>
                          <span className="text-[6px] text-gray-300 font-mono">$120.00</span>
                        </div>
                      </div>

                      {/* Payment Summary form */}
                      <div className="w-28 bg-[#030e0f] border border-white/5 rounded p-1.5 flex flex-col justify-between">
                        <div className="flex flex-col gap-1">
                          <span className="text-[5px] text-gray-500 uppercase font-black">Secure Checkout</span>
                          <div className="h-2 bg-white/5 border border-white/5 rounded px-1 flex items-center">
                            <span className="text-[4px] text-gray-400">Card Number: **** **** **** 4242</span>
                          </div>
                          <div className="flex gap-1">
                            <div className="flex-1 h-2 bg-white/5 border border-white/5 rounded px-1 flex items-center">
                              <span className="text-[4px] text-gray-400">EXP: 12/28</span>
                            </div>
                            <div className="w-6 h-2 bg-white/5 border border-white/5 rounded px-1 flex items-center">
                              <span className="text-[4px] text-gray-400">CVC: ***</span>
                            </div>
                          </div>
                        </div>

                        {/* Interactive Checkout Button Animation */}
                        <div className="relative mt-1">
                          <div className="w-full bg-[#00df89] h-3.5 rounded flex items-center justify-center shadow-[0_0_12px_rgba(0,223,137,0.3)] cursor-pointer group">
                            <span className="text-[5px] text-[#052021] font-black uppercase tracking-wider">Pay $149.99</span>
                          </div>
                          
                          {/* Animated pointer cursor clicking the pay button */}
                          <div className="absolute -bottom-2 -right-1 text-white animate-pulse">
                            <svg className="w-4 h-4 text-emerald-300 drop-shadow-[0_0_8px_rgba(16,185,129,0.7)]" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                            </svg>
                          </div>
                        </div>

                      </div>
                    </div>

                    {/* Order Successful Popup animation */}
                    <div className="absolute inset-0 bg-[#041a1b]/95 rounded-lg flex flex-col items-center justify-center z-20 animate-pulse" style={{ animationDuration: '3s' }}>
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center mb-1">
                        <svg className="w-4 h-4 text-[#00df89]" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-[8px] font-black text-white">Order Confirmed</span>
                      <span className="text-[6px] text-gray-400 mt-0.5">Thank you for your order!</span>
                    </div>

                  </div>
                </div>

                {/* Keyboard Base */}
                <div className="w-full h-3.5 bg-slate-600 rounded-b-xl border-t border-slate-500 relative flex items-center justify-center">
                  {/* Laptop indent */}
                  <div className="w-16 h-1 bg-slate-800 rounded-b-md absolute top-0" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Grid of Colorful Service Cards */}
      <section className="relative py-20 md:py-28 bg-[#020d0e] overflow-hidden">
        {/* Glow dots background */}
        <div className="absolute top-1/4 left-1/4 h-80 w-80 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#00df89]">
              Full Scope Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Our eCommerce{' '}
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-purple-400 bg-clip-text text-transparent">
                Specializations
              </span>
            </h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base">
              Every card below represents a cornerstone of high-converting commerce architectures. Engineered to build value and decrease shopping cart leakage.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Custom UI/UX Design',
                desc: 'Tailor-made e-commerce layouts centered on premium product showcase, frictionless filtering, and visual brand identity.',
                gradient: 'from-[#00df89]/20 to-[#3b82f6]/5',
                borderColor: 'group-hover:border-[#00df89]/40',
                shadowColor: 'group-hover:shadow-[#00df89]/10',
                icon: (
                  <svg className="w-6 h-6 text-[#00df89]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122l.188-.188a3 3 0 114.243 4.242l-.188.188a3 3 0 11-4.242-4.242zm-5.656-5.657l.188-.188a3 3 0 114.243 4.243l-.188.188a3 3 0 11-4.243-4.242zM10.75 8.75a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM17.25 15.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" />
                  </svg>
                )
              },
              {
                title: 'Seamless Checkout Funnels',
                desc: 'Frictionless, fields-minimized checkouts supporting card processing, instant wallets, digital pay setups, and inline validations.',
                gradient: 'from-[#8b5cf6]/20 to-[#ec4899]/5',
                borderColor: 'group-hover:border-[#8b5cf6]/40',
                shadowColor: 'group-hover:shadow-[#8b5cf6]/10',
                icon: (
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: 'Omnichannel Integration',
                desc: 'Synchronize listings, customers, catalog data, and orders seamlessly between Web, Amazon, Instagram Shop, and Etsy.',
                gradient: 'from-[#06b6d4]/20 to-[#3b82f6]/5',
                borderColor: 'group-hover:border-[#06b6d4]/40',
                shadowColor: 'group-hover:shadow-[#06b6d4]/10',
                icon: (
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.905 0-5.64-.78-8.006-2.14M21 7.5a11.953 11.953 0 00-9 2.5m-9-2.5A11.953 11.953 0 0012 10.5" />
                  </svg>
                )
              },
              {
                title: 'SEO & Speed Optimization',
                desc: 'Websites engineered to load in under 1.5 seconds. Fully optimized schema marks, structured metadata, and Google indexing readiness.',
                gradient: 'from-[#10b981]/20 to-[#00df89]/5',
                borderColor: 'group-hover:border-[#10b981]/40',
                shadowColor: 'group-hover:shadow-[#10b981]/10',
                icon: (
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: 'Gateway Setup & Security',
                desc: 'Integrate Stripe, PayPal, Klarna, Affirm, and local payment methods with absolute data safety and full PCI-DSS compliance.',
                gradient: 'from-[#ec4899]/20 to-[#f59e0b]/5',
                borderColor: 'group-hover:border-[#ec4899]/40',
                shadowColor: 'group-hover:shadow-[#ec4899]/10',
                icon: (
                  <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: 'Inventory & ERP Synced',
                desc: 'Connect your store inventory directly with CRM systems, warehouse controllers, shipping logistics, and stock suppliers.',
                gradient: 'from-[#f59e0b]/20 to-[#ef4444]/5',
                borderColor: 'group-hover:border-[#f59e0b]/40',
                shadowColor: 'group-hover:shadow-[#f59e0b]/10',
                icon: (
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                )
              }
            ].map((card, idx) => (
              <div
                key={idx}
                className={`group relative rounded-[2rem] border border-white/5 bg-gradient-to-br ${card.gradient} p-8 hover:-translate-y-1.5 transition-all duration-300 ${card.borderColor} shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${card.shadowColor}`}
              >
                {/* Gloss Overlay */}
                <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_35%)] pointer-events-none" />

                {/* Card Icon */}
                <div className="w-12 h-12 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center mb-6">
                  {card.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack section */}
      <section className="py-16 md:py-20 bg-[#051717] border-t border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none z-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-0 flex flex-col items-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#00df89] mb-8">
            Engineered with Modern eCommerce Ecosystems
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-80 hover:opacity-100 transition-opacity">
            {[
              { name: 'Shopify Plus', icon: '🛍️' },
              { name: 'WooCommerce', icon: '🔮' },
              { name: 'Next.js headless', icon: '🌐' },
              { name: 'React UI', icon: '⚛️' },
              { name: 'Stripe Pay', icon: '💳' },
              { name: 'Tailwind CSS', icon: '🎨' },
              { name: 'Sanity CMS', icon: '⚙️' },
              { name: 'Figma Design', icon: '📐' }
            ].map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 bg-black/40 border border-white/5 rounded-2xl px-5 py-3 text-sm font-semibold text-white/90 hover:text-white hover:border-[#00df89]/30 transition-all hover:scale-105 cursor-default"
              >
                <span className="text-base">{tech.icon}</span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Carousel Showcase 1: Storefronts */}
      <section className="relative py-20 md:py-28 bg-[#020d0e] overflow-hidden">
        {/* Glow indicators */}
        <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#00df89]">
              Live eCommerce Showcase
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Featured{' '}
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-purple-400 bg-clip-text text-transparent">
                Storefronts
              </span>
            </h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base">
              Swipe or click to browse real e-commerce storefront deployments. Designed to look beautiful, load instantly, and drive sales.
            </p>
          </div>

          {/* Active Carousel Card */}
          <div className="relative max-w-5xl mx-auto">
            {/* Project Slide Wrapper */}
            <div className="bg-[#051716]/60 border border-white/5 rounded-[2.5rem] p-6 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Decorative radial card glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,223,137,0.06),transparent_50%)] pointer-events-none" />

              {/* Left Side: Mockup Image inside a Browser Frame */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="w-full rounded-2xl border border-white/10 bg-[#030e0f] overflow-hidden shadow-inner relative aspect-[4/3]">
                  {/* Browser top-bar mockup */}
                  <div className="bg-black/80 border-b border-white/5 px-4 py-2 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                    </div>
                    <div className="bg-white/5 text-[9px] text-gray-500 rounded px-4 py-0.5 mx-auto font-mono">
                      https://{featuredStorefronts[activeCarousel1].id}.com
                    </div>
                  </div>

                  {/* Browser content image */}
                  <div className="relative w-full h-[calc(100%-28px)] overflow-hidden">
                    <Image
                      src={featuredStorefronts[activeCarousel1].image}
                      alt={featuredStorefronts[activeCarousel1].title}
                      fill
                      sizes="(max-w-768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                    />
                  </div>
                </div>
              </div>

              {/* Right Side: Description & Metrics */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div>
                  {/* Deliverable Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredStorefronts[activeCarousel1].tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-white/5 border border-white/5 px-2.5 py-1 text-[10px] font-semibold text-white/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                    {featuredStorefronts[activeCarousel1].title}
                  </h3>
                  <p className="text-[#00df89] text-xs sm:text-sm font-semibold tracking-wide mt-1.5">
                    {featuredStorefronts[activeCarousel1].subtitle}
                  </p>
                  
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mt-4 sm:mt-6">
                    {featuredStorefronts[activeCarousel1].description}
                  </p>

                  {/* Metrics list */}
                  <div className="grid grid-cols-3 gap-3 border-t border-white/5 pt-6 mt-6 sm:mt-8">
                    {featuredStorefronts[activeCarousel1].metrics.map((metric, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className={`text-xl sm:text-2xl font-black bg-gradient-to-r ${featuredStorefronts[activeCarousel1].accentColor} bg-clip-text text-transparent`}>
                          {metric.value}
                        </span>
                        <span className="text-[9px] sm:text-[10px] text-gray-500 font-bold mt-1 uppercase tracking-wide leading-tight">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* External link action */}
                <div className="mt-8">
                  <Link
                    href="#contact-form"
                    className="inline-flex items-center gap-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-2.5 text-xs font-bold text-white transition-all duration-300"
                  >
                    <span>Request Demo Store</span>
                    <svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>

            </div>

            {/* Slider Navigation controls */}
            <div className="flex justify-between items-center mt-8">
              <div className="flex gap-1.5">
                {featuredStorefronts.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveCarousel1(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeCarousel1 === idx ? 'w-8 bg-[#00df89]' : 'w-2.5 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setActiveCarousel1((prev) => (prev === 0 ? featuredStorefronts.length - 1 : prev - 1))}
                  className="w-11 h-11 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center text-white active:scale-95 transition-transform"
                  aria-label="Previous Project"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => setActiveCarousel1((prev) => (prev === featuredStorefronts.length - 1 ? 0 : prev + 1))}
                  className="w-11 h-11 rounded-full border border-white/10 bg-[#00df89] hover:bg-[#00c578] flex items-center justify-center text-[#052021] active:scale-95 transition-transform"
                  aria-label="Next Project"
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

      {/* Value Dials section */}
      <section className="relative py-20 md:py-28 bg-[#051c1d] overflow-hidden">
        {/* Glow dots background */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[110px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#00df89]">
              Engineered Values
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Our eCommerce{' '}
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-[#00df89] bg-clip-text text-transparent">
                Value Dials
              </span>
            </h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base">
              Unlike developers who deliver simple templates, our engineering standards ensure that every performance and conversion metric dial is cranked to the max.
            </p>
          </div>

          {/* Dials Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueDials.map((dial, idx) => (
              <div
                key={idx}
                className="bg-[#031516] border border-white/5 rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center shadow-2xl hover:border-emerald-500/20 transition-colors"
              >
                {/* Circular track metric representation */}
                <div className="relative w-32 h-32 flex items-center justify-center mb-6">
                  {/* Outer circle layout */}
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="4" strokeOpacity="0.03" fill="none" />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="6"
                      strokeDasharray="251.2"
                      strokeDashoffset={251.2 - (251.2 * parseFloat(dial.percentage)) / 100}
                      strokeLinecap="round"
                      fill="none"
                      className="text-[#00df89] drop-shadow-[0_0_8px_rgba(0,223,137,0.4)]"
                    />
                  </svg>
                  {/* Center Text representation */}
                  <div className="absolute flex flex-col items-center">
                    <span className="text-2xl font-black text-white tracking-tighter">{dial.value}</span>
                  </div>
                </div>

                <h3 className="text-white font-extrabold text-sm sm:text-base mb-1">
                  {dial.title}
                </h3>
                <span className="text-gray-500 text-[11px] font-mono uppercase tracking-widest">
                  Maximum Setting
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Web Development Expertise in Demand */}
      <section className="relative py-20 md:py-28 bg-[#020d0e] overflow-hidden">
        {/* Glow dots background */}
        <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-emerald-500/5 rounded-full blur-[110px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left side stats and metrics */}
            <div className="lg:col-span-6 order-2 lg:order-1 grid grid-cols-2 gap-4">
              <div className="bg-[#051716] border border-white/5 p-6 rounded-3xl flex flex-col justify-between shadow-2xl">
                <span className="text-3xl font-black text-[#00df89] tracking-tight">1.2s</span>
                <div>
                  <h4 className="text-white font-bold text-sm mt-4">Headless Speed</h4>
                  <p className="text-gray-400 text-xs mt-1">Faster render saves customers from cart abandonment.</p>
                </div>
              </div>
              <div className="bg-[#051716] border border-white/5 p-6 rounded-3xl flex flex-col justify-between shadow-2xl">
                <span className="text-3xl font-black text-purple-400 tracking-tight">99.9%</span>
                <div>
                  <h4 className="text-white font-bold text-sm mt-4">Hosting SLA</h4>
                  <p className="text-gray-400 text-xs mt-1">Keep shop storefront running during checkout rushes.</p>
                </div>
              </div>
              <div className="bg-[#051716] border border-white/5 p-6 rounded-3xl flex flex-col justify-between shadow-2xl col-span-2">
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-black text-cyan-400 tracking-tight">+45%</span>
                  <span className="text-xs text-[#00df89] bg-emerald-400/10 px-2 py-0.5 rounded-full font-bold">SEO Peak</span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mt-4">Google Search Visibility Boost</h4>
                  <p className="text-gray-400 text-xs mt-1">Properly indexed schema structured data pushes products to the first page of Google search results.</p>
                </div>
              </div>
            </div>

            {/* Right side explanation */}
            <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#00df89] mb-4">
                Global Commerce Standards
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                Web Development Expertise in Demand
              </h2>
              <p className="text-gray-300 mt-6 text-sm sm:text-base leading-relaxed">
                As direct-to-consumer marketplaces expand globally, basic web templates are no longer sufficient. Companies require custom engineering to manage API integrations, localized currencies, inventory syncing, and analytics reports. We implement modern frameworks to ensure your site is secure, responsive, and ready to scale.
              </p>
              <div className="mt-8 flex flex-col gap-3">
                <div className="flex gap-3 items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00df89]" />
                  <span className="text-white font-bold text-sm">Automated Inventory Management integration</span>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00df89]" />
                  <span className="text-white font-bold text-sm">International multi-currency localization</span>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00df89]" />
                  <span className="text-white font-bold text-sm">Robust Headless architecture configurations</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Project Carousel Showcase 2: Cart & Checkout Mockups */}
      <section className="relative py-20 md:py-28 bg-[#051c1d] overflow-hidden border-t border-white/5">
        {/* Glow dots background */}
        <div className="absolute top-1/4 left-10 h-80 w-80 rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#00df89]">
              Funnel Engineering Showcases
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Checkout &amp;{' '}
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-purple-400 bg-clip-text text-transparent">
                User Flows
              </span>
            </h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base">
              Explore how we design cart checkouts and administrative dashboard tools to ensure seamless business management and prevent checkout drops.
            </p>
          </div>

          {/* Active Carousel Card */}
          <div className="relative max-w-5xl mx-auto">
            {/* Project Slide Wrapper */}
            <div className="bg-[#031516] border border-white/5 rounded-[2.5rem] p-6 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Side: Mockup Image inside a Browser Frame */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="w-full rounded-2xl border border-white/10 bg-black overflow-hidden shadow-inner relative aspect-[4/3]">
                  {/* Browser top-bar mockup */}
                  <div className="bg-[#030e0f] border-b border-white/5 px-4 py-2 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                    </div>
                    <div className="bg-white/5 text-[9px] text-gray-500 rounded px-4 py-0.5 mx-auto font-mono">
                      https://checkout.{userFlowProjects[activeCarousel2].id}.io
                    </div>
                  </div>

                  {/* Browser content image */}
                  <div className="relative w-full h-[calc(100%-28px)] overflow-hidden">
                    <Image
                      src={userFlowProjects[activeCarousel2].image}
                      alt={userFlowProjects[activeCarousel2].title}
                      fill
                      sizes="(max-w-768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                    />
                  </div>
                </div>
              </div>

              {/* Right Side: Description & Metrics */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div>
                  {/* Deliverable Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {userFlowProjects[activeCarousel2].tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-white/5 border border-white/5 px-2.5 py-1 text-[10px] font-semibold text-white/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                    {userFlowProjects[activeCarousel2].title}
                  </h3>
                  <p className="text-[#00df89] text-xs sm:text-sm font-semibold tracking-wide mt-1.5">
                    {userFlowProjects[activeCarousel2].subtitle}
                  </p>
                  
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mt-4 sm:mt-6">
                    {userFlowProjects[activeCarousel2].description}
                  </p>

                  {/* Metrics list */}
                  <div className="grid grid-cols-3 gap-3 border-t border-white/5 pt-6 mt-6 sm:mt-8">
                    {userFlowProjects[activeCarousel2].metrics.map((metric, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className={`text-xl sm:text-2xl font-black bg-gradient-to-r ${userFlowProjects[activeCarousel2].accentColor} bg-clip-text text-transparent`}>
                          {metric.value}
                        </span>
                        <span className="text-[9px] sm:text-[10px] text-gray-500 font-bold mt-1 uppercase tracking-wide leading-tight">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* External link action */}
                <div className="mt-8">
                  <Link
                    href="#contact-form"
                    className="inline-flex items-center gap-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-2.5 text-xs font-bold text-white transition-all duration-300"
                  >
                    <span>Request Demo Integration</span>
                    <svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>

            </div>

            {/* Slider Navigation controls */}
            <div className="flex justify-between items-center mt-8">
              <div className="flex gap-1.5">
                {userFlowProjects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveCarousel2(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeCarousel2 === idx ? 'w-8 bg-[#00df89]' : 'w-2.5 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setActiveCarousel2((prev) => (prev === 0 ? userFlowProjects.length - 1 : prev - 1))}
                  className="w-11 h-11 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center text-white active:scale-95 transition-transform"
                  aria-label="Previous Project"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => setActiveCarousel2((prev) => (prev === userFlowProjects.length - 1 ? 0 : prev + 1))}
                  className="w-11 h-11 rounded-full border border-white/10 bg-[#00df89] hover:bg-[#00c578] flex items-center justify-center text-[#052021] active:scale-95 transition-transform"
                  aria-label="Next Project"
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

      {/* Feature Icons Grid section */}
      <section className="relative py-20 md:py-28 bg-[#020d0e] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#00df89]">
            Enterprise Integrity
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-16">
            Standards Delivered in Every Store
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Responsive Layouts', text: 'Stunning look across mobile, iPad, and desktop.', icon: '📱' },
              { label: 'SEO Integration', text: 'Meta tag schemas and structured XML files.', icon: '🔍' },
              { label: 'PCI Compliant', text: 'Secure checkout and customer credential privacy.', icon: '🛡️' },
              { label: 'API Extensible', text: 'Connect tools for email marketing and inventory.', icon: '🔌' }
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center bg-[#051716] border border-white/5 rounded-2xl p-6 shadow-2xl hover:border-emerald-500/20 transition-all">
                <span className="text-3xl mb-4">{feature.icon}</span>
                <h4 className="text-white font-extrabold text-sm sm:text-base mb-2">{feature.label}</h4>
                <p className="text-gray-400 text-xs">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 md:py-28 bg-[#051c1d] overflow-hidden">
        {/* Glow background circles */}
        <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 h-96 w-96 rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#00df89]">
              Have Questions?
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-[#00df89] bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base">
              Clear answers regarding our design architecture, platform migrations, processing integrations, and subscription assistance packages.
            </p>
          </div>

          {/* Accordion Questions List */}
          <div className="space-y-4">
            {faqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-[#031516] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/10 shadow-2xl"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full flex justify-between items-center p-6 text-left text-white font-extrabold text-sm sm:text-base focus:outline-none transition-colors"
                  >
                    <span>{faq.question}</span>
                    <span className="ml-4 shrink-0">
                      <svg
                        className={`w-5 h-5 text-emerald-400 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  {/* Expandable answer panel */}
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-72 border-t border-white/5' : 'max-h-0'
                    }`}
                  >
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

      {/* Bottom Call-To-Action Box (Contrasting White Block) */}
      <section id="contact-form" className="relative py-20 md:py-28 bg-[#020d0e] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
          
          {/* White Card Box Container */}
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 md:p-16 text-black shadow-2xl flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-16 relative overflow-hidden group">
            {/* Background design accents */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-emerald-100 rounded-full filter blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-purple-100/50 rounded-full filter blur-3xl pointer-events-none" />

            {/* Left side text */}
            <div className="flex-1 text-left relative z-10">
              <span className="inline-flex rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1 text-[11px] font-black uppercase tracking-wider text-emerald-800 mb-4">
                Boost Your Revenue
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Raise The Bar for your eCommerce Online Store With Our Professionals
              </h2>
              <p className="text-slate-600 mt-4 text-sm sm:text-base max-w-2xl">
                Ready to transform your digital footprint and create a storefront that converts visitors into brand advocates? Let&apos;s map out a strategy that works.
              </p>
            </div>

            {/* Right side CTA Button */}
            <div className="shrink-0 relative z-10 w-full lg:w-auto text-center">
              <Link
                href="mailto:hello@crafix.tech?subject=eCommerce Project Discussion"
                className="inline-flex w-full lg:w-auto justify-center items-center px-8 py-5 bg-[#052021] hover:bg-[#073233] text-white font-extrabold text-base sm:text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-[0_10px_30px_rgba(5,32,33,0.25)] group"
              >
                <span>Let&apos;s Discuss Project</span>
                <svg
                  className="w-5 h-5 ml-3 stroke-[2.5] transform group-hover:translate-x-0.5 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
