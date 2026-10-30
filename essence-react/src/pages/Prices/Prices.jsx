import { Link } from 'react-router-dom'
import '../Services/Services.css'
import '../Landing/Landing.css'
import './Prices.css'
import useSEO from '../../hooks/useSEO'
import PriceList from '../../components/PriceList/PriceList'
import { PAGES, BOOK_URL, CONSULT_URL } from '../../seo'
import { PRICE_SECTIONS, PRICES_UPDATED } from '../../prices'

export default function Prices() {
  useSEO(PAGES['/prices'])
  return (
    <main>
      <div className="page-hero">
        <div className="ph-img"><img fetchPriority="high" src="/essence-gown-blowdry.webp" alt="Mid-length bronde hair with soft waves, in an Essence Hair Treatment gown at the Luton salon" /></div>
        <div className="ph-ov" />
        <div className="ph-content">
          <div className="ph-tag">Essence · Luton, Bedfordshire</div>
          <h1 className="ph-title">Price <em>List</em></h1>
        </div>
      </div>

      <section className="lp-intro">
        <p className="lp-lead">Prices for every service at Essence Hair Treatment in Luton, Bedfordshire: balayage, highlights, colour, Nanoplastia, Keratin, Hair Botox, head spa, cuts and hair extensions.</p>
        <ul className="pr-notes">
          <li>Prices depend on your hair’s length and thickness. We’ll confirm yours at your consultation.</li>
          <li>Colour consultations, patch tests and extension consultations are free. Patch tests must be <a href={CONSULT_URL} target="_blank" rel="noreferrer">booked in advance</a>.</li>
          <li>A deposit confirms your booking, and payment on the day is cash.</li>
        </ul>
        <div className="lp-actions">
          <a href={BOOK_URL} className="btn-blk" target="_blank" rel="noreferrer">Book Online</a>
          <a href="tel:+447375956131" className="btn-outline-blk">Call 07375 956 131</a>
        </div>
      </section>

      {PRICE_SECTIONS.map((section, i) => (
        <section className={`svc-section ${i % 2 === 0 ? 'bg-beige' : 'bg-ow'}`} key={section.title}>
          <div className="sec-head">
            <div className="sh-left"><h2>{section.title}</h2></div>
          </div>
          <PriceList groups={section.groups} />
        </section>
      ))}

      <section className="svc-section">
        <p className="pr-updated">Prices last updated {PRICES_UPDATED}. Not sure what to book? <Link to="/faqs">Read our FAQs</Link> or call us on <a href="tel:+447375956131">07375 956 131</a>.</p>
      </section>

      <div className="svc-cta">
        <h2>Ready to <em>book?</em></h2>
        <p>Book online or call/WhatsApp 07375 956 131. A deposit is required to confirm your appointment.</p>
        <a href={BOOK_URL} className="btn-wh" target="_blank" rel="noreferrer">Book Now</a>
      </div>
    </main>
  )
}
