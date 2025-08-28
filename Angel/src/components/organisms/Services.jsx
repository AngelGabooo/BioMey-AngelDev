// src/components/organisms/Services/Services.jsx
const Services = () => {
  const services = [
    {
      image: (
        <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="20" width="80" height="60" rx="5" className="fill-blue-600/20 stroke-blue-600 dark:fill-blue-400/20 dark:stroke-blue-400" strokeWidth="2"/>
          <rect x="20" y="30" width="25" height="15" rx="2" className="fill-blue-600 dark:fill-blue-500"/>
          <rect x="55" y="30" width="25" height="15" rx="2" className="fill-purple-600 dark:fill-purple-500"/>
          <rect x="20" y="55" width="60" height="10" rx="2" className="fill-blue-400 dark:fill-blue-300"/>
        </svg>
      ),
      title: "Desarrollo Frontend",
      description: "Aplicaciones React modernas con interfaces responsivas y optimizadas para SEO",
      features: ["React.js", "Tailwind CSS", "Responsive Design", "SEO Optimization"]
    },
    {
      image: (
        <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="20" width="60" height="60" rx="5" className="fill-green-600/20 stroke-green-600 dark:fill-green-400/20 dark:stroke-green-400" strokeWidth="2"/>
          <circle cx="35" cy="35" r="8" className="fill-green-600 dark:fill-green-500"/>
          <circle cx="65" cy="35" r="8" className="fill-green-500 dark:fill-green-400"/>
          <circle cx="50" cy="65" r="8" className="fill-green-400 dark:fill-green-300"/>
          <path d="M35 35L50 65M50 65L65 35" className="stroke-green-600 dark:stroke-green-400" strokeWidth="2"/>
        </svg>
      ),
      title: "Desarrollo Backend",
      description: "APIs robustas y escalables con las mejores prácticas de seguridad",
      features: ["Node.js", "Python", "Bases de Datos", "APIs REST"]
    },
    {
      image: (
        <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="15" y="25" width="70" height="50" rx="5" className="fill-pink-600/20 stroke-pink-600 dark:fill-pink-400/20 dark:stroke-pink-400" strokeWidth="2"/>
          <circle cx="35" cy="40" r="5" className="fill-pink-600 dark:fill-pink-500"/>
          <circle cx="50" cy="40" r="5" className="fill-pink-500 dark:fill-pink-400"/>
          <circle cx="65" cy="40" r="5" className="fill-pink-400 dark:fill-pink-300"/>
          <rect x="30" y="55" width="40" height="5" rx="2" className="fill-pink-300 dark:fill-pink-200"/>
          <rect x="35" y="65" width="30" height="5" rx="2" className="fill-pink-200 dark:fill-pink-100"/>
        </svg>
      ),
      title: "Diseño UI/UX",
      description: "Experiencias de usuario intuitivas que convierten visitantes en clientes",
      features: ["Figma", "Prototipado", "Design Systems", "User Testing"]
    },
    {
      image: (
        <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="15" width="60" height="70" rx="10" className="fill-yellow-600/20 stroke-yellow-600 dark:fill-yellow-400/20 dark:stroke-yellow-400" strokeWidth="2"/>
          <rect x="30" y="25" width="40" height="30" rx="5" className="fill-yellow-500 dark:fill-yellow-400"/>
          <circle cx="50" cy="65" r="8" className="fill-yellow-600 dark:fill-yellow-500"/>
        </svg>
      ),
      title: "Apps Móviles",
      description: "Aplicaciones nativas e híbridas para iOS y Android",
      features: ["React Native", "Flutter", "App Store", "Google Play"]
    },
    {
      image: (
        <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 20L80 40V80H20V40L50 20Z" className="fill-orange-600/20 stroke-orange-600 dark:fill-orange-400/20 dark:stroke-orange-400" strokeWidth="2"/>
          <circle cx="50" cy="50" r="15" className="fill-orange-500 dark:fill-orange-400"/>
          <path d="M50 35V50L60 60" className="stroke-white dark:stroke-gray-800" strokeWidth="2"/>
        </svg>
      ),
      title: "Cloud & DevOps",
      description: "Infraestructura escalable y pipelines de despliegue automatizados",
      features: ["AWS", "Docker", "CI/CD", "Serverless"]
    },
    {
      image: (
        <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="20" width="60" height="60" rx="5" className="fill-red-600/20 stroke-red-600 dark:fill-red-400/20 dark:stroke-red-400" strokeWidth="2"/>
          <rect x="30" y="30" width="15" height="15" rx="2" className="fill-red-500 dark:fill-red-400"/>
          <rect x="55" y="30" width="15" height="15" rx="2" className="fill-red-400 dark:fill-red-300"/>
          <rect x="30" y="55" width="40" height="10" rx="2" className="fill-red-300 dark:fill-red-200"/>
          <circle cx="75" cy="75" r="5" className="fill-red-600 dark:fill-red-500"/>
        </svg>
      ),
      title: "E-commerce",
      description: "Tiendas online optimizadas para conversión y experiencia móvil",
      features: ["Shopify", "WooCommerce", "Payment Gateways", "Inventory Management"]
    }
  ]

  return (
    <section id="servicios" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 transition-colors duration-300">
            Servicios Profesionales
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Soluciones digitales completas que transforman ideas en experiencias web excepcionales
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-blue-500/10">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white dark:bg-gray-800 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                  {service.image}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-center transition-colors duration-300">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
                    <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3 flex-shrink-0 transition-colors duration-300"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services