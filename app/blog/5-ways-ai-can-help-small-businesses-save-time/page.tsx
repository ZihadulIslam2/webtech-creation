import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AIBusinessSaveTime() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#083032]/40 via-black to-black pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />
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
            <span className="inline-flex rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-[#00df89]">AI & Automation</span>
            <span>·</span>
            <span>June 2026</span>
            <span>·</span>
            <span>3 min read</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6">
            5 Ways AI Can Help Small Businesses{' '}
            <span className="bg-gradient-to-r from-purple-300 via-pink-200 to-purple-400 bg-clip-text text-transparent">
              Save Time
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl font-light leading-relaxed">
            AI tools are becoming more accessible for small businesses and can automate repetitive tasks, freeing you up to focus on what matters most.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="relative py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-[#051716]/60 border border-white/5 rounded-[2rem] p-8 md:p-10">
            <p className="text-gray-300 text-lg leading-relaxed">
              Running a small business means wearing many hats. Between managing customers, handling inquiries, scheduling appointments, and following up on leads, there&apos;s rarely enough time in the day. The good news?{' '}
              <span className="text-white font-semibold">AI tools are more accessible and affordable than ever</span>, making it possible for small businesses to automate repetitive tasks and reclaim valuable time.
            </p>
          </div>
        </div>
      </section>

      {/* 1. AI Chatbots */}
      <section className="relative py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/5 border border-white/10 flex items-center justify-center text-lg font-black text-[#00df89]">1</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">AI Chatbots</h2>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed ml-[52px]">
            AI-powered chatbots can provide instant answers to common customer questions, handle inquiries after hours, and direct visitors to the right information without any human involvement. This means your team can focus on complex tasks while the chatbot handles the routine ones.
          </p>
        </div>
      </section>

      {/* 2. Appointment Scheduling */}
      <section className="relative py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/5 border border-white/10 flex items-center justify-center text-lg font-black text-[#00df89]">2</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Appointment Scheduling</h2>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed ml-[52px]">
            Allow customers to book appointments online through an AI-powered scheduling system. These tools integrate with your calendar, send reminders, and reduce no-shows. No more back-and-forth emails just to find a time that works.
          </p>
        </div>
      </section>

      {/* 3. Lead Qualification */}
      <section className="relative py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/5 border border-white/10 flex items-center justify-center text-lg font-black text-[#00df89]">3</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Lead Qualification</h2>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed ml-[52px]">
            Automatically collect and organize inquiries from your website. AI can sort leads by urgency, service type, or budget, so you spend time on the prospects most likely to convert. Smart qualification means smarter follow-ups.
          </p>
        </div>
      </section>

      {/* 4. Email Automation */}
      <section className="relative py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/5 border border-white/10 flex items-center justify-center text-lg font-black text-[#00df89]">4</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Email Automation</h2>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed ml-[52px]">
            Send follow-up messages, thank-you notes, and promotional offers without manual effort. Automated email sequences nurture leads and keep your business top-of-mind while you focus on delivering great service.
          </p>
        </div>
      </section>

      {/* 5. Customer Support */}
      <section className="relative py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/5 border border-white/10 flex items-center justify-center text-lg font-black text-[#00df89]">5</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Customer Support</h2>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed ml-[52px]">
            Handle common support requests around the clock. AI-powered support systems can answer FAQs, process returns, and escalate complex issues to your team. Your customers get faster answers, and your team handles fewer repetitive tickets.
          </p>
        </div>
      </section>

      {/* Conclusion */}
      <section className="relative py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-gradient-to-br from-[#051716]/80 to-black border border-emerald-500/20 rounded-[2rem] p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Start Saving Time Today
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Businesses that adopt automation can often spend more time on growth and customer service. The key is to start small, choose one area to automate, and expand from there. AI isn&apos;t just for big corporations anymore — it&apos;s a practical tool for every local business.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00df89]/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Ready to Automate Your{' '}
            <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-[#00df89] bg-clip-text text-transparent">
              Business?
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s build AI-powered solutions tailored to your small business.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-[#00df89] text-black font-bold px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-emerald-400 transition-all hover:scale-105 shadow-xl"
          >
            Get in Touch
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
