// src/components/organisms/Header/Header.jsx (corregido)
import { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Header = ({ isDarkMode, onToggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mouseX, setMouseX] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [showNav, setShowNav] = useState(true)
  const dockRef = useRef(null)
  const languageDropdownRef = useRef(null)
  const navRef = useRef(null)
  const { language, changeLanguage } = useLanguage()

  // Detectar si es un dispositivo táctil
  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0)
    }
    
    checkTouchDevice()
    window.addEventListener('resize', checkTouchDevice)
    return () => window.removeEventListener('resize', checkTouchDevice)
  }, [])

  // Controlar visibilidad de la navegación al hacer scroll - VERSIÓN CORREGIDA
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // DEBUG: Mostrar valores en consola
          console.log('Scroll Y:', currentScrollY, 'Last Scroll Y:', lastScrollY, 'Show Nav:', showNav);
          
          // Solo ocultar/mostrar si hay un cambio significativo
          if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scroll hacia abajo - ocultar navegación
            if (showNav) {
              console.log('Ocultando navegación');
              setShowNav(false);
            }
          } else if (currentScrollY < lastScrollY || currentScrollY <= 50) {
            // Scroll hacia arriba o cerca del top - mostrar navegación
            if (!showNav) {
              console.log('Mostrando navegación');
              setShowNav(true);
            }
          }
          
          setLastScrollY(currentScrollY);
          setScrolled(currentScrollY > 20);
          ticking = false;
        });
        
        ticking = true;
      }
    };

    // Usar el evento scroll con passive: true para mejor rendimiento
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, showNav]); // Añadido showNav como dependencia

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!isTouchDevice && dockRef.current) {
      const rect = dockRef.current.getBoundingClientRect();
      setMouseX(e.clientX - rect.left);
    }
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) {
      setMouseX(0);
    }
  };

  const handleTouchStart = () => {
    if (isTouchDevice) {
      setMouseX(1);
    }
  };

  const handleTouchEnd = () => {
    if (isTouchDevice) {
      setTimeout(() => setMouseX(0), 200);
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage);
    setIsLanguageDropdownOpen(false);
  };

  const DockIcon = ({ children, href, onClick, className = "", isSpecial = false }) => {
    const iconRef = useRef(null);
    
    const getScale = () => {
      if (isTouchDevice) {
        return mouseX > 0 ? 1.2 : 1;
      }
      
      if (!iconRef.current || mouseX === 0) return 1;
      
      const rect = iconRef.current.getBoundingClientRect();
      const dockRect = dockRef.current?.getBoundingClientRect();
      if (!dockRect) return 1;
      
      const iconCenter = rect.left + rect.width / 2 - dockRect.left;
      const distance = Math.abs(mouseX - iconCenter);
      const maxDistance = 80;
      
      if (distance > maxDistance) return 1;
      const scale = 1 + (1 - distance / maxDistance) * 0.6;
      return Math.min(scale, 1.8);
    };

    const baseClasses = `flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-300 hover:scale-110 group relative overflow-hidden ${className}`;
    
    const backgroundClasses = isSpecial 
      ? "bg-black dark:bg-white shadow-lg shadow-black/25 dark:shadow-white/25" 
      : "bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-300 dark:border-gray-600 hover:bg-white dark:hover:bg-gray-700";

    const handleClick = (e) => {
      if (onClick) {
        onClick(e);
      }
    };

    return (
      <a
        ref={iconRef}
        href={href}
        onClick={handleClick}
        className={`${baseClasses} ${backgroundClasses}`}
        style={{
          transform: `scale(${getScale()})`,
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 dark:from-black/20"></div>
        {children}
      </a>
    );
  };

  const LanguageSelector = () => (
    <div className="relative" ref={languageDropdownRef}>
      <button
        onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
        onTouchStart={(e) => e.stopPropagation()}
        className="relative w-12 h-12 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-300 dark:border-gray-600 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg group overflow-hidden flex items-center justify-center touch-manipulation"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-gray-400/20 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300"></div>
        <div className="relative flex items-center justify-center w-full h-full">
          <svg className="w-6 h-6 text-gray-800 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
          </svg>
        </div>
      </button>
      
      {isLanguageDropdownOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 backdrop-blur-xl overflow-hidden z-50">
          <button
            onClick={() => handleLanguageChange('es')}
            onTouchStart={(e) => e.stopPropagation()}
            className={`w-full px-4 py-3 text-left flex items-center space-x-2 transition-colors duration-200 touch-manipulation ${
              language === 'es' 
                ? 'bg-gray-100 dark:bg-gray-700 text-black dark:text-white' 
                : 'hover:bg-gray-50 dark:hover:bg-gray-750 text-gray-700 dark:text-gray-300 active:bg-gray-100 dark:active:bg-gray-700'
            }`}
          >
            <span className={`fi fi-es rounded-sm ${language === 'es' ? 'opacity-100' : 'opacity-70'}`}></span>
            <span>Español</span>
            {language === 'es' && (
              <svg className="w-4 h-4 ml-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </button>
          
          <button
            onClick={() => handleLanguageChange('en')}
            onTouchStart={(e) => e.stopPropagation()}
            className={`w-full px-4 py-3 text-left flex items-center space-x-2 transition-colors duration-200 touch-manipulation ${
              language === 'en' 
                ? 'bg-gray-100 dark:bg-gray-700 text-black dark:text-white' 
                : 'hover:bg-gray-50 dark:hover:bg-gray-750 text-gray-700 dark:text-gray-300 active:bg-gray-100 dark:active:bg-gray-700'
            }`}
          >
            <span className={`fi fi-us rounded-sm ${language === 'en' ? 'opacity-100' : 'opacity-70'}`}></span>
            <span>English</span>
            {language === 'en' && (
              <svg className="w-4 h-4 ml-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </button>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Desktop Header */}
      <header className={`sticky top-0 z-50 lg:block hidden transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg border-b border-gray-200 dark:border-gray-800' 
          : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a 
              href="/" 
              onClick={handleLogoClick}
              className="flex items-center space-x-4 group cursor-pointer transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              title="Ir a la página principal"
            >
              <div className="relative">
                <div className="w-14 h-14 bg-black dark:bg-white rounded-3xl flex items-center justify-center shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 dark:from-black/30"></div>
                  
                  <img 
                    src="/img/bio.jpg" 
                    alt="BioMey Logo" 
                    className="w-full h-full object-cover rounded-3xl"
                  />
                  
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-2 left-2 w-1 h-1 bg-white dark:bg-black rounded-full animate-pulse"></div>
                    <div className="absolute bottom-3 right-3 w-1 h-1 bg-white dark:bg-black rounded-full animate-pulse delay-300"></div>
                    <div className="absolute top-4 right-2 w-0.5 h-0.5 bg-white dark:bg-black rounded-full animate-pulse delay-700"></div>
                  </div>
                </div>
                
                <div className="absolute -inset-2 bg-black dark:bg-white rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 -z-10"></div>
              </div>
              
              <div className="flex flex-col space-y-0.5">
                <div className="flex items-center space-x-1">
                  <span className="text-3xl font-black tracking-tight text-black dark:text-white transition-all duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300">
                    BioMey
                  </span>
                  <div className="w-2 h-2 rounded-full bg-black dark:bg-white shadow-lg animate-pulse group-hover:bg-gray-600 dark:group-hover:bg-gray-400 transition-colors duration-300"></div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-600 to-transparent w-12 transition-all duration-300 group-hover:w-16 group-hover:via-gray-600 dark:group-hover:via-gray-400"></div>
                  <span className="text-gray-600 dark:text-gray-400 font-semibold text-sm tracking-wide uppercase transition-all duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 group-hover:tracking-wider">
                    Angel Dev Web
                  </span>
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-600 to-transparent w-12 transition-all duration-300 group-hover:w-16 group-hover:via-gray-600 dark:group-hover:via-gray-400"></div>
                </div>
              </div>
            </a>

            {/* Desktop Navigation - Ahora con mejor control de visibilidad */}
            <nav 
              ref={navRef}
              className={`flex items-center space-x-1 transition-all duration-300 ${
                showNav 
                  ? 'opacity-100 translate-y-0 visible' 
                  : 'opacity-0 -translate-y-4 invisible'
              }`}
            >
              {[
                { href: '#inicio', label: 'Inicio' },
                { href: '#sobre-mi', label: 'Sobre mí' },
                { href: '#servicios', label: 'Servicios' },
                { href: '#portafolio', label: 'Portafolio' },
                { href: '#pricing-plans', label: 'Precios' }
              ].map((item) => (
                <a 
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium transition-all duration-300 relative group px-4 py-2 rounded-xl hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                >
                  {item.label}
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-black dark:bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
                </a>
              ))}
              
              <LanguageSelector />
              
              <a 
                href="#contacto" 
                className="ml-4 bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-2xl font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-white dark:bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <span className="relative flex items-center space-x-2">
                  <span>Contacto</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Header - Sin cambios */}
      <header className={`lg:hidden sticky top-0 z-40 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg border-b border-gray-200 dark:border-gray-800' 
          : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-transparent'
      }`}>
        <div className="px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo móvil */}
            <a 
              href="/" 
              onClick={handleLogoClick}
              className="flex items-center space-x-3 group transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] touch-manipulation"
              title="Ir a la página principal"
            >
              <div className="relative">
                <div className="w-12 h-12 bg-black dark:bg-white rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:rotate-3 overflow-hidden">
                  <img 
                    src="/img/bio.jpg" 
                    alt="BioMey Logo" 
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="absolute -inset-1 bg-black dark:bg-white rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-all duration-300 -z-10"></div>
              </div>
              
              <div className="flex flex-col">
                <span className="text-black dark:text-white font-bold text-xl leading-none transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300">
                  Angel Dev
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-xs font-medium tracking-wide transition-colors duration-300 group-hover:text-gray-600 dark:group-hover:text-gray-300">
                  Web Developer
                </span>
              </div>
            </a>
            
            <LanguageSelector />
          </div>
        </div>
      </header>

      {/* Mobile Floating Dock */}
      <div className="lg:hidden fixed bottom-6 left-0 right-0 z-50 px-2">
        <div
          ref={dockRef}
          className="flex items-center gap-3 p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-2xl rounded-3xl border border-gray-300 dark:border-gray-600 shadow-2xl overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
          style={{ WebkitOverflowScrolling: 'touch', maxWidth: '100vw' }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <DockIcon href="/" onClick={handleLogoClick}>
            <svg className="w-6 h-6 text-gray-800 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </DockIcon>
          <DockIcon href="#sobre-mi">
            <svg className="w-6 h-6 text-gray-800 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </DockIcon>
          <DockIcon href="#servicios">
            <svg className="w-6 h-6 text-gray-800 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </DockIcon>
          <DockIcon href="#portafolio">
            <svg className="w-6 h-6 text-gray-800 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </DockIcon>
          <DockIcon href="#pricing-plans">
            <svg className="w-6 h-6 text-gray-800 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
          </DockIcon>
          <DockIcon href="#contacto" isSpecial={true}>
            <svg className="w-6 h-6 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 3.26a2 2 0 001.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </DockIcon>
        </div>
      </div>
    </>
  )
}

export default Header