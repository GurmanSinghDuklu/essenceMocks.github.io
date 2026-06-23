import './Services.css'

const BOOK_URL = 'https://bookings.gettimely.com/essencehairtreatment/bb/book'
const CONSULT_URL = 'https://bookings.gettimely.com/essencehairtreatment/book?uri=https%3A%2F%2Fbook.gettimely.com%2FBooking%2FLocation%2F290341%3Fmobile%3DTrue%26params%3D%25253fclient-login%25253dtrue'

function ServiceCard({ num, img, alt, name, desc, href }) {
  return (
    <div className="svc-card">
      <div className="svc-card-img"><img src={img} alt={alt} /></div>
      <div className="svc-card-body">
        <div className="svc-num">{num}</div>
        <h3 className="svc-name">{name}</h3>
        <p className="svc-desc">{desc}</p>
        <a href={href || BOOK_URL} className="book-link" target="_blank" rel="noreferrer">Book Now →</a>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <main>
      <div className="page-hero">
        <div className="ph-img"><img src="/1000076210.jpg" alt="Services" /></div>
        <div className="ph-ov" />
        <div className="ph-content">
          <div className="ph-tag">What We Offer</div>
          <h1 className="ph-title">Our <em>Services</em></h1>
        </div>
      </div>

      <div className="stabs">
        <a href="#colour" className="stab">Colour</a>
        <a href="#treatments" className="stab">Treatments</a>
        <a href="#spa" className="stab">Head Spa</a>
        <a href="#cut" className="stab">Cut &amp; Style</a>
        <a href="#extensions" className="stab">Extensions</a>
      </div>

      {/* COLOUR */}
      <section className="svc-section" id="colour">
        <div className="sec-head">
          <div className="sh-left"><div className="st">Colour Services</div><h2><em>Colour Services</em></h2></div>
          <div className="sh-right">Expert colour techniques that enhance your natural beauty and grow out effortlessly. All colour services include a bonding treatment for integrity and shine.</div>
        </div>
        <div className="svc-grid-4">
          <ServiceCard num="01" img="/img-new-06.jpg" alt="Balayage" name={<><em>Balayage</em></>} desc="A freehand technique creating a natural, sun-kissed look with soft blended highlights. Low-maintenance colour with no harsh regrowth lines." />
          <ServiceCard num="02" img="/img-new-08.jpg" alt="Highlights" name={<><em>Highlights</em></>} desc="Precision highlights to add depth, dimension, and brightness — customised to your skin tone and hair type for a seamless, natural finish." />
          <ServiceCard num="03" img="/img-new-10.jpg" alt="Tint" name={<><em>Tint</em></>} desc="Full head or root tint for rich, all-over colour. Bespoke shade mixing to achieve your perfect tone with lasting vibrancy." />
          <ServiceCard num="04" img="/img-new-11.jpg" alt="Grey Coverage" name={<>Grey <em>Coverage</em></>} desc="Seamless grey root coverage blending naturally with your existing colour. Long-lasting results that grow out gracefully without harsh lines." />
        </div>
      </section>

      {/* TREATMENTS */}
      <section className="svc-section bg-beige" id="treatments">
        <div className="sec-head">
          <div className="sh-left"><div className="st">Hair Treatments</div><h2>&amp; <em>Restoration</em></h2></div>
          <div className="sh-right">100% organic and formaldehyde-free treatments that deliver lasting, transformative results without compromising the health of your hair.</div>
        </div>
        <div className="svc-grid">
          <ServiceCard num="01 — Organic · Formaldehyde-Free" img="/img-new-03.jpg" alt="Nanoplastia" name={<><em>Nanoplastia</em></>} desc="Works at a molecular level to deeply hydrate and smooth the hair shaft. Reduces frizz while preserving your natural curl pattern. Safe for all hair types including colour-treated hair." />
          <ServiceCard num="02 — Organic · Formaldehyde-Free" img="/img-new-12.jpg" alt="Keratin" name={<>Keratin <em>Treatment</em></>} desc="Replenishes the hair's natural protein structure — eliminating frizz, adding extraordinary shine, and leaving hair smooth and effortlessly manageable." />
          <ServiceCard num="03 — Deep Restoration" img="/img-new-14.jpg" alt="Hair Botox" name={<>Hair <em>Botox</em></>} desc="An intensive treatment that fills damaged gaps in the hair shaft, rebuilding volume, softness, and smoothness from within. Ideal for over-processed or colour-damaged hair." />
        </div>
      </section>

      {/* HEAD SPA */}
      <section className="svc-section" id="spa">
        <div className="sec-head">
          <div className="sh-left"><div className="st">Wellness</div><h2>Head Spa &amp; <em>Scalp Care</em></h2></div>
          <div className="sh-right">Therapeutic rituals tailored to your specific scalp concern. Using argan oil, amino acid, and aloe-infused formulas to restore balance from root to tip.</div>
        </div>
        <div className="svc-grid" style={{gridTemplateColumns:'1fr'}}>
          <ServiceCard num="01" img="/1000076199.jpg" alt="Head spa" name={<>Head <em>Spa</em></>} desc="A therapeutic scalp and hair ritual tailored to your specific needs — from hair growth stimulation and scalp detox to deep conditioning and hydration. Using argan oil, amino acid, and aloe-infused formulas to restore balance from root to tip." />
        </div>
      </section>

      {/* CUT & STYLE */}
      <section className="svc-section bg-ow" id="cut">
        <div className="sec-head">
          <div className="sh-left"><div className="st">Everyday Luxury</div><h2>Cut, Blow Dry &amp; <em>Style</em></h2></div>
          <div className="sh-right">A full wash, expert cut, and style tailored precisely to your hair type and preferred finish — bouncy, sleek, or waves.</div>
        </div>
        <div className="svc-grid" style={{gridTemplateColumns:'1fr 1fr'}}>
          <ServiceCard num="01" img="/img-new-15.jpg" alt="Cut & Blowdry" name={<>Cut &amp; <em>Blow Dry</em></>} desc="Expert cut tailored to your face shape and hair texture, finished with a blow dry to your preferred style — bouncy, sleek, or waves." />
          <ServiceCard num="02" img="/img-new-18.jpg" alt="Wash & Style" name={<>Wash &amp; <em>Style</em></>} desc="Professional wash with salon-grade products and a relaxing scalp massage, followed by a full style finish of your choice." />
        </div>
      </section>

      {/* EXTENSIONS */}
      <section className="svc-section" id="extensions">
        <div className="sec-head">
          <div className="sh-left"><div className="st">Volume &amp; Length</div><h2>Tape Hair <em>Extensions</em></h2></div>
          <div className="sh-right">Lightweight, virtually invisible extensions that move exactly like your own hair. Applied with medical-grade adhesive for a seamless, natural-looking blend.</div>
        </div>
        <div className="svc-grid" style={{gridTemplateColumns:'1fr 1fr'}}>
          <ServiceCard num="01 — Semi-Permanent" img="/img-new-04.jpg" alt="Extensions" name={<>Hair <em>Extensions</em></>} desc="Applied with medical-grade adhesive that lies flat against the scalp — completely undetectable even when your hair is up. Lasts 6–8 weeks between appointments." />
          <ServiceCard num="02 — First Time?" img="/img-new-20.jpg" alt="Extension consultation" name={<>Extension <em>Consultation</em></>} desc="New to extensions? Start with a consultation to match your shade, discuss length goals, and get a full rundown of aftercare and maintenance." href={CONSULT_URL} />
        </div>
      </section>

      <div className="svc-cta">
        <h2>Ready for your <em>transformation?</em></h2>
        <p>Book online or WhatsApp us to discuss your treatment. Deposit required to confirm your appointment.</p>
        <a href={BOOK_URL} className="btn-wh" target="_blank" rel="noreferrer">Book Now</a>
        <p style={{fontSize:'11px',letterSpacing:'.18em',textTransform:'uppercase',color:'rgba(255,255,255,.35)',marginTop:'16px'}}>Price list available on request</p>
      </div>
    </main>
  )
}
