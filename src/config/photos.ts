export interface GalleryPhoto {
  id: string;
  category: "swetha" | "memories" | "special-moments";
  categoryLabel: string;
  fileName: string;
  localPath: string;
  fallbackUrl: string;
  caption: string;
  date: string;
  location?: string;
  aspect?: "portrait" | "landscape" | "square";
  note?: string;
}

export const galleryPhotos: GalleryPhoto[] = [
  // --- CATEGORY 1: SWETHA ---
  {
    id: "swetha-portrait-1",
    category: "swetha",
    categoryLabel: "Swetha",
    fileName: "swetha-portrait-1.jpg",
    localPath: "/images/swetha/swetha-portrait-1.jpg",
    fallbackUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
    caption: "The Light in My World",
    date: "Her Radiance",
    location: "In My Heart",
    aspect: "portrait",
    note: "Your smile has the magical ability to bring peace to my busiest days."
  },
  {
    id: "swetha-candid-1",
    category: "swetha",
    categoryLabel: "Swetha",
    fileName: "swetha-candid.jpg",
    localPath: "/images/swetha/swetha-candid.jpg",
    fallbackUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
    caption: "Pure Joy & Grace",
    date: "November 2026",
    location: "Always By My Side",
    aspect: "portrait",
    note: "Happy Birthday to the most extraordinary, kind-hearted woman I know."
  },

  // --- CATEGORY 2: MEMORIES ---
  {
    id: "memory-school-days",
    category: "memories",
    categoryLabel: "Memories",
    fileName: "school-days.jpg",
    localPath: "/images/memories/school-days.jpg",
    fallbackUrl: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80",
    caption: "Where It All Began • Class 9 & 10",
    date: "School Days",
    location: "Classroom Corridors",
    aspect: "landscape",
    note: "Two years studying together, sharing notebooks and innocent smiles."
  },
  {
    id: "memory-college-reunion",
    category: "memories",
    categoryLabel: "Memories",
    fileName: "college-reunion.jpg",
    localPath: "/images/memories/college-reunion.jpg",
    fallbackUrl: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80",
    caption: "A Second Beginning",
    date: "College Days",
    location: "The Same Campus",
    aspect: "square",
    note: "After two years apart, meeting you again felt like coming home."
  },

  // --- CATEGORY 3: SPECIAL MOMENTS ---
  {
    id: "moment-college-van",
    category: "special-moments",
    categoryLabel: "Special Moments",
    fileName: "college-van-journey.jpg",
    localPath: "/images/special-moments/college-van-journey.jpg",
    fallbackUrl: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1200&q=80",
    caption: "Holding Hands in the College Van",
    date: "Our Favourite Memory",
    location: "Way to Computer Class",
    aspect: "landscape",
    note: "Sitting next to you on that morning seat, fingers gently finding each other."
  },
  {
    id: "moment-three-years-anniversary",
    category: "special-moments",
    categoryLabel: "Special Moments",
    fileName: "three-years-forever.jpg",
    localPath: "/images/special-moments/three-years-forever.jpg",
    fallbackUrl: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=80",
    caption: "Three Years Together",
    date: "November 15, 2026",
    location: "Forever in Love",
    aspect: "square",
    note: "1,096 days of choosing each other every single morning."
  }
];
