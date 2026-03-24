# Goose River Canine Co. — Implementation Plan

## Overview
Standalone Next.js 16 + Tailwind CSS v4 + TypeScript puppy breeder website for a 1/4 Border Collie, 3/4 Goldendoodle breeding program. Includes Stripe deposit integration, waitlist/application system, and professional breeder content.

## Tech Stack
- **Next.js 16** (React 19) with App Router
- **Tailwind CSS v4** via `@tailwindcss/postcss`
- **TypeScript 5**
- **Stripe** for deposit payments (future integration)

## Project Structure
```
pups/
├── public/
│   └── images/               # Placeholder images (added later)
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout, metadata, fonts
│   │   ├── page.tsx           # Homepage — composes all sections
│   │   ├── globals.css        # Tailwind import, theme vars, custom styles
│   │   ├── about-breed/
│   │   │   └── page.tsx       # About the breed page
│   │   ├── our-dogs/
│   │   │   └── page.tsx       # Parent dogs profiles
│   │   ├── puppies/
│   │   │   └── page.tsx       # Current litter & available puppies
│   │   ├── apply/
│   │   │   └── page.tsx       # Application form + process explanation
│   │   ├── health/
│   │   │   └── page.tsx       # Health testing & philosophy
│   │   └── contact/
│   │       └── page.tsx       # Contact form
│   ├── components/
│   │   ├── Header.tsx         # Sticky nav with mobile hamburger
│   │   ├── Footer.tsx         # Site footer
│   │   ├── sections/          # Homepage sections
│   │   │   ├── Hero.tsx
│   │   │   ├── IntroSection.tsx
│   │   │   ├── FeaturedLitter.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── TrustSignals.tsx
│   │   ├── puppies/
│   │   │   ├── PuppyCard.tsx
│   │   │   └── StatusBadge.tsx
│   │   ├── dogs/
│   │   │   └── DogProfile.tsx
│   │   └── forms/
│   │       ├── ApplicationForm.tsx
│   │       └── ContactForm.tsx
│   └── data/
│       ├── puppies.ts         # Puppy data (8 puppies, placeholder)
│       ├── dogs.ts            # Parent dog data
│       └── testimonials.ts    # Testimonial data
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
└── next-env.d.ts
```

## Color Palette & Design Tokens
```
Primary:        #B87333  (copper)
Primary Light:  #D4956B  (light copper)
Accent:         #7B9E6B  (sage green)
Accent Light:   #A3C293  (light sage)
Cream:          #FDF6EE  (warm cream background)
Cream Dark:     #F5EDE0  (section alternating bg)
Text Dark:      #2D2016  (headings)
Text Body:      #4A3728  (body text)
Text Light:     #8B7355  (secondary text)
White:          #FFFFFF
```

## Font Stack
- Headings: Georgia / serif fallback (warm, classic breeder feel)
- Body: system-ui / sans-serif (clean readability)
- Later: can add custom web fonts (e.g., Playfair Display for headings)

---

## Tasks (Build Order)

### Batch 1: Project Scaffold
> Foundation — nothing else works without this.

#### Task 1.1: Initialize Next.js project
**What:** Run `npx create-next-app@latest` in the `pups/` directory with TypeScript, Tailwind, App Router, src directory, ESLint.
**Acceptance Criteria:**
- `npm run dev` starts without errors
- Default Next.js page loads at localhost:3000
- TypeScript, Tailwind v4, PostCSS all configured
**Verification:** `cd /Users/aaronannis/projects/pups && npm run dev` starts cleanly

#### Task 1.2: Set up theme and globals
**What:** Replace the default `globals.css` with our theme (color palette, font stack, base styles). Set up the Tailwind theme tokens using `@theme inline {}`.
**File:** `src/app/globals.css`
**Acceptance Criteria:**
- All color tokens defined in `@theme inline {}`
- Base styles set (background cream, body text color, font families)
- Smooth scrolling enabled
- No default Next.js boilerplate styles remain
**Verification:** Page renders with cream background, correct text colors

