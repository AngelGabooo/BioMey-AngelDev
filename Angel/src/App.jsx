import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './components/contexts/LanguageContext';
import Header from './components/organisms/Header';
import Hero from './components/organisms/Hero';
import Services from './components/organisms/Services';
import PricingPlans from './components/organisms/PricingPlans';
import Portfolio from './components/organisms/Portfolio';
import Contact from './components/organisms/Contact';
import Footer from './components/organisms/Footer';
import TextCarousel from './components/organisms/TextCarousel';
import DemosPage from './components/organisms/DemosPage';
import NameChangeAlert from './components/organisms/NameChangeAlert';
import About from './components/organisms/About';
import Testimonials from './components/organisms/Testimonials';
import FAQ from './components/organisms/FAQ';
import WorkProcess from './components/organisms/WorkProcess';
import ChatBot from './components/organisms/ChatBot';

import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Componente para la página de inicio
  const HomePage = () => (
    <>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
      <main className="bg-white dark:bg-gray-900 transition-colors duration-300">
        <Hero />
        <TextCarousel />
        <About />
        <Services />
        <WorkProcess />
        <Portfolio />
        <Testimonials />
        <PricingPlans />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <NameChangeAlert />
      <ChatBot />
    </>
  );

  return (
    <LanguageProvider>
      <Router>
        <div className={isDarkMode ? 'dark' : ''}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route 
              path="/demostraciones" 
              element={
                <>
                  <Header isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
                  <DemosPage isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
                  <Footer />
                  <ChatBot />
                </>
              } 
            />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;