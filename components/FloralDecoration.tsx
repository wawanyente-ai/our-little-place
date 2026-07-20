"use client";

interface FloralProps {
  className?: string;
  variant?: "branch" | "sprig" | "leaf";
}

/**
 * Subtle line-art botanical decoration, ~5% opacity by default.
 * Purely decorative — hidden from assistive tech.
 */
export default function FloralDecoration({
  className = "",
  variant = "branch",
}: FloralProps) {
  if (variant === "leaf") {
    return (
      <svg
        viewBox="0 0 120 200"
        className={className}
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M60 10 C90 50 90 150 60 190 C30 150 30 50 60 10Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path d="M60 20 V180" fill="none" stroke="currentColor" strokeWidth="0.6" />
      </svg>
    );
  }

  if (variant === "sprig") {
    return (
      <svg
        viewBox="0 0 100 100"
        className={className}
        aria-hidden="true"
        focusable="false"
      >
        <circle cx="50" cy="50" r="6" fill="none" stroke="currentColor" strokeWidth="1" />
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <ellipse
            key={deg}
            cx="50"
            cy="30"
            rx="6"
            ry="14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            transform={`rotate(${deg} 50 50)`}
          />
        ))}
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 300 120"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M10 100 C 80 40, 160 90, 290 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      {[40, 100, 160, 220, 270].map((x, i) => (
        <g key={x} transform={`translate(${x} ${70 - i * 8})`}>
          <ellipse
            cx="0"
            cy="0"
            rx="10"
            ry="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
            transform="rotate(-30)"
          />
        </g>
      ))}
    </svg>
  );
}
