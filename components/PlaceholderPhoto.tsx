"use client";

interface PlaceholderPhotoProps {
  label: string;
  className?: string;
  aspect?: "square" | "portrait" | "landscape" | "wide";
}

const aspectMap: Record<string, string> = {
  square: "aspect-[1/1]",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
};

/**
 * Stand-in for a real photo. Replace with next/image + a real file
 * (e.g. <Image src="/photos/memory-01.jpg" alt="..." fill />) once
 * personal photos are available. The label describes the ideal shot
 * so photos can be matched to the right slot later.
 */
export default function PlaceholderPhoto({
  label,
  className = "",
  aspect = "landscape",
}: PlaceholderPhotoProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-sm bg-gradient-to-br from-dusty-pink/40 via-soft-cream to-muted-rose/30 ${aspectMap[aspect]} ${className}`}
      role="img"
      aria-label={`Placeholder photo: ${label}`}
    >
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="text-center">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            className="mx-auto mb-3 text-accent/50"
            aria-hidden="true"
          >
            <path
              d="M4 6h3l1.5-2h7L17 6h3a1 1 0 011 1v11a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z"
              stroke="currentColor"
              strokeWidth="1.3"
            />
            <circle cx="12" cy="13" r="3.3" stroke="currentColor" strokeWidth="1.3" />
          </svg>
          <p className="font-body text-xs uppercase tracking-[0.15em] text-accent/70">
            Photo placeholder
          </p>
          <p className="mt-1 font-body text-[13px] leading-snug text-ink-soft/90">
            {label}
          </p>
        </div>
      </div>
      <div className="absolute inset-0 border border-accent/10" />
    </div>
  );
}
