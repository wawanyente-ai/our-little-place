"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FloralDecoration from "./FloralDecoration";
import Image from "next/image";
import { memories, type Memory } from "@/lib/memories";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function MemoryItem({ memory, index }: { memory: Memory; index: number }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const images = el.querySelectorAll<HTMLElement>("[data-reveal-img]");
      const texts = el.querySelectorAll<HTMLElement>("[data-reveal-text]");

      images.forEach((img, i) => {
        gsap.fromTo(
          img,
          { opacity: 0, scale: 1.08, filter: "blur(14px)", rotate: index % 2 === 0 ? -1 : 1 },
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            rotate: 0,
            duration: 1.3,
            ease: "power3.out",
            delay: i * 0.12,
            scrollTrigger: {
              trigger: el,
              start: "top 78%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      texts.forEach((t, i) => {
        gsap.fromTo(
          t,
          { opacity: 0, y: 26 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            delay: 0.25 + i * 0.1,
            scrollTrigger: {
              trigger: el,
              start: "top 78%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Gentle parallax drift on the image container while scrolling through
      const imgWrap = el.querySelector<HTMLElement>("[data-parallax]");
      if (imgWrap) {
        gsap.fromTo(
          imgWrap,
          { y: -18 },
          {
            y: 18,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }
    }, rootRef);

    return () => ctx.revert();
  }, [index]);

  const eyebrow = memory.date ?? `Memory ${String(memory.id).padStart(2, "0")}`;

  const TextBlock = (
    <div data-reveal-text className="flex flex-col justify-center px-2 sm:px-6">
      <span className="font-body text-xs uppercase tracking-[0.25em] text-accent/70">
        {eyebrow}
      </span>
      <h3 className="mt-3 font-heading text-2xl text-ink sm:text-3xl">
        {memory.title}
      </h3>
      <p className="mt-4 max-w-md font-quote text-xl italic leading-relaxed text-ink-soft">
        &ldquo;{memory.caption}&rdquo;
      </p>
    </div>
  );

  if (memory.layout === "video") {
    return (
      <div
        ref={rootRef}
        className="section-padding relative mx-auto w-full max-w-5xl px-6"
      >
        <div data-parallax data-reveal-img className="relative">
          <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-ink/90">
            <video
              className="h-full w-full object-cover opacity-90"
              autoPlay
              muted
              loop
              playsInline
              aria-label={`Muted video: ${memory.placeholder}`}
            >
              {/* Replace with a real clip, e.g. /videos/memory-08.mp4 */}
            </video>
            <div className="absolute inset-0 flex items-center justify-center bg-ink/40 text-center">
              <p className="max-w-xs px-4 font-body text-xs uppercase tracking-[0.15em] text-cream/80">
                Video placeholder — {memory.placeholder}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">{TextBlock}</div>
      </div>
    );
  }

  if (memory.layout === "duo") {
    return (
      <div ref={rootRef} className="section-padding mx-auto w-full max-w-5xl px-6">
        <div className="grid grid-cols-2 gap-3 sm:gap-6" data-parallax>
          <div data-reveal-img className="relative aspect-[3/4] overflow-hidden rounded-sm">
            <Image
              src={memory.photo}
              alt={memory.placeholder}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
          <div data-reveal-img className="relative aspect-[3/4] overflow-hidden rounded-sm">
            <Image
              src={memory.secondPhoto ?? memory.photo}
              alt={memory.secondPlaceholder ?? memory.placeholder}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
        </div>
        <div className="mt-6 text-center">{TextBlock}</div>
      </div>
    );
  }

  if (memory.layout === "full") {
    return (
      <div ref={rootRef} className="relative w-full">
        <div data-parallax data-reveal-img className="relative h-[70vh] overflow-hidden sm:h-[85vh]">
          <Image
            src={memory.photo}
            alt={memory.placeholder}
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div
          data-reveal-text
          className="mx-auto -mt-16 max-w-2xl px-6 text-center sm:-mt-24"
        >
          <div className="mx-auto w-fit rounded-sm bg-cream/90 px-6 py-6 shadow-sm backdrop-blur-sm sm:px-10">
            <span className="font-body text-xs uppercase tracking-[0.25em] text-accent/70">
              {eyebrow}
            </span>
            <h3 className="mt-2 font-heading text-2xl text-ink sm:text-3xl">
              {memory.title}
            </h3>
            <p className="mt-3 font-quote text-xl italic leading-relaxed text-ink-soft">
              &ldquo;{memory.caption}&rdquo;
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (memory.layout === "portrait" || memory.layout === "landscape") {
    const isPortrait = memory.layout === "portrait";
    return (
      <div
        ref={rootRef}
        className="section-padding mx-auto w-full max-w-4xl px-6 text-center"
      >
        <div
          data-parallax
          data-reveal-img
          className={isPortrait ? "relative mx-auto max-w-sm aspect-[3/4] overflow-hidden rounded-sm" : "relative mx-auto aspect-[4/3] overflow-hidden rounded-sm"}
        >
          <Image
            src={memory.photo}
            alt={memory.placeholder}
            fill
            className="object-cover object-center"
            sizes="(max-width: 640px) 100vw, 384px"
          />
        </div>
        <div className="mt-8">{TextBlock}</div>
      </div>
    );
  }

  // left-image / right-image split layouts
  const imageFirst = memory.layout === "left-image";
  return (
    <div ref={rootRef} className="section-padding mx-auto w-full max-w-5xl px-6">
      <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2 sm:gap-12">
        {imageFirst && (
          <div data-parallax data-reveal-img className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <Image
              src={memory.photo}
              alt={memory.placeholder}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        )}
        {TextBlock}
        {!imageFirst && (
          <div data-parallax data-reveal-img className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <Image
              src={memory.photo}
              alt={memory.placeholder}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default function MemoryJourney() {
  return (
    <section
      id="memories"
      className="relative w-full overflow-hidden bg-cream py-10"
      aria-label="Our memory journey"
    >
      <FloralDecoration
        variant="sprig"
        className="pointer-events-none absolute right-4 top-10 h-20 w-20 text-accent opacity-[0.05]"
      />
      <FloralDecoration
        variant="sprig"
        className="pointer-events-none absolute bottom-10 left-4 h-20 w-20 text-accent opacity-[0.05]"
      />

      <div className="mx-auto max-w-2xl px-6 pb-6 pt-8 text-center">
        <span className="font-body text-xs uppercase tracking-[0.3em] text-accent/70">
          The Memory Journey
        </span>
        <h2 className="mt-4 font-heading text-3xl text-ink sm:text-4xl">
          A little film of us
        </h2>
      </div>

      <div className="flex flex-col gap-2">
        {memories.map((memory, i) => (
          <MemoryItem key={memory.id} memory={memory} index={i} />
        ))}
      </div>
    </section>
  );
}
