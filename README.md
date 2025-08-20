# Vercel Company Starter (Next.js 14 + Tailwind)

A clean, production-ready starter for a company website hosted on **Vercel**.

## Features
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS preconfigured
- SEO: metadata, robots.txt, sitemap.xml
- Contact form API route (optionally emails via Resend)
- Lightweight, accessible, mobile-first UI
- Ready for custom domain on Vercel

## Get Started
```bash
pnpm i   # or npm i / yarn
pnpm dev # http://localhost:3000
```

## Deploy on Vercel
1. Push this repo to GitHub.
2. Import the repo at https://vercel.com/new
3. Add environment variables (Project Settings → Environment Variables):
   - `NEXT_PUBLIC_SITE_NAME` = Your Company Name
   - `NEXT_PUBLIC_SITE_URL` = https://yourdomain.com
   - (Optional) `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `CONTACT_TO_EMAIL`
4. Deploy. Vercel auto-provisions HTTPS.

## Connect a Wix Domain to Vercel
In Vercel → Project → **Settings → Domains** → Add your domain.  
In Wix DNS:
- A record: `@` → `76.76.21.21`
- CNAME: `www` → `cname.vercel-dns.com`

Wait for DNS to propagate, then set your domain as **Primary** in Vercel.

## Customize
- Edit copy in `app/*` pages.
- Update logo at `public/logo.svg`.
- Adjust colors in `tailwind.config.ts`.

## Email via Resend (optional)
- Create a Resend account and get an API key.
- Set `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, and `CONTACT_TO_EMAIL` in Vercel.
- The contact form will email submissions; otherwise it logs to server.

## License
MIT
