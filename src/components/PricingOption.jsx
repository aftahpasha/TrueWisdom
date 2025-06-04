import React from 'react';

const PricingOption = ({ title, price, isActive, onClick, className = '' }) => {
  const baseClasses = "w-full flex justify-between items-center px-7 py-6 sm:py-8 rounded-2xl border cursor-pointer transition-all duration-300 ease-in-out";
  const activeClasses = "bg-brand-purple border-brand-purple shadow-lg";
  const inactiveClasses = "bg-white border-[#d8c7eaff] hover:border-brand-purple/50 hover:shadow-md";
  
  const textBase = "font-ibm-plex-serif italic text-2xl sm:text-3xl font-semibold tracking-[0.3px]";
  const activeText = "text-white";
  const inactiveText = "text-brand-purple-dark";

  const priceBase = "font-ibm-plex-sans text-2xl sm:text-3xl font-medium tracking-[0.3px]";
  const priceSubtextBase = "font-ibm-plex-sans text-base sm:text-lg font-normal leading-[20px] tracking-[0.2px] block";


  return (
    <div
      onClick={onClick}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses} ${className}`}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && onClick()}
    >
      <h3 className={`${textBase} ${isActive ? activeText : inactiveText}`}>
        {title}
      </h3>
      <div className="text-right">
        <span className={`${priceSubtextBase} ${isActive ? activeText : inactiveText} mb-1`}>Mulai dari</span>
        <span className={`${priceBase} ${isActive ? activeText : inactiveText}`}>
          {price}
        </span>
      </div>
    </div>
  );
};

export default PricingOption;
