import './Academy.css'

const BOOK_URL = 'https://bookings.gettimely.com/essencehairtreatment/bb/book'

function CourseCard({ num, tag, name, desc, duration, investment, certification, extra, extraVal, bookHref }) {
  return (
    <div className="ac-course">
      <div className="ac-c-num">{num}</div>
      <div className="ac-c-tag">{tag}</div>
      <h3 className="ac-c-name" dangerouslySetInnerHTML={{ __html: name }} />
      <p className="ac-c-desc">{desc}</p>
      <div className="ac-c-meta">
        <div><div className="ac-cm-label">Duration</div><div className="ac-cm-val">{duration}</div></div>
        <div><div className="ac-cm-label">Investment</div><div className="ac-cm-val">{investment}</div></div>
        <div><div className="ac-cm-label">Certification</div><div className="ac-cm-val">{certification}</div></div>
        {extra && <div><div className="ac-cm-label">{extra}</div><div className="ac-cm-val">{extraVal}</div></div>}
      </div>
      <a href={bookHref || BOOK_URL} className="ac-book-link" target="_blank" rel="noreferrer">Enrol Now →</a>
    </div>
  )
}

export default function Academy() {
  return (
    <main>
      {/* HERO */}
      <div className="page-hero">
        <div className="ph-img"><img src="/img-new-17.jpg" alt="Essence Academy" /></div>
        <div className="ph-ov" />
        <div className="ph-content">
          <div className="ph-tag">ABT Accredited</div>
          <h1 className="ph-title">The <em>Academy</em></h1>
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
          <div className="ac-ci-r">Every course is delivered hands-on, 1-to-1 — real models, real products, real feedback with undivided attention throughout. All include a free shadowing day, extensive training manual, and ongoing online support. Not sure which course is right for you? <strong>Book a free consultation</strong> and we'll help you find the perfect fit.</div>
        </div>

        <div className="ac-courses-grid">
          {/* Featured: Balayage Masterclass */}
          <div className="ac-course feat">
            <div className="feat-l">
              <div className="ac-c-num">01</div>
              <div className="ac-c-tag">Colour · 1 Day · Flagship</div>
              <h3 className="ac-c-name">Balayage <em>Masterclass</em></h3>
              <p className="ac-c-desc">Our most celebrated course. A full day mastering the freehand balayage technique — not just the "how" but the "why" behind every decision. You'll work on a real model under expert guidance and leave truly ready.</p>
              <p className="ac-c-desc">First I demonstrate and break down every step, then it's your turn — with support throughout.</p>
              <a href="https://www.essencehairtreatment.com/booking-calendar/balayage-masterclass" className="ac-book-link" target="_blank" rel="noreferrer">Enrol — £400 →</a>
            </div>
            <div className="feat-r">
              <div>
                <div className="ac-learn-head">You Will Learn</div>
                <ul className="ac-learn-list">
                  <li>Freehand brush technique and pressure control</li>
                  <li>Sectioning for different lengths and densities</li>
                  <li>Lightener selection and timing for each hair type</li>
                  <li>Toning theory — perfect blonde, brunette or copper</li>
                  <li>Client consultation and expectation management</li>
                  <li>Aftercare advice for every client</li>
                </ul>
              </div>
              <div>
                <div className="ac-detail-head">Course Details</div>
                <div className="ac-detail-rows">
                  <div><div className="ac-cm-label">Duration</div><div className="ac-cm-val">9 Hours (1 Full Day)</div></div>
                  <div><div className="ac-cm-label">Investment</div><div className="ac-cm-val">£400</div></div>
                  <div><div className="ac-cm-label">Certification</div><div className="ac-cm-val">ABT Accredited</div></div>
                  <div><div className="ac-cm-label">Includes</div><div className="ac-cm-val">Manual + Shadowing + Support</div></div>
                  <div><div className="ac-cm-label">Level</div><div className="ac-cm-val">All Levels Welcome</div></div>
                </div>
              </div>
            </div>
          </div>

          <CourseCard
            num="02" tag="Treatments · 1 Day"
            name="Keratin <em>Treatment</em>"
            desc="Professional application of organic keratin — consultation, strand testing, application, heat activation, and full aftercare guidance. Everything needed to offer this as a standalone service."
            duration="6 Hours" investment="£200" certification="ABT Accredited" extra="Level" extraVal="All Levels"
            bookHref="https://www.essencehairtreatment.com/booking-calendar/keratin-treatment"
          />
          <CourseCard
            num="03" tag="Treatments · 1 Day"
            name="Nanoplastia <em>Treatment</em>"
            desc="Master the most in-demand organic smoothing treatment. Understand the science, perfect the application, and learn to advise clients on suitability — a highly profitable skill set."
            duration="9 Hours" investment="£300" certification="ABT Accredited" extra="Level" extraVal="All Levels"
            bookHref="https://www.essencehairtreatment.com/booking-calendar/nanoplastia-hair-treatment"
          />
          <CourseCard
            num="04" tag="Treatments · 1 Day"
            name="Hair <em>Botox</em>"
            desc="A full training day in hair botox — growing rapidly in demand. Full protocol: client assessment, product layering, heat sealing, and aftercare advice for lasting results and client retention."
            duration="9 Hours" investment="£300" certification="ABT Accredited" extra="Level" extraVal="All Levels"
            bookHref="https://www.essencehairtreatment.com/booking-calendar/hair-botox-treatment"
          />
          <CourseCard
            num="05" tag="Bundle · 2 Days · Best Value"
            name="Full Treatment <em>Package</em>"
            desc="Keratin, Nanoplastia, and Hair Botox — all three organic smoothing treatments in one intensive two-day programme. Ideal for a complete treatment menu. Excellent value versus booking individually."
            duration="2 Days · 16 hrs" investment="£800" certification="ABT Accredited" extra="Includes" extraVal="All 3 Treatments"
            bookHref="https://www.essencehairtreatment.com/booking-calendar/full-hair-treatment-package-2-day"
          />
          <CourseCard
            num="06" tag="Extensions · 1 Day"
            name="Extensions <em>2 Method</em>"
            desc="Certified in Tape and Nano Ring extensions. Fitting, colour matching, blending, removal, and maintenance advice. Immediately expands your service menu and earning potential."
            duration="9 Hours" investment="£350" certification="ABT Accredited" extra="Methods" extraVal="Tape + Nano Ring"
            bookHref="https://www.essencehairtreatment.com/booking-calendar/hair-extensions-2-method-tape-nanos"
          />
          <CourseCard
            num="07" tag="Extensions · 1 Day"
            name="Extensions <em>4 Method</em>"
            desc="The most comprehensive extensions course — Tape, Nano Ring, Micro Ring, and LA Weave. Everything needed to build a complete extensions service."
            duration="9 Hours" investment="£600" certification="ABT Accredited" extra="Methods" extraVal="Tape/Nano/Micro/LA Weave"
            bookHref="https://www.essencehairtreatment.com/booking-calendar/hair-extensions-4-method"
          />
          <CourseCard
            num="08" tag="Colour Foundation · 2 Days"
            name="Basics of <em>Colour</em>"
            desc="Essential foundation for any colourist. Colour theory, developer selection, application, highlighting, and professional toning. Ideal for beginners or those formalising existing skills."
            duration="2 Days · 18 hrs" investment="£800" certification="ABT Accredited" extra="Level" extraVal="Beginner–Intermediate"
            bookHref="https://www.essencehairtreatment.com/booking-calendar/basics-of-colour-2-days"
          />
          <CourseCard
            num="09" tag="Colour Advanced · 2 Days"
            name="Advanced <em>Colour</em>"
            desc="Colour correction, vivids, grey blending, complex balayage, and editorial techniques. For experienced stylists ready to offer a genuinely premium colour service."
            duration="2 Days · 18 hrs" investment="£800" certification="ABT Accredited" extra="Level" extraVal="Intermediate–Advanced"
            bookHref="https://www.essencehairtreatment.com/booking-calendar/advanced-colour"
          />
          <CourseCard
            num="10" tag="Cutting · 2 Days"
            name="Cutting <em>Basics</em>"
            desc="Precision cutting, scissor over comb, layering, graduation, and tailoring a cut to face shape and density. The technical foundation every stylist needs."
            duration="2 Days · 18 hrs" investment="£500" certification="ABT Accredited" extra="Level" extraVal="Beginner–Intermediate"
            bookHref="https://www.essencehairtreatment.com/booking-calendar/cutting-basics"
          />
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
          <a href={BOOK_URL} className="ac-btn-outline" target="_blank" rel="noreferrer">Book Free Consultation</a>
        </div>
        <p style={{fontSize:'11px',letterSpacing:'.18em',textTransform:'uppercase',color:'#9A9087',marginTop:'20px'}}>Price list available on request</p>
      </section>
    </main>
  )
}
