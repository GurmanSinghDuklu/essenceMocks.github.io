# React Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the existing 6-page static HTML site for Essence Hair Treatment into a Vite + React app with React Router, preserving all content, CSS, and assets pixel-for-pixel, ready for deployment.

**Architecture:** One Vite + React project in a new `essence-react/` folder alongside the existing HTML files. Each HTML page becomes a page component. The shared navbar and footer are extracted into reusable components. All CSS is extracted into per-component `.css` files. A global CSS file holds the `:root` variables and resets. Assets (images, videos, logo) are copied into `public/`.

**Tech Stack:** Vite 5, React 18, React Router 6, plain CSS modules (no Tailwind, no CSS-in-JS)

---

## File Map

```
essence-react/
├── public/
│   ├── essencelogo.jpg
│   ├── 1000076195.jpg  … 1000076212.jpg  (all images)
│   ├── 1000076196.mp4  1000076205.mp4  1000076206.mp4  (videos)
│   └── essence-logo.png
├── src/
│   ├── main.jsx                  ← entry point, ReactDOM.createRoot, Router
│   ├── App.jsx                   ← Routes definition
│   ├── index.css                 ← :root vars, *, body reset, Google Fonts link
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx        ← nav with hamburger, drawer, active link logic
│   │   │   └── Navbar.css
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       └── Footer.css
│   └── pages/
│       ├── Home/
│       │   ├── Home.jsx
│       │   └── Home.css
│       ├── Services/
│       │   ├── Services.jsx
│       │   └── Services.css
│       ├── Gallery/
│       │   ├── Gallery.jsx
│       │   └── Gallery.css
│       ├── TopTips/
│       │   ├── TopTips.jsx
│       │   └── TopTips.css
│       ├── FAQs/
│       │   ├── FAQs.jsx
│       │   └── FAQs.css
│       └── Academy/
│           ├── Academy.jsx
│           └── Academy.css
├── index.html                    ← Vite entry HTML (Google Fonts link here)
├── vite.config.js
└── package.json
```

---

## Task 1: Scaffold Vite + React project and copy assets

**Files:**
- Create: `essence-react/` (new directory)
- Create: `essence-react/package.json`
- Create: `essence-react/vite.config.js`
- Create: `essence-react/index.html`

- [ ] **Step 1: Scaffold the project**

```bash
cd /Users/mandeepduklu/essenceMocks
npm create vite@latest essence-react -- --template react
cd essence-react
npm install
npm install react-router-dom
```

Expected: `essence-react/` folder created with `src/`, `public/`, `package.json`.

