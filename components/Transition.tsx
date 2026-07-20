"use client";

import { motion } from "framer-motion";

function FloatElement({ children, delay, x, y }: { children: React.ReactNode; delay: number; x: number; y: number }) {
  return (
    <motion.span
      className="pointer-events-none absolute text-accent/15"
      style={{ left: `${x}%`, top: `${y}%` }}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 10, -10, 0],
        opacity: [0.3, 0.7, 0.3],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.span>
  );
}

export default function Transition() {
  return (
    <section
      className="relative flex min-h-[50vh] w-full items-center justify-center overflow-hidden bg-gradient-to-b from-soft-cream to-cream px-6"
      aria-label="Transition"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <FloatElement delay={0} x={15} y={20}>✿</FloatElement>
        <FloatElement delay={0.8} x={80} y={30}>✿</FloatElement>
        <FloatElement delay={1.6} x={25} y={70}>♡</FloatElement>
        <FloatElement delay={0.4} x={70} y={75}>✿</FloatElement>
        <FloatElement delay={2.0} x={50} y={15}>✿</FloatElement>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="text-center"
      >
        <motion.span
          className="inline-block font-heading text-3xl text-accent"
          animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          ✿
        </motion.span>
        <p className="mt-6 font-quote text-2xl italic text-ink-soft sm:text-3xl">
          One More Little Thing...
        </p>
      </motion.div>
    </section>
  );
}
