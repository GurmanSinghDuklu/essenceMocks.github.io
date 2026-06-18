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
