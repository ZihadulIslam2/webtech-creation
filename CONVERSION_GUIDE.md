# mprez Website - HTML to Next.js Conversion Guide

## Overview

This document outlines the conversion of the static mprez.fr website from Webflow HTML to a modern Next.js application with TypeScript and Tailwind CSS.

## Project Structure

```
crafix/
├── app/
│   ├── globals.css          # Global styles with Tailwind
│   ├── layout.tsx           # Root layout with SEO metadata
│   └── page.tsx             # Homepage
├── components/
│   ├── Navbar.tsx           # Navigation bar with dropdown menu
│   ├── Hero.tsx             # Hero section with CTA
│   ├── Customers.tsx        # Client logos section
│   ├── Impact.tsx           # Impact/tagline section
│   ├── Services.tsx         # Services overview cards
│   ├── Mission.tsx          # About/mission section
│   └── Footer.tsx           # Footer with links
├── public/
│   ├── images/              # All images from original site
│   └── *.css                # Original CSS files (for reference)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Components Breakdown

### Navbar (`components/Navbar.tsx`)

- Responsive navigation with hamburger menu for mobile
- Dropdown services menu (desktop only)
- Contact button
- Logo link to homepage
- Dark theme with lime accent on hover

### Hero (`components/Hero.tsx`)

- Full-screen hero section
- Main headline with accent color
- Stats display (+2500 clients, +10000 presentations)
- CTA buttons (Contact, Portfolio)
- Trust indicator (Trustfolio rating)
- Image gallery placeholder (3-column grid)

### Customers (`components/Customers.tsx`)

- Client logos section
- Horizontal scroll layout
- Hover effects for interactivity

### Impact (`components/Impact.tsx`)

- Tagline section: "We give impact back to your presentations"
- Dark green gradient background
- Lime accent text

### Services (`components/Services.tsx`)

- 3 main service cards
- Hover effects with border color change
- Icons and arrows for visual appeal
- Links to detailed service pages

### Mission (`components/Mission.tsx`)

- About/mission section
- Grid layout with 4 stat cards
- Checkmark list of values
- Company statistics

### Footer (`components/Footer.tsx`)

- Multi-column footer layout
- Service links
- Company links
- Contact information
- Social media links
- Legal links

## Key Features

### Design System

- **Color Palette:**
  - Primary: Black (#0a0a0a)
  - Accent: Lime (#d4ff00)
  - Secondary: Purple (#8b5cf6)
  - Accent Green: #047857
- **Typography:**
  - Headlines: Bold, large sizes (5xl-7xl)
  - Body: 16px, gray tones
  - Small text: 14px for captions

### Responsive Design

- Mobile-first approach
- Tailwind CSS breakpoints:
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px

### Interactive Elements

- Hover effects on buttons and cards
- Smooth transitions
- Mobile menu toggle
- Dropdown services menu

### SEO Optimization

- Proper metadata in layout.tsx
- Open Graph tags for social sharing
- Twitter card configuration
- Canonical URL
- Hreflang tags for multilingual support
- Proper HTML semantic structure

## Installation & Setup

### Prerequisites

- Node.js 18+
- npm or yarn

### Install Dependencies

```bash
cd crafix
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

### Code Formatting

```bash
npm run format
```

## Technologies Used

- **Next.js 15**: React framework with App Router
- **React 19**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS 3.4**: Utility-first CSS framework
- **PostCSS**: CSS processing
- **ESLint**: Code quality
- **Prettier**: Code formatting

## Migration Notes

### What Was Converted

✅ Navbar with services dropdown menu
✅ Hero section with stats and CTA
✅ Customer logos section
✅ Impact/tagline section
✅ Services overview cards
✅ Mission/about section
✅ Footer with all links
✅ Responsive design
✅ SEO metadata
✅ Dark theme styling
✅ Animations and transitions

### What Needs Development

The following pages still need to be created:

- `/portfolio` - Portfolio/case studies
- `/presentation-powerpoint` - Main service page
- `/presentations-powerpoint/[category]` - Category pages
- `/services-complementaires/[service]` - Complementary services
- `/about` - About page
- `/blog` - Blog section
- `/contact` - Contact form page
- `/legal`, `/privacy`, `/cookies` - Legal pages

### CSS & Styling

- Converted Webflow CSS to Tailwind utility classes
- Removed dependency on Webflow-specific classes
- Custom animations added to globals.css
- Color scheme preserved from original design

### Images

All original images have been copied to `/public/images/`:

- Portfolio samples
- Client logos
- Hero images
- Meta images for social sharing

## Performance Optimizations

1. **Code Splitting**: Next.js automatically code-splits components
2. **Image Optimization**: Use Next.js `Image` component for optimized images
3. **Font Loading**: System fonts used (no external font dependencies)
4. **CSS Optimization**: Tailwind purges unused styles in production
5. **SEO**: Metadata automatically optimized for search engines

## Customization Guide

### Changing Colors

Update Tailwind classes in components. To change lime color globally:

1. Search for `text-lime-400` or `lime-400` throughout components
2. Replace with desired Tailwind color class
3. Or update CSS variables in `globals.css`

### Adding New Sections

1. Create new component in `components/[SectionName].tsx`
2. Import and add to `app/page.tsx`
3. Use existing components as template for styling consistency

### Updating Links

- Internal links: Use `<Link>` from `next/link`
- External links: Use `<a href>` with `target="_blank"`

### Metadata Updates

Edit `app/layout.tsx` to update:

- Site title and description
- OG tags for social sharing
- Canonical URL
- Language settings

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Docker

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Environment Variables

Create `.env.local`:

```
NEXT_PUBLIC_API_URL=https://api.example.com
```

## Future Enhancements

1. **Dynamic Content**: Connect to CMS (Contentful, Strapi)
2. **Blog System**: MDX or Markdown for blog posts
3. **Contact Form**: Integrate with email service (SendGrid, Mailgun)
4. **Analytics**: Add Google Analytics or Mixpanel
5. **A/B Testing**: Implement with optimizely or similar
6. **Internationalization**: Use next-i18next for French/English
7. **Dark/Light Mode**: Add theme switcher
8. **Database**: Connect to headless CMS or database
9. **Authentication**: Add user accounts if needed
10. **Performance Monitoring**: Integrate Sentry or similar

## Troubleshooting

### Port Already in Use

```bash
npm run dev -- -p 3001
```

### Build Errors

```bash
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### CSS Not Applied

1. Check Tailwind config syntax
2. Ensure `globals.css` is imported in layout.tsx
3. Clear `.next` folder: `rm -rf .next`

## Support & Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## Version History

- **v1.0.0** (May 18, 2024): Initial Next.js conversion from Webflow HTML
  - Converted 7 main components
  - Implemented responsive design
  - Added SEO metadata
  - Preserved original design and color scheme

---

**Last Updated**: May 18, 2024
**Maintainer**: Development Team
