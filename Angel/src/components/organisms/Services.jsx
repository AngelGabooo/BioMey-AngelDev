import React, { useEffect, useRef } from 'react';

const Services = () => {
  const carouselRef = useRef(null);

  const services = [
    {
      icon: "💻",
      title: "Aplicaciones Web Escalables",
      description: "Plataformas que crecen con tu negocio",
      impact: "+300% conversiones promedio",
      results: ["Reducción 70% tiempo de carga", "Incremento 250% engagement", "SEO optimizado para top rankings"],
      gradient: "from-gray-900 to-gray-700",
      bgPattern: "radial-gradient(circle at 20% 50%, rgba(0, 0, 0, 0.05) 0%, transparent 50%)"
    },
    {
      icon: "🚀",
      title: "Sistemas Backend Robustos",
      description: "Infraestructura que nunca falla",
      impact: "99.9% uptime garantizado",
      results: ["APIs que manejan +1M requests/día", "Escalabilidad automática", "Seguridad nivel empresarial"],
      gradient: "from-black to-gray-800",
      bgPattern: "radial-gradient(circle at 80% 20%, rgba(0, 0, 0, 0.03) 0%, transparent 50%)"
    },
    {
      icon: "🎨",
      title: "Experiencias Digitales Premium",
      description: "Diseños que convierten usuarios en clientes",
      impact: "+180% tasa de conversión",
      results: ["Interfaces que generan ventas", "UX optimizada para móviles", "Branding digital impactante"],
      gradient: "from-gray-800 to-black",
      bgPattern: "radial-gradient(circle at 50% 80%, rgba(0, 0, 0, 0.04) 0%, transparent 50%)"
    },
    {
      icon: "📱",
      title: "Apps Móviles Nativas",
      description: "Experiencias móviles excepcionales",
      impact: "4.8★ rating promedio",
      results: ["Launch en App Store y Google Play", "Performance nativa", "Monetización optimizada"],
      gradient: "from-gray-900 to-gray-600",
      bgPattern: "radial-gradient(circle at 30% 30%, rgba(0, 0, 0, 0.06) 0%, transparent 50%)"
    },
    {
      icon: "☁️",
      title: "Infraestructura Cloud Avanzada",
      description: "Tecnología que escala globalmente",
      impact: "80% reducción en costos",
      results: ["Deploy automático 24/7", "Monitoreo en tiempo real", "Backup y recuperación"],
      gradient: "from-gray-700 to-gray-900",
      bgPattern: "radial-gradient(circle at 70% 70%, rgba(0, 0, 0, 0.02) 0%, transparent 50%)"
    },
    {
      icon: "🛒",
      title: "E-commerce de Alto Rendimiento",
      description: "Tiendas que venden mientras duermes",
      impact: "+400% ventas online",
      results: ["Checkout optimizado", "Integración total con pagos", "Analytics avanzado"],
      gradient: "from-black to-gray-700",
      bgPattern: "radial-gradient(circle at 40% 60%, rgba(0, 0, 0, 0.05) 0%, transparent 50%)"
    }
  ];

  const companies = [
    { name: "5four", text: "5four" },
    { name: "WW", text: "WW" },
    { name: "Zereflab", text: "Zereflab" },
    { name: "Heymora", text: "heymora" },
    { name: "Dealpage", text: "Dealpage" },
    { name: "Nike", text: "Nike" },
    { name: "Adidas", text: "Adidas" },
    { name: "Microsoft", text: "Microsoft" },
    { name: "Spotify", text: "Spotify" },
    { name: "Shopify", text: "Shopify" },
    { name: "Google", text: "Google" },
    { name: "Meta", text: "Meta" },
    { name: "Tesla", text: "Tesla" },
    { name: "TEC Monterrey", text: "TEC" },
    { name: "Universidad Tet", text: "TET" },
    { name: "Cruz Roja", text: "Cruz Roja" },
    { name: "BMW", text: "BMW" }
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationId;
    let currentPosition = 0;
    const speed = 0.8;

    const animate = () => {
      currentPosition -= speed;
      if (Math.abs(currentPosition) >= carousel.scrollWidth / 2) {
        currentPosition = 0;
      }
      carousel.style.transform = `translateX(${currentPosition}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <section id="servicios" className="py-12 md:py-32 relative overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-black"></div>
      
      {/* Minimal Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-black/5 dark:bg-white/5 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-black/3 dark:bg-white/3 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-black/4 dark:bg-white/4 rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Simple Grid Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Simplified Header */}
        <div className="text-center mb-12 md:mb-24">
          <div className="relative inline-flex items-center px-6 md:px-10 py-3 md:py-4 mb-8 md:mb-12">
            <div className="absolute inset-0 bg-black/10 dark:bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute inset-0 bg-white dark:bg-gray-900 rounded-full border border-gray-200 dark:border-gray-700 backdrop-blur-sm shadow-xl"></div>
            <div className="relative flex items-center space-x-3">
              <div className="w-2 h-2 bg-black dark:bg-white rounded-full"></div>
              <span className="text-black dark:text-white font-black text-sm md:text-lg tracking-wider">
                ✨ RESULTADOS COMPROBADOS
              </span>
              <div className="w-2 h-2 bg-gray-600 dark:bg-gray-300 rounded-full"></div>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 md:mb-10 leading-none tracking-tight">
            <span className="block text-gray-900 dark:text-white mb-2">
              Soluciones que
            </span>
            <span className="block relative">
              <span className="text-black dark:text-white">
                Generan Impacto
              </span>
              <div className="absolute -inset-2 bg-black/10 dark:bg-white/10 blur-2xl -z-10 rounded-full"></div>
            </span>
            <span className="block text-gray-700 dark:text-gray-300">
              Real
            </span>
          </h2>

          <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 max-w-5xl mx-auto leading-relaxed font-light">
            Tecnología probada por las <span className="font-bold text-black dark:text-white">mejores empresas del mundo</span>. 
            <br className="hidden md:block" />
            Resultados medibles desde el <span className="font-bold text-gray-800 dark:text-gray-200">día uno</span>.
          </p>
        </div>

        {/* Simplified Experience Badge */}
        <div className="text-center mb-16 md:mb-20">
          <div className="relative inline-flex items-center">
            <div className="absolute inset-0 bg-black dark:bg-white rounded-3xl blur-lg opacity-20"></div>
            <div className="relative bg-black dark:bg-white text-white dark:text-black px-8 md:px-12 py-4 md:py-6 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-white dark:bg-black rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
                </div>
                <span className="font-black text-lg md:text-xl tracking-widest">
                  5+ AÑOS DE EXPERIENCIA
                </span>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                  <div className="w-3 h-3 bg-white dark:bg-black rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Simplified Companies Carousel */}
        <div className="mb-20 md:mb-32">
          <p className="text-center text-gray-600 dark:text-gray-300 mb-10 md:mb-16 font-bold text-xl md:text-2xl">
            Empresas que <span className="text-black dark:text-white">confían</span> en mi trabajo:
          </p>
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <div className="absolute inset-0 bg-black dark:bg-white"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-black to-gray-900/90 dark:from-white/90 dark:via-gray-100 dark:to-white/90"></div>
            <div className="relative text-white dark:text-black py-8 md:py-12">
              <div 
                ref={carouselRef}
                className="flex gap-12 md:gap-20 whitespace-nowrap"
                style={{ width: 'max-content' }}
              >
                {companies.concat(companies).concat(companies).map((company, index) => (
                  <div key={index} className="inline-flex items-center justify-center px-6 md:px-12 py-3 md:py-6 hover:scale-110 transition-all duration-300">
                    <span className="font-black text-lg md:text-2xl tracking-wider opacity-60 hover:opacity-100 transition-all duration-300">
                      {company.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Simplified Gradient Overlays */}
            <div className="absolute left-0 top-0 w-20 md:w-40 h-full bg-gradient-to-r from-black dark:from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-20 md:w-40 h-full bg-gradient-to-l from-black dark:from-white to-transparent z-10"></div>
          </div>
        </div>

        {/* Simplified Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl md:rounded-[2rem] p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50 overflow-hidden hover:border-gray-300/70 dark:hover:border-gray-600/70"
              style={{ backgroundImage: service.bgPattern }}
            >
              {/* Simplified Background Effects */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-all duration-500`}></div>
              <div className={`absolute -inset-2 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500`}></div>
              
              {/* Minimal Corner Accents */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.gradient} opacity-5 rounded-bl-full transform scale-0 group-hover:scale-100 transition-all duration-300`}></div>
              <div className={`absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr ${service.gradient} opacity-5 rounded-tr-full transform scale-0 group-hover:scale-100 transition-all duration-300 delay-100`}></div>
              
              {/* Minimal Floating Particles */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-6 right-6 w-2 h-2 bg-black dark:bg-white rounded-full opacity-30"></div>
                <div className="absolute top-12 left-6 w-1.5 h-1.5 bg-gray-600 dark:bg-gray-400 rounded-full opacity-20"></div>
                <div className="absolute bottom-8 right-8 w-2 h-2 bg-gray-800 dark:bg-gray-200 rounded-full opacity-25"></div>
                <div className="absolute bottom-12 left-8 w-1 h-1 bg-gray-700 dark:bg-gray-300 rounded-full opacity-30"></div>
              </div>
              
              <div className="relative z-20">
                {/* Icon */}
                <div className="text-5xl md:text-7xl mb-8 md:mb-10 transform group-hover:scale-110 transition-all duration-500 filter drop-shadow-lg">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-800 dark:text-white mb-6 md:mb-8 tracking-tight leading-tight group-hover:text-black dark:group-hover:text-white transition-all duration-500">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-8 md:mb-10 leading-relaxed text-lg md:text-xl font-medium group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-all duration-300">
                  {service.description}
                </p>

                {/* Impact Badge */}
                <div className={`inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r ${service.gradient} text-white dark:text-black rounded-2xl md:rounded-3xl text-base md:text-lg font-black mb-8 md:mb-10 shadow-lg transform group-hover:scale-105 transition-all duration-500 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/10 dark:bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="text-2xl md:text-3xl mr-3 md:mr-4 relative z-10">📈</span>
                  <span className="relative z-10">{service.impact}</span>
                </div>

                {/* Results */}
                <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
                  {service.results.map((result, idx) => (
                    <div key={idx} className="flex items-start space-x-4 md:space-x-5 group/item">
                      <div className={`w-3 h-3 md:w-4 md:h-4 bg-gradient-to-r ${service.gradient} rounded-full mt-2 flex-shrink-0 group-hover:shadow-md transform group-hover/item:scale-110 transition-all duration-300`}></div>
                      <span className="text-gray-600 dark:text-gray-300 leading-relaxed font-medium text-base md:text-lg group-hover/item:text-gray-800 dark:group-hover/item:text-white group-hover/item:font-semibold transition-all duration-300">{result}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`w-full py-4 md:py-5 px-8 md:px-10 bg-gradient-to-r ${service.gradient} text-white dark:text-black rounded-2xl md:rounded-3xl font-black text-base md:text-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-gray-300/30 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/10 dark:bg-black/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="flex items-center justify-center relative z-10">
                    <span className="mr-3">Ver Casos de Éxito</span>
                    <svg className="w-5 h-5 md:w-6 md:h-6 transform group-hover:translate-x-2 transition-all duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;