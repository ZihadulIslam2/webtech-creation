import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Subscription Based Website Design & Maintenance | Webtech',
  description:
    "Subscription-based website design and maintenance helping local businesses grow online. Affordable monthly packages with everything you need.",
  keywords: 'subscription website design, website maintenance, Webtech, custom web design, business website, ecommerce website',
  openGraph: {
    title: 'Subscription Based Website Design & Maintenance | Webtech',
    description:
      "Subscription-based website design and maintenance helping local businesses grow online. Affordable monthly packages with everything you need.",
    type: 'website',
    url: 'https://Webtech.com',
    siteName: 'Webtech',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Subscription Based Website Design & Maintenance | Webtech',
    description:
      "Subscription-based website design and maintenance helping local businesses grow online.",
  },
  alternates: {
    canonical: 'https://Webtech.com',
    languages: {
      en: 'https://Webtech.com',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = 'G-R5G239L5KE';
  const clarityId = 'xcqgy9u1xd';

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased bg-[#061F21] text-white">
        {children}

        {/* Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", '${clarityId}');
          `}
        </Script>
      </body>
    </html>
  );
}
