// src/components/organisms/FAQ.jsx
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const FAQ = () => {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const translations = {
    es: {
      title: "Preguntas Frecuentes",
      subtitle: "Respuestas a las dudas más comunes sobre nuestros servicios",
      categories: {
        general: "General",
        delivery: "Tiempos de Entrega",
        payment: "Formas de Pago",
        technical: "Aspectos Técnicos",
        support: "Soporte y Mantenimiento"
      },
      questions: [
        {
          question: "¿Qué servicios de desarrollo web ofrecen?",
          answer: "Ofrecemos desarrollo web completo que incluye: diseño responsive, desarrollo frontend y backend, comercio electrónico, aplicaciones web progresivas (PWA), integración de APIs, y soluciones personalizadas según tus necesidades específicas.",
          category: "general"
        },
        {
          question: "¿Cuál es el tiempo de entrega típico para un sitio web?",
          answer: "El tiempo de entrega varía según la complejidad del proyecto. Un sitio web básico puede tomar de 2-3 semanas, uno corporativo de 4-6 semanas, y un e-commerce complejo de 8-12 semanas. Te proporcionaremos un cronograma detallado al inicio del proyecto.",
          category: "delivery"
        },
        {
          question: "¿Qué métodos de pago aceptan?",
          answer: "Aceptamos transferencias bancarias, tarjetas de crédito/débito, PayPal y criptomonedas. Ofrecemos planes de pago flexibles: 50% al inicio y 50% al final, o planes fraccionados en 3-4 pagos para proyectos más grandes.",
          category: "payment"
        },
        {
          question: "¿Incluyen hosting y dominio en sus servicios?",
          answer: "Sí, ofrecemos paquetes completos que incluyen registro de dominio, hosting optimizado, certificados SSL y correos corporativos. También podemos trabajar con tu hosting existente si lo prefieres.",
          category: "technical"
        },
        {
          question: "¿Proporcionan mantenimiento después del lanzamiento?",
          answer: "Sí, ofrecemos planes de mantenimiento que incluyen actualizaciones de seguridad, backups regulares, monitoreo de rendimiento y soporte técnico. Tenemos planes mensuales, trimestrales y anuales adaptados a tus necesidades.",
          category: "support"
        },
        {
          question: "¿Trabajan con frameworks específicos?",
          answer: "Trabajamos con una variedad de tecnologías modernas como React, Next.js, Vue.js, Node.js, Laravel, WordPress y más. Seleccionamos la tecnología más adecuada para cada proyecto basándonos en sus requisitos específicos.",
          category: "technical"
        },
        {
          question: "¿Qué incluye el proceso de diseño?",
          answer: "Nuestro proceso de diseño incluye: investigación y análisis, wireframes, prototipos interactivos, diseño de UI/UX, revisiones iterativas y aprobación final. Te involucramos en cada etapa para asegurar que el resultado final supere tus expectativas.",
          category: "general"
        },
        {
          question: "¿Ofrecen servicios de SEO?",
          answer: "Sí, implementamos prácticas de SEO desde la fase de desarrollo para asegurar que tu sitio web esté optimizado para motores de búsqueda. También ofrecemos servicios de SEO continuo para mejorar tu posicionamiento orgánico.",
          category: "technical"
        },
        {
          question: "¿Cómo manejan la seguridad en los proyectos?",
          answer: "Implementamos múltiples capas de seguridad: certificados SSL, sanitización de datos, protección contra XSS y CSRF, actualizaciones regulares, y auditorías de seguridad. Para proyectos sensibles, realizamos pruebas de penetración adicionales.",
          category: "technical"
        },
        {
          question: "¿Pueden integrar mi sitio web con redes sociales?",
          answer: "Sí, integramos plataformas sociales para compartir contenido, feeds en tiempo real, inicio de sesión social, y sincronización de productos/catálogos para e-commerce. Creamos estrategias de social media integradas con tu presencia web.",
          category: "technical"
        },
        {
          question: "¿Qué sucede si necesito cambios después de que el proyecto esté completado?",
          answer: "Ofrecemos un período de grace de 30 días para correcciones menores después del lanzamiento. Para cambios adicionales, podemos trabajar por horas o crear un plan de mantenimiento continuo según tus necesidades.",
          category: "support"
        },
        {
          question: "¿Proveen entrenamiento para administrar el sitio web?",
          answer: "Sí, proporcionamos manuales personalizados y sesiones de entrenamiento para que tu equipo pueda administrar el contenido del sitio web. Para CMS como WordPress, creamos videos tutoriales específicos para tu sitio.",
          category: "support"
        }
      ]
    },
    en: {
      title: "Frequently Asked Questions",
      subtitle: "Answers to the most common questions about our services",
      categories: {
        general: "General",
        delivery: "Delivery Times",
        payment: "Payment Methods",
        technical: "Technical Aspects",
        support: "Support and Maintenance"
      },
      questions: [
        {
          question: "What web development services do you offer?",
          answer: "We offer complete web development including: responsive design, frontend and backend development, e-commerce, progressive web apps (PWA), API integration, and custom solutions tailored to your specific needs.",
          category: "general"
        },
        {
          question: "What is the typical delivery time for a website?",
          answer: "Delivery time varies based on project complexity. A basic website can take 2-3 weeks, a corporate site 4-6 weeks, and a complex e-commerce site 8-12 weeks. We'll provide a detailed timeline at the start of the project.",
          category: "delivery"
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept bank transfers, credit/debit cards, PayPal, and cryptocurrencies. We offer flexible payment plans: 50% upfront and 50% upon completion, or installment plans with 3-4 payments for larger projects.",
          category: "payment"
        },
        {
          question: "Do you include hosting and domain in your services?",
          answer: "Yes, we offer complete packages that include domain registration, optimized hosting, SSL certificates, and corporate emails. We can also work with your existing hosting if preferred.",
          category: "technical"
        },
        {
          question: "Do you provide maintenance after launch?",
          answer: "Yes, we offer maintenance plans that include security updates, regular backups, performance monitoring, and technical support. We have monthly, quarterly, and annual plans tailored to your needs.",
          category: "support"
        },
        {
          question: "Do you work with specific frameworks?",
          answer: "We work with a variety of modern technologies like React, Next.js, Vue.js, Node.js, Laravel, WordPress, and more. We select the most appropriate technology for each project based on its specific requirements.",
          category: "technical"
        },
        {
          question: "What does the design process include?",
          answer: "Our design process includes: research and analysis, wireframes, interactive prototypes, UI/UX design, iterative revisions, and final approval. We involve you in every stage to ensure the final result exceeds your expectations.",
          category: "general"
        },
        {
          question: "Do you offer SEO services?",
          answer: "Yes, we implement SEO practices from the development phase to ensure your website is optimized for search engines. We also offer ongoing SEO services to improve your organic ranking.",
          category: "technical"
        },
        {
          question: "How do you handle security in projects?",
          answer: "We implement multiple security layers: SSL certificates, data sanitization, protection against XSS and CSRF, regular updates, and security audits. For sensitive projects, we conduct additional penetration testing.",
          category: "technical"
        },
        {
          question: "Can you integrate my website with social media?",
          answer: "Yes, we integrate social platforms for content sharing, real-time feeds, social login, and product/catalog synchronization for e-commerce. We create integrated social media strategies with your web presence.",
          category: "technical"
        },
        {
          question: "What if I need changes after the project is completed?",
          answer: "We offer a 30-day grace period for minor corrections after launch. For additional changes, we can work on an hourly basis or create an ongoing maintenance plan according to your needs.",
          category: "support"
        },
        {
          question: "Do you provide training to manage the website?",
          answer: "Yes, we provide customized manuals and training sessions so your team can manage the website content. For CMS like WordPress, we create specific video tutorials for your site.",
          category: "support"
        }
      ]
    }
  };

  const t = translations[language];
  
  // Agrupar preguntas por categoría
  const questionsByCategory = t.questions.reduce((acc, question) => {
    if (!acc[question.category]) {
      acc[question.category] = [];
    }
    acc[question.category].push(question);
    return acc;
  }, {});

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 sm:mb-6">
            {t.title}
          </h2>
          <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-black dark:bg-white mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* FAQ Content */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar de categorías */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                {language === 'es' ? 'Categorías' : 'Categories'}
              </h3>
              <div className="space-y-2">
                {Object.entries(t.categories).map(([key, name]) => (
                  <button
                    key={key}
                    onClick={() => {
                      const element = document.getElementById(`category-${key}`);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white text-gray-600 dark:text-gray-400"
                  >
                    {name}
                  </button>
                ))}
              </div>
              
              {/* Información de contacto */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                  {language === 'es' ? '¿No encuentras tu respuesta?' : "Can't find your answer?"}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
                  {language === 'es' 
                    ? 'Contáctanos directamente y te responderemos a la brevedad.' 
                    : 'Contact us directly and we will respond to you shortly.'}
                </p>
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center w-full bg-black dark:bg-white text-white dark:text-black px-4 py-3 rounded-xl text-sm font-medium hover:shadow-lg transition-all duration-300"
                >
                  {language === 'es' ? 'Contactar ahora' : 'Contact now'}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Lista de preguntas */}
          <div className="lg:col-span-3">
            {Object.entries(t.categories).map(([categoryKey, categoryName]) => (
              <div key={categoryKey} id={`category-${categoryKey}`} className="mb-12 scroll-mt-24">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <span className="w-3 h-3 bg-black dark:bg-white rounded-full mr-3"></span>
                  {categoryName}
                </h3>
                
                <div className="space-y-4">
                  {questionsByCategory[categoryKey]?.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-lg"
                    >
                      <button
                        className="flex items-center justify-between w-full px-6 py-5 text-left focus:outline-none"
                        onClick={() => toggleAccordion(`${categoryKey}-${index}`)}
                        aria-expanded={activeIndex === `${categoryKey}-${index}`}
                      >
                        <span className="text-lg font-medium text-gray-900 dark:text-white pr-4">
                          {item.question}
                        </span>
                        <svg
                          className={`w-5 h-5 text-gray-500 dark:text-gray-400 transform transition-transform duration-300 ${
                            activeIndex === `${categoryKey}-${index}` ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      <div
                        className={`px-6 pb-5 pt-0 overflow-hidden transition-all duration-300 ${
                          activeIndex === `${categoryKey}-${index}` ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="prose prose-gray dark:prose-invert max-w-none">
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-black dark:bg-white text-white dark:text-black rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4">
                {language === 'es' 
                  ? '¿Listo para comenzar tu proyecto?' 
                  : 'Ready to start your project?'}
              </h3>
              <p className="text-gray-300 dark:text-gray-700 mb-6">
                {language === 'es'
                  ? 'Contáctanos hoy mismo para una consulta gratuita y un presupuesto personalizado.'
                  : 'Contact us today for a free consultation and a personalized quote.'}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contacto"
                  className="bg-white dark:bg-black text-black dark:text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300"
                >
                  {language === 'es' ? 'Solicitar cotización' : 'Request a quote'}
                </a>
                <a
                  href="#servicios"
                  className="border-2 border-white dark:border-black text-white dark:text-black px-6 py-3 rounded-xl font-medium hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white transition-all duration-300"
                >
                  {language === 'es' ? 'Ver servicios' : 'View services'}
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 dark:bg-black/10 p-4 rounded-xl text-center">
                <div className="text-2xl sm:text-3xl font-black mb-1">24-72h</div>
                <div className="text-sm opacity-80">
                  {language === 'es' ? 'Respuesta rápida' : 'Fast response'}
                </div>
              </div>
              <div className="bg-white/10 dark:bg-black/10 p-4 rounded-xl text-center">
                <div className="text-2xl sm:text-3xl font-black mb-1">100%</div>
                <div className="text-sm opacity-80">
                  {language === 'es' ? 'Satisfacción' : 'Satisfaction'}
                </div>
              </div>
              <div className="bg-white/10 dark:bg-black/10 p-4 rounded-xl text-center">
                <div className="text-2xl sm:text-3xl font-black mb-1">50+</div>
                <div className="text-sm opacity-80">
                  {language === 'es' ? 'Proyectos' : 'Projects'}
                </div>
              </div>
              <div className="bg-white/10 dark:bg-black/10 p-4 rounded-xl text-center">
                <div className="text-2xl sm:text-3xl font-black mb-1">15+</div>
                <div className="text-sm opacity-80">
                  {language === 'es' ? 'Clientes felices' : 'Happy clients'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;