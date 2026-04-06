import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PressMarquee from './components/PressMarquee'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Stats from './components/Stats'
import FAQ from './components/FAQ'
import EmailCapture from './components/EmailCapture'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PressMarquee />
        <HowItWorks />
        <Features />
        <Pricing />
        <Stats />
        <FAQ />
        <EmailCapture />
      </main>
      <Footer />
    </>
  )
}

export default App
