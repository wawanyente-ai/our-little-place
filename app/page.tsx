"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Loading from "@/components/Loading";
import Envelope from "@/components/Envelope";
import Hero from "@/components/Hero";
import MemoryJourney from "@/components/MemoryJourney";
import Letter from "@/components/Letter";
import Transition from "@/components/Transition";
import GiftSection from "@/components/GiftSection";
import Ending from "@/components/Ending";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1500);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Prevent scrolling on the envelope-gated screens.
    if (!isOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpened]);

  return (
    <main className="relative w-full">
      <AnimatePresence>{isLoading && <Loading />}</AnimatePresence>

      {!isLoading && !isOpened && (
        <Envelope onOpened={() => setIsOpened(true)} />
      )}

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpened ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{ display: isOpened ? "block" : "none" }}
        >
          <Hero />
          <MemoryJourney />
          <Letter />
          {/* <Transition /> */}
          {/* <GiftSection /> */}
          <Ending />
          <Footer />
        </motion.div>
      )}
    </main>
  );
}
