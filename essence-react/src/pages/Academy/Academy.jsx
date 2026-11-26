import { Link } from 'react-router-dom'
import './Academy.css'
import useSEO from '../../hooks/useSEO'
import { PAGES } from '../../seo'
import { COURSES } from './courses'

const [[featuredPath, featured], ...rest] = Object.entries(COURSES)

const BOOK_URL = 'https://bookings.gettimely.com/essencehairtreatment/bb/book'
const CONSULT_URL = 'https://bookings.gettimely.com/essencehairtreatment/book?uri=https%3A%2F%2Fbook.gettimely.com%2FBooking%2FLocation%2F290341%3Fmobile%3DTrue%26params%3D%25253fclient-login%25253dtrue'

function CourseCard({ path, c }) {
  const [extra, extraVal] = c.details[0]
  return (
    <div className="ac-course">
      <div className="ac-c-num">{c.num}</div>
      <div className="ac-c-tag">{c.tag}</div>
      <h3 className="ac-c-name"><Link to={path} className="ac-c-link">{c.cardName}</Link></h3>
      <p className="ac-c-desc">{c.cardDesc}</p>
      <div className="ac-c-meta">
        <div><div className="ac-cm-label">Duration</div><div className="ac-cm-val">{c.duration.replace(' (1 Full Day)', '')}</div></div>
        <div><div className="ac-cm-label">Investment</div><div className="ac-cm-val">£{c.price}</div></div>
        <div><div className="ac-cm-label">Certification</div><div className="ac-cm-val">ABT Accredited</div></div>
        <div><div className="ac-cm-label">{extra}</div><div className="ac-cm-val">{extraVal}</div></div>
      </div>
      <div className="ac-c-links">
        <Link to={path} className="ac-book-link">Course Details →</Link>
        <a href={BOOK_URL} className="ac-book-link" target="_blank" rel="noreferrer">Enrol Now →</a>
      </div>
    </div>
  )
}

