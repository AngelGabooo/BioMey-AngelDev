// src/components/organisms/Hero/Hero.jsx
const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 pt-20 lg:pt-0 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-6 leading-tight transition-colors duration-300">
              Desarrollo Web 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                {" "}de Alto Impacto
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed transition-colors duration-300">
              Creo soluciones digitales modernas y escalables que impulsan 
              el crecimiento de tu negocio. Desde diseño hasta implementación, 
              cada proyecto es una oportunidad para superar expectativas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#contacto" 
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg text-center"
              >
                Iniciar Proyecto
              </a>
              <a 
                href="#portafolio" 
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-full font-medium hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 text-center"
              >
                Ver Trabajos
              </a>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto bg-gradient-to-br from-blue-600/20 to-purple-600/20 dark:from-blue-400/20 dark:to-purple-400/20 rounded-3xl backdrop-blur-sm border border-white/30 dark:border-white/10 shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 lg:w-32 lg:h-32 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl mb-6">
                    <span className="text-white text-4xl lg:text-5xl font-bold">AG</span>
                  </div>
                  <div className="animate-pulse">
                    <div className="w-32 h-4 bg-blue-400/30 dark:bg-blue-600/30 rounded mx-auto mb-2"></div>
                    <div className="w-24 h-4 bg-purple-400/30 dark:bg-purple-600/30 rounded mx-auto"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400/20 dark:bg-yellow-600/20 rounded-full backdrop-blur-sm border border-yellow-400/30 dark:border-yellow-600/30 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400/20 dark:bg-green-600/20 rounded-full backdrop-blur-sm border border-green-400/30 dark:border-green-600/30 animate-bounce delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero