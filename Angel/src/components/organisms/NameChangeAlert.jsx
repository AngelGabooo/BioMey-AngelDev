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
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isAnimating ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
      }`}
      style={{ 
        // Aseguramos que tenga z-index alto y posición fija
        zIndex: 9999,
        position: 'fixed'
      }}
    >
      <div className="bg-white dark:bg-black border border-gray-100 dark:border-gray-800 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_rgba(255,255,255,0.03)] backdrop-blur-sm p-8 max-w-sm relative overflow-hidden group hover:shadow-[0_25px_80px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_25px_80px_rgba(255,255,255,0.06)] transition-all duration-500">
        
        {/* Debug indicator - remover después */}
        <div className="absolute top-2 left-2 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
        
        {/* Elegant geometric accent */}
        <div className="absolute -top-10 -right-10 w-32 h-32 border border-gray-50 dark:border-gray-900 rounded-full opacity-20 group-hover:scale-110 transition-transform duration-700"></div>
        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-black dark:bg-white opacity-[0.02] dark:opacity-[0.05] rounded-2xl rotate-12 group-hover:rotate-6 transition-transform duration-700"></div>
        
        {/* Close button - más elegante */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 group/btn"
        >
          <svg className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover/btn:text-gray-600 dark:group-hover/btn:text-gray-300 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="relative z-10">
          {/* Header con diseño más sofisticado */}
          <div className="flex items-start mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-black to-gray-800 dark:from-white dark:to-gray-200 rounded-2xl flex items-center justify-center mr-5 shadow-lg group-hover:scale-105 transition-transform duration-300">
              <span className="text-white dark:text-black font-bold text-xl tracking-wider">BM</span>
            </div>
            <div className="flex-1 pt-1">
              <h3 className="text-2xl font-light text-black dark:text-white mb-1 tracking-tight">
                Aviso Importante
              </h3>
              <div className="w-12 h-0.5 bg-black dark:bg-white"></div>
            </div>
          </div>
          
          {/* Mensaje principal más elegante */}
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
              <span className="font-medium text-black dark:text-white">BioMey</span> está evolucionando.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Muy pronto revelaremos nuestro nuevo nombre y una experiencia completamente renovada.
            </p>
            
            {/* Información de mantenimiento */}
            <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                    Servicios en mantenimiento:
                  </p>
                  <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Cambio de idiomas</li>
                    <li>• Algunas funciones interactivas</li>
                    <li>• Servicios de contacto</li>
                  </ul>
                  <p className="text-xs text-gray-500 dark:text-gray-500 italic">
                    Mantenemos la página online mientras mejoramos tu experiencia.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Status indicator más sofisticado */}
          <div className="flex items-center justify-between">
            <div className="flex items-center text-xs text-gray-500 dark:text-gray-500 font-medium tracking-wide uppercase">
              <div className="w-2 h-2 bg-black dark:bg-white rounded-full mr-3 animate-pulse"></div>
              En desarrollo
            </div>
            
            {/* Progress indicator minimalista */}
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-black dark:bg-white rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>

        {/* Hover effect sutil */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/[0.01] to-transparent dark:via-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default NameChangeAlert;