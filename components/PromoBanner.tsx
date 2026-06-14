'use client';

export default function PromoBanner() {
  return (
    <section className="relative overflow-hidden bg-black py-20 md:py-28">
      {/* Background visual elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,223,137,0.05),transparent_60%)]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] bg-gradient-to-b from-[#ffe6ec] to-[#e8dfff] p-8 md:p-16 text-center shadow-[0_24px_70px_rgba(0,0,0,0.55)] border border-white/20 transition-all duration-500 hover:shadow-[0_30px_90px_rgba(0,0,0,0.7)] animate-slideUp">
          
          {/* Subtle overlay elements for premium modern aesthetic */}
          <div className="absolute -top-12 -left-12 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl pointer-events-none" />
          
          {/* Subtle design grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-4xl">
            <h2 className="text-4xl font-extrabold tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl leading-[1.1] md:leading-[1.15]">
              Launch Your Website Today – Just $49!
            </h2>
            
            <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-neutral-800 tracking-wide md:text-xl opacity-90">
              Try It – 100% Money-Back Guarantee
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <button
                type="button"
                className="group relative w-full sm:w-auto overflow-hidden rounded-2xl bg-[#00df89] hover:bg-[#00c578] px-8 py-4 text-base md:text-lg font-extrabold text-white shadow-[0_8px_25px_rgba(0,223,137,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,223,137,0.5)] active:translate-y-0 active:scale-95"
              >
                <span className="relative z-10">30-Minute Consultation</span>
              </button>
              
              <button
                type="button"
                className="group relative w-full sm:w-auto overflow-hidden rounded-2xl bg-[#00df89] hover:bg-[#00c578] px-8 py-4 text-base md:text-lg font-extrabold text-white shadow-[0_8px_25px_rgba(0,223,137,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,223,137,0.5)] active:translate-y-0 active:scale-95"
              >
                <span className="relative z-10">Subscribe For Test Drive</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
