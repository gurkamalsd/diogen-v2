import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import GuidedPath from './components/GuidedPath'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Science from './components/Science'
import FAQ from './components/FAQ'
import PreFooterCTA from './components/PreFooterCTA'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <GuidedPath />
        <Pricing />
        <Testimonials />
        <Science />
        <FAQ />
        <PreFooterCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
