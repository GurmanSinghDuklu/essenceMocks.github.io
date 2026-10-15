import { useState } from 'react'
// Styles live in pages/FAQs/FAQs.css (faq-item, faq-q, faq-a).
import '../../pages/FAQs/FAQs.css'

export default function AccordionItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button className="faq-q" onClick={() => setOpen(o => !o)} aria-expanded={open}>
        <span>{q}</span>
        <div className="faq-icon">{open ? '−' : '+'}</div>
      </button>
      <div className="faq-a-wrap">
        <div className="faq-a">{a}</div>
      </div>
    </div>
  )
}
