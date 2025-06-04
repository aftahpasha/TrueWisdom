import React, { useState } from 'react';
import PricingOption from './PricingOption';
import DetailedPricingCard from './DetailedPricingCard';

// Import icons for plans if available, or use placeholders
import trueLoveIcon from '../../assets/images/vector_1.svg'; // Example, replace with actual icons
// import trueFaithIcon from '../../assets/images/some_icon.svg';
// import trueAffirmIcon from '../../assets/images/some_icon.svg';
// import trueFriendIcon from '../../assets/images/some_icon.svg';

const pricingPlansData = [
  {
    id: 'truelove',
    title: "TrueLove",
    price: "Rp 15.000",
    icon: trueLoveIcon,
    description: "Untuk kamu yang sedang jatuh cinta, rindu, atau butuh ruang untuk mencintai diri sendiri.",
    durations: [
      { label: "7 Hari", price: "Rp 15.000" },
      { label: "14 Hari", price: "Rp 25.000" },
      { label: "21 Hari", price: "Rp 35.000" },
      { label: "30 Hari", price: "Rp 45.000" },
    ],
    features: [
      "Quote harian bertema cinta yang hangat dan dewasa",
      "Cocok untuk healing dari patah hati, memperdalam relasi, atau merayakan cinta",
      "Dikirim setiap hari via email, selama durasi pilihan",
      "Sudah Termasuk photocard yang dicetak (untuk paket tertentu)"
    ]
  },
  {
    id: 'truefaith',
    title: "TrueFaith",
    price: "Rp 15.000",
    // icon: trueFaithIcon, // Placeholder for actual icon path
    icon: '../../assets/images/vector_3.svg', // Example, replace with actual icon
    description: "Untuk kamu yang mencari ketenangan spiritual dan penguatan iman dalam setiap langkah.",
    durations: [
      { label: "7 Hari", price: "Rp 15.000" },
      { label: "14 Hari", price: "Rp 25.000" },
      { label: "30 Hari", price: "Rp 45.000" },
    ],
    features: [
      "Quote harian bertema spiritual dan keimanan",
      "Membantu refleksi diri dan menemukan kedamaian batin",
      "Dikirim setiap hari via email",
    ]
  },
  {
    id: 'trueaffirm',
    title: "TrueAffirm",
    price: "Rp 15.000",
    // icon: trueAffirmIcon, // Placeholder for actual icon path
    icon: '../../assets/images/vector_4.svg', // Example, replace with actual icon
    description: "Untuk kamu yang butuh afirmasi positif untuk memulai hari dengan semangat dan percaya diri.",
    durations: [
      { label: "7 Hari", price: "Rp 15.000" },
      { label: "14 Hari", price: "Rp 25.000" },
      { label: "30 Hari", price: "Rp 45.000" },
    ],
    features: [
      "Afirmasi positif harian untuk membangun mindset kuat",
      "Meningkatkan rasa percaya diri dan motivasi",
      "Dikirim setiap hari via email",
    ]
  },
  {
    id: 'truefriend',
    title: "TrueFriend",
    price: "Rp 15.000",
    // icon: trueFriendIcon, // Placeholder for actual icon path
    icon: '../../assets/images/vector_5.svg', // Example, replace with actual icon
    description: "Untuk kamu yang menghargai arti persahabatan dan ingin merayakannya setiap hari.",
    durations: [
      { label: "7 Hari", price: "Rp 15.000" },
      { label: "14 Hari", price: "Rp 25.000" },
      { label: "30 Hari", price: "Rp 45.000" },
    ],
    features: [
      "Quote harian tentang persahabatan sejati",
      "Menginspirasi untuk menjadi teman yang lebih baik",
      "Dikirim setiap hari via email",
    ]
  }
];


const PricingSection = () => {
  const [activePlanId, setActivePlanId] = useState(pricingPlansData[0].id);
  const activePlanDetails = pricingPlansData.find(plan => plan.id === activePlanId);

  const handlePlanSelect = (planId) => {
    setActivePlanId(planId);
    console.log("Plan selected:", planId);
  };

  return (
    <section id="harga" className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="text-center mb-12 sm:mb-16">
          <span className="block text-lg font-medium text-brand-orange-dark capitalize font-ibm-plex-sans mb-2">
            Paket dan Harga
          </span>
          <h2 className="text-4xl sm:text-5xl font-medium text-brand-purple-dark font-ibm-plex-serif leading-tight tracking-[-1px]">
            <i className="italic underline">Investasi Kecil</i> untuk Perasaan yang <i className="italic underline">Lebih Tenang</i>
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-brand-gray-dark font-ibm-plex-sans max-w-2xl mx-auto">
            Kami bantu hadirkan itu. Pilih paket yang paling pas dengan kehidupanmu saat ini.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Pricing Options Column */}
          <div className="lg:w-1/2 flex flex-col gap-5">
            {pricingPlansData.map((plan) => (
              <PricingOption
                key={plan.id}
                title={plan.title}
                price={plan.price}
                isActive={activePlanId === plan.id}
                onClick={() => handlePlanSelect(plan.id)}
              />
            ))}
          </div>

          {/* Detailed Pricing Card Column */}
          <div className="lg:w-1/2">
            {activePlanDetails && <DetailedPricingCard plan={activePlanDetails} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
