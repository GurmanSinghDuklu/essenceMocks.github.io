import { useState } from 'react'
import './FAQs.css'

const BOOK_URL = 'https://bookings.gettimely.com/essencehairtreatment/bb/book'
const CONSULT_URL = 'https://bookings.gettimely.com/essencehairtreatment/book?uri=https%3A%2F%2Fbook.gettimely.com%2FBooking%2FLocation%2F290341%3Fmobile%3DTrue%26params%3D%25253fclient-login%25253dtrue'

const FAQ_GROUPS = [
  {
    id: 'booking',
    label: 'Booking',
    title: <>Booking &amp; <em>Appointments</em></>,
    items: [
      {
        q: 'How can I book an appointment?',
        a: <>Appointments can be booked via our <a href={BOOK_URL} target="_blank" rel="noreferrer">online booking system</a>. For questions, contact us on <a href="tel:+447375956131">07375 956 131</a>. Please allow 48–72 hours for a reply.<br /><br />For a specific date, allow at least 4 weeks' notice. Saturday appointments require 6 weeks' notice. Appointments are only confirmed once a deposit has been paid.</>,
      },
      {
        q: 'Do I need to pay a deposit?',
        a: 'Yes — appointments are only confirmed once a deposit has been paid. This secures your booking and is deducted from the total cost of your service.',
      },
      {
        q: 'How far in advance should I book?',
        a: "Allow at least 4 weeks' notice for a specific date. Saturday appointments require a minimum of 6 weeks' notice. We recommend booking as early as possible, especially around peak periods.",
      },
      {
        q: 'What is your cancellation policy?',
        a: 'No cancellations or changes are allowed within 2 days of the appointment. A minimum of 48 hours notice is required to cancel or rearrange. Failure to give sufficient notice will result in your deposit being forfeited, and a new deposit will be required to book again.',
      },
      {
        q: 'What happens if I am late?',
        a: 'If you are more than 10 minutes late, a £10 late fee will be charged. If you are 20 minutes or more late, your appointment may be cancelled. A new deposit will then be required to rebook.',
      },
      {
        q: 'How do I pay?',
        a: 'All payments on the day must be made in cash. Full payment is required before leaving your appointment.',
      },
    ],
  },
  {
    id: 'colour',
    label: 'Colour Services',
    title: <>Colour <em>Services</em></>,
    items: [
      {
        q: 'Do I need a patch test before a colour service?',
        a: (
          <>
            Yes — a patch test and consultation is required if:
            <ul>
              <li>You are a new client booking any colour service</li>
              <li>You have had a change in any medication</li>
              <li>It has been over 12 months since your last appointment</li>
            </ul>
            Patch tests take no more than 5–10 minutes and must be pre-booked. They cannot be done on the day of your appointment.
          </>
        ),
      },
      {
        q: 'How should I prepare for a colour service?',
        a: "Please ensure your hair is freshly washed. Bring inspiration photos if you have them. Wear comfortable clothing you don't mind getting stained, and avoid hooded tops.",
      },
      {
        q: 'Can you guarantee my colour results?',
        a: 'Whilst we provide expert treatments using only the best products, colour results can vary between individuals and cannot be guaranteed. We do not offer refunds if results fail to meet expectations. We always carry out a thorough consultation beforehand to align on what is achievable for your hair.',
      },
    ],
  },
  {
    id: 'treatments',
    label: 'Hair Treatments',
    title: <>Hair <em>Treatments</em></>,
    items: [
      {
        q: 'What is the difference between Nanoplastia and Keratin?',
        a: "Keratin replenishes your hair's natural protein, creating a smooth, frizz-free finish lasting 3–5 months. Nanoplastia works at a molecular level to restructure and hydrate — it's gentler and doesn't fully eliminate curl; it refines it. Both are 100% formaldehyde-free. We'll advise which suits your hair type during consultation.",
      },
      {
        q: 'Are the treatments safe? Do they contain formaldehyde?',
        a: 'All our treatments — Keratin, Nanoplastia, and Hair Botox - Formaldehyde-free. We use professional-grade, safe formulations that deliver exceptional results without compromising your health.',
      },
      {
        q: 'How long do smoothing treatments last?',
        a: 'Results typically last 3–5 months depending on your hair type and how often you wash. Using sulphate-free shampoos and conditioners significantly extends the life of all smoothing treatments.',
      },
      {
        q: 'Can I have a smoothing treatment on coloured hair?',
        a: "Yes — our treatments are safe for colour-treated hair. We recommend having colour done before your smoothing treatment, not after. We always assess your hair's condition before proceeding.",
      },
      {
        q: 'Are results guaranteed?',
        a: 'Treatment results vary depending on individual hair type and condition. Aftercare instructions must be strictly followed to maintain results. We do not offer refunds where results vary due to hair type or failure to follow aftercare guidance.',
      },
    ],
  },
  {
    id: 'extensions',
    label: 'Extensions',
    title: <>Hair <em>Extensions</em></>,
    items: [
      {
        q: 'What types of extensions do you offer?',
        a: 'We offer tape hair extensions — a semi-permanent, lightweight method that lies flat against the scalp and blends seamlessly with natural hair. Applied using medical-grade adhesive and lasting 6–8 weeks before a maintenance appointment.',
      },
      {
        q: 'Will extensions damage my natural hair?',
        a: 'When applied correctly and maintained properly, tape extensions cause no damage to natural hair. We use medical-grade adhesive that is gentle on the hair shaft, and always assess your hair condition before fitting.',
      },
      {
        q: 'What is the aftercare and warranty policy for extensions?',
        a: 'Aftercare instructions must be strictly followed. Maintenance appointments must be booked within the provided time frame. Self-removal of extensions will invalidate any warranty on the hair.',
      },
    ],
  },
  {
    id: 'general',
    label: 'General',
    title: <><em>General</em> Questions</>,
    items: [
      {
        q: 'Where are you located?',
        a: 'We are based at 6 Woodmere, Luton, Bedfordshire. Free street parking is available directly outside. We operate by appointment only — walk-ins are not available.',
      },
      {
        q: 'Do you offer consultations?',
        a: <><a href={CONSULT_URL} target="_blank" rel="noreferrer">Book a consultation here</a> — required for new colour clients and available for all. They take 5–10 minutes and must be pre-booked. This is your opportunity to discuss your goals and ensure the right treatment is planned.</>,
      },
      {
        q: 'Do you offer training courses?',
        a: <>Yes — through <a href="/academy">Essence Academy</a> we offer ABT accredited training in Balayage, Keratin, Nanoplastia, Hair Botox, Extensions, and Colour. All courses include a free shadowing day and ongoing online support.</>,
      },
    ],
  },
]

function AccordionItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button className="faq-q" onClick={() => setOpen(o => !o)} aria-expanded={open}>
        <span>{q}</span>
        <div className="faq-icon">{open ? '−' : '+'}</div>
      </button>
      <div className="faq-a-wrap">
        <div className="faq-a">{a}</div>
      </div>
    </div>
  )
}

export default function FAQs() {
  return (
    <main>
      <div className="page-hero">
        <div className="ph-img"><img src="/1000076197.jpg" alt="Frequently Asked Questions" /></div>
        <div className="ph-ov" />
        <div className="ph-content">
          <div className="ph-tag">Questions &amp; Answers</div>
          <h1 className="ph-title">Frequently Asked <em>Questions</em></h1>
        </div>
      </div>

      <div className="faq-layout">
        <nav className="faq-nav">
          <div className="fn-title">Jump to</div>
          <ul className="fn-links">
            {FAQ_GROUPS.map(g => (
              <li key={g.id}><a href={`#${g.id}`}>{g.label}</a></li>
            ))}
          </ul>
        </nav>

        <div className="faq-content">
          {FAQ_GROUPS.map(group => (
            <div className="faq-group" id={group.id} key={group.id}>
              <h2 className="fg-title">{group.title}</h2>
              {group.items.map(item => (
                <AccordionItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="cta-strip">
        <h3>Still have questions? <em>Get in touch.</em></h3>
        <div className="cta-actions">
          <a href="tel:+447375956131" className="btn-wh">Call 07375 956 131</a>
          <a href={BOOK_URL} className="btn-wh btn-wh--outline" target="_blank" rel="noreferrer">Book Online</a>
        </div>
        <p style={{fontSize:'11px',letterSpacing:'.18em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginTop:'16px',width:'100%',textAlign:'center'}}>Price list available on request</p>
      </div>
    </main>
  )
}
