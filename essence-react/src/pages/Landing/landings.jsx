// Content for the location landing pages (one page per service search we target).
// Every fact here is drawn from the Services, FAQs, Top Tips and Academy pages,
// and prices from the Timely menu (src/prices.js).
import { Link } from 'react-router-dom'
import { BOOK_URL, CONSULT_URL } from '../../seo'
import { PRICE_GROUPS, formatPrice, fromPrice, costAnswer } from '../../prices'

// Extension methods and smoothing treatments, shown as cards on the hub pages
// and as "other options" on each method/treatment page (linked when they have a page).
const EXT_METHODS = [
  { to: '/nano-ring-extensions-bedfordshire', label: 'Nano ring extensions', prices: 'nano', img: '/img-new-04.webp', alt: 'Long, sleek jet-black hair with nano ring extensions', name: <>Nano Ring <em>Extensions</em></>, desc: 'A discreet, lightweight method fitted strand by strand with tiny rings, with no heat or glue. Gentle on the hair and suitable for most hair types.' },
  { to: '/tape-in-extensions-bedfordshire', label: 'Tape-in extensions', prices: 'tape', img: '/img-new-20.webp', alt: 'Long, straight brunette hair with tape-in extensions', name: <>Tape-In <em>Extensions</em></>, desc: 'Ultra-flat wefts that sit discreetly against the scalp for instant length and volume. Quick to fit, comfortable to wear and reusable.' },
  { to: '/la-weave-extensions-bedfordshire', label: 'LA Weave extensions', prices: 'weft', img: '/la-weave.webp', alt: 'Long, sleek brunette hair with LA Weave extensions', name: <>LA Weave <em>Extensions</em></>, desc: 'Sewn-in wefts secured with small beads, with no heat or glue. A secure, reusable option for full, glamorous length and thickness.' },
  { to: '/hybrid-extensions-bedfordshire', label: 'Hybrid extensions', prices: 'hybrid', img: '/hybrid-extensions.webp', alt: 'Long icy-blonde balayage with hybrid hair extensions', name: <>Hybrid <em>Extensions</em></>, desc: 'Two methods combined, such as nano rings with tapes or wefts, for a fully customised result and the most natural blend.' },
]

const TREATMENTS = [
  { to: '/nanoplastia-bedfordshire', label: 'Nanoplastia', prices: 'nanoplastia', img: '/img-new-03.webp', alt: 'Long, smooth, frizz-free hair after a Nanoplastia treatment', name: <><em>Nanoplastia</em></>, desc: 'Organic, formaldehyde-free smoothing that restructures and hydrates the hair. Refines curl rather than removing it, so hair keeps its natural movement.' },
  { to: '/keratin-treatment-bedfordshire', label: 'Keratin treatment', prices: 'keratin', img: '/keratin.webp', alt: 'Long, sleek jet-black hair after a Keratin smoothing treatment', name: <>Keratin <em>Treatment</em></>, desc: 'Formaldehyde-free smoothing that replenishes the hair’s natural protein for a sleek, frizz-free finish lasting 3–5 months.' },
  { to: '/hair-botox-bedfordshire', label: 'Hair Botox', prices: 'botox', img: '/hair-botox.webp', alt: 'Long, smooth brunette hair with subtle highlights after Hair Botox', name: <>Hair <em>Botox</em></>, desc: 'Deep repair for damaged hair, restoring softness, shine and strength from root to tip. Results last up to 4 months.' },
]

const COLOUR_SERVICES = [
  { to: '/balayage-bedfordshire', label: 'Balayage', prices: 'balayage', img: '/img-new-06.webp', alt: 'Sun-kissed blonde balayage on long, loose curls', name: <><em>Balayage</em></>, desc: 'Hand-painted for soft, natural-looking dimension that grows out without harsh regrowth lines. Bonding and bespoke toning included.' },
  { to: '/highlights-bedfordshire', label: 'Highlights', prices: 'highlights', img: '/img-new-08.webp', alt: 'Bronde highlights with soft, bouncy curls', name: <><em>Highlights</em></>, desc: 'T-section, half head or full head highlights for the brightness, depth and dimension you want. Bonding and bespoke toning included.' },
  { to: '/hair-colour-bedfordshire', label: 'Hair colour', prices: 'colour', img: '/tint.webp', alt: 'Rich chocolate-brown tint with glossy curls', name: <>Hair <em>Colour</em></>, desc: 'Root colour, full head colour, grey coverage, toner refreshes and colour correction, each with a bonding treatment included.' },
]

const others = (list, path) => list.filter(c => c.to !== path)

const COLOUR_AFTERCARE = [
  'Wait at least 48 hours before washing after colour',
  'Rinse with lukewarm or cool water',
  'Use a deep conditioner or hair mask weekly',
  'Always apply heat protection before styling',
  'Use UV-protective products in the sun',
  'Book regular trims and toner appointments',
]

const colourSteps = appointment => [
  ['Patch test & consultation', <>New colour clients need a free patch test and consultation first. It takes 5–10 minutes and must be <a href={CONSULT_URL} target="_blank" rel="noreferrer">booked in advance</a>, as it can’t be done on the day.</>],
  ['Prepare', 'Come with freshly washed hair and bring inspiration photos. Wear comfortable clothes you don’t mind getting stained, and avoid hooded tops.'],
  ['Your appointment', appointment],
  ['Aftercare', 'Wait at least 48 hours before washing, and book regular toner appointments to keep your shade fresh.'],
]

