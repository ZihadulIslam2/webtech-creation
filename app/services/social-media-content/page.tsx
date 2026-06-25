'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const service = {
  title: 'Social Media Content + AI Content',
  tagline: 'Consistent, engaging content that grows your audience',
  description:
    'We create and manage social media content across platforms using a blend of human creativity and AI-powered tools. Keep your brand top-of-mind with regular, high-quality posts.',
  icon: '📱',
};

const offerings = [
  { title: 'Facebook Posts', desc: 'Eye-catching posts and carousels tailored to your audience with strategic scheduling for maximum reach.' },
  { title: 'Instagram Posts', desc: 'Scroll-stopping visuals, Reels, and Stories designed to build your brand and drive engagement.' },
  { title: 'LinkedIn Content', desc: 'Professional thought-leadership content, company updates, and industry insights to grow your network.' },
  { title: 'Short Videos', desc: 'Platform-optimised short-form video content including Reels, TikToks, and YouTube Shorts.' },
];

const targets = [
  { name: 'Small Businesses', icon: '🏪' },
  { name: 'Agencies', icon: '🏢' },
  { name: 'Consultants', icon: '💼' },
  { name: 'E-commerce Brands', icon: '🛒' },
];

const skills = ['Content Strategy', 'AI Content Tools', 'Graphic Design', 'Video Editing'];

const pricingPlans = [
  { name: 'Starter', price: '£200', period: '/month', desc: 'Ideal for small businesses building their social presence.', features: ['10 posts per month', '2 platform management', 'Basic graphic design', 'Monthly content calendar', 'Community management'] },
  { name: 'Growth', price: '£500', period: '/month', desc: 'For growing brands that want consistent, quality content.', features: ['20 posts per month', '4 platform management', 'AI-optimised content', 'Video content creation', 'Engagement analytics', 'Monthly strategy call'] },
  { name: 'Premium', price: '£1,000', period: '/month', desc: 'Full-service content management for serious brands.', features: ['30+ posts per month', 'All major platforms', 'Custom AI content strategy', 'Weekly video content', 'Paid ad creative support', 'Dedicated content manager'] },
];

const faqs = [
  { q: 'How many posts will you create per week?', a: 'Our Starter tier includes roughly 2–3 posts per week, Growth delivers 5 posts per week, and Premium provides 7+ posts per week across all platforms.' },
  { q: 'Do you use AI for content creation?', a: 'Yes — we blend AI tools with human oversight to scale content production while maintaining your brand voice and quality standards.' },
  { q: 'Can you manage existing accounts?', a: 'Absolutely. We can take over your existing social media accounts or build new ones from scratch, whichever works best for you.' },
  { q: 'How do you measure content performance?', a: 'We provide monthly reports covering reach, engagement, follower growth, and click-through rates, with recommendations for optimisation.' },
];

