export default function Impact() {
  return (
    <section id="portfolios" className="bg-gradient-to-b from-[#052021] via-[#031819] to-[#020d0e] py-20 md:py-32 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-2 leading-tight">
            We Deliver True
          </h2>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#00df89] mb-4 leading-tight">
            IMPACT
          </h2>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
            To Your Online Presence
          </h2>

          <div className="mt-12">
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
              Transform your website into a powerful asset that captivates, inspires, and converts your audience, completely backed by reliable monthly maintenance.
            </p>
            <div className="inline-flex flex-wrap items-center justify-center gap-3 text-[#00df89] font-semibold text-lg">
              <span>✨</span>
              <span>Premium UX/UI Design</span>
              <span className="text-white hidden sm:inline">•</span>
              <span>High-Performance SEO</span>
              <span className="text-white hidden sm:inline">•</span>
              <span>24/7 Support &amp; Updates</span>
              <span>✨</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
