# Instagram Gallery Sync Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace hardcoded image arrays with a shared `posts.json` file so the home page Instagram section and gallery page automatically reflect whatever images are added to `public/instagram/`.

**Architecture:** A static `public/instagram/posts.json` file is fetched at runtime by a `useInstagramPosts` hook. Both the home page (new `InstagramFeed` section) and the gallery page read from this hook — the gallery replaces its hardcoded arrays, the home page gains a new Instagram feed section.

**Tech Stack:** React (JSX), plain CSS, Vite (static file serving from `public/`)

---

## File Map

| Action | Path | Purpose |
|--------|------|---------|
| Create | `public/instagram/posts.json` | Source of truth for all posts |
| Move existing images into | `public/instagram/` | All gallery images live here |
| Create | `essence-react/src/hooks/useInstagramPosts.js` | Fetches posts.json, returns posts array |
| Create | `essence-react/src/components/InstagramFeed/InstagramFeed.jsx` | Home page Instagram section |
| Create | `essence-react/src/components/InstagramFeed/InstagramFeed.css` | Styles for the Instagram feed section |
| Modify | `essence-react/src/pages/Home/Home.jsx` | Replace gallery strip images, add InstagramFeed section |
| Modify | `essence-react/src/pages/Gallery/Gallery.jsx` | Replace hardcoded arrays with hook data |

---

## Task 1: Create `posts.json` and move images

**Files:**
- Create: `public/instagram/posts.json`
- Move images into: `public/instagram/`

- [ ] **Step 1: Create the instagram folder and posts.json**

Create `public/instagram/posts.json` with the existing gallery images as initial entries:

```json
[
  { "file": "img-new-01.jpg", "caption": "Fresh results from the studio ✨" },
  { "file": "img-new-02.jpg", "caption": "Hair extensions — lightweight and seamless 🌿" },
  { "file": "img-new-03.jpg", "caption": "Transformation at Essence Hair Treatment" },
  { "file": "img-new-04.jpg", "caption": "Bespoke colour, tailored to you" },
  { "file": "img-new-06.jpg", "caption": "Sun-kissed balayage — no harsh lines" },
  { "file": "img-new-07.jpg", "caption": "The Essence studio, Luton" },
  { "file": "img-new-08.jpg", "caption": "Frizz-free results that last months" },
  { "file": "img-new-09.jpg", "caption": "Head spa — deep hydration ritual" },
  { "file": "img-new-10.jpg", "caption": "Hair Botox — smooth, glossy, healthy" },
  { "file": "img-new-11.jpg", "caption": "Nanoplastia treatment results" },
  { "file": "img-new-12.jpg", "caption": "Keratin treatment — cutting styling time in half" },
  { "file": "img-new-14.jpg", "caption": "Scalp care at Essence" },
  { "file": "img-new-15.jpg", "caption": "Another beautiful transformation ✨" },
  { "file": "img-new-16.jpg", "caption": "Organic, formaldehyde-free treatments" },
  { "file": "img-new-18.jpg", "caption": "Real results, real clients" },
  { "file": "img-new-19.jpg", "caption": "Your hair, your story, our passion" },
  { "file": "img-new-20.jpg", "caption": "Book your appointment today" },
  { "file": "1000076210.jpg", "caption": "Inside the Essence studio" }
]
```

- [ ] **Step 2: Copy existing public images into `public/instagram/`**

Run from the `essence-react` directory:

```bash
mkdir -p public/instagram
cp public/img-new-01.jpg public/instagram/
cp public/img-new-02.jpg public/instagram/
cp public/img-new-03.jpg public/instagram/
cp public/img-new-04.jpg public/instagram/
cp public/img-new-06.jpg public/instagram/
cp public/img-new-07.jpg public/instagram/
cp public/img-new-08.jpg public/instagram/
cp public/img-new-09.jpg public/instagram/
cp public/img-new-10.jpg public/instagram/
cp public/img-new-11.jpg public/instagram/
cp public/img-new-12.jpg public/instagram/
cp public/img-new-14.jpg public/instagram/
cp public/img-new-15.jpg public/instagram/
cp public/img-new-16.jpg public/instagram/
cp public/img-new-18.jpg public/instagram/
cp public/img-new-19.jpg public/instagram/
cp public/img-new-20.jpg public/instagram/
cp public/1000076210.jpg public/instagram/
```

