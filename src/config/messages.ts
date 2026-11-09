export interface LoveLetterConfig {
  greeting: string;
  paragraphs: string[];
  signoff: string;
  signature: string;
  date: string;
}

export interface BirthdayConfig {
  mainHeading: string;
  supportingMessage: string;
  wishPrompt: string;
  celebrationNote: string;
  date: string;
}

export interface AnniversaryConfig {
  mainHeading: string;
  mainMessage: string;
  reflection: string;
  finalMessage: string;
  date: string;
  yearsCount: number;
}

export interface FinalSurpriseConfig {
  finalQuote: string;
  promise: string;
  subtext: string;
}

export const loveLetter: LoveLetterConfig = {
  greeting: "My Dearest Swetha, ❤️",
  paragraphs: [
    "Who would have thought that the girl I met in Class 9 would become someone so special in my life?",
    "We started as schoolmates. We shared our school days, and then life took us in different directions. For two years, we followed our own paths.",
    "But somehow, life brought us back to the same college.",
    "And that's where our story started becoming something beautiful.",
    "I still remember those college van journeys. Sitting beside you, holding your hand, and travelling together to computer class.",
    "Maybe those moments looked ordinary to everyone else. But for me, they were extraordinary. Having you beside me made those little moments special.",
    "Three years have passed since we began this journey together. We've created memories, experienced different moments, and continued writing our story.",
    "On your birthday, I wish you happiness, courage, success, and everything your heart dreams of.",
    "I may not have an expensive gift to give you this time. But I wanted to create something with my own effort, imagination, and love.",
    "Every little detail in this website is here to remind you that you are important to me.",
    "Thank you for being part of my journey, Swetha.",
    "Happy Birthday, my girl.",
    "Happy Third Anniversary to us.",
    "And if life gives us a thousand more ordinary days, I hope we get to make beautiful memories in every one of them."
  ],
  signoff: "With all my heart,",
  signature: "Yours ❤️",
  date: "November 15, 2026"
};

export const birthdayData: BirthdayConfig = {
  mainHeading: "HAPPY BIRTHDAY, SWETHA!",
  supportingMessage: "Today, the universe celebrates someone who means the world to me.",
  wishPrompt: "Close your eyes, make a wish, and blow out the candles... ✨",
  celebrationNote: "May every dream you hold in your heart bloom into beautiful reality this year. You deserve the stars and beyond.",
  date: "November 15, 2026"
};

export const anniversaryData: AnniversaryConfig = {
  mainHeading: "THREE YEARS TOGETHER. A LIFETIME OF MEMORIES TO CREATE.",
  mainMessage: "Three years ago, a new chapter of our story began. Today, I look back at everything we've shared and feel grateful for the memories we've created.",
  reflection: "1,096 days of choosing you, holding hands, laughing through the simple days, and building a quiet haven together.",
  finalMessage: "Thank you for being part of my story, Swetha. ❤️",
  date: "November 15, 2026",
  yearsCount: 3
};

export const finalSurpriseData: FinalSurpriseConfig = {
  finalQuote: "Some stories are written in books. Ours is written in the little moments we share. Here's to everything we've been, everything we are, and everything still waiting for us.",
  promise: "Through every road that lies ahead, my hand will always find yours.",
  subtext: "Three Years, One Forever • Swetha & Adhithian"
};
