
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Performance', href: '#performance' },
    { name: 'License', href: '#license' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 hidden lg:block ${className}`}>
        <div className="bg-white/10 backdrop-blur-md rounded-full px-6 xl:px-8 py-3 border border-white/20">
          <ul className="flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-white font-semibold text-sm xl:text-base hover:text-blue-300 transition-colors duration-200"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 right-4 z-50 bg-white/10 backdrop-blur-md rounded-full p-3 border border-white/20"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="text-white" size={20} /> : <Menu className="text-white" size={20} />}
        </button>

        {isOpen && (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-40 flex items-center justify-center">
            <ul className="space-y-6 text-center">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-white font-semibold text-xl hover:text-blue-300 transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
