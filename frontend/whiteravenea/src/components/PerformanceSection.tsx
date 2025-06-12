
import React from 'react';

interface PerformanceSectionProps {
  className?: string;
}

export const PerformanceSection: React.FC<PerformanceSectionProps> = ({ className = "" }) => {
  const stats = [
    { value: '94.7%', label: 'Success Rate', description: 'Average win rate across all markets' },
    { value: '$2.4M+', label: 'Profits Generated', description: 'Total profits for our users this year' },
    { value: '10,000+', label: 'Active Users', description: 'Traders using White Raven EA' },
    { value: '24/7', label: 'Market Coverage', description: 'Continuous monitoring and trading' }
  ];

  return (
    <section id="performance" className={`relative min-h-screen w-full py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-900 to-black ${className}`}>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            PROVEN PERFORMANCE
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Our track record speaks for itself. Join thousands of successful traders.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-4 sm:p-6 md:p-8 mb-3 md:mb-4">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2">{stat.value}</div>
                <div className="text-blue-200 font-semibold text-xs sm:text-sm md:text-base">{stat.label}</div>
              </div>
              <p className="text-gray-400 text-xs md:text-sm px-2">{stat.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-blue-900/50 to-gray-900/50 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 border border-blue-500/20">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">Ready to Start Trading?</h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 px-4">
              Join the revolution in automated trading. Get your White Raven EA license today.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 sm:px-8 md:px-12 py-3 md:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:from-blue-700 hover:to-blue-900 transition-all transform hover:scale-105 shadow-lg">
              GET LICENSE KEY
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
