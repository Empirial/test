
import React from 'react';

interface FeaturesSectionProps {
  className?: string;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ className = "" }) => {
  const features = [
    {
      icon: '🧠',
      title: 'Artificial Intelligence',
      description: 'Advanced machine learning algorithms that adapt to market patterns and improve over time.'
    },
    {
      icon: '⚡',
      title: 'Lightning Fast Execution',
      description: 'Execute trades in milliseconds with our optimized infrastructure and direct market access.'
    },
    {
      icon: '🛡️',
      title: 'Risk Management',
      description: 'Built-in stop-loss and take-profit mechanisms to protect your capital automatically.'
    },
    {
      icon: '📊',
      title: 'Advanced Analytics',
      description: 'Real-time performance tracking with detailed analytics and reporting dashboards.'
    },
    {
      icon: '🌐',
      title: 'Multi-Market Support',
      description: 'Trade across Forex, Crypto, Stocks, and Commodities from a single platform.'
    },
    {
      icon: '📱',
      title: 'Mobile Ready',
      description: 'Monitor and control your trading robot from anywhere with our mobile app.'
    }
  ];

  return (
    <section id="features" className={`relative min-h-screen w-full py-12 sm:py-16 md:py-20 bg-black ${className}`}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            POWERFUL FEATURES
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Experience the next generation of automated trading with cutting-edge technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 sm:p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4">{feature.icon}</div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
