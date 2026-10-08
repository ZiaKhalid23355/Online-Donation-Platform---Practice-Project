# My First Frontend Project: Online Donation Platform
### Worked with duct tape and prayers 🩹🙏

> The first real web app I ever built. It was a class project, made in about a week in July 2025, before I understood backends and without any AI help.
> It's kept here **exactly as I wrote it**, bugs and all, so I can look back and see how far I've come.

**▶ Live demo:** _coming soon_

---

## What it is

A concept donation platform built with React + Vite. The homepage has donation cards for **15 causes**: tree planting, clean water, ocean conservation, clean cities, blood drives, free medical camps, mental health, orphanages, sponsoring education, school supplies, feeding the homeless, emergency shelter, community kitchens, supporting NGOs and disaster relief. Each cause has its own page with a full-screen background video and a donation box.

Around that: About Us, Contact Us, Help Center, Jobs, Success Stories, a "Revenue Generated" dashboard built with Recharts, and an SDLC (Waterfall model) page.

## Built with

React 19 · Vite 6 · React Router 7 · Recharts · plain CSS

(i18next, Express and MongoDB are in `package.json` too. They were plans, not features 😅)

## Why it took over a year to get here

The project shipped with 17 background videos in full **4K**, about **1 GB** in total. GitHub rejects any file over 100 MB, so every push since July 2025 failed, and for a while this repo only held screenshots. In October 2026 I finally got it sorted.

## What changed for this upload (and nothing else)

- **Videos re-encoded from 4K to 1080p** (H.264): 980 MB → 69 MB. Same filenames, same length, same frame rate. Their audio tracks were dropped, but every video is muted in the app anyway.
- **Git history kept.** The old commits only had their videos swapped for the compressed versions. Messages, dates and authorship are untouched.
- **One import fixed:** `SDLC.JSX` → `SDLC.jsx`. Windows doesn't care about filename case and Linux does, so the site couldn't build on any Linux server, Vercel included. This is the only code change.
- **Added `vercel.json`** so pages still load when you refresh them on the live site.
- **Committed the edits that were still sitting uncommitted on my laptop** (Jun–Aug 2026), as-is.

## Known duct tape 🩹

- The `server/` folder was my first attempt at a backend. It imports `Donation` twice, so it crashes before it even starts.
- The Plant Trees "Donate Now" button posts to `localhost:5000` (with the amount field spelled `Vanlue`), so on the live site it quietly does nothing.
- The revenue dashboard numbers are hardcoded.
- 15 near-identical cause pages, lovingly copy-pasted.
- "Browse By Language" is a copy of About Us, and i18next is installed but never used.
- The route is `/plantprees`. There are files called `FeedtTheHomeless.jpg` and `RevenewGeneratedBG.jpg`. 🙏

## Run it locally

Needs Node 18+.

```bash
npm install
npm run dev
```

## What's next

A proper full-stack rebuild (v2) is on the way: a real backend, auth, payments, and code I'd actually walk an interviewer through. I'll link it here once it's up.
