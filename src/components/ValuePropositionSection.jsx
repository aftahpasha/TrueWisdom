import React from 'react';
import FeatureCard from './FeatureCard';

// Import assets for FeatureCards


const features = [
  {
    imgSrc: '/assets/images/frame_1171278319.png',
    title: "Personalisasi Berdasarkan Perasaanmu",
    description: "Tidak perlu bingung memilih kata. Cukup tulis apa yang kamu rasakan hari ini — kami akan bantu mengubahnya menjadi bermakna."
  },
  {
    imgSrc: '/assets/images/frame_1171278319_1.png',
    title: "Dikirim Otomatis ke Email Setiap Hari",
    description: "Satu quote penuh makna dikirim ke Emailmu, setiap hari. Kamu bisa menyesuaikan dengan perasaaanmu."
  },
  {
    imgSrc: '/assets/images/frame_1171278318.png',
    title: "Menerima Semua Rasa, dibuat dengan Empati",
    description: "Didorong oleh AI, namun dirancang untuk menyentuh sisi manusiawi — kami bantu temani lewat kalimat yang tulus."
  }
];

const ValuePropositionSection = () => {
  return (
    <section id="fitur" className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="text-center mb-12 sm:mb-16">
          <span className="block text-lg font-medium text-brand-orange-dark capitalize font-ibm-plex-sans mb-2">
            Nilai TrueWisdom
          </span>
          <h2 className="text-4xl sm:text-5xl font-medium text-brand-purple-dark font-ibm-plex-serif leading-tight tracking-[-1px]">
            Lebih dari Sekadar <i className="italic underline">Quote Generator</i>
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-brand-gray-dark font-ibm-plex-sans max-w-xl mx-auto">
            Kami bukan sekadar menciptakan kata. Kami hadir untuk menemani dan memahami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              imgSrc={feature.imgSrc}
              imgContainerStyle={feature.imgContainerStyle}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
