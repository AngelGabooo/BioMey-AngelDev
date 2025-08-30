import { useEffect, useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Importar Bootstrap JS
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Crear mensaje para WhatsApp
    const whatsappMessage = `
*Nuevo mensaje de contacto*%0A%0A
*Nombre:* ${formData.name}%0A
*Email:* ${formData.email}%0A
*Asunto:* ${formData.subject}%0A
*Mensaje:* ${formData.message}%0A%0A
*Enviado desde:* Portfolio Angel Dev
    `.trim();

    // Número de WhatsApp (cambia por tu número)
    const phoneNumber = '528144384806';
    
    // Crear URL de WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    
    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Resetear formulario después de un breve delay
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contacto" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Sophisticated geometric background patterns */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-10 w-80 h-80 border-2 border-black rounded-full transform rotate-12"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 border-2 border-black transform rotate-45"></div>
        <div className="absolute top-1/3 left-1/3 w-24 h-24 bg-black transform rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 border-2 border-black transform -rotate-12"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section - More refined */}
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-black mb-6 tracking-tight leading-none">
              Let's Connect
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-black"></div>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed mt-8">
            ¿Tienes una visión extraordinaria? Transformémosla juntos en una realidad digital que inspire.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-0 bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100">
            
            {/* Contact Info Side - Enhanced design */}
            <div className="lg:col-span-2 bg-black text-white p-14 relative">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-5 rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-5 rounded-tr-full"></div>
              <div className="absolute top-1/2 left-0 w-2 h-20 bg-white opacity-20"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">Información de contacto</h3>
                <p className="text-gray-300 mb-12 text-lg font-light leading-relaxed">
                  Completa el formulario y te contactaré por WhatsApp en menos de 24 horas. 
                  ¡Hagamos realidad tu proyecto digital!
                </p>
                
                <div className="space-y-10">
                  {/* Email */}
                  <div className="flex items-start group cursor-pointer">
                    <div className="bg-white/10 p-4 rounded-2xl mr-6 group-hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="group-hover:translate-x-1 transition-transform duration-300">
                      <p className="font-semibold text-lg mb-2">Email</p>
                      <p className="text-gray-300 text-lg font-light">a20624646@gmail.com</p>
                    </div>
                  </div>
                  
                  {/* WhatsApp */}
                  <div className="flex items-start group cursor-pointer">
                    <div className="bg-white/10 p-4 rounded-2xl mr-6 group-hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="group-hover:translate-x-1 transition-transform duration-300">
                      <p className="font-semibold text-lg mb-2">WhatsApp</p>
                      <p className="text-gray-300 text-lg font-light">+52 (81) 4438 - 4806</p>
                    </div>
                  </div>
                  
                  {/* Location */}
                  <div className="flex items-start group cursor-pointer">
                    <div className="bg-white/10 p-4 rounded-2xl mr-6 group-hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="group-hover:translate-x-1 transition-transform duration-300">
                      <p className="font-semibold text-lg mb-2">Ubicación</p>
                      <p className="text-gray-300 text-lg font-light">Tuxtla Gutiérrez, Chiapas</p>
                    </div>
                  </div>
                </div>

                {/* Direct WhatsApp CTA - Enhanced */}
                <div className="mt-16 pt-8 border-t border-white/20">
                  <p className="text-sm text-gray-400 font-light mb-4">
                    ¿Prefieres hablar directamente? ¡Contáctame ahora!
                  </p>
                  <a 
                    href="https://wa.me/528144384806" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-xl hover:scale-105 transform"
                  >
                    <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.511-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.49"/>
                    </svg>
                    <span>Chat directo por WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Form Side - Enhanced design */}
            <div className="lg:col-span-3 p-14">
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="relative group">
                    <label className={`absolute left-0 transition-all duration-300 pointer-events-none select-none ${
                      focusedField === 'name' || formData.name 
                        ? '-top-3 text-sm font-semibold text-black' 
                        : 'top-4 text-gray-500 font-light'
                    }`}>
                      Nombre completo *
                    </label>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField('')}
                      className="w-full pt-8 pb-3 border-0 border-b-2 border-gray-200 bg-transparent focus:outline-none focus:border-black transition-all duration-300 text-lg font-light group-hover:border-gray-400"
                      required
                    />
                  </div>
                  
                  <div className="relative group">
                    <label className={`absolute left-0 transition-all duration-300 pointer-events-none select-none ${
                      focusedField === 'email' || formData.email 
                        ? '-top-3 text-sm font-semibold text-black' 
                        : 'top-4 text-gray-500 font-light'
                    }`}>
                      Correo electrónico *
                    </label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField('')}
                      className="w-full pt-8 pb-3 border-0 border-b-2 border-gray-200 bg-transparent focus:outline-none focus:border-black transition-all duration-300 text-lg font-light group-hover:border-gray-400"
                      required
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label className={`absolute left-0 transition-all duration-300 pointer-events-none select-none ${
                    focusedField === 'subject' || formData.subject 
                      ? '-top-3 text-sm font-semibold text-black' 
                      : 'top-4 text-gray-500 font-light'
                  }`}>
                    Asunto *
                  </label>
                  <input 
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField('')}
                    className="w-full pt-8 pb-3 border-0 border-b-2 border-gray-200 bg-transparent focus:outline-none focus:border-black transition-all duration-300 text-lg font-light group-hover:border-gray-400"
                    required
                  />
                </div>

                <div className="relative group">
                  <label className={`absolute left-0 transition-all duration-300 pointer-events-none select-none ${
                    focusedField === 'message' || formData.message 
                      ? '-top-3 text-sm font-semibold text-black' 
                      : 'top-4 text-gray-500 font-light'
                  }`}>
                    Mensaje *
                  </label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField('')}
                    rows="5"
                    className="w-full pt-8 pb-3 border-0 border-b-2 border-gray-200 bg-transparent focus:outline-none focus:border-black transition-all duration-300 resize-none text-lg font-light group-hover:border-gray-400"
                    required
                  ></textarea>
                </div>

                <div className="pt-8">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full md:w-auto px-12 py-5 bg-black text-white font-semibold text-lg overflow-hidden transition-all duration-500 hover:shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:scale-105 transform"
                  >
                    <span className="relative z-20 flex items-center justify-center transition-all duration-300">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Abriendo WhatsApp...
                        </>
                      ) : (
                        <>
                          Enviar por WhatsApp
                          <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-lg"></div>
                    <span className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-semibold z-10">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Abriendo WhatsApp...
                        </>
                      ) : (
                        <>
                          Enviar por WhatsApp
                          <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </>
                      )}
                    </span>
                  </button>
                  
                  <p className="text-sm text-gray-500 mt-4 font-light">
                    * Campos obligatorios
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom decorative element - Enhanced */}
        <div className="text-center mt-24">
          <div className="inline-flex items-center space-x-6">
            <div className="w-20 h-[2px] bg-gradient-to-r from-transparent to-gray-300"></div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <p className="text-gray-400 font-medium text-sm tracking-widest uppercase">Hablemos Pronto</p>
              <div className="w-2 h-2 bg-black rounded-full"></div>
            </div>
            <div className="w-20 h-[2px] bg-gradient-to-l from-transparent to-gray-300"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;