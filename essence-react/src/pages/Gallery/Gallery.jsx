import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import useInstagramPosts from '../../hooks/useInstagramPosts'
import './Gallery.css'
import useSEO from '../../hooks/useSEO'
import { PAGES } from '../../seo'
import { GALLERY_SERVICES, GALLERY_FILTERS, galleryPhotos } from './galleryServices'

const BOOK_URL = 'https://bookings.gettimely.com/essencehairtreatment/bb/book'
const IG_URL = 'https://www.instagram.com/essence.hairtreatment/'

export default function Gallery() {
  useSEO(PAGES['/gallery'])
  const posts = useInstagramPosts()
  const [filter, setFilter] = useState('all')
  const photos = useMemo(() => galleryPhotos(posts), [posts])
  const filters = useMemo(
    () => GALLERY_FILTERS.filter(([key]) => photos.filter(p => GALLERY_SERVICES[p.service]?.filter === key).length >= 2),
    [photos],
  )
  const shown = filter === 'all' ? photos : photos.filter(p => GALLERY_SERVICES[p.service]?.filter === filter)
  // Distinct photos so this strip doesn't repeat images already shown in the masonry above.
  const igImages = useMemo(
    () => [
      { src: '/essence-gown-blowdry.webp', alt: 'Honey-brown blow-dry with soft, bouncy ends on a client in an Essence gown' },
      { src: '/balayage-waves-signage.webp', alt: 'Brunette-to-caramel balayage waves under the Essence Hair & Academy sign' },
      { src: '/dark-straight-gloss.webp', alt: 'Long, straight, glossy dark-brown hair' },
      { src: '/image.webp', alt: 'Ash-bronde balayage on straight, mid-length hair' },
    ],
    [],
  )

  return (
    <main>
      <div className="page-hero">
        <div className="ph-img"><img fetchPriority="high" src="/instagram/golden-blonde-balayage-curls-luton.webp" alt="Client with long golden-blonde balayage curls at Essence in Luton" /></div>
        <div className="ph-ov" />
        <div className="ph-content">
          <div className="ph-tag">Real Results</div>
          <h1 className="ph-title">Our <em>Work</em></h1>
        </div>
      </div>

      <div className="gallery-wrap">
        <div className="gal-note">Real client transformations · Essence Hair Treatment, Luton</div>
        {filters.length > 0 && (
          <div className="gal-filters" role="group" aria-label="Filter photos by service">
            {[['all', 'All'], ...filters].map(([key, label]) => (
              <button key={key} type="button" className="gal-filter" aria-pressed={filter === key} onClick={() => setFilter(key)}>
                {label}
              </button>
            ))}
          </div>
        )}
        <div className="masonry" key={filter}>
          {shown.map(({ src, alt, service }) => {
            const svc = GALLERY_SERVICES[service]
            return (
              <figure className="gi" key={src}>
                <img loading="lazy" decoding="async" src={src} alt={alt} />
                <div className="gi-ov" />
                {svc?.to && <figcaption><Link to={svc.to} className="gi-tag">{svc.label} →</Link></figcaption>}
              </figure>
            )
          })}
        </div>
      </div>

      <div className="ig-sec">
        <div className="ig-tag">Social</div>
        <h2 className="ig-title">Follow our <em>journey</em></h2>
        <div className="ig-handle">@essence.hairtreatment</div>
        <div className="ig-grid">
          {igImages.map(({ src, alt }) => (
            <div className="igi" key={src}><img loading="lazy" decoding="async" src={src} alt={alt} /></div>
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
