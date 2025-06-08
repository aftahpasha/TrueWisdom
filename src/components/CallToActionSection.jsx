import React from 'react';
import Button from './ui/Button';

// Import assets for decorative elements
import unionCtaLeft from '../../assets/images/union_15.svg';
import unionCtaRight from '../../assets/images/union_13.svg';
// The original design had more complex overlapping quote cards here.
// For simplicity in refactoring, I'm using simpler decorative elements.
// If the exact visual is needed, it would require more complex absolute positioning.

const CallToActionSection = () => {
  const handleTryFree = () => {
    window.location.href = "/checkout";
  };

  const handleSendGift = () => {
    window.location.href = "/checkout";
  };

  return (
    <section className="bg-white pt-10 px-4 sm:px-6 lg:px-10">
      <div className="container mx-auto">
        <div className="relative overflow-hidden bg-brand-purple-dark p-10 sm:p-14 md:py-20 rounded-3xl text-center">
          {/* Decorative elements (simplified) */}
          <img
            src={unionCtaLeft}
            alt=""
            className="absolute left-0 top-0 h-full w-auto object-contain pointer-events-none"
          />
          <img
            src={unionCtaRight}
            alt=""
            className="absolute right-0 top-0 h-full w-auto object-contain pointer-events-none"
          />

          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl md:text-[56px] font-medium text-white font-ibm-plex-sans leading-tight mb-6">
              Yuk, mulai harimu dengan <br className="hidden sm:block" />
              <i className="italic underline">Quotes</i> yang berarti.
            </h2>
            <p className="text-lg sm:text-xl text-white/80 font-ibm-plex-sans max-w-2xl mx-auto mb-10">
              Tidak butuh banyak waktu — hanya satu klik untuk mulai merasakan manfaatnya.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button variant="secondary" size="md" onClick={handleTryFree}>
                Coba Gratis Sekarang
              </Button>
              <Button variant="outline-orange" size="md" onClick={handleSendGift}>
                Kirim Sebagai Hadiah
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
