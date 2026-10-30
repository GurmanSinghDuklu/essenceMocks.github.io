// The salon's price list, copied from the Timely booking menu (October 2026).
// Used by the Prices page, the price sections on the service pages and the schema.
// A price is a number in pounds, or a string such as 'Free' or 'Price on consultation'.

export const PRICES_UPDATED = 'October 2026'

export const PRICE_GROUPS = {
  balayage: {
    title: 'Balayage',
    from: 180,
    note: 'Includes a bonding treatment and bespoke toning.',
    items: [
      ['Partial balayage package', 180],
      ['Money piece lightening', 90],
      ['No-bleach balayage', 190],
      ['Balayage (chin to shoulder length)', 200],
      ['Reverse balayage', 210],
      ['Balayage (shoulder to mid-back length)', 240],
      ['Balayage transformation (heavy balayage, full head lightening)', 250],
      ['Balayage (mid-back to hips)', 270],
    ],
  },
  highlights: {
    title: 'Highlights',
    note: 'Includes a bonding treatment and bespoke toning.',
    items: [
      ['T-section highlights (short hair, above shoulders)', 90],
      ['T-section highlights (shoulder to mid-back)', 120],
      ['T-section highlights (mid-back to extra long)', 150],
      ['Half head highlights (above shoulder length)', 120],
      ['Half head highlights (shoulder to mid-back)', 150],
      ['Half head highlights (extra long)', 180],
      ['Full head highlights (above shoulder length)', 180],
      ['Full head highlights (shoulder to mid-back)', 220],
      ['Full head highlights (extra long)', 250],
    ],
  },
  colour: {
    title: 'Colour',
    from: 45,
    note: 'Every colour service includes a bonding treatment.',
    items: [
      ['Colour consultation & patch test', 'Free'],
      ['Root colour (up to 8 weeks’ growth)', 45],
      ['Root colour (more than 8 weeks’ growth)', 55],
      ['Roots & cut (up to 8 weeks’ growth)', 60],
      ['Root colour, toner & cut', 90],
      ['Full head colour (above the chin)', 70],
      ['Full head colour (chin to shoulder)', 90],
      ['Full head colour (shoulder to mid-back)', 110],
      ['Full head colour (mid-back to hips)', 140],
      ['Pre-fill (colour correction for pre-lightened hair)', 20],
      ['Colour correction', 'Price on consultation'],
    ],
  },
  toner: {
    title: 'Toner refresh',
    items: [
      ['Toner only (without blow dry)', 35],
      ['Toner refresh with wash & blow dry (fine/medium hair)', 40],
      ['Toner refresh with wash & blow dry (thick/extra thick hair)', 60],
      ['Toner refresh with wash, cut & blow dry', 70],
      ['Toner & roots (less than 8 weeks’ growth)', 80],
      ['Toner refresh, grey roots & cut', 95],
    ],
  },
  cut: {
    title: 'Cut & finish',
    items: [
      ['Cut & finish (short, shoulder & above, fine/medium hair)', 40],
      ['Cut & finish (below shoulder to mid-back, fine/medium hair)', 45],
      ['Cut & finish (long, fine/medium hair)', 50],
      ['Wash & cut', 30],
      ['Dry cut (trim only)', 25],
      ['Blow dry (straight)', 25],
      ['Wash & wand', 25],
    ],
  },
  nanoplastia: {
    title: 'Nanoplastia',
    items: [
      ['Nanoplastia (fine hair)', 180],
      ['Nanoplastia (medium thickness)', 190],
      ['Nanoplastia (thick hair)', 210],
      ['Nanoplastia (extra thick hair)', 230],
    ],
  },
  keratin: {
    title: 'Keratin treatment',
    items: [
      ['Keratin treatment (fine hair)', 150],
      ['Keratin treatment (medium thickness)', 170],
      ['Keratin treatment (thick hair)', 190],
      ['Keratin treatment (extra thick hair)', 220],
    ],
  },
  botox: {
    title: 'Hair Botox',
    items: [
      ['Hair Botox (fine hair)', 120],
      ['Hair Botox (medium thickness)', 130],
      ['Hair Botox (thick hair)', 140],
      ['Hair Botox (extra thick hair)', 160],
    ],
  },
  headspa: {
    title: 'Head spa & scalp',
    from: 60,
    items: [
      ['Head spa: hair loss & thinning', 60],
      ['Head spa: dry or itchy scalp', 60],
      ['Head spa: hydration', 60],
      ['Kérastase scalp scrub', 30],
      ['Indian head massage (add-on)', 30],
      ['Scalp scrub, hair mask & head massage (add-on)', 30],
    ],
  },
  addons: {
    title: 'Add-ons',
    items: [
      ['Fringe trim', 10],
      ['Hair mask (hydration)', 10],
      ['Cut with hair treatment', 30],
    ],
  },
  tape: {
    title: 'Tape-in extensions',
    from: 40,
    items: [
      ['Tape fitting, 1 pack (50g)', 40],
      ['Tape fitting, 2 packs (100g)', 80],
      ['Tape fitting, 3 packs (150g)', 100],
      ['Tape fitting, extra full head (200g)', 120],
      ['Tape maintenance (¼ head)', 65],
      ['Tape maintenance (½ head)', 95],
      ['Tape maintenance, all in one (150g and over)', 110],
      ['Tape removal', 30],
      ['Tape removal with wash & blow dry', 50],
    ],
  },
  nano: {
    title: 'Nano ring extensions',
    from: 50,
    items: [
      ['Nano fitting (¼ head)', 50],
      ['Nano fitting (½ head)', 90],
      ['Nano fitting (full head)', 120],
      ['Nano fitting (extra full head)', 140],
      ['Nano maintenance (¼ head)', 75],
      ['Nano maintenance (½ head)', 100],
      ['Nano maintenance (full head)', 120],
      ['Nano maintenance (extra full head)', 140],
      ['Nano removal', 30],
      ['Nano removal with wash & blow dry', 50],
    ],
  },
  weft: {
    title: 'Weft & LA Weave extensions',
    from: 40,
    items: [
      ['One row weft fitting', 40],
      ['Two row weft fitting', 80],
      ['Three row weft fitting', 90],
      ['One row weft fitting with wash & blow dry', 55],
      ['Two row weft fitting with wash & blow dry', 95],
      ['Three row weft fitting with wash & blow dry', 110],
      ['One row removal & refit', 50],
      ['Two rows removal & refit', 80],
      ['Three rows removal & refit', 110],
      ['Weave push-up (under 4 weeks)', 25],
      ['Removal per row', 10],
      ['Weft removal', 20],
      ['Weft removal with wash & blow dry', 50],
    ],
  },
  hybrid: {
    title: 'Hybrid extensions',
    from: 60,
    items: [
      ['1 row weft & 1 pack nano/tape', 60],
      ['1 row weft & 2 packs nano/tape', 95],
      ['2 row weft & 1 pack nano/tape', 90],
      ['2 row weft & 2 packs nano/tape', 100],
      ['3 row weft & 1 pack nano/tape', 105],
      ['3 row weft & 2 packs nano/tape', 120],
      ['Hybrid removal', 35],
      ['Hybrid removal with wash & blow dry', 50],
    ],
  },
  extExtras: {
    title: 'Extension consultations & mini maintenance',
    items: [
      ['Hair extension consultation', 'Free'],
      ['Mini maintenance', 20],
    ],
  },
}

// How the full price list is laid out on the Prices page.
export const PRICE_SECTIONS = [
  { title: 'Colour', groups: ['balayage', 'highlights', 'colour', 'toner'] },
  { title: 'Treatments', groups: ['nanoplastia', 'keratin', 'botox', 'headspa'] },
  { title: 'Cut & style', groups: ['cut', 'addons'] },
  { title: 'Hair extensions', groups: ['tape', 'nano', 'weft', 'hybrid', 'extExtras'] },
]

export const formatPrice = p => (typeof p === 'number' ? `£${p}` : p)

// Starting price for a group: its `from` (set where the cheapest item is a removal
// or an extra rather than the service itself), otherwise its lowest price.
export function fromPrice(id) {
  const group = PRICE_GROUPS[id]
  return group.from ?? Math.min(...group.items.map(([, p]) => p).filter(p => typeof p === 'number'))
}

// Answer to "How much does X cost?", written straight from a price group.
export function costAnswer(id) {
  const items = PRICE_GROUPS[id].items.map(([name, price]) => `${name} ${formatPrice(price)}`).join('; ')
  return `${PRICE_GROUPS[id].title} prices: ${items}. Prices depend on your hair’s length and thickness, and we’ll confirm yours at your consultation.`
}
