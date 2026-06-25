import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function LocalBusinessWebsite() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#083032]/40 via-black to-black pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#00df89] transition-colors mb-8 group"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 text-xs text-gray-500 font-semibold uppercase tracking-wider mb-4">
            <span className="inline-flex rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-[#00df89]">Business Growth</span>
            <span>·</span>
            <span>June 2026</span>
            <span>·</span>
            <span>3 min read</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6">
            Why Every Local Business Needs a{' '}
            <span className="bg-gradient-to-r from-amber-300 via-orange-200 to-amber-400 bg-clip-text text-transparent">
              Professional Website
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl font-light leading-relaxed">
            A professional website builds trust, works 24/7, and helps generate more leads. Discover why it&apos;s essential for local businesses.
          </p>
        </div>
      </section>

      {/* First Impressions Matter */}
      <section className="relative py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-[#051716]/60 border border-white/5 rounded-[2rem] p-8 md:p-10 mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              First Impressions Matter
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Potential customers often evaluate a business based on its website. Within seconds of landing on your site, they form an opinion about your credibility, professionalism, and quality. A polished, modern website signals that you care about your business — and your customers.
            </p>
          </div>
        </div>
      </section>

      {/* A Website Works 24/7 */}
      <section className="relative py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            A Website Works <span className="text-[#00df89]">24/7</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Unlike a physical office, your website is available at all times. Customers can find your services, read about your business, and contact you long after business hours. It&apos;s your hardest-working employee — and it never takes a day off.
          </p>
        </div>
      </section>

      {/* Build Trust */}
      <section className="relative py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
            Build <span className="text-[#00df89]">Trust</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            A professional website can showcase what makes your business worth choosing:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'Reviews', desc: 'Display customer testimonials and ratings.' },
              { label: 'Services', desc: 'Clearly outline what you offer and how you help.' },
              { label: 'Portfolio', desc: 'Showcase your best work with photos and case studies.' },
              { label: 'Contact Info', desc: 'Make it easy for customers to reach you.' },
            ].map((item) => (
              <div key={item.label} className="bg-[#051716]/60 border border-white/5 rounded-2xl p-6">
                <h3 className="text-[#00df89] font-bold text-lg mb-2">{item.label}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Generate More Leads */}
      <section className="relative py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-gradient-to-br from-[#051716]/80 to-black border border-amber-500/20 rounded-[2rem] p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Generate More <span className="bg-gradient-to-r from-amber-300 via-orange-200 to-amber-400 bg-clip-text text-transparent">Leads</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              A well-designed website with clear calls to action can help convert visitors into inquiries and bookings. From contact forms to scheduling widgets, your site becomes a lead generation machine that works while you sleep.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00df89]/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Ready to Build Your{' '}
            <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-[#00df89] bg-clip-text text-transparent">
              Website?
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s create a professional website that works for your business around the clock.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-[#00df89] text-black font-bold px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-emerald-400 transition-all hover:scale-105 shadow-xl"
          >
            Get Started
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
