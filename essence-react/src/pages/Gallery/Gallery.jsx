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
