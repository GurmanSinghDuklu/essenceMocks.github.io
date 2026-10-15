// Single source of truth for business details, per-page meta and structured data.
// Used by useSEO on the client and by scripts/prerender.js at build time.

export const SITE_URL = 'https://www.essencehairtreatment.com'
export const BOOK_URL = 'https://bookings.gettimely.com/essencehairtreatment/bb/book'
export const CONSULT_URL = 'https://bookings.gettimely.com/essencehairtreatment/book?uri=https%3A%2F%2Fbook.gettimely.com%2FBooking%2FLocation%2F290341%3Fmobile%3DTrue%26params%3D%25253fclient-login%25253dtrue'

export const BUSINESS = {
  name: 'Essence Hair Treatment',
  alternateName: ['Essence Hair', 'Essence Keratin Hair', 'Essence Hair Luton'],
  telephone: '+447375956131',
  streetAddress: '6 Woodmere',
  addressLocality: 'Luton',
  addressRegion: 'Bedfordshire',
  postalCode: 'LU3 4DN',
  addressCountry: 'GB',
  latitude: 51.924746,
  longitude: -0.439772,
  areaServed: ['Luton', 'Dunstable', 'Houghton Regis', 'Barton-le-Clay', 'Toddington', 'Harpenden', 'Leighton Buzzard', 'Hitchin'],
  sameAs: [
    'https://www.instagram.com/essence.hairtreatment/',
    'https://www.tiktok.com/@essencehairtreatment',
    'https://www.facebook.com/essencekeratinluton',
  ],
}

// Regular opening hours (used for the schema). Saturdays are by advance booking only,
// so they're shown on the page but left out of the schema.
export const HOURS = [
  { days: ['Monday', 'Tuesday', 'Wednesday', 'Friday'], opens: '09:30', closes: '17:30' },
  { days: ['Thursday'], opens: '10:00', closes: '19:00' },
]

// The same hours as visible text, for the page and the opening-hours FAQ.
export const HOURS_TEXT = [
  ['Mon – Wed', '9:30am – 5:30pm'],
  ['Thursday', '10am – 7pm'],
  ['Friday', '9:30am – 5:30pm'],
  ['Saturday', 'Limited appointments, book 6 weeks ahead'],
  ['Sunday', 'Closed'],
]

const OG_IMAGE = `${SITE_URL}/essencelogo.jpg`

export const PAGES = {
  '/': {
    title: 'Essence Hair Treatment | Hair Salon in Luton, Bedfordshire',
    description: 'Hair salon in Luton, Bedfordshire rated 5.0 from 300+ Google reviews. Balayage, highlights, hair extensions, Nanoplastia & Keratin treatments. Book online today.',
  },
  '/services': {
    title: 'Essence Hair Treatment | Hair Services Luton | Balayage & Keratin',
    description: 'Full range of hair services in Luton — balayage, highlights, hair extensions, Nanoplastia, Keratin, Hair Botox, cuts & styling. Book online today.',
    crumb: 'Services',
  },
  '/gallery': {
    title: 'Essence Hair Treatment | Hair Transformations Gallery Luton',
    description: 'Browse real client hair transformations in Luton — balayage, hair extensions, colour and treatments at Essence Hair Treatment, Bedfordshire.',
    crumb: 'Gallery',
  },
  '/top-tips': {
    title: 'Essence Hair Treatment | Hair Care Tips | Luton',
    description: 'Expert hair care advice from Essence Hair Treatment in Luton. How to maintain your balayage, colour, hair extensions and treatments at home.',
    crumb: 'Top Tips',
  },
  '/faqs': {
    title: 'Essence Hair Treatment | FAQs | Hair Salon Luton',
    description: 'Answers about booking, deposits, cancellations, aftercare and our hair services at Essence Hair Treatment in Luton, Bedfordshire.',
    crumb: 'FAQs',
  },
  '/academy': {
    title: 'Hair Training Academy in Bedfordshire | Essence Academy, Luton',
    description: 'ABT-accredited hair training academy in Luton, Bedfordshire. One-to-one courses in balayage, colour, cutting, Keratin, Nanoplastia, Hair Botox and hair extensions.',
    crumb: 'Academy',
  },
  '/hair-extensions-bedfordshire': {
    title: 'Hair Extensions in Bedfordshire | Essence Hair, Luton',
    description: 'Nano ring, tape-in, LA Weave and hybrid hair extensions in Luton, Bedfordshire. Expert colour matching, rated 5.0 from 300+ Google reviews. Book a consultation.',
    crumb: 'Hair Extensions in Bedfordshire',
  },
  '/balayage-bedfordshire': {
    title: 'Balayage in Bedfordshire | Essence Hair, Luton',
    description: 'Bespoke balayage in Luton, Bedfordshire, with a bonding treatment and custom toning included. Rated 5.0 from 300+ Google reviews. Book online.',
    crumb: 'Balayage in Bedfordshire',
  },
  '/privacy': {
    title: 'Essence Hair Treatment | Privacy & Salon Policy',
    description: 'Read our salon policies, cancellation terms, and privacy information at Essence Hair Treatment in Luton, Bedfordshire.',
    crumb: 'Privacy & Policies',
  },
}

