import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../Services/Services.css'

// Served as dist/404.html (with a real 404 status) for any unknown URL.
export default function NotFound() {
  useEffect(() => { document.title = 'Page not found | Essence Hair Treatment' }, [])
  return (
    <main>
      <section className="svc-cta" style={{ padding: '160px 20px 120px' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 300, color: '#fff', fontSize: 'clamp(34px,4vw,56px)', marginBottom: 20 }}>
          Page not <em>found</em>
        </h1>
        <p>This page has moved or no longer exists. These might help:</p>
        <p style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', maxWidth: 'none' }}>
          <Link to="/" className="btn-wh">Home</Link>
          <Link to="/services" className="btn-wh">Services</Link>
          <Link to="/balayage-bedfordshire" className="btn-wh">Balayage</Link>
          <Link to="/hair-extensions-bedfordshire" className="btn-wh">Hair Extensions</Link>
          <Link to="/academy" className="btn-wh">Academy</Link>
        </p>
      </section>
    </main>
  )
}