- [ ] **Step 3: Verify the files are in place**

```bash
ls public/instagram/
```

Expected: `posts.json` plus all the `.jpg` files listed above.

- [ ] **Step 4: Commit**

```bash
git add public/instagram/
git commit -m "feat: add instagram posts.json and copy images to instagram folder"
```

---

## Task 2: Create `useInstagramPosts` hook

**Files:**
- Create: `essence-react/src/hooks/useInstagramPosts.js`

- [ ] **Step 1: Create the hook**

Create `essence-react/src/hooks/useInstagramPosts.js`:

```js
import { useState, useEffect } from 'react'

export default function useInstagramPosts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('/instagram/posts.json')
      .then(r => r.json())
      .then(data => setPosts(data))
      .catch(() => {})
  }, [])

  return posts
}
```

- [ ] **Step 2: Verify it looks right**

Open `essence-react/src/hooks/useInstagramPosts.js` and confirm it exports a default function that fetches `/instagram/posts.json` and returns the posts array.

- [ ] **Step 3: Commit**

```bash
git add essence-react/src/hooks/useInstagramPosts.js
git commit -m "feat: add useInstagramPosts hook"
```

---

## Task 3: Create `InstagramFeed` component

**Files:**
- Create: `essence-react/src/components/InstagramFeed/InstagramFeed.jsx`
- Create: `essence-react/src/components/InstagramFeed/InstagramFeed.css`

This component replaces the existing "gallery strip" section on the home page and displays the 6 most recent posts with captions.

- [ ] **Step 1: Create the CSS file**

Create `essence-react/src/components/InstagramFeed/InstagramFeed.css`:

```css
.ig-feed { background: #FAF8F5; padding: 88px 56px; }
.ig-feed-head { text-align: center; margin-bottom: 52px; }
.ig-feed-tag { font-size: 8.5px; letter-spacing: .52em; text-transform: uppercase; color: #9A9087; margin-bottom: 18px; }
.ig-feed-title { font-family: 'Playfair Display', serif; font-size: clamp(28px,3vw,42px); font-weight: 300; margin-bottom: 8px; line-height: 1.1; }
.ig-feed-title em { font-style: italic; }
.ig-feed-handle { font-size: 9px; letter-spacing: .38em; text-transform: uppercase; color: #9A9087; }
.ig-feed-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px; max-width: 1100px; margin: 0 auto 52px; }
.ig-feed-card { overflow: hidden; position: relative; cursor: pointer; }
.ig-feed-card-img { aspect-ratio: 1; overflow: hidden; }
.ig-feed-card-img img { width: 100%; height: 100%; object-fit: cover; transition: transform .55s ease; display: block; }
.ig-feed-card:hover .ig-feed-card-img img { transform: scale(1.05); }
.ig-feed-card-caption { background: #fff; padding: 14px 16px; font-size: 12px; line-height: 1.6; color: #2d2d2d; }
.ig-feed-footer { text-align: center; display: flex; flex-direction: column; align-items: center; gap: 16px; }
.ig-feed-icon { display: flex; align-items: center; gap: 8px; color: #9A9087; font-size: 9px; letter-spacing: .3em; text-transform: uppercase; text-decoration: none; transition: color .2s; }
.ig-feed-icon:hover { color: #0a0a0a; }
.ig-feed-icon svg { width: 18px; height: 18px; }
@media (max-width: 960px) {
  .ig-feed { padding: 56px 16px; }
  .ig-feed-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .ig-feed-grid { grid-template-columns: 1fr; }
}
```