- [ ] **Step 2: Copy all assets into public/**

```bash
cp /Users/mandeepduklu/essenceMocks/1000076*.jpg /Users/mandeepduklu/essenceMocks/essence-react/public/
cp /Users/mandeepduklu/essenceMocks/1000076*.mp4 /Users/mandeepduklu/essenceMocks/essence-react/public/
cp /Users/mandeepduklu/essenceMocks/essencelogo.jpg /Users/mandeepduklu/essenceMocks/essence-react/public/
cp /Users/mandeepduklu/essenceMocks/essence-logo.png /Users/mandeepduklu/essenceMocks/essence-react/public/
```

Expected: all images and videos appear in `essence-react/public/`.

- [ ] **Step 3: Update index.html to include Google Fonts**

Replace the contents of `essence-react/index.html` with:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Essence Hair Treatment — Luton</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=Playfair+Display:ital,wght@0,300;0,400;1,300;1,400&family=Raleway:wght@200;300;400;500&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- [ ] **Step 4: Clear Vite's default src files**

```bash
rm /Users/mandeepduklu/essenceMocks/essence-react/src/App.css
rm /Users/mandeepduklu/essenceMocks/essence-react/src/assets/react.svg
```

- [ ] **Step 5: Commit**

```bash
cd /Users/mandeepduklu/essenceMocks/essence-react
git add -A
git commit -m "chore: scaffold Vite React project with assets"
```

---

## Task 2: Global CSS and entry point

**Files:**
- Create/Replace: `essence-react/src/index.css`
- Replace: `essence-react/src/main.jsx`

- [ ] **Step 1: Write global CSS**

Replace `essence-react/src/index.css` with:

```css
:root {
  --blk: #0a0a0a;
  --off: #1a1a1a;
  --chr: #2d2d2d;
  --beige: #F2EDE6;
  --bm: #E8E0D6;
  --bd: #D4C9BB;
  --wh: #FFFFFF;
  --ow: #FAF8F5;
  --wg: #9A9087;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  background: var(--wh);
  color: var(--blk);
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  overflow-x: hidden;
}
```

- [ ] **Step 2: Write main.jsx**

Replace `essence-react/src/main.jsx` with:

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
```

- [ ] **Step 3: Commit**

```bash
cd /Users/mandeepduklu/essenceMocks/essence-react
git add src/index.css src/main.jsx
git commit -m "chore: global CSS and entry point"
```

---

## Task 3: Navbar component

**Files:**
- Create: `essence-react/src/components/Navbar/Navbar.jsx`
- Create: `essence-react/src/components/Navbar/Navbar.css`

- [ ] **Step 1: Create Navbar.css**

```bash
mkdir -p /Users/mandeepduklu/essenceMocks/essence-react/src/components/Navbar
```

Write `essence-react/src/components/Navbar/Navbar.css`:

```css
nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 200;
  background: rgba(255,255,255,.97);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(10,10,10,.07);
}
.nav-shell {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 16px 56px;
  min-height: 76px;
}
.nav-left, .nav-right { display: flex; gap: 32px; list-style: none; }
.nav-right { justify-content: flex-end; align-items: center; }
.nav-left a, .nav-right a {
  font-family: 'Cormorant Garamond', serif;
  font-size: 11px; font-weight: 400;
  letter-spacing: .28em; text-transform: uppercase;
  color: #0a0a0a; text-decoration: none; transition: color .2s;
}
.nav-left a:hover, .nav-right a:hover,
.nav-left a.on, .nav-right a.on { color: #9A9087; }
.nav-logo { text-decoration: none; display: flex; align-items: center; }
.nav-logo img { height: 72px; width: auto; display: block; mix-blend-mode: multiply; }
.nav-book, .nav-right a.nav-book {
  font-family: 'Cormorant Garamond', serif;
  font-size: 10px; font-weight: 500;
  letter-spacing: .26em; text-transform: uppercase;
  background: #0a0a0a; color: #fff !important;
  padding: 9px 20px; border: 1px solid #0a0a0a;
  text-decoration: none; transition: all .22s; white-space: nowrap;
}
.nav-book:hover, .nav-right a.nav-book:hover {
  background: #8B7355; border-color: #8B7355; color: #fff !important;
}
.nav-hamburger {
  display: none; flex-direction: column; gap: 5px;
  cursor: pointer; padding: 6px; background: none; border: none; margin-left: auto;
}
.nav-hamburger span { display: block; width: 22px; height: 1.5px; background: #0a0a0a; transition: all .3s; }
.nav-hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.nav-hamburger.open span:nth-child(2) { opacity: 0; }
.nav-hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }
.nav-drawer {
  display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0;
  background: #fff; z-index: 199; padding: 100px 28px 40px;
  flex-direction: column; overflow-y: auto;
}
.nav-drawer.open { display: flex; }
.nd-link {
  font-size: 11px; font-weight: 400; letter-spacing: .32em; text-transform: uppercase;
  color: #0a0a0a; text-decoration: none; padding: 16px 0;
  border-bottom: 1px solid #E8E0D6; display: block; transition: color .2s;
}
.nd-link:hover, .nd-link.on { color: #9A9087; }
.nd-book {
  margin-top: 24px; font-size: 10px; font-weight: 500;
  letter-spacing: .28em; text-transform: uppercase;
  background: #0a0a0a; color: #fff; padding: 16px 24px;
  text-decoration: none; text-align: center; display: block;
}
@media (max-width: 960px) {
  .nav-shell { grid-template-columns: auto 1fr auto; padding: 14px 20px; min-height: 64px; }
  .nav-left { display: none; }
  .nav-right { display: none; }
  .nav-hamburger { display: flex; }
  .nav-logo img { height: 52px; }
}
```

- [ ] **Step 2: Create Navbar.jsx**

Write `essence-react/src/components/Navbar/Navbar.jsx`:

```jsx
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const BOOK_URL = 'https://bookings.gettimely.com/essencehairtreatment/bb/book'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(o => !o)
  const close = () => setOpen(false)

  const activeClass = ({ isActive }) => isActive ? 'on' : undefined

  return (
    <>
      <nav>
        <div className="nav-shell">
          <ul className="nav-left">
            <li><NavLink to="/" className={activeClass} end>Home</NavLink></li>
            <li><NavLink to="/services" className={activeClass}>Services</NavLink></li>
            <li><NavLink to="/top-tips" className={activeClass}>Top Tips</NavLink></li>
          </ul>
          <NavLink to="/" className="nav-logo" onClick={close}>
            <img src="/essencelogo.jpg" alt="Essence Hair Treatment" />
          </NavLink>
          <ul className="nav-right">
            <li><NavLink to="/gallery" className={activeClass}>Gallery</NavLink></li>
            <li><NavLink to="/faqs" className={activeClass}>FAQs</NavLink></li>
            <li><NavLink to="/academy" className={activeClass}>Academy</NavLink></li>
            <li>
              <a href={BOOK_URL} className="nav-book" target="_blank" rel="noreferrer">
                Book Now
              </a>
            </li>
          </ul>
          <button
            className={`nav-hamburger${open ? ' open' : ''}`}
            onClick={toggle}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`nav-drawer${open ? ' open' : ''}`}>
        <NavLink to="/" className={({ isActive }) => `nd-link${isActive ? ' on' : ''}`} end onClick={close}>Home</NavLink>
        <NavLink to="/services" className={({ isActive }) => `nd-link${isActive ? ' on' : ''}`} onClick={close}>Services</NavLink>
        <NavLink to="/top-tips" className={({ isActive }) => `nd-link${isActive ? ' on' : ''}`} onClick={close}>Top Tips</NavLink>
        <NavLink to="/gallery" className={({ isActive }) => `nd-link${isActive ? ' on' : ''}`} onClick={close}>Gallery</NavLink>
        <NavLink to="/faqs" className={({ isActive }) => `nd-link${isActive ? ' on' : ''}`} onClick={close}>FAQs</NavLink>
        <NavLink to="/academy" className={({ isActive }) => `nd-link${isActive ? ' on' : ''}`} onClick={close}>Essence Academy</NavLink>
        <a href={BOOK_URL} className="nd-book" target="_blank" rel="noreferrer" onClick={close}>Book Now</a>
      </div>
    </>
  )
}
```

- [ ] **Step 3: Commit**

```bash
cd /Users/mandeepduklu/essenceMocks/essence-react
git add src/components/
git commit -m "feat: Navbar component with React Router NavLink and mobile drawer"
```

---

## Task 4: Footer component

**Files:**
- Create: `essence-react/src/components/Footer/Footer.jsx`
- Create: `essence-react/src/components/Footer/Footer.css`

- [ ] **Step 1: Create Footer.css**

```bash
mkdir -p /Users/mandeepduklu/essenceMocks/essence-react/src/components/Footer
```

Write `essence-react/src/components/Footer/Footer.css`:

```css
footer {
  background: var(--ow);
  padding: 64px 56px 36px;
  border-top: 1px solid var(--bm);
}
.footer-logo { text-align: center; margin-bottom: 48px; }
.footer-logo img { height: 72px; width: auto; display: block; margin: 0 auto; mix-blend-mode: multiply; }
.footer-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 40px; margin-bottom: 48px; }
.footer-col-title { font-size: 8.5px; letter-spacing: .42em; text-transform: uppercase; color: var(--wg); margin-bottom: 18px; }
.footer-links { list-style: none; display: flex; flex-direction: column; gap: 9px; }
.footer-links a { font-size: 12.5px; color: var(--chr); text-decoration: none; transition: color .2s, padding-left .2s; display: inline-block; }
.footer-links a:hover { color: var(--blk); padding-left: 6px; }
.footer-bottom { border-top: 1px solid var(--bm); padding-top: 24px; display: flex; justify-content: space-between; align-items: center; }
.footer-copy { font-size: 10px; letter-spacing: .1em; color: var(--wg); }
.footer-soc { display: flex; gap: 20px; }
.footer-soc a { font-size: 9px; letter-spacing: .28em; text-transform: uppercase; color: var(--wg); text-decoration: none; transition: color .2s, letter-spacing .2s; }
.footer-soc a:hover { color: var(--blk); letter-spacing: .36em; }
@media (max-width: 900px) {
  footer { padding: 52px 20px 28px; }
  .footer-grid { grid-template-columns: 1fr 1fr; }
  .footer-bottom { flex-direction: column; gap: 16px; text-align: center; }
}
```

- [ ] **Step 2: Create Footer.jsx**

Write `essence-react/src/components/Footer/Footer.jsx`:

```jsx
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <img src="/essencelogo.jpg" alt="Essence Hair Treatment" />
      </div>
      <div className="footer-grid">
        <div>
          <div className="footer-col-title">Services</div>
          <ul className="footer-links">
            <li><Link to="/services">Balayage &amp; Colour</Link></li>
            <li><Link to="/services">Hair Treatments</Link></li>
            <li><Link to="/services">Head Spa</Link></li>
            <li><Link to="/services">Cut &amp; Style</Link></li>
            <li><Link to="/services">Extensions</Link></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Info</div>
          <ul className="footer-links">
            <li><Link to="/top-tips">Top Tips</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
            <li><Link to="/academy">Essence Academy</Link></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Academy</div>
          <ul className="footer-links">
            <li><Link to="/academy">Balayage Masterclass</Link></li>
            <li><Link to="/academy">Keratin Course</Link></li>
            <li><Link to="/academy">Advanced Colour</Link></li>
            <li><Link to="/academy">All Courses</Link></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Contact</div>
          <ul className="footer-links">
            <li><a href="tel:+447375956131">07375 956 131</a></li>
            <li><a href="https://wa.me/447375956131" target="_blank" rel="noreferrer">WhatsApp</a></li>
            <li><span>6 Woodmere, Luton</span></li>
            <li><span>Bedfordshire</span></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-copy">&copy; 2025 Essence Hair Treatment. All rights reserved.</span>
        <div className="footer-soc">
          <a href="https://www.instagram.com/essence.hairtreatment/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.tiktok.com/@essencehairtreatment" target="_blank" rel="noreferrer">TikTok</a>
          <a href="https://www.facebook.com/essencekeratinluton" target="_blank" rel="noreferrer">Facebook</a>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 3: Commit**

```bash
cd /Users/mandeepduklu/essenceMocks/essence-react
git add src/components/Footer/
git commit -m "feat: Footer component"
```

---

## Task 5: App.jsx with routes

**Files:**
- Replace: `essence-react/src/App.jsx`

- [ ] **Step 1: Write App.jsx**

```bash
mkdir -p /Users/mandeepduklu/essenceMocks/essence-react/src/pages/{Home,Services,Gallery,TopTips,FAQs,Academy}
```

Write `essence-react/src/App.jsx`:

```jsx
import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './pages/Home/Home.jsx'
import Services from './pages/Services/Services.jsx'
import Gallery from './pages/Gallery/Gallery.jsx'
import TopTips from './pages/TopTips/TopTips.jsx'
import FAQs from './pages/FAQs/FAQs.jsx'
import Academy from './pages/Academy/Academy.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/top-tips" element={<TopTips />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/academy" element={<Academy />} />
      </Routes>
      <Footer />
    </>
  )
}
```

- [ ] **Step 2: Create placeholder page stubs** (so the app compiles before pages are filled in)

For each of the 6 pages, create a minimal stub. Example for Home — repeat for all 6:

`essence-react/src/pages/Home/Home.jsx`:
```jsx
export default function Home() { return <main style={{paddingTop:'76px'}}>Home</main> }
```

`essence-react/src/pages/Services/Services.jsx`:
```jsx
export default function Services() { return <main style={{paddingTop:'76px'}}>Services</main> }
```

`essence-react/src/pages/Gallery/Gallery.jsx`:
```jsx
export default function Gallery() { return <main style={{paddingTop:'76px'}}>Gallery</main> }
```

`essence-react/src/pages/TopTips/TopTips.jsx`:
```jsx
export default function TopTips() { return <main style={{paddingTop:'76px'}}>Top Tips</main> }
```

`essence-react/src/pages/FAQs/FAQs.jsx`:
```jsx
export default function FAQs() { return <main style={{paddingTop:'76px'}}>FAQs</main> }
```

`essence-react/src/pages/Academy/Academy.jsx`:
```jsx
export default function Academy() { return <main style={{paddingTop:'76px'}}>Academy</main> }
```

- [ ] **Step 3: Verify the app compiles and runs**

```bash
cd /Users/mandeepduklu/essenceMocks/essence-react
npm run dev
```

Expected: Vite dev server starts at `http://localhost:5173`. Open it — you should see the Navbar, a page placeholder, and the Footer. Navigate between routes — they should all work with no page reload.

- [ ] **Step 4: Commit**

```bash
cd /Users/mandeepduklu/essenceMocks/essence-react
git add src/App.jsx src/pages/
git commit -m "feat: App router and page stubs — app compiles and navigates"
```

---

## Task 6: Home page

**Files:**
- Replace: `essence-react/src/pages/Home/Home.jsx`
- Create: `essence-react/src/pages/Home/Home.css`

- [ ] **Step 1: Create Home.css**

Extract all CSS from `index.html` that is NOT nav/footer related. Write to `essence-react/src/pages/Home/Home.css`:

```css
/* HERO */
.hero { height: 100vh; position: relative; overflow: hidden; display: flex; align-items: flex-end; }
.hero-img { position: absolute; inset: 0; }
.hero-img img { width: 100%; height: 100%; object-fit: cover; object-position: center 20%; }
.hero-overlay { position: absolute; inset: 0; background: linear-gradient(to top,rgba(10,10,10,.55) 0%,rgba(10,10,10,.1) 50%,transparent 100%); }
.hero-content { position: relative; z-index: 1; padding: 0 56px 80px; width: 100%; }
.hero-tag { font-size: 9px; letter-spacing: .5em; text-transform: uppercase; color: rgba(255,255,255,.7); margin-bottom: 20px; }
.hero-title { font-family: 'Playfair Display', serif; font-size: clamp(52px,7vw,100px); font-weight: 300; line-height: 1; color: #fff; margin-bottom: 32px; }
.hero-title em { font-style: italic; }
.hero-cta { display: flex; gap: 16px; flex-wrap: wrap; }
.btn-wh { font-size: 9.5px; font-weight: 500; letter-spacing: .3em; text-transform: uppercase; background: #fff; color: #0a0a0a; padding: 14px 36px; text-decoration: none; transition: all .25s; display: inline-block; }
.btn-wh:hover { background: #F2EDE6; }
.btn-outline-wh { font-size: 9.5px; font-weight: 400; letter-spacing: .28em; text-transform: uppercase; background: transparent; color: #fff; padding: 13px 34px; border: 1px solid rgba(255,255,255,.6); text-decoration: none; transition: all .25s; display: inline-block; }
.btn-outline-wh:hover { background: rgba(255,255,255,.15); }
.hero-scroll { position: absolute; bottom: 36px; right: 56px; z-index: 1; display: flex; flex-direction: column; align-items: center; gap: 8px; }
.hero-scroll span { font-size: 7.5px; letter-spacing: .45em; text-transform: uppercase; color: rgba(255,255,255,.6); writing-mode: vertical-rl; }
.scroll-line { width: 1px; height: 48px; background: rgba(255,255,255,.4); }

/* INTRO */
.intro { display: grid; grid-template-columns: 1fr 1fr; }
.intro-img { overflow: hidden; }
.intro-img img { width: 100%; height: 680px; object-fit: cover; display: block; transition: transform .8s ease; }
.intro-img:hover img { transform: scale(1.03); }
.intro-text { background: #FAF8F5; display: flex; flex-direction: column; justify-content: center; padding: 88px 72px; }
.section-tag { font-size: 8.5px; letter-spacing: .52em; text-transform: uppercase; color: #9A9087; margin-bottom: 24px; }
.section-title { font-family: 'Playfair Display', serif; font-size: clamp(32px,3.2vw,48px); font-weight: 300; line-height: 1.15; margin-bottom: 28px; }
.section-title em { font-style: italic; }
.body-text { font-size: 14px; line-height: 1.9; color: #2d2d2d; margin-bottom: 32px; }
.btn-blk { font-size: 9px; font-weight: 500; letter-spacing: .3em; text-transform: uppercase; background: #0a0a0a; color: #fff; padding: 14px 36px; text-decoration: none; transition: all .25s; display: inline-block; }
.btn-blk:hover { background: #F2EDE6; color: #0a0a0a; }
.btn-outline-blk { font-size: 9px; font-weight: 400; letter-spacing: .28em; text-transform: uppercase; background: transparent; color: #0a0a0a; padding: 13px 34px; border: 1px solid #0a0a0a; text-decoration: none; transition: all .25s; display: inline-block; }
.btn-outline-blk:hover { background: #0a0a0a; color: #fff; }
.social-follow { margin-top: 36px; }
.social-follow-label { font-size: 8px; letter-spacing: .4em; text-transform: uppercase; color: #9A9087; display: block; margin-bottom: 16px; }
.social-links { display: flex; flex-direction: column; gap: 12px; }
.social-item { display: flex; align-items: center; gap: 12px; text-decoration: none; color: #0a0a0a; transition: color .2s; }
.social-item:hover { color: #9A9087; }
.social-icon { width: 18px; height: 18px; flex-shrink: 0; }
.social-platform-name { font-size: 9px; letter-spacing: .28em; text-transform: uppercase; font-weight: 500; min-width: 72px; }
.social-handle { font-size: 11px; color: #9A9087; }

/* SERVICES STRIP */
.services-strip { background: #F2EDE6; padding: 88px 56px; }
.ss-head { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 64px; }
.ss-head h2 { font-family: 'Playfair Display', serif; font-size: clamp(32px,3.4vw,50px); font-weight: 300; line-height: 1.1; }
.ss-head h2 em { font-style: italic; }
.ss-head a { font-size: 9px; letter-spacing: .3em; text-transform: uppercase; color: #0a0a0a; text-decoration: none; border-bottom: 1px solid #0a0a0a; padding-bottom: 3px; transition: color .2s, border-color .2s; }
.ss-head a:hover { color: #9A9087; border-color: #9A9087; }
.services-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 2px; }
.svc { background: #fff; overflow: hidden; cursor: pointer; }
.svc-img { height: 320px; overflow: hidden; }
.svc-img img { width: 100%; height: 100%; object-fit: cover; transition: transform .6s ease; }
.svc:hover .svc-img img { transform: scale(1.05); }
.svc-info { padding: 28px 24px; }
.svc-num { font-size: 9px; letter-spacing: .3em; color: #9A9087; margin-bottom: 10px; }
.svc-name { font-family: 'Playfair Display', serif; font-size: 20px; font-weight: 400; margin-bottom: 10px; }
.svc-name em { font-style: italic; }
.svc-desc { font-size: 12.5px; line-height: 1.78; color: #2d2d2d; margin-bottom: 18px; }
.svc-link { font-size: 8.5px; letter-spacing: .26em; text-transform: uppercase; color: #0a0a0a; text-decoration: none; display: flex; align-items: center; gap: 8px; transition: color .2s; }
.svc-link:hover { color: #9A9087; }

/* MARQUEE */
.marquee-wrap { background: #0a0a0a; padding: 18px 0; overflow: hidden; }
.marquee { display: flex; animation: marquee 22s linear infinite; white-space: nowrap; }
.marquee-item { display: inline-flex; align-items: center; gap: 40px; padding: 0 40px; }
.marquee-item span { font-size: 9px; letter-spacing: .45em; text-transform: uppercase; color: rgba(255,255,255,.6); }
.marquee-dot { width: 3px; height: 3px; border-radius: 50%; background: rgba(255,255,255,.3); flex-shrink: 0; }
@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }

/* FULL BLEED */
.full-bleed { height: 520px; overflow: hidden; position: relative; }
.full-bleed img { width: 100%; height: 100%; object-fit: cover; object-position: center 35%; }
.full-bleed-overlay { position: absolute; inset: 0; background: rgba(10,10,10,.28); display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 24px; text-align: center; padding: 0 40px; }
.full-bleed-overlay h2 { font-family: 'Playfair Display', serif; font-size: clamp(36px,4.5vw,62px); font-weight: 300; color: #fff; line-height: 1.1; }
.full-bleed-overlay h2 em { font-style: italic; }

/* TESTIMONIALS */
.testimonials { background: #fff; padding: 112px 56px; }
.testi-head { text-align: center; margin-bottom: 72px; }
.testi-head h2 { font-family: 'Playfair Display', serif; font-size: clamp(30px,3vw,44px); font-weight: 300; line-height: 1.15; }
.testi-head h2 em { font-style: italic; }
.testi-rule { width: 40px; height: 1px; background: #0a0a0a; margin: 20px auto 0; }
.testi-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 2px; }
.tcard { background: #FAF8F5; padding: 52px 40px; }
.tcard-quote { font-family: 'Playfair Display', serif; font-size: 64px; font-weight: 300; color: #E8E0D6; line-height: .8; margin-bottom: 16px; }
.tcard-text { font-size: 13.5px; line-height: 1.9; color: #2d2d2d; margin-bottom: 28px; font-style: italic; }
.tcard-rule { width: 28px; height: 1px; background: #D4C9BB; margin-bottom: 16px; }
.tcard-author { font-size: 10px; letter-spacing: .28em; text-transform: uppercase; font-weight: 500; margin-bottom: 4px; }
.tcard-service { font-size: 10px; letter-spacing: .2em; text-transform: uppercase; color: #9A9087; }

/* GALLERY STRIP */
.gallery-strip { background: #FAF8F5; padding: 96px 56px; }
.gs-head { margin-bottom: 48px; }
.gs-head h2 { font-family: 'Playfair Display', serif; font-size: clamp(30px,3vw,44px); font-weight: 300; }
.gs-head h2 em { font-style: italic; }
.gallery-scroll { display: grid; grid-template-columns: repeat(4,1fr); gap: 4px; }
.gi { overflow: hidden; }
.gi img { width: 100%; height: 280px; object-fit: cover; display: block; transition: transform .55s ease; }
.gi:hover img { transform: scale(1.04); }
.gs-footer { text-align: center; margin-top: 40px; }

/* CONTACT STRIP */
.contact-strip { background: #0a0a0a; display: grid; grid-template-columns: 1fr 1fr; }
.cs-text { padding: 96px 72px; }
.cs-detail { display: flex; gap: 16px; align-items: flex-start; }
.cs-detail-icon { font-size: 18px; margin-top: 2px; flex-shrink: 0; }
.cs-detail-text { font-size: 13px; line-height: 1.7; color: rgba(255,255,255,.6); }
.cs-detail-text strong { display: block; font-size: 8.5px; letter-spacing: .32em; text-transform: uppercase; color: rgba(255,255,255,.35); margin-bottom: 4px; font-weight: 400; }
.cs-detail-text a { color: rgba(255,255,255,.6); text-decoration: none; }
.cs-detail-text a:hover { color: #fff; }
.cs-map iframe { width: 100%; height: 100%; min-height: 480px; border: 0; display: block; }

/* RESPONSIVE */
@media (max-width: 960px) {
  .intro { grid-template-columns: 1fr; }
  .intro-img img { height: 360px; }
  .intro-text { padding: 52px 28px; }
  .services-grid { grid-template-columns: 1fr 1fr; }
  .testi-grid { grid-template-columns: 1fr; gap: 2px; }
  .gallery-scroll { grid-template-columns: 1fr 1fr; }
  .contact-strip { grid-template-columns: 1fr; }
  .cs-text { padding: 64px 28px; }
  .hero-content { padding: 0 28px 56px; }
  .services-strip { padding: 64px 28px; }
  .ss-head { flex-direction: column; gap: 16px; align-items: flex-start; }
  .testimonials { padding: 72px 28px; }
  .gallery-strip { padding: 64px 28px; }
}
```

- [ ] **Step 2: Write Home.jsx**

Replace `essence-react/src/pages/Home/Home.jsx` with the full JSX converted from `index.html` body content (between nav and footer), replacing `href="*.html"` with React Router `<Link to="...">` and `src="..."` image paths with `/filename`:

```jsx
import { Link } from 'react-router-dom'
import './Home.css'

const BOOK_URL = 'https://bookings.gettimely.com/essencehairtreatment/bb/book'

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-img">
          <img src="/1000076199.jpg" alt="Essence Hair Treatment" />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-tag">Luton's Premier Hair Studio</div>
          <h1 className="hero-title">Your Hair,<br />Your Story,<br /><em>My Passion.</em></h1>
          <div className="hero-cta">
            <a href={BOOK_URL} className="btn-wh" target="_blank" rel="noreferrer">Book a Treatment</a>
            <Link to="/services" className="btn-outline-wh">Explore Services</Link>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* INTRO SPLIT */}
      <section className="intro">
        <div className="intro-img">
          <img src="/1000076210.jpg" alt="Essence studio interior" />
        </div>
        <div className="intro-text">
          <div className="section-tag">Welcome to Essence</div>
          <h2 className="section-title">A cosy studio<br />built around <em>you.</em></h2>
          <p className="body-text">A cosy hair studio in Luton offering professional hair services including colour services, cuts, styling, hair extensions and nourishing hair treatments. Specialising in personalised care, we create bespoke styles tailored to your needs in a relaxed and welcoming environment.</p>
          <div style={{display:'flex',gap:'14px',flexWrap:'wrap'}}>
            <a href={BOOK_URL} className="btn-blk" target="_blank" rel="noreferrer">Book Treatment</a>
            <Link to="/services" className="btn-outline-blk">Our Services</Link>
          </div>
          <div className="social-follow">
            <span className="social-follow-label">Follow Us</span>
            <div className="social-links">
              <a href="https://www.instagram.com/essence.hairtreatment/" className="social-item" target="_blank" rel="noreferrer">
                <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/></svg>
                <span className="social-platform-name">Instagram</span>
                <span className="social-handle">Essence Hair Treatment</span>
              </a>
              <a href="https://www.tiktok.com/@essencehairtreatment" className="social-item" target="_blank" rel="noreferrer">
                <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>
                <span className="social-platform-name">TikTok</span>
                <span className="social-handle">Essence Hair Treatment</span>
              </a>
              <a href="https://www.facebook.com/essencekeratinluton" className="social-item" target="_blank" rel="noreferrer">
                <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                <span className="social-platform-name">Facebook</span>
                <span className="social-handle">Essence Hair Treatment</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES STRIP */}
      <section className="services-strip">
        <div className="ss-head">
          <div>
            <div className="section-tag">What We Offer</div>
            <h2 className="section-title">Our <em>Services</em></h2>
          </div>
          <Link to="/services">View All Services</Link>
        </div>
        <div className="services-grid">
          {[
            { num:'01', img:'/1000076204.jpg', name:<>Balayage &amp; <em>Colour Services</em></>, desc:'Sun-kissed, freehand colour that grows out beautifully. No harsh lines. Low maintenance. Bespoke to you.', href:'/services' },
            { num:'02', img:'/1000076209.jpg', name:<>Hair<em>Treatments</em></>, desc:'Organic, formaldehyde-free Nanoplastia, Keratin and Hair Botox. Frizz-free results that last months.', href:'/services' },
            { num:'03', img:'/1000076198.jpg', name:<>Head Spa &amp; <em>Scalp Care</em></>, desc:'Therapeutic rituals tailored to your scalp concern — from hair loss to deep hydration.', href:'/services' },
            { num:'04', img:'/1000076211.jpg', name:<>Hair <em>Extensions</em></>, desc:'Lightweight, seamless, and undetectable. Medical-grade tape that moves like your own hair.', href:'/services' },
          ].map(s => (
            <div className="svc" key={s.num}>
              <div className="svc-img"><img src={s.img} alt="" /></div>
              <div className="svc-info">
                <div className="svc-num">{s.num}</div>
                <div className="svc-name">{s.name}</div>
                <p className="svc-desc">{s.desc}</p>
                <Link to={s.href} className="svc-link">Book Now</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrap">
        <div className="marquee">
          {[1,2].map(i => (
            <div className="marquee-item" key={i}>
              {['Balayage','Nanoplastia','Keratin','Hair Botox','Head Spa','Extensions','Cut & Style','ABT Accredited Academy','Luton'].map(t => (
                <><span key={t}>{t}</span><div className="marquee-dot" /></>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* FULL BLEED */}
      <div className="full-bleed">
        <img src="/1000076203.jpg" alt="Hair transformation" />
        <div className="full-bleed-overlay">
          <h2>Book your appointment<br /><em>today.</em></h2>
          <a href={BOOK_URL} className="btn-wh" target="_blank" rel="noreferrer">Book Now</a>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="testi-head">
          <div className="section-tag">Client Stories</div>
          <h2>What our clients <em>say</em></h2>
          <div className="testi-rule" />
        </div>
        <div className="testi-grid">
          {[
            { text: 'Went in for a keratin treatment before my holiday as my hair is very curly and frizzy. They did such an amazing job — no frizz and my hair is so much easier to maintain. Will be a regular from now on.', author: 'Anonymous', service: 'Keratin Treatment' },
            { text: 'Amazing salon, plenty of parking and easy to get to. I had a wash, cut and blow dry and I love my new hair — it feels so much healthier. I\'m definitely coming back to Essence next time.', author: 'Henna', service: 'Cut, Wash & Blow Dry' },
            { text: 'I highly recommend the Nanoplastia treatment if you struggle with unmanageable hair. I have thick, frizzy, curly hair and this has drastically reduced my styling time — cutting it in half.', author: 'Tamanna', service: 'Nanoplastia Treatment' },
          ].map(t => (
            <div className="tcard" key={t.author}>
              <div className="tcard-quote">"</div>
              <p className="tcard-text">{t.text}</p>
              <div className="tcard-rule" />
              <div className="tcard-author">{t.author}</div>
              <div className="tcard-service">{t.service}</div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="gallery-strip">
        <div className="gs-head">
          <div className="section-tag">Real Results</div>
          <h2 className="section-title">Our <em>Work</em></h2>
        </div>
        <div className="gallery-scroll">
          {['/1000076203.jpg','/1000076197.jpg','/1000076208.jpg','/1000076199.jpg'].map(src => (
            <div className="gi" key={src}><img src={src} alt="Hair result" /></div>
          ))}
        </div>
        <div className="gs-footer">
          <Link to="/gallery" className="btn-blk">View Full Gallery</Link>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="contact-strip">
        <div className="cs-text">
          <div className="section-tag" style={{color:'rgba(255,255,255,.35)'}}>Get in Touch</div>
          <h2 className="section-title" style={{color:'#fff',marginBottom:'36px'}}>Find <em>Us</em></h2>
          <p className="body-text" style={{color:'rgba(255,255,255,.6)',marginBottom:'32px'}}>All appointments are by booking only. Book online, call, or WhatsApp us. Please allow 48–72 hours for a reply.</p>
          <div style={{display:'flex',flexDirection:'column',gap:'20px',marginBottom:'36px'}}>
            <div className="cs-detail"><div className="cs-detail-icon">📍</div><div className="cs-detail-text"><strong>Address</strong>6 Woodmere, Luton, Bedfordshire · Free street parking available</div></div>
            <div className="cs-detail"><div className="cs-detail-icon">📞</div><div className="cs-detail-text"><strong>Phone / WhatsApp</strong><a href="tel:+447375956131">07375 956 131</a></div></div>
            <div className="cs-detail"><div className="cs-detail-icon">🕐</div><div className="cs-detail-text"><strong>Booking</strong>By appointment only. 4 weeks notice min, 6 for Saturdays. Deposit required to confirm.</div></div>
          </div>
          <a href={BOOK_URL} className="btn-wh" target="_blank" rel="noreferrer">Book Online</a>
        </div>
        <div className="cs-map">
          <iframe
            src="https://maps.google.com/maps?q=6+Woodmere,+Luton,+Bedfordshire&output=embed"
            allowFullScreen
            loading="lazy"
            title="Essence location"
          />
        </div>
      </section>
    </main>
  )
}
```

- [ ] **Step 3: Verify Home page renders correctly**

```bash
cd /Users/mandeepduklu/essenceMocks/essence-react
npm run dev
```

Open `http://localhost:5173` — the homepage should look identical to the original `index.html`.

- [ ] **Step 4: Commit**

```bash
cd /Users/mandeepduklu/essenceMocks/essence-react
git add src/pages/Home/
git commit -m "feat: Home page component"
```

---

## Task 7: Services page

**Files:**
- Replace: `essence-react/src/pages/Services/Services.jsx`
- Create: `essence-react/src/pages/Services/Services.css`

- [ ] **Step 1: Create Services.css** — extract CSS from `services.html` (page-specific only, no nav/footer):

```css
.page-hero { height: 70vh; min-height: 500px; position: relative; overflow: hidden; display: flex; align-items: flex-end; }
.ph-img { position: absolute; inset: 0; }
.ph-img img { width: 100%; height: 100%; object-fit: cover; object-position: center 30%; }
.ph-ov { position: absolute; inset: 0; background: linear-gradient(to top,rgba(10,10,10,.6) 0%,rgba(10,10,10,.15) 60%,transparent 100%); }
.ph-content { position: relative; z-index: 1; padding: 0 56px 72px; }
.ph-tag { font-size: 9px; letter-spacing: .5em; text-transform: uppercase; color: rgba(255,255,255,.65); margin-bottom: 16px; }
.ph-title { font-family: 'Playfair Display', serif; font-size: clamp(44px,6vw,78px); font-weight: 300; color: #fff; line-height: 1.05; }
.ph-title em { font-style: italic; }
.stabs { background: #fff; border-bottom: 1px solid #E8E0D6; display: flex; padding: 0 56px; position: sticky; top: 76px; z-index: 50; overflow-x: auto; }
.stab { padding: 18px 28px; font-size: 9px; letter-spacing: .28em; text-transform: uppercase; color: #9A9087; border-bottom: 1px solid transparent; cursor: pointer; transition: all .2s; text-decoration: none; white-space: nowrap; }
.stab:hover, .stab.on { color: #0a0a0a; border-bottom-color: #0a0a0a; }
.svc-section { padding: 96px 56px; }
.svc-section.bg-beige { background: #F2EDE6; }
.svc-section.bg-ow { background: #FAF8F5; }
.sec-head { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 64px; padding-bottom: 24px; border-bottom: 1px solid #E8E0D6; }
.sh-left .st { font-size: 8.5px; letter-spacing: .5em; text-transform: uppercase; color: #9A9087; margin-bottom: 12px; }
.sh-left h2 { font-family: 'Playfair Display', serif; font-size: clamp(28px,3vw,42px); font-weight: 300; line-height: 1.1; }
.sh-left h2 em { font-style: italic; }
.sh-right { font-size: 13px; line-height: 1.82; color: #9A9087; max-width: 320px; text-align: right; }
.svc-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 3px; }
.svc-card { background: #fff; overflow: hidden; }
.svc-card-img { overflow: hidden; height: 280px; }
.svc-card-img img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .6s; }
.svc-card:hover .svc-card-img img { transform: scale(1.04); }
.svc-card-body { padding: 32px 28px; }
.svc-num { font-size: 9px; letter-spacing: .3em; color: #9A9087; margin-bottom: 10px; }
.svc-name { font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 300; line-height: 1.15; margin-bottom: 14px; }
.svc-name em { font-style: italic; }
.svc-desc { font-size: 13px; line-height: 1.82; color: #2d2d2d; margin-bottom: 20px; }
.book-link { font-size: 9px; letter-spacing: .3em; text-transform: uppercase; color: #0a0a0a; text-decoration: none; display: inline-flex; align-items: center; gap: 10px; border-bottom: 1px solid #0a0a0a; padding-bottom: 3px; transition: color .2s, border-color .2s; }
.book-link:hover { color: #9A9087; border-color: #9A9087; }
.cta-strip { background: #0a0a0a; padding: 88px 56px; text-align: center; }
.cta-strip h2 { font-family: 'Playfair Display', serif; font-size: clamp(30px,3.5vw,50px); font-weight: 300; color: #fff; margin-bottom: 24px; line-height: 1.15; }
.cta-strip h2 em { font-style: italic; }
.cta-strip p { font-size: 13.5px; color: rgba(255,255,255,.5); max-width: 400px; margin: 0 auto 32px; line-height: 1.82; }
.btn-wh { font-size: 9px; font-weight: 500; letter-spacing: .3em; text-transform: uppercase; background: #fff; color: #0a0a0a; padding: 13px 34px; text-decoration: none; transition: all .25s; display: inline-block; }
.btn-wh:hover { background: #F2EDE6; }
@media (max-width: 960px) {
  .ph-content { padding: 0 20px 56px; }
  .stabs { padding: 0 12px; }
  .svc-section { padding: 64px 20px; }
  .svc-grid { grid-template-columns: 1fr; }
  .svc-card-img { height: 220px; }
  .sec-head { flex-direction: column; gap: 14px; align-items: flex-start; }
  .sh-right { text-align: left; max-width: 100%; }
}
```

- [ ] **Step 2: Write Services.jsx** — convert `services.html` body (between nav and footer) to JSX, using `<a href={BOOK_URL}>` for booking links, `href="#colour"` style anchor links work as-is:

```jsx
import './Services.css'

const BOOK_URL = 'https://bookings.gettimely.com/essencehairtreatment/bb/book'

const colourServices = [
  { num:'01', img:'/1000076204.jpg', name:<><em>Balayage</em></>, desc:'A freehand technique creating a natural, sun-kissed look with soft blended highlights. Low-maintenance colour with no harsh regrowth lines.' },
  { num:'02', img:'/1000076203.jpg', name:<><em>Highlights</em></>, desc:'Precision highlights to add depth, dimension, and brightness — customised to your skin tone and hair type for a seamless, natural finish.' },
  { num:'03', img:'/1000076198.jpg', name:<><em>Tint</em></>, desc:'Full head or root tint for rich, all-over colour. Bespoke shade mixing to achieve your perfect tone with lasting vibrancy.' },
  { num:'04', img:'/1000076209.jpg', name:<>Grey <em>Coverage</em></>, desc:'Seamless grey root coverage blending naturally with your existing colour. Long-lasting results that grow out gracefully without harsh lines.' },
]

const treatments = [
  { num:'01 — Organic · Formaldehyde-Free', img:'/1000076209.jpg', name:<><em>Nanoplastia</em></>, desc:'Works at a molecular level to deeply hydrate and smooth the hair shaft. Reduces frizz while preserving your natural curl pattern. Safe for all hair types including colour-treated hair.' },
  { num:'02 — Organic · Formaldehyde-Free', img:'/1000076208.jpg', name:<>Keratin <em>Treatment</em></>, desc:"Replenishes the hair's natural protein structure — eliminating frizz, adding extraordinary shine, and leaving hair smooth and effortlessly manageable." },
  { num:'03 — Deep Restoration', img:'/1000076207.jpg', name:<>Hair <em>Botox</em></>, desc:'An intensive treatment that fills damaged gaps in the hair shaft, rebuilding volume, softness, and smoothness from within. Ideal for over-processed or colour-damaged hair.' },
]

const spa = [
  { num:'01 — Thinning & Hair Loss', img:'/1000076199.jpg', name:<>Scalp <em>Detox</em></>, desc:'Scalp Detox · Hair Growth Stimulation Therapy · Micronutrient Infusion with amino acids to stimulate and nourish from the root.' },
  { num:'02 — Dandruff & Itchy Scalp', img:'/1000076197.jpg', name:<>Scalp <em>Hydration</em></>, desc:'Hydrating Scalp Masks with aloe vera · Exfoliating Scalp Treatment to remove build-up and restore comfort.' },
  { num:'03 — Dry & Damaged Hair', img:'/1000076195.jpg', name:<>Deep <em>Conditioning</em></>, desc:'Deep Conditioning with argan oil · Hot Oil Treatment · Steam Treatment for deep hydration and restored softness.' },
]

const cut = [
  { num:'01', img:'/1000076208.jpg', name:<>Cut &amp; <em>Blow Dry</em></>, desc:'Expert cut tailored to your face shape and hair texture, finished with a blow dry to your preferred style — bouncy, sleek, or waves.' },
  { num:'02', img:'/1000076209.jpg', name:<>Wash &amp; <em>Style</em></>, desc:'Professional wash with salon-grade products and a relaxing scalp massage, followed by a full style finish of your choice.' },
  { num:'03', img:'/1000076210.jpg', name:<>Style <em>Consultation</em></>, desc:"Not sure what suits you? Book a consultation for personalised style advice, product recommendations, and a tailored hair plan." },
]

const extensions = [
  { num:'01 — Semi-Permanent', img:'/1000076195.jpg', name:<>Hair<em>Extensions</em></>, desc:'Applied with medical-grade adhesive that lies flat against the scalp — completely undetectable even when your hair is up. Lasts 6–8 weeks between appointments.' },
  { num:'02 — Volume & Length', img:'/1000076197.jpg', name:<>Fitting &amp; <em>Blend</em></>, desc:'Available in a full range of shades and lengths. Can be worn up, down, or in any style. Reusable and repositionable at maintenance visits.' },
  { num:'03 — First Time?', img:'/1000076211.jpg', name:<>Extension <em>Consultation</em></>, desc:'New to extensions? Start with a consultation to match your shade, discuss length goals, and get a full rundown of aftercare and maintenance.' },
]

function ServiceCard({ num, img, name, desc, label }) {
  return (
    <div className="svc-card">
      <div className="svc-card-img"><img src={img} alt={label} /></div>
      <div className="svc-card-body">
        <div className="svc-num">{num}</div>
        <h3 className="svc-name">{name}</h3>
        <p className="svc-desc">{desc}</p>
        <a href={BOOK_URL} className="book-link" target="_blank" rel="noreferrer">Book Now →</a>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <main>
      <div className="page-hero">
        <div className="ph-img"><img src="/1000076203.jpg" alt="Services" /></div>
        <div className="ph-ov" />
        <div className="ph-content">
          <div className="ph-tag">What We Offer</div>
          <h1 className="ph-title">Our <em>Services</em></h1>
        </div>
      </div>

      <div className="stabs">
        <a href="#colour" className="stab">Colour</a>
        <a href="#treatments" className="stab">Treatments</a>
        <a href="#spa" className="stab">Head Spa</a>
        <a href="#cut" className="stab">Cut &amp; Style</a>
        <a href="#extensions" className="stab">Extensions</a>
      </div>

      <section className="svc-section" id="colour">
        <div className="sec-head">
          <div className="sh-left"><div className="st">Colour Services</div><h2><em>Colour Services</em></h2></div>
          <div className="sh-right">Expert colour techniques that enhance your natural beauty and grow out effortlessly. All colour services include a bonding treatment for integrity and shine.</div>
        </div>
        <div className="svc-grid" style={{gridTemplateColumns:'repeat(4,1fr)'}}>
          {colourServices.map(s => <ServiceCard key={s.num} {...s} />)}
        </div>
      </section>

      <section className="svc-section bg-beige" id="treatments">
        <div className="sec-head">
          <div className="sh-left"><div className="st">Hair Treatments</div><h2>&amp; <em>Restoration</em></h2></div>
          <div className="sh-right">100% organic and formaldehyde-free treatments that deliver lasting, transformative results without compromising the health of your hair.</div>
        </div>
        <div className="svc-grid">
          {treatments.map(s => <ServiceCard key={s.num} {...s} />)}
        </div>
      </section>

      <section className="svc-section" id="spa">
        <div className="sec-head">
          <div className="sh-left"><div className="st">Wellness</div><h2>Head Spa &amp; <em>Scalp Care</em></h2></div>
          <div className="sh-right">Therapeutic rituals tailored to your specific scalp concern. Using argan oil, amino acid, and aloe-infused formulas to restore balance from root to tip.</div>
        </div>
        <div className="svc-grid">
          {spa.map(s => <ServiceCard key={s.num} {...s} />)}
        </div>
      </section>

      <section className="svc-section bg-ow" id="cut">
        <div className="sec-head">
          <div className="sh-left"><div className="st">Everyday Luxury</div><h2>Cut, Blow Dry &amp; <em>Style</em></h2></div>
          <div className="sh-right">A full wash, expert cut, and style tailored precisely to your hair type and preferred finish.</div>
        </div>
        <div className="svc-grid">
          {cut.map(s => <ServiceCard key={s.num} {...s} />)}
        </div>
      </section>

      <section className="svc-section" id="extensions">
        <div className="sec-head">
          <div className="sh-left"><div className="st">Volume &amp; Length</div><h2>Tape Hair <em>Extensions</em></h2></div>
          <div className="sh-right">Lightweight, virtually invisible extensions that move exactly like your own hair. Applied with medical-grade adhesive for a seamless, natural-looking blend.</div>
        </div>
        <div className="svc-grid">
          {extensions.map(s => <ServiceCard key={s.num} {...s} />)}
        </div>
      </section>

      <div className="cta-strip">
        <h2>Ready for your <em>transformation?</em></h2>
        <p>Book online or WhatsApp us to discuss your treatment. Deposit required to confirm your appointment.</p>
        <a href={BOOK_URL} className="btn-wh" target="_blank" rel="noreferrer">Book Now</a>
      </div>
    </main>
  )
}
```

- [ ] **Step 3: Commit**

```bash
cd /Users/mandeepduklu/essenceMocks/essence-react
git add src/pages/Services/
git commit -m "feat: Services page component"
```

---

## Task 8: Gallery page

**Files:**
- Replace: `essence-react/src/pages/Gallery/Gallery.jsx`
- Create: `essence-react/src/pages/Gallery/Gallery.css`

- [ ] **Step 1: Create Gallery.css** — extract gallery-specific CSS from `gallery.html`:

```css
.page-hero { height: 55vh; min-height: 380px; position: relative; overflow: hidden; display: flex; align-items: flex-end; }
.ph-img { position: absolute; inset: 0; }
.ph-img img { width: 100%; height: 100%; object-fit: cover; object-position: center 25%; }
.ph-ov { position: absolute; inset: 0; background: linear-gradient(to top,rgba(10,10,10,.6) 0%,rgba(10,10,10,.1) 60%,transparent 100%); }
.ph-content { position: relative; z-index: 1; padding: 0 56px 64px; }
.ph-tag { font-size: 9px; letter-spacing: .5em; text-transform: uppercase; color: rgba(255,255,255,.65); margin-bottom: 14px; }
.ph-title { font-family: 'Playfair Display', serif; font-size: clamp(44px,5.5vw,70px); font-weight: 300; color: #fff; line-height: 1.05; }
.ph-title em { font-style: italic; }
.gallery-wrap { padding: 80px 40px; background: #FAF8F5; }
.gal-note { font-size: 8.5px; letter-spacing: .42em; text-transform: uppercase; color: #9A9087; text-align: center; margin-bottom: 44px; }
.masonry { columns: 3; column-gap: 4px; }
.gi { break-inside: avoid; margin-bottom: 4px; overflow: hidden; position: relative; cursor: pointer; display: block; }
.gi img { width: 100%; display: block; transition: transform .55s ease; }
.gi:hover img { transform: scale(1.04); }
.gi-ov { position: absolute; inset: 0; background: rgba(10,10,10,0); transition: background .3s; }
.gi:hover .gi-ov { background: rgba(10,10,10,.12); }
.ig-sec { background: #fff; padding: 80px 56px; text-align: center; }
.ig-tag { font-size: 8.5px; letter-spacing: .52em; text-transform: uppercase; color: #9A9087; margin-bottom: 18px; }
.ig-title { font-family: 'Playfair Display', serif; font-size: clamp(28px,3vw,42px); font-weight: 300; margin-bottom: 8px; line-height: 1.1; }
.ig-title em { font-style: italic; }
.ig-handle { font-size: 9px; letter-spacing: .38em; text-transform: uppercase; color: #9A9087; margin-bottom: 44px; }
.ig-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 4px; max-width: 900px; margin: 0 auto 40px; }
.igi { aspect-ratio: 1; overflow: hidden; }
.igi img { width: 100%; height: 100%; object-fit: cover; transition: transform .55s; }
.igi:hover img { transform: scale(1.05); }
.btn-blk { font-size: 9px; font-weight: 500; letter-spacing: .3em; text-transform: uppercase; background: #0a0a0a; color: #fff; padding: 13px 34px; text-decoration: none; transition: all .25s; display: inline-block; }
.btn-blk:hover { background: #F2EDE6; color: #0a0a0a; }
.cta-strip { background: #F2EDE6; padding: 80px 56px; display: flex; justify-content: space-between; align-items: center; gap: 32px; }
.cta-strip h3 { font-family: 'Playfair Display', serif; font-size: clamp(22px,2.5vw,34px); font-weight: 300; color: #0a0a0a; }
.cta-strip h3 em { font-style: italic; }
@media (max-width: 960px) {
  .ph-content { padding: 0 20px 52px; }
  .gallery-wrap { padding: 56px 16px; }
  .masonry { columns: 2; }
  .ig-sec { padding: 56px 20px; }
  .ig-grid { grid-template-columns: repeat(2,1fr); }
  .cta-strip { flex-direction: column; text-align: center; padding: 56px 20px; }
}
```

- [ ] **Step 2: Write Gallery.jsx**:

```jsx
import './Gallery.css'

const BOOK_URL = 'https://bookings.gettimely.com/essencehairtreatment/bb/book'
const IG_URL = 'https://www.instagram.com/essence.hairtreatment/'

const galleryImages = [
  '/1000076199.jpg','/1000076203.jpg','/1000076195.jpg','/1000076204.jpg',
  '/1000076197.jpg','/1000076198.jpg','/1000076207.jpg','/1000076208.jpg',
  '/1000076209.jpg','/1000076211.jpg','/1000076212.jpg','/1000076200.jpg',
  '/1000076201.jpg','/1000076202.jpg','/1000076210.jpg',
]

const igImages = ['/1000076203.jpg','/1000076204.jpg','/1000076199.jpg','/1000076209.jpg']

export default function Gallery() {
  return (
    <main>
      <div className="page-hero">
        <div className="ph-img"><img src="/1000076204.jpg" alt="Gallery" /></div>
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
            <div className="igi" key={src}><img src={src} alt="Instagram" /></div>
          ))}
        </div>
        <a href={IG_URL} className="btn-blk" target="_blank" rel="noreferrer">Follow @essence.hairtreatment</a>
      </div>

      <div className="cta-strip">
        <h3>Ready for your <em>transformation?</em></h3>
        <a href={BOOK_URL} className="btn-blk" target="_blank" rel="noreferrer">Book Now</a>
      </div>
    </main>
  )
}
```

- [ ] **Step 3: Commit**

```bash
cd /Users/mandeepduklu/essenceMocks/essence-react
git add src/pages/Gallery/
git commit -m "feat: Gallery page component"
```

---

## Task 9: TopTips, FAQs, and Academy pages

**Files:**
- Replace: `essence-react/src/pages/TopTips/TopTips.jsx`
- Create: `essence-react/src/pages/TopTips/TopTips.css`
- Replace: `essence-react/src/pages/FAQs/FAQs.jsx`
- Create: `essence-react/src/pages/FAQs/FAQs.css`
- Replace: `essence-react/src/pages/Academy/Academy.jsx`
- Create: `essence-react/src/pages/Academy/Academy.css`

These three pages have more content. The approach is the same as previous pages:

- [ ] **Step 1: Copy all CSS from each HTML file** (page-specific only, no nav/footer) into the corresponding `.css` file

For `TopTips.css` — copy all CSS from `toptips.html` `<style>` block, excluding nav/footer rules.
For `FAQs.css` — copy all CSS from `faqs.html` `<style>` block, excluding nav/footer rules.
For `Academy.css` — copy all CSS from `academy.html` `<style>` block, excluding nav/footer rules.

- [ ] **Step 2: Convert TopTips.jsx**

Open `/Users/mandeepduklu/essenceMocks/toptips.html`. Convert the body content between `<!-- NAV -->` close and `<footer>` to JSX:
- Replace `class=` with `className=`
- Replace `href="*.html"` with React Router `<Link to="...">`
- Replace `src="filename"` with `src="/filename"`
- Replace `for=` with `htmlFor=`
- Replace inline `onclick` with `onClick`
- The AI chatbot section on this page has interactive JS — convert the typing animation to a `useEffect` with `setTimeout`, or simplify to static display for now

- [ ] **Step 3: Convert FAQs.jsx**

Open `/Users/mandeepduklu/essenceMocks/faqs.html`. The accordion uses JS `classList.toggle('open')` — convert this to React state:

```jsx
import { useState } from 'react'

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <div className="faq-q" onClick={() => setOpen(o => !o)}>
        <span>{question}</span>
        <div className="faq-icon">+</div>
      </div>
      <div className="faq-a">{answer}</div>
    </div>
  )
}
```

Extract all FAQ data (question/answer pairs) from the HTML into a data array and map over them.

- [ ] **Step 4: Convert Academy.jsx**

Open `/Users/mandeepduklu/essenceMocks/academy.html`. Convert body content to JSX. The promise/hero section and courses grid are static — straightforward JSX conversion.

- [ ] **Step 5: Verify all pages render**

```bash
cd /Users/mandeepduklu/essenceMocks/essence-react
npm run dev
```

Navigate to `/top-tips`, `/faqs`, `/academy` — all should render with correct content and styling.

- [ ] **Step 6: Commit**

```bash
cd /Users/mandeepduklu/essenceMocks/essence-react
git add src/pages/TopTips/ src/pages/FAQs/ src/pages/Academy/
git commit -m "feat: TopTips, FAQs, and Academy page components"
```

---

## Task 10: Scroll-reveal animation and final polish

**Files:**
- Modify: `essence-react/src/App.jsx`

The original `index.html` had an `IntersectionObserver` scroll reveal. Re-implement this as a reusable React hook.

- [ ] **Step 1: Create useScrollReveal hook**

Create `essence-react/src/hooks/useScrollReveal.js`:

```js
import { useEffect } from 'react'

export function useScrollReveal(selector = '.reveal') {
  useEffect(() => {
    const els = document.querySelectorAll(selector)
    els.forEach(el => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(22px)'
      el.style.transition = 'opacity .7s ease, transform .7s ease'
    })
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1'
          e.target.style.transform = 'translateY(0)'
        }
      })
    }, { threshold: 0.1 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [selector])
}
```

Add `className="reveal"` to `.svc`, `.tcard`, `.gi`, `.cs-detail` elements in `Home.jsx`, then call `useScrollReveal()` inside `Home`.

- [ ] **Step 2: Add _redirects file for SPA routing** (needed for Netlify; Vercel handles this automatically)

Create `essence-react/public/_redirects`:

```
/*  /index.html  200
```

- [ ] **Step 3: Verify production build**

```bash
cd /Users/mandeepduklu/essenceMocks/essence-react
npm run build
npm run preview
```

Open `http://localhost:4173` — navigate all pages, check images load, check mobile hamburger menu, check all links work.

- [ ] **Step 4: Final commit**

```bash
cd /Users/mandeepduklu/essenceMocks/essence-react
git add -A
git commit -m "feat: scroll reveal hook, SPA redirect, production build verified"
```

---

## Deployment (reference — not a task)

When ready to deploy:

**Vercel:** `npm i -g vercel && vercel` from `essence-react/` — done in 2 minutes.

**Netlify:** Drag and drop the `essence-react/dist/` folder to netlify.com/drop — done in 30 seconds.

**GitHub Pages:** Push to GitHub, enable Pages with GitHub Actions using `actions/upload-pages-artifact`.