#### Task 1.3: Root layout + metadata
**What:** Update `src/app/layout.tsx` with Goose River Canine Co. metadata, favicon placeholder, font preloads.
**File:** `src/app/layout.tsx`
**Acceptance Criteria:**
- Page title: "Goose River Canine Co. — Border Collie Goldendoodle Puppies"
- Meta description written for SEO
- Proper html lang="en" and antialiased body
**Verification:** Browser tab shows correct title

---

### Batch 2: Shared Components (Header + Footer)
> These appear on every page and define the site shell.

#### Task 2.1: Header component
**What:** Create sticky header with logo text, desktop nav links, mobile hamburger menu, and "Apply Now" CTA button.
**File:** `src/components/Header.tsx`
**Nav Links:** Home, Our Breed, Our Dogs, Puppies, Health, Contact
**Acceptance Criteria:**
- Sticky at top, subtle background blur on scroll
- Desktop: horizontal nav links + "Apply Now" button (copper color)
- Mobile: hamburger icon, slide-out menu
- Active link highlighting based on current route
- Logo text: "Goose River Canine Co."
- Smooth, professional feel
**Verification:** Renders on all pages, mobile menu opens/closes, links navigate correctly

#### Task 2.2: Footer component
**What:** Create site footer with logo, nav links, contact info placeholder, and copyright.
**File:** `src/components/Footer.tsx`
**Acceptance Criteria:**
- Three column layout: Brand/tagline, Quick Links, Contact Info
- Copyright line at bottom
- Warm dark background (dark brown/copper)
- Responsive — stacks on mobile
**Verification:** Renders at bottom of page, responsive layout works

---

### Batch 3: Homepage Sections
> The homepage is the most important page — first impression.

#### Task 3.1: Hero section
**What:** Full-width hero with warm gradient or solid cream background, big headline, subheadline about the breed, and two CTAs ("Meet Our Puppies" + "Apply Now").
**File:** `src/components/sections/Hero.tsx`
**Acceptance Criteria:**
- Large heading: "Where Intelligence Meets Heart"
- Subheadline describing the Border Collie / Goldendoodle mix
- Two CTA buttons (primary copper, secondary outlined)
- Placeholder area for a future hero image
- Responsive typography
**Verification:** Hero fills viewport, text readable, CTAs link to correct pages

#### Task 3.2: Intro section
**What:** Brief "Who We Are" section with breeder philosophy text and a placeholder image area.
**File:** `src/components/sections/IntroSection.tsx`
**Acceptance Criteria:**
- Two-column layout (text + image placeholder)
- Warm, personal copy about the breeding program
- "Learn More" link to About the Breed page
**Verification:** Renders below hero, responsive layout

#### Task 3.3: Featured Litter section
**What:** Preview of the current litter — shows 4 puppy cards in a grid with "View All Puppies" link.
**File:** `src/components/sections/FeaturedLitter.tsx`
**Dependencies:** Needs `PuppyCard` and `StatusBadge` components, needs `src/data/puppies.ts`
**Acceptance Criteria:**
- Section heading: "Current Litter"
- Grid of 4 puppy cards (subset of the 8)
- Each card: placeholder image, name, gender, status badge
- "View All Puppies →" link to /puppies
**Verification:** 4 cards render with correct data from puppies.ts

#### Task 3.4: Puppy Card + Status Badge components
**What:** Reusable card component for displaying a puppy, and a status badge component.
**Files:** `src/components/puppies/PuppyCard.tsx`, `src/components/puppies/StatusBadge.tsx`
**Acceptance Criteria:**
- PuppyCard: image placeholder, name, gender, color, personality snippet, status badge
- StatusBadge: "Available" (green), "Reserved" (amber), "Sold" (gray) variants
- Hover effect on card (subtle lift/shadow)
**Verification:** Cards render correctly with all status variants

#### Task 3.5: Testimonials section
**What:** Testimonial cards from happy puppy families.
**File:** `src/components/sections/Testimonials.tsx`
**Dependencies:** Needs `src/data/testimonials.ts`
**Acceptance Criteria:**
- Section heading: "Happy Families"
- 3 testimonial cards with quote, family name, dog name, placeholder avatar
- Warm styling, quote marks
**Verification:** 3 testimonials render with placeholder data

