# Our Little Place

*A place where our memories quietly live.*

A single-page, scroll-driven storytelling site: loading screen → interactive
envelope → hero → cinematic memory journey → letter → gift section (SmartPLS
tutorials with a working YouTube modal) → thank-you → footer.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/                Root layout, global styles, and the page that assembles every section
components/         One component per section, plus shared pieces (PlaceholderPhoto, FloralDecoration, VideoModal, SmoothScroll)
lib/
  memories.ts       The 18 memory-journey entries (title, caption, layout, placeholder description)
  videos.ts         The SmartPLS tutorial video list (YouTube IDs, titles, descriptions)
```

## Personalizing content

### 1. Replace photos and video
Every photo slot currently renders `<PlaceholderPhoto />`, a labeled
placeholder that describes the ideal shot for that spot (e.g. "Golden hour
portrait", "Coffee date candid"). To swap in a real photo:

1. Drop the image file into `public/photos/` (create the folder).
2. In the relevant component (`components/Hero.tsx` or
   `components/MemoryJourney.tsx`), replace the `<PlaceholderPhoto ... />`
   with `next/image`:

   ```tsx
   import Image from "next/image";

   <div className="relative aspect-[4/3]">
     <Image
       src="/photos/memory-01.jpg"
       alt="First selfie together"
       fill
       className="object-cover"
       sizes="(max-width: 768px) 100vw, 50vw"
     />
   </div>
   ```

For the short muted clip in Memory 08, add a real file at
`public/videos/memory-08.mp4` and point the `<source>` inside
`components/MemoryJourney.tsx` to it.

### 2. Add or edit memories
Edit `lib/memories.ts`. Each entry has a `layout` field
(`full | left-image | right-image | portrait | landscape | duo | video`) so
you can keep the "never boring" alternating rhythm as you add more moments.
The footer's "Memories Collected" count updates automatically from the length
of this array — no need to edit it by hand.

### 3. Update the letter
Edit the `paragraphs` array in `components/Letter.tsx`.

### 4. SmartPLS videos
Edit `lib/videos.ts` and replace each `youtubeId` with the real 11-character
YouTube video ID (from the video's URL, after `v=`). Thumbnails and the modal
player are wired to that ID automatically.

### 5. Footer dates
`components/Footer.tsx` has `SITE_STARTED` and `LAST_UPDATED` constants at
the top of the file — update `LAST_UPDATED` whenever you add new memories.

## Tech stack

Next.js (App Router) · TypeScript · Tailwind CSS · GSAP (ScrollTrigger) ·
Framer Motion · Lenis smooth scroll · next/image · next/font

## Deploying

Push to a Git repo and import it in [Vercel](https://vercel.com/new) — no
extra configuration needed.

## Notes on accessibility & performance

- All decorative flourishes (florals, grain) are `aria-hidden`.
- The video modal supports Esc, click-outside, and a focus-visible close
  button; focus moves to the close button on open.
- Animations respect `prefers-reduced-motion`.
- Images should use `next/image` with real dimensions once photos are added,
  to keep CLS at zero and hit the Lighthouse targets in the brief.