export default function Academy() {
  useSEO(PAGES['/academy'])
  return (
    <main>
      {/* HERO */}
      <div className="page-hero">
        <div className="ph-img"><img fetchPriority="high" src="/img-new-17.webp" alt="Essence Academy trainer presenting a training certificate to a student in the Luton salon" /></div>
        <div className="ph-ov" />
        <div className="ph-content">
          <div className="ph-tag">ABT Accredited · Luton &amp; Bedfordshire</div>
          <h1 className="ph-title">Hair Training <em>Academy</em></h1>
        </div>
      </div>

      {/* STATS */}
      <div className="ac-stats">
        <div className="ac-stat"><div className="ac-stat-num">10</div><div className="ac-stat-label">Accredited Courses</div></div>
        <div className="ac-stat"><div className="ac-stat-num">ABT</div><div className="ac-stat-label">Accreditation</div></div>
        <div className="ac-stat"><div className="ac-stat-num">1</div><div className="ac-stat-label">Free Shadowing Day</div></div>
        <div className="ac-stat"><div className="ac-stat-num">∞</div><div className="ac-stat-label">Online Support</div></div>
      </div>

      {/* PROMISE */}
      <section className="ac-promise">
        <div className="ac-promise-head">
          <div className="ac-sec-tag">Our Promise</div>
          <h2 className="ac-sec-title">What every student <em>receives</em></h2>
        </div>
        <div className="ac-promise-grid">
          <div className="ac-pi">
            <div className="ac-pi-icon">🏅</div>
            <div className="ac-pi-title">ABT Accredited</div>
            <p className="ac-pi-body">Every course carries full ABT accreditation — Insurance discounts with ABT available</p>
          </div>
          <div className="ac-pi">
            <div className="ac-pi-icon">👁</div>
            <div className="ac-pi-title">Shadowing Day Included</div>
            <p className="ac-pi-body">1 free shadowing day after every course. Watch real client appointments and build genuine confidence.</p>
          </div>
          <div className="ac-pi">
            <div className="ac-pi-icon">💬</div>
            <div className="ac-pi-title">Free Online Support</div>
            <p className="ac-pi-body">Expert guidance and Q&amp;A as you grow your client base — we don't disappear after training.</p>
          </div>
          <div className="ac-pi">
            <div className="ac-pi-icon">◇</div>
            <div className="ac-pi-title">Personal 1-to-1 Training</div>
            <p className="ac-pi-body">Every course is delivered one-to-one — undivided attention, honest feedback, and a result you're proud of.</p>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className="ac-courses" id="courses">
        <div className="ac-courses-intro">
          <div className="ac-ci-l">
            <div className="ac-sec-tag">Our Courses</div>
            <h2>Fully Accredited <em>Training</em></h2>
          </div>
          <div className="ac-ci-r">Essence Academy is an ABT-accredited hair training academy in Luton, Bedfordshire, run from our working salon. Every course is delivered hands-on, 1-to-1 — real models, real products, real feedback with undivided attention throughout. All include a free shadowing day, extensive training manual, and ongoing online support. Not sure which course is right for you? <a href={CONSULT_URL} target="_blank" rel="noreferrer" style={{color:'inherit'}}><strong>Book a free consultation</strong></a> and we'll help you find the perfect fit.</div>
        </div>

        <div className="ac-courses-grid">
          {/* Featured: Balayage Masterclass */}
          <div className="ac-course feat">
            <div className="feat-l">
              <div className="ac-c-num">{featured.num}</div>
              <div className="ac-c-tag">{featured.tag}</div>
              <h3 className="ac-c-name"><Link to={featuredPath} className="ac-c-link">{featured.cardName}</Link></h3>
              <p className="ac-c-desc">{featured.cardDesc}</p>
              <p className="ac-c-desc">First I demonstrate and break down every step, then it’s your turn — with support throughout.</p>
              <div className="ac-c-links">
                <Link to={featuredPath} className="ac-book-link">Course Details →</Link>
                <a href={BOOK_URL} className="ac-book-link" target="_blank" rel="noreferrer">Enrol — £{featured.price} →</a>
              </div>
            </div>
            <div className="feat-r">
              <div>
                <div className="ac-learn-head">You Will Learn</div>
                <ul className="ac-learn-list">
                  {featured.learn.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
              <div>
                <div className="ac-detail-head">Course Details</div>
                <div className="ac-detail-rows">
                  <div><div className="ac-cm-label">Duration</div><div className="ac-cm-val">{featured.duration}</div></div>
                  <div><div className="ac-cm-label">Investment</div><div className="ac-cm-val">£{featured.price}</div></div>
                  <div><div className="ac-cm-label">Certification</div><div className="ac-cm-val">ABT Accredited</div></div>
                  <div><div className="ac-cm-label">Includes</div><div className="ac-cm-val">Manual + Shadowing + Support</div></div>
                  {featured.details.map(([label, value]) => (
                    <div key={label}><div className="ac-cm-label">{label}</div><div className="ac-cm-val">{value}</div></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {rest.map(([path, c]) => <CourseCard key={path} path={path} c={c} />)}
        </div>
      </section>

      {/* ENROL CTA */}
      <section className="ac-enrol">
        <div className="ac-e-tag">Ready to Train?</div>
        <h2 className="ac-e-title">Invest in your <em>future</em> today.</h2>
        <div className="ac-e-rule" />
        <div className="ac-e-stats">
          <div className="ac-es"><div className="ac-es-num">10</div><div className="ac-es-label">Accredited Courses</div></div>
          <div className="ac-es"><div className="ac-es-num">1</div><div className="ac-es-label">Free Shadowing Day</div></div>
          <div className="ac-es"><div className="ac-es-num">∞</div><div className="ac-es-label">Online Support</div></div>
        </div>
        <p className="ac-e-body">Every course is personal 1-to-1 training — undivided attention, real models, real results. All courses include materials, certificate, a free shadowing day, and ongoing online support. Payment plans available. Spaces are limited.</p>
        <div style={{display:'flex',gap:'16px',justifyContent:'center',flexWrap:'wrap'}}>
          <a href={BOOK_URL} className="ac-btn-blk" target="_blank" rel="noreferrer">Enrol Now</a>
          <a href={CONSULT_URL} className="ac-btn-outline" target="_blank" rel="noreferrer">Book Free Consultation</a>
        </div>
        <p style={{fontSize:'11px',letterSpacing:'.18em',textTransform:'uppercase',color:'#9A9087',marginTop:'20px'}}><Link to="/prices" style={{color:'inherit'}}>View our salon price list →</Link></p>
      </section>
    </main>
  )
}
