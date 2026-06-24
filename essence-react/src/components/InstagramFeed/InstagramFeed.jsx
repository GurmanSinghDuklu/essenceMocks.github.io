import useInstagramPosts from '../../hooks/useInstagramPosts'
import './InstagramFeed.css'

const IG_URL = 'https://www.instagram.com/essence.hairtreatment/'

export default function InstagramFeed() {
  const posts = useInstagramPosts()
  const recent = [...posts].reverse().slice(0, 6)

  if (recent.length === 0) return null

  return (
    <section className="ig-feed">
      <div className="ig-feed-head">
        <div className="ig-feed-tag">Instagram</div>
        <h2 className="ig-feed-title">Follow our <em>journey</em></h2>
        <div className="ig-feed-handle">@essence.hairtreatment</div>
      </div>

      <div className="ig-feed-grid">
        {recent.map(post => (
          <a
            key={post.file}
            className="ig-feed-card"
            href={IG_URL}
            target="_blank"
            rel="noreferrer"
          >
            <div className="ig-feed-card-img">
              <img src={`/instagram/${post.file}`} alt={post.caption} />
            </div>
          </a>
        ))}
      </div>

      <div className="ig-feed-footer">
        <a href={IG_URL} className="ig-feed-icon" target="_blank" rel="noreferrer">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/>
          </svg>
          <span>@essence.hairtreatment</span>
        </a>
        <a href={IG_URL} className="btn-blk" target="_blank" rel="noreferrer">Follow on Instagram</a>
      </div>
    </section>
  )
}
