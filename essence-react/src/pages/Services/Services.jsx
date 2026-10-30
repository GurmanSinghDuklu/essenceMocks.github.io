import { Link } from 'react-router-dom'
import './Services.css'
import useSEO from '../../hooks/useSEO'
import { PAGES } from '../../seo'

const BOOK_URL = 'https://bookings.gettimely.com/essencehairtreatment/bb/book'
const CONSULT_URL = 'https://bookings.gettimely.com/essencehairtreatment/book?uri=https%3A%2F%2Fbook.gettimely.com%2FBooking%2FLocation%2F290341%3Fmobile%3DTrue%26params%3D%25253fclient-login%25253dtrue'

function ServiceCard({ num, img, alt, name, desc, href, more }) {
  return (
    <div className="svc-card">
      <div className="svc-card-img"><img loading="lazy" decoding="async" src={img} alt={alt} /></div>
      <div className="svc-card-body">
        <div className="svc-num">{num}</div>
        <h3 className="svc-name">{name}</h3>
        <p className="svc-desc">{desc}</p>
        {more && <Link to={more[0]} className="more-link">{more[1]} in Bedfordshire →</Link>}
        <a href={href || BOOK_URL} className="book-link" target="_blank" rel="noreferrer">Book Now →</a>
      </div>
    </div>
  )
}

