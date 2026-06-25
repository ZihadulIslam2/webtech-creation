'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function GoogleMapsLeadsPage() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />

      {/* Back to Blog */}
      <section className="relative pt-36 pb-0 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-[#00df89] transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="relative pt-10 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#083032]/40 via-black to-black pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
              Local SEO
            </span>
            <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider">
              June 2026
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6">
            How Local Businesses Can Get More{' '}
            <span className="bg-gradient-to-r from-blue-300 via-cyan-200 to-blue-400 bg-clip-text text-transparent">
              Leads from Google Maps
            </span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
            When customers search for services near them, they often choose businesses shown in
            Google Maps. Learn how to optimise your presence.
          </p>
        </div>
      </section>

      {/* Why Google Maps Matters */}
      <section className="relative py-16 md:py-20 bg-[#020d0e] overflow-hidden border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-10">
            <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-4">
              Importance
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Why Google Maps{' '}
              <span className="bg-gradient-to-r from-blue-300 via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                Matters
              </span>
            </h2>
          </div>
          <div className="bg-gradient-to-br from-[#051716] to-[#020d0e] border border-white/5 rounded-[2rem] p-8 sm:p-10 shadow-2xl">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
              When customers search for &quot;plumber near me&quot;, &quot;dentist near me&quot;, or
              &quot;electrician near me&quot;, they often choose businesses shown in Google Maps.
              These local pack results appear at the top of search results and receive the majority
              of clicks. If your business isn&apos;t optimised for Google Maps, you&apos;re
              missing out on a steady stream of ready-to-buy local customers.
            </p>
          </div>
        </div>
      </section>

      {/* Steps to Improve Visibility */}
      <section className="relative py-20 md:py-28 bg-black overflow-hidden border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-12">
            <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-4">
              Action Steps
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Steps to Improve{' '}
              <span className="bg-gradient-to-r from-blue-300 via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                Visibility
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-[#051716]/60 border border-white/5 rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/5 border border-white/10 flex items-center justify-center text-2xl shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white mb-2">Complete Your Business Profile</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Include your business hours, services, phone number, and website URL. A fully
                    completed profile signals to Google that your business is active and trustworthy,
                    which can improve your local ranking significantly.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#051716]/60 border border-white/5 rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/5 border border-white/10 flex items-center justify-center text-2xl shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white mb-2">Add Quality Photos</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Businesses with photos often receive more engagement — including more clicks,
                    more direction requests, and more phone calls. Upload high-quality images of
                    your storefront, team, and work to showcase your business.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#051716]/60 border border-white/5 rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/5 border border-white/10 flex items-center justify-center text-2xl shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white mb-2">Collect Reviews</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Positive reviews can improve trust and visibility. Encourage satisfied customers
                    to leave reviews on your Google Business Profile, and take the time to respond
                    to reviews — both positive and negative — to show you value feedback.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#051716]/60 border border-white/5 rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/5 border border-white/10 flex items-center justify-center text-2xl shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white mb-2">Keep Information Updated</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Ensure contact details, service information, and business hours are always
                    accurate. Outdated information frustrates customers and can hurt your ranking.
                    Regular updates also signal to Google that your business is active.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Thoughts */}
      <section className="relative py-20 md:py-28 bg-[#020d0e] overflow-hidden border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-gradient-to-br from-[#051716] to-[#020d0e] border border-blue-500/10 rounded-[2rem] p-8 sm:p-12 shadow-2xl">
            <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-4">
              Final Thoughts
            </span>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
              Optimising your Google Business Profile is one of the most effective ways to increase
              local visibility. By keeping your profile complete, accurate, and engaging with
              photos and reviews, you can attract more local customers who are actively searching
              for the services you offer.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 md:p-16 text-black shadow-2xl flex flex-col lg:flex-row justify-between items-center gap-10 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-100 rounded-full filter blur-3xl pointer-events-none" />
            <div className="flex-1 text-left relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Need Help With Local SEO?
              </h2>
              <p className="text-slate-600 mt-4 text-sm sm:text-base max-w-xl">
                We help local businesses optimise their online presence and attract more customers.
              </p>
            </div>
            <div className="shrink-0 relative z-10 flex flex-wrap gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center px-8 py-5 bg-gray-100 hover:bg-gray-200 text-slate-900 font-extrabold text-base sm:text-lg rounded-full transition-all hover:scale-105"
              >
                More Articles
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-5 bg-[#00df89] hover:bg-[#00c578] text-black font-extrabold text-base sm:text-lg rounded-full transition-all hover:scale-105 shadow-[0_10px_30px_rgba(0,223,137,0.35)]"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
