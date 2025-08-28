// src/components/organisms/Portfolio/Portfolio.jsx
import { useState, useEffect } from 'react'

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const projects = [
    {
      title: "E-commerce Moda Premium",
      description: "Tienda online de ropa con carrito avanzado, pasarela de pagos y sistema de inventarios",
      category: "E-commerce",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556906781-2f0520405b71?w=500&h=300&fit=crop",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Sistema Gimnasio FitLife",
      description: "Plataforma de gestión de membresías, clases y pagos para centro deportivo",
      category: "SaaS",
      technologies: ["Vue.js", "Laravel", "MySQL", "PWA"],
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=300&fit=crop",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Farmacia Digital SaludPlus",
      description: "App de pedidos de medicamentos con delivery y recordatorio de tomas",
      category: "Salud",
      technologies: ["React Native", "Firebase", "Google Maps API"],
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&h=300&fit=crop",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Portal Dentista SmileCare",
      description: "Sistema de citas online, historial médico y recordatorios automáticos",
      category: "Salud",
      technologies: ["Angular", "Python", "PostgreSQL", "Twilio"],
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500&h=300&fit=crop",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Ferretería ConstruMarket",
      description: "E-commerce de materiales de construcción con cotizador integrado",
      category: "E-commerce",
      technologies: ["Next.js", "Strapi", "PostgreSQL", "WhatsApp API"],
      image: "https://images.unsplash.com/photo-1574359173084-bfcee66c2c2a?w=500&h=300&fit=crop",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Sistema de Eventos TicketMaster",
      description: "Plataforma de venta y gestión de entradas para eventos masivos",
      category: "Ticketing",
      technologies: ["React", "NestJS", "Redis", "QR Generator"],
      image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=500&h=300&fit=crop",
      liveUrl: "#",
      githubUrl: "#"
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === Math.ceil(projects.length / 3) - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.ceil(projects.length / 3) - 1 : prevIndex - 1
    )
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  const visibleProjects = projects.slice(currentIndex * 3, currentIndex * 3 + 3)

  return (
    <section id="portafolio" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 transition-colors duration-300">
            Portafolio de Proyectos
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Descubre las soluciones digitales que he creado para diferentes industrias y negocios
          </p>
        </div>

        {/* Carrusel */}
        <div className="relative">
          {/* Botones de navegación */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 z-10 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            ‹
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 z-10 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            ›
          </button>

          {/* Proyectos visibles */}
          <div className="grid md:grid-cols-3 gap-8">
            {visibleProjects.map((project, index) => (
              <div key={index} className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl dark:hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-2">
                {/* Imagen del proyecto */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Tecnologías */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Botones */}
                  <div className="flex gap-3">
                    <a 
                      href={project.liveUrl}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg text-sm font-medium text-center hover:shadow-lg transition-shadow duration-300"
                    >
                      Ver Demo
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg text-sm font-medium text-center hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                    >
                      Código
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicadores */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(projects.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Categorías */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-8 transition-colors duration-300">
            Industrias que Transformo
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "E-commerce", icon: "🛒", count: "12+ proyectos" },
              { name: "Salud", icon: "🏥", count: "8+ proyectos" },
              { name: "Educación", icon: "🎓", count: "6+ proyectos" },
              { name: "Servicios", icon: "⚡", count: "10+ proyectos" }
            ].map((industry, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl mb-2">{industry.icon}</div>
                <h4 className="font-semibold text-gray-800 dark:text-white transition-colors duration-300">{industry.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">{industry.count}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio