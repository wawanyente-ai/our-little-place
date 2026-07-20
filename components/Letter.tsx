"use client";

import { motion } from "framer-motion";
import FloralDecoration from "./FloralDecoration";

const paragraphs = [
  "I don't know what our story will become someday.",
  "But for now, every photo on this page holds a little piece of us, and somehow, it always brings a smile whenever I look back at it.",
  "There were days filled with laughter.",
  "There were days that felt exhausting.",
  "There were moments when we both wished the day would end sooner.",
  "But every moment, good or difficult, became a part of our journey — a story I never want to forget.",
  "Thank you...",
  "For becoming a part of these memories.",
  "And I hope...",
  "this page will continue to grow with more chapters.",
  "Because our story is still being written.",
];

export default function Letter() {
  return (
    <section
      id="letter"
      className="relative w-full overflow-hidden bg-soft-cream py-24"
      aria-label="A little letter"
    >
      <FloralDecoration
        variant="branch"
        className="pointer-events-none absolute -top-4 left-1/2 h-20 w-[300px] -translate-x-1/2 text-accent opacity-[0.05]"
      />

      <div className="mx-auto max-w-xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8 }}
          className="text-center font-heading text-3xl text-ink sm:text-4xl"
        >
          A Little Letter
        </motion.h2>

        <div className="mt-14 flex flex-col gap-6">
          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="font-quote text-xl italic leading-relaxed text-ink-soft sm:text-2xl"
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
