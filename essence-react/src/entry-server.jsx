// Build-time only (scripts/prerender.js); never loaded by fast refresh.
/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App.jsx'
import { FAQ_GROUPS } from './pages/FAQs/faqData.jsx'
import { PAGES, salonSchema, breadcrumbSchema, faqSchema } from './seo.js'

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
  return renderToStaticMarkup(<>{node}</>)
    .replace(/<br\s*\/?>|<\/li>/g, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim()
}

export function schemasFor(path) {
  const schemas = [salonSchema(), breadcrumbSchema(path)]
  if (path === '/faqs') {
    const items = FAQ_GROUPS.flatMap(g => g.items).map(({ q, a }) => ({ q, text: toText(a) }))
    schemas.push(faqSchema(items))
  }
  return schemas.filter(Boolean)
}
