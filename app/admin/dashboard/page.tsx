'use client';

import { useAuth } from '@/contexts/AuthContext';
import AdminSidebar from '../AdminSidebar';
import Link from 'next/link';

const stats = [
  { label: 'Services', value: 8, icon: '🛠️', href: '/admin/services', color: 'from-emerald-500/20 to-emerald-500/5 border-emerald-500/20' },
  { label: 'Blog Posts', value: 5, icon: '📝', href: '/admin/blog', color: 'from-purple-500/20 to-purple-500/5 border-purple-500/20' },
  { label: 'Portfolio Projects', value: 4, icon: '🎨', href: '/', color: 'from-amber-500/20 to-amber-500/5 border-amber-500/20' },
  { label: 'Active Pages', value: 20, icon: '📄', href: '/', color: 'from-cyan-500/20 to-cyan-500/5 border-cyan-500/20' },
];

export default function AdminDashboard() {
  const { adminEmail } = useAuth();

  return (
    <div className="flex min-h-screen bg-[#061F21]">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <div className="max-w-5xl">
          <div className="mb-8">
            <h1 className="text-3xl font-black text-white">Dashboard</h1>
            <p className="text-gray-400 text-sm mt-1">Welcome back, {adminEmail}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat) => (
              <Link
                key={stat.label}
                href={stat.href}
                className={`bg-gradient-to-br ${stat.color} border rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 shadow-2xl`}
              >
                <span className="text-3xl mb-3 block">{stat.icon}</span>
                <span className="text-3xl font-black text-white">{stat.value}</span>
                <p className="text-gray-400 text-sm mt-1 font-medium">{stat.label}</p>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Quick Actions */}
            <div className="bg-[#0a2a2d] border border-white/10 rounded-2xl p-6 shadow-2xl">
              <h2 className="text-lg font-extrabold text-white mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <Link href="/admin/services" className="flex items-center gap-3 px-4 py-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all">
                  <span className="text-xl">🛠️</span>
                  <span className="text-white text-sm font-semibold">Manage Services</span>
                </Link>
                <Link href="/admin/blog" className="flex items-center gap-3 px-4 py-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all">
                  <span className="text-xl">📝</span>
                  <span className="text-white text-sm font-semibold">Manage Blog Posts</span>
                </Link>
                <a href="/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all">
                  <span className="text-xl">🌐</span>
                  <span className="text-white text-sm font-semibold">View Live Site</span>
                </a>
              </div>
            </div>

            {/* Admin Info */}
            <div className="bg-[#0a2a2d] border border-white/10 rounded-2xl p-6 shadow-2xl">
              <h2 className="text-lg font-extrabold text-white mb-4">Admin Info</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-gray-400">Email</span>
                  <span className="text-white font-semibold">{adminEmail}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-gray-400">Role</span>
                  <span className="text-[#00df89] font-semibold">Administrator</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-gray-400">Total Services</span>
                  <span className="text-white font-semibold">8</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-400">Blog Posts</span>
                  <span className="text-white font-semibold">5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
