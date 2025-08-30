// src/pages/DemosPage.jsx
import React, { useState, useRef, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const DemosPage = ({ isDarkMode, onToggleDarkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const videoRefs = useRef([]);

  // Categorías de demostraciones
  const categories = [
    { id: 'todos', name: 'Todas las Demostraciones' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'servicios', name: 'Servicios Profesionales' },
    { id: 'landing', name: 'Landing Pages' },
    { id: 'aplicaciones', name: 'Aplicaciones Web' }
  ];

  // Proyectos de demostración (ampliada)
  const demos = [
    {
      id: 1,
      title: "Gimnasios FitNestic",
      category: "aplicaciones",
      image: "https://assets-global.website-files.com/6543e662adb839573347e936/6543e662adb839573347e9e9_fitnestic-x-home-v3-top-page-fitness-webflow-template-p-800.png",
      features: ["Carrito de compras", "Pasarela de pago", "Sistema de inventario", "Diseño responsive"]
    },
    {
      id: 2,
      title: "Gimnasios FitNestic",
      category: "aplicaciones",
      image: "https://s.tmimgcdn.com/scr/800x500/58500/ironmass-tema-de-wordpress-elementor-para-gimnasio-fitness-y-culturismo_58536-3-original.jpg",
      features: ["Búsqueda avanzada", "Categorías múltiples", "Sistema de cotizaciones", "Gestión de pedidos"]
    },
    {
      id: 3,
      title: "Casinos",
      category: "servicios",
      image: "https://s.tmimgcdn.com/scr/800x500/52600/s-bet-plantilla-de-sitio-web-html-multipagina-de-apuestas-en-linea_52669-4-original.jpg",
      features: ["Agenda de citas", "Historial médico", "Portal de pacientes", "Chat médico"]
    },
    {
      id: 4,
      title: "Tienda de moda",
      category: "ecommerce",
      image: "https://s.tmimgcdn.com/scr/800x500/428000/teessilk-tema-adaptable-multiusos-shopify-20-para-tienda-de-moda-con-impresion-de-camisetas_428016-2-original.jpg",
      features: ["Galeria de trabajos", "Formulario de contacto", "Blog educativo", "Testimonios"]
    },
    {
      id: 5,
      title: "Cafeterías & Bares",
      category: "ecommerce",
      image: "https://s.tmimgcdn.com/scr/800x500/82700/burgelo-tema-moderno-para-woocommerce-de-elementor-de-comercio-electronico-de-entrega-de-alimentos_82722-6-original.png",
      features: ["Menú interactivo", "Reservas en línea", "Promociones", "Localización"]
    },
    {
      id: 6,
      title: "Jardineria",
      category: "aplicaciones",
      image: "https://s.tmimgcdn.com/scr/800x500/44800/peonic-tema-de-wordpress-para-jardineria-y-paisaje_44898-4-original.jpg",
      features: ["Compra de entradas", "Mapa de asientos", "Sistema de recomendaciones", "App móvil"]
    },
    {
      id: 7,
      title: "Tienda de Repuestos para Autos",
      category: "ecommerce",
      image: "https://s.tmimgcdn.com/scr/800x500/519600/autoparts-tema-de-shopify-para-tienda-de-repuestos-y-accesorios-para-autos_519649-original.png",
      features: ["Búsqueda por modelo", "Compatibilidad", "Envíos express", "Soporte técnico"]
    },
    {
      id: 8,
      title: "Servicios Financieros",
      category: "servicios",
      image: "https://s.tmimgcdn.com/scr/800x500/67100/hipotecas-tema-elementor-de-wordpress-para-servicios-financieros_67116-7-original.jpg",
      features: ["Portafolio de proyectos", "Modelos 3D", "Cotizador en línea", "Blog especializado"]
    },
    {
      id: 9,
      title: "Restaurante & Comida a Domicilio",
      category: "ecommerce",
      image: "https://s.tmimgcdn.com/scr/800x500/60100/red-hot-grill-tema-de-wordpress-para-restaurante_60112-3-original.jpg",
      features: ["Pedidos online", "Seguimiento en tiempo real", "Sistema de puntos", "Reseñas"]
    },
    {
      id: 10,
      title: "Tienda de Gaming",
      category: "ecommerce",
      image: "https://s.tmimgcdn.com/scr/800x500/491500/game-rush-ui-tema-de-shopify-para-accesorios-y-equipos-de-juego_491595-original.png",
      features: ["Recomendaciones personalizadas", "Comunidad gaming", "Streaming integration", "Lanzamientos"]
    },
    {
      id: 11,
      title: "Dentistas & Clínicas",
      category: "servicios",
      image: "https://s.tmimgcdn.com/scr/800x500/65100/dentalcare-tema-wordpress-elementor-para-clinica-dental_65156-3-original.jpg",
      features: ["Estudios de caso", "Formulario de contacto", "Blog de marketing", "Recursos gratuitos"]
    },
    {
      id: 12,
      title: "Tienda De Muebles",
      category: "aplicaciones",
      image: "https://s.tmimgcdn.com/scr/800x500/71000/eveprest-furniture-17-tema-de-prestashop-para-tienda-de-muebles_71097-4-original.jpg",
      features: ["Rutinas personalizadas", "Seguimiento de progreso", "Comunidad", "Plan nutricional"]
    }
  ];

  // Filtrar demostraciones por categoría
  const filteredDemos = selectedCategory === 'todos' 
    ? demos 
    : demos.filter(demo => demo.category === selectedCategory);

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
  }, [filteredDemos]);

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      
      <main className="min-h-screen bg-white dark:bg-black transition-colors duration-300 pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header de la página */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-black dark:text-white mb-6 transition-colors duration-300">
              Galería de <span className="text-black dark:text-white underline decoration-2 underline-offset-4">Demostraciones</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
              Explora nuestros proyectos más recientes y descubre cómo podemos transformar tu presencia digital
            </p>
          </div>

          {/* Filtros por categoría */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 border-2 ${
                  selectedCategory === category.id
                    ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white shadow-lg'
                    : 'bg-white text-black border-gray-300 hover:bg-gray-100 dark:bg-black dark:text-white dark:border-gray-700 dark:hover:bg-gray-900 shadow-md'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Grid de demostraciones */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDemos.map((demo, index) => (
              <div key={demo.id} className="group bg-white dark:bg-black rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl border border-gray-200 dark:border-gray-800 transition-all duration-500 transform hover:-translate-y-2">
                {/* Video/Imagen */}
                <div className="relative aspect-video overflow-hidden">
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    preload="auto"
                    poster={demo.image}
                  >
                    <source src={demo.video} type="video/mp4" />
                    Tu navegador no soporta videos HTML5.
                  </video>
                  
                  {/* Overlay con información */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold text-white mb-2">{demo.title}</h3>
                      <p className="text-gray-200 text-sm mb-4">{demo.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {demo.features.slice(0, 3).map((feature, i) => (
                          <span key={i} className="bg-white text-black text-xs px-3 py-1 rounded-full font-medium">
                            {feature}
                          </span>
                        ))}
                        {demo.features.length > 3 && (
                          <span className="bg-white text-black text-xs px-3 py-1 rounded-full font-medium">
                            +{demo.features.length - 3} más
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Categoría */}
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm rounded-lg px-3 py-1 border border-white/20">
                    <span className="text-white text-sm font-semibold capitalize">
                      {demo.category}
                    </span>
                  </div>
                </div>

                {/* Información del demo */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-2 transition-colors duration-300">
                    {demo.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-400 mb-4 text-sm">
                    {demo.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="inline-flex items-center text-sm text-black dark:text-white font-medium">
                      <div className="w-2 h-2 bg-black dark:bg-white rounded-full mr-2"></div>
                      Demo disponible
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mensaje si no hay resultados */}
          {filteredDemos.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">😢</div>
              <h3 className="text-2xl font-semibold text-black dark:text-white mb-2">
                No hay demostraciones en esta categoría
              </h3>
              <p className="text-gray-700 dark:text-gray-400">
                Prueba con otra categoría o vuelve más tarde para ver nuevos proyectos.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DemosPage;