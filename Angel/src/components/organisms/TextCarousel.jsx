import React from 'react';

const TextCarousel = () => {
  const text = "CREACIÓN DE PÁGINAS WEB PROFESIONALES • COMERCIO ELECTRÓNICO PERSONALIZADO • SOLUCIONES DIGITALES HECHAS A TU MEDIDA • DISEÑO MODERNO, ADAPTABLE Y ORIENTADO A RESULTADOS";
  
  const styles = `
    @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css');
    
    @keyframes marquee-right {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    
    @keyframes marquee-left {
      0% { transform: translateX(100%); }
      100% { transform: translateX(-100%); }
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    
    @keyframes pulse-dot {
      0%, 100% { opacity: 0.4; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.2); }
    }
    
    .animate-marquee-right {
      animation: marquee-right 30s linear infinite;
    }
    
    .animate-marquee-left {
      animation: marquee-left 30s linear infinite;
    }
    
    .float-animation {
      animation: float 6s ease-in-out infinite;
    }
    
    .pulse-dot {
      animation: pulse-dot 2s ease-in-out infinite;
    }
    
    .text-elegant {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-weight: 300;
      letter-spacing: 0.08em;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
    }
    
    .text-bold-elegant {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-weight: 600;
      letter-spacing: 0.05em;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    }
    
    .container-modern {
      background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
      box-shadow: 
        0 10px 40px -10px rgba(0, 0, 0, 0.1),
        0 0 0 1px rgba(0, 0, 0, 0.05),
        inset 0 1px 0 rgba(255, 255, 255, 0.9);
      border-radius: 2px;
      position: relative;
      overflow: hidden;
    }
    
    .container-modern::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, 
        transparent 0%, 
        rgba(0, 0, 0, 0.1) 20%, 
        rgba(0, 0, 0, 0.3) 50%, 
        rgba(0, 0, 0, 0.1) 80%, 
        transparent 100%
      );
    }
    
    .container-modern::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, 
        transparent 0%, 
        rgba(0, 0, 0, 0.1) 20%, 
        rgba(0, 0, 0, 0.3) 50%, 
        rgba(0, 0, 0, 0.1) 80%, 
        transparent 100%
      );
    }
    
    .fade-edges {
      background: linear-gradient(90deg, 
        rgba(255, 255, 255, 1) 0%, 
        rgba(255, 255, 255, 0.9) 10%,
        transparent 25%, 
        transparent 75%, 
        rgba(255, 255, 255, 0.9) 90%,
        rgba(255, 255, 255, 1) 100%
      );
    }
    
    .divider-modern {
      background: linear-gradient(90deg, 
        transparent 0%, 
        rgba(0, 0, 0, 0.1) 40%, 
        rgba(0, 0, 0, 0.4) 50%, 
        rgba(0, 0, 0, 0.1) 60%, 
        transparent 100%
      );
      height: 1px;
      position: relative;
    }
    
    .divider-modern::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 8px;
      height: 8px;
      background: #000;
      border-radius: 50%;
      box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.8);
    }
    
    .decoration-corner {
      position: absolute;
      width: 40px;
      height: 40px;
      opacity: 0.1;
    }
    
    .decoration-corner::before,
    .decoration-corner::after {
      content: '';
      position: absolute;
      background: #000;
    }
    
    .decoration-corner::before {
      width: 20px;
      height: 1px;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    
    .decoration-corner::after {
      width: 1px;
      height: 20px;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="container-modern position-relative py-5">
        
        {/* Decoraciones en las esquinas */}
        <div className="decoration-corner" style={{ top: '20px', left: '20px' }}></div>
        <div className="decoration-corner" style={{ top: '20px', right: '20px', transform: 'rotate(90deg)' }}></div>
        <div className="decoration-corner" style={{ bottom: '20px', left: '20px', transform: 'rotate(-90deg)' }}></div>
        <div className="decoration-corner" style={{ bottom: '20px', right: '20px', transform: 'rotate(180deg)' }}></div>
        
        {/* Efectos de desvanecimiento laterales */}
        <div className="position-absolute top-0 bottom-0 start-0 fade-edges" style={{ width: '60px', zIndex: 10 }}></div>
        <div className="position-absolute top-0 bottom-0 end-0 fade-edges" style={{ width: '60px', zIndex: 10, transform: 'scaleX(-1)' }}></div>
        
        {/* Primera línea - movimiento hacia la derecha */}
        <div className="position-relative mb-4 overflow-hidden">
          <div className="d-flex text-nowrap animate-marquee-right">
            <span className="text-dark fs-5 text-bold-elegant d-flex align-items-center">
              <span className="pulse-dot d-inline-flex align-items-center justify-content-center me-4 rounded-circle bg-dark" style={{ width: '8px', height: '8px' }}></span>
              {text}
              <span className="pulse-dot d-inline-flex align-items-center justify-content-center mx-4 rounded-circle bg-dark" style={{ width: '8px', height: '8px' }}></span>
              {text}
              <span className="pulse-dot d-inline-flex align-items-center justify-content-center mx-4 rounded-circle bg-dark" style={{ width: '8px', height: '8px' }}></span>
              {text}
            </span>
          </div>
        </div>

        {/* Separador central moderno */}
        <div className="position-relative my-4 float-animation">
          <div className="divider-modern mx-auto" style={{ width: '80%' }}></div>
        </div>

        {/* Segunda línea - movimiento hacia la izquierda */}
        <div className="position-relative overflow-hidden">
          <div className="d-flex text-nowrap animate-marquee-left">
            <span className="text-secondary fs-5 text-elegant d-flex align-items-center" style={{ color: '#495057 !important' }}>
              <span className="pulse-dot d-inline-flex align-items-center justify-content-center me-4 rounded-circle" style={{ width: '6px', height: '6px', backgroundColor: '#6c757d' }}></span>
              {text}
              <span className="pulse-dot d-inline-flex align-items-center justify-content-center mx-4 rounded-circle" style={{ width: '6px', height: '6px', backgroundColor: '#6c757d' }}></span>
              {text}
              <span className="pulse-dot d-inline-flex align-items-center justify-content-center mx-4 rounded-circle" style={{ width: '6px', height: '6px', backgroundColor: '#6c757d' }}></span>
              {text}
            </span>
          </div>
        </div>

        {/* Elementos decorativos flotantes */}
        <div className="position-absolute" style={{ top: '15%', left: '5%', opacity: 0.3 }}>
          <div className="pulse-dot rounded-circle bg-dark" style={{ width: '3px', height: '3px' }}></div>
        </div>
        <div className="position-absolute" style={{ top: '15%', right: '5%', opacity: 0.3 }}>
          <div className="pulse-dot rounded-circle bg-dark" style={{ width: '3px', height: '3px', animationDelay: '0.5s' }}></div>
        </div>
        <div className="position-absolute" style={{ bottom: '15%', left: '8%', opacity: 0.2 }}>
          <div className="pulse-dot rounded-circle bg-secondary" style={{ width: '2px', height: '2px', animationDelay: '1s' }}></div>
        </div>
        <div className="position-absolute" style={{ bottom: '15%', right: '8%', opacity: 0.2 }}>
          <div className="pulse-dot rounded-circle bg-secondary" style={{ width: '2px', height: '2px', animationDelay: '1.5s' }}></div>
        </div>
        
        {/* Líneas decorativas adicionales */}
        <div className="position-absolute top-50 start-0 translate-middle-y" style={{ width: '20px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.2), transparent)', opacity: 0.4 }}></div>
        <div className="position-absolute top-50 end-0 translate-middle-y" style={{ width: '20px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.2), transparent)', opacity: 0.4 }}></div>
      </div>
    </>
  );
};

export default TextCarousel;