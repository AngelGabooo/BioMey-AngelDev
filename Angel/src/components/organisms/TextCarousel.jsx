// src/components/organisms/TextCarousel.jsx
import React from 'react';

const TextCarousel = () => {
  const text = "Creación de páginas web profesionales • Comercio electrónico personalizado • Soluciones digitales hechas a tu medida • Diseño moderno, adaptable y orientado a resultados •";
  const reversedText = "• resultados a orientado y adaptable moderno Diseño • medida tu a hechas digitales Soluciones • personalizado electrónico Comercio • profesionales web páginas de Creación";
  
  return (
    <div className="relative flex overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-5 shadow-xl">
      {/* Efectos de desvanecimiento mejorados */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-indigo-600 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-pink-600 to-transparent z-10"></div>
      
      {/* Efecto de brillo sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-20"></div>
      
      {/* Primer carrusel - Texto original moviéndose hacia la izquierda */}
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="mx-8 text-white text-xl font-bold tracking-wider flex items-center">
          <span className="inline-flex items-center justify-center w-8 h-8 mr-4 rounded-full bg-white/30 backdrop-blur-sm">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </span>
          {text}
        </span>
      </div>
      
      {/* Segundo carrusel - Texto invertido moviéndose hacia la derecha */}
      <div className="absolute flex whitespace-nowrap animate-marquee2">
        <span className="mx-8 text-white text-xl font-bold tracking-wider flex items-center">
          <span className="inline-flex items-center justify-center w-8 h-8 mr-4 rounded-full bg-white/30 backdrop-blur-sm">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </span>
          {reversedText}
        </span>
      </div>
    </div>
  );
};

export default TextCarousel;