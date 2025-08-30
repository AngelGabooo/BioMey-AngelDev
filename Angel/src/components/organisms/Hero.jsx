// src/components/organisms/Hero/Hero.jsx (actualizado)
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage(); // Obtener la función de traducción

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-black dark:via-gray-900 dark:to-gray-800 pt-16 sm:pt-20 lg:pt-0 transition-colors duration-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, black 2px, transparent 2px), radial-gradient(circle at 75% 75%, black 2px, transparent 2px)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      {/* Geometric shapes - Optimized for mobile */}
      <div className="absolute top-10 left-4 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border-2 border-gray-300 dark:border-gray-700 rotate-45 opacity-20"></div>
      <div className="absolute bottom-10 right-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 bg-black dark:bg-white opacity-10 rounded-full"></div>
      <div className="absolute top-1/2 left-2 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border border-gray-400 dark:border-gray-600 opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 shadow-lg">
              <div className="w-2 h-2 bg-white dark:bg-black rounded-full animate-pulse"></div>
              <span className="hidden sm:inline">{t('hero.badge')}</span>
              <span className="sm:hidden">{t('hero.badgeMobile')}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-black dark:text-white mb-6 sm:mb-8 leading-none tracking-tight">
              {t('hero.title1')}
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-gray-900 via-black to-gray-800 dark:from-gray-100 dark:via-white dark:to-gray-200 bg-clip-text text-transparent">
                  {t('hero.title2')}
                </span>
                <div className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-2 sm:h-4 bg-black dark:bg-white opacity-20 -rotate-1 rounded"></div>
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-2xl text-gray-700 dark:text-gray-300 mb-8 sm:mb-12 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              <a 
                href="#contacto" 
                className="group relative bg-black dark:bg-white text-white dark:text-black px-6 py-4 sm:px-10 sm:py-5 font-bold tracking-wide hover:shadow-2xl transition-all duration-500 overflow-hidden text-center text-base sm:text-lg"
              >
                <span className="relative z-10">{t('hero.cta1')}</span>
                <div className="absolute inset-0 bg-white dark:bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <span className="absolute inset-0 flex items-center justify-center text-black dark:text-white font-bold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  {t('hero.cta1')}
                </span>
              </a>
              <a 
                href="#portafolio" 
                className="group border-2 sm:border-3 border-black dark:border-white text-black dark:text-white px-6 py-4 sm:px-10 sm:py-5 font-bold tracking-wide hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 text-center text-base sm:text-lg relative overflow-hidden"
              >
                <span className="relative z-10">{t('hero.cta2')}</span>
                <div className="absolute top-0 right-0 w-0 h-full bg-black dark:bg-white group-hover:w-full transition-all duration-500"></div>
                <span className="absolute inset-0 flex items-center justify-center text-white dark:text-black font-bold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  {t('hero.cta2')}
                </span>
              </a>
            </div>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start gap-6 sm:gap-8 lg:gap-12 mt-12 sm:mt-16">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-black dark:text-white mb-1 sm:mb-2">50+</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">{t('hero.stats.projects')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-black dark:text-white mb-1 sm:mb-2">100%</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">{t('hero.stats.satisfaction')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-black dark:text-white mb-1 sm:mb-2">24/7</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">{t('hero.stats.support')}</div>
              </div>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="w-full lg:w-1/2 flex flex-col items-center gap-8 sm:gap-12">
            {/* Main Visual Container */}
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
              <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] mx-auto relative">
                {/* Main Card */}
                <div className="absolute inset-4 sm:inset-6 lg:inset-8 bg-white dark:bg-black border-2 sm:border-3 lg:border-4 border-black dark:border-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] sm:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] dark:sm:shadow-[16px_16px_0px_0px_rgba(255,255,255,1)] lg:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] dark:lg:shadow-[20px_20px_0px_0px_rgba(255,255,255,1)] flex items-center justify-center group hover:shadow-[25px_25px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[25px_25px_0px_0px_rgba(255,255,255,1)] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1">
                  <div className="text-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 mx-auto bg-black dark:bg-white flex items-center justify-center mb-4 sm:mb-6 lg:mb-8 relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white dark:text-black text-3xl sm:text-4xl lg:text-6xl font-black relative z-10">AG</span>
                      <div className="absolute inset-0 bg-white dark:bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"></div>
                      <span className="absolute inset-0 flex items-center justify-center text-black dark:text-white text-3xl sm:text-4xl lg:text-6xl font-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">AG</span>
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      <div className="w-32 sm:w-40 lg:w-48 h-2 sm:h-3 bg-black dark:bg-white mx-auto opacity-80"></div>
                      <div className="w-24 sm:w-32 lg:w-40 h-2 sm:h-3 bg-gray-400 dark:bg-gray-600 mx-auto opacity-60"></div>
                      <div className="w-20 sm:w-24 lg:w-32 h-2 sm:h-3 bg-gray-300 dark:bg-gray-700 mx-auto opacity-40"></div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements - Smaller for mobile */}
                <div className="absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-black dark:bg-white animate-bounce shadow-lg"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-gray-400 dark:bg-gray-600 animate-bounce delay-1000"></div>
                <div className="absolute top-1/2 left-0 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 border-2 border-black dark:border-white animate-pulse"></div>
                <div className="absolute top-1/4 right-1/4 w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 bg-black dark:bg-white rounded-full animate-ping opacity-75"></div>
              </div>
            </div>

            {/* Team Section */}
            <div className="flex flex-col items-center gap-6 sm:gap-8 w-full">
              {/* Team Members Cards */}
              <div className="flex items-center gap-3 sm:gap-6 lg:gap-8 justify-center">
                {/* Main Developer Card - AG */}
                <div className="group cursor-pointer">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-white dark:bg-black border-2 sm:border-3 lg:border-4 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:sm:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] lg:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:lg:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] flex items-center justify-center group-hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:group-hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                    <span className="text-black dark:text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-black">AG</span>
                  </div>
                </div>

                {/* Connection Line */}
                <div className="h-0.5 sm:h-1 w-4 sm:w-6 lg:w-8 bg-black dark:bg-white opacity-60"></div>

                {/* Team Member 1 - Samuel */}
                <div className="group cursor-pointer">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 bg-white dark:bg-black border-2 sm:border-3 lg:border-4 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:sm:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] lg:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:lg:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] flex items-center justify-center group-hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:group-hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                    <span className="text-black dark:text-white text-sm sm:text-base md:text-lg lg:text-2xl font-black">SM</span>
                  </div>
                </div>

                {/* Connection Line */}
                <div className="h-0.5 sm:h-1 w-4 sm:w-6 lg:w-8 bg-black dark:bg-white opacity-60"></div>

                {/* Team Member 2 - Carlos */}
                <div className="group cursor-pointer">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 bg-white dark:bg-black border-2 sm:border-3 lg:border-4 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:sm:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] lg:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:lg:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] flex items-center justify-center group-hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:group-hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                    <span className="text-black dark:text-white text-sm sm:text-base md:text-lg lg:text-2xl font-black">CP</span>
                  </div>
                </div>
              </div>

              {/* Team Names Section */}
              <div className="flex flex-col gap-4 sm:gap-6 text-center w-full max-w-4xl">
                {/* Main Developer */}
                <div className="bg-black dark:bg-white text-white dark:text-black border-2 sm:border-3 lg:border-4 border-black dark:border-white px-4 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:sm:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                  <p className="text-base sm:text-lg lg:text-xl font-black mb-1 sm:mb-2">{t('hero.team.angel')}</p>
                  <p className="text-xs sm:text-sm font-bold tracking-wider opacity-90">{t('hero.team.angelRole')}</p>
                </div>
                
                {/* Team Members */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <div className="bg-white dark:bg-black border-2 sm:border-3 border-black dark:border-white px-4 py-3 sm:px-6 sm:py-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:sm:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] flex-1">
                    <p className="text-sm sm:text-base lg:text-lg font-black text-black dark:text-white mb-1">{t('hero.team.samuel')}</p>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-bold tracking-wider">{t('hero.team.samuelRole')}</p>
                  </div>
                  
                  <div className="bg-white dark:bg-black border-2 sm:border-3 border-black dark:border-white px-4 py-3 sm:px-6 sm:py-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:sm:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] flex-1">
                    <p className="text-sm sm:text-base lg:text-lg font-black text-black dark:text-white mb-1">{t('hero.team.carlos')}</p>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-bold tracking-wider">{t('hero.team.carlosRole')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Label */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 sm:gap-3 bg-black dark:bg-white text-white dark:text-black px-4 py-2 sm:px-6 sm:py-3 font-bold tracking-wider text-xs sm:text-sm">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white dark:bg-black animate-pulse"></div>
                {t('hero.team.label')}
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white dark:bg-black animate-pulse delay-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-black dark:bg-white"></div>
    </section>
  )
}

export default Hero