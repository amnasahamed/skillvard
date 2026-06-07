# NIOS Skillvard — Marketing Website

Bilingual (Malayalam + English) landing page for NIOS 10th & Plus Two admissions in Kerala. Primary conversion: WhatsApp inquiries.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Noto Sans Malayalam + Inter fonts

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before launch

Update placeholders in `lib/site-config.ts`:

- `whatsappNumber` — country code, no `+` or spaces (e.g. `919876543210`)
- `whatsappMessage` — default pre-filled chat text
- `phone`, `phoneTel`, `address`

Optional: set `NEXT_PUBLIC_GA_ID` for Google Analytics 4.

## Build & deploy

```bash
npm run build
npm start
```

Deploy to [Vercel](https://vercel.com) and point `www.skillvard.in` to the project.

## Project structure

| Path | Purpose |
|------|---------|
| `lib/site-content.ts` | Brochure copy (Malayalam + English) |
| `lib/site-config.ts` | Contact, WhatsApp, site URL |
| `lib/analytics.ts` | GA4 event helpers |
| `lib/schema.ts` | JSON-LD structured data |
| `components/sections/` | Page sections matching brochure pages |
| `public/` | `favicon.png`, `logo-light.png`, `logo-dark.png` |

## Marketing context

See `.agents/product-marketing.md` for positioning and conversion goals.
