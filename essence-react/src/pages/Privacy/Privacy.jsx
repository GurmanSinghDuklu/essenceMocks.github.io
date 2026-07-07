import './Privacy.css'
import useSEO from '../../hooks/useSEO'

export default function Privacy() {
  useSEO({
    title: 'Privacy & Salon Policy | Essence Hair Treatment Luton',
    description: 'Read our salon policies, cancellation terms, and privacy information at Essence Hair Treatment, Luton.',
    canonical: 'https://www.essencehairtreatment.co.uk/privacy',
    ogImage: 'https://www.essencehairtreatment.co.uk/essencelogo.jpg',
  })
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
            <p>By providing your personal details you consent to Essence Hair securely storing and processing your information in accordance with data protection laws.</p>
            <p>Your information will be used to:</p>
            <ul>
              <li>Manage and confirm your appointments</li>
              <li>Send booking reminders</li>
              <li>Share occasional updates or promotional offers (where consent is given)</li>
            </ul>
            <p>You have the right to access, correct, or request deletion of your personal data at any time. You may also withdraw your consent for marketing communications at any time without affecting your booked services.</p>
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
