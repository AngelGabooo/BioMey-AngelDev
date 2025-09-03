// src/components/organisms/ChatBot.jsx
import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ChatBot = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [autoSpeak, setAutoSpeak] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [botVisible, setBotVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const recognitionRef = useRef(null);
  const speechRef = useRef(null);
  const [conversationId, setConversationId] = useState(Date.now());

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 300);
    }
    
    // Mostrar menú inicial cuando se abre el chat
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        setShowMenu(true);
        addBotMessage(t.responses.greeting, false);
      }, 500);
    }
  }, [isOpen]);

  // Detener speech cuando se cierra el chat
  useEffect(() => {
    if (!isOpen) {
      stopSpeaking();
      // Limpiar conversación después de cerrar
      const timer = setTimeout(() => {
        setMessages([]);
        setShowMenu(true);
        setConversationId(Date.now());
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Inicializar reconocimiento de voz
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = language === 'es' ? 'es-ES' : 'en-US';

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputMessage(transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error', event.error);
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [language]);

  const translations = {
    es: {
      title: "Asistente Virtual BioMey",
      subtitle: "Especialista en Desarrollo Web",
      placeholder: "Escribe tu pregunta...",
      menu: {
        title: "¡Hola! 👋 Soy tu asistente virtual",
        subtitle: "Selecciona lo que te interesa:",
        options: [
          { id: 'pricing', icon: '💰', title: 'Precios', desc: 'Cotizaciones y tarifas' },
          { id: 'services', icon: '🚀', title: 'Servicios', desc: 'Todo lo que ofrecemos' },
          { id: 'process', icon: '⚡', title: 'Proceso', desc: 'Cómo trabajamos' },
          { id: 'contact', icon: '📞', title: 'Contacto', desc: 'Habla con nuestro equipo' }
        ]
      },
      services: {
        title: "🚀 *Nuestros Servicios:*",
        options: [
          { id: 'web', icon: '🌐', title: 'Desarrollo Web', desc: 'Sitios profesionales' },
          { id: 'ecommerce', icon: '🛒', title: 'E-commerce', desc: 'Tiendas online' },
          { id: 'seo', icon: '🔍', title: 'SEO', desc: 'Posicionamiento' },
          { id: 'maintenance', icon: '🛡️', title: 'Mantenimiento', desc: 'Soporte continuo' }
        ]
      },
      responses: {
        greeting: "¡Perfecto! Estoy aquí para ayudarte con todo sobre desarrollo web. ¿Por dónde empezamos?",
        pricing: "💰 *Precios de Desarrollo Web:*\n\n🎯 **Sitio Básico** - Desde $2,500 MXN\n• 5 páginas responsivas\n• Formulario de contacto\n• Optimización básica\n\n🚀 **Sitio Profesional** - Desde $5,000 MXN\n• 10 páginas + Blog\n• SEO técnico\n• Panel administrativo\n• Integraciones sociales\n\n🏢 **Sitio Empresarial** - Desde $10,000 MXN\n• 15+ páginas\n• Sistema personalizado\n• E-commerce básico\n• Analytics avanzado\n\n¿Te interesa algún paquete específico?",
        
        web: "🌐 **Desarrollo Web Profesional**\n\n✨ Creamos sitios web que convierten:\n• Diseño responsive y moderno\n• Velocidad de carga optimizada\n• SEO técnico incluido\n• Formularios inteligentes\n• Integración con redes sociales\n\n🎨 **Tecnologías que usamos:**\n• React, Next.js, Vue.js\n• WordPress, Shopify\n• Node.js, PHP, Laravel\n\n**Tiempo:** 2-4 semanas\n**Desde:** $2,500 MXN\n\n¿Qué tipo de sitio necesitas?",
        
        ecommerce: "🛒 **E-commerce Profesional**\n\n💳 Todo lo que necesitas para vender online:\n• Catálogo de productos ilimitado\n• Carrito de compras intuitivo\n• Pasarelas de pago seguras\n• Panel de administración completo\n• Inventario automatizado\n• Reportes de ventas\n\n📱 **Características especiales:**\n• Diseño mobile-first\n• Checkout en un paso\n• Recuperación de carritos abandonados\n• Integración con WhatsApp Business\n\n**Tiempo:** 4-8 semanas\n**Desde:** $8,000 MXN\n\n¿Qué productos quieres vender?",
        
        seo: "🔍 **Posicionamiento SEO**\n\n📈 Te ayudamos a aparecer en Google:\n• Auditoría SEO completa\n• Optimización técnica\n• Contenido estratégico\n• Link building de calidad\n• Análisis de competencia\n• Reportes mensuales detallados\n\n🎯 **Resultados esperados:**\n• +200% más visitas orgánicas\n• Mejores posiciones en Google\n• Más leads y conversiones\n\n**Inversión:** $1,500 MXN/mes\n**Contrato mínimo:** 6 meses\n\n¿Tu sitio ya está online?",
        
        maintenance: "🛡️ **Mantenimiento Web 24/7**\n\n⚡ Tu sitio siempre protegido y actualizado:\n• Monitoreo 24/7 automático\n• Backups diarios seguros\n• Actualizaciones de seguridad\n• Optimización de velocidad\n• Soporte técnico prioritario\n• Reportes mensuales\n\n🚨 **Respuesta inmediata:**\n• Problemas críticos: < 1 hora\n• Solicitudes normales: < 4 horas\n• Actualizaciones: Semanales\n\n**Planes desde:** $800 MXN/mes\n**Sin permanencia**\n\n¿Tienes un sitio que necesita mantenimiento?",
        
        process: "⚡ **Nuestro Proceso de Trabajo:**\n\n**1. 📋 Análisis** (1-2 días)\n• Entrevista detallada\n• Análisis de competencia\n• Definición de objetivos\n\n**2. 🎨 Diseño** (3-5 días)\n• Wireframes y mockups\n• Revisiones ilimitadas\n• Aprobación del cliente\n\n**3. 👨‍💻 Desarrollo** (1-3 semanas)\n• Programación personalizada\n• Pruebas en diferentes dispositivos\n• Optimización de velocidad\n\n**4. 🚀 Lanzamiento** (1-2 días)\n• Configuración del servidor\n• Pruebas finales\n• Capacitación del equipo\n\n**5. 🛡️ Seguimiento** (Continuo)\n• Soporte post-lanzamiento\n• Monitoreo y optimización\n• Actualizaciones regulares\n\n¿Te parece bien esta metodología?",
        
        contact: "📞 **Contacto Directo:**\n\n🎯 **Para Cotizaciones Personalizadas:**\n• 📧 Email: a20624646@gmail.com\n• 📱 WhatsApp: +52 81 4438 4806\n• 💻 Sitio: www.biomey.com\n\n🏢 **Oficina Virtual:**\n• 🕐 Lunes a Viernes: 24h\n• 📍 Tuxtla Gutiérrez, Chiapas\n• 🌐 Atención en toda México\n\n⚡ **Respuesta Garantizada:**\n• WhatsApp: Inmediata\n• Email: Máximo 2 horas\n• Llamadas: L-V 24h\n\n¿Prefieres que te contactemos nosotros?",
        
        default: "🤔 Entiendo que quieres saber sobre: *{query}*\n\n¿Te gustaría que te ayude con alguno de estos temas?\n• 💰 Precios y cotizaciones\n• 🚀 Nuestros servicios\n• ⚡ Proceso de trabajo\n• 📞 Contacto directo"
      },
      buttons: {
        backToMenu: "🏠 Menú Principal",
        speakThis: "🔊 Escuchar",
        stopSpeaking: "⏸️ Detener",
        autoSpeak: "🎵 Auto-voz",
        getQuote: "💬 Cotizar Proyecto",
        callUs: "📞 Llamar Ahora"
      }
    },
    en: {
      title: "BioMey Virtual Assistant",
      subtitle: "Web Development Specialist",
      placeholder: "Type your question...",
      menu: {
        title: "Hello! 👋 I'm your virtual assistant",
        subtitle: "Select what interests you:",
        options: [
          { id: 'pricing', icon: '💰', title: 'Pricing', desc: 'Quotes and rates' },
          { id: 'services', icon: '🚀', title: 'Services', desc: 'Everything we offer' },
          { id: 'process', icon: '⚡', title: 'Process', desc: 'How we work' },
          { id: 'contact', icon: '📞', title: 'Contact', desc: 'Talk to our team' }
        ]
      },
      services: {
        title: "🚀 *Our Services:*",
        options: [
          { id: 'web', icon: '🌐', title: 'Web Development', desc: 'Professional sites' },
          { id: 'ecommerce', icon: '🛒', title: 'E-commerce', desc: 'Online stores' },
          { id: 'seo', icon: '🔍', title: 'SEO', desc: 'Positioning' },
          { id: 'maintenance', icon: '🛡️', title: 'Maintenance', desc: 'Ongoing support' }
        ]
      },
      responses: {
        greeting: "Perfect! I'm here to help you with everything about web development. Where shall we start?",
        pricing: "💰 *Web Development Pricing:*\n\n🎯 **Basic Site** - From $2,500 MXN\n• 5 responsive pages\n• Contact form\n• Basic optimization\n\n🚀 **Professional Site** - From $5,000 MXN\n• 10 pages + Blog\n• Technical SEO\n• Admin panel\n• Social integrations\n\n🏢 **Business Site** - From $10,000 MXN\n• 15+ pages\n• Custom system\n• Basic e-commerce\n• Advanced analytics\n\nInterested in any specific package?",
        
        web: "🌐 **Professional Web Development**\n\n✨ We create websites that convert:\n• Responsive and modern design\n• Optimized loading speed\n• Technical SEO included\n• Smart forms\n• Social media integration\n\n🎨 **Technologies we use:**\n• React, Next.js, Vue.js\n• WordPress, Shopify\n• Node.js, PHP, Laravel\n\n**Time:** 2-4 weeks\n**From:** $2,500 MXN\n\nWhat type of site do you need?",
        
        ecommerce: "🛒 **Professional E-commerce**\n\n💳 Everything you need to sell online:\n• Unlimited product catalog\n• Intuitive shopping cart\n• Secure payment gateways\n• Complete admin panel\n• Automated inventory\n• Sales reports\n\n📱 **Special features:**\n• Mobile-first design\n• One-page checkout\n• Abandoned cart recovery\n• WhatsApp Business integration\n\n**Time:** 4-8 weeks\n**From:** $8,000 MXN\n\nWhat products do you want to sell?",
        
        seo: "🔍 **SEO Positioning**\n\n📈 We help you appear on Google:\n• Complete SEO audit\n• Technical optimization\n• Strategic content\n• Quality link building\n• Competitor analysis\n• Detailed monthly reports\n\n🎯 **Expected results:**\n• +200% more organic visits\n• Better positions on Google\n• More leads and conversions\n\n**Investment:** $1,500 MXN/month\n**Minimum contract:** 6 months\n\nIs your site already online?",
        
        maintenance: "🛡️ **24/7 Web Maintenance**\n\n⚡ Your site always protected and updated:\n• 24/7 automatic monitoring\n• Secure daily backups\n• Security updates\n• Speed optimization\n• Priority technical support\n• Monthly reports\n\n🚨 **Immediate response:**\n• Critical issues: < 1 hour\n• Normal requests: < 4 hours\n• Updates: Weekly\n\n**Plans from:** $800 MXN/month\n**No permanence**\n\nDo you have a site that needs maintenance?",
        
        process: "⚡ **Our Work Process:**\n\n**1. 📋 Analysis** (1-2 days)\n• Detailed interview\n• Competitor analysis\n• Goal setting\n\n**2. 🎨 Design** (3-5 days)\n• Wireframes and mockups\n• Unlimited revisions\n• Client approval\n\n**3. 👨‍💻 Development** (1-3 weeks)\n• Custom programming\n• Testing on different devices\n• Speed optimization\n\n**4. 🚀 Launch** (1-2 days)\n• Server setup\n• Final testing\n• Team training\n\n**5. 🛡️ Follow-up** (Ongoing)\n• Post-launch support\n• Monitoring and optimization\n• Regular updates\n\nDoes this methodology sound good to you?",
        
        contact: "📞 **Direct Contact:**\n\n🎯 **For Customized Quotes:**\n• 📧 Email: a20624646@gmail.com\n• 📱 WhatsApp: +52 81 4438 4806\n• 💻 Website: www.biomey.com\n\n🏢 **Virtual Office:**\n• 🕐 Monday to Friday: 24h\n• 📍 Tuxtla Gutiérrez, Chiapas\n• 🌐 Service throughout Mexico\n\n⚡ **Guaranteed Response:**\n• WhatsApp: Immediate\n• Email: Maximum 2 hours\n• Calls: Mon-Fri 24h\n\nWould you prefer us to contact you?",
        
        default: "🤔 I understand you want to know about: *{query}*\n\nWould you like me to help you with any of these topics?\n• 💰 Pricing and quotes\n• 🚀 Our services\n• ⚡ Work process\n• 📞 Direct contact"
      },
      buttons: {
        backToMenu: "🏠 Main Menu",
        speakThis: "🔊 Listen",
        stopSpeaking: "⏸️ Stop",
        autoSpeak: "🎵 Auto-voice",
        getQuote: "💬 Get Quote",
        callUs: "📞 Call Now"
      }
    }
  };

  const t = translations[language];

  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const speakText = (text) => {
    if (!('speechSynthesis' in window)) return;
    
    stopSpeaking();
    
    const cleanText = text
      .replace(/\*/g, '')
      .replace(/\[.*?\]/g, '')
      .replace(/#{1,6}\s/g, '')
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/__(.*?)__/g, '$1');

    const speech = new SpeechSynthesisUtterance(cleanText);
    speech.lang = language === 'es' ? 'es-ES' : 'en-US';
    speech.rate = 0.9;
    speech.pitch = 1.0;
    speech.volume = 0.8;

    speech.onstart = () => setIsSpeaking(true);
    speech.onend = () => setIsSpeaking(false);
    speech.onerror = () => setIsSpeaking(false);

    const voices = window.speechSynthesis.getVoices();
    const preferredVoices = language === 'es' 
      ? voices.filter(v => v.lang.includes('es'))
      : voices.filter(v => v.lang.includes('en'));
    
    if (preferredVoices.length > 0) {
      speech.voice = preferredVoices[0];
    }

    speechRef.current = speech;
    window.speechSynthesis.speak(speech);
  };

  const addBotMessage = (text, shouldSpeak = true) => {
    const botMessage = {
      id: Date.now() + Math.random(),
      text: text,
      sender: 'bot',
      timestamp: new Date(),
      conversationId: conversationId
    };

    setMessages(prev => [...prev, botMessage]);
    
    if (shouldSpeak && autoSpeak && isOpen) {
      setTimeout(() => speakText(text), 500);
    }
  };

  const handleMenuOption = (optionId) => {
    setShowMenu(false);
    
    const userMessage = {
      id: Date.now(),
      text: t.menu.options.find(opt => opt.id === optionId)?.title || optionId,
      sender: 'user',
      timestamp: new Date(),
      conversationId: conversationId
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      if (optionId === 'services') {
        showServicesMenu();
      } else {
        const response = t.responses[optionId] || t.responses.default.replace('{query}', optionId);
        addBotMessage(response);
      }
      setIsTyping(false);
    }, 1000);
  };

  const showServicesMenu = () => {
    const servicesMessage = `${t.services.title}\n\n¿Qué servicio te interesa más?`;
    addBotMessage(servicesMessage, false);
  };

  const handleServiceOption = (serviceId) => {
    const userMessage = {
      id: Date.now(),
      text: t.services.options.find(opt => opt.id === serviceId)?.title || serviceId,
      sender: 'user',
      timestamp: new Date(),
      conversationId: conversationId
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const response = t.responses[serviceId] || t.responses.default.replace('{query}', serviceId);
      addBotMessage(response);
      setIsTyping(false);
    }, 1000);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
      conversationId: conversationId
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputMessage;
    setInputMessage('');
    setIsTyping(true);
    setShowMenu(false);

    setTimeout(() => {
      generateBotResponse(currentInput.toLowerCase());
      setIsTyping(false);
    }, 1000);
  };

  const generateBotResponse = (userInput) => {
    const normalizedInput = userInput.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let response = t.responses.default.replace('{query}', userInput);

    // Mejorada detección de intenciones
    if (/(precio|costo|cost|price|cotiz|budget|cuanto|how much)/i.test(normalizedInput)) {
      response = t.responses.pricing;
    } else if (/(web|website|sitio|pagina)/i.test(normalizedInput)) {
      response = t.responses.web;
    } else if (/(ecommerce|tienda|store|shop|venta)/i.test(normalizedInput)) {
      response = t.responses.ecommerce;
    } else if (/(seo|posicionamiento|google|search)/i.test(normalizedInput)) {
      response = t.responses.seo;
    } else if (/(mantenimiento|maintenance|soporte|support)/i.test(normalizedInput)) {
      response = t.responses.maintenance;
    } else if (/(proceso|process|como trabajan|how.*work)/i.test(normalizedInput)) {
      response = t.responses.process;
    } else if (/(contact|contacto|hablar|llamar|telefono)/i.test(normalizedInput)) {
      response = t.responses.contact;
    }

    addBotMessage(response);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const startListening = () => {
    if (recognitionRef.current) {
      setIsListening(true);
      recognitionRef.current.start();
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString(language === 'es' ? 'es-ES' : 'en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10) {
        setBotVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setBotVisible(false); // Oculta el bot al bajar
      } else if (currentScrollY < lastScrollY) {
        setBotVisible(true); // Muestra el bot al subir
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && botVisible && (
        <div className="fixed top-20 right-5 sm:bottom-5 sm:right-5 z-50">
          <button
            onClick={() => setIsOpen(true)}
            className="group relative w-16 h-16 bg-gradient-to-r from-black to-gray-800 hover:from-gray-900 hover:to-black text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 overflow-hidden"
            aria-label="Open chat"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
            {/* Logo */}
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/20">
              <img 
                src="/img/bio.jpg" 
                alt="BioMey" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-full h-full bg-white/10 backdrop-blur-sm flex items-center justify-center hidden">
                <span className="text-white font-bold text-lg">B</span>
              </div>
            </div>
            {/* Notification dot */}
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse border-2 border-white"></span>
            {/* Pulse effect */}
            <span className="absolute inset-0 rounded-full bg-black animate-ping opacity-20"></span>
          </button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed inset-4 sm:bottom-6 sm:right-6 sm:top-auto sm:left-auto sm:w-96 sm:h-[600px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 flex flex-col overflow-hidden">
          {/* Enhanced Header */}
          <div className="bg-gradient-to-r from-black to-gray-800 text-white p-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/30">
                  <img 
                    src="/img/bio.jpg" 
                    alt="BioMey" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-white/20 backdrop-blur-sm flex items-center justify-center hidden">
                    <span className="text-white font-bold">B</span>
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h3 className="font-bold text-lg">{t.title}</h3>
                <p className="text-xs opacity-90">{t.subtitle}</p>
              </div>
            </div>
            {/* Header Controls */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setAutoSpeak(!autoSpeak)}
                className={`p-2 rounded-lg transition-colors ${autoSpeak ? 'bg-white/20' : 'hover:bg-white/10'}`}
                title={t.buttons.autoSpeak}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                </svg>
              </button>
              
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Close chat"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            {/* Welcome Menu */}
            {showMenu && messages.length <= 1 && (
              <div className="p-6">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">B</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t.menu.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{t.menu.subtitle}</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {t.menu.options.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleMenuOption(option.id)}
                      className="p-4 bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-200 text-left group hover:bg-black hover:text-white dark:hover:bg-black"
                    >
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{option.icon}</div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{option.title}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">{option.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Services Submenu */}
            {!showMenu && messages.length > 0 && messages[messages.length - 1]?.text.includes(t.services.title) && (
              <div className="p-4">
                <div className="grid grid-cols-2 gap-3 mt-4">
                  {t.services.options.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => handleServiceOption(service.id)}
                      className="p-3 bg-white dark:bg-gray-700 rounded-lg border hover:shadow-md transition-all text-left hover:bg-black hover:text-white dark:hover:bg-black"
                    >
                      <div className="text-xl mb-1">{service.icon}</div>
                      <div className="font-medium text-sm text-gray-900 dark:text-white">{service.title}</div>
                      <div className="text-xs text-gray-600">{service.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Messages */}
            <div className="p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs lg:max-w-sm rounded-2xl p-4 ${
                    message.sender === 'user'
                      ? 'bg-black text-white'
                      : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 border border-gray-200 dark:border-gray-600'
                  }`}>
                    <div className="text-sm whitespace-pre-line leading-relaxed">
                      {message.text.split('\n').map((line, i) => (
                        <div key={i} className="mb-1">{line}</div>
                      ))}
                    </div>
                    
                    {/* Message Controls */}
                    <div className="flex items-center justify-between mt-3">
                      <span className={`text-xs ${message.sender === 'user' 
                        ? 'text-gray-300' 
                        : 'text-gray-500 dark:text-gray-400'
                      }`}>
                        {formatTime(message.timestamp)}
                      </span>
                      
                      {message.sender === 'bot' && (
                        <button
                          onClick={() => speakText(message.text)}
                          disabled={isSpeaking}
                          className="text-xs bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 px-2 py-1 rounded-full transition-colors disabled:opacity-50"
                          title={t.buttons.speakThis}
                        >
                          {isSpeaking ? '⏸️' : '🔊'}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-gray-700 rounded-2xl p-4 border border-gray-200 dark:border-gray-600">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-black rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Action Buttons */}
          {messages.length > 1 && (
            <div className="px-4 py-2 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
              <div className="flex gap-2 justify-center">
                <button
                  onClick={() => {
                    setShowMenu(true);
                    setMessages([]);
                    addBotMessage(t.responses.greeting, false);
                  }}
                  className="text-xs bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 px-3 py-2 rounded-full border border-gray-200 dark:border-gray-600 transition-colors hover:bg-black hover:text-white dark:hover:bg-black"
                >
                  {t.buttons.backToMenu}
                </button>
                
                {isSpeaking ? (
                  <button
                    onClick={stopSpeaking}
                    className="text-xs bg-black hover:bg-gray-900 text-white px-3 py-2 rounded-full transition-colors"
                  >
                    {t.buttons.stopSpeaking}
                  </button>
                ) : (
                  <button
                    onClick={() => handleMenuOption('contact')}
                    className="text-xs bg-black hover:bg-gray-900 text-white px-3 py-2 rounded-full transition-colors"
                  >
                    {t.buttons.getQuote}
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Enhanced Input Area */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <div className="flex items-center space-x-3">
              {/* Voice Input Button */}
              <button
                onClick={isListening ? () => setIsListening(false) : startListening}
                className={`p-3 rounded-full transition-all ${
                  isListening 
                    ? 'bg-red-500 text-white animate-pulse shadow-lg' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                title={isListening ? 'Stop listening' : 'Voice input'}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isListening ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  )}
                </svg>
              </button>
              
              {/* Text Input */}
              <div className="flex-1 relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={t.placeholder}
                  className="w-full bg-gray-100 dark:bg-gray-800 border-none rounded-full px-4 py-3 pr-12 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  disabled={isTyping}
                />
                
                {/* Send Button */}
                <button
                  onClick={handleSendMessage}
                  disabled={inputMessage.trim() === '' || isTyping}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black dark:bg-white disabled:bg-gray-300 disabled:dark:bg-gray-600 text-white dark:text-black rounded-full p-2 hover:shadow-lg disabled:shadow-none transition-all disabled:cursor-not-allowed"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Voice Status */}
            {isListening && (
              <div className="mt-3 flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {language === 'es' ? 'Escuchando...' : 'Listening...'}
                </p>
              </div>
            )}

            {/* Typing Suggestions */}
            {inputMessage === '' && !isListening && messages.length === 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {['💰 Precios', '🚀 Servicios', '📞 Contacto'].map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => setInputMessage(suggestion.split(' ')[1])}
                    className="text-xs bg-black text-white hover:bg-gray-900 px-3 py-1 rounded-full transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;