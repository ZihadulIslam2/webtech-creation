'use client';

import AdminSidebar from '../AdminSidebar';
import Link from 'next/link';
import { services } from '@/data/services';

export default function AdminServices() {
  return (
    <div className="flex min-h-screen bg-[#061F21]">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <div className="max-w-6xl">
          <div className="mb-8">
            <h1 className="text-3xl font-black text-white">Services</h1>
            <p className="text-gray-400 text-sm mt-1">View all services offered on Webtech</p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {services.map((service) => (
              <div
                key={service.slug}
                className="bg-[#0a2a2d] border border-white/10 rounded-2xl p-6 flex items-start gap-5 hover:border-white/20 transition-all"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} border border-white/10 flex items-center justify-center text-2xl shrink-0`}>
                  {service.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-lg font-extrabold text-white">{service.title}</h2>
                      <p className="text-gray-400 text-sm mt-1 line-clamp-2">{service.description}</p>
                    </div>
                    <Link
                      href={service.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-xs font-bold text-[#00df89] transition-all whitespace-nowrap"
                    >
                      View Page
                    </Link>
                  </div>
                  <div className="flex flex-wrap gap-4 mt-4 text-xs text-gray-500">
                    <span><strong className="text-white">Pricing:</strong> {service.pricing.map(p => `${p.label} ${p.range}`).join(' | ')}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {service.skills.map((skill) => (
                      <span key={skill} className="px-2.5 py-1 bg-white/5 rounded-lg text-[11px] font-medium text-gray-300">
                        {skill}
                      </span>
                    ))}
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