for (const [path, page] of Object.entries(PAGES)) {
  page.canonical = SITE_URL + (path === '/' ? '/' : path)
  page.ogImage = OG_IMAGE
}

const SERVICES = [
  ['Balayage', 'Bespoke balayage with a bonding treatment and toner included.'],
  ['Highlights', 'Custom highlights with a bonding treatment and toner included.'],
  ['Tint', 'All-over colour with a bonding treatment included.'],
  ['Grey Coverage', 'Blending or full coverage of grey hair.'],
  ['Nanoplastia', 'Organic, formaldehyde-free smoothing treatment that lasts for months.'],
  ['Keratin Treatment', 'Formaldehyde-free smoothing treatment lasting 3–5 months.'],
  ['Hair Botox', 'Deep repair treatment for damaged hair, lasting up to 4 months.'],
  ['Cut & Blow Dry', 'Personalised cut, wash and professional blow dry.'],
  ['Styling', 'Curls, waves or a sleek straight finish.'],
  ['Nano Ring Extensions', 'Heat-free, glue-free individually fitted extensions.'],
  ['Tape-In Extensions', 'Flat, discreet, reusable tape extensions.'],
  ['LA Weave Extensions', 'Beaded, sewn-in weft extensions.'],
  ['Hybrid Extensions', 'A combination of extension methods for a custom result.'],
  ['Head Spa', 'Relaxing scalp treatment for healthy hair and scalp.'],
]

export function salonSchema() {
  const b = BUSINESS
  return {
    '@context': 'https://schema.org',
    '@type': 'HairSalon',
    '@id': `${SITE_URL}/#salon`,
    name: b.name,
    alternateName: b.alternateName,
    description: 'Hair salon in Luton, Bedfordshire specialising in balayage, highlights, Nanoplastia, Keratin, Hair Botox, hair extensions, cuts and styling. By appointment only, with free street parking.',
    url: `${SITE_URL}/`,
    telephone: b.telephone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: b.streetAddress,
      addressLocality: b.addressLocality,
      addressRegion: b.addressRegion,
      postalCode: b.postalCode,
      addressCountry: b.addressCountry,
    },
    geo: { '@type': 'GeoCoordinates', latitude: b.latitude, longitude: b.longitude },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${b.name}, ${b.streetAddress}, ${b.addressLocality} ${b.postalCode}`)}`,
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Bedfordshire' },
      ...b.areaServed.map(name => ({ '@type': 'City', name })),
    ],
    openingHoursSpecification: HOURS.map(({ days, opens, closes }) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: days,
      opens,
      closes,
    })),
    priceRange: '££',
    currenciesAccepted: 'GBP',
    paymentAccepted: 'Cash',
    image: [
      `${SITE_URL}/essencelogo.jpg`,
      `${SITE_URL}/studio.jpg`,
      `${SITE_URL}/balayage-blonde.jpeg`,
    ],
    logo: `${SITE_URL}/essencelogo.jpg`,
    sameAs: b.sameAs,
    knowsAbout: ['Balayage', 'Hair colouring', 'Nanoplastia', 'Keratin treatment', 'Hair Botox', 'Hair extensions', 'Tape-in extensions', 'Nano ring extensions'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Hair services',
      itemListElement: SERVICES.map(([name, description]) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name, description, areaServed: 'Luton' },
      })),
    },
    potentialAction: {
      '@type': 'ReserveAction',
      target: { '@type': 'EntryPoint', urlTemplate: BOOK_URL, actionPlatform: ['http://schema.org/DesktopWebPlatform', 'http://schema.org/MobileWebPlatform'] },
      result: { '@type': 'Reservation', name: 'Hair appointment' },
    },
  }
}

export function breadcrumbSchema(path) {
  const page = PAGES[path]
  if (!page?.crumb) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: page.crumb, item: page.canonical },
    ],
  }
}

export function faqSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, text }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text },
    })),
  }
}

// Service schema for the location landing pages.
export function serviceSchema(path, { service }) {
  const page = PAGES[path]
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service} in Bedfordshire`,
    serviceType: service,
    description: page.description,
    url: page.canonical,
    provider: { '@id': `${SITE_URL}/#salon` },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Bedfordshire' },
      ...BUSINESS.areaServed.map(name => ({ '@type': 'City', name })),
    ],
  }
}

// Tells Google the site's name (shown above the result) and the brand's other names.
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: BUSINESS.name,
    alternateName: BUSINESS.alternateName,
    url: `${SITE_URL}/`,
    publisher: { '@id': `${SITE_URL}/#salon` },
  }
}
