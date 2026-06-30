'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

const navItems = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: '📊' },
  { label: 'Analytics', href: '/admin/analytics', icon: '📈' },
  { label: 'Services', href: '/admin/services', icon: '🛠️' },
  { label: 'Blog Posts', href: '/admin/blog', icon: '📝' },
  { label: 'View Site', href: '/', icon: '🌐', external: true },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const { adminEmail, logout } = useAuth();

  return (
    <aside className="w-64 bg-[#0a2a2d] border-r border-white/10 min-h-screen flex flex-col">
      <div className="p-6 border-b border-white/10">
        <Link href="/admin/dashboard" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-400 to-emerald-400 p-[2px]">
            <div className="w-full h-full bg-[#0a2a2d] rounded-[6px] flex items-center justify-center font-black text-white text-sm">
              C
            </div>
          </div>
          <span className="text-white font-black text-lg tracking-tight">Crafix</span>
          <span className="text-[10px] text-[#00df89] font-bold uppercase tracking-wider ml-auto">Admin</span>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Comp = item.external ? 'a' : Link;
          return (
            <Comp
              key={item.href}
              href={item.href}
              {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                isActive
                  ? 'bg-[#00df89]/10 text-[#00df89] border border-[#00df89]/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </Comp>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/10">
        <div className="flex items-center gap-3 px-4 py-3 mb-2">
          <div className="w-8 h-8 rounded-full bg-[#00df89]/20 flex items-center justify-center text-[#00df89] font-bold text-sm">
            {adminEmail?.[0]?.toUpperCase() || 'A'}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-xs font-bold truncate">{adminEmail}</p>
            <p className="text-gray-500 text-[10px]">Administrator</p>
          </div>
        </div>
        <button
          onClick={logout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-red-400 hover:bg-red-500/10 transition-all"
        >
          <span>🚪</span>
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
