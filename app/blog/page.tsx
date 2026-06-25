import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const posts = [
  {
    slug: 'why-your-business-website-is-losing-customers-in-2026',
    title: 'Why Your Business Website Is Losing Customers in 2026',
    excerpt: 'Your website is often the first impression potential customers have of your business. If it\'s slow, outdated, or difficult to use, visitors may leave before contacting you.',
    date: 'June 2026',
    category: 'Website Tips',
    icon: '🌐',
    readTime: '4 min read',
    gradient: 'from-emerald-500/20 to-teal-500/5',
    borderColor: 'hover:border-emerald-500/30',
  },
  {
    slug: 'how-local-businesses-can-get-more-leads-from-google-maps',
    title: 'How Local Businesses Can Get More Leads from Google Maps',
    excerpt: 'When customers search for services near them, they often choose businesses shown in Google Maps. Learn how to optimize your presence.',
    date: 'June 2026',
    category: 'Local SEO',
    icon: '📍',
    readTime: '4 min read',
    gradient: 'from-blue-500/20 to-cyan-500/5',
    borderColor: 'hover:border-blue-500/30',
  },
  {
    slug: '5-ways-ai-can-help-small-businesses-save-time',
    title: '5 Ways AI Can Help Small Businesses Save Time',
    excerpt: 'AI tools are becoming more accessible for small businesses and can automate repetitive tasks like chatbots, scheduling, and lead qualification.',
    date: 'June 2026',
    category: 'AI & Automation',
    icon: '🤖',
    readTime: '3 min read',
    gradient: 'from-purple-500/20 to-pink-500/5',
    borderColor: 'hover:border-purple-500/30',
  },
  {
    slug: 'why-every-local-business-needs-a-professional-website',
    title: 'Why Every Local Business Needs a Professional Website',
    excerpt: 'A professional website builds trust, works 24/7, and helps generate more leads. Discover why it\'s essential for local businesses.',
    date: 'June 2026',
    category: 'Business Growth',
    icon: '🏢',
    readTime: '3 min read',
    gradient: 'from-amber-500/20 to-orange-500/5',
    borderColor: 'hover:border-amber-500/30',
  },
  {
    slug: 'how-to-choose-the-right-web-development-agency',
    title: 'How to Choose the Right Web Development Agency',
    excerpt: 'Choosing the right development partner can save time and improve outcomes. Ask these key questions before making a decision.',
    date: 'June 2026',
    category: 'Guides',
    icon: '📋',
    readTime: '3 min read',
    gradient: 'from-sky-500/20 to-indigo-500/5',
    borderColor: 'hover:border-sky-500/30',
  },
];

export default function BlogPage() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#083032]/40 via-black to-black pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-purple-500/5 rounded-full blur-[130px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
          <span className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#00df89] mb-6">
            Our Blog
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6">
            Insights &{' '}
            <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-[#00df89] bg-clip-text text-transparent">
              Resources
            </span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto font-light">
            Practical advice for local businesses on web design, SEO, AI automation, and digital growth.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="relative pb-28 bg-black">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`group bg-[#051716]/60 border border-white/5 rounded-[2rem] p-8 flex flex-col ${post.borderColor} transition-all duration-300 hover:-translate-y-2 shadow-2xl`}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${post.gradient} border border-white/10 flex items-center justify-center text-2xl mb-6`}>
                  {post.icon}
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-500 font-semibold uppercase tracking-wider mb-3">
                  <span className="text-[#00df89]">{post.category}</span>
                  <span>·</span>
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-extrabold text-white group-hover:text-[#00df89] transition-colors mb-3 leading-snug">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <div className="mt-6 pt-6 border-t border-white/5">
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-[#00df89] group-hover:gap-3 transition-all">
                    Read Article
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
