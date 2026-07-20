"use client";

import { motion } from "framer-motion";

export default function Ending() {
  return (
    <section
      className="flex min-h-[70vh] w-full flex-col items-center justify-center bg-cream px-6 text-center"
      aria-label="Thank you"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.9 }}
        className="font-heading text-3xl text-ink sm:text-4xl"
      >
        Thank You
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="mt-6 max-w-md font-quote text-xl italic leading-relaxed text-ink-soft sm:text-2xl"
      >
        <p>
          Thank you for taking the time to open this little piece of our story.
        </p>

        <p className="mt-4">
          I hope that from now on, it won&apos;t only be the pages of your thesis
          that continue to grow...
        </p>

        <p className="mt-4">
          But also the memories, laughter, and moments we share together.
        </p>
      </motion.div>

      <motion.span
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-10 font-heading text-3xl text-accent"
      >
        ♡
      </motion.span>
    </section>
  );
}
