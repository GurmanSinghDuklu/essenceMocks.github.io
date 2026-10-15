import { useState, useEffect } from 'react'
import bundled from '../../public/instagram/posts.json'

// Starts with the posts bundled at build time so they're in the prerendered
// HTML, then re-fetches the live posts.json so new posts appear without a rebuild.
export default function useInstagramPosts() {
  const [posts, setPosts] = useState(bundled)

  useEffect(() => {
    fetch('/instagram/posts.json')
      .then(r => r.json())
      .then(data => setPosts(data))
      .catch(() => {})
  }, [])

  return posts
}