const patchTestFaq = { q: 'Do I need a patch test?', a: 'Yes, if you’re a new client, have changed medication, or it’s been over 12 months since your last appointment. Patch tests are free, take 5–10 minutes and must be booked before the day of your appointment.' }

// "How much does X cost?" answered straight from the price list.
const costFaq = (q, id) => ({ q, a: costAnswer(id) })

// Same aftercare for extensions and smoothing treatments (see Top Tips).
const AFTERCARE = [
  'Use sulphate-free shampoos and conditioners',
  'Avoid tight hairstyles for the first few days',
  'No swimming or excessive sweating for 72 hours',
  'Avoid moisture and humidity in the first 72 hours',
]

const extSteps = fitting => [
  ['Consultation', <>New to extensions? Start with a <a href={CONSULT_URL} target="_blank" rel="noreferrer">consultation</a> to match your shade, talk through your length goals and get a full rundown of aftercare and maintenance.</>],
  ['Colour matching', 'We match the extension hair to your natural colour so the blend is seamless.'],
  ['Fitting', fitting],
  ['Maintenance', 'Book your maintenance appointments within the time frame we give you, and follow your aftercare to keep the extensions looking their best.'],
]

const treatmentSteps = (treatment, results, aftercare = 'Use sulphate-free shampoo and conditioner, and avoid tight hairstyles, swimming and humidity for the first 72 hours.') => [
  ['Consultation', 'We assess your hair’s condition and recommend the right treatment for your hair type. Having colour too? Book it before your smoothing treatment, not after.'],
  ['Your treatment', treatment],
  ['Aftercare', aftercare],
  ['Results', results],
]

const colouredHairFaq = { q: 'Can I have this treatment on coloured hair?', a: 'Yes. Our treatments are safe for colour-treated hair. We recommend having your colour done before your treatment, not after, and we always assess your hair’s condition first.' }

const formaldehydeFaq = { q: 'Is it formaldehyde-free?', a: 'Yes. All our treatments, Keratin, Nanoplastia and Hair Botox, are formaldehyde-free, using professional-grade, safe formulations.' }

export const LANDINGS = {
  '/hair-extensions-bedfordshire': {
    service: 'Hair extensions',
    hero: { img: '/hybrid-extensions.webp', alt: 'Long icy-blonde balayage with hybrid hair extensions at Essence in Luton' },
    tag: 'Essence · Luton, Bedfordshire',
    title: <>Hair Extensions in Luton &amp; <em>Bedfordshire</em></>,
    lead: 'Essence Hair Treatment is a hair extension salon in Luton, Bedfordshire, rated 5.0 from over 300 Google reviews. We fit nano ring, tape-in, LA Weave and hybrid extensions, colour-matched to your own hair for a seamless, natural blend.',
    cta: { label: 'Book a Consultation', href: CONSULT_URL },
    cardsHead: { title: <>Our extension <em>methods</em></>, text: 'Not sure which method suits you? We’ll recommend one at your consultation, based on your hair type, lifestyle and the length and volume you want.' },
    cards: EXT_METHODS,
    why: {
      title: <>Why choose Essence for <em>extensions</em></>,
      items: [
        ['Four methods under one roof', 'Nano ring, tape-in, LA Weave and hybrid. Because we fit all four, we recommend the method that suits your hair and lifestyle, not the only one we offer.'],
        ['Colour-matched to you', 'Every set is matched to your natural shade, so the extensions blend seamlessly with your own hair.'],
        ['We train other stylists', <>Our ABT-accredited <Link to="/academy">Essence Academy</Link> teaches tape, nano ring, micro ring and LA Weave extensions to stylists, here in Luton.</>],
      ],
    },
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
    prices: ['extExtras'],
    from: Math.min(...['tape', 'nano', 'weft', 'hybrid'].map(fromPrice)),
    reviewMatch: /extension/i,
    faqs: [
      { q: 'Which hair extension methods do you offer?', a: 'We fit nano ring, tape-in, LA Weave and hybrid extensions at our salon in Luton, Bedfordshire. Every set is colour-matched to your natural hair.' },
      { q: 'How much do hair extensions cost?', a: `Tape-in fitting starts from £${fromPrice('tape')}, nano ring fitting from £${fromPrice('nano')}, weft fitting from £${fromPrice('weft')} and hybrid fitting from £${fromPrice('hybrid')}. Consultations are free, and we’ll confirm your price once we’ve matched your shade and agreed your length and volume.` },
      { q: 'Will extensions damage my natural hair?', a: 'When applied correctly and maintained properly, extensions shouldn’t damage your natural hair. We always assess the condition of your hair before fitting.' },
      { q: 'How long do hair extensions last?', a: 'It depends on the method. Tape-in extensions last 6–8 weeks before a maintenance appointment. We’ll tell you when your maintenance is due, and appointments must be booked within that time frame.' },
      { q: 'Do I need a consultation before getting extensions?', a: <>We recommend one if you’re new to extensions. It’s where we match your shade, discuss length goals and explain aftercare. <a href={CONSULT_URL} target="_blank" rel="noreferrer">Book a consultation here</a>.</> },
      { q: 'Can I have extensions if my hair is fine or thin?', a: 'Often, yes. Nano rings are lightweight and suitable for most hair types, and we always assess the condition of your hair before fitting so we can recommend the method that suits it.' },
      { q: 'Is there a warranty on the hair?', a: 'Aftercare instructions must be followed and maintenance appointments booked on time. Removing the extensions yourself will invalidate any warranty on the hair.' },
      { q: 'Where in Bedfordshire is your extensions salon?', a: 'We’re at 6 Woodmere, Luton LU3 4DN, in north Luton, with free street parking outside. It’s a short drive from Dunstable, Houghton Regis, Barton-le-Clay and Toddington, and easy to reach from Leighton Buzzard, Ampthill, Flitwick and Bedford.' },
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
    why: {
      title: <>Why choose Essence for <em>balayage</em></>,
      items: [
        ['Hand-painted for you', 'Every balayage is painted freehand for soft, natural-looking dimension that grows out without harsh regrowth lines.'],
        ['Bonding and toning included', 'A bonding treatment protects and strengthens your hair while it’s coloured, and bespoke toning perfects your shade. Both come with every balayage.'],
        ['We teach balayage', <>Our ABT-accredited <Link to="/academy">Essence Academy</Link> runs a one-to-one Balayage Masterclass, training other stylists in the freehand technique we use in the salon.</>],
      ],
    },
    steps: [
      ['Patch test & consultation', <>New colour clients need a patch test and consultation first. It takes 5–10 minutes and must be <a href={CONSULT_URL} target="_blank" rel="noreferrer">booked in advance</a>, as it can’t be done on the day.</>],
      ['Prepare', 'Come with freshly washed hair and bring inspiration photos. Wear comfortable clothes you don’t mind getting stained, and avoid hooded tops.'],
      ['Your appointment', 'We hand-paint your balayage for soft, natural-looking dimension, protect your hair with a bonding treatment, then tone it to your perfect shade.'],
      ['Aftercare', 'Wait at least 48 hours before washing, and book regular toner appointments to keep your shade fresh.'],
    ],
    aftercare: COLOUR_AFTERCARE,
    prices: ['balayage', 'toner'],
    reviewMatch: /balayage/i,
    faqs: [
      { q: 'What is balayage?', a: 'Balayage is a hand-painted colouring technique that creates soft, natural-looking dimension and brightness, with no harsh regrowth lines.' },
      { q: 'What’s included in a balayage at Essence?', a: 'Every balayage includes a bonding treatment to protect and strengthen your hair during colouring, plus bespoke toning to achieve your perfect shade.' },
      costFaq('How much does balayage cost?', 'balayage'),
      { q: 'What’s the difference between balayage and highlights?', a: <>Balayage is hand-painted for soft, blended dimension that grows out gently. <Link to="/highlights-bedfordshire">Highlights</Link> are placed to give a more defined, customised level of brightness. At Essence both include a bonding treatment and bespoke toning, and we’ll recommend the right one for you at your consultation.</> },
      { q: 'Do I need a patch test before balayage?', a: 'Yes, if you’re a new client, have changed medication, or it’s been over 12 months since your last appointment. Patch tests take 5–10 minutes and must be booked before the day of your appointment.' },
      { q: 'How should I look after my balayage?', a: 'Wait at least 48 hours before washing, use professional products, rinse with lukewarm or cool water, use a weekly mask, apply heat protection, and book regular toner appointments.' },
      { q: 'Where in Bedfordshire is your balayage salon?', a: 'We’re at 6 Woodmere, Luton LU3 4DN, in north Luton, with free street parking outside. It’s a short drive from Dunstable, Houghton Regis, Barton-le-Clay and Toddington, and easy to reach from Leighton Buzzard, Ampthill, Flitwick and Bedford.' },
      { q: 'Do you teach balayage?', a: <>Yes. Our <Link to="/academy">Essence Academy</Link> runs an ABT-accredited, one-to-one Balayage Masterclass in Luton for stylists who want to master the freehand technique.</> },
    ],
  },

  '/tape-in-extensions-bedfordshire': {
    service: 'Tape-in extensions',
    hero: { img: '/1000076197.webp', alt: 'Close-up of a tape-in extension sitting flat at the root, blended into brown hair with caramel highlights' },
    tag: 'Essence · Luton, Bedfordshire',
    title: <>Tape-In Extensions in Luton &amp; <em>Bedfordshire</em></>,
    lead: 'Essence Hair Treatment fits tape-in hair extensions at our salon in Luton, Bedfordshire, rated 5.0 from over 300 Google reviews. Tape-ins are ultra-flat wefts applied with medical-grade adhesive, sitting discreetly against the scalp for instant length and volume, and colour-matched to your natural hair.',
    cta: { label: 'Book a Consultation', href: CONSULT_URL },
    cardsHead: { title: <>Other extension <em>methods</em></>, text: 'Not sure tape-ins are right for you? We fit four methods and will recommend the best one for your hair at your consultation.' },
    cards: others(EXT_METHODS, '/tape-in-extensions-bedfordshire'),
    why: {
      title: <>Why choose Essence for <em>tape-ins</em></>,
      items: [
        ['Flat and discreet', 'Ultra-flat wefts lie against the scalp, so they’re comfortable to wear and blend effortlessly with your own hair.'],
        ['Gentle on your hair', 'We use medical-grade adhesive that is gentle on the hair shaft, and assess the condition of your hair before every fitting.'],
        ['We train other stylists', <>Our ABT-accredited <Link to="/academy">Essence Academy</Link> certifies stylists in tape-in extensions: fitting, colour matching, blending, removal and maintenance.</>],
      ],
    },
    steps: extSteps('Come with freshly washed hair, straightened for a new fitting. We apply the wefts with medical-grade adhesive so they sit flat and blend with your own hair.'),
    aftercare: AFTERCARE,
    prices: ['tape', 'extExtras'],
    reviewMatch: /tape/i,
    faqs: [
      { q: 'What are tape-in extensions?', a: 'A semi-permanent, lightweight method using ultra-flat wefts that lie flat against the scalp, applied with medical-grade adhesive. They add instant length and volume and are reusable.' },
      costFaq('How much do tape-in extensions cost?', 'tape'),
      { q: 'How long do tape-in extensions last?', a: 'Tape-ins last 6–8 weeks before a maintenance appointment. We’ll tell you when your maintenance is due, and appointments must be booked within that time frame.' },
      { q: 'Do tape-in extensions damage your hair?', a: 'When applied correctly and maintained properly, tape extensions cause no damage to natural hair. We use medical-grade adhesive that is gentle on the hair shaft, and always assess your hair before fitting.' },
      { q: 'Tape-in or nano ring extensions: which is better?', a: <>It depends on your hair and lifestyle. Tape-ins are quick to fit and lie completely flat. <Link to="/nano-ring-extensions-bedfordshire">Nano rings</Link> are fitted strand by strand with no heat or glue. We’ll recommend the right method at your consultation.</> },
    ],
  },

  '/nano-ring-extensions-bedfordshire': {
    service: 'Nano ring extensions',
    hero: { img: '/img-new-04.webp', alt: 'Long, sleek jet-black hair with nano ring extensions at Essence in Luton' },
    tag: 'Essence · Luton, Bedfordshire',
    title: <>Nano Ring Extensions in Luton &amp; <em>Bedfordshire</em></>,
    lead: 'Essence Hair Treatment fits nano ring hair extensions at our salon in Luton, Bedfordshire, rated 5.0 from over 300 Google reviews. Nano rings are fitted strand by strand with tiny rings and no heat or glue, for a discreet, lightweight result that’s gentle on your hair and colour-matched to your own.',
    cta: { label: 'Book a Consultation', href: CONSULT_URL },
    cardsHead: { title: <>Other extension <em>methods</em></>, text: 'Not sure nano rings are right for you? We fit four methods and will recommend the best one for your hair at your consultation.' },
    cards: others(EXT_METHODS, '/nano-ring-extensions-bedfordshire'),
    why: {
      title: <>Why choose Essence for <em>nano rings</em></>,
      items: [
        ['No heat, no glue', 'Each strand is attached with a tiny ring, with no heat or glue, so the method is gentle on your natural hair.'],
        ['Suits most hair types', 'Nano rings are lightweight and discreet, and individually fitted for a seamless blend with flexible wear.'],
        ['We train other stylists', <>Our ABT-accredited <Link to="/academy">Essence Academy</Link> certifies stylists in nano ring extensions: fitting, colour matching, blending, removal and maintenance.</>],
      ],
    },
    steps: extSteps('Come with freshly washed hair, straightened for a new fitting. We fit each strand individually with a tiny ring, with no heat or glue.'),
    aftercare: AFTERCARE,
    prices: ['nano', 'extExtras'],
    reviewMatch: /nano ?ring/i,
    faqs: [
      { q: 'What are nano ring extensions?', a: 'A discreet, lightweight extension method where each strand is attached to your own hair with a tiny ring, with no heat or glue. They’re individually fitted for a seamless, natural-looking blend. You may also see them called nano beads or nano bonds.' },
      costFaq('How much do nano ring extensions cost?', 'nano'),
      { q: 'Are nano ring extensions damaging?', a: 'Nano rings use no heat or glue and are gentle on the hair. When applied correctly and maintained properly, extensions shouldn’t damage your natural hair, and we always assess your hair before fitting.' },
      { q: 'Can I have nano rings if my hair is fine or thin?', a: 'Often, yes. Nano rings are lightweight and suitable for most hair types. We’ll assess your hair at your consultation and recommend the method that suits it.' },
      { q: 'Nano ring or tape-in extensions: which is better?', a: <>It depends on your hair and lifestyle. Nano rings are fitted strand by strand with no heat or glue. <Link to="/tape-in-extensions-bedfordshire">Tape-ins</Link> are quick to fit and lie completely flat. We’ll recommend the right method at your consultation.</> },
    ],
  },

  '/la-weave-extensions-bedfordshire': {
    service: 'LA Weave extensions',
    noun: 'LA Weave extensions',
    hero: { img: '/la-weave.webp', alt: 'Long, sleek brunette hair with LA Weave extensions at Essence in Luton' },
    tag: 'Essence · Luton, Bedfordshire',
    title: <>LA Weave Extensions in Luton &amp; <em>Bedfordshire</em></>,
    lead: 'Essence Hair Treatment fits LA Weave hair extensions at our salon in Luton, Bedfordshire, rated 5.0 from over 300 Google reviews. LA Weave uses sewn-in wefts secured with small beads, with no heat or glue, for full, glamorous length and thickness, colour-matched to your own hair.',
    cta: { label: 'Book a Consultation', href: CONSULT_URL },
    cardsHead: { title: <>Other extension <em>methods</em></>, text: 'Not sure LA Weave is right for you? We fit four methods and will recommend the best one for your hair at your consultation.' },
    cards: others(EXT_METHODS, '/la-weave-extensions-bedfordshire'),
    why: {
      title: <>Why choose Essence for <em>LA Weave</em></>,
      items: [
        ['Length, volume and thickness', 'Wefts add length, volume and thickness in one, for full, glamorous results.'],
        ['No heat or glue', 'The wefts are sewn in and secured with small beads, so they sit comfortably and blend seamlessly with your natural hair.'],
        ['We train other stylists', <>Our ABT-accredited <Link to="/academy">Essence Academy</Link> teaches LA Weave alongside tape, nano ring and micro ring extensions in its 4-method course.</>],
      ],
    },
    steps: extSteps('Come with freshly washed hair, straightened for a new fitting. We secure the wefts with small beads and sew them in, with no heat or glue.'),
    aftercare: AFTERCARE,
    prices: ['weft', 'extExtras'],
    reviewMatch: /weave/i,
    faqs: [
      { q: 'What is an LA Weave?', a: 'A hair extension method using sewn-in wefts secured with small beads, with no heat or glue. It adds instant length, volume and thickness, and is a long-lasting, reusable option.' },
      costFaq('How much do LA Weave extensions cost?', 'weft'),
      { q: 'Is LA Weave damaging to your hair?', a: 'LA Weave uses no heat or glue. When applied correctly and maintained properly, extensions shouldn’t damage your natural hair, and we always assess your hair before fitting.' },
      { q: 'LA Weave or tape-in extensions: which is better?', a: <>LA Weave is perfect for full, glamorous volume and thickness. <Link to="/tape-in-extensions-bedfordshire">Tape-ins</Link> are ultra-flat wefts that are quick to fit. We’ll recommend the right method for your hair at your consultation.</> },
    ],
  },

  '/nanoplastia-bedfordshire': {
    service: 'Nanoplastia',
    noun: 'Nanoplastia',
    hero: { img: '/img-new-03.webp', alt: 'Long, smooth, frizz-free hair after a Nanoplastia treatment at Essence in Luton' },
    tag: 'Essence · Luton, Bedfordshire',
    title: <>Nanoplastia in Luton &amp; <em>Bedfordshire</em></>,
    lead: 'Essence Hair Treatment offers Nanoplastia at our salon in Luton, Bedfordshire, rated 5.0 from over 300 Google reviews. Nanoplastia is an organic, formaldehyde-free smoothing treatment that restructures and hydrates the hair, reducing frizz and styling time while keeping natural movement and volume. Results typically last 3–5 months.',
    cta: { label: 'Book Nanoplastia', href: BOOK_URL },
    cardsHead: { title: <>Compare our <em>treatments</em></>, text: 'All our treatments are formaldehyde-free. We’ll recommend the right one for your hair type at your consultation.' },
    cards: others(TREATMENTS, '/nanoplastia-bedfordshire'),
    why: {
      title: <>Why choose Essence for <em>Nanoplastia</em></>,
      items: [
        ['Organic and formaldehyde-free', 'A professional-grade, formaldehyde-free formula that delivers smooth results without compromising your health.'],
        ['Keeps natural movement', 'Nanoplastia is gentler than Keratin and refines curl rather than fully removing it, so your hair stays soft with natural movement and volume.'],
        ['We teach it', <>Our ABT-accredited <Link to="/academy">Essence Academy</Link> runs a one-to-one Nanoplastia course, training stylists in the science, application and client suitability.</>],
      ],
    },
    steps: treatmentSteps('We apply Nanoplastia to restructure and hydrate your hair, reducing frizz while keeping its natural movement and volume.', 'Smoother, shinier, more manageable hair that typically lasts 3–5 months, depending on your hair type and how often you wash.'),
    aftercare: AFTERCARE,
    prices: ['nanoplastia'],
    reviewMatch: /nanoplastia/i,
    faqs: [
      { q: 'What is Nanoplastia?', a: 'An organic, formaldehyde-free smoothing treatment that works at a molecular level to restructure and hydrate the hair. It reduces frizz, improves condition and cuts down styling time while keeping natural movement and volume.' },
      costFaq('How much does Nanoplastia cost?', 'nanoplastia'),
      { q: 'What’s the difference between Nanoplastia and Keratin?', a: <><Link to="/keratin-treatment-bedfordshire">Keratin</Link> replenishes your hair’s natural protein, creating a smooth, frizz-free finish lasting 3–5 months. Nanoplastia works at a molecular level to restructure and hydrate. It’s gentler and doesn’t fully eliminate curl; it refines it. Both are 100% formaldehyde-free, and we’ll advise which suits your hair type at your consultation.</> },
      { q: 'How long does Nanoplastia last?', a: 'Results typically last 3–5 months depending on your hair type and how often you wash. Using sulphate-free shampoos and conditioners significantly extends the results.' },
      formaldehydeFaq,
      colouredHairFaq,
    ],
  },

  '/keratin-treatment-bedfordshire': {
    service: 'Keratin treatment',
    noun: 'Keratin treatment',
    hero: { img: '/keratin.webp', alt: 'Long, sleek jet-black hair after a Keratin smoothing treatment at Essence in Luton' },
    tag: 'Essence · Luton, Bedfordshire',
    title: <>Keratin Treatment in Luton &amp; <em>Bedfordshire</em></>,
    lead: 'Essence Hair Treatment offers formaldehyde-free Keratin treatments at our salon in Luton, Bedfordshire, rated 5.0 from over 300 Google reviews. Keratin replenishes your hair’s natural protein for a smooth, frizz-free finish lasting 3–5 months, leaving hair softer, shinier and easier to style.',
    cta: { label: 'Book a Keratin Treatment', href: BOOK_URL },
    cardsHead: { title: <>Compare our <em>treatments</em></>, text: 'All our treatments are formaldehyde-free. We’ll recommend the right one for your hair type at your consultation.' },
    cards: others(TREATMENTS, '/keratin-treatment-bedfordshire'),
    why: {
      title: <>Why choose Essence for <em>Keratin</em></>,
      items: [
        ['Formaldehyde-free', 'Organic, professional-grade keratin that smooths, strengthens and nourishes the hair without formaldehyde.'],
        ['Smooth for 3–5 months', 'A frizz-free finish that makes hair easier to style and cuts down your styling time for months.'],
        ['We teach it', <>Our ABT-accredited <Link to="/academy">Essence Academy</Link> runs a one-to-one Keratin course covering consultation, strand testing, application, heat activation and aftercare.</>],
      ],
    },
    steps: treatmentSteps(
      'We apply the keratin and activate it with heat to smooth, strengthen and nourish your hair.',
      'A smooth, frizz-free finish that typically lasts 3–5 months, depending on your hair type and how often you wash.',
      'Don’t wash your hair for 72 hours, then use sulphate-free shampoo and conditioner. Avoid tight hairstyles, swimming and humidity for the first 72 hours.',
    ),
    aftercare: ['No washing for 72 hours after your treatment', ...AFTERCARE],
    prices: ['keratin'],
    reviewMatch: /keratin/i,
    faqs: [
      { q: 'What is a Keratin treatment?', a: 'A smoothing treatment that replenishes your hair’s natural protein, reducing frizz and improving manageability. It leaves hair softer, shinier and easier to style.' },
      costFaq('How much does a Keratin treatment cost?', 'keratin'),
      { q: 'How long does a Keratin treatment last?', a: 'Results typically last 3–5 months depending on your hair type and how often you wash. Using sulphate-free shampoos and conditioners significantly extends the results.' },
      { q: 'Keratin or Nanoplastia: which should I choose?', a: <>Keratin creates a smooth, frizz-free finish. <Link to="/nanoplastia-bedfordshire">Nanoplastia</Link> is gentler and refines curl rather than fully removing it, keeping more natural movement. Both are 100% formaldehyde-free, and we’ll advise which suits your hair type at your consultation.</> },
      { q: 'When can I wash my hair after Keratin?', a: 'Wait 72 hours before washing, then use sulphate-free shampoo and conditioner to make your results last.' },
      formaldehydeFaq,
      colouredHairFaq,
    ],
  },

  '/hair-botox-bedfordshire': {
    service: 'Hair Botox',
    noun: 'Hair Botox',
    hero: { img: '/hair-botox.webp', alt: 'Long, smooth brunette hair with subtle highlights after Hair Botox at Essence in Luton' },
    tag: 'Essence · Luton, Bedfordshire',
    title: <>Hair Botox in Luton &amp; <em>Bedfordshire</em></>,
    lead: 'Essence Hair Treatment offers Hair Botox at our salon in Luton, Bedfordshire, rated 5.0 from over 300 Google reviews. Hair Botox is a formaldehyde-free deep repair treatment that restores softness, shine and strength to damaged hair from root to tip, smoothing frizz and reducing breakage for up to 4 months.',
    cta: { label: 'Book Hair Botox', href: BOOK_URL },
    cardsHead: { title: <>Compare our <em>treatments</em></>, text: 'All our treatments are formaldehyde-free. We’ll recommend the right one for your hair type at your consultation.' },
    cards: others(TREATMENTS, '/hair-botox-bedfordshire'),
    why: {
      title: <>Why choose Essence for <em>Hair Botox</em></>,
      items: [
        ['Deep repair', 'Made for damaged hair: it restores softness, shine and strength from root to tip and helps reduce breakage.'],
        ['Lasts up to 4 months', 'Smoother, healthier, more manageable hair with results that last well beyond your salon visit.'],
        ['We teach it', <>Our ABT-accredited <Link to="/academy">Essence Academy</Link> runs a full Hair Botox training day: client assessment, product layering, heat sealing and aftercare.</>],
      ],
    },
    steps: treatmentSteps('We layer the treatment through your hair and seal it with heat to repair and smooth from root to tip.', 'Softer, shinier, stronger hair with less frizz and breakage, lasting up to 4 months.'),
    aftercare: AFTERCARE,
    prices: ['botox'],
    reviewMatch: /botox/i,
    faqs: [
      { q: 'What is Hair Botox?', a: 'A deep repair treatment that rejuvenates damaged hair, restoring softness, shine and strength from root to tip. It helps smooth frizz, reduce breakage and improve overall condition.' },
      costFaq('How much does Hair Botox cost?', 'botox'),
      { q: 'How long does Hair Botox last?', a: 'Results last up to 4 months, depending on your hair type and aftercare. Using sulphate-free shampoos and conditioners helps them last.' },
      { q: 'Hair Botox, Keratin or Nanoplastia: which do I need?', a: <>Hair Botox focuses on repairing damaged hair. <Link to="/keratin-treatment-bedfordshire">Keratin</Link> and <Link to="/nanoplastia-bedfordshire">Nanoplastia</Link> are smoothing treatments for frizz. We’ll assess your hair and recommend the right one at your consultation.</> },
      formaldehydeFaq,
      colouredHairFaq,
    ],
  },

  '/highlights-bedfordshire': {
    service: 'Highlights',
    hero: { img: '/img-new-08.webp', alt: 'Bronde highlights with soft, bouncy curls at Essence in Luton' },
    tag: 'Essence · Luton, Bedfordshire',
    title: <>Highlights in Luton &amp; <em>Bedfordshire</em></>,
    lead: 'Essence Hair Treatment offers highlights at our salon in Luton, Bedfordshire, rated 5.0 from over 300 Google reviews. Choose T-section, half head or full head highlights, each with a bonding treatment to protect your hair and bespoke toning to perfect your shade.',
    cta: { label: 'Book Your Highlights', href: BOOK_URL },
    cardsHead: { title: <>More colour <em>services</em></>, text: 'Not sure whether highlights, balayage or an all-over colour suits you best? We’ll talk it through at your free colour consultation.' },
    cards: others(COLOUR_SERVICES, '/highlights-bedfordshire'),
    why: {
      title: <>Why choose Essence for <em>highlights</em></>,
      items: [
        ['T-section, half or full head', 'From a refresh along your parting to all-over brightness, we place your highlights for the brightness, depth and dimension you want.'],
        ['Bonding and toning included', 'A bonding treatment protects and strengthens your hair while it’s coloured, and bespoke toning perfects your shade.'],
        ['We teach colour', <>Our ABT-accredited <Link to="/academy">Essence Academy</Link> trains stylists in colour, from highlighting and professional toning to advanced colour.</>],
      ],
    },
    steps: colourSteps('We place your highlights, protect your hair with a bonding treatment, then tone them to your perfect shade.'),
    aftercare: COLOUR_AFTERCARE,
    prices: ['highlights', 'toner'],
    reviewMatch: /highlight/i,
    faqs: [
      { q: 'What’s the difference between T-section, half head and full head highlights?', a: 'T-section highlights are placed along your parting and hairline for a subtle lift. Half head highlights cover the top and sides, and full head highlights give brightness all over.' },
      costFaq('How much do highlights cost?', 'highlights'),
      { q: 'Should I choose highlights or balayage?', a: <>Highlights are placed to give a more defined, customised level of brightness. <Link to="/balayage-bedfordshire">Balayage</Link> is hand-painted for soft, blended dimension that grows out gently. Both include a bonding treatment and bespoke toning, and we’ll recommend the right one at your consultation.</> },
      patchTestFaq,
      { q: 'How do I keep my highlights looking fresh?', a: <>Wait at least 48 hours before washing, rinse with lukewarm or cool water and use a weekly hair mask. Book a toner refresh between colour appointments: toner only is {formatPrice(PRICE_GROUPS.toner.items[0][1])}.</> },
    ],
  },

  '/hair-colour-bedfordshire': {
    service: 'Hair colour',
    hero: { img: '/tint.webp', alt: 'Rich chocolate-brown hair colour with glossy curls at Essence in Luton' },
    tag: 'Essence · Luton, Bedfordshire',
    title: <>Hair Colour in Luton &amp; <em>Bedfordshire</em></>,
    lead: 'Essence Hair Treatment offers hair colour at our salon in Luton, Bedfordshire, rated 5.0 from over 300 Google reviews: root colour, full head colour, grey coverage, toner refreshes and colour correction. Every colour service includes a bonding treatment to protect the strength and condition of your hair.',
    cta: { label: 'Book Your Colour', href: BOOK_URL },
    cardsHead: { title: <>More colour <em>services</em></>, text: 'Looking for more brightness and dimension? Ask about balayage and highlights at your free colour consultation.' },
    cards: others(COLOUR_SERVICES, '/hair-colour-bedfordshire'),
    why: {
      title: <>Why choose Essence for <em>colour</em></>,
      items: [
        ['Roots to full head', 'Root colour for up to 8 weeks’ growth or more, and full head colour for every length, from above the chin to the hips.'],
        ['Grey coverage your way', 'Blend greys softly or cover them completely, while enhancing your overall colour.'],
        ['Bonding included', 'Every colour appointment includes a bonding treatment to help keep your hair strong and in good condition.'],
      ],
    },
    steps: colourSteps('We apply your colour, with a bonding treatment to protect the strength and condition of your hair, for rich, glossy, even results.'),
    aftercare: COLOUR_AFTERCARE,
    prices: ['colour', 'toner'],
    reviewMatch: /colour|tint|root/i,
    faqs: [
      costFaq('How much does hair colour cost?', 'colour'),
      { q: 'Do you cover grey hair?', a: 'Yes. We can softly blend greys or cover them completely, with root colour every few weeks to keep regrowth fresh. Every colour service includes a bonding treatment.' },
      { q: 'What is a toner refresh?', a: <>A toner refreshes your shade between colour appointments. Toner only is {formatPrice(PRICE_GROUPS.toner.items[0][1])}, or add a wash and blow dry from {formatPrice(PRICE_GROUPS.toner.items[1][1])}.</> },
      { q: 'Do you do colour correction?', a: <>Yes. Colour correction is priced at your consultation, as every case is different. We also offer a pre-fill for pre-lightened hair ({formatPrice(PRICE_GROUPS.colour.items.find(([n]) => n.startsWith('Pre-fill'))[1])}).</> },
      patchTestFaq,
      { q: 'Can you guarantee my colour results?', a: 'Colour results vary between individuals and can’t be guaranteed, so we always carry out a thorough consultation first to agree what’s achievable for your hair.' },
    ],
  },

  '/hybrid-extensions-bedfordshire': {
    service: 'Hybrid extensions',
    hero: { img: '/hybrid-extensions.webp', alt: 'Long icy-blonde balayage with hybrid hair extensions at Essence in Luton' },
    tag: 'Essence · Luton, Bedfordshire',
    title: <>Hybrid Extensions in Luton &amp; <em>Bedfordshire</em></>,
    lead: 'Essence Hair Treatment fits hybrid hair extensions at our salon in Luton, Bedfordshire, rated 5.0 from over 300 Google reviews. Hybrid extensions combine rows of wefts with nano rings or tapes for a fully customised result, with added length and volume and the most natural blend.',
    cta: { label: 'Book a Consultation', href: CONSULT_URL },
    cardsHead: { title: <>Other extension <em>methods</em></>, text: 'Not sure a hybrid is right for you? We fit four methods and will recommend the best one for your hair at your consultation.' },
    cards: others(EXT_METHODS, '/hybrid-extensions-bedfordshire'),
    why: {
      title: <>Why choose Essence for <em>hybrids</em></>,
      items: [
        ['Two methods, one result', 'Combining wefts with nano rings or tapes lets us build length and volume exactly where you want it, for maximum comfort and flexibility.'],
        ['Built around your hair', 'Choose one, two or three rows of weft with one or two packs of nano rings or tapes, tailored to your hair type and the look you want.'],
        ['We train other stylists', <>Our ABT-accredited <Link to="/academy">Essence Academy</Link> teaches tape, nano ring, micro ring and LA Weave extensions in its 4-method course.</>],
      ],
    },
    steps: extSteps('Come with freshly washed hair, straightened for a new fitting. We fit your weft rows and blend them with nano rings or tapes.'),
    aftercare: AFTERCARE,
    prices: ['hybrid', 'extExtras'],
    reviewMatch: /hybrid/i,
    faqs: [
      { q: 'What are hybrid extensions?', a: 'Two extension methods combined: rows of weft with nano rings or tapes. Blending methods gives a fully customised, seamless result with added volume, length and long-lasting wear.' },
      costFaq('How much do hybrid extensions cost?', 'hybrid'),
      { q: 'Which combination do I need?', a: 'It depends on your hair and how much length and volume you want. We’ll recommend the number of weft rows and packs at your free consultation.' },
      { q: 'Can you remove my hybrid extensions?', a: <>Yes. Hybrid removal is {formatPrice(PRICE_GROUPS.hybrid.items.find(([n]) => n === 'Hybrid removal')[1])}, or {formatPrice(PRICE_GROUPS.hybrid.items.find(([n]) => n.startsWith('Hybrid removal with'))[1])} with a wash and blow dry. Removing extensions yourself invalidates any warranty on the hair.</> },
    ],
  },

  '/head-spa-bedfordshire': {
    service: 'Head spa',
    hero: { img: '/studio.webp', alt: 'Inside the Essence salon in Luton, with arched mirrors and styling chairs' },
    tag: 'Essence · Luton, Bedfordshire',
    title: <>Head Spa in Luton &amp; <em>Bedfordshire</em></>,
    lead: 'Essence Hair Treatment offers head spa treatments at our salon in Luton, Bedfordshire, rated 5.0 from over 300 Google reviews. Choose a head spa for hair loss and thinning, a dry or itchy scalp, or hydration: a relaxing scalp treatment that promotes a healthy scalp and healthy hair.',
    cta: { label: 'Book a Head Spa', href: BOOK_URL },
    cardsHead: { title: <>Our hair <em>treatments</em></>, text: 'Pair your head spa with one of our formaldehyde-free hair treatments for healthier, smoother hair.' },
    cards: TREATMENTS,
    why: {
      title: <>Why choose Essence for a <em>head spa</em></>,
      items: [
        ['Three targeted treatments', 'Hair loss and thinning, dry or itchy scalp, or hydration. Choose the head spa for what your scalp needs most.'],
        ['Time to relax', 'Around 1 hour 20 minutes of scalp care in our cosy, welcoming Luton studio.'],
        ['Add a little extra', 'Add an Indian head massage, or a scalp scrub, hair mask and head massage. A Kérastase scalp scrub is also available on its own.'],
      ],
    },
    steps: [
      ['Choose your head spa', 'Pick the treatment for your scalp: hair loss and thinning, dry or itchy scalp, or hydration. Not sure? Ask us when you book.'],
      ['Relax', 'Settle in for around 1 hour 20 minutes of scalp care in our cosy studio.'],
      ['Add-ons', 'Add an Indian head massage, or a scalp scrub, hair mask and head massage, to make the most of your visit.'],
      ['Healthy hair', 'A healthy scalp promotes healthy hair. Pair your head spa with a hair treatment for softer, smoother results.'],
    ],
    prices: ['headspa'],
    reviewMatch: /head spa|scalp/i,
    faqs: [
      { q: 'What is a head spa?', a: 'A relaxing scalp treatment that promotes a healthy scalp and healthy hair. At Essence we offer three: for hair loss and thinning, for a dry or itchy scalp, and for hydration.' },
      costFaq('How much does a head spa cost?', 'headspa'),
      { q: 'Which head spa should I choose?', a: 'Choose by what your scalp needs most: hair loss and thinning, a dry or itchy scalp, or hydration. If you’re unsure, ask us when you book and we’ll help you choose.' },
      { q: 'How long does a head spa take?', a: 'Each head spa treatment takes around 1 hour 20 minutes.' },
    ],
  },
}
