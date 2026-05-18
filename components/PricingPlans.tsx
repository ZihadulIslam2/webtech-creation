'use client';

import { useMemo, useState } from 'react';

type Currency = 'AUD' | 'USD' | 'GBP';

type PricingCard = {
  title: string;
  subtitle: string;
  contract: string;
  background: string;
  oldPrice: number;
  newPrice: number;
  features: string[];
};

const currencyFormats: Record<Currency, { prefix: string }> = {
  AUD: { prefix: 'A$' },
  USD: { prefix: '$' },
  GBP: { prefix: '£' },
};

const pricingCards: PricingCard[] = [
  {
    title: 'Essential',
    subtitle: 'Suitable For Local & Small Business',
    contract: 'Contract For 12 Month',
    background:
      'bg-[linear-gradient(145deg,rgba(248,239,220,0.98),rgba(244,230,201,0.96),rgba(255,249,239,0.98))]',
    oldPrice: 199,
    newPrice: 99,
    features: [
      'Up to 8–10 Pages',
      'Theme Based Design',
      'Shared Hosting',
      'Website Maintenance',
      'SSL Certificate for Enhanced Security',
      'Built With WordPress',
      'Increased Performance & Site Security',
      'Unlimited Bug Fixes',
      'Technical Support',
      'Easy Task Management Tool Access',
    ],
  },
  {
    title: 'Pro',
    subtitle: 'Suitable for New Businesses with Visions',
    contract: 'Contract For 6 Month',
    background:
      'bg-[linear-gradient(145deg,rgba(226,251,237,0.98),rgba(208,245,224,0.96),rgba(244,255,248,0.98))]',
    oldPrice: 499,
    newPrice: 299,
    features: [
      'Up to 20–25 Pages',
      'UX/UI Designed',
      'Built with WordPress, Webflow and Wix',
      'Fast and Secure Web Hosting',
      'Content Planning for Clear Messaging',
      'Interactive Lottie Animations',
      'On-Page SEO',
      'Google Search Console & Analytics Setup',
      'Sitemap Submission for Indexing',
      'Website Speed Optimization',
    ],
  },
  {
    title: 'Shop Launcher',
    subtitle: 'Suitable for Businesses that Seek Online Store',
    contract: 'Contract For 6 Month',
    background:
      'bg-[linear-gradient(145deg,rgba(246,228,255,0.98),rgba(248,223,238,0.96),rgba(255,247,251,0.98))]',
    oldPrice: 699,
    newPrice: 449,
    features: [
      'Built with Shopify/WooCommerce',
      'Theme Based Design',
      'Upload Up To 100 Products',
      'Image Resizing and Content Updates',
      'Integration of One Payment Gateway Plugin',
      'Loading Speed Optimization',
      'Free Task Manager Access For Easy Communication',
      'Seamless Maintenance',
      '1.5–2.5 Months of Delivery Time',
    ],
  },
];

function formatPrice(currency: Currency, value: number) {
  return `${currencyFormats[currency].prefix}${value}/m`;
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-4 w-4 shrink-0 text-emerald-500"
      fill="none"
      aria-hidden
    >
      <path
        d="M16.5 5.5 8.25 13.75 3.5 9"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
      aria-hidden
    >
      <path
        d="M5 12h12m0 0-4.5-4.5M17 12l-4.5 4.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PricingPlans() {
  const [currency, setCurrency] = useState<Currency>('USD');

  const currencyTabs = useMemo(() => ['AUD', 'USD', 'GBP'] as Currency[], []);

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(27,91,57,0.58),rgba(5,10,7,0.98)_42%,#020202_100%)] py-20 md:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.05),transparent_32%,rgba(168,255,201,0.05)_66%,transparent)]" />
      <div className="absolute left-0 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/12 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-lime-300/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center animate-slideUp">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.34em] text-emerald-100/75">
            Subscription Plans
          </p>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Premium pricing built for{' '}
            <span className="bg-gradient-to-r from-emerald-200 via-lime-300 to-emerald-500 bg-clip-text text-transparent">
              growth
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Choose a polished package with clear deliverables, strong support,
            and a conversion-focused experience designed to feel calm, premium,
            and easy to buy.
          </p>

          <div className="mt-10 flex justify-center">
            <div className="inline-flex rounded-full border border-white/10 bg-white/10 p-1 shadow-[0_18px_50px_rgba(0,0,0,0.3)] backdrop-blur-xl">
              {currencyTabs.map((option) => {
                const isActive = option === currency;

                return (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setCurrency(option)}
                    className={`rounded-full px-5 py-3 text-sm font-semibold tracking-wide transition-all duration-300 sm:px-7 ${
                      isActive
                        ? 'bg-black text-white shadow-[0_12px_30px_rgba(0,0,0,0.35)]'
                        : 'bg-white/90 text-slate-900 hover:bg-white'
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="relative mt-14 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_42%)] blur-2xl" />

          {pricingCards.map((card, index) => (
            <article
              key={card.title}
              className={`group relative flex h-full min-h-[620px] flex-col overflow-hidden rounded-[2.25rem] border border-white/10 p-7 text-slate-900 shadow-[0_20px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_110px_rgba(0,0,0,0.55)] md:p-8 ${card.background} animate-slideUp`}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.42),transparent_34%)] opacity-85 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/5 to-transparent" />
              <div className="absolute inset-0 rounded-[2.25rem] ring-1 ring-white/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-8 flex items-start justify-between gap-4">
                  <span className="inline-flex rounded-full bg-emerald-600 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white shadow-[0_10px_24px_rgba(16,84,45,0.25)]">
                    {card.contract}
                  </span>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70 text-slate-900 shadow-sm backdrop-blur-sm">
                    {index + 1}
                  </span>
                </div>

                <div className="flex flex-1 flex-col">
                  <h3 className="text-3xl font-black tracking-tight text-slate-950 md:text-[2.15rem]">
                    {card.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm font-medium leading-7 text-slate-700 md:text-base">
                    {card.subtitle}
                  </p>

                  <div className="mt-8 flex items-end gap-4">
                    <span className="text-base font-semibold text-slate-600 line-through decoration-2 decoration-slate-500/70">
                      {formatPrice(currency, card.oldPrice)}
                    </span>
                  </div>

                  <div className="mt-2 flex items-end gap-3">
                    <span className="text-5xl font-black tracking-tight text-slate-950 md:text-6xl">
                      {formatPrice(currency, card.newPrice)}
                    </span>
                  </div>

                  <p className="mt-4 text-sm font-medium text-slate-600">
                    Read Our Service Policy
                  </p>

                  <div className="mt-6">
                    <button
                      type="button"
                      className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-black px-6 py-4 text-base font-semibold text-white shadow-[0_18px_40px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-950 hover:shadow-[0_24px_55px_rgba(0,0,0,0.38)]"
                    >
                      Subscribe
                      <ArrowIcon />
                    </button>
                  </div>

                  <ul className="mt-7 space-y-4 border-t border-black/10 pt-7 text-sm leading-7 text-slate-800 md:text-[0.98rem]">
                    {card.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="mt-1 rounded-full bg-white/75 p-1 shadow-sm">
                          <CheckIcon />
                        </span>
                        <span className="flex-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