- [ ] **Step 2: Create the component**

Create `essence-react/src/components/InstagramFeed/InstagramFeed.jsx`:

```jsx
import useInstagramPosts from '../../hooks/useInstagramPosts'
import './InstagramFeed.css'

const IG_URL = 'https://www.instagram.com/essence.hairtreatment/'

export default function InstagramFeed() {
  const posts = useInstagramPosts()
  const recent = [...posts].reverse().slice(0, 6)

  if (recent.length === 0) return null

  return (
    <section className="ig-feed">
      <div className="ig-feed-head">
        <div className="ig-feed-tag">Instagram</div>
        <h2 className="ig-feed-title">Follow our <em>journey</em></h2>
        <div className="ig-feed-handle">@essence.hairtreatment</div>
      </div>

      <div className="ig-feed-grid">
        {recent.map(post => (
          <a
            key={post.file}
            className="ig-feed-card"
            href={IG_URL}
            target="_blank"
            rel="noreferrer"
          >
            <div className="ig-feed-card-img">
              <img src={`/instagram/${post.file}`} alt={post.caption} />
            </div>
            <div className="ig-feed-card-caption">{post.caption}</div>
          </a>
        ))}
      </div>

      <div className="ig-feed-footer">
        <a href={IG_URL} className="ig-feed-icon" target="_blank" rel="noreferrer">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/>
          </svg>
          <span>@essence.hairtreatment</span>
        </a>
        <a href={IG_URL} className="btn-blk" target="_blank" rel="noreferrer">Follow on Instagram</a>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add essence-react/src/components/InstagramFeed/
git commit -m "feat: add InstagramFeed component"
```

---

## Task 4: Update Home page

**Files:**
- Modify: `essence-react/src/pages/Home/Home.jsx`

Replace the hardcoded `galleryImages` array and its gallery strip section with the new `InstagramFeed` component. Keep everything else on the page identical.

- [ ] **Step 1: Update Home.jsx**

Open `essence-react/src/pages/Home/Home.jsx`.

Remove this line near the top:
```jsx
const galleryImages = ['/img-new-07.jpg','/img-new-06.jpg','/img-new-01.jpg','/img-new-19.jpg']
```

Add the import at the top (after the existing imports):
```jsx
import InstagramFeed from '../../components/InstagramFeed/InstagramFeed'
```

Replace the entire `{/* GALLERY STRIP */}` section:
```jsx
      {/* GALLERY STRIP */}
      <section className="gallery-strip">
        <div className="gs-head">
          <div className="section-tag">Real Results</div>
          <h2 className="section-title">Our <em>Work</em></h2>
        </div>
        <div className="gallery-scroll">
          {galleryImages.map(src => (
            <div className="gi" key={src}><img src={src} alt="Hair result" /></div>
          ))}
        </div>
        <div className="gs-footer">
          <Link to="/gallery" className="btn-blk">View Full Gallery</Link>
        </div>
      </section>
```

With:
```jsx
      {/* INSTAGRAM FEED */}
      <InstagramFeed />
```

- [ ] **Step 2: Start dev server and check the home page**

```bash
cd essence-react && npm run dev
```

