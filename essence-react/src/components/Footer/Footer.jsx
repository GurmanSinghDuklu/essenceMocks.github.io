import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <img src="/essencelogo-cropped.jpg" alt="Essence Hair Treatment" />
      </div>
      <div className="footer-grid">
        <div>
          <div className="footer-col-title">Services</div>
          <ul className="footer-links">
            <li><Link to="/services">Balayage &amp; Colour</Link></li>
            <li><Link to="/services">Hair Treatments</Link></li>
            <li><Link to="/services">Head Spa</Link></li>
            <li><Link to="/services">Cut &amp; Style</Link></li>
            <li><Link to="/services">Extensions</Link></li>
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
            <li><a href="https://wa.me/447375956131" target="_blank" rel="noreferrer">WhatsApp</a></li>
            <li><span>6 Woodmere, Luton</span></li>
            <li><span>Bedfordshire</span></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-copy">&copy; 2026 Essence Hair Treatment. All rights reserved.</span>
        <div className="footer-soc">
          <a href="https://www.instagram.com/essence.hairtreatment/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.tiktok.com/@essencehairtreatment" target="_blank" rel="noreferrer">TikTok</a>
          <a href="https://www.facebook.com/essencekeratinluton" target="_blank" rel="noreferrer">Facebook</a>
        </div>
      </div>
    </footer>
  )
}
