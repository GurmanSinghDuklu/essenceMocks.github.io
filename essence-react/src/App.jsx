import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './pages/Home/Home.jsx'
import Services from './pages/Services/Services.jsx'
import Gallery from './pages/Gallery/Gallery.jsx'
import TopTips from './pages/TopTips/TopTips.jsx'
import FAQs from './pages/FAQs/FAQs.jsx'
import Academy from './pages/Academy/Academy.jsx'
import Privacy from './pages/Privacy/Privacy.jsx'
import Cookies from './pages/Cookies/Cookies.jsx'
import Prices from './pages/Prices/Prices.jsx'
import Landing from './pages/Landing/Landing.jsx'
import { LANDINGS } from './pages/Landing/landings.jsx'
import Course from './pages/Course/Course.jsx'
import { COURSES } from './pages/Academy/courses.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/top-tips" element={<TopTips />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/prices" element={<Prices />} />
        {Object.keys(LANDINGS).map(path => (
          <Route key={path} path={path} element={<Landing path={path} />} />
        ))}
        {Object.keys(COURSES).map(path => (
          <Route key={path} path={path} element={<Course path={path} />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}
