// src/contexts/LanguageContext.jsx (actualizado)
import { createContext, useContext, useState, useEffect } from 'react';

// Importar traducciones
import esTranslations from '../locales/es.json';
import enTranslations from '../locales/en.json';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage debe usarse dentro de un LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');
  const [translations, setTranslations] = useState(esTranslations);

  useEffect(() => {
    // Cargar idioma guardado desde localStorage
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
      setTranslations(savedLanguage === 'es' ? esTranslations : enTranslations);
    } else {
      // Detectar idioma del navegador
      const browserLanguage = navigator.language.split('-')[0];
      if (browserLanguage === 'es' || browserLanguage === 'en') {
        setLanguage(browserLanguage);
        setTranslations(browserLanguage === 'es' ? esTranslations : enTranslations);
      }
    }
  }, []);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    setTranslations(newLanguage === 'es' ? esTranslations : enTranslations);
    localStorage.setItem('language', newLanguage);
  };

  const t = (key) => {
    // Función para acceder a las traducciones mediante paths como "hero.title"
    return key.split('.').reduce((obj, part) => obj && obj[part], translations) || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};