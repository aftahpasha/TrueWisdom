import React, { useState } from 'react';
import Button from './ui/Button';

const DetailedPricingCard = ({ plan }) => {

  // Next.js navigation
  const { useRouter } = require('next/navigation');
  const router = useRouter();

  const [selectedDuration, setSelectedDuration] = useState(plan.durations[0]);
  const [sendAsGift, setSendAsGift] = useState(false);

  const handleDurationChange = (duration) => {
    setSelectedDuration(duration);
    console.log("Duration changed to:", duration.label);
  };

  const handleGiftToggle = () => {
    setSendAsGift(!sendAsGift);
    console.log("Send as gift toggled:", !sendAsGift);
  };

  const handleBuyPackage = () => {
    router.push('/checkout');
  };

  return (
    <div className="relative bg-[rgba(251,241,255,1.00)] border border-[#bea2dcff] h-full w-full p-6 sm:p-8 rounded-3xl flex flex-col gap-6 sm:gap-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:gap-5">
        <div className="bg-brand-purple h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center p-2 rounded-2xl">
          <img src={plan.icon || '/assets/images/vector_1.svg'} alt={`${plan.title} icon`} className="h-full w-full object-contain" />
        </div>
        <div>
          <h3 className="text-3xl sm:text-4xl font-semibold italic text-brand-purple-dark font-ibm-plex-serif tracking-[0.3px]">
            {plan.title}
          </h3>
          <p className="text-base sm:text-lg text-brand-purple-dark font-ibm-plex-sans leading-relaxed mt-1">
            {plan.description}
          </p>
        </div>
      </div>

      {/* Duration Tabs */}
      <div className="flex border-b border-[#d8c7eaff]">
        {plan.durations.map((duration) => (
          <button
            key={duration.label}
            onClick={() => handleDurationChange(duration)}
            className={`flex-1 py-3 text-sm sm:text-base font-medium font-ibm-plex-sans transition-all duration-200
              ${selectedDuration.label === duration.label
                ? 'text-brand-purple-dark border-b-2 border-brand-purple bg-[linear-gradient(180.0deg,rgba(231,208,255,0.00)_0.0%,rgba(223,191,255,1.00)_100.0%)]'
                : 'text-brand-purple-dark/70 hover:text-brand-purple-dark'
              }`}
          >
            {duration.label}
          </button>
        ))}
      </div>

      {/* Features */}
      <div className="flex flex-col gap-4">
        <div>
          <h4 className="text-lg sm:text-xl font-semibold text-brand-purple-dark font-ibm-plex-sans tracking-[0.3px]">
            Manfaat Utama:
          </h4>
          <p className="text-sm sm:text-base text-brand-purple-dark font-ibm-plex-sans mt-1">
            Berikut adalah fitur-fitur yang akan Anda dapatkan:
          </p>
        </div>
        <ul className="space-y-3 sm:space-y-4">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2.5">
              <img src="/assets/images/vector_2.svg" alt="Checkmark" className="h-5 w-5 sm:h-6 sm:w-6 mt-0.5 text-brand-purple" />
              <span className="text-sm sm:text-base text-brand-purple-dark font-ibm-plex-sans flex-1">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <img src="/assets/images/divider.svg" alt="Divider" className="w-full" />

      {/* Price and CTA */}
      <div className="mt-auto flex flex-col gap-3.5">
        <label className="flex items-center gap-2 cursor-pointer text-brand-purple-dark font-medium font-ibm-plex-sans tracking-[0.2px]">
          <input
            type="checkbox"
            checked={sendAsGift}
            onChange={handleGiftToggle}
            className="hidden"
          />
          <div className="h-6 w-6 sm:h-7 sm:w-7 border-2 border-brand-purple rounded-md flex items-center justify-center transition-all duration-200">
            {sendAsGift && <div className="h-3 w-3 sm:h-3.5 sm:w-3.5 bg-brand-purple rounded-sm"></div>}
          </div>
          Kirim sebagai Hadiah
        </label>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3.5">
          <div className="flex-1">
            <span className="text-3xl sm:text-4xl font-semibold text-brand-purple-dark font-ibm-plex-sans tracking-[0.3px]">
              {selectedDuration.price}
            </span>
            <span className="text-base sm:text-lg text-brand-purple-dark/80 font-ibm-plex-sans tracking-[0.2px] ml-1">
              / {selectedDuration.label.toLowerCase()}
            </span>
          </div>
          <Button
            variant="secondary"
            size="md"
            onClick={handleBuyPackage}
            className="w-full sm:w-auto"
          >
            Beli Paket
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DetailedPricingCard;
