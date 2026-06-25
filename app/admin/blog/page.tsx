'use client';

import AdminSidebar from '../AdminSidebar';
import Link from 'next/link';

const posts = [
  { slug: 'why-your-business-website-is-losing-customers-in-2026', title: 'Why Your Business Website Is Losing Customers in 2026', date: 'June 2026', category: 'Website Tips', icon: '🌐' },
  { slug: 'how-local-businesses-can-get-more-leads-from-google-maps', title: 'How Local Businesses Can Get More Leads from Google Maps', date: 'June 2026', category: 'Local SEO', icon: '📍' },
  { slug: '5-ways-ai-can-help-small-businesses-save-time', title: '5 Ways AI Can Help Small Businesses Save Time', date: 'June 2026', category: 'AI & Automation', icon: '🤖' },
  { slug: 'why-every-local-business-needs-a-professional-website', title: 'Why Every Local Business Needs a Professional Website', date: 'June 2026', category: 'Business Growth', icon: '🏢' },
  { slug: 'how-to-choose-the-right-web-development-agency', title: 'How to Choose the Right Web Development Agency', date: 'June 2026', category: 'Guides', icon: '📋' },
];

export default function AdminBlog() {
  return (
    <div className="flex min-h-screen bg-[#061F21]">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <div className="max-w-4xl">
          <div className="mb-8">
            <h1 className="text-3xl font-black text-white">Blog Posts</h1>
            <p className="text-gray-400 text-sm mt-1">View all published blog posts</p>
          </div>

          <div className="space-y-4">
            {posts.map((post) => (
              <div
                key={post.slug}
                className="bg-[#0a2a2d] border border-white/10 rounded-2xl p-6 flex items-start gap-4 hover:border-white/20 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl shrink-0">
                  {post.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-base font-extrabold text-white">{post.title}</h2>
                      <div className="flex items-center gap-3 mt-1.5 text-xs text-gray-500">
                        <span className="text-[#00df89] font-semibold">{post.category}</span>
                        <span>·</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-xs font-bold text-[#00df89] transition-all"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
