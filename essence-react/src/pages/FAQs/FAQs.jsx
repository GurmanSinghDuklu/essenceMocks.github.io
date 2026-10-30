import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './FAQs.css'
import useSEO from '../../hooks/useSEO'
import { PAGES, BOOK_URL } from '../../seo'
import { FAQ_GROUPS } from './faqData'
import { SERVICE_FAQS } from './serviceFaqs'
import AccordionItem from '../../components/Accordion/Accordion'

// One dropdown per service; its questions and answers are always in the page (for
// search engines), just collapsed until opened.
function ServiceFaq({ group, open, onToggle }) {
  return (
    <section className={`sf-cat${open ? ' open' : ''}`} id={group.id}>
      <h3>
        <button className="sf-head" onClick={onToggle} aria-expanded={open} aria-controls={`${group.id}-answers`}>
          <span className="sf-label">{group.label}</span>
          <span className="sf-count">{group.items.length} questions</span>
          <span className="faq-icon">{open ? '−' : '+'}</span>
        </button>
      </h3>
      <div className="sf-wrap" id={`${group.id}-answers`} inert={!open}>
        <div className="sf-inner">
          {group.items.map(item => (
            <div className="sf-qa" key={item.q}>
              <h4>{item.q}</h4>
              <div className="faq-a">{item.a}</div>
            </div>
          ))}
          <Link to={group.page} className="sf-more">More about {group.label.toLowerCase()} →</Link>
        </div>
      </div>
    </section>
  )
}

export default function FAQs() {
  useSEO(PAGES['/faqs'])
  const [openId, setOpenId] = useState(null)

  // Open the dropdown the URL points at, e.g. /faqs#balayage, on load and when the hash changes.
  useEffect(() => {
    const openFromHash = () => {
      const id = window.location.hash.slice(1)
      if (!SERVICE_FAQS.some(g => g.id === id)) return
      setOpenId(id)
      document.getElementById(id)?.scrollIntoView()
    }
    const frame = requestAnimationFrame(openFromHash)
    window.addEventListener('hashchange', openFromHash)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('hashchange', openFromHash)
    }
  }, [])

  return (
    <main>
      <div className="page-hero">
        <div className="ph-img"><img fetchPriority="high" src="/1000076197.webp" alt="Close-up of a tape-in hair extension blended into caramel balayage waves" /></div>
        <div className="ph-ov" />
        <div className="ph-content">
          <div className="ph-tag">Questions &amp; Answers</div>
          <h1 className="ph-title">Frequently Asked <em>Questions</em></h1>
        </div>
      </div>

      <div className="faq-layout">
        <nav className="faq-nav">
          <div className="fn-title">By service</div>
          <ul className="fn-links">
            {SERVICE_FAQS.map(g => (
              <li key={g.id}><a href={`#${g.id}`} onClick={() => setOpenId(g.id)}>{g.label}</a></li>
            ))}
          </ul>
          <div className="fn-title fn-title--gap">Salon</div>
          <ul className="fn-links">
            {FAQ_GROUPS.map(g => (
              <li key={g.id}><a href={`#${g.id}`}>{g.label}</a></li>
            ))}
          </ul>
        </nav>

        <div className="faq-content">
          <div className="faq-group">
            <h2 className="fg-title">Questions by <em>service</em></h2>
            {SERVICE_FAQS.map(group => (
              <ServiceFaq key={group.id} group={group} open={openId === group.id} onToggle={() => setOpenId(id => (id === group.id ? null : group.id))} />
            ))}
          </div>

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
        <p style={{fontSize:'11px',letterSpacing:'.18em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginTop:'16px',width:'100%',textAlign:'center'}}><Link to="/prices" style={{color:'inherit'}}>View our price list →</Link></p>
      </div>
    </main>
  )
}