#### Task 3.6: Trust Signals section
**What:** Row of trust/commitment badges (Health Tested, Lifetime Support, Health Guarantee, Family Raised).
**File:** `src/components/sections/TrustSignals.tsx`
**Acceptance Criteria:**
- 4 trust items in a row (2x2 on mobile)
- Each: icon/emoji placeholder, title, short description
- Clean, confidence-building design
**Verification:** 4 items render, responsive grid

#### Task 3.7: Homepage composition
**What:** Wire all homepage sections together in `src/app/page.tsx`.
**File:** `src/app/page.tsx`
**Acceptance Criteria:**
- Renders: Header → Hero → Intro → FeaturedLitter → Testimonials → TrustSignals → Footer
- Smooth scroll between sections
- No layout gaps or visual issues
**Verification:** Full homepage scrolls through all sections cleanly

---

### Batch 4: Data Layer
> Static data files that power the puppy cards, dog profiles, and testimonials.

#### Task 4.1: Puppy data
**What:** Create typed data file with 8 puppies (placeholder names, genders, colors, personality descriptions, statuses).
**File:** `src/data/puppies.ts`
**Acceptance Criteria:**
- TypeScript interface: `Puppy { id, name, gender, color, status, personality, imageUrl }`
- 8 puppies with creative placeholder names
- Mix of statuses: 5 Available, 2 Reserved, 1 Sold
**Verification:** Imports cleanly, TypeScript compiles

#### Task 4.2: Parent dog data
**What:** Create typed data file for dam and sire with breed info, health testing, temperament.
**File:** `src/data/dogs.ts`
**Acceptance Criteria:**
- TypeScript interface: `Dog { id, name, breed, role, dateOfBirth, weight, color, temperament, healthTests, imageUrl, bio }`
- Dam: Goldendoodle with health test placeholders
- Sire: Border Collie / Goldendoodle mix with health test placeholders
**Verification:** Imports cleanly, TypeScript compiles

#### Task 4.3: Testimonial data
**What:** Create typed data file with 3-4 placeholder testimonials written in authentic breeder-testimonial style.
**File:** `src/data/testimonials.ts`
**Acceptance Criteria:**
- TypeScript interface: `Testimonial { id, quote, familyName, dogName, imageUrl }`
- 3-4 warm, realistic testimonials
**Verification:** Imports cleanly, TypeScript compiles

---

### Batch 5: Inner Pages
> Each inner page is standalone with its own layout.

#### Task 5.1: About the Breed page
**What:** Educational page about the Border Collie / Goldendoodle mix.
**File:** `src/app/about-breed/page.tsx`
**Acceptance Criteria:**
- Sections: Overview, Temperament, Size & Appearance, Exercise & Energy, Coat & Grooming, Why This Cross
- Professional breeder-quality copywriting
- Clean typography, section headings
- Responsive layout
**Verification:** Page renders at /about-breed with all sections

#### Task 5.2: Our Dogs page
**What:** Parent dog profiles page showing dam and sire.
**File:** `src/app/our-dogs/page.tsx`
**Dependencies:** `DogProfile` component, `src/data/dogs.ts`
**Acceptance Criteria:**
- Individual profile cards for each parent dog
- Health testing table with test name, result, date
- Bio, temperament, stats
- Image placeholders
**Verification:** Page renders at /our-dogs with both parent profiles

#### Task 5.3: Dog Profile component
**What:** Reusable component for displaying a parent dog's full profile.
**File:** `src/components/dogs/DogProfile.tsx`
**Acceptance Criteria:**
- Image placeholder area
- Name, breed, role (Dam/Sire), stats grid
- Health testing results table
- Bio/temperament description
**Verification:** Renders correctly with dog data

