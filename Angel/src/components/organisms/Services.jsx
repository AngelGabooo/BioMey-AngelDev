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
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      icon: "🚀",
      title: "Sistemas Backend Robustos",
      description: "Infraestructura que nunca falla",
      impact: "99.9% uptime garantizado",
      results: ["APIs que manejan +1M requests/día", "Escalabilidad automática", "Seguridad nivel empresarial"],
      gradient: "from-emerald-600 to-green-500"
    },
    {
      icon: "🎨",
      title: "Experiencias Digitales Premium",
      description: "Diseños que convierten usuarios en clientes",
      impact: "+180% tasa de conversión",
      results: ["Interfaces que generan ventas", "UX optimizada para móviles", "Branding digital impactante"],
      gradient: "from-purple-600 to-pink-500"
    },
    {
      icon: "📱",
      title: "Apps Móviles Nativas",
      description: "Experiencias móviles excepcionales",
      impact: "4.8★ rating promedio",
      results: ["Launch en App Store y Google Play", "Performance nativa", "Monetización optimizada"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: "☁️",
      title: "Infraestructura Cloud Avanzada",
      description: "Tecnología que escala globalmente",
      impact: "80% reducción en costos",
      results: ["Deploy automático 24/7", "Monitoreo en tiempo real", "Backup y recuperación"],
      gradient: "from-indigo-600 to-blue-500"
    },
    {
      icon: "🛒",
      title: "E-commerce de Alto Rendimiento",
      description: "Tiendas que venden mientras duermes",
      impact: "+400% ventas online",
      results: ["Checkout optimizado", "Integración total con pagos", "Analytics avanzado"],
      gradient: "from-teal-600 to-green-500"
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
    const speed = 1;

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
    <section id="servicios" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-full mb-8 shadow-lg backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50">
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-bold text-lg">✨ Resultados Comprobados</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-8 leading-tight">
            Soluciones que 
            <span className="block text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
              Generan Impacto Real
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Tecnología probada por las mejores empresas del mundo. Resultados medibles desde el día uno.
          </p>
        </div>

        {/* Companies Trust Carousel */}
        <div className="mb-24">
          <p className="text-center text-gray-500 dark:text-gray-400 mb-12 font-semibold text-xl">
            Empresas que confían en mi trabajo:
          </p>
          <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-8 rounded-2xl shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
            <div 
              ref={carouselRef}
              className="flex gap-16 whitespace-nowrap"
              style={{ width: 'max-content' }}
            >
              {companies.concat(companies).concat(companies).map((company, index) => (
                <div key={index} className="inline-flex items-center justify-center px-8 py-4 hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl tracking-wider opacity-80 hover:opacity-100 transition-opacity duration-300">
                    {company.text}
                  </span>
                </div>
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-black/80 backdrop-blur-sm px-8 py-4 rounded-xl border border-white/20">
                <span className="text-white font-black text-2xl tracking-wider">
                  5+ AÑOS DE EXPERIENCIA
                </span>
              </div>
            </div>
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div key={index} className="group relative bg-white/80 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-15 transition-all duration-700`}></div>
              <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700`}></div>
              
              {/* Floating Particles Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute top-4 right-4 w-2 h-2 bg-white/60 rounded-full animate-ping"></div>
                <div className="absolute top-8 left-4 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-300"></div>
                <div className="absolute bottom-6 right-6 w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce delay-500"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-20">
                {/* Icon */}
                <div className="text-6xl mb-8 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 drop-shadow-2xl">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-black text-gray-800 dark:text-white mb-6 tracking-tight leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-500">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg font-medium">
                  {service.description}
                </p>

                {/* Impact Badge */}
                <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.gradient} text-white rounded-2xl text-base font-bold mb-8 shadow-lg transform group-hover:scale-110 transition-all duration-500 hover:shadow-2xl`}>
                  <span className="text-xl mr-3">📈</span>
                  <span>{service.impact}</span>
                </div>

                {/* Results */}
                <div className="space-y-5 mb-8">
                  {service.results.map((result, idx) => (
                    <div key={idx} className="flex items-start space-x-4 group/item">
                      <div className={`w-3 h-3 bg-gradient-to-r ${service.gradient} rounded-full mt-2 flex-shrink-0 group-hover:animate-pulse`}></div>
                      <span className="text-gray-600 dark:text-gray-300 leading-relaxed font-medium group-hover/item:text-gray-800 dark:group-hover/item:text-white transition-colors duration-300">{result}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`w-full py-4 px-8 bg-gradient-to-r ${service.gradient} text-white rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-300/50 group-hover:animate-pulse`}>
                  <span className="flex items-center justify-center">
                    Ver Casos de Éxito
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-24">
          <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 shadow-2xl transform hover:scale-[1.02] transition-all duration-500 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                ¿Listo para transformar tu negocio?
              </h3>
              <p className="text-blue-100 mb-10 text-xl leading-relaxed font-medium max-w-2xl mx-auto">
                Únete a las empresas que ya están viendo resultados extraordinarios
              </p>
              <button className="bg-white text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text px-12 py-5 rounded-2xl font-black text-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-500 hover:-translate-y-2 focus:outline-none focus:ring-4 focus:ring-white/30">
                <span className="flex items-center justify-center">
                  Comenzar Proyecto 
                  <span className="ml-3 text-2xl">🚀</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;