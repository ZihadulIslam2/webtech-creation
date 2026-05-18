export default function Impact() {
  return (
    <section className="bg-gradient-to-b from-black via-lime-900/5 to-black py-20 md:py-32 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-lime-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-lime-400/10 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-2 leading-tight">
            Nous redonnons
          </h2>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-lime-400 mb-4 leading-tight">
            de l'IMPACT
          </h2>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
            à vos présentations
          </h2>

          <div className="mt-12">
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
              Transformez vos slides en outils de communication qui captivent,
              inspirent et convertissent vos audiences.
            </p>
            <div className="inline-flex items-center justify-center space-x-2 text-lime-400 font-semibold text-lg">
              <span>✨</span>
              <span>Design créatif</span>
              <span className="text-white mx-3">•</span>
              <span>Stratégie narrative</span>
              <span className="text-white mx-3">•</span>
              <span>Expertise éprouvée</span>
              <span>✨</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
