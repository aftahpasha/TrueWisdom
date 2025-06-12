import React from 'react';

const FeatureCard = ({ imgSrc, title, description, bgColor = 'bg-[rgba(242,236,248,1.00)]', imgContainerStyle = {} }) => {
  return (
    <div className={`relative overflow-hidden ${bgColor} h-full flex flex-col items-center gap-8 pt-5 pb-8 px-5 rounded-3xl`}>
      <div 
        className="relative overflow-hidden h-[242px] w-full rounded-3xl bg-cover bg-center"
        style={{ backgroundImage: `url(${imgSrc.startsWith('/') ? imgSrc : '/assets/images/' + imgSrc})` }}
      >
        {/* Image is set as background */}
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-medium text-brand-purple-dark font-ibm-plex-serif mb-3 leading-tight">
          {title}
        </h3>
        <p className="text-base text-brand-gray-dark font-ibm-plex-sans leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
