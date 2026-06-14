import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-[#052021] pt-36 pb-20 overflow-hidden relative flex items-center">
      {/* Premium background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#083032]/40 via-[#041a1b]/80 to-[#020d0e] pointer-events-none"></div>
      
      {/* Decorative radial glows */}
      <div className="absolute top-1/4 left-1/10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/10 w-[450px] h-[450px] bg-purple-500/5 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute -top-20 right-1/4 w-[350px] h-[350px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
        <div className="py-10 text-center flex flex-col items-center">
          
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.15] max-w-5xl tracking-tight animate-slideUp">
            Subscription Based Website Design &amp; Maintenance
          </h1>
          
          {/* Tagline */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#00df89] mt-6 tracking-wide uppercase animate-fadeIn">
            {"Don't Just Make a Website, Make a Fortune"}
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto mt-6 leading-relaxed font-light">
            Our deliverable comes with affordable monthly website packages provide everything you need to launch and maintain a professional online presence.
          </p>

          {/* Call to Action Button */}
          <div className="mt-10 animate-slideUp">
            <Link
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-[#00df89] hover:bg-[#00c578] text-[#052021] font-extrabold text-base sm:text-lg rounded-full transition-all hover:scale-105 shadow-[0_10px_30px_rgba(0,223,137,0.3)] hover:shadow-[0_15px_40px_rgba(0,223,137,0.5)] group"
            >
              {/* Upward pointing arrow on the left */}
              <svg 
                className="w-5 h-5 mr-3 stroke-[3] transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-200" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
              <span>30 Min Free Consultation</span>
            </Link>
          </div>

          {/* Platform Logos section at bottom of hero */}
          <div className="w-full mt-24 md:mt-32">
            <p className="text-white/45 text-xs font-bold tracking-[0.25em] uppercase mb-8">
              Supported Platforms &amp; Technologies
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 opacity-75 hover:opacity-100 transition-opacity duration-300">
              
              {/* WordPress */}
              <div className="flex items-center gap-2 group cursor-pointer text-white/60 hover:text-white transition-colors duration-200">
                <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.158 12.786l-2.698 7.84c.835.253 1.718.393 2.633.393.593 0 1.168-.06 1.725-.173-.04-.07-.075-.145-.102-.224l-1.558-4.48c.032-.178.032-.34.032-.5 0-.853-.153-1.442-.284-1.996zm6.398-3.08c0-.62-.11-.978-.204-1.258-.238-.636-.595-.913-1.042-.913-.53 0-.912.443-.912 1.02 0 .532.17.935.342 1.488.176.532.32 1.043.32 1.637 0 .576-.233 1.15-.49 1.815l-1.956 5.864c1.176-.795 2.128-1.895 2.766-3.2.338-.692.56-1.446.56-2.266zm-9.336 6.814l-2.022-5.908c-.276-.745-.49-1.282-.49-1.77 0-.554.402-1.043.996-1.043.49 0 .85.34.85.874 0 .426-.086.874-.256 1.34L10.38 16.03l-1.16-3.513zm2.593-13.882C6.852 2.638 2.813 6.677 2.813 11.64c0 1.83.548 3.53 1.487 4.954l4.24-12.28c.465-.043.957-.064 1.472-.064 1.192 0 2.298.192 3.107.575-.51.277-.872.788-.872 1.447 0 .596.298 1.043.596 1.66.276.553.532 1.15.532 1.958 0 .894-.49 1.958-.957 3.235l-2.51 7.424-2.83-8.423 1.894-.173c.47-.043.766-.277.766-.68 0-.448-.447-.64-.958-.64H9.63c-.446 0-.872.213-.872.64 0 .403.298.637.744.68l1.32.127-2.318 6.786-1.808-5.32c-.17-.51-.277-.914-.277-1.277 0-.575.446-1.02 1.042-1.02.404 0 .766.19.936.574l1.32 3.914 1.425-4.212c-.277-.852-.404-1.575-.404-2.17 0-1.277.574-2.278 1.447-2.852A8.938 8.938 0 0011.813 2.63zM12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0z" />
                </svg>
                <span className="font-bold tracking-wider text-sm">WordPress</span>
              </div>

              {/* Webflow */}
              <div className="flex items-center gap-2 group cursor-pointer text-white/60 hover:text-white transition-colors duration-200">
                <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.84 5.34a.65.65 0 0 0-.61-.43h-4.32a.65.65 0 0 0-.62.46L14.6 15.65 11.9 5.37A.65.65 0 0 0 11.28 5H7a.65.65 0 0 0-.62.45L3.71 15.65 1.44 5.37A.65.65 0 0 0 .82 5H.65a.65.65 0 0 0-.63.79l2.79 12.63a.65.65 0 0 0 .63.51H7.8a.65.65 0 0 0 .63-.48l2.67-10.22 2.68 10.22a.65.65 0 0 0 .63.48h4.37a.65.65 0 0 0 .63-.51l3.52-12.6a.65.65 0 0 0-.1-.48z" />
                </svg>
                <span className="font-bold tracking-wider text-sm">Webflow</span>
              </div>

              {/* Wix */}
              <div className="flex items-center gap-2 group cursor-pointer text-white/60 hover:text-white transition-colors duration-200">
                <svg className="w-10 h-5 fill-current" viewBox="0 0 40 18" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.3 1.8L3 10.7l-2-7.4H0L2.7 15h1.2l2.3-8.8 2.3 8.8h1.2L12.4 3.3h-1L9 10.7l-2.3-8.9H5.3zm8.9 1.5c0-.6-.4-1-1-1s-1 .4-1 1 .4 1 1 1 1-.4 1-1zm-.5 2.5h-1v9.2h1V5.8zm8.6-2.5l-2.3 3.6-2.3-3.6h-1.1l2.9 4.5-3.1 4.7h1.1l2.5-3.8 2.5 3.8h1.1l-3.1-4.7 2.9-4.5h-1.1z" />
                </svg>
                <span className="font-bold tracking-wider text-sm">Wix</span>
              </div>

              {/* Shopify */}
              <div className="flex items-center gap-2 group cursor-pointer text-white/60 hover:text-white transition-colors duration-200">
                <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.789 6.09L16.29 1.637C15.992 1.258 15.534 1 15.034 1H8.966c-.5 0-.958.258-1.256.637L4.211 6.09c-.116.148-.184.331-.194.522l-.994 14.629C3.012 22.348 4.004 23 5.053 23h13.894c1.049 0 2.041-.652 2.03-1.759l-.994-14.629a.824.824 0 0 0-.194-.522zm-7.789 1.684a2.21 2.21 0 0 1-2.21-2.21 1 1 0 0 1 2 0 .21.21 0 0 0 .21.21.21.21 0 0 0 .21-.21 1 1 0 0 1 2 0 2.21 2.21 0 0 1-2.21 2.21z" />
                </svg>
                <span className="font-bold tracking-wider text-sm">Shopify</span>
              </div>

              {/* WooCommerce */}
              <div className="flex items-center gap-2 group cursor-pointer text-white/60 hover:text-white transition-colors duration-200">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.8 14.4c-.6.3-1.4.3-2 .1l-2.4-.8-2.4.8c-.6.2-1.4.2-2-.1-.6-.3-.9-.9-.9-1.6V9c0-1.1.9-2 2-2h6.4c1.1 0 2 .9 2 2v6.2c.1.7-.2 1.3-.7 1.6zm-1.8-6.1c0-.4-.3-.7-.7-.7h-4.6c-.4 0-.7.3-.7.7s.3.7.7.7h4.6c.4 0 .7-.3.7-.7zm0 2.2c0-.4-.3-.7-.7-.7h-4.6c-.4 0-.7.3-.7.7s.3.7.7.7h4.6c.4 0 .7-.3.7-.7z" />
                </svg>
                <span className="font-bold tracking-wider text-sm">WooCommerce</span>
              </div>

              {/* Figma */}
              <div className="flex items-center gap-2 group cursor-pointer text-white/60 hover:text-white transition-colors duration-200">
                <svg className="w-5 h-7" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20H20V0H10Z" fill="currentColor" />
                  <path d="M30 0C24.48 0 20 4.48 20 10V20H30C35.52 20 40 15.52 40 10C40 4.48 35.52 0 30 0Z" fill="currentColor" />
                  <path d="M10 20C4.48 20 0 24.48 0 30C0 35.52 4.48 40 10 40H20V20H10Z" fill="currentColor" />
                  <path d="M20 20V40H30C35.52 40 40 35.52 40 30C40 24.48 35.52 20 30 20H20Z" fill="currentColor" />
                  <path d="M10 40C4.48 40 0 44.48 0 50C0 55.52 4.48 60 10 60C15.52 60 20 55.52 20 50V40H10Z" fill="currentColor" />
                </svg>
                <span className="font-bold tracking-wider text-sm">Figma</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
