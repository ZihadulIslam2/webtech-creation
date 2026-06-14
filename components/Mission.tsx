export default function Mission() {
  const highlights = [
    {
      icon: '✨',
      title: 'Uncompromised Quality',
      description:
        'Custom layout, high-performance optimization, and responsive design tailored for your brand.',
    },
    {
      icon: '🎯',
      title: 'Expert Support',
      description:
        'A dedicated team taking care of code updates, security patches, backups, and feature requests.',
    },
    {
      icon: '📈',
      title: 'Conversion Focused',
      description:
        'Every component is structured to maximize visitor engagement and optimize signup rates.',
    },
  ];

  const stats = [
    { value: '24/7', label: 'Security Monitoring' },
    { value: '2500+', label: 'Happy Clients' },
    { value: '100%', label: 'Fully Managed' },
    { value: '4.9/5', label: 'Average Rating' },
  ];

  return (
    <section id="about" className="bg-[#020d0e] py-20 md:py-32 relative">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#052021]/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16 md:mb-24">
          {/* Left side - Mission text */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-8">
              Our Mission
            </h2>

            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Poor user experience, slow loading speeds, or broken links: too often, websites become bottlenecks rather than accelerators for business growth.
            </p>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Our mission is simple: to provide high-end, subscription-based website design and maintenance packages that handle everything for you, so you can focus on scale.
            </p>

            {/* Highlights */}
            <div className="space-y-6">
              {highlights.map((item) => (
                <div key={item.title} className="flex items-start gap-4 group">
                  <div className="text-3xl flex-shrink-0 group-hover:scale-125 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1 group-hover:text-[#00df89] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Stats */}
          <div className="grid grid-cols-2 gap-6 md:gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/[0.02] border border-white/10 rounded-xl p-8 md:p-10 text-center hover:bg-white/[0.04] hover:border-[#00df89]/50 transition-all duration-300 group"
              >
                <div className="text-4xl md:text-5xl font-black text-[#00df89] mb-3 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <p className="text-gray-400 text-sm md:text-base font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center pt-8 md:pt-16 border-t border-white/10">
          <p className="text-gray-400 mb-6 text-lg">
            Ready to scale your web presence with zero stress?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-[#00df89] text-[#052021] font-bold rounded-full hover:bg-[#00c578] transition-all hover:shadow-lg hover:shadow-[#00df89]/30 text-base md:text-lg"
          >
            Start Your Project
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
