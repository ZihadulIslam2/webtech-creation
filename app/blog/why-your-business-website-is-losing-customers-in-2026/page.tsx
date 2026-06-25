'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function WhyWebsiteLosingCustomersPage() {
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
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#00df89]">
              Website Tips
            </span>
            <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider">
              June 2026
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6">
            Why Your Business Website Is{' '}
            <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-[#00df89] bg-clip-text text-transparent">
              Losing Customers
            </span>{' '}
            in 2026
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
            Your website is often the first impression potential customers have of your business.
            If it&apos;s slow, outdated, or difficult to use, visitors may leave before contacting you.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="relative py-16 md:py-20 bg-[#020d0e] overflow-hidden border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
            Your website is often the first impression potential customers have of your business.
            If it&apos;s slow, outdated, or difficult to use, visitors may leave before contacting you.
            In today&apos;s competitive digital landscape, a poor online presence can cost you real
            revenue. The good news is that most issues are fixable — and often with surprisingly
            small changes.
          </p>
        </div>
      </section>

      {/* Signs Your Website Needs Improvement */}
      <section className="relative py-20 md:py-28 bg-black overflow-hidden border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-12">
            <span className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#00df89] mb-4">
              Warning Signs
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Signs Your Website Needs{' '}
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-[#00df89] bg-clip-text text-transparent">
                Improvement
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-[#051716]/60 border border-white/5 rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/5 border border-white/10 flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white mb-2">Slow Loading Speed</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Studies consistently show that users leave websites that take too long to load.
                    Even a one-second delay can reduce conversions significantly. Google also penalises
                    slow sites in search rankings, making speed a critical factor for both user
                    experience and visibility.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#051716]/60 border border-white/5 rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500/20 to-yellow-500/5 border border-white/10 flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white mb-2">Not Mobile Friendly</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Most local business searches now happen on mobile devices. If your site doesn&apos;t
                    look great and function smoothly on smartphones, you&apos;re turning away a massive
                    segment of potential customers. Google&apos;s mobile-first indexing makes this even
                    more important.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#051716]/60 border border-white/5 rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-red-500/5 border border-white/10 flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white mb-2">No Clear Call to Action</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Visitors should immediately know how to take the next step. Without clear,
                    prominent calls to action — such as calling you, booking an appointment, or
                    requesting a quote — potential leads will leave your site unsure of what to do
                    next.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#051716]/60 border border-white/5 rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/5 border border-white/10 flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white mb-2">Outdated Design</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    An old design can reduce trust and make your business appear less professional.
                    First impressions matter — visitors judge your credibility within seconds, and an
                    outdated look can send the wrong message about your attention to detail.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Fix It */}
      <section className="relative py-20 md:py-28 bg-[#020d0e] overflow-hidden border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-12">
            <span className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#00df89] mb-4">
              Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              How to{' '}
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-[#00df89] bg-clip-text text-transparent">
                Fix It
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#051716]/60 border border-white/5 rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 shadow-2xl">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/5 border border-white/10 flex items-center justify-center text-2xl mb-4">
                ⚡
              </div>
              <h3 className="text-lg font-extrabold text-white mb-2">Improve Page Speed</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Compress images, enable caching, and use a content delivery network. A faster site
                keeps visitors engaged and improves your search engine ranking.
              </p>
            </div>

            <div className="bg-[#051716]/60 border border-white/5 rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 shadow-2xl">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/5 border border-white/10 flex items-center justify-center text-2xl mb-4">
                🎨
              </div>
              <h3 className="text-lg font-extrabold text-white mb-2">Update the Design</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Refresh your site with a modern, clean layout that reflects your brand and builds
                trust with visitors. Small visual updates can make a big difference.
              </p>
            </div>

            <div className="bg-[#051716]/60 border border-white/5 rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 shadow-2xl">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/5 border border-white/10 flex items-center justify-center text-2xl mb-4">
                📞
              </div>
              <h3 className="text-lg font-extrabold text-white mb-2">Add Clear Contact Options</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Make your phone number, email, and contact form easy to find on every page.
                Remove friction from the customer journey.
              </p>
            </div>

            <div className="bg-[#051716]/60 border border-white/5 rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 shadow-2xl">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/5 border border-white/10 flex items-center justify-center text-2xl mb-4">
                📱
              </div>
              <h3 className="text-lg font-extrabold text-white mb-2">Optimize for Mobile</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Ensure your site is fully responsive with touch-friendly navigation and fast
                loading on all mobile devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="relative py-20 md:py-28 bg-black overflow-hidden border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-gradient-to-br from-[#051716] to-[#020d0e] border border-emerald-500/10 rounded-[2rem] p-8 sm:p-12 shadow-2xl">
            <span className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#00df89] mb-4">
              Final Thoughts
            </span>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
              A modern website can help turn more visitors into paying customers and support
              long-term business growth. By addressing these common issues — speed, mobile
              readiness, clear calls to action, and modern design — you can create a site that
              works hard for your business every single day.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 bg-[#020d0e] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 md:p-16 text-black shadow-2xl flex flex-col lg:flex-row justify-between items-center gap-10 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-emerald-100 rounded-full filter blur-3xl pointer-events-none" />
            <div className="flex-1 text-left relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Ready for a Website That Works?
              </h2>
              <p className="text-slate-600 mt-4 text-sm sm:text-base max-w-xl">
                Let us build a modern, high-performing website that turns visitors into customers.
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
