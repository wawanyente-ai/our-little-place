"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-end overflow-hidden bg-ink"
      aria-label="Hero"
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 18, ease: "linear" }}
      >
        <Image
          src="https://cdn.jsdelivr.net/gh/wawanyente-ai/project-memory-1-assets@main/assets/us-with-flowers-2.webp"
          alt="Best couple portrait, golden hour"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />

      <div className="relative z-10 w-full px-6 pb-24 text-center sm:pb-32">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-heading text-2xl text-cream sm:text-3xl md:text-4xl"
        >
          Every story starts with a single moment.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="mt-3 font-quote text-2xl italic text-dusty-pink sm:text-3xl md:text-4xl"
        >
          Ours started with you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-14 flex flex-col items-center gap-2 text-cream/70"
        >
          <span className="font-body text-[11px] uppercase tracking-[0.3em]">
            Scroll
          </span>
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
