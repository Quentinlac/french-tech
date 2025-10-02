# French Innovation Club Croatia - Website Architecture

## Tech Stack
- **Frontend:** Next.js 15 with App Router (for speed and SEO)
- **Styling:** Tailwind CSS + Framer Motion (animations)
- **Backend:** Next.js API Routes
- **Database:** PostgreSQL with Prisma ORM (for form submissions)
- **Deployment:** Vercel (automatic deployments, edge functions)
- **Email:** Resend API (for form notifications)
- **Analytics:** Vercel Analytics + Google Analytics

## Sitemap

```
/
├── / (Homepage)
│   ├── Hero Section
│   ├── What We Do
│   ├── Who We Are (team profiles)
│   ├── Upcoming Events
│   └── Join Community CTA
│
├── /ecosystems
│   ├── /croatia (Croatian Startup Ecosystem)
│   │   ├── Key Statistics
│   │   ├── Success Stories (Rimac, Infobip, etc.)
│   │   ├── Tech Hubs & Accelerators
│   │   ├── VC Landscape
│   │   └── Government Support
│   │
│   └── /france (French Startup Ecosystem)
│       ├── Key Statistics
│       ├── Unicorns & Success Stories
│       ├── La French Tech Initiative
│       ├── Major Tech Hubs
│       └── VC Landscape
│
├── /events
│   ├── Upcoming Events
│   ├── Past Events Gallery
│   └── Request Speaker/Workshop
│
├── /community
│   ├── Join Form (with involvement options)
│   ├── Member Directory (future)
│   └── Resources
│
├── /contact
│   └── Contact Information & Form
│
└── /api
    ├── /join (Handle community join form)
    ├── /contact (Handle contact form)
    └── /newsletter (Handle newsletter signup)
```

## Color Scheme
- **Primary:** French Blue (#0055A4)
- **Secondary:** Croatian Red (#FF0000)
- **Accent:** Gold/Yellow (#FFD700) - Bridge between both flags
- **Dark:** Navy (#1a1a2e)
- **Light:** Off-white (#fafafa)
- **Success:** Green (#10b981)
- **Error:** Red (#ef4444)

## Typography
- **Headings:** Inter (modern, clean)
- **Body:** Inter
- **Accent:** Space Grotesk (for special elements)

## Key Features
1. **Bilingual Support:** EN/FR/HR toggle (future phase)
2. **Dark Mode:** System preference detection
3. **Performance:** 95+ Lighthouse score target
4. **Accessibility:** WCAG 2.1 AA compliant
5. **Mobile-First:** Fully responsive design
6. **SEO Optimized:** Dynamic meta tags, sitemap.xml, robots.txt
7. **Analytics:** Track user engagement and form submissions

## Component Architecture

### Shared Components
- `Header.tsx` - Navigation with sticky scroll
- `Footer.tsx` - Links, social media, newsletter
- `Button.tsx` - Reusable button component
- `Card.tsx` - Content cards for ecosystems
- `Form.tsx` - Reusable form components
- `SEO.tsx` - Meta tags management
- `AnimatedSection.tsx` - Scroll-triggered animations

### Page-Specific Components
- `HeroSection.tsx` - Homepage hero with CTA
- `TeamMember.tsx` - Team profile cards
- `EcosystemStats.tsx` - Statistics visualization
- `EventCard.tsx` - Event listing component
- `SuccessStory.tsx` - Company showcase cards
- `JoinForm.tsx` - Community registration form

## Database Schema

```sql
-- Community Members
CREATE TABLE members (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  role VARCHAR(255),
  involvement_type VARCHAR(50), -- 'participant', 'organizer', 'speaker', 'sponsor'
  interests TEXT[],
  created_at TIMESTAMP DEFAULT NOW()
);

-- Newsletter Subscribers
CREATE TABLE newsletter (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  subscribed_at TIMESTAMP DEFAULT NOW()
);

-- Events
CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  date TIMESTAMP,
  location VARCHAR(255),
  registration_link VARCHAR(255),
  image_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Contact Submissions
CREATE TABLE contact_submissions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## Content Management
- **Static Content:** Markdown files in `/content` directory
- **Dynamic Content:** PostgreSQL database
- **Images:** Optimized with Next.js Image component
- **Icons:** Lucide React icons library

## Performance Optimizations
1. **Static Generation:** Pre-render ecosystem pages
2. **ISR:** Incremental Static Regeneration for events
3. **Image Optimization:** WebP format with lazy loading
4. **Code Splitting:** Dynamic imports for heavy components
5. **Font Optimization:** Next.js font optimization
6. **Edge Caching:** Vercel Edge Network

## Security
1. **HTTPS Only:** Enforced via Vercel
2. **CSP Headers:** Content Security Policy
3. **Rate Limiting:** API route protection
4. **Input Validation:** Zod schema validation
5. **SQL Injection Prevention:** Parameterized queries
6. **XSS Protection:** React's built-in protection

## Deployment Strategy
1. **Development:** Local development with hot reload
2. **Preview:** Automatic preview deployments on PRs
3. **Production:** Main branch auto-deploys to Vercel
4. **Domain:** frenchinnovationclub.com (or chosen domain)
5. **CDN:** Vercel Edge Network globally

## Monitoring
1. **Uptime:** Vercel monitoring
2. **Analytics:** Google Analytics 4 + Vercel Analytics
3. **Error Tracking:** Sentry integration
4. **Performance:** Web Vitals monitoring