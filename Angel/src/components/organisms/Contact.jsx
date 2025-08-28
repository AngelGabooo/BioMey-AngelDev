// src/components/organisms/Contact/Contact.jsx
const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 transition-colors duration-300">
            Hablemos de tu proyecto
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            ¿Tienes una idea? Transformémosla en una solución digital extraordinaria juntos.
          </p>
        </div>

        <form className="max-w-2xl mx-auto bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium transition-colors duration-300">
                Nombre completo
              </label>
              <input 
                type="text" 
                placeholder="Tu nombre" 
                className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 transition-colors duration-300"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium transition-colors duration-300">
                Correo electrónico
              </label>
              <input 
                type="email" 
                placeholder="tu@email.com" 
                className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 transition-colors duration-300"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium transition-colors duration-300">
              Asunto
            </label>
            <input 
              type="text" 
              placeholder="¿En qué puedo ayudarte?" 
              className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 transition-colors duration-300"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium transition-colors duration-300">
              Mensaje
            </label>
            <textarea 
              placeholder="Cuéntame todos los detalles de tu proyecto..." 
              rows="6"
              className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 transition-colors duration-300"
              required
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Enviar mensaje
          </button>
        </form>

        {/* Información de contacto adicional */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-2xl shadow-md">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📧</span>
            </div>
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2 transition-colors duration-300">Email</h3>
            <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">contacto@agdev.com</p>
          </div>

          <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-2xl shadow-md">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2 transition-colors duration-300">Teléfono</h3>
            <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">+1 (234) 567-8900</p>
          </div>

          <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-2xl shadow-md">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📍</span>
            </div>
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2 transition-colors duration-300">Ubicación</h3>
            <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Ciudad, País</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact