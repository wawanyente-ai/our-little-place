"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import VideoModal from "./VideoModal";
import FloralDecoration from "./FloralDecoration";
import { videos, type TutorialVideo } from "@/lib/videos";

export default function GiftSection() {
  const [activeVideo, setActiveVideo] = useState<TutorialVideo | null>(null);

  return (
    <section
      id="gift"
      className="relative w-full overflow-hidden bg-cream py-24"
      aria-label="A small gift for you"
    >
      <FloralDecoration
        variant="sprig"
        className="pointer-events-none absolute right-6 top-6 h-24 w-24 text-accent opacity-[0.05]"
      />

      <div className="mx-auto max-w-2xl px-6 text-center">
        <span className="font-body text-xs uppercase tracking-[0.3em] text-accent/70">
          One More Little Thing
        </span>
        <h2 className="mt-4 font-heading text-3xl text-ink sm:text-4xl">
          A Small Gift For You
        </h2>

        <div className="mt-8 flex flex-col gap-4 font-body text-sm leading-relaxed text-ink-soft sm:text-base">
          <p>
            Kamu pernah bilang pengen aku ajarin SmartPLS buat ngerjain
            skripsi.
          </p>
          <p>
            Karena kita belum sempat duduk bareng buat belajar, aku bikinin
            tempat kecil ini supaya kamu bisa belajar kapan pun kamu mau.
          </p>
          <p>
            Semoga video-video ini bisa sedikit membantu. Kalau nanti masih
            ada yang bikin bingung, kita bahas bareng ya. 😊
          </p>
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-5 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video, i) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: "easeOut" }}
            className="group flex flex-col overflow-hidden rounded-md border border-accent/10 bg-soft-cream shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-ink">
              <Image
                src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
                alt={`Thumbnail for ${video.title}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute bottom-2 right-2 rounded bg-ink/70 px-1.5 py-0.5 font-body text-[11px] text-cream">
                {video.duration}
              </span>
              <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors group-hover:bg-ink/20">
                <span className="text-2xl text-cream opacity-0 transition-opacity group-hover:opacity-100">
                  ▶
                </span>
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-2 p-5">
              <span className="font-body text-[11px] uppercase tracking-[0.15em] text-accent/70">
                📺 Tutorial
              </span>
              <h3 className="font-heading text-lg text-ink">{video.title}</h3>
              <p className="flex-1 font-body text-sm text-ink-soft">
                {video.description}
              </p>
              <button
                type="button"
                onClick={() => setActiveVideo(video)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 font-body text-xs uppercase tracking-[0.15em] text-cream transition-opacity hover:opacity-90"
              >
                Watch
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </section>
  );
}
