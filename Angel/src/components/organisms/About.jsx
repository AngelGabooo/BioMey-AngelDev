// src/components/organisms/About.jsx
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { language } = useLanguage();
  
  const translations = {
    es: {
      title: "Sobre BioMey",
      subtitle: "Excelencia en desarrollo tecnológico e innovación digital",
      founded: "Fundada en 2022 por Ángel Gabriel García Samayoa",
      description: "BioMey nació como una empresa especializada en desarrollo web de vanguardia, evolucionando rápidamente hacia un ecosistema completo de soluciones tecnológicas que abarca aplicaciones móviles multiplataforma, sistemas de ciberseguridad avanzados, software empresarial a medida, plataformas de comercio electrónico y arquitecturas cloud nativas.",
      team: "Con un equipo multidisciplinario de ingenieros certificados y especialistas en tecnologías emergentes, hemos materializado proyectos de clase mundial, estableciendo alianzas estratégicas con instituciones académicas de prestigio internacional y corporaciones Fortune 500.",
      certifications: "Certificaciones y Acreditaciones Profesionales",
      viewCert: "Verificar certificación",
      certs: [
        {
          title: "ISO 27001:2022 - Gestión de Seguridad de la Información",
          issuer: "International Organization for Standardization",
          icon: "🛡️",
          year: "2023"
        },
        {
          title: "Google Cloud Professional Cloud Architect",
          issuer: "Google Cloud Platform",
          icon: "☁️",
          year: "2023"
        },
        {
          title: "AWS Solutions Architect Professional",
          issuer: "Amazon Web Services",
          icon: "🏗️",
          year: "2024"
        },
        {
          title: "Certified Ethical Hacker (CEH)",
          issuer: "EC-Council International",
          icon: "🔐",
          year: "2024"
        },
        {
          title: "Apple iOS Developer Enterprise",
          issuer: "Apple Developer Program",
          icon: "📱",
          year: "2023"
        },
        {
          title: "Microsoft Azure Solutions Architect Expert",
          issuer: "Microsoft Corporation",
          icon: "🔷",
          year: "2024"
        }
      ],
      clients: "Alianzas Estratégicas y Clientes Corporativos",
      universities: "Instituciones Académicas",
      banks: "Sector Financiero",
      corporations: "Corporaciones Globales",
      universityList: [
        {
          name: "Tecnológico de Monterrey",
          country: "México",
          logo: "TEC"
        },
        {
          name: "Universidad Politécnica de Chiapas",
          country: "México",
          logo: "UPC"
        },
        {
          name: "Harvard University",
          country: "USA",
          logo: "HU"
        },
        {
          name: "Stanford University",
          country: "USA",
          logo: "SU"
        },
        {
          name: "TETR University",
          country: "Dubai, UAE",
          logo: "TU"
        },
        {
          name: "Universidad Nacional Autónoma de México",
          country: "México",
          logo: "UNAM"
        }
      ],
      bankList: [
        {
          name: "BBVA México",
          country: "México",
          logo: "BBVA"
        },
        {
          name: "Citibanamex",
          country: "México", 
          logo: "CBX"
        },
        {
          name: "Banco Santander",
          country: "España/México",
          logo: "SAN"
        },
        {
          name: "Banorte",
          country: "México",
          logo: "BNT"
        },
        {
          name: "HSBC México",
          country: "México",
          logo: "HSBC"
        },
        {
          name: "Scotiabank",
          country: "Canadá/México",
          logo: "SCB"
        }
      ],
      corporationList: [
        {
          name: "Microsoft",
          sector: "Tecnología",
          logo: "MS"
        },
        {
          name: "Amazon",
          sector: "E-commerce/Cloud",
          logo: "AMZ"
        },
        {
          name: "Google",
          sector: "Tecnología",
          logo: "GGL"
        },
        {
          name: "IBM",
          sector: "Consultoría/TI",
          logo: "IBM"
        },
        {
          name: "Oracle",
          sector: "Software/DB",
          logo: "ORC"
        },
        {
          name: "SAP",
          sector: "Software ERP",
          logo: "SAP"
        }
      ]
    },
    en: {
      title: "About BioMey",
      subtitle: "Excellence in technological development and digital innovation",
      founded: "Founded in 2022 by Ángel Gabriel García Samayoa",
      description: "BioMey emerged as a cutting-edge web development company, rapidly evolving into a comprehensive ecosystem of technological solutions spanning cross-platform mobile applications, advanced cybersecurity systems, bespoke enterprise software, e-commerce platforms, and cloud-native architectures.",
      team: "With a multidisciplinary team of certified engineers and emerging technology specialists, we have materialized world-class projects, establishing strategic partnerships with prestigious international academic institutions and Fortune 500 corporations.",
      certifications: "Professional Certifications and Accreditations",
      viewCert: "Verify certification",
      certs: [
        {
          title: "ISO 27001:2022 - Information Security Management",
          issuer: "International Organization for Standardization",
          icon: "🛡️",
          year: "2023"
        },
        {
          title: "Google Cloud Professional Cloud Architect",
          issuer: "Google Cloud Platform",
          icon: "☁️",
          year: "2023"
        },
        {
          title: "AWS Solutions Architect Professional",
          issuer: "Amazon Web Services",
          icon: "🏗️",
          year: "2024"
        },
        {
          title: "Certified Ethical Hacker (CEH)",
          issuer: "EC-Council International",
          icon: "🔐",
          year: "2024"
        },
        {
          title: "Apple iOS Developer Enterprise",
          issuer: "Apple Developer Program",
          icon: "📱",
          year: "2023"
        },
        {
          title: "Microsoft Azure Solutions Architect Expert",
          issuer: "Microsoft Corporation",
          icon: "🔷",
          year: "2024"
        }
      ],
      clients: "Strategic Partnerships and Corporate Clients",
      universities: "Academic Institutions",
      banks: "Financial Sector",
      corporations: "Global Corporations",
      universityList: [
        {
          name: "Tecnológico de Monterrey",
          country: "Mexico",
          logo: "TEC"
        },
        {
          name: "Universidad Politécnica de Chiapas",
          country: "Mexico",
          logo: "UPC"
        },
        {
          name: "Harvard University",
          country: "USA",
          logo: "HU"
        },
        {
          name: "Stanford University",
          country: "USA",
          logo: "SU"
        },
        {
          name: "TETR University",
          country: "Dubai, UAE",
          logo: "TU"
        },
        {
          name: "Universidad Nacional Autónoma de México",
          country: "Mexico",
          logo: "UNAM"
        }
      ],
      bankList: [
        {
          name: "BBVA México",
          country: "Mexico",
          logo: "BBVA"
        },
        {
          name: "Citibanamex",
          country: "Mexico", 
          logo: "CBX"
        },
        {
          name: "Banco Santander",
          country: "Spain/Mexico",
          logo: "SAN"
        },
        {
          name: "Banorte",
          country: "Mexico",
          logo: "BNT"
        },
        {
          name: "HSBC México",
          country: "Mexico",
          logo: "HSBC"
        },
        {
          name: "Scotiabank",
          country: "Canada/Mexico",
          logo: "SCB"
        }
      ],
      corporationList: [
        {
          name: "Microsoft",
          sector: "Technology",
          logo: "MS"
        },
        {
          name: "Amazon",
          sector: "E-commerce/Cloud",
          logo: "AMZ"
        },
        {
          name: "Google",
          sector: "Technology",
          logo: "GGL"
        },
        {
          name: "IBM",
          sector: "Consulting/IT",
          logo: "IBM"
        },
        {
          name: "Oracle",
          sector: "Software/DB",
          logo: "ORC"
        },
        {
          name: "SAP",
          sector: "ERP Software",
          logo: "SAP"
        }
      ]
    }
  };

  const t = translations[language];

  return (
    <section id="sobre-mi" className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-black dark:bg-white rounded-xl sm:rounded-2xl mb-6 sm:mb-8 shadow-2xl">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white dark:text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
            </svg>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-4 sm:mb-6 tracking-tight px-4">
            {t.title}
          </h2>
          <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-black dark:bg-white mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-light leading-relaxed px-4">
            {t.subtitle}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-16 sm:mb-20 md:mb-24">
          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center px-4 lg:px-0">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-black dark:bg-white rounded-md sm:rounded-lg mr-3 sm:mr-4 flex items-center justify-center flex-shrink-0">
                  <span className="text-white dark:text-black text-xs sm:text-sm font-bold">B</span>
                </div>
                <span className="leading-tight">{t.founded}</span>
              </h3>
              <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none px-4 lg:px-0">
                <p className="text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base lg:text-lg">
                  {t.description}
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                  {t.team}
                </p>
              </div>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="flex items-center justify-center order-1 lg:order-2 px-4 lg:px-0">
            <div className="relative w-full max-w-sm">
              {/* Main Card */}
              <div className="w-full aspect-square bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl shadow-2xl border-2 border-gray-900 dark:border-white p-6 sm:p-8 transform hover:-rotate-3 transition-all duration-700 group">
                <div className="h-full flex flex-col justify-between">
                  {/* Top Section */}
                  <div className="text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black dark:bg-white rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white dark:text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
                      </svg>
                    </div>
                    <h4 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-2">2022</h4>
                    <div className="w-12 sm:w-16 h-0.5 bg-gray-900 dark:bg-white mx-auto mb-3 sm:mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-400 font-medium uppercase tracking-wider text-xs sm:text-sm">
                      {language === 'es' ? 'Año de fundación' : 'Year Founded'}
                    </p>
                  </div>
                  
                  {/* Bottom Section */}
                  <div className="text-center border-t border-gray-200 dark:border-gray-700 pt-4 sm:pt-6">
                    <div className="grid grid-cols-3 gap-2 sm:gap-4">
                      <div>
                        <div className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white">50+</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                          {language === 'es' ? 'Proyectos' : 'Projects'}
                        </div>
                      </div>
                      <div>
                        <div className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white">20+</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                          {language === 'es' ? 'Clientes' : 'Clients'}
                        </div>
                      </div>
                      <div>
                        <div className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white">6</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                          {language === 'es' ? 'Países' : 'Countries'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements - Hidden on mobile for cleaner look */}
              <div className="hidden sm:block absolute -top-4 -left-4 w-20 h-20 lg:w-24 lg:h-24 bg-black dark:bg-white rounded-2xl opacity-10 -z-10"></div>
              <div className="hidden sm:block absolute -bottom-4 -right-4 w-24 h-24 lg:w-32 lg:h-32 bg-black dark:bg-white rounded-2xl opacity-5 -z-10"></div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-16 sm:mb-20 md:mb-24">
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
              {t.certifications}
            </h3>
            <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-black dark:bg-white mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-0">
            {t.certs.map((cert, index) => (
              <div key={index} className="group">
                <div className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-800 hover:border-gray-900 dark:hover:border-white h-full">
                  <div className="flex items-start mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-black dark:bg-white rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                      <span className="text-xl sm:text-2xl">{cert.icon}</span>
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-sm sm:text-base lg:text-lg leading-tight">
                        {cert.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2 leading-tight">
                        {cert.issuer}
                      </p>
                      <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                        {cert.year}
                      </span>
                    </div>
                  </div>
                  <button className="w-full text-xs sm:text-sm text-black dark:text-white font-semibold flex items-center justify-center py-2 sm:py-3 px-3 sm:px-4 border-2 border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl hover:border-black dark:hover:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 group">
                    {t.viewCert}
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clients Section */}
        <div>
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
              {t.clients}
            </h3>
            <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-black dark:bg-white mx-auto"></div>
          </div>

          {/* Universities */}
          <div className="mb-12 sm:mb-16">
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 sm:mb-8 text-center px-4">
              {t.universities}
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6 px-4 sm:px-0">
              {t.universityList.map((university, index) => (
                <div key={index} className="group">
                  <div className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-800 hover:border-gray-900 dark:hover:border-white h-24 sm:h-28 lg:h-32 flex flex-col items-center justify-center text-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-black dark:bg-white rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <span className="text-white dark:text-black font-black text-xs sm:text-xs lg:text-xs">
                        {university.logo}
                      </span>
                    </div>
                    <p className="text-xs sm:text-xs font-bold text-gray-900 dark:text-white leading-tight mb-1">
                      {university.name.length > 15 ? university.name.substring(0, 15) + '...' : university.name}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {university.country}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Banks */}
          <div className="mb-12 sm:mb-16">
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 sm:mb-8 text-center px-4">
              {t.banks}
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6 px-4 sm:px-0">
              {t.bankList.map((bank, index) => (
                <div key={index} className="group">
                  <div className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-800 hover:border-gray-900 dark:hover:border-white h-24 sm:h-28 lg:h-32 flex flex-col items-center justify-center text-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-black dark:bg-white rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <span className="text-white dark:text-black font-black text-xs sm:text-xs lg:text-xs">
                        {bank.logo}
                      </span>
                    </div>
                    <p className="text-xs sm:text-xs font-bold text-gray-900 dark:text-white leading-tight mb-1">
                      {bank.name.length > 12 ? bank.name.substring(0, 12) + '...' : bank.name}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {bank.country}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Corporations */}
          <div>
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 sm:mb-8 text-center px-4">
              {t.corporations}
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6 px-4 sm:px-0">
              {t.corporationList.map((corp, index) => (
                <div key={index} className="group">
                  <div className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-800 hover:border-gray-900 dark:hover:border-white h-24 sm:h-28 lg:h-32 flex flex-col items-center justify-center text-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-black dark:bg-white rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <span className="text-white dark:text-black font-black text-xs sm:text-xs lg:text-xs">
                        {corp.logo}
                      </span>
                    </div>
                    <p className="text-xs sm:text-xs font-bold text-gray-900 dark:text-white leading-tight mb-1">
                      {corp.name}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {corp.sector}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;