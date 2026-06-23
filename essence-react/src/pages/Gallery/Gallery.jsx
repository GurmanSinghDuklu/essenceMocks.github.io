import './Gallery.css'

const BOOK_URL = 'https://bookings.gettimely.com/essencehairtreatment/bb/book'
const IG_URL = 'https://www.instagram.com/essence.hairtreatment/'

const galleryImages = [
  '/img-new-01.jpg','/img-new-02.jpg','/img-new-03.jpg','/img-new-04.jpg',
  '/img-new-06.jpg','/img-new-07.jpg','/img-new-08.jpg','/img-new-09.jpg',
  '/img-new-10.jpg','/img-new-11.jpg','/img-new-12.jpg','/img-new-14.jpg',
  '/img-new-15.jpg','/img-new-16.jpg','/img-new-18.jpg','/img-new-19.jpg',
  '/img-new-20.jpg','/1000076210.jpg',
]

const igImages = ['/img-new-19.jpg','/img-new-06.jpg','/img-new-01.jpg','/img-new-18.jpg']

export default function Gallery() {
  return (
    <main>
      <div className="page-hero">
        <div className="ph-img"><img src="/img-new-19.jpg" alt="Gallery" /></div>
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
