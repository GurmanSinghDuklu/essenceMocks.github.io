import { Link } from 'react-router-dom'
import '../Services/Services.css'
import './Landing.css'
import useSEO from '../../hooks/useSEO'
import useReviews from '../../hooks/useReviews'
import AccordionItem from '../../components/Accordion/Accordion'
import { PAGES, BOOK_URL, BUSINESS, HOURS_TEXT } from '../../seo'
import { LANDINGS } from './landings'

export default function Landing({ path }) {
  const page = LANDINGS[path]
  useSEO(PAGES[path])
  const { summary, reviews } = useReviews()
  const quotes = reviews.filter(r => page.reviewMatch.test(r.service || ''))

  return (
    <main>
      <div className="page-hero">
        <div className="ph-img"><img src={page.hero.img} alt={page.hero.alt} /></div>
        <div className="ph-ov" />
        <div className="ph-content">
          <div className="ph-tag">{page.tag}</div>
          <h1 className="ph-title">{page.title}</h1>
        </div>
      </div>

      <section className="lp-intro">
        <p className="lp-lead">{page.lead}</p>
        <div className="lp-facts">
          <span>★ {summary.rating.toFixed(1)} · {summary.count}+ {summary.source} reviews</span>
          <span>{BUSINESS.streetAddress}, {BUSINESS.addressLocality} {BUSINESS.postalCode}</span>
          <span>Free street parking</span>
        </div>
        <div className="lp-actions">
          <a href={page.cta.href} className="btn-blk" target="_blank" rel="noreferrer">{page.cta.label}</a>
          <a href="tel:+447375956131" className="btn-outline-blk">Call 07375 956 131</a>
        </div>
      </section>

      <section className="svc-section bg-beige">
        <div className="sec-head">
          <div className="sh-left"><h2>{page.cardsHead.title}</h2></div>
          <div className="sh-right">{page.cardsHead.text}</div>
        </div>
        {page.cards && (
          <div className="svc-grid-4">
            {page.cards.map(c => (
              <div className="svc-card" key={c.img}>
                <div className="svc-card-img"><img src={c.img} alt={c.alt} /></div>
                <div className="svc-card-body">
                  <h3 className="svc-name">{c.name}</h3>
                  <p className="svc-desc">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {page.looks && (
          <div className="lp-looks">
            {page.looks.map(l => (
              <div className="lp-look" key={l.img}><img src={l.img} alt={l.alt} /></div>
            ))}
          </div>
        )}
      </section>

      <section className="svc-section bg-ow">
        <div className="sec-head">
          <div className="sh-left"><h2>How it <em>works</em></h2></div>
          <div className="sh-right">From your first visit to keeping your {page.service.toLowerCase()} looking its best.</div>
        </div>
        <ol className="lp-steps">
          {page.steps.map(([title, text], i) => (
            <li key={title}>
              <div className="lp-step-num">{String(i + 1).padStart(2, '0')}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
        <div className="lp-aftercare">
          <h3>Aftercare at home</h3>
          <ul>{page.aftercare.map(a => <li key={a}>{a}</li>)}</ul>
          <Link to="/top-tips">More aftercare tips →</Link>
        </div>
      </section>

      {quotes.length > 0 && (
        <section className="lp-quotes">
          {quotes.map(r => (
            <blockquote key={r.author}>
              <p>“{r.text}”</p>
              <cite>{r.author} · {r.service}</cite>
            </blockquote>
          ))}
        </section>
      )}

      <section className="svc-section">
        <div className="sec-head">
          <div className="sh-left"><h2>{page.service} <em>questions</em></h2></div>
          <div className="sh-right">More answers on our <Link to="/faqs">FAQs page</Link>.</div>
        </div>
        <div className="lp-faqs">
          {page.faqs.map(f => <AccordionItem key={f.q} q={f.q} a={f.a} />)}
        </div>
      </section>

      <section className="svc-section bg-beige lp-visit">
        <div>
          <h2>Visiting us from across <em>Bedfordshire</em></h2>
          <p>Our studio is at {BUSINESS.streetAddress}, {BUSINESS.addressLocality} {BUSINESS.postalCode}, in north Luton, with free street parking outside. It’s a short drive from Dunstable, Houghton Regis, Barton-le-Clay and Toddington, and easy to reach from Leighton Buzzard, Ampthill, Flitwick and Bedford. All appointments are by booking only.</p>
        </div>
        <dl className="lp-hours">
          {HOURS_TEXT.map(([days, time]) => (
            <div key={days}><dt>{days}</dt><dd>{time}</dd></div>
          ))}
        </dl>
      </section>

      <div className="svc-cta">
        <h2>Ready for your <em>{page.service.toLowerCase()}?</em></h2>
        <p>Book online or call/WhatsApp 07375 956 131. A deposit is required to confirm your appointment.</p>
        <a href={BOOK_URL} className="btn-wh" target="_blank" rel="noreferrer">Book Now</a>
      </div>
    </main>
  )
}
