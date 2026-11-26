// What each `service` tag in public/instagram/posts.json means: its label, which
// gallery filter it falls under, and the service page it links to.
// To tag a new photo, give its posts.json entry one of these keys.
export const GALLERY_SERVICES = {
  balayage: { label: 'Balayage', filter: 'balayage', to: '/balayage-bedfordshire' },
  highlights: { label: 'Highlights', filter: 'highlights', to: '/highlights-bedfordshire' },
  colour: { label: 'Hair colour', filter: 'colour', to: '/hair-colour-bedfordshire' },
  extensions: { label: 'Hair extensions', filter: 'extensions', to: '/hair-extensions-bedfordshire' },
  'tape-in': { label: 'Tape-in extensions', filter: 'extensions', to: '/tape-in-extensions-bedfordshire' },
  'nano-ring': { label: 'Nano ring extensions', filter: 'extensions', to: '/nano-ring-extensions-bedfordshire' },
  nanoplastia: { label: 'Nanoplastia', filter: 'treatments', to: '/nanoplastia-bedfordshire' },
  keratin: { label: 'Keratin', filter: 'treatments', to: '/keratin-treatment-bedfordshire' },
  'hair-botox': { label: 'Hair Botox', filter: 'treatments', to: '/hair-botox-bedfordshire' },
  'head-spa': { label: 'Head spa', filter: 'treatments', to: '/head-spa-bedfordshire' },
  salon: { label: 'The salon' },
}

// Filter buttons, in display order. A filter only shows when it has at least two photos.
export const GALLERY_FILTERS = [
  ['balayage', 'Balayage'],
  ['highlights', 'Highlights'],
  ['colour', 'Colour'],
  ['extensions', 'Extensions'],
  ['treatments', 'Treatments'],
]

// The gallery shows image.webp in place of the salon interior photo (the Home feed keeps the original).
const SWAPS = {
  'essence-salon-interior-luton.webp': { src: '/image.webp', service: 'balayage', alt: 'Ash-bronde balayage on straight, mid-length hair, at Essence in Luton' },
}

// posts.json entries -> what the gallery shows.
export function galleryPhotos(posts) {
  return posts.map(p => SWAPS[p.file] ?? { src: `/instagram/${p.file}`, service: p.service, alt: p.alt || p.caption })
}
