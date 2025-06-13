
import React from 'react';

interface PricingSectionProps {
  className?: string;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ className = "" }) => {
  return (
    <section id="license" className={`relative min-h-screen w-full py-12 sm:py-16 md:py-20 bg-black ${className}`}>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            GET YOUR LICENSE KEY
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Purchase your White Raven EA license and receive instant access via email.
          </p>
        </div>
        
        <div className="max-w-sm sm:max-w-md mx-auto">
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 border border-blue-500 shadow-2xl shadow-blue-500/20">
            <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-3 sm:px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap">
                PROFESSIONAL LICENSE
              </span>
            </div>
            
            <div className="text-center mb-4 sm:mb-6 md:mb-8 mt-3 md:mt-4">
              <img
                src="/lovable-uploads/91eaf4ea-d48a-421c-ad82-f24029acde03.png"
                alt="White Raven EA"
                className="w-24 sm:w-32 md:w-40 mx-auto mb-4 md:mb-6"
              />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">White Raven EA</h3>
              <div className="flex items-baseline justify-center mb-3 md:mb-4">
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">$299</span>
                <span className="text-gray-400 ml-2 text-sm md:text-base">one-time</span>
              </div>
              <div className="flex justify-center mb-3 md:mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(4)].map((_, i) => (
                    <span key={i} className="text-base sm:text-lg md:text-xl">★</span>
                  ))}
                  <span className="text-base sm:text-lg md:text-xl text-gray-400">★</span>
                </div>
              </div>
              <p className="text-white text-xs sm:text-sm md:text-base mb-2">
                (4.5+ stars) - 68+ reviews
              </p>
            </div>
            
            <ul className="space-y-2 sm:space-y-3 md:space-y-4 mb-4 sm:mb-6 md:mb-8">
              {[
                'Lifetime License Access',
                'Advanced AI Trading Algorithm',
                'Multi-Currency Support',
                'Real-time Market Analysis',
                'Risk Management Tools',
                'Installation Guide Included',
                'Email Support'
              ].map((feature, index) => (
                <li key={index} className="flex items-center text-gray-300 text-xs sm:text-sm md:text-base">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                  {feature}
                </li>
              ))}
            </ul>
            
            <div className="text-center mb-4 sm:mb-6 md:mb-8">
              <p className="text-white text-xs sm:text-sm md:text-base mb-1 md:mb-2">Once Payment Is Completed</p>
              <p className="text-white text-xs sm:text-sm md:text-base font-semibold">You Will Get An Email With The LICENSE KEY</p>
              <p className="text-gray-400 text-xs md:text-sm mt-1 md:mt-2">+ Installation instructions and setup guide</p>
            </div>
            
            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 md:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:from-blue-700 hover:to-blue-900 transition-all transform hover:scale-105 shadow-lg">
              <a
             href="https://www.paypal.com/ncp/payment/TNP7YWJBJVVZQ"
             target="_blank"
             rel="noopener noreferrer"
             className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base lg:text-lg hover:from-blue-700 hover:to-blue-900 transition-all transform hover:scale-105 shadow-lg border border-blue-500/30 text-center"
             >
              GET LICENSE KEY
            </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
