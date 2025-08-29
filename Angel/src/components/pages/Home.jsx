// src/pages/Home.jsx
import Header from '../components/organisms/Header'
import Hero from '../components/organisms/Hero'
import Services from '../components/organisms/Services'
import Portfolio from '../components/organisms/Portfolio'
import Contact from '../components/organisms/Contact'
import Footer from '../components/organisms/Footer'
import TextCarousel from '../components/organisms/TextCarousel' // Importa el nuevo componente

const Home = () => {
  return (
    <div>
      <Header />
      <TextCarousel /> {/* Agrega el carrusel aquí */}
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home