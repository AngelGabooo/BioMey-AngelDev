// src/pages/Home.jsx
import Header from '../components/organisms/Header'
import Hero from '../components/organisms/Hero'
import Services from '../components/organisms/Services'
import Portfolio from '../components/organisms/Portfolio'
import Contact from '../components/organisms/Contact'
import Footer from '../components/organisms/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home