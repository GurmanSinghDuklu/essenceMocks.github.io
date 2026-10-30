// Build-time only (scripts/prerender.js); never loaded by fast refresh.
/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App.jsx'
import { FAQ_GROUPS } from './pages/FAQs/faqData.jsx'
import { SERVICE_FAQS } from './pages/FAQs/serviceFaqs.jsx'
import { PAGES, salonSchema, breadcrumbSchema, faqSchema, serviceSchema, websiteSchema, priceListSchema } from './seo.js'
import { LANDINGS } from './pages/Landing/landings.jsx'

export { PAGES }

export function render(url) {
  return renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  )
}

// FAQ answers are JSX; flatten them to plain text for the FAQPage schema.
function toText(node) {
  // Answers can contain <Link>, which needs a router to render.
  return renderToStaticMarkup(<StaticRouter location="/">{node}</StaticRouter>)
    .replace(/<br\s*\/?>|<\/li>/g, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim()
}

export function schemasFor(path) {
  const schemas = [salonSchema(), breadcrumbSchema(path)]
  if (path === '/') schemas.push(websiteSchema())
  if (path === '/faqs') {
    const items = [...SERVICE_FAQS, ...FAQ_GROUPS].flatMap(g => g.items).map(({ q, a }) => ({ q, text: toText(a) }))
    schemas.push(faqSchema(items))
  }
  if (path === '/prices') schemas.push(priceListSchema())
  if (LANDINGS[path]) {
    schemas.push(serviceSchema(path, LANDINGS[path]))
    schemas.push(faqSchema(LANDINGS[path].faqs.map(({ q, a }) => ({ q, text: toText(a) }))))
  }
  return schemas.filter(Boolean)
}
