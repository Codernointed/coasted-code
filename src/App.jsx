import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import StackScroll from './components/StackScroll'
import Testimonials from './components/Testimonials'
import SplineSection from './components/SplineSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Highlights />
        <StackScroll />
        <Testimonials />
        <SplineSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
