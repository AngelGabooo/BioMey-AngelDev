// src/components/organisms/WorkProcess.jsx
import { useLanguage } from '../contexts/LanguageContext';

const WorkProcess = () => {
  const { language } = useLanguage();

  const translations = {
    es: {
      title: "Nuestro Proceso de Trabajo",
      subtitle: "Cómo transformamos tu idea en una solución digital exitosa",
      steps: [
        {
          number: "01",
          title: "Consulta Inicial",
          description: "Comenzamos con una reunión detallada para comprender tus objetivos, audiencia objetivo y requisitos específicos. Definimos el alcance del proyecto y establecemos expectativas claras.",
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          ),
          details: [
            "Análisis de requisitos",
            "Definición de objetivos",
            "Planificación inicial",
            "Estimación de tiempo y costo"
          ]
        },
        {
          number: "02",
          title: "Diseño y Planificación",
          description: "Creamos wireframes, prototipos interactivos y diseños de UI/UX que se alinean con tu visión. Aprobamos cada etapa antes de avanzar al desarrollo.",
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
            </svg>
          ),
          details: [
            "Wireframes y prototipos",
            "Diseño de interfaz de usuario",
            "Experiencia de usuario (UX)",
            "Plan de desarrollo"
          ]
        },
        {
          number: "03",
          title: "Desarrollo",
          description: "Implementamos tu solución usando tecnologías modernas y mejores prácticas. Desarrollamos con código limpio, escalable y mantenible, con pruebas continuas.",
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          ),
          details: [
            "Desarrollo frontend y backend",
            "Implementación de funcionalidades",
            "Pruebas de calidad",
            "Optimización de rendimiento"
          ]
        },
        {
          number: "04",
          title: "Revisión y Pruebas",
          description: "Realizamos pruebas exhaustivas de funcionalidad, usabilidad, compatibilidad y rendimiento. Corregimos cualquier problema y preparamos la solución para su lanzamiento.",
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          details: [
            "Pruebas de funcionalidad",
            "Pruebas de usabilidad",
            "Pruebas de compatibilidad",
            "Optimización final"
          ]
        },
        {
          number: "05",
          title: "Entrega y Lanzamiento",
          description: "Implementamos tu solución en el entorno de producción, configuramos dominios, hosting y realizamos los últimos ajustes. Tu proyecto está listo para ser presentado al mundo.",
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          ),
          details: [
            "Implementación en producción",
            "Configuración de hosting",
            "Optimización para SEO",
            "Entrega final"
          ]
        },
        {
          number: "06",
          title: "Soporte Continuo",
          description: "Ofrecemos mantenimiento continuo, actualizaciones de seguridad y soporte técnico. Estamos aquí para asegurar que tu solución siga funcionando perfectamente.",
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ),
          details: [
            "Mantenimiento regular",
            "Actualizaciones de seguridad",
            "Soporte técnico",
            "Mejoras continuas"
          ]
        }
      ],
      ctaTitle: "¿Listo para comenzar tu proyecto?",
      ctaDescription: "Sigue nuestro proceso probado para obtener resultados excepcionales",
      ctaButton: "Iniciar proyecto"
    },
    en: {
      title: "Our Work Process",
      subtitle: "How we transform your idea into a successful digital solution",
      steps: [
        {
          number: "01",
          title: "Initial Consultation",
          description: "We start with a detailed meeting to understand your goals, target audience, and specific requirements. We define the project scope and set clear expectations.",
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          ),
          details: [
            "Requirements analysis",
            "Goal definition",
            "Initial planning",
            "Time and cost estimation"
          ]
        },
        {
          number: "02",
          title: "Design and Planning",
          description: "We create wireframes, interactive prototypes, and UI/UX designs that align with your vision. We approve each stage before moving to development.",
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
            </svg>
          ),
          details: [
            "Wireframes and prototypes",
            "User interface design",
            "User experience (UX)",
            "Development plan"
          ]
        },
        {
          number: "03",
          title: "Development",
          description: "We implement your solution using modern technologies and best practices. We develop with clean, scalable, and maintainable code, with continuous testing.",
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          ),
          details: [
            "Frontend and backend development",
            "Feature implementation",
            "Quality testing",
            "Performance optimization"
          ]
        },
        {
          number: "04",
          title: "Review and Testing",
          description: "We conduct exhaustive functionality, usability, compatibility, and performance testing. We fix any issues and prepare the solution for launch.",
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          details: [
            "Functionality testing",
            "Usability testing",
            "Compatibility testing",
            "Final optimization"
          ]
        },
        {
          number: "05",
          title: "Delivery and Launch",
          description: "We implement your solution in the production environment, set up domains, hosting, and make final adjustments. Your project is ready to be presented to the world.",
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          ),
          details: [
            "Production implementation",
            "Hosting configuration",
            "SEO optimization",
            "Final delivery"
          ]
        },
        {
          number: "06",
          title: "Ongoing Support",
          description: "We offer continuous maintenance, security updates, and technical support. We're here to ensure your solution continues to work perfectly.",
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ),
          details: [
            "Regular maintenance",
            "Security updates",
            "Technical support",
            "Continuous improvements"
          ]
        }
      ],
      ctaTitle: "Ready to start your project?",
      ctaDescription: "Follow our proven process for exceptional results",
      ctaButton: "Start project"
    }
  };

  const t = translations[language];

  return (
    <section id="proceso" className="py-20 sm:py-24 md:py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 opacity-50"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-black/5 dark:bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-black/5 dark:bg-white/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-black/10 dark:bg-white/10 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300 backdrop-blur-sm">
              {language === 'es' ? 'METODOLOGÍA' : 'METHODOLOGY'}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
            {t.title}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
          
          {/* Decorative Line */}
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-black dark:via-white to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Process Steps - New Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {t.steps.map((step, index) => (
              <div 
                key={index} 
                className="group relative"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Connection Line for Desktop */}
                {index < t.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-black/20 via-black/10 to-transparent dark:from-white/20 dark:via-white/10 transform translate-x-4 -z-10"></div>
                )}

                {/* Card */}
                <div className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:transform group-hover:-translate-y-2 group-hover:bg-white dark:group-hover:bg-gray-800">
                  
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-black dark:bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white dark:text-black text-lg font-black">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mb-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-2xl w-fit group-hover:bg-black dark:group-hover:bg-white transition-colors duration-300">
                    <div className="text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-300">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mb-4 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                    {step.description}
                  </p>
                  
                  {/* Details */}
                  <div className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center text-sm text-gray-700 dark:text-gray-400">
                        <div className="w-2 h-2 bg-black dark:bg-white rounded-full mr-3 flex-shrink-0 group-hover:bg-black dark:group-hover:bg-white transition-colors duration-300"></div>
                        <span className="group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-black/20 via-transparent to-black/20 dark:from-white/20 dark:to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="mt-24 sm:mt-32">
          <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 dark:from-gray-100 dark:via-white dark:to-gray-100 rounded-[2rem] sm:rounded-[3rem] p-12 sm:p-16 md:p-20 text-center overflow-hidden">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1),transparent)]"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white dark:text-black mb-6 tracking-tight">
                {t.ctaTitle}
              </h3>
              <p className="text-lg sm:text-xl text-gray-300 dark:text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                {t.ctaDescription}
              </p>
              
              <a
                href="#contacto"
                className="group inline-flex items-center bg-white dark:bg-black text-black dark:text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-900"
              >
                {t.ctaButton}
                <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 dark:bg-black/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-white/10 dark:bg-black/10 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            { number: "50+", label: language === 'es' ? 'Proyectos Completados' : 'Projects Completed' },
            { number: "98%", label: language === 'es' ? 'Clientes Satisfechos' : 'Satisfied Clients' },
            { number: "24/7", label: language === 'es' ? 'Soporte Disponible' : 'Support Available' },
            { number: "100%", label: language === 'es' ? 'Entrega a Tiempo' : 'On-Time Delivery' }
          ].map((stat, index) => (
            <div key={index} className="group text-center p-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-200/30 dark:border-gray-700/30 hover:bg-white dark:hover:bg-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl sm:text-5xl font-black text-black dark:text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-semibold group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;