export default function Services() {
  useSEO(PAGES['/services'])
  return (
    <main>
      <div className="page-hero">
        <div className="ph-img"><img fetchPriority="high" src="/1000076210.webp" alt="Inside the Essence Hair & Academy salon in Luton" /></div>
        <div className="ph-ov" />
        <div className="ph-content">
          <div className="ph-tag">What We Offer</div>
          <h1 className="ph-title">Our <em>Services</em></h1>
        </div>
      </div>

      <div className="stabs">
        <a href="#colour" className="stab">Colour</a>
        <a href="#treatments" className="stab">Treatments</a>
        <a href="#cut" className="stab">Cut &amp; Style</a>
        <a href="#extensions" className="stab">Extensions</a>
      </div>

      {/* COLOUR */}
      <section className="svc-section" id="colour">
        <div className="sec-head">
          <div className="sh-left"><h2><em>Colour Services</em></h2></div>
          <div className="sh-right">Refresh, enhance, or completely transform your hair with our professional colour services. From root touch-ups and grey coverage to balayage, highlights, and full colour transformations, every service is tailored to suit your style and hair goals. We use premium products and expert techniques to create beautiful, long-lasting results while keeping your hair healthy and vibrant. <Link to="/balayage-bedfordshire" className="sh-link">Balayage in Luton &amp; Bedfordshire →</Link></div>
        </div>
        <div className="svc-grid-4">
          <ServiceCard num="01" img="/img-new-06.webp" alt="Sun-kissed blonde balayage on long, loose curls" more={['/balayage-bedfordshire', 'Balayage']} name={<><em>Balayage</em></>} desc="Our bespoke balayage service is designed to create soft, natural-looking dimension and effortless brightness throughout your hair. Every colour appointment includes a bonding treatment to help protect and strengthen the hair during the colouring process, along with bespoke toning to achieve your perfect shade. The result is beautifully blended, healthy-looking hair with a radiant, customised finish." />
          <ServiceCard num="02" img="/img-new-08.webp" alt="Bronde highlights with soft, bouncy curls" more={['/highlights-bedfordshire', 'Highlights']} name={<><em>Highlights</em></>} desc="Refresh your look with beautifully placed highlights, customised to create your desired level of brightness, depth, and dimension. Every colour service includes a bonding treatment to help protect and strengthen your hair throughout the colouring process, followed by bespoke toning to perfect your shade. The result is vibrant, healthy-looking colour with a seamless, polished finish." />
          <ServiceCard num="03" img="/tint.webp" alt="Rich chocolate-brown tint with glossy curls" more={['/hair-colour-bedfordshire', 'Hair colour']} name={<><em>Tint</em></>} desc="Achieve rich, even colour with our bespoke hair tint service, tailored to enhance your natural shade or create a completely new look. Every colour appointment includes a bonding treatment to help maintain the strength and condition of your hair throughout the colouring process. Enjoy beautifully glossy, healthy-looking colour with a flawless finish." />
          <ServiceCard num="04" img="/img-new-11.webp" alt="Soft ash-brown colour with natural waves" more={['/hair-colour-bedfordshire', 'Grey coverage']} name={<>Grey <em>Coverage</em></>} desc="Maintain a fresh, youthful look with our bespoke grey coverage service, designed to blend or completely cover unwanted greys while enhancing your overall colour." />
        </div>
      </section>

      {/* TREATMENTS */}
      <section className="svc-section bg-beige" id="treatments">
        <div className="sec-head">
          <div className="sh-left"><h2><em>Hair Treatments</em></h2></div>
          <div className="sh-right">Restore, strengthen, and smooth your hair with our professional treatment services, designed to improve the overall health and condition of your hair. Our long-lasting treatments help reduce frizz, enhance shine, and make styling easier, leaving your hair more manageable day after day. Enjoy healthier, softer, and more resilient hair with results that last beyond your salon visit. <Link to="/head-spa-bedfordshire" className="sh-link">Head spa in Luton &amp; Bedfordshire →</Link></div>
        </div>
        <div className="svc-grid">
          <ServiceCard num="01 — Organic · Formaldehyde-Free" img="/img-new-03.webp" alt="Long, smooth, frizz-free hair after a Nanoplastia treatment" more={['/nanoplastia-bedfordshire', 'Nanoplastia']} name={<><em>Nanoplastia</em></>} desc="Transform frizzy, unruly hair with our Nanoplastia treatment, a long-lasting smoothing service that leaves hair softer, shinier, and more manageable. This innovative treatment helps reduce frizz, improve condition, and cut down styling time while maintaining natural movement and volume. Enjoy smooth, healthy-looking hair for months with lasting results." />
          <ServiceCard num="02 — Organic · Formaldehyde-Free" img="/keratin.webp" alt="Long, sleek jet-black hair after a Keratin smoothing treatment" more={['/keratin-treatment-bedfordshire', 'Keratin']} name={<>Keratin <em>Treatment</em></>} desc="Our Keratin treatment smooths, strengthens, and nourishes the hair, helping to reduce frizz and improve manageability. Perfect for taming unruly hair, it leaves your locks feeling softer, shinier, and easier to style. Enjoy smoother, healthier-looking hair with long-lasting results and reduced styling time." />
          <ServiceCard num="03 — Deep Restoration" img="/hair-botox.webp" alt="Long, smooth brunette hair with subtle highlights after Hair Botox" more={['/hair-botox-bedfordshire', 'Hair Botox']} name={<>Hair <em>Botox</em></>} desc="Our Hair Botox treatment deeply repairs and rejuvenates damaged hair, restoring softness, shine, and strength from root to tip. It helps smooth frizz, reduce breakage, and improve overall hair condition. Enjoy healthier, more manageable hair with results that last up to 4 months." />
        </div>
        </section>
      {/* CUT & STYLE */}
      <section className="svc-section bg-ow" id="cut">
        <div className="sec-head">
          <div className="sh-left"><h2>Cut, Blow Dry &amp; <em>Style</em></h2></div>
          <div className="sh-right">Need a little pick-me-up? Whether you're looking for a fresh haircut, a complete restyle, or simply some time to relax, we've got you covered. Pop in for a nourishing hair mask and luxury wash, enjoy a professional blow-dry, or let us add beautiful curls for that perfect finishing touch. From quick refreshes to full transformations, we're here to help you look and feel your best.</div>
        </div>
        <div className="svc-grid" style={{gridTemplateColumns:'1fr 1fr'}}>
          <ServiceCard num="01" img="/cut-blowdry.webp" alt="Voluminous brunette blow-dry with big, bouncy curls" name={<>Cut &amp; <em>Blow Dry</em></>} desc="Refresh your style with a personalised cut and a relaxing wash using professional salon products for a healthy, beautiful finish. If your hair needs extra care, we include nourishing hair masks to restore softness, shine, and condition. Completed with a professional blow dry, leaving your hair smooth, polished, and perfectly styled." />
          <ServiceCard num="02" img="/styling.webp" alt="Long blonde balayage styled in loose curls" name={<><em>Styling</em> Services</>} desc="Get the perfect finish with our professional styling services, including curls, waves, or a sleek straight look. Whether it's a special occasion or a simple refresh, we create long-lasting styles tailored to you. Finished with professional products for a smooth, polished result that holds beautifully." />
        </div>
      </section>

      {/* EXTENSIONS */}
      <section className="svc-section" id="extensions">
        <div className="sec-head">
          <div className="sh-left"><h2>Hair <em>Extensions</em></h2></div>
          <div className="sh-right">Enhance your length, volume, and overall look with our bespoke hair extension services, tailored to suit your individual style. We offer expert colour matching and a range of methods including nano rings, tape-ins, wefts, and hybrid applications to find the perfect fit for you. Using professional techniques and high-quality hair, we create seamless, natural-looking results designed to blend beautifully with your own hair. <Link to="/hair-extensions-bedfordshire" className="sh-link">Hair extensions in Luton &amp; Bedfordshire →</Link></div>
        </div>
        <div className="svc-grid" style={{gridTemplateColumns:'1fr 1fr'}}>
          <ServiceCard num="01 — Nano Rings" img="/img-new-04.webp" alt="Long, sleek jet-black hair with nano ring extensions" more={['/nano-ring-extensions-bedfordshire', 'Nano rings']} name={<>Nano Ring <em>Extensions</em></>} desc="Nano ring extensions are a discreet, lightweight method that adds natural-looking length and volume without heat or glue. Individually fitted for a seamless blend, they are gentle on the hair and suitable for most hair types. Enjoy beautiful, long-lasting results with flexible wear and easy maintenance." />
          <ServiceCard num="02 — Tape-In" img="/img-new-20.webp" alt="Long, straight brunette hair with tape-in extensions" more={['/tape-in-extensions-bedfordshire', 'Tape-ins']} name={<>Tape-In <em>Extensions</em></>} desc="Tape-in extensions are a quick and comfortable way to add instant length and volume with a natural, seamless finish. Applied using ultra-flat wefts, they sit discreetly against the scalp and blend effortlessly with your own hair. Lightweight and reusable, they're perfect for long-lasting, low-maintenance glamour." />
          <ServiceCard num="03 — LA Weave" img="/la-weave.webp" alt="Long, sleek brunette hair with LA Weave extensions" more={['/la-weave-extensions-bedfordshire', 'LA Weave']} name={<>LA Weave <em>Extensions</em></>} desc="LA Weave extensions are a secure and natural-looking method that adds instant length, volume, and thickness without heat or glue. Fitted using small beads and sewn-in wefts, they sit comfortably and blend seamlessly with your natural hair. A long-lasting, reusable option perfect for full, glamorous results with minimal maintenance." />
          <ServiceCard num="04 — Hybrid" img="/hybrid-extensions.webp" alt="Long icy-blonde balayage with hybrid hair extensions" more={['/hybrid-extensions-bedfordshire', 'Hybrids']} name={<>Hybrid <em>Extensions</em></>} desc="The hybrid method combines two extension techniques to create a fully customised, seamless result tailored to your hair type and desired look. By blending methods such as nano rings, tapes, or wefts, we achieve maximum comfort, flexibility, and a flawless finish. Perfect for clients wanting the most natural blend with added volume, length, and long-lasting wear." />
          <ServiceCard num="05 — First Time?" img="/brunette-waves.webp" alt="Long copper-brown waves" name={<>Extension <em>Consultation</em></>} desc="New to extensions? Start with a consultation to match your shade, discuss length goals, and get a full rundown of aftercare and maintenance." href={CONSULT_URL} />
        </div>
      </section>

      <div className="svc-cta">
        <h2>Ready for your <em>transformation?</em></h2>
        <p>Book online or WhatsApp us to discuss your treatment. Deposit required to confirm your appointment. <Link to="/prices" style={{color:'inherit'}}>See our price list</Link>.</p>
        <a href={BOOK_URL} className="btn-wh" target="_blank" rel="noreferrer">Book Now</a>
      </div>
    </main>
  )
}