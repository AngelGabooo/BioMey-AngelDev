import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
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
    }
    ,
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

  // Navegación del carrusel
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 3 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    if (index <= projects.length - 3) {
      setCurrentIndex(index);
    }
  };

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
  }, [currentIndex]);

  return (
    <section id="portafolio" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Sección Principal - Proyectos */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-6 transition-colors duration-300">
            Portafolio de <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Proyectos</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
            Soluciones digitales innovadoras que han transformado negocios
          </p>
        </div>

        {/* Carrusel Mejorado - Muestra 3 elementos a la vez */}
        <div className="relative mb-20">
          {/* Botones de navegación */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 backdrop-blur-sm"
          >
            <span className="text-xl font-bold">‹</span>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 backdrop-blur-sm"
          >
            <span className="text-xl font-bold">›</span>
          </button>

          {/* Contenedor del carrusel */}
          <div 
            className="overflow-hidden mx-12"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100/3)}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="w-1/3 flex-shrink-0 px-4"
                >
                  <div className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    {/* Imagen principal */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      
                      {/* Overlay con efectos */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <h3 className="text-lg font-bold text-white mb-2">
                              {project.title}
                            </h3>
                            <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                          </div>
                        </div>
                      </div>

                      {/* Indicador de proyecto */}
                      <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-blue-600/80 to-purple-600/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <span className="text-white text-xs font-bold">{index + 1}</span>
                      </div>
                    </div>

                    {/* Información del proyecto */}
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span>Proyecto completado</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores de navegación */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: projects.length - 2 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 w-8' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 w-2'
                }`}
                aria-label={`Ir al grupo ${index + 1}`}
              />
            ))}
          </div>

          {/* Contador de proyectos */}
          <div className="text-center mt-4">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Mostrando {currentIndex * 3 + 1}-{Math.min((currentIndex + 1) * 3, projects.length)} de {projects.length} proyectos
            </span>
          </div>
        </div>

        {/* Sección de Videos */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6 transition-colors duration-300">
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Demostraciones</span> en Video
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
              Videos automáticos que muestran nuestras aplicaciones en acción
            </p>
          </div>

          {/* Grid de videos responsivo */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectVideos.map((videoUrl, index) => (
              <div key={index} className="group">
                <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1">
                  <div className="relative aspect-video overflow-hidden">
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                      preload="auto"
                    >
                      <source src={videoUrl} type="video/mp4" />
                      Tu navegador no soporta videos HTML5.
                    </video>
                    
                    {/* Overlay sutil */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4">
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      </div>
                    </div>

                    {/* Número de demo */}
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1">
                      <span className="text-white text-sm font-semibold">Demo {index + 1}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
        
            <div className="mt-16 text-center">
            <Link 
    to="/demostraciones"
    className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg"
  >
    <span>Ver Más Demostraciones</span>
    <span className="text-lg">→</span>
  </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio