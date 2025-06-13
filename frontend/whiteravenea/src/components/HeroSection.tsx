
import React from 'react';
import { Navigation } from './Navigation';

interface HeroSectionProps {
  backgroundImage: string;
  logoImage: string;
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  logoImage,
  className = ""
}) => {
  const features = [
    'Advanced AI Trading Algorithms',
    '24/7 Automated Market Analysis',
    'Risk Management Built-In',
    'Multi-Currency Support'
  ];

  return (
    <section id="home" className={`relative min-h-screen w-full overflow-hidden bg-black ${className}`}>
      <Navigation />
      
      <div className="relative flex flex-col lg:flex-row items-center justify-between h-screen px-4 sm:px-6 md:px-10 lg:px-20 pt-20 lg:pt-0">
        <div className="flex-1 max-w-2xl z-10 text-center lg:text-left">
          <div className="mb-4 md:mb-6">
            <span className="inline-block px-3 py-2 md:px-4 bg-blue-600/20 text-blue-300 rounded-full text-xs md:text-sm font-medium border border-blue-500/30">
              🤖 Professional Trading Robot
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
            WHITE
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
              RAVEN EA
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0">
            Elite automated trading expert advisor that executes profitable trades while you focus on what matters most.
          </p>
          
          <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-white text-sm sm:text-base md:text-lg justify-center lg:justify-start">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 md:mr-4 animate-pulse flex-shrink-0"></div>
                {feature}
              </li>
            ))}
          </ul>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
            <a
             href="https://www.paypal.com/ncp/payment/TNP7YWJBJVVZQ"
             target="_blank"
             rel="noopener noreferrer"
             className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base lg:text-lg hover:from-blue-700 hover:to-blue-900 transition-all transform hover:scale-105 shadow-lg border border-blue-500/30 text-center"
             >
              GET LICENSE KEY
            </a>
             <a
              href="https://wa.me/message/MMS5VDEZUHSBK1"
             target="_blank"
             rel="noopener noreferrer"
             className="bg-transparent border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base lg:text-lg hover:bg-white hover:text-black transition-all text-center"
              >
               WHATSAPP US NOW
             </a>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center items-center mt-8 lg:mt-0 relative">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-white rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <img
              src="/lovable-uploads/91eaf4ea-d48a-421c-ad82-f24029acde03.png"
              alt="White Raven EA Robot"
              className="relative w-48 sm:w-64 md:w-80 lg:w-96 h-auto object-contain"
            />
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse opacity-50"></div>
      </div>
    </section>
  );
};