Open [http://localhost:5173](http://localhost:5173) and scroll to where the gallery strip was. You should now see the Instagram feed section with 6 recent posts, captions, and a "Follow on Instagram" button. Confirm no console errors.

- [ ] **Step 3: Commit**

```bash
git add essence-react/src/pages/Home/Home.jsx
git commit -m "feat: replace home gallery strip with InstagramFeed component"
```

---

## Task 5: Update Gallery page

**Files:**
- Modify: `essence-react/src/pages/Gallery/Gallery.jsx`

Replace the two hardcoded arrays (`galleryImages` and `igImages`) with data from the hook.

- [ ] **Step 1: Update Gallery.jsx**

Replace the entire contents of `essence-react/src/pages/Gallery/Gallery.jsx` with:

```jsx
import { useMemo } from 'react'
import useInstagramPosts from '../../hooks/useInstagramPosts'
import './Gallery.css'

const BOOK_URL = 'https://bookings.gettimely.com/essencehairtreatment/bb/book'
const IG_URL = 'https://www.instagram.com/essence.hairtreatment/'

export default function Gallery() {
  const posts = useInstagramPosts()
  const galleryImages = useMemo(() => posts.map(p => `/instagram/${p.file}`), [posts])
  const igImages = useMemo(() => [...posts].reverse().slice(0, 4).map(p => `/instagram/${p.file}`), [posts])

  return (
    <main>
      <div className="page-hero">
        <div className="ph-img"><img src="/instagram/img-new-19.jpg" alt="Gallery" /></div>
        <div className="ph-ov" />
        <div className="ph-content">
          <div className="ph-tag">Real Results</div>
          <h1 className="ph-title">Our <em>Work</em></h1>
        </div>
      </div>

      <div className="gallery-wrap">
        <div className="gal-note">Real client transformations · Essence Hair Treatment, Luton</div>
        <div className="masonry">
          {galleryImages.map(src => (
            <div className="gi" key={src}>
              <img src={src} alt="Hair result" />
              <div className="gi-ov" />
            </div>
          ))}
        </div>
      </div>

      <div className="ig-sec">
        <div className="ig-tag">Social</div>
        <h2 className="ig-title">Follow our <em>journey</em></h2>
        <div className="ig-handle">@essence.hairtreatment</div>
        <div className="ig-grid">
          {igImages.map(src => (
            <div className="igi" key={src}><img src={src} alt="Instagram post" /></div>
          ))}
        </div>
        <a href={IG_URL} className="btn-blk" target="_blank" rel="noreferrer">Follow @essence.hairtreatment</a>
      </div>

      <div className="gal-cta">
        <h3>Ready for your <em>transformation?</em></h3>
        <a href={BOOK_URL} className="btn-blk" target="_blank" rel="noreferrer">Book Now</a>
      </div>
    </main>
  )
}
```

- [ ] **Step 2: Check the gallery page in the browser**

Navigate to [http://localhost:5173/gallery](http://localhost:5173/gallery). The masonry grid should load all images from `posts.json`. The social section at the bottom should show the 4 most recent images. Confirm no console errors.

- [ ] **Step 3: Commit**

```bash
git add essence-react/src/pages/Gallery/Gallery.jsx
git commit -m "feat: gallery page now reads from posts.json via useInstagramPosts"
```

---

## Task 6: Verify end-to-end

- [ ] **Step 1: Simulate adding a new post**

Add a new entry to the end of `public/instagram/posts.json`:

```json
{ "file": "img-new-11.jpg", "caption": "Test post — should appear at top of feed" }
```

(img-new-11.jpg is already in `public/instagram/` from Task 1.)

- [ ] **Step 2: Check the home page feed**

Refresh [http://localhost:5173](http://localhost:5173). The new entry should appear as the first card in the Instagram feed section (most recent = last in array = shown first).

- [ ] **Step 3: Check the gallery page**

Refresh [http://localhost:5173/gallery](http://localhost:5173/gallery). The new image should now appear in the masonry grid as well.

- [ ] **Step 4: Revert the test entry**

Remove the test entry you added in Step 1 (restore `posts.json` to its Task 1 state — remove the duplicate `img-new-11.jpg` entry at the bottom).

- [ ] **Step 5: Final commit**

```bash
git add public/instagram/posts.json
git commit -m "chore: revert test post from posts.json"
```

---

## How to Add New Instagram Posts (ongoing)

1. Download the image from Instagram and save it as e.g. `post-23.jpg`
2. Drop the file into `public/instagram/`
3. Open `public/instagram/posts.json` and append to the array:
   ```json
   { "file": "post-23.jpg", "caption": "Your caption here" }
   ```
4. Save — the home feed and gallery update on next page load. No redeploy needed.
