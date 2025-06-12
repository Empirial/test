
import React from 'react';

interface ContentSectionProps {
  backgroundImage: string;
  contentImage: string;
  className?: string;
}

export const ContentSection: React.FC<ContentSectionProps> = ({
  backgroundImage,
  contentImage,
  className = ""
}) => {
  return (
    <section className={`relative min-h-screen w-full flex items-center justify-center py-20 bg-black ${className}`}>
      <div className="relative max-w-4xl mx-auto px-20 max-md:px-5 text-center">
        <div className="mb-8">
          <img
            src="/lovable-uploads/91eaf4ea-d48a-421c-ad82-f24029acde03.png"
            alt="Mobile Robot Samurai"
            className="max-w-sm mx-auto mb-8"
          />
        </div>
        
        <h2 className="text-6xl font-bold text-white mb-6 max-md:text-4xl">
          WHITE
          <br />
          RAVEN EA
        </h2>
        
        <div className="flex justify-center mb-6">
          <div className="flex text-yellow-400">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-3xl">★</span>
            ))}
            <span className="text-3xl text-gray-400">★</span>
          </div>
        </div>
        
        <p className="text-white text-lg mb-2">
          (4.5+ stars) - 68+ reviews
        </p>
        
        <div className="text-white mb-8">
          <p className="text-lg mb-2">Once Payment Is Completed</p>
          <p className="text-lg">You Will Get An Email With The LICENSE KEY</p>
        </div>
        
        <button className="bg-white text-black px-12 py-4 rounded-full font-semibold text-lg hover:bg-gray-200 transition-colors">
          GET LICENSE KEY
        </button>
      </div>
    </section>
  );
};
