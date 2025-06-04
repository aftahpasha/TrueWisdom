import React from 'react';

// Import assets
import chatGptImage from '../../assets/images/chatgpt_image_may_1_2025_09_57_50_am_1.png';

const steps = [
  {
    id: "01",
    title: "Tuliskan Apa yang Kamu Rasakan",
    description: "Ungkapkan isi hati dalam satu-dua kalimat."
  },
  {
    id: "02",
    title: "Pilih Topik yang Kamu Butuhkan",
    description: "Cinta, agama, atau dorongan semangat — sesuaikan dengan hatimu."
  },
  {
    id: "03",
    title: "Terima Quote Setiap Hari",
    description: "Quote akan dikirim ke email, jadi kamu bisa membacanya di pagi hari, sebelum tidur, atau kapanpun kamu butuh pengingat yang menenangkan."
  }
];

const HowItWorksSection = () => {
  return (
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Image Frame */}
            <div className="lg:w-2/5 xl:w-1/2">
              <div className="relative overflow-hidden bg-brand-orange-dark h-[400px] sm:h-[500px] lg:h-[600px] w-full rounded-3xl">
                <img
                    src={chatGptImage}
                    alt="Abstract representation of AI and creativity"
                    className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="lg:w-3/5 xl:w-1/2">
              <div className="mb-10">
              <span className="block text-lg font-medium text-brand-orange-dark capitalize font-ibm-plex-sans mb-2">
                Cara Pakai TrueWisdom
              </span>
                <h2 className="text-4xl sm:text-5xl font-medium text-brand-purple-dark font-ibm-plex-serif leading-tight tracking-[-1px]">
                  Mulai dengan <i className="italic underline">Sederhana</i>, Namun <i className="italic underline">Bermakna</i>
                </h2>
                <p className="mt-6 text-lg sm:text-xl text-brand-gray-dark font-ibm-plex-sans">
                  Proses sederhana dan efektif untuk memulai membuat <i className="italic">Quotes</i>
                </p>
              </div>

              <div className="space-y-14">
                {steps.map((step, index) => (
                    <div key={step.id} className="flex items-start gap-6">
                      <div className="flex flex-col items-center relative">
                        <div className="bg-brand-purple text-white h-10 w-10 rounded-full flex items-center justify-center text-xl font-semibold font-ibm-plex-serif mb-2 z-10">
                          {step.id}
                        </div>
                        {index < steps.length - 1 && (
                            <div className={`h-20 absolute top-10 left-1/2 -translate-x-1/2 border-l-2 border border-brand-purple`}></div>
                        )}
                      </div>
                      <div>
                        <h3 className="text-2xl font-medium text-brand-purple-dark font-ibm-plex-serif mb-2">
                          {step.title}
                        </h3>
                        <p className="text-base text-brand-gray-dark font-ibm-plex-sans">
                          {step.description}
                        </p>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default HowItWorksSection;