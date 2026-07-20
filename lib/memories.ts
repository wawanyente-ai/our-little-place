export type MemoryLayout =
  | "full"
  | "left-image"
  | "right-image"
  | "portrait"
  | "landscape"
  | "duo"
  | "video";

export interface Memory {
  id: number;
  title: string;
  photo: string;
  placeholder: string;
  caption: string;
  date?: string;
  layout: MemoryLayout;
  secondPlaceholder?: string;
  secondPhoto?: string;
  objectPosition?: string;
}

// export const memories: Memory[] = [
//   {
//     id: 1,
//     title: "The Beginning",
//     placeholder: "First selfie together, candid, soft daylight",
//     caption:
//       "Everything felt ordinary until you became part of it.",
//     date: "12 Feb 2025",
//     layout: "right-image",
//   },
//   {
//     id: 2,
//     title: "Coffee Date",
//     placeholder: "Cafe table, two cups of coffee, hands visible, candid",
//     caption: "Some conversations quietly become unforgettable.",
//     layout: "left-image",
//   },
//   {
//     id: 3,
//     title: "Random Laugh",
//     placeholder: "Mid-laugh candid, slight motion blur okay",
//     caption:
//       "I don't even remember the joke. I only remember how happy we were.",
//     layout: "full",
//   },
//   {
//     id: 4,
//     title: "Walking Together",
//     placeholder: "Walking side by side, shot from behind, street or park",
//     caption: "Sometimes the destination never mattered.",
//     layout: "landscape",
//   },
//   {
//     id: 5,
//     title: "Sunset",
//     placeholder: "Silhouette against a warm sunset sky",
//     caption: "The sky looked beautiful. But somehow, I looked at you more.",
//     layout: "full",
//   },
//   {
//     id: 6,
//     title: "Dinner Table",
//     placeholder: "Table with shared food, warm indoor light",
//     caption: "Every meal somehow tasted better with you around.",
//     layout: "right-image",
//   },
//   {
//     id: 7,
//     title: "Silly Moment",
//     placeholder: "Goofy face, unfiltered, imperfect and real",
//     caption: "I hope we never stop being weird together.",
//     layout: "left-image",
//   },
//   {
//     id: 8,
//     title: "A Little Clip",
//     placeholder: "Short 5-10s muted clip, casual everyday moment",
//     caption: "Some moments move too fast for just one photo.",
//     layout: "video",
//   },
//   {
//     id: 9,
//     title: "Quiet Portrait",
//     placeholder: "Close portrait, natural light, gentle expression",
//     caption: "I like your face best when you don't know I'm looking.",
//     layout: "portrait",
//   },
//   {
//     id: 10,
//     title: "Somewhere New",
//     placeholder: "Wide landscape shot, new place explored together",
//     caption: "New places, same favorite person.",
//     layout: "landscape",
//   },
//   {
//     id: 11,
//     title: "Rainy Afternoon",
//     placeholder: "Window with rain, cozy indoor scene",
//     caption: "Even the gray days felt warmer with you around.",
//     layout: "full",
//   },
//   {
//     id: 12,
//     title: "Two of Us",
//     placeholder: "Two side-by-side photos, matching mood",
//     caption: "Two frames, one feeling.",
//     layout: "duo",
//     secondPlaceholder: "Second matching photo, same day or mood",
//   },
//   {
//     id: 13,
//     title: "Late Night Talk",
//     placeholder: "Low light, phone glow or lamp light, candid conversation",
//     caption: "Some of my favorite memories don't have a photo. This one does.",
//     layout: "left-image",
//   },
//   {
//     id: 14,
//     title: "Celebration",
//     placeholder: "Birthday, small gathering, or celebration moment",
//     caption: "Celebrating you is one of my favorite things to do.",
//     layout: "right-image",
//   },
//   {
//     id: 15,
//     title: "Just Us",
//     placeholder: "Close, intimate portrait, soft focus background",
//     caption: "In a room full of people, I still find you first.",
//     layout: "portrait",
//   },
//   {
//     id: 16,
//     title: "On the Way Home",
//     placeholder: "Car window, transit, or road, golden light",
//     caption: "Every road feels shorter when you're beside me.",
//     layout: "landscape",
//   },
//   {
//     id: 17,
//     title: "Little Things",
//     placeholder: "Detail shot, hands, small gesture, everyday tenderness",
//     caption: "It's never the big days I remember most. It's these.",
//     layout: "left-image",
//   },
//   {
//     id: 18,
//     title: "Still Here",
//     placeholder: "Recent photo, most current moment together",
//     caption: "And somehow, I still choose you. Every single time.",
//     layout: "full",
//   },
// ];

