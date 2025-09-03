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
    <>
      {/* Backdrop para móvil */}
      <div 
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-all duration-500 md:hidden ${
          isAnimating ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={handleClose}
      />
      
      <div 
        className={`fixed z-50 transition-all duration-700 ease-out
          bottom-4 left-4 right-4 md:bottom-8 md:right-8 md:left-auto md:w-96
          ${isAnimating ? 'translate-y-8 opacity-0 scale-90' : 'translate-y-0 opacity-100 scale-100'}
        `}
        style={{ 
          zIndex: 9999,
          position: 'fixed'
        }}
      >
        <div className="relative bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl md:rounded-3xl shadow-2xl dark:shadow-black/40 backdrop-blur-2xl overflow-hidden group hover:shadow-3xl hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-700 hover:scale-[1.02] max-w-full">
          
          {/* Debug indicator - remover después */}
          <div className="absolute top-3 left-3 md:top-4 md:left-4 w-2 h-2 bg-red-500 rounded-full animate-pulse z-10"></div>
          
          {/* Fondo con patrón geométrico sutil */}
          <div className="absolute inset-0 opacity-30 dark:opacity-20">
            <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-bl from-gray-100 to-transparent dark:from-gray-900 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-tr from-gray-50 to-transparent dark:from-gray-950 rounded-full blur-2xl"></div>
          </div>
          
          {/* Header responsive */}
          <div className="relative p-4 md:p-8 pb-4 md:pb-6">
            {/* Close button adaptable */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 md:top-6 md:right-6 w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700"
            >
              <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Logo y título centrados - responsivo */}
            <div className="text-center space-y-3 md:space-y-4">
              <div className="relative inline-block">
                <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl overflow-hidden shadow-lg ring-2 md:ring-4 ring-white dark:ring-black group-hover:scale-105 transition-transform duration-500">
                  <img 
                    src="/img/bio.jpg" 
                    alt="BioMey Logo" 
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent dark:from-white/5"></div>
                </div>
                
                {/* Efecto de resplandor */}
                <div className="absolute inset-0 rounded-xl md:rounded-2xl shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-gray-400 dark:bg-gray-600 -z-10"></div>
              </div>
              
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-1 md:mb-2 tracking-tight">
                  Evolución en Progreso
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium text-xs md:text-sm">
                  BioMey se está transformando
                </p>
              </div>
            </div>
          </div>
          
          {/* Divisor elegante */}
          <div className="px-4 md:px-8">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
          </div>
          
          {/* Content Section - responsivo */}
          <div className="relative p-4 md:p-8 pt-4 md:pt-6 space-y-4 md:space-y-6">
            {/* Mensaje principal */}
            <div className="text-center">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-xs md:text-sm">
                Estamos trabajando en una nueva identidad y experiencia completamente renovada para ofrecerte un mejor servicio.
              </p>
            </div>
            
            {/* Card de mantenimiento moderna - más compacta en móvil */}
            <div className="relative bg-gray-50 dark:bg-gray-950 rounded-xl md:rounded-2xl p-3 md:p-5 border border-gray-200 dark:border-gray-800">
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-lg md:rounded-xl bg-black dark:bg-white flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  </svg>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h4 className="text-black dark:text-white font-semibold mb-2 md:mb-3 text-xs md:text-sm">
                    Servicios temporalmente limitados
                  </h4>
                  
                  <div className="space-y-1.5 md:space-y-2">
                    {['Cambio de idiomas', 'Funciones interactivas', 'Servicios de contacto'].map((service, index) => (
                      <div key={index} className="flex items-center space-x-2 md:space-x-3">
                        <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full flex-shrink-0"></div>
                        <span className="text-xs text-gray-600 dark:text-gray-400 truncate">{service}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-3 md:mt-4 p-2 md:p-3 bg-white dark:bg-black rounded-lg md:rounded-xl border border-gray-200 dark:border-gray-800">
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
                      <span className="text-xs text-gray-600 dark:text-gray-400 font-medium leading-tight">
                        La página permanece online durante las mejoras
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Footer moderno - adaptado para móvil */}
            <div className="flex items-center justify-between pt-1 md:pt-2">
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="relative">
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-black dark:bg-white rounded-full"></div>
                  <div className="absolute inset-0 w-2 h-2 md:w-2.5 md:h-2.5 bg-black dark:bg-white rounded-full animate-ping opacity-40"></div>
                </div>
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                  En desarrollo
                </span>
              </div>
              
              {/* Indicador de progreso minimalista */}
              <div className="flex items-center space-x-1 md:space-x-1.5">
                <div className="w-4 h-0.5 md:w-6 md:h-0.5 bg-black dark:bg-white rounded-full"></div>
                <div className="w-2 h-0.5 md:w-3 md:h-0.5 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
                <div className="w-1 h-0.5 md:w-1.5 md:h-0.5 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Efecto de hover sutil */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/5 dark:from-black/5 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl md:rounded-3xl"></div>
        </div>
      </div>
    </>
  );
};

export default NameChangeAlert;