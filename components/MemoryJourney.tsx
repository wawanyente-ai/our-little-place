"use client";

import { useCallback } from "react";
import { motion } from "framer-motion";
import FloralDecoration from "./FloralDecoration";
import Image from "next/image";
import { memories, type Memory } from "@/lib/memories";

function MemoryItem({ memory, index }: { memory: Memory; index: number }) {
  const pos = memory.objectPosition ?? "center";

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(600px) rotateY(${x * 3}deg) rotateX(${-y * 3}deg)`;
  }, []);

  const handleMouseLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    el.style.transform = "perspective(600px) rotateY(0deg) rotateX(0deg)";
    el.style.transition = "transform 0.6s ease-out";
    setTimeout(() => { if (el) el.style.transition = ""; }, 600);
  }, []);

  const eyebrow = memory.date ?? `Memory ${String(memory.id).padStart(2, "0")}`;

  const reveal = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.9, delay: i * 0.12, ease: [0.215, 0.61, 0.355, 1] },
    }),
  };

  const textReveal = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const TextBlock = (
    <motion.div
      variants={textReveal}
      className="flex flex-col justify-center px-2 sm:px-6"
    >
      <span className="font-body text-xs uppercase tracking-[0.25em] text-accent/70">
        {eyebrow}
      </span>
      <h3 className="mt-3 font-heading text-2xl text-ink sm:text-3xl">
        {memory.title}
      </h3>
      <p className="mt-4 max-w-md font-quote text-xl italic leading-relaxed text-ink-soft">
        &ldquo;{memory.caption}&rdquo;
      </p>
    </motion.div>
  );

  if (memory.layout === "video") {
    return (
      <div className="section-padding relative mx-auto w-full max-w-5xl px-6">
        <motion.div
          custom={0}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="relative"
        >
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
        </motion.div>
        <motion.div
          variants={textReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="mt-6 text-center"
        >
          {TextBlock}
        </motion.div>
      </div>
    );
  }

  if (memory.layout === "duo") {
    return (
      <div  className="section-padding mx-auto w-full max-w-5xl px-6">
        <div className="grid grid-cols-2 gap-3 sm:gap-6">
          <motion.div
            custom={0}
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative aspect-[3/4] overflow-hidden rounded-sm transition-transform duration-300"
          >
            <Image
              src={memory.photo}
              alt={memory.placeholder}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              style={{ objectPosition: pos }}
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </motion.div>
          <motion.div
            custom={1}
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="relative aspect-[3/4] overflow-hidden rounded-sm"
          >
            <Image
              src={memory.secondPhoto ?? memory.photo}
              alt={memory.secondPlaceholder ?? memory.placeholder}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              style={{ objectPosition: "center" }}
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </motion.div>
        </div>
        <motion.div
          variants={textReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="mt-6 text-center"
        >
          {TextBlock}
        </motion.div>
      </div>
    );
  }

  if (memory.layout === "full") {
    return (
      <div  className="relative w-full">
        <motion.div
          custom={0}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5%" }}
          className="relative h-[70vh] overflow-hidden sm:h-[85vh]"
        >
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="absolute inset-0 transition-transform duration-300"
          >
            <Image
              src={memory.photo}
              alt={memory.placeholder}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              style={{ objectPosition: pos }}
              sizes="100vw"
            />
          </div>
        </motion.div>
        <motion.div
          variants={textReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
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
        </motion.div>
      </div>
    );
  }

  if (memory.layout === "portrait" || memory.layout === "landscape") {
    const isPortrait = memory.layout === "portrait";
    return (
      <div
        
        className="section-padding mx-auto w-full max-w-4xl px-6 text-center"
      >
        <motion.div
          custom={0}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={isPortrait ? "relative mx-auto max-w-sm aspect-[3/4] overflow-hidden rounded-sm transition-transform duration-300" : "relative mx-auto aspect-[4/3] overflow-hidden rounded-sm transition-transform duration-300"}
        >
          <Image
            src={memory.photo}
            alt={memory.placeholder}
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            style={{ objectPosition: pos }}
            sizes="(max-width: 640px) 100vw, 384px"
          />
        </motion.div>
        <motion.div
          variants={textReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="mt-8"
        >
          {TextBlock}
        </motion.div>
      </div>
    );
  }

  const imageFirst = memory.layout === "left-image";
  return (
    <div  className="section-padding mx-auto w-full max-w-5xl px-6">
      <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2 sm:gap-12">
        {imageFirst && (
          <motion.div
            custom={0}
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative aspect-[4/3] overflow-hidden rounded-sm transition-transform duration-300"
          >
            <Image
              src={memory.photo}
              alt={memory.placeholder}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              style={{ objectPosition: pos }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        )}
        <motion.div
          variants={textReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
        >
          {TextBlock}
        </motion.div>
        {!imageFirst && (
          <motion.div
            custom={0}
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative aspect-[4/3] overflow-hidden rounded-sm transition-transform duration-300"
          >
            <Image
              src={memory.photo}
              alt={memory.placeholder}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              style={{ objectPosition: pos }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
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
