export default function Customers() {
  const customers = [
    {
      name: 'Scuba Life',
      logo: '/images/scubalife_logo.png',
      url: 'https://www.scubalife.net/',
    },
    {
      name: 'Bookersi',
      logo: '/images/bookersi_logo.png',
      url: 'https://bookersi.com/',
    },
    {
      name: 'DoUndo Games',
      logo: '/images/doundo_logo.svg',
      url: 'https://doundogames.com/',
    },
    {
      name: 'MerchRaiser',
      logo: '/images/merchraiser_logo.png',
      url: 'https://www.merchraiser.com/',
    },
    {
      name: 'COMPanion Pay',
      logo: '/images/companionpay_logo.png',
      url: 'https://companionpayhq.com/',
    },
    {
      name: 'WalkThroughz',
      logo: '/images/walkthroughz_logo.png',
      url: 'https://walkthroughz.com/',
    },
  ];

  return (
    <section className="bg-[#031718] py-16 md:py-20 border-t border-b border-white/10 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#00df89]/5 via-transparent to-[#00df89]/5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gray-400 text-sm uppercase tracking-widest font-semibold">
            Our Trusted Partners &amp; Clients
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="flex gap-8 md:gap-16 items-center justify-center flex-wrap hover:brightness-110 transition-all duration-300">
            {customers.map((customer) => (
              customer.logo ? (
                <a
                  key={customer.name}
                  href={customer.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-60 hover:opacity-100 transition-opacity duration-300 px-4"
                >
                  <img
                    src={customer.logo}
                    alt={customer.name}
                    className="h-10 md:h-12 w-auto object-contain"
                  />
                </a>
              ) : (
                <div
                  key={customer.name}
                  className="text-gray-400 hover:text-[#00df89] font-bold text-base md:text-lg transition-colors duration-300 px-4"
                >
                  {customer.name}
                </div>
              )
            ))}
          </div>
        </div>

        <div className="text-center mt-12 md:mt-16">
          <p className="text-gray-500 text-sm">
            Join over{' '}
            <span className="text-[#00df89] font-semibold">
              50+ businesses
            </span>{' '}
            that rely on our web packages
          </p>
        </div>
      </div>
    </section>
  );
}
