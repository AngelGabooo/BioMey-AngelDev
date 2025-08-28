// src/components/organisms/Footer/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">AG</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl leading-none">AG Dev</span>
                <span className="text-gray-400 text-sm">Software Solutions</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Creando soluciones digitales que impulsan tu negocio hacia el éxito.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#servicios" className="hover:text-white transition-colors duration-300">Desarrollo Frontend</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors duration-300">Desarrollo Backend</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors duration-300">Diseño UI/UX</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors duration-300">Apps Móviles</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center">
                <span className="mr-2">📧</span>
                email@ejemplo.com
              </p>
              <p className="flex items-center">
                <span className="mr-2">📱</span>
                +1 (234) 567-8900
              </p>
              <p className="flex items-center">
                <span className="mr-2">📍</span>
                Ciudad, País
              </p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Sígueme</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <span className="text-white">📘</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <span className="text-white">📸</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-colors duration-300">
                <span className="text-white">🐦</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-300">
                <span className="text-white">💼</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 AG Dev. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer