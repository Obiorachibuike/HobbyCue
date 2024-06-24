import Image from 'next/image'
import Header from "./components/Header"
import About from "./components/About"
import Features from "./components/Features"
import AddNew from './components/AddNew'
import Testimonial from './components/Testimonials'
import Footer from './components/Footer'
import Started from './components/Started'

export default function Home() {
  return (
    <main className="">
      <Header />
    <About />
    <Features />
    <AddNew />
    <Testimonial />
    <Started />
    <Footer />
    </main>
  )
}
