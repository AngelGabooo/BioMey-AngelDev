// src/App.jsx (actualizado)
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './components/contexts/LanguageContext'; // Importar el provider
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
import About from './components/organisms/About'; // Añadir esta importación


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
                <About /> {/* Agregar la nueva sección aquí */}

        <Services />
        <Portfolio />
        <PricingPlans /> {/* Movido PricingPlans DENTRO del main, antes de Contact */}
        <Contact />
      </main>
      <Footer />
      <NameChangeAlert />
    </>
  );

  return (
    <LanguageProvider> {/* Envolver con el provider de idioma */}
      <Router>
        <div className={isDarkMode ? 'dark' : ''}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route 
              path="/demostraciones" 
              element={<DemosPage isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />} 
            />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;