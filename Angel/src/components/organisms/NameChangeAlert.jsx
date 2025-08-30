// src/components/organisms/NameChangeAlert.jsx
import { useState, useEffect } from 'react';

const NameChangeAlert = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Mostrar la alerta solo si no ha sido cerrada antes
    const alertClosed = localStorage.getItem('biomeyAlertClosed');
    if (alertClosed) {
      setIsVisible(false);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('biomeyAlertClosed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in-up">
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl p-6 max-w-sm relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-2 right-2 w-16 h-16 border border-black dark:border-white rounded-full"></div>
          <div className="absolute bottom-2 left-2 w-12 h-12 border border-black dark:border-white rotate-45"></div>
        </div>
        
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
        >
          <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-black dark:bg-white rounded-2xl flex items-center justify-center mr-4">
              <span className="text-white dark:text-black font-bold text-lg">BM</span>
            </div>
            <h3 className="text-xl font-bold text-black dark:text-white">
              ¡Aviso Importante!
            </h3>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            <span className="font-semibold text-black dark:text-white">BioMey</span> muy pronto cambiará de nombre. 
            Estamos evolucionando para ofrecerte un servicio aún mejor.
          </p>
          
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Próximamente más información
          </div>

          {/* Progress bar */}
          <div className="mt-4 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div className="bg-black dark:bg-white h-2 rounded-full transition-all duration-1000 animate-pulse w-3/4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameChangeAlert;