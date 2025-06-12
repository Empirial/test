
import React from 'react';

interface SocialMediaItem {
  name: string;
  icon: string;
  url?: string;
}

interface SocialMediaGridProps {
  socialItems: SocialMediaItem[];
  className?: string;
}

export const SocialMediaGrid: React.FC<SocialMediaGridProps> = ({
  socialItems,
  className = ""
}) => {
  const handleSocialClick = (item: SocialMediaItem) => {
    if (item.url) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className={`max-w-2xl mx-auto ${className}`}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {socialItems.map((item) => (
          <div key={item.name} className="text-center">
            <button
              onClick={() => handleSocialClick(item)}
              className="group block w-full hover:scale-105 transition-transform duration-200"
              aria-label={`Visit our ${item.name} page`}
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <img
                  src={item.icon}
                  alt={`${item.name} icon`}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-white font-semibold text-lg">
                {item.name}
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
