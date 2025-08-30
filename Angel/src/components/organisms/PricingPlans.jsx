import React, { useState } from 'react';

const PricingPlans = () => {
  const [isChiapasPrice, setIsChiapasPrice] = useState(true);

  const plans = [
    {
      title: "Página Web Sencilla",
      priceGlobal: "$700 DLS",
      priceChiapas: "$2,500",
      originalPrice: "$3,000",
      description: "Ideal cuando te urge tener algo en internet pero cuentas con información mínima.",
      popular: false,
      features: [
        "Tipo one page (1 Hoja o pestaña)",
        "3 Secciones: Inicio, Servicios y Contacto",
        "15 correos personalizados",
        "Certificado SSL incluido",
        "cPanel propio",
        "Accesos completos al Hosting",
        "Diseño Responsivo",
        "Hosting GRATIS 12 Gb (1er año)",
        "Dominio GRATIS '.com' (1er año)",
        "Integración WhatsApp",
        "Entrega: 1 Día Hábil",
        "No administrable por usuario"
      ],
      cta: "Ver Ejemplo",
      discount: "25%"
    },
    {
      title: "Página Web Económica",
      priceGlobal: "$1,500 DLS",
      priceChiapas: "$5,000" ,
      originalPrice: "$6,500",
      description: "La mejor opción para emprendedores y PyMEs que buscan presencia profesional.",
      popular: true,
      features: [
        "Tipo one page profesional",
        "5 Secciones completas optimizadas",
        "2 Call To Action estratégicos",
        "Mapa de ubicación integrado",
        "Hasta 30 correos personalizados",
        "Certificado SSL premium",
        "cPanel completo",
        "Accesos totales al Hosting",
        "Diseño 100% Responsivo",
        "Hosting GRATIS 12 Gb (1er año)",
        "Dominio GRATIS '.com' (1er año)",
        "SEO Básico optimizado",
        "Alta en Google incluida",
        "WhatsApp Business integrado",
        "Entrega: 2 Días Hábiles"
      ],
      cta: "Ver Ejemplo",
      discount: "30%"
    },
    {
      title: "Sitio Web Profesional",
      priceGlobal: "$2,500 DLS",
      priceChiapas: "$10,500",
      originalPrice: "$12,000",
      description: "Solución completa para empresas con múltiples servicios y amplio contenido.",
      popular: false,
      features: [
        "Diseño multi-página (4-5 secciones)",
        "Arquitectura de información avanzada",
        "CTA personalizado por sección",
        "Mapa interactivo integrado",
        "Hasta 60 correos corporativos",
        "SSL y seguridad avanzada",
        "Panel de control completo",
        "Gestión total del hosting",
        "Diseño responsive premium",
        "Hosting empresarial GRATIS (1er año)",
        "Dominio premium GRATIS (1er año)",
        "SEO técnico avanzado",
        "Indexación completa en Google",
        "Suite de comunicación integrada",
        "Entrega: 3-5 Días Hábiles"
      ],
      cta: "Ver Ejemplo",
      discount: "25%"
    }
  ];

  const getCurrentPrice = (plan) => {
    return isChiapasPrice ? plan.priceChiapas : plan.priceGlobal;
  };

  return (
    <section className="min-h-screen bg-white dark:bg-black transition-colors duration-500">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(0,0,0,0.03)_1px,_transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.03)_1px,_transparent_0)] [background-size:24px_24px]"></div>
      
      <div className="relative z-10 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16 lg:mb-24">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-sm mb-8">
              <span className="text-xs font-semibold tracking-wide text-black/70 dark:text-white/70 uppercase">
                Planes de Desarrollo Web
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
                ? 'Precios especiales para empresas ubicadas en Chiapas con la misma calidad profesional'
                : 'Desarrollo web de clase mundial para empresas que buscan excelencia digital'
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
                      : 'text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white'
                  }`}
                >
                  Global
                </button>
                <button
                  onClick={() => setIsChiapasPrice(true)}
                  className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    isChiapasPrice 
                      ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg'
                      : 'text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white'
                  }`}
                >
                  Chiapas
                </button>
              </div>
            </div>

            {isChiapasPrice && (
              <div className="mt-6 inline-flex items-center px-4 py-2 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-medium">
                <span className="w-2 h-2 bg-white dark:bg-black rounded-full mr-2 animate-pulse"></span>
                Descuentos especiales aplicados
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
                      MÁS ELEGIDO
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
                <div className={`relative h-full bg-white dark:bg-black border-2 rounded-3xl p-8 lg:p-10 transition-all duration-500 group-hover:-translate-y-2 ${
                  plan.popular 
                    ? 'border-black dark:border-white shadow-2xl' 
                    : 'border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 shadow-xl hover:shadow-2xl'
                }`}>
                  
                  {/* Plan Header */}
                  <div className="mb-8 lg:mb-12">
                    <h3 className="text-xl lg:text-2xl font-black text-black dark:text-white mb-4 tracking-tight">
                      {plan.title}
                    </h3>
                    <p className="text-black/60 dark:text-white/60 mb-8 leading-relaxed">
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
                      <p className="text-sm text-black/50 dark:text-white/50 uppercase tracking-wide">
                        {isChiapasPrice ? 'Precio Chiapas + IVA' : 'Precio Global + IVA'}
                      </p>
                    </div>

                    {/* CTA Button */}
                    <button className={`w-full py-4 rounded-2xl font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 ${
                      plan.popular
                        ? 'bg-black dark:bg-white text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80'
                        : 'border-2 border-black dark:border-white text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black'
                    }`}>
                      {plan.cta}
                    </button>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-bold text-black dark:text-white mb-6 text-sm tracking-wide uppercase">
                      Incluye:
                    </h4>
                    <ul className="space-y-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <div className="flex-shrink-0 w-5 h-5 border border-black/20 dark:border-white/20 rounded-full flex items-center justify-center mr-4 mt-0.5">
                            <div className="w-2 h-2 bg-black dark:bg-white rounded-full"></div>
                          </div>
                          <span className="text-black/70 dark:text-white/70 leading-relaxed">
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
            <div className="inline-block bg-white dark:bg-black border-2 border-black/10 dark:border-white/10 rounded-3xl p-12 max-w-4xl">
              <h3 className="text-2xl lg:text-3xl font-black text-black dark:text-white mb-6 tracking-tight">
                ¿Necesitas una solución personalizada?
              </h3>
              <p className="text-lg text-black/60 dark:text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
                Desarrollamos proyectos web únicos adaptados específicamente a las necesidades y objetivos de tu empresa.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="group bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 flex items-center">
                  <span>Solicitar Cotización</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </button>
                
                <div className="flex items-center text-sm text-black/50 dark:text-white/50">
                  <div className="w-2 h-2 bg-black/20 dark:bg-white/20 rounded-full mr-2"></div>
                  Respuesta en 24 horas
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;