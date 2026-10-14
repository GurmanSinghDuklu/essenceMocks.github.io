// Single source of truth for business details, per-page meta and structured data.
// Used by useSEO on the client and by scripts/prerender.js at build time.

export const SITE_URL = 'https://www.essencehairtreatment.com'
export const BOOK_URL = 'https://bookings.gettimely.com/essencehairtreatment/bb/book'

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

const OG_IMAGE = `${SITE_URL}/essencelogo.jpg`

export const PAGES = {
  '/': {
    title: 'Essence Hair Treatment | Hair Salon Luton | Balayage & Extensions',
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
    title: 'Essence Hair Treatment | Hair Courses Luton | ABT Accredited Academy',
    description: 'Learn professional hair techniques at Essence Hair Academy in Luton. ABT accredited courses in Nanoplastia, Keratin, balayage & extensions.',
    crumb: 'Academy',
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
    areaServed: b.areaServed.map(name => ({ '@type': 'City', name })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Friday'],
        opens: '09:30',
        closes: '17:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Thursday',
        opens: '10:00',
        closes: '19:00',
      },
    ],
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
