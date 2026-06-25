'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, isAuthenticated } = useAuth();
  const router = useRouter();

  if (isAuthenticated) {
    router.push('/admin/dashboard');
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    const success = login(email, password);
    if (success) {
      router.push('/admin/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen bg-[#061F21] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-400 to-emerald-400 p-[2px]">
              <div className="w-full h-full bg-[#061F21] rounded-[10px] flex items-center justify-center font-black text-white text-lg">
                W
              </div>
            </div>
            <span className="text-white font-black text-2xl tracking-tight">Webtech</span>
          </Link>
          <h1 className="text-3xl font-black text-white">Admin Login</h1>
          <p className="text-gray-400 text-sm mt-2">Sign in to manage your website</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#0a2a2d] border border-white/10 rounded-2xl p-8 shadow-2xl space-y-6">
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm font-medium">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-bold text-gray-300 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
              className="w-full px-4 py-3 bg-[#061F21] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00df89] focus:ring-1 focus:ring-[#00df89]/30 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-300 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-3 bg-[#061F21] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00df89] focus:ring-1 focus:ring-[#00df89]/30 transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-[#00df89] hover:bg-[#00c578] text-black font-extrabold text-sm rounded-xl transition-all hover:shadow-[0_0_20px_rgba(0,223,137,0.3)]"
          >
            Sign In
          </button>

          <div className="text-center pt-2">
            <Link href="/" className="text-gray-500 hover:text-[#00df89] text-xs font-medium transition-colors">
              ← Back to Website
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
