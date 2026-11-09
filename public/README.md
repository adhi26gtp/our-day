# Asset Directory Guide — Swetha Forever

This directory holds all the static media and models for the **Swetha — Three Years, One Forever** digital experience.

---

## Directory Structure

```
public/
├── audio/
│   └── romantic-instrumental.mp3   <-- Place your romantic background track here
├── images/
│   ├── swetha/                     <-- Place portraits & photos of Swetha here
│   ├── memories/                   <-- Place timeline & school/college journey photos here
│   └── special-moments/            <-- Place college van, hand-holding & anniversary photos here
└── models/                         <-- Place any custom 3D models (.glb, .gltf) here
```

---

## 1. Background Music (`public/audio/`)

- **File Name:** `romantic-instrumental.mp3`
- **Full Path:** `public/audio/romantic-instrumental.mp3`
- **Supported Formats:** `.mp3`, `.wav`, `.m4a`
- **Note:** If no audio file is placed, the website automatically plays a soothing built-in Web Audio romantic synthesizer so the music experience never fails.

---

## 2. Personal Photographs (`public/images/`)

You can place your photos directly into the corresponding folders:

### `public/images/swetha/`
- Solo portraits, candid photos, and pictures of Swetha.
- Recommended names:
  - `swetha-portrait-1.jpg`
  - `swetha-candid.jpg`

### `public/images/memories/`
- Photos from Class 9 & 10 school days, two years apart, and college reunion.
- Recommended names:
  - `school-days.jpg`
  - `college-reunion.jpg`

### `public/images/special-moments/`
- College van journeys, holding hands, birthdays, and anniversary dates.
- Recommended names:
  - `college-van-journey.jpg`
  - `three-years-forever.jpg`

> **Automatic Fallback:** The site features intelligent image loading via `DynamicImage`. If a local file has not yet been dropped in, a graceful romantic visual placeholder is displayed seamlessly until your personal file is added.

---

## 3. 3D Models (`public/models/`)

- Place custom `.glb` or `.gltf` 3D models here (e.g., custom cake, van, or jewelry).
- Three.js and `@react-three/drei`'s `useGLTF` can load directly from `/models/your-model.glb`.

---

## central configuration

All image and audio metadata, captions, and dates can be customized anytime in:
- Audio: [`src/config/site.ts`](file:///e:/our_day/src/config/site.ts)
- Photos & Captions: [`src/config/photos.ts`](file:///e:/our_day/src/config/photos.ts)
- Story & Timeline: [`src/config/memories.ts`](file:///e:/our_day/src/config/memories.ts)
- Love Letter: [`src/config/messages.ts`](file:///e:/our_day/src/config/messages.ts)

