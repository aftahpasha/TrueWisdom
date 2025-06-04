import React from 'react';
import HeroForm from './HeroForm';
import QuoteCarousel from './QuoteCarousel';
import QuoteCard from './QuoteCard'; // For the static, rotated cards

import ellipse3Svg from '../../assets/images/ellipse_3.svg';
import ellipse4Svg from '../../assets/images/ellipse_4.svg';
import trueWisdomMainLogoUnion from '../../assets/images/union_9.svg';
import trueWisdomMainLogo from '../../assets/images/truewisdom_9.svg';

const HeroSection = () => {
  const handleBadgeClick = () => {
    console.log("TrueWisdom badge clicked");
  };
  
  return (
    <section id="beranda" className="relative overflow-hidden bg-white pt-[76px]">
      {/* Background Gradient */}
      <div className="absolute inset-x-0 top-[100px] h-[743px] bg-[linear-gradient(180.0deg,rgba(229,210,253,1.00)_0.0%,rgba(229,211,253,0.00)_100.0%)]"></div>
      
      <div className="absolute top-0 left-0 right-0 h-[100px] bg-[rgba(229,211,253,1.00)]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-10 pt-16 pb-24">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
          <div className="lg:w-1/2 xl:w-3/5 pt-10">
            <div
              onClick={handleBadgeClick}
              className="inline-flex items-center gap-3 pl-1 pr-3 py-1 rounded-full bg-[rgba(254,244,231,1.00)] mb-5 cursor-pointer"
            >
              <div className="relative bg-white border h-[18px] w-auto flex items-center gap-1 px-3 py-1 rounded-full border-[#f8b35bff] border-solid">
                <div className="relative bg-[rgba(254,244,231,1.00)] rounded h-[6px] w-[6px]">
                  <img src={ellipse3Svg} alt="" className="absolute inset-0 h-full w-full" />
                  <img src={ellipse4Svg} alt="" className="absolute h-[4px] w-[4px] left-[1px] top-[1px]" />
                </div>
                <span className="text-[14px] font-medium leading-[20px] tracking-[0.2px] text-[rgba(147,85,6,1.00)] font-ibm-plex-sans">
                  TrueWisdom
                </span>
              </div>
              <span className="text-[14px] font-medium leading-[20px] tracking-[0.2px] text-[rgba(98,57,4,1.00)] font-ibm-plex-sans">
                Bukan Sekadar Quote, Tapi Teman Harianmu
              </span>
            </div>

            <h1 className="text-[60px] sm:text-[70px] md:text-[80px] font-medium leading-[1.1] tracking-[-2px] text-brand-purple-dark font-ibm-plex-serif mb-5">
              Buat <i className="italic underline">Quotes</i> yang Berbicara Sesuai Isi <i className="italic underline">Hatimu</i>
            </h1>
            <p className="text-[20px] sm:text-[22px] md:text-[24px] leading-[1.55] text-brand-gray-dark font-ibm-plex-sans mb-10 lg:max-w-xl">
              Tulis suasana hatimu, pilih topik, dan biarkan AI merangkai kata yang bermakna dan dipersonalisasikan hanya untukmu.
            </p>
          </div>

          <div className="lg:w-1/2 xl:w-2/5 flex justify-center lg:justify-end lg:pt-10">
            <HeroForm />
          </div>
        </div>
      </div>
      
      <div className="relative z-10 text-center pt-12 pb-10">
        <div className="inline-flex items-center gap-2.5 mb-12">
          <img src={trueWisdomMainLogoUnion} alt="TrueWisdom Logo Icon" className="h-8 w-8" />
          <img src={trueWisdomMainLogo} alt="TrueWisdom Logo Text" className="h-5" />
        </div>
        <h2 className="text-[32px] sm:text-[36px] font-medium leading-[1.1] tracking-[-1px] text-brand-purple-dark font-ibm-plex-serif">
          <i className="italic underline">Quotes</i> yang Datang Saat Kamu Membutuhkannya
        </h2>
      </div>

      <QuoteCarousel />
    </section>
  );
};

export default HeroSection;
