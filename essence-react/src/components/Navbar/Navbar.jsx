import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const BOOK_URL = 'https://bookings.gettimely.com/essencehairtreatment/bb/book'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(o => !o)
  const close = () => setOpen(false)

  const activeClass = ({ isActive }) => isActive ? 'on' : undefined

  return (
    <>
      <nav>
        <div className="nav-shell">
          <ul className="nav-left">
            <li><NavLink to="/" className={activeClass} end>Home</NavLink></li>
            <li><NavLink to="/services" className={activeClass}>Services</NavLink></li>
            <li><NavLink to="/top-tips" className={activeClass}>Top Tips</NavLink></li>
          </ul>
          <NavLink to="/" className="nav-logo" onClick={close}>
            <img src="/essencelogo-cropped.jpg" alt="Essence Hair Treatment" />
          </NavLink>
          <ul className="nav-right">
            <li><NavLink to="/gallery" className={activeClass}>Gallery</NavLink></li>
            <li><NavLink to="/faqs" className={activeClass}>FAQs</NavLink></li>
            <li><NavLink to="/academy" className={activeClass}>Academy</NavLink></li>
            <li>
              <a href={BOOK_URL} className="nav-book" target="_blank" rel="noreferrer">
                Book Now
              </a>
            </li>
          </ul>
          <button
            className={`nav-hamburger${open ? ' open' : ''}`}
            onClick={toggle}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`nav-drawer${open ? ' open' : ''}`}>
        <NavLink to="/" className={({ isActive }) => `nd-link${isActive ? ' on' : ''}`} end onClick={close}>Home</NavLink>
        <NavLink to="/services" className={({ isActive }) => `nd-link${isActive ? ' on' : ''}`} onClick={close}>Services</NavLink>
        <NavLink to="/top-tips" className={({ isActive }) => `nd-link${isActive ? ' on' : ''}`} onClick={close}>Top Tips</NavLink>
        <NavLink to="/gallery" className={({ isActive }) => `nd-link${isActive ? ' on' : ''}`} onClick={close}>Gallery</NavLink>
        <NavLink to="/faqs" className={({ isActive }) => `nd-link${isActive ? ' on' : ''}`} onClick={close}>FAQs</NavLink>
        <NavLink to="/academy" className={({ isActive }) => `nd-link${isActive ? ' on' : ''}`} onClick={close}>Essence Academy</NavLink>
        <a href={BOOK_URL} className="nd-book" target="_blank" rel="noreferrer" onClick={close}>Book Now</a>
      </div>
    </>
  )
}
