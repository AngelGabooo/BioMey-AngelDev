import React, { useState } from 'react';

const PricingPlans = () => {
  const [isChiapasPrice, setIsChiapasPrice] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const plans = [
    {
      title: "Página Web Express",
      priceGlobal: "$700 USD",
      priceChiapas: "$2,500",
      originalPrice: "$3,000",
      description: "La solución perfecta para emprendedores que necesitan presencia digital inmediata con el máximo impacto y mínima inversión.",
      popular: false,
      features: [
        "Diseño one-page profesional y moderno",
        "3 secciones estratégicas: Inicio, Servicios y Contacto",
        "15 cuentas de correo corporativo personalizadas",
        "Certificado SSL de seguridad incluido",
        "Panel de control cPanel completo",
        "Acceso total a tu hosting y archivos",
        "Diseño 100% responsivo para móviles",
        "Hosting premium GRATUITO de 12 GB (primer año)",
        "Dominio '.com' GRATUITO (primer año)",
        "Integración directa con WhatsApp Business",
        "Entrega ultra rápida: 24 horas hábiles",
        "Optimizado para velocidad de carga"
      ],
      cta: "Contratar Ahora",
      discount: "25%",
      whatsappMessage: "¡Hola! Me interesa contratar la *Página Web Express* por $PRECIO. ¿Podrían darme más información sobre este plan?"
    },
    {
      title: "Página Web Profesional",
      priceGlobal: "$1,500 USD",
      priceChiapas: "$5,000",
      originalPrice: "$6,500",
      description: "La opción más elegida por PyMEs exitosas. Diseño profesional completo que convierte visitantes en clientes reales.",
      popular: true,
      features: [
        "Diseño one-page premium con estructura avanzada",
        "5 secciones completas optimizadas para conversión",
        "2 llamadas a la acción (CTA) estratégicamente ubicadas",
        "Mapa de ubicación interactivo integrado",
        "Hasta 30 cuentas de correo corporativo",
        "Certificado SSL premium con máxima seguridad",
        "Panel de control cPanel avanzado",
        "Gestión completa de hosting y backups",
        "Diseño responsive premium para todos los dispositivos",
        "Hosting empresarial GRATUITO de 12 GB (primer año)",
        "Dominio premium '.com' GRATUITO (primer año)",
        "SEO básico optimizado para Google",
        "Registro e indexación en Google incluido",
        "WhatsApp Business con chat automático",
        "Entrega garantizada: 48 horas hábiles"
      ],
      cta: "Contratar Ahora",
      discount: "30%",
      whatsappMessage: "¡Hola! Quiero contratar la *Página Web Profesional* por $PRECIO (el plan más popular). ¿Cuándo podríamos comenzar?"
    },
    {
      title: "Sitio Web Corporativo",
      priceGlobal: "$2,500 USD",
      priceChiapas: "$10,500",
      originalPrice: "$12,000",
      description: "Solución empresarial completa para compañías establecidas que requieren máxima funcionalidad y presencia digital dominante.",
      popular: false,
      features: [
        "Sitio multi-página con arquitectura profesional (4-5 páginas)",
        "Estructura de información empresarial avanzada",
        "CTA personalizados y optimizados por cada sección",
        "Mapa interactivo con múltiples ubicaciones",
        "Hasta 60 cuentas de correo corporativo ilimitadas",
        "Seguridad SSL empresarial y protección anti-malware",
        "Panel de administración empresarial completo",
        "Gestión total de hosting con backups automáticos",
        "Diseño responsive de nivel corporativo",
        "Hosting empresarial premium GRATUITO (primer año)",
        "Dominio corporativo '.com' GRATUITO (primer año)",
        "SEO técnico avanzado con optimización completa",
        "Indexación prioritaria en Google y buscadores",
        "Suite completa de comunicación digital integrada",
        "Entrega profesional: 3-5 días hábiles con revisiones"
      ],
      cta: "Contratar Ahora",
      discount: "25%",
      whatsappMessage: "¡Hola! Me interesa el *Sitio Web Corporativo* por $PRECIO. Es para una empresa establecida, ¿podrían asesorarme?"
    }
  ];

  const getCurrentPrice = (plan) => {
    return isChiapasPrice ? plan.priceChiapas : plan.priceGlobal;
  };

  const handleWhatsAppClick = (plan) => {
    const currentPrice = getCurrentPrice(plan);
    const message = plan.whatsappMessage.replace('$PRECIO', currentPrice);
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5218144384806?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCustomQuote = () => {
    const message = "¡Hola! Necesito una solución web personalizada para mi empresa. ¿Podrían ayudarme con una cotización a medida?";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5218144384806?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      {/* IMPORTANTE: Agregar el ID aquí para que funcione la navegación */}
      <section id="pricing-plans" className="min-h-screen bg-white dark:bg-black transition-colors duration-500">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(0,0,0,0.03)_1px,_transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.03)_1px,_transparent_0)] [background-size:24px_24px]"></div>
        
        {/* Dark Mode Toggle */}
        <div className="absolute top-6 right-6 z-30">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-3 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-black/10 dark:hover:bg-white/10"
          >
            {isDarkMode ? (
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            ) : (
              <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
              </svg>
            )}
          </button>
        </div>
        
        <div className="relative z-10 py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center mb-16 lg:mb-24">
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-sm mb-8">
                <span className="text-xs font-semibold tracking-wide text-black/70 dark:text-white/70 uppercase">
                  Planes de Desarrollo Web Premium
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-black dark:text-white mb-8">
                Soluciones Web
                <br />
                <span className="relative">
                  Profesionales
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-black dark:bg-white transform origin-left"></div>
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-black/60 dark:text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed">
                {isChiapasPrice 
                  ? 'Precios especiales exclusivos para empresas chiapanecas. La misma calidad mundial, inversión local inteligente.'
                  : 'Desarrollo web de clase mundial para empresas visionarias que buscan dominar su mercado digital.'
                }
              </p>
              
              {/* Toggle Switch */}
              <div className="flex items-center justify-center">
                <div className="flex items-center bg-black/5 dark:bg-white/5 rounded-2xl p-1 border border-black/10 dark:border-white/10 backdrop-blur-sm">
                  <button
                    onClick={() => setIsChiapasPrice(false)}
                    className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      !isChiapasPrice 
                        ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg'
                        : 'text-black dark:text-white hover:text-black dark:hover:text-white'
                    }`}
                  >
                    Precios Globales
                  </button>
                  <button
                    onClick={() => setIsChiapasPrice(true)}
                    className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      isChiapasPrice 
                        ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg'
                        : 'text-black dark:text-white hover:text-black dark:hover:text-white'
                    }`}
                  >
                    Precios Chiapas
                  </button>
                </div>
              </div>
              {isChiapasPrice && (
                <div className="mt-6 inline-flex items-center px-4 py-2 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-medium">
                  <span className="w-2 h-2 bg-white dark:bg-black rounded-full mr-2 animate-pulse"></span>
                  Descuentos especiales para Chiapas aplicados
                </div>
              )}
            </div>

            {/* Plans Grid */}
            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-24">
              {plans.map((plan, index) => (
                <div 
                  key={index}
                  className={`relative group ${
                    plan.popular ? 'lg:-mt-8 lg:mb-8' : ''
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-full text-xs font-bold tracking-wide">
                        ⭐ MÁS ELEGIDO
                      </div>
                    </div>
                  )}

                  {/* Discount Badge */}
                  {isChiapasPrice && (
                    <div className="absolute top-6 right-6 z-20">
                      <div className="bg-black dark:bg-white text-white dark:text-black w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold">
                        -{plan.discount}
                      </div>
                    </div>
                  )}

                  {/* Card */}
                  <div className={`relative h-full bg-white dark:bg-gray-900 border-2 rounded-3xl p-8 lg:p-10 transition-all duration-500 group-hover:-translate-y-2 ${
                    plan.popular 
                      ? 'border-black dark:border-white shadow-2xl' 
                      : 'border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 shadow-xl hover:shadow-2xl'
                  }`}>
                    
                    {/* Plan Header */}
                    <div className="mb-8 lg:mb-12">
                      <h3 className="text-xl lg:text-2xl font-black text-black dark:text-white mb-4 tracking-tight">
                        {plan.title}
                      </h3>
                      <p className="text-black/70 dark:text-white/70 mb-8 leading-relaxed">
                        {plan.description}
                      </p>
                      
                      {/* Pricing */}
                      <div className="mb-8">
                        <div className="flex items-end mb-2">
                          {isChiapasPrice && (
                            <span className="text-lg text-black/30 dark:text-white/30 line-through mr-3">
                              {plan.originalPrice}
                            </span>
                          )}
                          <span className="text-4xl lg:text-5xl font-black text-black dark:text-white">
                            {getCurrentPrice(plan)}
                          </span>
                        </div>
                        <p className="text-sm text-black/60 dark:text-white/60 uppercase tracking-wide">
                          {isChiapasPrice ? 'Precio especial Chiapas + IVA' : 'Precio internacional + IVA'}
                        </p>
                      </div>

                      {/* CTA Button */}
                      <button 
                        onClick={() => handleWhatsAppClick(plan)}
                        className={`w-full py-4 rounded-2xl font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 flex items-center justify-center group ${
                          plan.popular
                            ? 'bg-black dark:bg-white text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80'
                            : 'border-2 border-black dark:border-white text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black'
                        }`}>
                        <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.567-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                        </svg>
                        {plan.cta}
                      </button>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-bold text-black dark:text-white mb-6 text-sm tracking-wide uppercase">
                        Todo lo que incluye:
                      </h4>
                      <ul className="space-y-4">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <div className="flex-shrink-0 w-5 h-5 border border-black/20 dark:border-white/20 rounded-full flex items-center justify-center mr-4 mt-0.5">
                              <div className="w-2 h-2 bg-black dark:bg-white rounded-full"></div>
                            </div>
                            <span className="text-black/80 dark:text-white/80 leading-relaxed">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center">
              <div className="inline-block bg-white dark:bg-gray-900 border-2 border-black/10 dark:border-white/10 rounded-3xl p-12 max-w-4xl">
                <h3 className="text-2xl lg:text-3xl font-black text-black dark:text-white mb-6 tracking-tight">
                  ¿Necesitas una solución completamente personalizada?
                </h3>
                <p className="text-lg text-black/70 dark:text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Creamos experiencias web únicas y sistemas a medida que se adaptan perfectamente a los objetivos específicos y la visión de tu empresa.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <button 
                    onClick={handleCustomQuote}
                    className="group bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.567-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    <span>Solicitar Cotización Personalizada</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </button>
                  
                  <div className="flex items-center text-sm text-black/50 dark:text-white/50">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    Respuesta garantizada en menos de 2 horas
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPlans;