import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Subscription Based Website Design & Maintenance | Webtech',
  description:
    "Don't Just Make a Website, Make a Fortune. Our affordable monthly website packages provide everything you need to launch and maintain a professional online presence.",
  keywords: 'subscription website design, website maintenance, Webtech, custom web design, business website, ecommerce website',
  openGraph: {
    title: 'Subscription Based Website Design & Maintenance | Webtech',
    description:
      "Don't Just Make a Website, Make a Fortune. Our affordable monthly website packages provide everything you need to launch and maintain a professional online presence.",
    type: 'website',
    url: 'https://Webtech.com',
    siteName: 'Webtech',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Subscription Based Website Design & Maintenance | Webtech',
    description:
      "Don't Just Make a Website, Make a Fortune. Affordable monthly website packages and support.",
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
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased bg-[#061F21] text-white">{children}</body>
    </html>
  );
}
