export interface MajorChapter {
  id: string;
  chapterNumber: number;
  period: string;
  title: string;
  subtitle: string;
  tagline: string;
  narrative: string[];
  themeColor: string;
  badge: string;
  milestones: {
    title: string;
    description: string;
    icon: string;
  }[];
  specialMemory?: {
    title: string;
    description: string;
  };
}

export type StoryChapter = MajorChapter;

export interface TimelineMemory {
  id: string;
  yearNumber: number;
  date: string;
  title: string;
  subtitle: string;
  description: string;
  location: string;
  tag: string;
  quote: string;
  accent: string;
}

export const threeMajorChapters: MajorChapter[] = [
  {
    id: "chapter-1",
    chapterNumber: 1,
    period: "Class 9 – 10 • School Days",
    title: "Where It All Began",
    subtitle: "Two desks, innocent glances, and the start of a story",
    tagline: "We met as schoolmates, sharing corridors, notebooks, and laughter.",
    narrative: [
      "Our story quietly began in the lively hallways of Class 9. We met as schoolmates, sitting in the same classroom, sharing notebooks, exchanging shy smiles across desks, and learning together.",
      "For two memorable school years—Class 9 and Class 10—we built the foundation of an innocent, genuine friendship. We didn't know it back then, but those classroom smiles were the first sparks of a lifelong bond."
    ],
    themeColor: "#F2A7C6",
    badge: "The Genesis",
    milestones: [
      {
        title: "Class 9 Classroom",
        description: "The very first time our paths crossed as schoolmates.",
        icon: "BookOpen"
      },
      {
        title: "Shared Notebooks & Corridors",
        description: "Two years of studying side by side, laughter, and shy smiles.",
        icon: "Sparkles"
      }
    ]
  },
  {
    id: "chapter-2",
    chapterNumber: 2,
    period: "After Class 10 • Two Years of Silence",
    title: "Two Different Paths",
    subtitle: "Miles apart, yet quietly tethered by destiny",
    tagline: "Life took us in different directions, but the universe was merely preparing us.",
    narrative: [
      "Following Class 10, life took us on two separate paths. For two full years, we went our own ways, adapted to new routines, and navigated different worlds without daily conversations.",
      "Yet, distance could never truly erase the quiet imprint we had left on each other's memories. Time was gently ticking, guiding our footsteps until the day our universes would collide once again."
    ],
    themeColor: "#C7A5F5",
    badge: "The Distance",
    milestones: [
      {
        title: "Separate Journeys",
        description: "Two years of growth, different classrooms, and quiet distance.",
        icon: "Compass"
      },
      {
        title: "The Unbroken Thread",
        description: "Even when life pulled us apart, the memory of each other endured.",
        icon: "Stars"
      }
    ]
  },
  {
    id: "chapter-3",
    chapterNumber: 3,
    period: "College Reunion • Friendship to Love",
    title: "Finding Each Other Again",
    subtitle: "The second beginning that changed everything",
    tagline: "Reunited in the same college, and discovering that some souls are destined to hold hands.",
    narrative: [
      "Out of all the colleges and routes, fate brought us through the exact same campus gates. Seeing each other again was an electric spark—our school friendship reignited with ease, and day by day, deepened into an unconditional, devoted love.",
      "And then came our favourite memory of all: sitting next to each other in the college van, fingers gently finding each other, holding hands tightly as the van travelled through morning roads toward computer class. In those quiet moments, holding your hand, I knew my heart had found its home."
    ],
    themeColor: "#E8C58A",
    badge: "The Reunion & Forever",
    milestones: [
      {
        title: "The College Reunion",
        description: "Reconnecting after two years and watching friendship blossom into love.",
        icon: "Heart"
      },
      {
        title: "The College Van Journeys",
        description: "Sitting side by side, holding hands all the way to computer class.",
        icon: "Car"
      }
    ],
    specialMemory: {
      title: "Our Absolute Favourite Memory: The Van Rides",
      description: "No place on earth felt warmer than that seat beside you. The gentle sway of the van, the morning breeze, and your warm hand interlocked with mine on the way to computer class."
    }
  }
];

export const timelineMemories: TimelineMemory[] = [
  {
    id: "mem-year1-1",
    yearNumber: 1,
    date: "November 15, 2023",
    title: "The Genesis of Us",
    subtitle: "When friendship became our forever commitment",
    description: "The unforgettable day we took the leap together. After years of school memories and reconnecting in college, admitting what our hearts had known all along made everything in the universe fall into place.",
    location: "Our Sacred Beginning",
    tag: "First Chapter",
    quote: "The day my favorite reality surpassed every dream.",
    accent: "#F2A7C6"
  },
  {
    id: "mem-year1-2",
    yearNumber: 1,
    date: "Early 2024",
    title: "The Hand-Holding Van Rides",
    subtitle: "Rides to computer class that felt like heaven",
    description: "Sitting close together in the college van, bumpy roads, cold morning wind on our faces, and our fingers quietly interlaced beneath our bags. The simplest ride felt like the grandest journey.",
    location: "College Van Route",
    tag: "Favourite Memory",
    quote: "With your hand in mine, every road was beautiful.",
    accent: "#E8C58A"
  },
  {
    id: "mem-year2-1",
    yearNumber: 2,
    date: "November 15, 2024",
    title: "One Full Year of Love",
    subtitle: "365 days of unconditional warmth",
    description: "Completing our first year as partners. Looking back at our evolution from Class 9 schoolmates to inseparable souls, realizing that every season with you only made my devotion stronger.",
    location: "Our Special Spot",
    tag: "Milestone I",
    quote: "One year down, an eternity to go.",
    accent: "#C7A5F5"
  },
  {
    id: "mem-year2-2",
    yearNumber: 2,
    date: "Summer 2025",
    title: "Quiet Comfort & Understanding",
    subtitle: "The unspoken peace of us",
    description: "Late evening phone calls, shared secrets, comforting each other on difficult days, and knowing without exchanging a word that we were each other's calm sanctuary amidst the chaos of life.",
    location: "Late Night Talks",
    tag: "Sanctuary",
    quote: "You are the peace my heart always looked for.",
    accent: "#F2A7C6"
  },
  {
    id: "mem-year3-1",
    yearNumber: 3,
    date: "Early 2026",
    title: "Growing Stronger Side by Side",
    subtitle: "Supporting dreams and building our future",
    description: "Watching you bloom and achieve your goals while cheering for you at every turn. Love wasn't just butterfly flutterings anymore; it was deep trust, mutual respect, and unshakable loyalty.",
    location: "Side by Side",
    tag: "Devotion",
    quote: "Your dreams are my dreams; your happiness is my priority.",
    accent: "#C7A5F5"
  },
  {
    id: "mem-year3-2",
    yearNumber: 3,
    date: "November 15, 2026",
    title: "Three Years & Her Birthday",
    subtitle: "A twin celebration for the love of my life",
    description: "1,096 days of unconditional devotion. Today we celebrate the birth of the most breathtaking woman in the universe and the third anniversary of our relationship. The prologue is complete—our forever is just beginning.",
    location: "November 15, 2026",
    tag: "Twin Celebration",
    quote: "Thank you for choosing me every single day. I love you endlessly.",
    accent: "#E8C58A"
  }
];
