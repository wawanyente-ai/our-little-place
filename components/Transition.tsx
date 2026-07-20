"use client";

import { motion } from "framer-motion";

export default function Transition() {
  return (
    <section
      className="flex min-h-[50vh] w-full items-center justify-center bg-gradient-to-b from-soft-cream to-cream px-6"
      aria-label="Transition"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="text-center"
      >
        <span className="font-heading text-3xl text-accent">✿</span>
        <p className="mt-6 font-quote text-2xl italic text-ink-soft sm:text-3xl">
          One More Little Thing...
        </p>
      </motion.div>
    </section>
  );
}
