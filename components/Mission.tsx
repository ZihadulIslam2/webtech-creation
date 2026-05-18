export default function Mission() {
  const highlights = [
    {
      icon: '✨',
      title: 'Créativité sans compromis',
      description:
        'Design innovant et unique pour chaque projet, adapté à votre identité',
    },
    {
      icon: '🎯',
      title: 'Expertise reconnue',
      description:
        "Plus de 10 ans d'expérience et 10000+ présentations réussies",
    },
    {
      icon: '📈',
      title: 'Résultats mesurables',
      description:
        'Impact direct et tangible sur vos communications et résultats',
    },
  ];

  const stats = [
    { value: '2016', label: 'Année de fondation' },
    { value: '2500+', label: 'Clients satisfaits' },
    { value: '10000+', label: 'Présentations créées' },
    { value: '4.9/5', label: 'Note moyenne' },
  ];

  return (
    <section className="bg-black py-20 md:py-32 relative">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-lime-500/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16 md:mb-24">
          {/* Left side - Mission text */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-8">
              Notre mission
            </h2>

            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Des messages dilués, un manque de créativité ou une narration peu
              claire : trop souvent, les présentations PowerPoint deviennent des
              obstacles plutôt que des accélérateurs de communication.
            </p>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Notre mission est simple : transformer vos slides en outils de
              persuasion puissants qui captivent, inspirent et convertissent.
            </p>

            {/* Highlights */}
            <div className="space-y-6">
              {highlights.map((item) => (
                <div key={item.title} className="flex items-start gap-4 group">
                  <div className="text-3xl flex-shrink-0 group-hover:scale-125 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1 group-hover:text-lime-400 transition-colors">
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
                className="bg-white/[0.02] border border-white/10 rounded-xl p-8 md:p-10 text-center hover:bg-white/[0.05] hover:border-lime-400/50 transition-all duration-300 group"
              >
                <div className="text-4xl md:text-5xl font-black text-lime-400 mb-3 group-hover:scale-110 transition-transform">
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
            Prêt à transformer vos présentations en outils de persuasion ?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-lime-400 text-black font-bold rounded-lg hover:bg-lime-300 transition-all hover:shadow-lg hover:shadow-lime-400/30 text-base md:text-lg"
          >
            Commencer un projet
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
