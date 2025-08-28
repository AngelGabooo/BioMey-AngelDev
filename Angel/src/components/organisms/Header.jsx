// src/components/organisms/Header/Header.jsx
import { useState, useRef, useEffect } from 'react'

const Header = ({ isDarkMode, onToggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mouseX, setMouseX] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const dockRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMouseMove = (e) => {
    if (dockRef.current) {
      const rect = dockRef.current.getBoundingClientRect()
      setMouseX(e.clientX - rect.left)
    }
  }

  const handleMouseLeave = () => {
    setMouseX(0)
  }

  const DockIcon = ({ children, href, onClick, className = "", isSpecial = false }) => {
    const iconRef = useRef(null)
    
    const getScale = () => {
      if (!iconRef.current || mouseX === 0) return 1
      
      const rect = iconRef.current.getBoundingClientRect()
      const dockRect = dockRef.current?.getBoundingClientRect()
      if (!dockRect) return 1
      
      const iconCenter = rect.left + rect.width / 2 - dockRect.left
      const distance = Math.abs(mouseX - iconCenter)
      const maxDistance = 80
      
      if (distance > maxDistance) return 1
      const scale = 1 + (1 - distance / maxDistance) * 0.6
      return Math.min(scale, 1.8)
    }

    const baseClasses = `flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-300 hover:scale-110 group relative overflow-hidden ${className}`
    
    const backgroundClasses = isSpecial 
      ? "bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 shadow-lg shadow-purple-500/25" 
      : "bg-white/10 dark:bg-white/10 backdrop-blur-xl border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/15"

    return (
      <a
        ref={iconRef}
        href={href}
        onClick={onClick}
        className={`${baseClasses} ${backgroundClasses}`}
        style={{
          transform: `scale(${getScale()})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {children}
      </a>
    )
  }

  const ThemeToggle = () => (
    <button
      onClick={onToggleDarkMode}
      className="relative w-12 h-12 rounded-2xl bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:scale-105 hover:shadow-lg group overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative flex items-center justify-center w-full h-full">
        {isDarkMode ? (
          <svg className="w-5 h-5 text-yellow-500 transition-transform duration-300 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-slate-600 dark:text-slate-300 transition-transform duration-300 group-hover:-rotate-12" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
          </svg>
        )}
      </div>
    </button>
  )

  return (
    <>
      {/* Desktop Header */}
      <header className={`sticky top-0 z-50 lg:block hidden transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/20 border-b border-gray-200/50 dark:border-gray-800/50' 
          : 'bg-white/60 dark:bg-gray-900/60 backdrop-blur-md border-b border-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-4 group cursor-pointer">
              <div className="relative">
                {/* Icono principal con gradiente y efectos */}
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 via-teal-600 to-blue-600 rounded-3xl flex items-center justify-center shadow-xl shadow-teal-500/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-2xl group-hover:shadow-teal-500/40 relative overflow-hidden">
                  {/* Efecto de brillo */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Letras del logo */}
                  <div className="relative z-10 flex flex-col items-center justify-center">
                    <span className="text-white font-black text-sm leading-none tracking-wider transform transition-transform duration-300 group-hover:scale-105">BM</span>
                    <div className="w-4 h-0.5 bg-white/60 rounded-full mt-0.5 transform transition-all duration-300 group-hover:w-6 group-hover:bg-white/80"></div>
                  </div>
                  
                  {/* Partículas de fondo animadas */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-2 left-2 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                    <div className="absolute bottom-3 right-3 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div>
                    <div className="absolute top-4 right-2 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-700"></div>
                  </div>
                </div>
                
                {/* Glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-br from-emerald-500 via-teal-600 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 -z-10"></div>
              </div>
              
              {/* Texto del logo */}
              <div className="flex flex-col space-y-0.5">
                {/* Título principal - BioMey */}
                <div className="flex items-center space-x-1">
                  <span className="text-3xl font-black tracking-tight bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 dark:from-emerald-400 dark:via-teal-400 dark:to-blue-400 bg-clip-text text-transparent transition-all duration-300 group-hover:from-emerald-500 group-hover:via-teal-500 group-hover:to-blue-500">
                    BioMey
                  </span>
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/40 animate-pulse"></div>
                </div>
                
                {/* Subtítulo - Angel Dev */}
                <div className="flex items-center space-x-2">
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent w-12 transition-all duration-300 group-hover:w-16"></div>
                  <span className="text-gray-600 dark:text-gray-400 font-semibold text-sm tracking-wide uppercase transition-all duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 group-hover:tracking-wider">
                    Angel Dev
                  </span>
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent w-12 transition-all duration-300 group-hover:w-16"></div>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="flex items-center space-x-1">
              {[
                { href: '#inicio', label: 'Inicio' },
                { href: '#sobre-mi', label: 'Sobre mí' },
                { href: '#servicios', label: 'Servicios' },
                { href: '#portafolio', label: 'Portafolio' },
                { href: '#precios', label: 'Precios' }
              ].map((item) => (
                <a 
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition-all duration-300 relative group px-4 py-2 rounded-xl hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                >
                  {item.label}
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
                </a>
              ))}
              
              <ThemeToggle />
              
              <a 
                href="#contacto" 
                className="ml-4 bg-gradient-to-r from-emerald-500 via-teal-600 to-blue-600 text-white px-6 py-3 rounded-2xl font-medium hover:shadow-xl hover:shadow-teal-500/30 hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-blue-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

      {/* Mobile Header */}
      <header className={`lg:hidden sticky top-0 z-40 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50 dark:border-gray-800/50' 
          : 'bg-white/60 dark:bg-gray-900/60 backdrop-blur-md border-b border-transparent'
      }`}>
        <div className="px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo móvil */}
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 via-teal-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-teal-500/25 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-teal-500/40">
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-white font-black text-xs leading-none">BM</span>
                    <div className="w-3 h-0.5 bg-white/60 rounded-full mt-0.5"></div>
                  </div>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500 via-teal-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-all duration-300 -z-10"></div>
              </div>
              
              <div className="flex flex-col">
                <span className="text-gray-800 dark:text-white font-bold text-xl leading-none bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
                  BioMey
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-xs font-medium tracking-wide">
                  Angel Dev
                </span>
              </div>
            </div>
            
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Mobile Floating Dock */}
      <div className="lg:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div 
          ref={dockRef}
          className="flex items-center gap-3 p-4 bg-white/10 dark:bg-gray-900/20 backdrop-blur-2xl rounded-3xl border border-white/20 dark:border-white/10 shadow-2xl shadow-black/10 dark:shadow-black/20"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <DockIcon href="#inicio">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </DockIcon>

          <DockIcon href="#sobre-mi">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </DockIcon>

          <DockIcon href="#servicios">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </DockIcon>

          <DockIcon href="#portafolio">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </DockIcon>

          <DockIcon href="#precios">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
          </DockIcon>

          <DockIcon href="#contacto" isSpecial={true}>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 3.26a2 2 0 001.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </DockIcon>
        </div>
      </div>
    </>
  )
}

export default Header