export default function SocialMediaContentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[85vh] bg-[#052021] pt-32 pb-20 overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#083032]/40 via-[#041a1b]/80 to-black pointer-events-none" />
        <div className="absolute top-1/4 left-1/10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 text-left">
              <span className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#00df89] mb-6">
                {service.title}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
                Consistent, engaging content{' '}
                <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-[#00df89] bg-clip-text text-transparent">
                  that grows your audience
                </span>
              </h1>
              <p className="text-gray-300 text-base sm:text-lg mt-6 leading-relaxed max-w-xl font-light">
                {service.description}
              </p>
              <div className="mt-10 flex flex-wrap gap-4 items-center">
                <Link
                  href="#contact"
                  className="inline-flex items-center px-8 py-4 bg-[#00df89] hover:bg-[#00c578] text-black font-extrabold text-base rounded-full transition-all hover:scale-105 shadow-[0_10px_30px_rgba(0,223,137,0.35)]"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[400px] aspect-square rounded-[3rem] border border-white/10 bg-gradient-to-tr from-[#020d0e] to-[#0b3336] p-8 flex items-center justify-center shadow-2xl">
                <span className="text-8xl animate-pulse" style={{ animationDuration: '3s' }}>{service.icon}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="relative py-20 md:py-28 bg-[#020d0e] overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#00df89]">What We Offer</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Our{' '}
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-[#00df89] bg-clip-text text-transparent">
                Social Media Content
              </span>{' '}
              Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerings.map((item, idx) => (
              <div key={idx} className="bg-[#051716]/60 border border-white/5 rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 shadow-2xl">
                <h3 className="text-lg font-extrabold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Industries */}
      <section className="relative py-20 md:py-28 bg-black overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#00df89]">Who We Help</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Perfect for{' '}
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-[#00df89] bg-clip-text text-transparent">
                Growing Brands
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {targets.map((t, idx) => (
              <div key={idx} className="bg-[#051716]/60 border border-white/5 rounded-2xl p-6 text-center hover:-translate-y-1 transition-all duration-300 shadow-2xl group">
                <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform">{t.icon}</span>
                <span className="text-white font-bold text-sm">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="relative py-16 md:py-20 bg-[#020d0e] overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#00df89] mb-8">Our Skills</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {skills.map((s, idx) => (
              <div key={idx} className="bg-[#051716] border border-white/5 rounded-2xl px-6 py-3 text-sm font-semibold text-white/90 hover:border-emerald-500/30 transition-all">
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative py-20 md:py-28 bg-black overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#00df89]">Pricing</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Flexible{' '}
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-[#00df89] bg-clip-text text-transparent">
                Monthly Plans
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, idx) => (
              <div key={idx} className={`relative bg-[#051716]/60 border border-white/5 rounded-[2rem] p-8 flex flex-col justify-between shadow-2xl hover:-translate-y-1 transition-all duration-300 ${idx === 1 ? 'border-emerald-500/30' : ''}`}>
                {idx === 1 && (
                  <div className="absolute top-0 right-0 bg-[#00df89] text-black text-[9px] font-black uppercase tracking-wider py-1 px-4 rounded-bl-xl">
                    Popular
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-black text-white">{plan.name}</h3>
                  <div className="flex items-baseline mt-4">
                    <span className="text-4xl font-black text-white">{plan.price}</span>
                    <span className="text-gray-400 text-sm ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-400 text-xs mt-2">{plan.desc}</p>
                  <ul className="mt-6 space-y-3 border-t border-white/5 pt-6">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <svg className="w-4 h-4 text-[#00df89] shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300 text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="#contact"
                  className="mt-8 w-full inline-flex justify-center items-center py-4 bg-[#00df89] hover:bg-[#00c578] text-black font-extrabold text-sm rounded-xl transition-all"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-20 md:py-28 bg-[#020d0e] overflow-hidden border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#00df89]">FAQs</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-[#00df89] bg-clip-text text-transparent">Questions</span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-[#051716]/60 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300">
                  <button onClick={() => setOpenFaq(isOpen ? null : idx)} className="w-full flex justify-between items-center p-6 text-left text-white font-extrabold text-sm sm:text-base focus:outline-none">
                    <span>{faq.q}</span>
                    <svg className={`w-5 h-5 text-emerald-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-60 border-t border-white/5' : 'max-h-0'}`}>
                    <p className="p-6 text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative py-20 md:py-28 bg-[#020d0e] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 md:p-16 text-black shadow-2xl flex flex-col lg:flex-row justify-between items-center gap-10 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-emerald-100 rounded-full filter blur-3xl pointer-events-none" />
            <div className="flex-1 text-left relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Ready to Grow Your Audience?
              </h2>
              <p className="text-slate-600 mt-4 text-sm sm:text-base max-w-xl">
                Let us create a social media strategy that keeps your brand top-of-mind. Get in touch for a custom quote.
              </p>
            </div>
            <div className="shrink-0 relative z-10">
              <Link
                href="mailto:hello@Webtech.com?subject=Social Media Content Enquiry"
                className="inline-flex items-center px-8 py-5 bg-[#052021] hover:bg-[#073233] text-white font-extrabold text-base sm:text-lg rounded-full transition-all hover:scale-105"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
