import { Link } from 'react-router-dom'
import '../Privacy/Privacy.css'
import useSEO from '../../hooks/useSEO'
import { PAGES } from '../../seo'

const COOKIES_UPDATED = '31 October 2026'

export default function Cookies() {
  useSEO(PAGES['/cookies'])
  return (
    <main>
      <div className="privacy-hero">
        <div className="privacy-hero-tag">Legal</div>
        <h1>Cookie <em>Policy</em></h1>
      </div>

      <div className="privacy-body">
        <div className="privacy-intro">
          <div className="privacy-highlight">This website does not use cookies, and we do not collect, store or keep hold of any information about you when you visit it.</div>
          <p>There's no analytics, no tracking, no advertising pixels and no contact forms on this site. Our fonts, photos and videos are all served from our own website, so simply browsing it doesn't share your details with anyone else.</p>
        </div>

        <div className="privacy-section">
          <div className="ps-tag">The Basics</div>
          <h2 className="ps-title">What are <em>cookies?</em></h2>
          <div className="ps-body">
            <p>Cookies are small text files that a website can save in your browser, often to remember you or track what you do across visits. Similar technologies include local storage, tracking pixels and device fingerprinting.</p>
            <p>Under UK law (the Privacy and Electronic Communications Regulations and UK GDPR), a website must ask your permission before using any of these unless they are strictly necessary. Because we don't use any, there's nothing to accept or decline, and that's why you won't see a cookie banner here.</p>
          </div>
        </div>

        <div className="privacy-section">
          <div className="ps-tag">This Website</div>
          <h2 className="ps-title">What we <em>don't</em> do</h2>
          <div className="ps-body">
            <ul>
              <li>We don't set any cookies, first-party or third-party.</li>
              <li>We don't use Google Analytics or any other visitor tracking or statistics tools.</li>
              <li>We don't use Facebook, Instagram, TikTok or Google advertising pixels.</li>
              <li>We don't save anything in your browser's local storage.</li>
              <li>We don't collect your name, email, phone number or any other details through this website.</li>
            </ul>
          </div>
        </div>

        <div className="privacy-section">
          <div className="ps-tag">Your Choice</div>
          <h2 className="ps-title">Our <em>map</em></h2>
          <div className="ps-body">
            <p>The map on our home page is provided by Google Maps. It isn't loaded until you press <strong>Show Map</strong>. Once you do, Google receives your IP address and may set its own cookies, as described in <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noreferrer">Google's cookie policy</a>. We don't receive any of that information.</p>
            <p>If you'd rather not load it, use the <strong>Open in Google Maps</strong> link instead, or find us at 6 Woodmere, Luton, Bedfordshire LU3 4DN.</p>
          </div>
        </div>

        <div className="privacy-section">
          <div className="ps-tag">Other Websites</div>
          <h2 className="ps-title">Booking &amp; <em>social links</em></h2>
          <div className="ps-body">
            <p>Some buttons take you to other websites, which have their own cookie and privacy policies. Nothing from these sites runs on our website until you click through to them.</p>
            <ul>
              <li><strong>Online booking</strong>: our booking system is run by Timely. See <a href="https://www.gettimely.com/privacy/" target="_blank" rel="noreferrer">Timely's privacy policy</a>.</li>
              <li><strong>Instagram and Facebook</strong>: see <a href="https://privacycenter.instagram.com/policies/cookies/" target="_blank" rel="noreferrer">Meta's cookie policy</a>.</li>
              <li><strong>TikTok</strong>: see <a href="https://www.tiktok.com/legal/page/eea/cookie-policy/en" target="_blank" rel="noreferrer">TikTok's cookie policy</a>.</li>
              <li><strong>WhatsApp</strong>: see <a href="https://www.whatsapp.com/legal/privacy-policy-eea" target="_blank" rel="noreferrer">WhatsApp's privacy policy</a>.</li>
            </ul>
          </div>
        </div>

        <div className="privacy-section">
          <div className="ps-tag">Hosting</div>
          <h2 className="ps-title">Keeping the site <em>secure</em></h2>
          <div className="ps-body">
            <p>Our website is hosted by Cloudflare. Like any web host, Cloudflare has to handle your IP address to send you the page, and uses it briefly to protect the site from attacks and spam. We don't receive this information or use it to identify you.</p>
            <p>Very occasionally, if traffic looks automated, Cloudflare may set a short-lived security cookie (such as <code>__cf_bm</code>) to check that you're a real person. This is strictly necessary for security, contains no personal details and isn't used for tracking. See <a href="https://developers.cloudflare.com/fundamentals/reference/policies-compliances/cloudflare-cookies/" target="_blank" rel="noreferrer">Cloudflare's cookie policy</a>.</p>
          </div>
        </div>

        <div className="privacy-section">
          <div className="ps-tag">Updates</div>
          <h2 className="ps-title">Changes to this <em>policy</em></h2>
          <div className="ps-body">
            <p>If we ever add something to the website that uses cookies, we'll update this page and ask for your consent first where the law requires it.</p>
            <p>For how we look after the details you give us when you book an appointment, see our <Link to="/privacy">privacy policy</Link>.</p>
            <p>Last updated {COOKIES_UPDATED}.</p>
          </div>
        </div>
      </div>

      <div className="privacy-contact">
        <h3>Questions about <em>your data?</em></h3>
        <p>Get in touch and we'll be happy to help.</p>
        <a href="tel:+447375956131" className="btn-wh">Call 07375 956 131</a>
      </div>
    </main>
  )
}
