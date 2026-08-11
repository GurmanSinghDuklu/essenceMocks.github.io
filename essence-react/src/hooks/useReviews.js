import { useState, useEffect } from 'react'

// Reviews live in /public/reviews.json so they can be updated without a rebuild.
// Only 5-star reviews are shown; anything lower is filtered out here.
const FALLBACK = {
  summary: { rating: 5, count: 60, source: 'Google' },
  reviews: [],
}

export default function useReviews() {
  const [data, setData] = useState(FALLBACK)

  useEffect(() => {
    let active = true
    fetch('/reviews.json')
      .then(r => r.json())
      .then(d => {
        if (!active) return
        const reviews = (d.reviews || []).filter(r => (r.rating ?? 5) === 5)
        setData({ summary: { ...FALLBACK.summary, ...d.summary }, reviews })
      })
      .catch(() => {})
    return () => { active = false }
  }, [])

  return data
}
