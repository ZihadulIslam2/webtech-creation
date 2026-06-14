export default function Customers() {
  const customers = [
    'Sanofi',
    'Chanel',
    'Dior',
    'Puma',
    'Safran',
    'ADIDAS',
    'Alpine',
    'ACME',
  ];

  return (
    <section className="bg-[#031718] py-16 md:py-20 border-t border-b border-white/10 relative">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00df89]/5 via-transparent to-[#00df89]/5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gray-400 text-sm uppercase tracking-widest font-semibold">
            Our Trusted Partners &amp; Clients
          </p>
        </div>

        {/* Clients logos */}
        <div className="overflow-hidden">
          <div className="flex gap-8 md:gap-16 items-center justify-center flex-wrap hover:brightness-110 transition-all duration-300">
            {customers.map((customer) => (
              <div
                key={customer}
                className="text-gray-400 hover:text-[#00df89] font-bold text-base md:text-lg transition-colors duration-300 px-4"
              >
                {customer}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 md:mt-16">
          <p className="text-gray-500 text-sm">
            Join over{' '}
            <span className="text-[#00df89] font-semibold">
              2500+ businesses
            </span>{' '}
            that rely on our web packages
          </p>
        </div>
      </div>
    </section>
  );
}
