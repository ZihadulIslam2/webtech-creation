import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: 'Design de présentation',
      description:
        'Nous créons des présentations PowerPoint créatives, impactantes et adaptées à vos objectifs de communication.',
      categories: [
        'Corporate',
        'Stratégie et finance',
        'Événementielle',
        'Commerciale',
        'Investisseurs',
      ],
      icon: '✨',
      href: '/presentation-powerpoint',
    },
    {
      title: 'Conseil éditorial',
      description:
        'Nos experts vous accompagnent dans la structuration et la narration de vos contenus pour un impact maximal.',
      icon: '📝',
      href: '/services-complementaires/conseil-editorial',
    },
    {
      title: 'Formations PowerPoint',
      description:
        'Formez vos équipes aux meilleures pratiques du design de présentation et devenez autonomes.',
      icon: '🎓',
      href: '/services-complementaires/formation-powerpoint',
    },
  ];

  return (
    <section className="bg-black py-20 md:py-32 relative">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-lime-500/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Nos services
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Découvrez comment nous transformons vos présentations en outils de
            communication puissants qui captivent, inspirent et convertissent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-lime-400/50 rounded-xl p-8 md:p-10 transition-all duration-300 hover:shadow-lime hover:-translate-y-1"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>

              <h3 className="text-2xl md:text-xl font-bold text-white mb-4 group-hover:text-lime-400 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-400 text-base mb-6 leading-relaxed">
                {service.description}
              </p>

              {service.categories && (
                <div className="space-y-2 mb-6 pb-6 border-b border-white/5">
                  {service.categories.map((cat) => (
                    <div
                      key={cat}
                      className="flex items-center text-gray-300 text-sm"
                    >
                      <span className="text-lime-400 mr-3 font-bold">→</span>
                      {cat}
                    </div>
                  ))}
                </div>
              )}

              <div className="flex items-center text-lime-400 font-semibold group-hover:translate-x-1 transition-transform">
                En savoir plus
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
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 md:mt-24">
          <p className="text-gray-400 mb-6">
            Vous n'avez pas trouvé ce que vous cherchez ?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all hover:shadow-xl hover:shadow-lime-400/20"
          >
            Discutons de votre projet
          </Link>
        </div>
      </div>
    </section>
  );
}
