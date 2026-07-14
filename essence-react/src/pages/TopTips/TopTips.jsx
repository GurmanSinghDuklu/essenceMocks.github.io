import './TopTips.css';
import useSEO from '../../hooks/useSEO'

const BOOK_URL = 'https://bookings.gettimely.com/essencehairtreatment/bb/book';
const CONSULT_URL = 'https://bookings.gettimely.com/essencehairtreatment/book?uri=https%3A%2F%2Fbook.gettimely.com%2FBooking%2FLocation%2F290341%3Fmobile%3DTrue%26params%3D%25253fclient-login%25253dtrue';

const TIPS = [
  {
    tag: 'Before Your Appointment',
    title: <>Do I need a <em>patch test?</em></>,
    body: 'Yes — a patch test and consultation is required if any of the following apply to you:',
    list: [
      'You are a new client booking any colour service',
      'You have had a change in any medication',
      'It has been over 12 months since your last appointment',
    ],
    note: (
      <>
        <strong>Please note:</strong> Patch tests and consultations take no more than 5–10 minutes
        and must be pre-booked. They cannot be carried out on the day of your appointment.{' '}
        <a href={CONSULT_URL} target="_blank" rel="noreferrer">Book your consultation here.</a>
      </>
    ),
  },
  {
    tag: 'Booking',
    title: <>How to book an <em>appointment</em></>,
    body: (
      <>
        Appointments can be booked via our{' '}
        <a href={BOOK_URL} target="_blank" rel="noreferrer">
          online booking system
        </a>
        . For enquiries, contact us on{' '}
        <a href="tel:+447375956131">07375 956 131</a>
      </>
    ),
    list: [
      'Appointments are only confirmed once a deposit has been paid',
    ],
  },
  {
    tag: 'Preparation',
    title: <>How to prepare for your <em>appointment</em></>,
    list: [
      'Wear comfortable clothes you don’t mind getting stained. Avoid hooded tops.',
      'Bring inspiration photos — the more specific, the better.',
      'Ensure your hair is freshly washed for all colour and extension services.',
      'For new extension fittings, please ensure your hair has been straightened.'
    ],
  },
  {
    tag: 'Aftercare',
    title: <>Looking after your <em>hair at home</em></>,
    body: 'The care you give your hair at home directly affects how long your results last. Follow these guidelines to protect your investment.',
    aftercareCards: [
      {
        icon: '🎨',
        title: 'Hair Colour Aftercare',
        items: [
          'Wait at least 48 hours before washing after colour',
          'Use professional hair products',
          'Rinse with lukewarm or cool water',
          'Use a deep conditioner or hair mask weekly',
          'Always apply heat protection before styling',
          'Book regular trims and toner appointments',
          'Use UV-protective products in sun exposure',
        ],
      },
      {
        icon: '✂️',
        title: 'Cut & Style Aftercare',
        items: [
          'Schedule trims every 6–8 weeks to maintain shape',
          'Always use heat protectant before styling tools',
          'Detangle gently — start from the tips upward',
          'Use nourishing conditioner or leave-in conditioner regularly',
        ],
      },
      {
        icon: '✨',
        title: 'Treatment Aftercare',
        items: [
          'Use sulphate-free shampoos and conditioners',
          'Keratin only: no wash for 72 hours after treatment',
          'Avoid tight hairstyles for the first few days',
          'No swimming or excessive sweating for 72 hours',
          'Avoid moisture and humidity in first 72 hours',
        ],
      },
      {
        icon: '✨',
        title: 'Extensions Aftercare',
        items: [
          'Use sulphate-free shampoos and conditioners',
          'Keratin only: no wash for 72 hours after treatment',
          'Avoid tight hairstyles for the first few days',
          'No swimming or excessive sweating for 72 hours',
          'Avoid moisture and humidity in first 72 hours',
        ],
      },
    ],
  },
];

export default function TopTips() {
  useSEO({
    title: 'Hair Care Tips | Essence Hair Treatment Luton',
    description: 'Expert hair care advice from Essence Hair Treatment in Luton. How to maintain your balayage, colour, hair extensions and treatments at home.',
    canonical: 'https://www.essencehairtreatment.co.uk/top-tips',
    ogImage: 'https://www.essencehairtreatment.co.uk/essencelogo.jpg',
  })
  return (
    <main style={{ paddingTop: '0' }}>
      {/* HERO */}
      <div className="tt-hero">
        <div className="tt-ph-img">
          <img src="/1000076208.jpg" alt="Top Tips" />
        </div>
        <div className="tt-ph-ov" />
        <div className="tt-ph-content">
          <div className="tt-ph-tag">Hair Care Tips</div>
          <h1 className="tt-ph-title">Top <em>Tips</em></h1>
        </div>
      </div>

      {/* TIPS */}
      {TIPS.map((tip, i) => (
        <section key={i} className={`tt-section ${i % 2 === 0 ? 'bg-off' : 'bg-wh'}`}>
          <div className="tt-inner">
            <div className="tt-card">
              <div className="tt-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="tt-body">
                <div className="tt-card-tag">{tip.tag}</div>
                <h2 className="tt-card-title">{tip.title}</h2>
                {tip.body && <p className="tt-card-body">{tip.body}</p>}
                {tip.list && (
                  <ul className="tt-list">
                    {tip.list.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                )}
                {tip.note && <div className="tt-note">{tip.note}</div>}
                {tip.aftercareCards && (
                  <div className="tt-ac-grid">
                    {tip.aftercareCards.map((card, k) => (
                      <div className="tt-ac-card" key={k}>
                        <div className="tt-ac-icon">{card.icon}</div>
                        <div className="tt-ac-title">{card.title}</div>
                        <ul className="tt-ac-items">
                          {card.items.map((item, m) => (
                            <li key={m}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <div className="tt-cta">
        <h3>Book your next <em>appointment</em></h3>
        <a href={BOOK_URL} className="tt-cta-btn" target="_blank" rel="noreferrer">
          Book Online Now
        </a>
      </div>
    </main>
  );
}
