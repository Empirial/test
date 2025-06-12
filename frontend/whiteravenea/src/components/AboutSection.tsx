
import React from 'react';

interface AboutSectionProps {
  backgroundImage: string;
  overlayImage: string;
  decorativeImage1: string;
  decorativeImage2: string;
  decorativeImage3: string;
  className?: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  backgroundImage,
  overlayImage,
  decorativeImage1,
  decorativeImage2,
  decorativeImage3,
  className = ""
}) => {
  const features = [
    'The Robot Trades for you automatically',
    'Stoploss and Takeprofit is also automated',
    'A minimum deposit of R100 is required',
    'You can set the robot to trade any lot size for you',
    'Saves you time on analyzing the market'
  ];

  return (
    <section id="about" className={`relative min-h-screen w-full py-20 bg-black ${className}`}>
      <div className="relative max-w-6xl mx-auto px-20 max-md:px-5">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 max-md:text-3xl">
            THINGS TO KNOW ABOUT
          </h2>
          <h3 className="text-5xl font-bold text-white max-md:text-3xl">
            THE MOBILE ROBOT
          </h3>
        </div>
        
        <div className="space-y-6 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-white text-xl max-md:text-lg">
              <span className="w-3 h-3 bg-white rounded-full mr-6 flex-shrink-0"></span>
              <span>{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-white text-2xl mb-8 max-md:text-xl">
            Available On All Platforms
          </p>
          <div className="flex justify-center gap-8">
            <img
              src={decorativeImage2}
              alt="Platform icon"
              className="w-16 h-16 object-contain"
            />
            <img
              src={decorativeImage2}
              alt="Platform icon"
              className="w-16 h-16 object-contain"
            />
          </div>
        </div>
        
        <div className="hidden">
          <img src={decorativeImage1} alt="Decorative" />
          <img src={decorativeImage3} alt="Decorative" />
        </div>
      </div>
    </section>
  );
};
