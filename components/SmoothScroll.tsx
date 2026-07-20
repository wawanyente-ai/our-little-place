"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
    });

    lenisRef.current = lenis;

    // Connect Lenis scroll to GSAP ScrollTrigger
    lenis.on("scroll", () => ScrollTrigger.update());

    // Proxy native scroll to Lenis for GSAP
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length) {
          lenis.scrollTo(value as number, { immediate: true });
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    // Refresh ScrollTrigger after Lenis is ready
    ScrollTrigger.refresh();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Expose for programmatic scroll (e.g. envelope -> hero transition)
    (window as any).__lenis = lenis;

    return () => {
      lenis.destroy();
      (window as any).__lenis = null;
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return <>{children}</>;
}
