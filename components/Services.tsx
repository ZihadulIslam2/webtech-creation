import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: 'Startup Website',
      description:
        'Scalable, secure websites built to help startups and growing businesses launch fast, adapt easily, and stay ready for the next stage.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
          <path
            d="M8 19h8M12 5v14M7 9l5-4 5 4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      href: '/contact',
      cardClass:
        'bg-[linear-gradient(145deg,rgba(232,213,255,0.20),rgba(255,228,238,0.10),rgba(255,255,255,0.04))]',
      iconClass: 'text-fuchsia-300 bg-fuchsia-500/15 border-fuchsia-300/20',
    },
    {
      title: 'Business Website',
      description:
        'Optimized for stronger online presence, SEO visibility, and mobile compatibility so established businesses can convert more visitors with less friction.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
          <path
            d="M4 7h16M7 5v4m10-4v4M6 11h12M6 15h7M6 19h12"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      href: '/contact',
      cardClass:
        'bg-[linear-gradient(145deg,rgba(255,243,220,0.22),rgba(249,237,214,0.12),rgba(255,255,255,0.04))]',
      iconClass: 'text-amber-300 bg-amber-500/15 border-amber-300/20',
    },
    {
      title: 'E-Commerce Website',
      description:
        'Secure, scalable ecommerce systems with payment integration, inventory management, and a smooth buying experience that keeps customers moving.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
          <path
            d="M6 7h15l-2 8H8L6 3H3M9 19a1 1 0 1 0 0.001 0ZM18 19a1 1 0 1 0 0.001 0Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      href: '/contact',
      cardClass:
        'bg-[linear-gradient(145deg,rgba(201,255,232,0.20),rgba(214,255,244,0.10),rgba(255,255,255,0.04))]',
      iconClass: 'text-emerald-300 bg-emerald-500/15 border-emerald-300/20',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(28,85,52,0.45),rgba(4,8,6,0.98)_46%,#020202_100%)] py-20 md:py-28">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_30%,rgba(124,255,173,0.04)_65%,transparent)]" />
      <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-lime-300/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-emerald-200/75">
            Development &amp; Maintenance
          </p>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our{' '}
            <span className="bg-gradient-to-r from-emerald-200 via-lime-300 to-emerald-500 bg-clip-text text-transparent">
              Solutions
            </span>{' '}
            That Work
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            We build and maintain websites that help businesses grow with less
            overhead, combining performance, reliability, and thoughtful design
            into one streamlined solution.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className={`group relative flex h-full min-h-[420px] flex-col overflow-hidden rounded-[2rem] border border-white/10 p-7 text-white shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_30px_110px_rgba(0,0,0,0.5)] ${service.cardClass}`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_34%)] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/12 to-transparent" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-10 flex items-start justify-between gap-4">
                  <span className="inline-flex rounded-full border border-white/15 bg-black/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80 backdrop-blur-sm">
                    Development &amp; Maintenance
                  </span>
                  <span
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-sm ${service.iconClass}`}
                  >
                    {service.icon}
                  </span>
                </div>

                <div className="flex flex-1 flex-col">
                  <h3 className="text-2xl font-bold tracking-tight text-white md:text-[1.75rem]">
                    {service.title}
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-slate-200/90 md:text-base">
                    {service.description}
                  </p>

                  <div className="mt-auto pt-10">
                    <span className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-neutral-950">
                      Learn More
                      <svg
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.4}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
