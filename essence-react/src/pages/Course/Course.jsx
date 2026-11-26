import { Link } from 'react-router-dom'
import '../Services/Services.css'
import '../Landing/Landing.css'
import './Course.css'
import useSEO from '../../hooks/useSEO'
import AccordionItem from '../../components/Accordion/Accordion'
import { PAGES, BOOK_URL, CONSULT_URL, BUSINESS } from '../../seo'
import { COURSES, courseFaqs } from '../Academy/courses'

const WHY = [
  ['One-to-one, start to finish', 'Every course is personal training: undivided attention, honest feedback, real models and real products, in our working salon.'],
  ['A free shadowing day', 'After your course, spend a day watching real client appointments in our salon to build genuine confidence.'],
  ['Support after you qualify', 'Free online support, with expert guidance and Q&A as you grow your client base. We don’t disappear after training.'],
]

export default function Course({ path }) {
  const c = COURSES[path]
  useSEO(PAGES[path])
  const details = [
    ['Duration', c.duration],
    ['Investment', `£${c.price}`],
    ['Certification', 'ABT Accredited'],
    ...c.details,
    ['Format', 'One-to-one, hands-on'],
    ['Includes', 'Manual, certificate, shadowing day, online support'],
  ]

  return (
    <main>
      <div className="page-hero">
        <div className="ph-img"><img fetchPriority="high" src={c.hero.img} alt={c.hero.alt} /></div>
        <div className="ph-ov" />
        <div className="ph-content">
          <div className="ph-tag">Essence Academy · Luton, Bedfordshire</div>
          <h1 className="ph-title">{c.title}</h1>
        </div>
      </div>

      <nav className="crs-crumbs" aria-label="Breadcrumb">
        <Link to="/">Home</Link><span aria-hidden="true">/</span>
        <Link to="/academy">Academy</Link><span aria-hidden="true">/</span>
        <span aria-current="page">{c.name}</span>
      </nav>

      <section className="lp-intro">
        <p className="lp-lead">{c.lead}</p>
        <div className="lp-facts">
          <span>£{c.price}</span>
          <span>{c.duration}</span>
          <span>ABT accredited</span>
          <span>One-to-one</span>
        </div>
        <div className="lp-actions">
          <a href={BOOK_URL} className="btn-blk" target="_blank" rel="noreferrer">Enrol — £{c.price}</a>
          <a href={CONSULT_URL} className="btn-outline-blk" target="_blank" rel="noreferrer">Book a Free Consultation</a>
        </div>
      </section>

      <section className="svc-section bg-beige">
        <div className="sec-head">
          <div className="sh-left"><h2>What you’ll <em>learn</em></h2></div>
          <div className="sh-right">{c.who}</div>
        </div>
        <div className="crs-grid">
          <ul className="crs-learn">
            {c.learn.map(item => <li key={item}>{item}</li>)}
          </ul>
          <dl className="crs-details">
            {details.map(([label, value]) => (
              <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
            ))}
          </dl>
        </div>
      </section>

      <section className="svc-section">
        <div className="sec-head">
          <div className="sh-left"><h2>Why train with <em>Essence</em></h2></div>
          <div className="sh-right">Essence Academy is ABT accredited and runs from our salon in Luton, rated 5.0 from 300+ Google reviews. <Link to={c.service.to} className="sh-link">{c.service.label} →</Link></div>
        </div>
        <ul className="lp-why">
          {WHY.map(([title, text]) => (
            <li key={title}><h3>{title}</h3><p>{text}</p></li>
          ))}
        </ul>
      </section>

      <section className="svc-section bg-ow">
        <div className="sec-head">
          <div className="sh-left"><h2>How the course <em>runs</em></h2></div>
          <div className="sh-right">From choosing your course to working with your own clients.</div>
        </div>
        <ol className="lp-steps">
          {[
            ['Choose your course', <>Enrol online, or <a href={CONSULT_URL} target="_blank" rel="noreferrer">book a free consultation</a> if you’re not sure which course is right for you.</>],
            ['Watch first', 'We demonstrate and break down every step, explaining the why behind each decision, not just the how.'],
            ['Your turn', 'You work hands-on with real models and real products, with guidance and support throughout.'],
            ['Certified and supported', 'Leave with your ABT-accredited certificate and training manual, then join us for your free shadowing day.'],
          ].map(([title, text], i) => (
            <li key={title}>
              <div className="lp-step-num">{String(i + 1).padStart(2, '0')}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="svc-section">
        <div className="sec-head">
          <div className="sh-left"><h2>Course <em>questions</em></h2></div>
          <div className="sh-right">Something else you’d like to know? Call or WhatsApp 07375 956 131.</div>
        </div>
        <div className="lp-faqs">
          {courseFaqs(c).map(f => <AccordionItem key={f.q} q={f.q} a={f.a} />)}
        </div>
      </section>

      <section className="svc-section bg-beige">
        <div className="sec-head">
          <div className="sh-left"><h2>Related <em>courses</em></h2></div>
          <div className="sh-right"><Link to="/academy" className="sh-link">All Essence Academy courses →</Link></div>
        </div>
        <div className="crs-related">
          {c.related.map(to => {
            const r = COURSES[to]
            return (
              <Link to={to} className="crs-rel" key={to}>
                <div className="crs-rel-tag">{r.tag}</div>
                <h3>{r.cardName}</h3>
                <p>£{r.price} · {r.duration}</p>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="svc-section lp-visit">
        <div>
          <h2>Training in <em>Luton</em></h2>
          <p>Courses take place in our working salon at {BUSINESS.streetAddress}, {BUSINESS.addressLocality} {BUSINESS.postalCode}, in north Luton, with free street parking outside. It’s easy to reach from across Bedfordshire, Hertfordshire and Buckinghamshire, including Dunstable, Leighton Buzzard, Harpenden, Hitchin and Bedford.</p>
        </div>
      </section>

      <div className="svc-cta">
        <h2>Ready to <em>train?</em></h2>
        <p>Every course is one-to-one, so spaces are limited. Payment plans are available.</p>
        <a href={BOOK_URL} className="btn-wh" target="_blank" rel="noreferrer">Enrol Now</a>
      </div>
    </main>
  )
}
