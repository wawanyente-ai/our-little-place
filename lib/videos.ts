export interface TutorialVideo {
  id: string;
  title: string;
  youtubeId: string;
  duration: string;
  description: string;
}

// NOTE: youtubeId values below are placeholders. Replace each with a real
// YouTube video ID (the 11-character code from the video URL) before launch.
export const videos: TutorialVideo[] = [
  {
    id: "intro",
    title: "Pengenalan SmartPLS 3",
    youtubeId: "dQw4w9WgXcQ",
    duration: "8:12",
    description: "Kenalan dulu sama tampilan dan konsep dasar SmartPLS.",
  },
  {
    id: "import",
    title: "Import Dataset",
    youtubeId: "dQw4w9WgXcQ",
    duration: "6:45",
    description: "Cara memasukkan data kuesioner ke dalam SmartPLS.",
  },
  {
    id: "measurement",
    title: "Measurement Model",
    youtubeId: "dQw4w9WgXcQ",
    duration: "10:30",
    description: "Menguji validitas dan reliabilitas indikator penelitian.",
  },
  {
    id: "structural",
    title: "Structural Model",
    youtubeId: "dQw4w9WgXcQ",
    duration: "9:15",
    description: "Menghubungkan variabel laten sesuai model penelitian.",
  },
  {
    id: "bootstrapping",
    title: "Bootstrapping",
    youtubeId: "dQw4w9WgXcQ",
    duration: "7:50",
    description: "Menguji signifikansi hubungan antar variabel.",
  },
  {
    id: "interpretation",
    title: "Interpretasi Hasil",
    youtubeId: "dQw4w9WgXcQ",
    duration: "11:20",
    description: "Membaca dan memahami output SmartPLS dengan tepat.",
  },
  {
    id: "writing",
    title: "Menulis Hasil Analisis",
    youtubeId: "dQw4w9WgXcQ",
    duration: "9:40",
    description: "Menuliskan hasil olah data ke dalam bab skripsi.",
  },
];
