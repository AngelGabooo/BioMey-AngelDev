// src/pages/Home.jsx
import Header from '../components/organisms/Header'
import Hero from '../components/organisms/Hero'
import About from '../components/organisms/About' // Importar el nuevo componente
import Services from '../components/organisms/Services'
import PricingPlans from '../components/organisms/PricingPlans'
import Portfolio from '../components/organisms/Portfolio'
import Contact from '../components/organisms/Contact'
import Footer from '../components/organisms/Footer'
import TextCarousel from '../components/organisms/TextCarousel'
import NameChangeAlert from '../components/organisms/NameChangeAlert'

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
      <NameChangeAlert />
    </div>
  )
}

export default Home