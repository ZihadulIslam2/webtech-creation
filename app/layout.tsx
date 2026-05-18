import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Agence PowerPoint : +2500 clients satisfaits | mprez',
  description:
    "L'agence PowerPoint de référence, avec +10000 présentations à son actif. Nous designons vos slides, vous marquez les esprits.",
  keywords: 'PowerPoint, présentation, agence design, slides créatives, Paris',
  openGraph: {
    title: 'Agence PowerPoint : +2500 clients satisfaits | mprez',
    description:
      "L'agence PowerPoint de référence, avec +10000 présentations à son actif. Nous designons vos slides, vous marquez les esprits.",
    type: 'website',
    url: 'https://www.mprez.fr',
    siteName: 'mprez',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agence PowerPoint : +2500 clients satisfaits | mprez',
    description:
      "L'agence PowerPoint de référence, avec +10000 présentations à son actif.",
  },
  alternates: {
    canonical: 'https://www.mprez.fr',
    languages: {
      fr: 'https://www.mprez.fr',
      en: 'https://www.mprezagency.com',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/images/mprez_fav.png" />
        <link rel="apple-touch-icon" href="/images/mprez_webclip.png" />
        <meta
          name="google-site-verification"
          content="wn9kO2QdK-pP7_G_schV-h1CnilXj6uGDtXFcwFYlJY"
        />
      </head>
      <body className="antialiased bg-black text-white">{children}</body>
    </html>
  );
}
