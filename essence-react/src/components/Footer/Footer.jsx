import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <img loading="lazy" decoding="async" src="/essence-logo.png" alt="Essence Hair Treatment" />
      </div>
      <div className="footer-grid">
        <div>
          <div className="footer-col-title">Services</div>
          <ul className="footer-links">
            <li><Link to="/balayage-bedfordshire">Balayage &amp; Colour</Link></li>
            <li><Link to="/services">Hair Treatments</Link></li>
            <li><Link to="/services">Cut &amp; Style</Link></li>
            <li><Link to="/hair-extensions-bedfordshire">Hair Extensions</Link></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Info</div>
          <ul className="footer-links">
            <li><Link to="/top-tips">Top Tips</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
            <li><Link to="/academy">Essence Academy</Link></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Academy</div>
          <ul className="footer-links">
            <li><Link to="/academy">Balayage Masterclass</Link></li>
            <li><Link to="/academy">Keratin Course</Link></li>
            <li><Link to="/academy">Advanced Colour</Link></li>
            <li><Link to="/academy">All Courses</Link></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Contact</div>
          <ul className="footer-links">
            <li><a href="tel:+447375956131">07375 956 131</a></li>
            <li><span>6 Woodmere, Luton</span></li>
            <li><span>Bedfordshire LU3 4DN</span></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-copy">&copy; 2026 Essence Hair Treatment. All rights reserved. · <Link to="/privacy" style={{color:'inherit',textDecoration:'none'}}>Privacy &amp; Policies</Link></span>
        <div className="footer-soc">
          <a href="https://www.instagram.com/essence.hairtreatment/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.tiktok.com/@essencehairtreatment" target="_blank" rel="noreferrer">TikTok</a>
          <a href="https://www.facebook.com/essencekeratinluton" target="_blank" rel="noreferrer">Facebook</a>
        </div>
      </div>
      <a className="footer-credit" href="https://humansoftwareagency.com" target="_blank" rel="noopener" aria-label="Site made by HU/MAN">
        <span className="footer-credit-label">Site made by</span>
        <span className="footer-credit-mark" aria-hidden="true">
          <span className="footer-credit-layer" />
          <span className="footer-credit-layer footer-credit-layer--a" />
          <span className="footer-credit-layer footer-credit-layer--b" />
        </span>
      </a>
    </footer>
  )
}
