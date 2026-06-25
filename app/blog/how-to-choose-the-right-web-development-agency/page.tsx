import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ChooseAgency() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#083032]/40 via-black to-black pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />
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
            <span className="inline-flex rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-[#00df89]">Guides</span>
            <span>·</span>
            <span>June 2026</span>
            <span>·</span>
            <span>3 min read</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6">
            How to Choose the Right{' '}
            <span className="bg-gradient-to-r from-sky-300 via-indigo-200 to-sky-400 bg-clip-text text-transparent">
              Web Development Agency
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl font-light leading-relaxed">
            Choosing the right development partner can save time and improve outcomes. Ask these key questions before making a decision.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="relative py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-[#051716]/60 border border-white/5 rounded-[2rem] p-8 md:p-10">
            <p className="text-gray-300 text-lg leading-relaxed">
              Your website is one of the most important investments you&apos;ll make for your business. Choosing the right web development agency can mean the difference between a site that drives growth and one that gathers dust. Here are the key questions to ask before signing a contract.
            </p>
          </div>
        </div>
      </section>

      {/* Questions to Ask */}
      <section className="relative py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-10">
            Questions to <span className="text-[#00df89]">Ask</span>
          </h2>

          <div className="space-y-6">
            {/* Q1 */}
            <div className="bg-[#051716]/60 border border-white/5 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-white mb-3">
                Can They Show Previous Work?
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Review case studies and portfolios. A great agency will be proud to show you what they&apos;ve built. Look for diversity in design, attention to detail, and real results for past clients.
              </p>
            </div>

            {/* Q2 */}
            <div className="bg-[#051716]/60 border border-white/5 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-white mb-3">
                Do They Understand Your Industry?
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Industry knowledge can improve results. An agency that understands your market will know what resonates with your audience, what your competitors are doing, and how to position you for success.
              </p>
            </div>

            {/* Q3 */}
            <div className="bg-[#051716]/60 border border-white/5 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-white mb-3">
                Do They Offer Ongoing Support?
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Websites require updates, security patches, and maintenance. Ask about post-launch support. The best agencies offer ongoing care packages so your site stays fast, secure, and up to date.
              </p>
            </div>

            {/* Q4 */}
            <div className="bg-gradient-to-br from-[#051716]/80 to-black border border-sky-500/20 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-white mb-3">
                Do They Focus on Business Results?
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                The goal should be generating leads and supporting growth, not just building a pretty page. Look for an agency that talks about conversions, user experience, and ROI — not just design and technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="relative py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-[#051716]/60 border border-white/5 rounded-[2rem] p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Choose With <span className="bg-gradient-to-r from-sky-300 via-indigo-200 to-sky-400 bg-clip-text text-transparent">Confidence</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Choosing the right development partner can save time, reduce stress, and improve outcomes. Take the time to interview multiple agencies, ask the right questions, and find a team that truly understands your vision.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00df89]/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Ready to Work With{' '}
            <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-[#00df89] bg-clip-text text-transparent">
              Us?
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help build a website that drives real results for your business.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-[#00df89] text-black font-bold px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-emerald-400 transition-all hover:scale-105 shadow-xl"
          >
            Start a Conversation
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
