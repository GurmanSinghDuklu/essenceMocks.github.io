// Renders every route to static HTML after `vite build`, so search engines and
// AI crawlers that don't run JavaScript still see the full page content.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js')

const { render, schemasFor, PAGES } = await import(pathToFileURL(ssrEntry).href)
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')

const esc = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
// Escape "<" so JSON-LD content can never close the script tag early.
const json = obj => JSON.stringify(obj).replace(/</g, '\\u003c')

for (const [route, page] of Object.entries(PAGES)) {
  const head = [
    `<title>${esc(page.title)}</title>`,
    `<meta name="description" content="${esc(page.description)}" />`,
    `<link rel="canonical" href="${page.canonical}" />`,
    `<meta property="og:title" content="${esc(page.title)}" />`,
    `<meta property="og:description" content="${esc(page.description)}" />`,
    `<meta property="og:url" content="${page.canonical}" />`,
    `<meta property="og:image" content="${page.ogImage}" />`,
    `<meta name="twitter:title" content="${esc(page.title)}" />`,
    `<meta name="twitter:description" content="${esc(page.description)}" />`,
    `<meta name="twitter:image" content="${page.ogImage}" />`,
    ...schemasFor(route).map(s => `<script type="application/ld+json">${json(s)}</script>`),
  ].join('\n    ')

  if (!template.includes('<!--app-head-->') || !template.includes('<div id="root"></div>')) {
    throw new Error('index.html is missing the <!--app-head--> marker or the empty root div')
  }
  const html = template
    .replace('<!--app-head-->', head)
    .replace('<div id="root"></div>', `<div id="root">${render(route)}</div>`)

  // /services is written as services.html so Cloudflare serves it at /services
  // (no trailing-slash redirect), matching the canonical URLs and sitemap.
  const file = route === '/' ? 'index.html' : `${route.slice(1)}.html`
  fs.writeFileSync(path.join(dist, file), html)
  console.log(`prerendered ${route} -> dist/${file}`)
}

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })
