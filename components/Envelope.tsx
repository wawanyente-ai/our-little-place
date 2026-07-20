"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloralDecoration from "./FloralDecoration";

interface EnvelopeProps {
  onOpened: () => void;
}

export default function Envelope({ onOpened }: EnvelopeProps) {
  const [stage, setStage] = useState<"closed" | "opening" | "done">("closed");

  const handleOpen = () => {
    if (stage !== "closed") return;
    setStage("opening");
    // Envelope flap opens, letter slides out, then camera "zooms" via scale,
    // then we hand off to the parent to reveal the Hero section.
    window.setTimeout(() => {
      setStage("done");
      window.setTimeout(onOpened, 900);
    }, 1600);
  };

  return (
    <section
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-warm-gradient px-6"
      aria-label="Opening envelope"
    >
      <FloralDecoration
        variant="branch"
        className="pointer-events-none absolute -top-6 left-1/2 h-24 w-[280px] -translate-x-1/2 text-accent opacity-[0.05] sm:w-[420px]"
      />
      <FloralDecoration
        variant="leaf"
        className="pointer-events-none absolute bottom-0 left-4 h-40 w-24 text-accent opacity-[0.05]"
      />
      <FloralDecoration
        variant="leaf"
        className="pointer-events-none absolute bottom-0 right-4 h-40 w-24 -scale-x-100 text-accent opacity-[0.05]"
      />

      <div className="relative w-full max-w-md" style={{ perspective: 1200 }}>
        <AnimatePresence>
          {stage !== "done" && (
            <motion.div
              className="relative"
              animate={
                stage === "opening"
                  ? { scale: 1.15, y: -30 }
                  : { scale: 1, y: 0 }
              }
              exit={{ opacity: 0, scale: 1.3, transition: { duration: 0.7 } }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              {/* Envelope body */}
              <div className="relative aspect-[3/2] w-full rounded-sm bg-[#FFFDFC] shadow-[0_20px_60px_-15px_rgba(182,133,148,0.35)]">
                {/* Back flap triangle */}
                <div
                  className="absolute inset-0 rounded-sm border border-accent/15"
                  style={{
                    clipPath: "polygon(0 0, 50% 45%, 100% 0, 100% 100%, 0 100%)",
                    background:
                      "linear-gradient(180deg,#F6E7EC 0%, #FFFDFC 60%)",
                  }}
                />

                {/* Letter peeking out, slides up during opening */}
                <motion.div
                  className="absolute left-1/2 top-[8%] h-[78%] w-[86%] -translate-x-1/2 rounded-[2px] bg-cream shadow-sm"
                  animate={
                    stage === "opening" ? { y: "-38%" } : { y: "0%" }
                  }
                  transition={{ duration: 1.1, ease: "easeOut", delay: 0.15 }}
                >
                  <div className="flex h-full flex-col items-center justify-center px-6 text-center">
                    <p className="font-quote text-lg italic text-ink-soft">
                      For Someone
                      <br />
                      Very Special
                    </p>
                  </div>
                </motion.div>

                {/* Front flap (opens like a real envelope) */}
                <motion.div
                  className="absolute left-0 top-0 z-10 h-1/2 w-full origin-top"
                  style={{
                    clipPath: "polygon(0 0, 50% 100%, 100% 0)",
                    background:
                      "linear-gradient(180deg,#FBEEF1 0%, #F6E7EC 100%)",
                    transformStyle: "preserve-3d",
                  }}
                  animate={{ rotateX: stage === "opening" ? -165 : 0 }}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                >
                  <div className="absolute inset-0 border-t border-accent/10" />
                </motion.div>

                {/* Wax seal */}
                <motion.div
                  className="absolute left-1/2 top-[46%] z-20 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-muted-rose shadow-md"
                  animate={{
                    opacity: stage === "opening" ? 0 : 1,
                    scale: stage === "opening" ? 0.5 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="font-heading text-sm text-cream">♡</span>
                </motion.div>
              </div>

              <div className="mt-8 text-center">
                <p className="font-quote text-xl italic text-ink-soft">
                  I made a little place for us.
                  <br />
                  Open it slowly.
                </p>

                <motion.button
                  type="button"
                  onClick={handleOpen}
                  disabled={stage === "opening"}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-transparent px-8 py-3 font-body text-sm uppercase tracking-[0.2em] text-accent transition-colors hover:bg-accent/5 disabled:opacity-60"
                >
                  Open Letter
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
