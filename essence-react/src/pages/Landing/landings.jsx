// Content for the location landing pages (one page per search we target).
// Every fact here is drawn from the Services, FAQs, Top Tips and Academy pages.
import { Link } from 'react-router-dom'
import { BOOK_URL, CONSULT_URL } from '../../seo'

export const LANDINGS = {
  '/hair-extensions-bedfordshire': {
    service: 'Hair extensions',
    hero: { img: '/hybrid-extensions.webp', alt: 'Long icy-blonde balayage with hybrid hair extensions at Essence in Luton' },
    tag: 'Essence · Luton, Bedfordshire',
    title: <>Hair Extensions in Luton &amp; <em>Bedfordshire</em></>,
    lead: 'Essence Hair Treatment is a hair extension salon in Luton, Bedfordshire, rated 5.0 from over 300 Google reviews. We fit nano ring, tape-in, LA Weave and hybrid extensions, colour-matched to your own hair for a seamless, natural blend.',
    cta: { label: 'Book a Consultation', href: CONSULT_URL },
    cardsHead: { title: <>Our extension <em>methods</em></>, text: 'Not sure which method suits you? We’ll recommend one at your consultation, based on your hair type, lifestyle and the length and volume you want.' },
    cards: [
      { img: '/img-new-04.webp', alt: 'Long, sleek jet-black hair with nano ring extensions', name: <>Nano Ring <em>Extensions</em></>, desc: 'A discreet, lightweight method fitted strand by strand with tiny rings, with no heat or glue. Gentle on the hair and suitable for most hair types.' },
      { img: '/img-new-20.webp', alt: 'Long, straight brunette hair with tape-in extensions', name: <>Tape-In <em>Extensions</em></>, desc: 'Ultra-flat wefts that sit discreetly against the scalp for instant length and volume. Quick to fit, comfortable to wear and reusable.' },
      { img: '/la-weave.webp', alt: 'Long, sleek brunette hair with LA Weave extensions', name: <>LA Weave <em>Extensions</em></>, desc: 'Sewn-in wefts secured with small beads, with no heat or glue. A secure, reusable option for full, glamorous length and thickness.' },
      { img: '/hybrid-extensions.webp', alt: 'Long icy-blonde balayage with hybrid hair extensions', name: <>Hybrid <em>Extensions</em></>, desc: 'Two methods combined, such as nano rings with tapes or wefts, for a fully customised result and the most natural blend.' },
    ],
    steps: [
      ['Consultation', <>New to extensions? Start with a <a href={CONSULT_URL} target="_blank" rel="noreferrer">consultation</a> to match your shade, talk through your length goals and get a full rundown of aftercare and maintenance.</>],
      ['Colour matching', 'We match the extension hair to your natural colour so the blend is seamless.'],
      ['Fitting', 'Come with freshly washed hair, straightened for a new fitting. Bring inspiration photos: the more specific, the better.'],
      ['Maintenance', 'Book your maintenance appointments within the time frame we give you. Tape-ins, for example, need maintenance every 6–8 weeks.'],
    ],
    aftercare: [
      'Use sulphate-free shampoos and conditioners',
      'Avoid tight hairstyles for the first few days',
      'No swimming or excessive sweating for 72 hours',
      'Avoid moisture and humidity in the first 72 hours',
    ],
    reviewMatch: /extension/i,
    faqs: [
      { q: 'Which hair extension methods do you offer?', a: 'We fit nano ring, tape-in, LA Weave and hybrid extensions at our salon in Luton, Bedfordshire. Every set is colour-matched to your natural hair.' },
      { q: 'Will extensions damage my natural hair?', a: 'When applied correctly and maintained properly, extensions shouldn’t damage your natural hair. We always assess the condition of your hair before fitting.' },
      { q: 'How long do hair extensions last?', a: 'It depends on the method. Tape-in extensions last 6–8 weeks before a maintenance appointment. We’ll tell you when your maintenance is due, and appointments must be booked within that time frame.' },
      { q: 'Do I need a consultation before getting extensions?', a: <>We recommend one if you’re new to extensions. It’s where we match your shade, discuss length goals and explain aftercare. <a href={CONSULT_URL} target="_blank" rel="noreferrer">Book a consultation here</a>.</> },
      { q: 'Is there a warranty on the hair?', a: 'Aftercare instructions must be followed and maintenance appointments booked on time. Removing the extensions yourself will invalidate any warranty on the hair.' },
    ],
  },

  '/balayage-bedfordshire': {
    service: 'Balayage',
    hero: { img: '/img-new-06.webp', alt: 'Sun-kissed blonde balayage on long, loose curls at Essence in Luton' },
    tag: 'Essence · Luton, Bedfordshire',
    title: <>Balayage in Luton &amp; <em>Bedfordshire</em></>,
    lead: 'Essence Hair Treatment is a balayage salon in Luton, Bedfordshire, rated 5.0 from over 300 Google reviews. Every balayage includes a bonding treatment to protect your hair and bespoke toning to perfect your shade, from sun-kissed blonde to soft bronde and caramel brunette.',
    cta: { label: 'Book Your Balayage', href: BOOK_URL },
    cardsHead: { title: <>Balayage <em>looks</em></>, text: 'Real results from our Luton studio, each one a bespoke shade created for the client in the chair.' },
    looks: [
      { img: '/img-new-06.webp', alt: 'Sun-kissed blonde balayage on long, loose curls' },
      { img: '/img-new-08.webp', alt: 'Bronde balayage with soft, bouncy curls' },
      { img: '/img-new-01.webp', alt: 'Long brunette hair with caramel balayage and soft curls' },
      { img: '/balayage-waves-signage.webp', alt: 'Brunette-to-caramel balayage waves under the Essence sign' },
      { img: '/styling.webp', alt: 'Long blonde balayage styled in loose curls' },
      { img: '/image.webp', alt: 'Ash-bronde balayage on straight, mid-length hair' },
    ],
    steps: [
      ['Patch test & consultation', <>New colour clients need a patch test and consultation first. It takes 5–10 minutes and must be <a href={CONSULT_URL} target="_blank" rel="noreferrer">booked in advance</a>, as it can’t be done on the day.</>],
      ['Prepare', 'Come with freshly washed hair and bring inspiration photos. Wear comfortable clothes you don’t mind getting stained, and avoid hooded tops.'],
      ['Your appointment', 'We hand-paint your balayage for soft, natural-looking dimension, protect your hair with a bonding treatment, then tone it to your perfect shade.'],
      ['Aftercare', 'Wait at least 48 hours before washing, and book regular toner appointments to keep your shade fresh.'],
    ],
    aftercare: [
      'Wait at least 48 hours before washing after colour',
      'Rinse with lukewarm or cool water',
      'Use a deep conditioner or hair mask weekly',
      'Always apply heat protection before styling',
      'Use UV-protective products in the sun',
      'Book regular trims and toner appointments',
    ],
    reviewMatch: /balayage/i,
    faqs: [
      { q: 'What is balayage?', a: 'Balayage is a hand-painted colouring technique that creates soft, natural-looking dimension and brightness, with no harsh regrowth lines.' },
      { q: 'What’s included in a balayage at Essence?', a: 'Every balayage includes a bonding treatment to protect and strengthen your hair during colouring, plus bespoke toning to achieve your perfect shade.' },
      { q: 'Do I need a patch test before balayage?', a: 'Yes, if you’re a new client, have changed medication, or it’s been over 12 months since your last appointment. Patch tests take 5–10 minutes and must be booked before the day of your appointment.' },
      { q: 'How should I look after my balayage?', a: 'Wait at least 48 hours before washing, use professional products, rinse with lukewarm or cool water, use a weekly mask, apply heat protection, and book regular toner appointments.' },
      { q: 'Do you teach balayage?', a: <>Yes. Our <Link to="/academy">Essence Academy</Link> runs an ABT-accredited, one-to-one Balayage Masterclass in Luton for stylists who want to master the freehand technique.</> },
    ],
  },
}
