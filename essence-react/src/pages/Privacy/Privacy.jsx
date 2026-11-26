import { Link } from 'react-router-dom'
import './Privacy.css'
import useSEO from '../../hooks/useSEO'
import { PAGES } from '../../seo'

export default function Privacy() {
  useSEO(PAGES['/privacy'])
  return (
    <main>
      <div className="privacy-hero">
        <div className="privacy-hero-tag">Legal</div>
        <h1>Privacy &amp; <em>Policies</em></h1>
      </div>

      <div className="privacy-body">
        <p className="privacy-intro">
          By booking with Essence Hair you agree to the following policies. Please read them carefully before your appointment. If you have any questions, contact us on <a href="tel:+447375956131">07375 956 131</a> or via WhatsApp.
        </p>

        <div className="privacy-section">
          <div className="ps-tag">Data &amp; Privacy</div>
          <h2 className="ps-title">Privacy <em>Policy</em></h2>
          <div className="ps-body">
            <p>Essence Hair Treatment, 6 Woodmere, Luton, Bedfordshire LU3 4DN, is responsible for the personal information you give us (the "data controller" under UK GDPR and the Data Protection Act 2018). You can contact us about your data on <a href="tel:+447375956131">07375 956 131</a>, by phone or WhatsApp.</p>

            <h3>Browsing our website</h3>
            <p>Our website doesn't use cookies and doesn't collect or store any information about you. See our <Link to="/cookies">cookie policy</Link> for the details.</p>

            <h3>What we collect when you book</h3>
            <ul>
              <li>Your name, phone number and email address</li>
              <li>Your appointment history, the services you've had and notes about your hair (such as colour formulas)</li>
              <li>Patch test results, and any allergies, medication or health conditions you tell us about that could affect a treatment</li>
              <li>Deposits and payments you've made with us</li>
            </ul>

            <h3>How we use it, and why we're allowed to</h3>
            <ul>
              <li>To book, confirm and manage your appointments and send reminders, because we need to in order to provide the service you've booked.</li>
              <li>To carry out treatments safely. Health and allergy information is only used for this, with your explicit consent, which you give when you share it with us.</li>
              <li>To keep financial records, because the law requires us to.</li>
              <li>To send occasional updates or offers, only if you've agreed to receive them. You can say no at any time without affecting your bookings.</li>
            </ul>

            <h3>Who we share it with</h3>
            <p>We never sell your information or share it for anyone else's marketing. It is only handled by services that help us run the salon: our online booking system (Timely), WhatsApp if you message us there, and our accountant or HMRC where the law requires. Some of these providers store data outside the UK; where they do, it's protected by safeguards recognised under UK law.</p>

            <h3>How long we keep it</h3>
            <p>We keep your client record while you're visiting us, so we can keep your treatments safe and consistent. Financial records are kept for as long as the law requires (usually six years). After that, or sooner if you ask and we're not legally required to keep it, your information is deleted.</p>

            <h3>Your rights</h3>
            <p>You have the right to see the information we hold about you, have it corrected, ask for it to be deleted, restrict or object to how we use it, receive a copy to take elsewhere, and withdraw any consent you've given. Just get in touch and we'll respond within one month.</p>
            <p>If you're unhappy with how we've handled your information, please talk to us first. You can also complain to the Information Commissioner's Office at <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noreferrer">ico.org.uk</a> or on 0303 123 1113.</p>
          </div>
        </div>

        <div className="privacy-section">
          <div className="ps-tag">Payments</div>
          <h2 className="ps-title">Payment <em>Policy</em></h2>
          <div className="ps-body">
            <div className="privacy-highlight">All payments on the day must be made in cash. Full payment is required before leaving your appointment.</div>
            <p>A deposit is required at the time of booking to confirm your appointment. This deposit is deducted from the total cost of your service.</p>
          </div>
        </div>

        <div className="privacy-section">
          <div className="ps-tag">Cancellations &amp; Changes</div>
          <h2 className="ps-title">Cancellation <em>Policy</em></h2>
          <div className="ps-body">
            <div className="privacy-highlight">A minimum of 48 hours notice is required to cancel or rearrange an appointment. No cancellations or changes are permitted within 2 days of the appointment.</div>
            <p>Failure to give sufficient notice will result in your deposit being forfeited. A new deposit will be required to make another appointment.</p>
          </div>
        </div>

        <div className="privacy-section">
          <div className="ps-tag">Punctuality</div>
          <h2 className="ps-title">Late <em>Arrivals</em></h2>
          <div className="ps-body">
            <ul>
              <li>If you are more than 10 minutes late, a £10 late fee will be charged.</li>
              <li>If you are 20 minutes or more late, your appointment may be cancelled.</li>
              <li>A new deposit will be required to rebook following a late cancellation.</li>
            </ul>
          </div>
        </div>

        <div className="privacy-section">
          <div className="ps-tag">Results</div>
          <h2 className="ps-title">Results &amp; <em>Refunds</em></h2>
          <div className="ps-body">
            <p>Whilst we undertake to provide an excellent service and expert treatments using only the best products, we cannot guarantee your results and cannot offer any refunds if the results achieved fail to meet your expectations.</p>
            <ul>
              <li>Colour treatments can have varying results on individual hair and cannot be guaranteed.</li>
              <li>Hair treatment results vary according to hair type and condition. Aftercare instructions must be strictly followed to maintain results.</li>
            </ul>
          </div>
        </div>

        <div className="privacy-section">
          <div className="ps-tag">Extensions</div>
          <h2 className="ps-title">Extensions <em>Policy</em></h2>
          <div className="ps-body">
            <p>Aftercare instructions must be strictly followed following your extensions appointment. Maintenance appointments must be booked within the provided time frame.</p>
            <div className="privacy-highlight">Self-removal of extensions will invalidate any warranty on the hair.</div>
          </div>
        </div>
      </div>

      <div className="privacy-contact">
        <h3>Questions about our <em>policies?</em></h3>
        <p>Get in touch and we'll be happy to help before you book.</p>
        <a href="tel:+447375956131" className="btn-wh">Call 07375 956 131</a>
      </div>
    </main>
  )
}
