import { useEffect } from 'react'

export default function useSEO({ title, description, canonical, ogImage }) {
  useEffect(() => {
    document.title = title

    const setMeta = (name, content, prop = false) => {
      const attr = prop ? 'property' : 'name'
      let el = document.querySelector(`meta[${attr}="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`)
      if (!el) {
        el = document.createElement('link')
        el.setAttribute('rel', rel)
        document.head.appendChild(el)
      }
      el.setAttribute('href', href)
    }

    setMeta('description', description)
    setMeta('og:title', title, true)
    setMeta('og:description', description, true)
    setMeta('og:type', 'website', true)
    setMeta('og:site_name', 'Essence Hair Treatment', true)
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)

    if (canonical) setLink('canonical', canonical)
    if (ogImage) {
      setMeta('og:image', ogImage, true)
      setMeta('twitter:image', ogImage)
    }
  }, [title, description, canonical, ogImage])
}
