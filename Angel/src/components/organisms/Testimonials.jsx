// src/components/organisms/Testimonials.jsx
import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials = () => {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const translations = {
    es: {
      title: "Testimonios de Clientes",
      subtitle: "Lo que nuestros clientes dicen sobre nuestros servicios",
      testimonials: [
        {
          name: "María González",
          position: "CEO, TiendaOnlineMX",
          content: "BioMey transformó completamente nuestra presencia digital. Después de su desarrollo web, nuestras ventas aumentaron un 150% en solo tres meses. El equipo fue profesional y cumplió todos los plazos.",
          rating: 5,
          project: "E-commerce Personalizado"
        },
        {
          name: "Carlos Rodríguez",
          position: "Director de TI, FinSeguro",
          content: "La implementación de seguridad que realizó BioMey para nuestra plataforma bancaria fue excepcional. Identificaron vulnerabilidades que otros no habían detectado y solucionaron todos los problemas.",
          rating: 5,
          project: "Auditoría de Seguridad"
        },
        {
          name: "Ana Martínez",
          position: "Fundadora, EduTech Innovations",
          content: "Trabajamos con BioMey para desarrollar nuestra plataforma de aprendizaje. Su atención al detalle y comprensión de nuestras necesidades superó todas nuestras expectativas. ¡Altamente recomendados!",
          rating: 5,
          project: "Plataforma Educativa"
        },
        {
          name: "Javier López",
          position: "Gerente, Restaurante La Tradición",
          content: "Necesitábamos una página web que mostrara nuestro menú y permitiera reservas en línea. BioMey creó exactamente lo que necesitábamos con un diseño elegante y fácil de usar.",
          rating: 4,
          project: "Sitio Web con Sistema de Reservas"
        },
        {
          name: "Laura Sánchez",
          position: "Directora, Clínica Dental Sonrisa",
          content: "El equipo de BioMey desarrolló nuestro sistema de gestión de citas y ha simplificado enormemente nuestro flujo de trabajo. La capacitación que proporcionaron fue excelente.",
          rating: 5,
          project: "Sistema de Gestión de Citas"
        }
      ]
    },
    en: {
      title: "Client Testimonials",
      subtitle: "What our clients say about our services",
      testimonials: [
        {
          name: "Maria Gonzalez",
          position: "CEO, TiendaOnlineMX",
          content: "BioMey completely transformed our digital presence. After their web development, our sales increased by 150% in just three months. The team was professional and met all deadlines.",
          rating: 5,
          project: "Custom E-commerce"
        },
        {
          name: "Carlos Rodriguez",
          position: "IT Director, FinSeguro",
          content: "The security implementation that BioMey performed for our banking platform was exceptional. They identified vulnerabilities that others had missed and fixed all issues.",
          rating: 5,
          project: "Security Audit"
        },
        {
          name: "Ana Martinez",
          position: "Founder, EduTech Innovations",
          content: "We worked with BioMey to develop our learning platform. Their attention to detail and understanding of our needs exceeded all our expectations. Highly recommended!",
          rating: 5,
          project: "Educational Platform"
        },
        {
          name: "Javier Lopez",
          position: "Manager, La Tradición Restaurant",
          content: "We needed a website that would display our menu and allow online reservations. BioMey created exactly what we needed with an elegant and easy-to-use design.",
          rating: 4,
          project: "Website with Reservation System"
        },
        {
          name: "Laura Sanchez",
          position: "Director, Sonrisa Dental Clinic",
          content: "The BioMey team developed our appointment management system and has greatly simplified our workflow. The training they provided was excellent.",
          rating: 5,
          project: "Appointment Management System"
        }
      ]
    }
  };

  const t = translations[language];
  
  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => 
          prevIndex === t.testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, t.testimonials.length]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prevIndex) => 
      prevIndex === t.testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? t.testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const goToTestimonial = (index) => {
    setIsAutoPlaying(false);
    setActiveIndex(index);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 sm:w-5 sm:h-5 ${
          index < rating 
            ? 'text-yellow-400' 
            : 'text-gray-300 dark:text-gray-600'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonios" className="py-16 sm:py-20 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-black dark:bg-white rounded-2xl mb-6">
            <svg className="w-8 h-8 text-white dark:text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14 9q3 0 3 3v7a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-7q0-3 3-3h1V6a3 3 0 0 1 6 0v3h-2V6a1 1 0 0 0-2 0v3h1z"/>
            </svg>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
            {t.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-300 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Main Testimonial Showcase */}
        <div className="relative mb-16 sm:mb-20">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent dark:from-white/5 rounded-3xl"></div>
          
          {/* Quote Icon */}
          <div className="absolute -top-6 left-6 sm:left-8 w-12 h-12 sm:w-16 sm:h-16 bg-black dark:bg-white rounded-full flex items-center justify-center shadow-lg z-10">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white dark:text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z"/>
            </svg>
          </div>

          {/* Main Card */}
          <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 p-6 sm:p-8 lg:p-12 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5 dark:opacity-10">
              <div className="w-full h-full bg-black dark:bg-white transform rotate-12 rounded-2xl"></div>
            </div>

            <div className="relative flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
              {/* Client Avatar */}
              <div className="flex-shrink-0 mx-auto lg:mx-0">
                <div className="relative">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-black to-gray-700 dark:from-white dark:to-gray-300 rounded-2xl flex items-center justify-center text-white dark:text-black text-2xl sm:text-3xl lg:text-4xl font-bold shadow-xl transform rotate-3">
                    {t.testimonials[activeIndex].name.charAt(0)}
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Testimonial Content */}
              <div className="flex-1 text-center lg:text-left">
                {/* Rating */}
                <div className="flex justify-center lg:justify-start items-center gap-2 mb-6">
                  <div className="flex">
                    {renderStars(t.testimonials[activeIndex].rating)}
                  </div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400 ml-2">
                    {t.testimonials[activeIndex].rating}.0
                  </span>
                </div>
                
                {/* Quote */}
                <blockquote className="text-xl sm:text-2xl lg:text-3xl text-gray-800 dark:text-gray-100 font-light leading-relaxed mb-8 sm:mb-10">
                  "{t.testimonials[activeIndex].content}"
                </blockquote>
                
                {/* Client Info */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6 sm:pt-8">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-1">
                        {t.testimonials[activeIndex].name}
                      </h3>
                      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-3 sm:mb-0">
                        {t.testimonials[activeIndex].position}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium rounded-full">
                        {t.testimonials[activeIndex].project}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation and Indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mb-16">
          {/* Navigation Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={prevTestimonial}
              className="group w-12 h-12 sm:w-14 sm:h-14 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-black dark:hover:bg-white"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-400 group-hover:text-white dark:group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextTestimonial}
              className="group w-12 h-12 sm:w-14 sm:h-14 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-black dark:hover:bg-white"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-400 group-hover:text-white dark:group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Indicators */}
          <div className="flex items-center gap-3">
            {t.testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === activeIndex 
                    ? 'w-8 h-3 bg-black dark:bg-white' 
                    : 'w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play Toggle */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              isAutoPlaying 
                ? 'bg-black dark:bg-white text-white dark:text-black' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              {isAutoPlaying ? (
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              )}
            </svg>
            <span className="hidden sm:inline">
              {isAutoPlaying ? 'Pause' : 'Play'}
            </span>
          </button>
        </div>

        {/* Additional Testimonials Grid (Desktop) */}
        <div className="hidden lg:grid grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {t.testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`group bg-white dark:bg-gray-800 rounded-2xl p-6 border transition-all duration-500 cursor-pointer hover:shadow-xl hover:-translate-y-2 ${
                index === activeIndex 
                  ? 'border-black dark:border-white shadow-2xl scale-105 bg-gradient-to-br from-gray-50 to-white dark:from-gray-750 dark:to-gray-800' 
                  : 'border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500'
              }`}
              onClick={() => goToTestimonial(index)}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-black to-gray-700 dark:from-white dark:to-gray-300 rounded-xl flex items-center justify-center text-white dark:text-black font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {renderStars(testimonial.rating)}
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {testimonial.rating}.0
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3 leading-relaxed mb-4">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t border-gray-100 dark:border-gray-700 pt-3">
                    <h4 className="text-sm font-semibold text-black dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                      {testimonial.position}
                    </p>
                    <span className="inline-block text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                      {testimonial.project}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;