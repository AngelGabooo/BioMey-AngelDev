// src/components/organisms/NameChangeAlert.jsx
import { useState, useEffect } from 'react';

const NameChangeAlert = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Para debugging - siempre mostrar la alerta inicialmente
    console.log('NameChangeAlert montado');
    
    // Comentar estas líneas temporalmente para forzar que aparezca
    // const alertClosed = localStorage.getItem('biomeyAlertClosed');
    // if (alertClosed) {
    //   console.log('Alerta ya fue cerrada anteriormente');
    //   setIsVisible(false);
    // }
  }, []);

  const handleClose = () => {
    console.log('Cerrando alerta...');
    setIsAnimating(true);
    setTimeout(() => {
      setIsVisible(false);
      localStorage.setItem('biomeyAlertClosed', 'true');
      console.log('Alerta cerrada y guardado en localStorage');
    }, 300);
  };

  // Para debugging - mostrar en consola el estado
  console.log('NameChangeAlert render - isVisible:', isVisible, 'isAnimating:', isAnimating);

  if (!isVisible) {
    console.log('Alerta no visible - no renderizando');
    return null;
  }

  return (
    <div 
      className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ease-out ${
        isAnimating ? 'translate-y-6 opacity-0 scale-95' : 'translate-y-0 opacity-100 scale-100'
      }`}
      style={{ 
        zIndex: 9999,
        position: 'fixed'
      }}
    >
      <div className="relative bg-white dark:bg-gray-950 border border-gray-200/50 dark:border-gray-800/50 rounded-2xl shadow-2xl dark:shadow-black/20 backdrop-blur-xl p-0 max-w-md overflow-hidden group hover:shadow-3xl hover:border-gray-300/50 dark:hover:border-gray-700/50 transition-all duration-700">
        
        {/* Debug indicator - remover después */}
        <div className="absolute top-3 left-3 w-2 h-2 bg-red-500 rounded-full animate-pulse z-10"></div>
        
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-50/30 to-gray-100/20 dark:via-gray-900/30 dark:to-gray-800/20"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300/50 to-transparent dark:via-gray-700/50"></div>
        
        {/* Header Section */}
        <div className="relative bg-gradient-to-r from-gray-50/80 to-gray-100/60 dark:from-gray-900/80 dark:to-gray-800/60 p-6 border-b border-gray-200/30 dark:border-gray-800/30">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg bg-white/60 dark:bg-gray-900/60 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
          >
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-12 h-12 bg-black dark:bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                <span className="text-white dark:text-black font-bold text-sm tracking-widest">BM</span>
              </div>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-black dark:bg-white rounded-xl blur-lg opacity-10 -z-10 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-black dark:text-white mb-1 tracking-tight">
                Evolución en Progreso
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                BioMey se está transformando
              </p>
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="relative p-6 space-y-5">
          {/* Main Message */}
          <div className="space-y-3">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Estamos trabajando en una nueva identidad y experiencia completamente renovada para ofrecerte un mejor servicio.
            </p>
          </div>
          
          {/* Maintenance Info Card */}
          <div className="relative bg-gray-50/80 dark:bg-gray-900/50 rounded-xl p-4 border border-gray-200/50 dark:border-gray-800/50 backdrop-blur-sm">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mt-0.5">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
              </div>
              <div className="flex-1 space-y-3">
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Servicios temporalmente limitados
                  </h4>
                  <div className="grid grid-cols-1 gap-1.5 text-xs text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <span>Cambio de idiomas</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <span>Funciones interactivas</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <span>Servicios de contacto</span>
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500 italic bg-white/50 dark:bg-gray-800/50 rounded-lg px-3 py-2 border border-gray-200/50 dark:border-gray-700/50">
                  La página permanece online durante las mejoras
                </div>
              </div>
            </div>
          </div>
          
          {/* Status Footer */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="w-2 h-2 bg-black dark:bg-white rounded-full"></div>
                <div className="absolute inset-0 w-2 h-2 bg-black dark:bg-white rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                En desarrollo activo
              </span>
            </div>
            
            {/* Modern progress indicator */}
            <div className="flex items-center space-x-1">
              <div className="w-8 h-1 bg-black dark:bg-white rounded-full"></div>
              <div className="w-4 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
              <div className="w-2 h-1 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 dark:to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
        
        {/* Border highlight on hover */}
        <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-gray-300/30 dark:group-hover:border-gray-600/30 transition-colors duration-500 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default NameChangeAlert;