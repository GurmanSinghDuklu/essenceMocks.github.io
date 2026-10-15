import { useState, useEffect } from 'react'
import bundled from '../../public/reviews.json'

// Reviews live in /public/reviews.json. The copy bundled at build time is
// rendered straight into the page (so crawlers see the review text); the live
// file is re-fetched in the browser so edits still show without a rebuild.
// Only 5-star reviews are shown; anything lower is filtered out here.
const DEFAULT_SUMMARY = { rating: 5, count: 300, source: 'Google' }

function normalise(d) {
  const reviews = (d.reviews || []).filter(r => (r.rating ?? 5) === 5)
  return { summary: { ...DEFAULT_SUMMARY, ...d.summary }, reviews }
}

export default function useReviews() {
  const [data, setData] = useState(() => normalise(bundled))

  useEffect(() => {
    let active = true
    fetch('/reviews.json')
      .then(r => r.json())
      .then(d => { if (active) setData(normalise(d)) })
      .catch(() => {})
    return () => { active = false }
  }, [])

  return data
}
