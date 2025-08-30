import { useState, useEffect, useRef } from 'react'

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const videoRefs = useRef([])
  const carouselRef = useRef(null)

  const projects = [
    {
      title: "E-commerce Moda Premium",
      image: "https://s.tmimgcdn.com/scr/800x500/444000/techpro-tema-multiproposito-de-wordpress-para-servicios-empresariales-y-soluciones-de-ti_444022-original.png",
    },
    {
      title: "Ferreterias Online",
      image: "https://s.tmimgcdn.com/scr/800x500/413200/toolpart-tema-shopify-20-adaptable-a-herramientas-piezas-y-equipos_413223-original.jpg",
    },
    {
      title: "Servicios Medicos",
      image: "https://s.tmimgcdn.com/scr/800x500/55800/medina-plantilla-de-sitio-web-html-de-varias-paginas-del-centro-de-diagnostico_55809-4-original.jpg",
    },
    {
      title: "Portal Dentista SmileCare",
      image: "https://s.tmimgcdn.com/scr/800x500/321100/powerhouse-mega-tienda-de-electronica-y-gadgets-tema-multiusos-shopify-20-responsive_321117-9-original.jpg",
    },
    {
      title: "Cafeterias & Bares",
      image: "https://s.tmimgcdn.com/scr/800x500/82700/burgelo-tema-moderno-para-woocommerce-de-elementor-de-comercio-electronico-de-entrega-de-alimentos_82722-6-original.png",
    },
    {
      title: "Sistema de Eventos TicketMaster",
      image: "https://s.tmimgcdn.com/scr/800x500/419700/technoxit--soluciones-tecnologicas-innovadoras-y-servicios-de-ti-plantilla-html-adaptable-multiproposito-rtl_419712-2-original.png",
    },
    {
      title: "Tienda de repuestos y accesorios para autos",
      image: "https://s.tmimgcdn.com/scr/800x500/519600/autoparts-tema-de-shopify-para-tienda-de-repuestos-y-accesorios-para-autos_519649-original.png",
    },
     {
      title: "Servicios de construcción y arquitectura",
      image: "https://s.tmimgcdn.com/scr/800x500/71400/edifice-plantilla-de-pagina-de-destino-html-de-servicios-de-construccion_71437-original.jpg",
    },
     {
      title: "Restaurante & Comida a domicilio",
      image: "https://s.tmimgcdn.com/scr/800x500/60100/red-hot-grill-tema-de-wordpress-para-restaurante_60112-3-original.jpg",
    },
     {
      title: "Tienda de accesorios y equipos de juego",
      image: "https://s.tmimgcdn.com/scr/800x500/491500/game-rush-ui-tema-de-shopify-para-accesorios-y-equipos-de-juego_491595-original.png",
    },
  ]

  const projectVideos = [
    "https://pro.magicui.design/agent-demo.mp4",
    "https://pro.magicui.design/mobile-demo.mp4",
    "https://pro.magicui.design/saas-demo.mp4",
    "https://pro.magicui.design/devtool-demo.mp4",
    "https://pro.magicui.design/startup-demo.mp4",
    "https://pro.magicui.design/agent-demo.mp4",
  ]

  // Detectar tamaño de pantalla
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  // Configurar autoplay para los videos
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const video = entry.target;
            video.play().catch(() => {
              video.muted = true;
              video.play();
            });
          } else {
            const video = entry.target;
            video.pause();
            video.currentTime = 0;
          }
        });
      },
      { threshold: 0.5 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  // Navegación del carrusel adaptada
  const getMaxIndex = () => {
    if (isMobile) {
      return projects.length - 1; // En mobile muestra 1 por vez
    } else if (window.innerWidth < 1024) {
      return projects.length - 2; // En tablet muestra 2 por vez
    } else {
      return projects.length - 3; // En desktop muestra 3 por vez
    }
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === getMaxIndex() ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? getMaxIndex() : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    if (index <= getMaxIndex()) {
      setCurrentIndex(index);
    }
  };

  // Obtener el porcentaje de desplazamiento
  const getTranslateX = () => {
    if (isMobile) {
      return currentIndex * 100; // 1 elemento por vez
    } else if (window.innerWidth < 1024) {
      return currentIndex * 50; // 2 elementos por vez
    } else {
      return currentIndex * (100/3); // 3 elementos por vez
    }
  }

  // Obtener la clase del ancho del elemento
  const getItemWidth = () => {
    if (isMobile) {
      return 'w-full'; // 1 elemento por vez en mobile
    } else if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      return 'w-1/2'; // 2 elementos por vez en tablet
    } else {
      return 'w-1/3'; // 3 elementos por vez en desktop
    }
  }

  // Manejo de gestos táctiles
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Navegación con teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Autoplay del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isMobile]);

  return (
    <section id="portafolio" className="py-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Sección Principal - Proyectos */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6 transition-colors duration-300">
            Portafolio de <span className="bg-gradient-to-r from-gray-900 to-black dark:from-gray-100 dark:to-white bg-clip-text text-transparent">Proyectos</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
            Soluciones digitales innovadoras que han transformado negocios
          </p>
        </div>

        {/* Carrusel Responsivo */}
        <div className="relative mb-20">
          {/* Botones de navegación - Solo en desktop */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 bg-white/95 dark:bg-gray-900/95 border border-gray-300 dark:border-gray-700 rounded-full shadow-xl items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 backdrop-blur-sm"
          >
            <span className="text-lg lg:text-xl font-bold">‹</span>
          </button>
          
          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 bg-white/95 dark:bg-gray-900/95 border border-gray-300 dark:border-gray-700 rounded-full shadow-xl items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 backdrop-blur-sm"
          >
            <span className="text-lg lg:text-xl font-bold">›</span>
          </button>

          {/* Contenedor del carrusel */}
          <div 
            className="overflow-hidden mx-0 md:mx-6 lg:mx-12"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(-${getTranslateX()}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className={`${getItemWidth()} flex-shrink-0 px-2 sm:px-4`}
                >
                  <div className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl lg:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-500 transform hover:-translate-y-1 lg:hover:-translate-y-2">
                    {/* Imagen principal */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                        loading="lazy"
                      />
                      
                      {/* Overlay con efectos */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 right-4 lg:right-6">
                          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-2">
                              {project.title}
                            </h3>
                            <div className="w-8 lg:w-12 h-0.5 lg:h-1 bg-white rounded-full"></div>
                          </div>
                        </div>
                      </div>

                      {/* Indicador de proyecto */}
                      <div className="absolute top-3 lg:top-4 right-3 lg:right-4 w-6 h-6 lg:w-8 lg:h-8 bg-black/80 dark:bg-white/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <span className="text-white dark:text-black text-xs font-bold">{index + 1}</span>
                      </div>
                    </div>

                    {/* Información del proyecto */}
                    <div className="p-4 sm:p-5 lg:p-6">
                      <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-black dark:text-white mb-2 transition-colors duration-300 line-clamp-2">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        <div className="w-2 h-2 bg-black dark:bg-white rounded-full mr-2"></div>
                        <span>Proyecto completado</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores de navegación */}
          <div className="flex justify-center mt-6 lg:mt-8 space-x-1.5 lg:space-x-2">
            {Array.from({ length: getMaxIndex() + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 lg:h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-black dark:bg-white w-6 lg:w-8' 
                    : 'bg-gray-400 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-400 w-1.5 lg:w-2'
                }`}
                aria-label={`Ir al proyecto ${index + 1}`}
              />
            ))}
          </div>

          {/* Contador de proyectos */}
          <div className="text-center mt-3 lg:mt-4">
            <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              {isMobile 
                ? `${currentIndex + 1} de ${projects.length} proyectos`
                : `Mostrando ${currentIndex * (isMobile ? 1 : window.innerWidth < 1024 ? 2 : 3) + 1}-${Math.min((currentIndex + 1) * (isMobile ? 1 : window.innerWidth < 1024 ? 2 : 3), projects.length)} de ${projects.length} proyectos`
              }
            </span>
          </div>

          {/* Instrucciones de swipe en mobile */}
          {isMobile && (
            <div className="text-center mt-4">
              <span className="text-xs text-gray-500 dark:text-gray-500">
                Desliza para ver más proyectos →
              </span>
            </div>
          )}
        </div>

        {/* Sección de Videos */}
        <div className="mb-20">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-6 transition-colors duration-300">
              <span className="bg-gradient-to-r from-gray-800 to-black dark:from-gray-200 dark:to-white bg-clip-text text-transparent">Demostraciones</span> en Video
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
              Videos automáticos que muestran nuestras aplicaciones en acción
            </p>
          </div>

          {/* Grid de videos responsivo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {projectVideos.map((videoUrl, index) => (
              <div key={index} className="group">
                <div className="relative bg-black rounded-xl lg:rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl hover:shadow-2xl lg:hover:shadow-3xl border border-gray-300 dark:border-gray-700 hover:border-gray-500 dark:hover:border-gray-500 transition-all duration-500 transform hover:-translate-y-1">
                  <div className="relative aspect-video overflow-hidden">
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      muted
                      loop
                      playsInline
                      preload="auto"
                    >
                      <source src={videoUrl} type="video/mp4" />
                      Tu navegador no soporta videos HTML5.
                    </video>
                    
                    {/* Overlay sutil */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-3 lg:bottom-4 left-3 lg:left-4">
                        <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 bg-white rounded-full animate-pulse"></div>
                      </div>
                    </div>

                    {/* Número de demo */}
                    <div className="absolute top-3 lg:top-4 left-3 lg:left-4 bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-lg px-2.5 lg:px-3 py-1 border border-gray-300 dark:border-gray-700">
                      <span className="text-black dark:text-white text-xs lg:text-sm font-semibold">Demo {index + 1}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 lg:mt-16 text-center">
            <button 
              onClick={() => window.location.href = '/demostraciones'}
              className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black border-2 border-black dark:border-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg text-sm lg:text-base"
            >
              <span>Ver Más Demostraciones</span>
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio