import { memories } from "@/lib/memories";

// Update these two values whenever new photos are added to the page.
const SITE_STARTED = "10 April 2026";
const LAST_UPDATED = "20 July 2026";

export default function Footer() {
  const memoriesCount = memories.length;

  return (
    <footer className="w-full border-t border-accent/10 bg-soft-cream px-6 py-14 text-center">
      <div className="mx-auto flex max-w-md flex-col gap-6 font-body text-sm text-ink-soft">
        <div>
          <p className="text-[11px] uppercase tracking-[0.25em] text-accent/70">
            Started
          </p>
          <p className="mt-1">{SITE_STARTED}</p>
        </div>

        <p className="font-quote text-lg italic text-ink-soft">
          To Be Continued...
        </p>

        <div>
          <p className="text-[11px] uppercase tracking-[0.25em] text-accent/70">
            Memories Collected
          </p>
          <p className="mt-1">{memoriesCount} 📸</p>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.25em] text-accent/70">
            Last Updated
          </p>
          <p className="mt-1">{LAST_UPDATED}</p>
        </div>
      </div>
    </footer>
  );
}
