// src/pages/Home.jsx
import Header from '../components/organisms/Header'
import Hero from '../components/organisms/Hero'
import Services from '../components/organisms/Services'
import PricingPlans from '../components/organisms/PricingPlans'
import Portfolio from '../components/organisms/Portfolio'
import Contact from '../components/organisms/Contact'
import Footer from '../components/organisms/Footer'
import TextCarousel from '../components/organisms/TextCarousel'
import NameChangeAlert from '../components/organisms/NameChangeAlert' // Importa el nuevo componente

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <TextCarousel />
      <Services />
      <PricingPlans />
      <Portfolio />
      <Contact />
      <Footer />
      <NameChangeAlert /> {/* Agrega la alerta aquí */}
    </div>
  )
}

export default Home