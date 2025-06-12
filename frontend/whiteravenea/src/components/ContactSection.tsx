
import React, { useState } from 'react';

interface ContactSectionProps {
  className?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ className = "" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const socialLinks = [
    { name: 'WhatsApp', icon: '💬', url: 'https://wa.me/message/MMS5VDEZUHSBK1', color: 'text-green-400' },
    { name: 'Instagram', icon: '📸', url: 'https://www.instagram.com/funi_mphela?igsh=MXQ2cWZmNmliazNxMw==', color: 'text-pink-400' },
    { name: 'Facebook', icon: '👤', url: 'https://www.facebook.com/EmpirialDesigns', color: 'text-blue-400' },
    { name: 'TikTok', icon: '🎵', url: 'https://www.tiktok.com/@empirialdesigns?_t=ZM-8x1WWPTYsAX&_r=1', color: 'text-red-400' }
  ];

  return (
    <footer id="contact" className={`relative min-h-screen w-full py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-900 via-gray-900 to-black ${className}`}>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 md:mb-8">
            BOOK A CALL
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 sm:mb-6 md:mb-8 px-4">
            Ready to transform your trading? Get in touch with our team of experts.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:from-blue-700 hover:to-blue-900 transition-all transform hover:scale-105 shadow-lg"
          >
            Schedule a Call
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16 max-w-2xl mx-auto">
          {socialLinks.map((link, index) => (
            <div key={index} className="text-center">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block hover:transform hover:scale-105 transition-all"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-2 sm:mb-3 md:mb-4 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors border border-white/20">
                  <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl">{link.icon}</span>
                </div>
                <span className={`text-white font-semibold text-xs sm:text-sm md:text-base lg:text-lg group-hover:${link.color} transition-colors`}>
                  {link.name}
                </span>
              </a>
            </div>
          ))}
        </div>
        
        <div className="border-t border-white/20 pt-4 sm:pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-center md:text-left">
            <div className="text-white text-xs md:text-sm">
              © 2024 White Raven EA. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-white text-xs md:text-sm">
              <a href="#privacy" className="hover:text-blue-300 transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-blue-300 transition-colors">Terms of Service</a>
              <a href="#support" className="hover:text-blue-300 transition-colors">Support</a>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setIsModalOpen(false)}>
          <div className="bg-gray-900 p-4 sm:p-6 md:p-8 rounded-2xl max-w-md w-full border border-blue-500/20 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">Schedule a Call</h3>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm md:text-base">
              Book a personalized consultation about White Raven EA and see how it can transform your trading.
            </p>
            <form className="space-y-3 md:space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-sm md:text-base"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-sm md:text-base"
                  required
                />
              </div>
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-300 mb-1">
                  Trading Experience
                </label>
                <select
                  id="experience"
                  name="experience"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-sm md:text-base"
                >
                  <option value="">Select your level</option>
                  <option value="beginner">Beginner (0-1 year)</option>
                  <option value="intermediate">Intermediate (1-3 years)</option>
                  <option value="advanced">Advanced (3+ years)</option>
                </select>
              </div>
              <div className="flex gap-3 pt-3 md:pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 px-4 rounded-md hover:from-blue-700 hover:to-blue-900 transition-all text-sm md:text-base"
                >
                  Book Call
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 bg-gray-700 text-gray-300 py-2 px-4 rounded-md hover:bg-gray-600 transition-colors text-sm md:text-base"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </footer>
  );
};
