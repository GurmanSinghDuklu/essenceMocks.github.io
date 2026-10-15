import { useMemo } from 'react'
import useInstagramPosts from '../../hooks/useInstagramPosts'
import './Gallery.css'
import useSEO from '../../hooks/useSEO'
import { PAGES } from '../../seo'

const BOOK_URL = 'https://bookings.gettimely.com/essencehairtreatment/bb/book'
const IG_URL = 'https://www.instagram.com/essence.hairtreatment/'

export default function Gallery() {
  useSEO(PAGES['/gallery'])
  const posts = useInstagramPosts()
  // The studio photo is swapped for image.png on this page only; the Home feed keeps the original.
  const galleryImages = useMemo(
    () => posts.map(p => (p.file === '1000076210.jpg'
      ? { src: '/image.png', alt: 'Ash-bronde balayage on straight, mid-length hair' }
      : { src: `/instagram/${p.file}`, alt: p.alt || p.caption })),
    [posts],
  )
  // Distinct photos so this strip doesn't repeat images already shown in the masonry above.
  const igImages = useMemo(
    () => [
      { src: '/essence-gown-blowdry.jpeg', alt: 'Honey-brown blow-dry with soft, bouncy ends on a client in an Essence gown' },
      { src: '/balayage-waves-signage.jpeg', alt: 'Brunette-to-caramel balayage waves under the Essence Hair & Academy sign' },
      { src: '/dark-straight-gloss.jpeg', alt: 'Long, straight, glossy dark-brown hair' },
      { src: '/image.png', alt: 'Ash-bronde balayage on straight, mid-length hair' },
    ],
    [],
  )

  return (
    <main>
      <div className="page-hero">
        <div className="ph-img"><img src="/instagram/img-new-19.jpg" alt="Client with long golden-blonde balayage curls at Essence in Luton" /></div>
        <div className="ph-ov" />
        <div className="ph-content">
          <div className="ph-tag">Real Results</div>
          <h1 className="ph-title">Our <em>Work</em></h1>
        </div>
      </div>

      <div className="gallery-wrap">
        <div className="gal-note">Real client transformations · Essence Hair Treatment, Luton</div>
        <div className="masonry">
          {galleryImages.map(({ src, alt }) => (
            <div className="gi" key={src}>
              <img src={src} alt={alt} />
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
          {igImages.map(({ src, alt }) => (
            <div className="igi" key={src}><img src={src} alt={alt} /></div>
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
