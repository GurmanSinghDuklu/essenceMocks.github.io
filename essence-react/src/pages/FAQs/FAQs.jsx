import './FAQs.css'
import useSEO from '../../hooks/useSEO'
import { PAGES, BOOK_URL } from '../../seo'
import { FAQ_GROUPS } from './faqData'
import AccordionItem from '../../components/Accordion/Accordion'

export default function FAQs() {
  useSEO(PAGES['/faqs'])
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
