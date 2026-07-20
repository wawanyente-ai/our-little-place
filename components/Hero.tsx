"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";

const sentence = "Every story starts with a single moment.";
const words = sentence.split(" ");

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springX = useSpring(mouseX, { stiffness: 60, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 25 });

  const imgX = useTransform(springX, [0, 1], [25, -25]);
  const imgY = useTransform(springY, [0, 1], [15, -15]);
  const gradientX = useTransform(springX, [0, 1], [0, 30]);
  const gradientY = useTransform(springY, [0, 1], [0, 20]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      id="hero"
      className="relative flex min-h-screen w-full items-end overflow-hidden bg-ink"
      aria-label="Hero"
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, ease: "easeOut" }}
        style={{ x: imgX, y: imgY }}
      >
        <Image
          src="https://cdn.jsdelivr.net/gh/wawanyente-ai/project-memory-1-assets@main/assets/us-with-flowers.webp"
          alt="Best couple portrait, golden hour"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </motion.div>

      <motion.div
        className="absolute inset-0"
        style={{
          background: useTransform(
            [gradientX, gradientY],
            ([x, y]: number[]) =>
              `radial-gradient(ellipse at ${50 + x}% ${40 + y}%, transparent 0%, rgba(10,6,6,0.5) 100%)`
          ),
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />

      {/* Floating decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.span
          className="absolute text-accent/10"
          style={{ left: "15%", bottom: "-5%" }}
          animate={{ y: [0, -300], x: [0, 20], rotate: [0, 360], opacity: [0, 0.5, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 0, ease: "easeInOut" }}
        >
          ✿
        </motion.span>
        <motion.span
          className="absolute text-accent/8"
          style={{ left: "40%", bottom: "-5%" }}
          animate={{ y: [0, -280], x: [0, -30], rotate: [0, -360], opacity: [0, 0.4, 0] }}
          transition={{ duration: 12, repeat: Infinity, delay: 2, ease: "easeInOut" }}
        >
          ✿
        </motion.span>
        <motion.span
          className="absolute text-accent/10"
          style={{ left: "70%", bottom: "-5%" }}
          animate={{ y: [0, -320], x: [0, 15], rotate: [0, 360], opacity: [0, 0.5, 0] }}
          transition={{ duration: 9, repeat: Infinity, delay: 4, ease: "easeInOut" }}
        >
          ✿
        </motion.span>
        <motion.span
          className="absolute text-accent/6"
          style={{ left: "55%", bottom: "-5%" }}
          animate={{ y: [0, -260], x: [0, 40], rotate: [0, -360], opacity: [0, 0.3, 0] }}
          transition={{ duration: 11, repeat: Infinity, delay: 1, ease: "easeInOut" }}
        >
          ✿
        </motion.span>
        <motion.span
          className="absolute text-accent/8"
          style={{ left: "85%", bottom: "-5%" }}
          animate={{ y: [0, -300], x: [0, -20], rotate: [0, 360], opacity: [0, 0.4, 0] }}
          transition={{ duration: 13, repeat: Infinity, delay: 3, ease: "easeInOut" }}
        >
          ✿
        </motion.span>
        <motion.span
          className="absolute text-accent/7"
          style={{ left: "25%", bottom: "-5%" }}
          animate={{ y: [0, -340], x: [0, -45], rotate: [0, 360], opacity: [0, 0.35, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 5, ease: "easeInOut" }}
        >
          ♡
        </motion.span>
      </div>

      <div className="relative z-10 w-full px-6 pb-24 text-center sm:pb-32">
        <p className="font-heading text-2xl text-cream sm:text-3xl md:text-4xl">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30, rotateX: -40 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.5 + i * 0.08,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              className="inline-block mr-[0.3em]"
            >
              {word}
            </motion.span>
          ))}
        </p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.8 }}
          className="mt-3 font-quote text-2xl italic text-dusty-pink sm:text-3xl md:text-4xl"
        >
          {"Ours started with you.".split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.03, delay: 2.2 + i * 0.04 }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.8 }}
          className="mt-14 flex flex-col items-center gap-2 text-cream/70"
        >
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 3.2 }}
            className="font-body text-[11px] uppercase tracking-[0.3em]"
          >
            Scroll
          </motion.span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="block h-6 w-px bg-cream/60"
          />
        </motion.div>
      </div>
    </section>
  );
}
