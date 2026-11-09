export interface SiteConfig {
  partnerName: string;
  creatorName: string;
  birthdayDate: string; // "November 15, 2026"
  anniversaryDate: string; // "November 15, 2026"
  anniversaryYears: number; // 3
  startDate: string; // "November 15, 2023"
  metaTitle: string;
  metaDescription: string;
  audioTrack: {
    title: string;
    artist: string;
    url: string;
  };
  assetPaths: {
    imagesSwetha: string;
    imagesMemories: string;
    imagesSpecialMoments: string;
    audio: string;
    models: string;
  };
  theme: {
    primaryRose: string;
    champagneGold: string;
    midnightPurple: string;
    deepViolet: string;
    lavender: string;
    softWhite: string;
  };
}

export const siteConfig: SiteConfig = {
  partnerName: "Swetha",
  creatorName: "Yours Forever",
  birthdayDate: "November 15, 2026",
  anniversaryDate: "November 15, 2026",
  anniversaryYears: 3,
  startDate: "November 15, 2023",
  metaTitle: "Swetha — Three Years, One Forever",
  metaDescription: "A romantic luxury 3D universe celebrating Swetha's Birthday and our 3rd Anniversary.",
  audioTrack: {
    title: "Romantic Instrumental",
    artist: "Swetha Forever Soundtrack",
    url: "/audio/romantic-instrumental.mp3",
  },
  assetPaths: {
    imagesSwetha: "/images/swetha",
    imagesMemories: "/images/memories",
    imagesSpecialMoments: "/images/special-moments",
    audio: "/audio",
    models: "/models",
  },
  theme: {
    primaryRose: "#F2A7C6",
    champagneGold: "#E8C58A",
    midnightPurple: "#10091C",
    deepViolet: "#241331",
    lavender: "#C7A5F5",
    softWhite: "#FFF7FC",
  },
};