#### Task 5.4: Puppies page
**What:** Full page showing all 8 puppies with filtering/status info.
**File:** `src/app/puppies/page.tsx`
**Dependencies:** `PuppyCard`, `src/data/puppies.ts`
**Acceptance Criteria:**
- Page heading + litter info (born date, dam × sire, count)
- Grid of all 8 puppy cards
- Section explaining the adoption process
- CTA to apply
**Verification:** Page renders at /puppies with all 8 puppies

#### Task 5.5: Health & Philosophy page
**What:** Dedicated health testing and breeding philosophy page.
**File:** `src/app/health/page.tsx`
**Acceptance Criteria:**
- Breeding philosophy section
- Health testing protocol (what tests, why, when)
- Health guarantee summary
- Spay/neuter policy note
- Professional, trust-building tone
**Verification:** Page renders at /health with all sections

#### Task 5.6: Contact page
**What:** Contact form + location info.
**File:** `src/app/contact/page.tsx`
**Dependencies:** `ContactForm` component
**Acceptance Criteria:**
- Contact form (name, email, phone, message)
- Location placeholder (region/state)
- Response time expectation
- Social media link placeholders
**Verification:** Page renders at /contact, form fields work

#### Task 5.7: Contact Form component
**What:** Reusable contact form with client-side validation.
**File:** `src/components/forms/ContactForm.tsx`
**Acceptance Criteria:**
- Fields: name, email, phone (optional), message
- Client-side validation (required fields, email format)
- Submit button with loading state
- Success/error state display
- Note: form submission handler is placeholder (no backend yet)
**Verification:** Form renders, validation works, submit shows success state

---

### Batch 6: Application & Waitlist System
> The core buyer flow — this is where Stripe will eventually connect.

#### Task 6.1: Apply page
**What:** Application page with process explanation + detailed application form.
**File:** `src/app/apply/page.tsx`
**Dependencies:** `ApplicationForm` component
**Acceptance Criteria:**
- Process timeline: Apply → Approved → Deposit → Matched → Go Home
- Detailed application form
- Clear expectations about response time
**Verification:** Page renders at /apply with process section and form

#### Task 6.2: Application Form component
**What:** Comprehensive puppy application form.
**File:** `src/components/forms/ApplicationForm.tsx`
**Acceptance Criteria:**
- Sections: Personal Info, Living Situation, Pet Experience, Lifestyle, Preferences, References
- Fields include: name, email, phone, address, home type (house/apt/condo), yard (yes/no), fence (yes/no), other pets, children ages, breed experience, activity level, work schedule, preferred gender, preferred color, vet name/phone, how did you hear about us, why do you want this puppy
- Client-side validation
- Submit with loading/success/error states
- Note: submission handler is placeholder (no backend yet)
**Verification:** Form renders all sections, validation works, submit shows success

---

### Batch 7: Polish & Integration
> Final touches to make everything cohesive.

#### Task 7.1: Responsive audit & fixes
**What:** Test all pages at mobile (375px), tablet (768px), and desktop (1280px+). Fix any layout issues.
**Acceptance Criteria:**
- All pages look good at all 3 breakpoints
- No horizontal overflow
- Touch targets are large enough on mobile
- Text is readable at all sizes
**Verification:** Manual check at all breakpoints

#### Task 7.2: Navigation integration
**What:** Ensure all internal links work across all pages, active states are correct, and the mobile menu works on every page.
**Acceptance Criteria:**
- All nav links route to correct pages
- Active page highlighted in nav
- Mobile menu works on all pages
- "Apply Now" CTA appears prominently
**Verification:** Click through all nav links from every page

#### Task 7.3: Final build test
**What:** Run `npm run build` and fix any TypeScript or build errors.
**Acceptance Criteria:**
- `npm run build` completes with 0 errors
- `npm run start` serves the production build correctly
**Verification:** `npm run build && npm run start`

---

## Future Work (Not in this plan)
- Stripe integration for deposits
- Backend API for form submissions
- Admin panel for managing applications/waitlist
- Image upload and gallery management
- Blog/updates section
- SEO optimization (sitemap, structured data)
- Analytics integration
- Email notifications for applications
- Puppy cam integration
