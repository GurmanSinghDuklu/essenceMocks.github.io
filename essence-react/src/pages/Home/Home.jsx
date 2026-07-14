import { Link } from 'react-router-dom'
import './Home.css'
import InstagramFeed from '../../components/InstagramFeed/InstagramFeed'
import useSEO from '../../hooks/useSEO'

const BOOK_URL = 'https://bookings.gettimely.com/essencehairtreatment/bb/book'

const marqueeItems = ['Balayage','Nanoplastia','Keratin','Hair Botox','Head Spa','Extensions','Cut & Style','ABT Accredited Academy','Luton']

const services = [
  { num:'01', img:'/WhatsApp Image 2026-07-06 at 21.30.04.jpeg', name:<>Balayage &amp; <em>Colour Services</em></>, desc:'Refresh, enhance, or completely transform your hair with our professional colour services. From root touch-ups and grey coverage to balayage, highlights, and full colour transformations, every service is tailored to suit your style and hair goals.' },
  { num:'02', img:'/WhatsApp Image 2026-07-06 at 21.30.24.jpeg', name:<>Hair <em>Extensions</em></>, desc:'Transform your hair with our premium extension services, tailored to your individual needs and lifestyle. We offer professional colour matching to ensure a seamless, natural blend with your own hair, creating the perfect look and finish.' },
  { num:'03', img:'/WhatsApp Image 2026-07-06 at 21.34.12.jpeg', name:<>Hair <em>Treatments</em></>, desc:'Restore the health and beauty of your hair with our specialist treatment services. From smoothing and strengthening with Nanoplastia and Keratin Treatments to relaxing Head Spa experiences that promote healthy hair and scalp health.' },
  { num:'04', img:'/cut.jpg', name:<>Cut &amp; <em>Style</em></>, desc:'Need a little pick-me-up? Whether you\'re looking for a fresh haircut, a complete restyle, or simply some time to relax, we\'ve got you covered. From quick refreshes to full transformations, we\'re here to help you look and feel your best.' },
]

const testimonials = [
  { text: 'Went in for a keratin treatment before my holiday as my hair is very curly and frizzy. They did such an amazing job — no frizz and my hair is so much easier to maintain. Will be a regular from now on.', author: 'Verified Client', service: 'Keratin Treatment' },
  { text: "Amazing salon, plenty of parking and easy to get to. I had a wash, cut and blow dry and I love my new hair — it feels so much healthier. I'm definitely coming back to Essence next time.", author: 'Henna', service: 'Cut, Wash & Blow Dry' },
  { text: 'I highly recommend the Nanoplastia treatment if you struggle with unmanageable hair. I have thick, frizzy, curly hair and this has drastically reduced my styling time — cutting it in half.', author: 'Tamanna', service: 'Nanoplastia Treatment' },
]

export default function Home() {
  useSEO({
    title: 'Hair Salon Luton | Balayage, Extensions & Treatments | Essence',
    description: 'Award-worthy hair salon in Luton, Bedfordshire. Balayage, highlights, hair extensions, Nanoplastia & Keratin treatments. Book your appointment online today.',
    canonical: 'https://www.essencehairtreatment.co.uk/',
    ogImage: 'https://www.essencehairtreatment.co.uk/essencelogo.jpg',
  })
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-img">
          <img src="/instagram/WhatsApp Image 2026-06-25 at 22.36.46.jpeg" alt="Essence Hair Treatment" />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-tag">Luton's Premier Hair Studio</div>
          <h1 className="hero-title">More Than Hair—A Place to Relax, Refresh &amp; Feel Your Best.</h1>
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
          <img src="/studio.jpg" alt="Essence studio interior" />
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
          {services.map(s => (
            <div className="svc" key={s.num}>
              <div className="svc-img"><img src={s.img} alt="" /></div>
              <div className="svc-info">
                <div className="svc-num">{s.num}</div>
                <div className="svc-name">{s.name}</div>
                <p className="svc-desc">{s.desc}</p>
                <Link to="/services" className="svc-link">Book Now</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrap">
        <div className="marquee">
          {[0,1].map(i => (
            <div className="marquee-item" key={i}>
              {marqueeItems.map(t => (
                <span key={t}>{t}<span className="marquee-dot" style={{display:'inline-block',width:'3px',height:'3px',borderRadius:'50%',background:'rgba(255,255,255,.3)',margin:'0 20px',verticalAlign:'middle'}} /></span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* FULL BLEED */}
      <div className="full-bleed">
        <img src="/WhatsApp Image 2026-07-06 at 21.43.25.jpeg" alt="Hair transformation" />
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
          {testimonials.map(t => (
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

      {/* INSTAGRAM FEED */}
      <InstagramFeed />

      {/* CONTACT STRIP */}
      <section className="contact-strip">
        <div className="cs-text">
          <div className="section-tag">Get in Touch</div>
          <h2 className="section-title" style={{marginBottom:'36px'}}>Find <em>Us</em></h2>
          <p className="body-text" style={{marginBottom:'32px'}}>All appointments are by booking only. Book online, call, or WhatsApp us.</p>
          <div style={{display:'flex',flexDirection:'column',gap:'20px',marginBottom:'36px'}}>
            <div className="cs-detail"><div className="cs-detail-icon">📍</div><div className="cs-detail-text"><strong>Address</strong>6 Woodmere, Luton, Bedfordshire · Free street parking available</div></div>
            <div className="cs-detail"><div className="cs-detail-icon">📞</div><div className="cs-detail-text"><strong>Phone / WhatsApp</strong><a href="tel:+447375956131">07375 956 131</a></div></div>
            <div className="cs-detail"><div className="cs-detail-icon">🕐</div><div className="cs-detail-text"><strong>Booking</strong>Appointments can be made via the booking link, or by calling/WhatsApp: <a href="tel:+447375956131">07375 956 131</a>. A deposit is required to confirm.</div></div>
          </div>
          <a href={BOOK_URL} className="btn-blk" target="_blank" rel="noreferrer">Book Online</a>
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
