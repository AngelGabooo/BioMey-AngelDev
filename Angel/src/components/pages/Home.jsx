// src/pages/Home.jsx
import Header from '../components/organisms/Header'
import Hero from '../components/organisms/Hero'
import About from '../components/organisms/About'
import Services from '../components/organisms/Services'
import PricingPlans from '../components/organisms/PricingPlans'
import Portfolio from '../components/organisms/Portfolio'
import Contact from '../components/organisms/Contact'
import Footer from '../components/organisms/Footer'
import TextCarousel from '../components/organisms/TextCarousel'
import NameChangeAlert from '../components/organisms/NameChangeAlert'
import Testimonials from '../components/organisms/Testimonials' // Importar el nuevo componente
import FAQ from './components/organisms/FAQ' // Importar el nuevo componente
import WorkProcess from './components/organisms/WorkProcess' // Importar el nuevo componente

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <TextCarousel />
      <About /> {/* Agregar la nueva sección aquí */}
      <Services />
      <PricingPlans />
      <Portfolio />
      <Contact />
      <Footer />
      <WorkProcess /> {/* Agregar la nueva sección aquí */}
      <FAQ /> {/* Agregar la nueva sección aquí */}
      <Testimonials /> {/* Agregar la nueva sección aquí */}
      <NameChangeAlert />
    </div>
  )
}

export default Home