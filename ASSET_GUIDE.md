# ASSET GUIDE — SWETHA FOREVER (THREE YEARS, ONE FOREVER)

Welcome to your personal asset guide. This document explains where your visual, audio, and 3D assets are located, which assets were AI-generated, and how you can seamlessly drop in your personal photographs of you and Swetha.

---

## 1. Directory Structure Overview

```
public/
├── images/
│   ├── generated/          <-- AI-Generated romantic luxury visual backgrounds
│   ├── swetha/             <-- User photographs: solo portraits & candids of Swetha
│   ├── memories/           <-- User photographs: school days, two years apart, college reunion
│   └── special-moments/    <-- User photographs: college van journeys, hand holding, anniversaries
├── audio/                  <-- Background music (romantic-instrumental.mp3)
└── models/                 <-- Custom 3D files (.glb / .gltf)
```

---

## 2. AI-Generated Visual Assets (Included & Live)

These 4 luxury visual assets were generated and integrated into the project:

| Filename | Directory Location | Purpose | Type | Dimensions |
| :--- | :--- | :--- | :--- | :--- |
| `school-nostalgia.jpg` | `public/images/generated/` | Nostalgic classroom morning light with wooden desks & notebooks | AI-Generated | 1024 × 1024 (1:1) |
| `college-journey.jpg` | `public/images/generated/` | Scenic road with jacaranda & charming vintage van in sunrise glow | AI-Generated | 1024 × 1024 (1:1) |
| `luxury-birthday-cake.jpg`| `public/images/generated/` | Opulent 3-tier lavender & rose cake with gold leaf and candles | AI-Generated | 1024 × 1024 (1:1) |
| `anniversary-infinity.jpg` | `public/images/generated/` | 3D crystal infinity loop with glowing crystal heart & stardust | AI-Generated | 1024 × 1024 (1:1) |

---

## 3. User-Supplied Photograph Directories (Placeholders Ready)

You can add your real photographs anytime by simply dropping them into the corresponding folders below. The application's `DynamicImage` component will immediately detect and display your real photographs:

### A. Swetha Solo & Candid Photos (`public/images/swetha/`)
| Suggested Filename | Purpose | Recommended Format | Recommended Dimensions |
| :--- | :--- | :--- | :--- |
| `swetha-portrait-1.jpg` | Elegant portrait of Swetha | JPG / WebP | 1200 × 1600 (3:4 portrait) |
| `swetha-candid.jpg` | Smiling or laughing candid photo | JPG / WebP | 1200 × 1600 (3:4 portrait) |

### B. Memories & Story Milestones (`public/images/memories/`)
| Suggested Filename | Purpose | Recommended Format | Recommended Dimensions |
| :--- | :--- | :--- | :--- |
| `school-days.jpg` | Nostalgic photo or reminder of Class 9 & 10 | JPG / WebP | 1600 × 1200 (4:3 landscape) |
| `college-reunion.jpg` | College campus or reconnection photo | JPG / WebP | 1200 × 1200 (1:1 square) |

### C. Special Moments & Our Favourite Memory (`public/images/special-moments/`)
| Suggested Filename | Purpose | Recommended Format | Recommended Dimensions |
| :--- | :--- | :--- | :--- |
| `college-van-journey.jpg` | College van or journey to computer class | JPG / WebP | 1600 × 1200 (4:3 landscape) |
| `three-years-forever.jpg` | Anniversary, holding hands, or celebration | JPG / WebP | 1200 × 1200 (1:1 square) |

---

## 4. How to Update or Add Photographs

1. **Drop your photos** directly into `public/images/swetha/`, `public/images/memories/`, or `public/images/special-moments/`.
2. Open [`src/config/photos.ts`](file:///e:/our_day/src/config/photos.ts).
3. If you used the filenames above, **no code changes are needed**! The app loads them automatically.
4. If you have new or additional photos, simply add an entry to the `galleryPhotos` array:
   ```ts
   {
     id: "my-new-photo",
     category: "special-moments",
     categoryLabel: "Special Moments",
     fileName: "my-photo.jpg",
     localPath: "/images/special-moments/my-photo.jpg",
     fallbackUrl: "...",
     caption: "Our Sweet Date",
     date: "November 2026",
     location: "Our Special Spot",
     aspect: "portrait",
     note: "A memory that will forever bring a smile."
   }
   ```

---

## 5. Background Music (`public/audio/`)

- Place your romantic background song at:
  `public/audio/romantic-instrumental.mp3`
- If no MP3 is placed, the website automatically uses its built-in Web Audio romantic synthesizer fallback so that lovely romantic chords play seamlessly without any silence.
