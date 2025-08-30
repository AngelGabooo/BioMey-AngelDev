// src/components/organisms/Footer/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-black dark:bg-white rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105">
                <span className="text-white dark:text-black font-bold text-lg">AG</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-800 dark:text-white font-bold text-xl leading-none">Angel Dev</span>
                <span className="text-gray-600 dark:text-gray-400 text-sm">Web Developer</span>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Creando soluciones digitales innovadoras que transforman negocios y experiencias.
            </p>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li><a href="#servicios" className="flex items-center hover:text-black dark:hover:text-white transition-colors duration-300">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
                Desarrollo Web
              </a></li>
              <li><a href="#servicios" className="flex items-center hover:text-black dark:hover:text-white transition-colors duration-300">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                E-commerce
              </a></li>
              <li><a href="#servicios" className="flex items-center hover:text-black dark:hover:text-white transition-colors duration-300">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                </svg>
                Diseño UI/UX
              </a></li>
              <li><a href="#servicios" className="flex items-center hover:text-black dark:hover:text-white transition-colors duration-300">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
                Apps Móviles
              </a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Contacto</h4>
            <div className="space-y-3 text-gray-600 dark:text-gray-400">
              <a href="mailto:a20624646@gmail.com" className="flex items-center hover:text-black dark:hover:text-white transition-colors duration-300 group">
                <span className="mr-3 w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-700">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </span>
                a20624646@gmail.com
              </a>
              <a href="https://wa.me/528144384806" className="flex items-center hover:text-black dark:hover:text-white transition-colors duration-300 group">
                <span className="mr-3 w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-700">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </span>
                +52 814 438 4806
              </a>
              <div className="flex items-center group">
                <span className="mr-3 w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-700">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </span>
                <span className="group-hover:text-black dark:group-hover:text-white transition-colors duration-300">Monterrey, México</span>
              </div>
            </div>
          </div>
          
          {/* Social */}
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Sígueme</h4>
            <div className="flex space-x-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 dark:bg-gray-800 hover:bg-black dark:hover:bg-white rounded-xl flex items-center justify-center transition-all duration-300 group hover:scale-110 hover:shadow-lg"
              >
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-white dark:group-hover:text-black transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 3.667h-3.533v7.98H9.101z"/>
                </svg>
              </a>
              
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 dark:bg-gray-800 hover:bg-black dark:hover:bg-white rounded-xl flex items-center justify-center transition-all duration-300 group hover:scale-110 hover:shadow-lg"
              >
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-white dark:group-hover:text-black transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              
              <a 
                href="https://wa.me/528144384806" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 dark:bg-gray-800 hover:bg-black dark:hover:bg-white rounded-xl flex items-center justify-center transition-all duration-300 group hover:scale-110 hover:shadow-lg"
              >
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-white dark:group-hover:text-black transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.49"/>
                </svg>
              </a>
              
              <a 
                href="mailto:a20624646@gmail.com" 
                className="w-10 h-10 bg-gray-100 dark:bg-gray-800 hover:bg-black dark:hover:bg-white rounded-xl flex items-center justify-center transition-all duration-300 group hover:scale-110 hover:shadow-lg"
              >
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-white dark:group-hover:text-black transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </a>
            </div>
            
            {/* WhatsApp direct button */}
            <div className="mt-6">
              <a 
                href="https://wa.me/528144384806" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 group"
              >
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.49"/>
                </svg>
                <span>Contactar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © 2024 Angel Dev. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer