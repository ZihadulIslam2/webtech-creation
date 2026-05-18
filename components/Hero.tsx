import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen bg-black pt-32 pb-20 overflow-hidden relative flex items-center">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-lime-500/5 via-transparent to-transparent"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="py-12 text-center">
          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Agence PowerPoint
            </h1>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-lime-400 mt-2">
              pour marques inspirantes
            </h2>
          </div>

          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12 mt-8 leading-relaxed">
            Chez mprez, nous accompagnons depuis 2016 les plus grandes
            entreprises et agences du monde entier vers des présentations
            PowerPoint créatives, impactantes, et toujours adaptées à leur
            audience.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 md:gap-16 mb-12 flex-wrap">
            <div className="text-center group">
              <div className="text-4xl sm:text-5xl font-black text-lime-400 group-hover:scale-110 transition-transform">
                +2500
              </div>
              <div className="text-sm text-gray-400 mt-2">
                Clients satisfaits
              </div>
            </div>
            <div className="text-center group">
              <div className="text-4xl sm:text-5xl font-black text-lime-400 group-hover:scale-110 transition-transform">
                +10000
              </div>
              <div className="text-sm text-gray-400 mt-2">Présentations</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl sm:text-5xl font-black text-lime-400 group-hover:scale-110 transition-transform">
                2016
              </div>
              <div className="text-sm text-gray-400 mt-2">
                Depuis nos débuts
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center mb-12 flex-wrap">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-black rounded-lg font-bold hover:bg-gray-200 transition-all hover:shadow-xl hover:shadow-lime-400/20 text-base sm:text-lg"
            >
              Commencer un projet
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold hover:border-lime-400 hover:text-lime-400 transition-all text-base sm:text-lg"
            >
              Voir nos réalisations
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 flex justify-center">
            <div className="animate-bounce">
              <svg
                className="w-6 h-6 text-lime-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