export const memories: Memory[] = [
  {
    id: 1,
    title: "The First Touch",
    photo:
      "https://cdn.jsdelivr.net/gh/wawanyente-ai/project-memory-1-assets@main/assets/hand.webp",
    placeholder: "Close up of two hands together, soft natural light",
    caption:
      "Maybe it started from something simple. A small moment, a small touch, but somehow it became the beginning of everything.",
    date: "The Beginning",
    layout: "right-image",
  },
  {
    id: 2,
    title: "The Face I Didn't Know Anymore",
    photo:
      "https://cdn.jsdelivr.net/gh/wawanyente-ai/project-memory-1-assets@main/assets/1st-photo.webp",
    placeholder: "The first photo of her you saw again after years apart",
    caption:
      "I knew you when we were kids, but years passed and I no longer knew what you looked like. Then, after all this time, this was the first time I saw you again. A familiar name, but a face I had to discover once more.",
    layout: "left-image",
  },
  {
    id: 3,
    title: "Our First Date",
    photo:
      "https://cdn.jsdelivr.net/gh/wawanyente-ai/project-memory-1-assets@main/assets/1st-date-at-resto.webp",
    placeholder:
      "Restaurant date, warm light, two people enjoying time together",
    caption:
      "A simple dinner turned into one of those memories I never want to forget.",
    layout: "full",
  },
  {
    id: 4,
    title: "Little Acts of Love",
    photo:
      "https://cdn.jsdelivr.net/gh/wawanyente-ai/project-memory-1-assets@main/assets/feeding.webp",
    placeholder: "Feeding each other, playful and intimate moment",
    caption:
      "Love was never only about big moments. Sometimes it was just taking care of each other in the smallest ways.",
    layout: "landscape",
    objectPosition: "center 75%",
  },
  {
    id: 5,
    title: "A Flower For You",
    photo:
      "https://cdn.jsdelivr.net/gh/wawanyente-ai/project-memory-1-assets@main/assets/1st-flower.webp",
    placeholder: "Holding a flower, gentle expression, romantic moment",
    caption:
      "A little flower, a little smile, and a memory that stayed much longer than the moment itself.",
    layout: "full",
  },
  {
    id: 6,
    title: "Our Little Memory Keeper",
    photo:
      "https://cdn.jsdelivr.net/gh/wawanyente-ai/project-memory-1-assets@main/assets/ur-smile.webp",
    placeholder:
      "A candid moment of us arranging flowers while she records the memory with her phone",
    caption:
      "Somehow, you always find a way to save our little moments. While we were busy enjoying the day, you were there capturing pieces of our story that I can look back on today.",
    layout: "right-image",
  },
  {
    id: 7,
    title: "Creating Something Together",
    photo:
      "https://cdn.jsdelivr.net/gh/wawanyente-ai/project-memory-1-assets@main/assets/us-with-flowers.webp",
    placeholder: "Together arranging flowers, hands and flowers visible",
    caption:
      "It was never about making something perfect. It was about creating something together.",
    layout: "left-image",
    objectPosition: "center 65%",
  },
  {
    id: 8,
    title: "My Favorite View",
    photo:
      "https://cdn.jsdelivr.net/gh/wawanyente-ai/project-memory-1-assets@main/assets/me-staring-at-u.webp",
    placeholder: "Looking at you quietly while spending time together",
    caption:
      "Sometimes I don't need to say anything. I just want to remember this view.",
    layout: "portrait",
  },
  {
    id: 9,
    title: "The Little Things",
    photo:
      "https://cdn.jsdelivr.net/gh/wawanyente-ai/project-memory-1-assets@main/assets/cute.webp",
    placeholder: "Cute everyday moment, natural and unplanned",
    caption:
      "The moments that looked ordinary became the ones I miss the most.",
    layout: "full",
  },
  {
    id: 10,
    title: "Always Taking Care",
    photo:
      "https://cdn.jsdelivr.net/gh/wawanyente-ai/project-memory-1-assets@main/assets/u-with-flower.webp",
    placeholder: "You holding a flower, soft romantic portrait",
    caption: "Seeing you happy has always been one of my favorite things.",
    layout: "portrait",
  },
  {
    id: 11,
    title: "Two Souls, One Story",
    photo:
      "https://cdn.jsdelivr.net/gh/wawanyente-ai/project-memory-1-assets@main/assets/i-2.webp",
    secondPhoto:
      "https://cdn.jsdelivr.net/gh/wawanyente-ai/project-memory-1-assets@main/assets/u.webp",
    placeholder: "Two portraits side by side, showing both sides of our story",
    caption:
      "Two different people, two different journeys, and somehow life brought us to the same place. Before there was an 'us', there was just you and me.",
    layout: "duo",
  },
  {
    id: 12,
    title: "The Moments Between",
    photo:
      "https://cdn.jsdelivr.net/gh/wawanyente-ai/project-memory-1-assets@main/assets/our-foots.webp",
    placeholder: "Feet together, casual everyday moment",
    caption:
      "Not every memory needs a perfect picture. Sometimes the smallest details say everything.",
    layout: "left-image",
  },
  {
    id: 13,
    title: "Looking At You",
    photo:
      "https://cdn.jsdelivr.net/gh/wawanyente-ai/project-memory-1-assets@main/assets/me-staring-at-u-2.webp",
    placeholder: "Quiet moment looking at her",
    caption:
      "I still find myself smiling whenever I realize how lucky I am to have you.",
    layout: "right-image",
  },
  {
    id: 14,
    title: "The Person Behind My Smile",
    photo:
      "https://cdn.jsdelivr.net/gh/wawanyente-ai/project-memory-1-assets@main/assets/cute-2.webp",
    placeholder: "Natural portrait of you",
    caption: "You became someone who makes ordinary days feel special.",
    layout: "portrait",
  },
  {
    id: 15,
    title: "More Than A Memory",
    photo:
      "https://cdn.jsdelivr.net/gh/wawanyente-ai/project-memory-1-assets@main/assets/hand-car.webp",
    placeholder: "Inside car moment, holding hands, traveling together",
    caption: "Every journey feels better when I know you're beside me.",
    layout: "landscape",
    objectPosition: "center 70%",
  },
  {
    id: 16,
    title: "Beautiful In Every Moment",
    photo:
      "https://cdn.jsdelivr.net/gh/wawanyente-ai/project-memory-1-assets@main/assets/me-staring-at-u-3.webp",
    placeholder: "Another candid moment looking at her",
    caption: "I hope I never stop appreciating these little moments with you.",
    layout: "full",
  },
  {
    id: 17,
    title: "Small Things, Big Meaning",
    photo:
      "https://cdn.jsdelivr.net/gh/wawanyente-ai/project-memory-1-assets@main/assets/pluppy.webp",
    placeholder: "A quiet moment of choosing her first gift",
    caption:
      "Love is not always found in grand gestures. Sometimes it's hidden in simple moments — like standing there, choosing a little gift, hoping it brings happiness to someone you care about.",
    layout: "left-image",
  },
  {
    id: 18,
    title: "Just Us",
    photo:
      "https://cdn.jsdelivr.net/gh/wawanyente-ai/project-memory-1-assets@main/assets/us.webp",
    placeholder: "Final couple photo together",
    caption:
      "After all the little moments, the laughs, the flowers, and the memories — it's still you and me.",
    layout: "full",
  },
];
