# Instagram Gallery Sync — Design Spec
Date: 2026-06-24

## Overview

Replace hardcoded gallery images with a manually-maintained Instagram feed. A shared JSON file and image folder act as the source of truth. The home page gains a new Instagram section; the gallery page pulls images from the same source.

## Goals

- Home page: live-feeling Instagram feed with images, captions, handle, and link to profile
- Gallery page: images sourced from `posts.json` instead of a hardcoded array
- No API, no tokens, no third-party service, no ongoing cost
- Adding new content requires dropping a file in a folder and adding one line to a JSON file

## Non-Goals

- Automatic sync with Instagram (out of scope for now; can be added later)
- Video support
- Likes/comments from Instagram

---

## Data Structure

### `public/instagram/posts.json`

Array of post objects, ordered oldest-to-newest. Most recent = last in array.

```json
[
  {
    "file": "post-01.jpg",
    "caption": "Fresh head spa treatment ✨"
  },
  {
    "file": "post-02.jpg",
    "caption": "Another transformation 🌿"
  }
]
```

### `public/instagram/`

All Instagram images live here. Filenames must match the `file` field in `posts.json`.

---

## Components

### `useInstagramPosts` hook

Fetches `posts.json` at runtime and returns the array of posts. Handles loading and error states. Memoised so it doesn't re-fetch on re-render.

### `InstagramFeed` component (new, home page)

- Displays the 6 most recent posts (last 6 items in the array, reversed so newest first)
- Each card: image, caption below, subtle Instagram logo icon
- Section header: "Follow our journey", handle `@essence.hairtreatment`, link to Instagram profile
- "Follow us on Instagram" CTA button at the bottom

### Gallery page

- Replaces hardcoded `galleryImages` array with images from `posts.json`
- Maps all posts to the existing masonry grid — no other changes to layout
- The `igImages` hardcoded array (used for the social section at bottom of gallery) also pulls from `posts.json` (last 4 posts)

---

## Data Flow

```
public/instagram/posts.json
        ↓ fetch (runtime)
useInstagramPosts()
        ↓
InstagramFeed (home)    Gallery (masonry + ig section)
```

No build step required. Dropping a new image into `public/instagram/` and appending to `posts.json` takes effect immediately on next page load — no redeploy needed (assuming static file serving is live).

---

## Workflow for Adding New Posts

1. Download image from Instagram
2. Rename it something sensible (e.g. `post-23.jpg`) and drop into `public/instagram/`
3. Add one entry to the bottom of `posts.json`:
   ```json
   { "file": "post-23.jpg", "caption": "Your caption here" }
   ```
4. Done — home feed and gallery update on next page load

---

## Error Handling

- If `posts.json` fails to load: show nothing (silent fail) — no broken UI
- If an image 404s: browser shows broken image placeholder (acceptable for manual workflow)

---

## Migration

Existing images in `public/` (e.g. `img-new-01.jpg`) can be moved into `public/instagram/` and added to `posts.json` with captions. The old hardcoded arrays in Gallery.jsx are removed entirely.
