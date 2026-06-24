import { useState, useEffect } from 'react'

export default function useInstagramPosts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('/instagram/posts.json')
      .then(r => r.json())
      .then(data => setPosts(data))
      .catch(() => {})
  }, [])

  return posts
}
