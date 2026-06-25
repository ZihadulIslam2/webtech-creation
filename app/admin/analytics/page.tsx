'use client';

import AdminSidebar from '../AdminSidebar';

const gaId = 'G-R5G239L5KE';
const clarityId = 'xcqgy9u1xd';

export default function AdminAnalytics() {
  return (
    <div className="flex min-h-screen bg-[#061F21]">
      <AdminSidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-5xl">
          <div className="mb-8">
            <h1 className="text-3xl font-black text-white">Analytics</h1>
            <p className="text-gray-400 text-sm mt-1">Site traffic, visitor behavior, and conversion tracking</p>
          </div>

          {/* Status Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <a
              href={`https://analytics.google.com/analytics/web/#/p${gaId.replace('G-', '')}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0a2a2d] border border-white/10 rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 shadow-2xl group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-xl">
                  📊
                </div>
                <span className="px-3 py-1 bg-emerald-500/10 text-[#00df89] text-[10px] font-bold uppercase tracking-wider rounded-full border border-emerald-500/20">
                  Active
                </span>
              </div>
              <h2 className="text-lg font-extrabold text-white group-hover:text-[#00df89] transition-colors">Google Analytics 4</h2>
              <p className="text-gray-400 text-sm mt-1">Traffic, countries, sources, conversions</p>
              <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                <code className="px-2 py-1 bg-black/40 rounded-lg text-[#00df89] font-mono">{gaId}</code>
                <span>—</span>
                <span className="text-[#00df89] font-semibold group-hover:underline">Open GA4 →</span>
              </div>
            </a>

            <a
              href={`https://clarity.microsoft.com/`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0a2a2d] border border-white/10 rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 shadow-2xl group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-xl">
                  🔥
                </div>
                <span className="px-3 py-1 bg-emerald-500/10 text-[#00df89] text-[10px] font-bold uppercase tracking-wider rounded-full border border-emerald-500/20">
                  Active
                </span>
              </div>
              <h2 className="text-lg font-extrabold text-white group-hover:text-purple-400 transition-colors">Microsoft Clarity</h2>
              <p className="text-gray-400 text-sm mt-1">Session recordings, heatmaps, UX insights</p>
              <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                <code className="px-2 py-1 bg-black/40 rounded-lg text-purple-400 font-mono">{clarityId}</code>
                <span>—</span>
                <span className="text-purple-400 font-semibold group-hover:underline">Open Clarity →</span>
              </div>
            </a>
          </div>

          {/* What Gets Tracked */}
          <div className="bg-[#0a2a2d] border border-white/10 rounded-2xl p-6 shadow-2xl mb-8">
            <h2 className="text-lg font-extrabold text-white mb-4">What We Track</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '👥', label: 'Visitors', desc: 'Number of visitors & real-time count' },
                { icon: '🌍', label: 'Locations', desc: 'Countries & cities of your audience' },
                { icon: '📱', label: 'Devices', desc: 'Mobile vs desktop breakdown' },
                { icon: '🔗', label: 'Traffic Sources', desc: 'Google, Facebook, LinkedIn, Direct' },
                { icon: '📄', label: 'Page Views', desc: 'Most visited pages & time on site' },
                { icon: '🎯', label: 'Conversions', desc: 'Contact forms, button clicks, bookings' },
                { icon: '📹', label: 'Session Recordings', desc: 'Watch real visitor sessions (Clarity)' },
                { icon: '🗺️', label: 'Heatmaps', desc: 'See where users click & scroll (Clarity)' },
              ].map((item) => (
                <div key={item.label} className="bg-[#061F21] border border-white/5 rounded-xl p-4 flex items-start gap-3">
                  <span className="text-xl shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="text-white font-bold text-sm">{item.label}</h3>
                    <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Setup Guide */}
          <div className="bg-[#0a2a2d] border border-white/10 rounded-2xl p-6 shadow-2xl">
            <h2 className="text-lg font-extrabold text-white mb-4">Configuration</h2>
            <div className="space-y-4 text-sm">
              <div className="bg-[#061F21] border border-white/5 rounded-xl p-4">
                <h3 className="text-white font-bold mb-2">Google Analytics 4</h3>
                <p className="text-gray-400 mb-2">Set your Measurement ID in the environment:</p>
                <code className="block px-4 py-3 bg-black/40 rounded-lg text-[#00df89] font-mono text-xs">
                  NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
                </code>
                <a
                  href="https://analytics.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 text-[#00df89] font-semibold hover:underline text-xs"
                >
                  Create a GA4 property →
                </a>
              </div>

              <div className="bg-[#061F21] border border-white/5 rounded-xl p-4">
                <h3 className="text-white font-bold mb-2">Microsoft Clarity</h3>
                <p className="text-gray-400 mb-2">Set your Clarity project ID in the environment:</p>
                <code className="block px-4 py-3 bg-black/40 rounded-lg text-purple-400 font-mono text-xs">
                  NEXT_PUBLIC_CLARITY_ID=xxxxxxxxxx
                </code>
                <a
                  href="https://clarity.microsoft.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 text-purple-400 font-semibold hover:underline text-xs"
                >
                  Create a Clarity project →
                </a>
              </div>

              <div className="bg-[#061F21] border border-white/5 rounded-xl p-4">
                <h3 className="text-white font-bold mb-2">Custom Events to Track</h3>
                <p className="text-gray-400 mb-2">Add these to your key buttons and forms:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Book Consultation Click',
                    'Start Project Click',
                    'Pricing Page Visit',
                    'Contact Form Submission',
                    'Subscribe Button Click',
                    'Portfolio View',
                  ].map((event) => (
                    <code key={event} className="px-3 py-2 bg-black/40 rounded-lg text-gray-300 font-mono text-[11px]">
                      {`gtag('event', '${event.replace(/\s+/g, '_').toLowerCase()}')`}
                    </code>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
