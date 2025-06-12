import React from 'react';

// Import assets


const FooterLink = ({ href, children }) => (
  <a
    href={href}
    onClick={(e) => { e.preventDefault(); console.log(`Footer link to ${children} clicked`); }}
    className="text-lg text-brand-purple-dark hover:text-brand-purple transition-colors duration-300 font-ibm-plex-sans"
  >
    {children}
  </a>
);

const Footer = () => {
  const handleLogoClick = (e) => {
    e.preventDefault();
    console.log("Footer logo clicked");
  };

  return (
    <footer className="bg-white pt-10 sm:pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 text-center">
        {/* Logo */}
        <a href="#" onClick={handleLogoClick} className="inline-flex items-center gap-2.5 mb-8 sm:mb-10">
          <img src="/assets/images/union_17.svg" alt="TrueWisdom Logo Icon" className="h-8 w-8" />
          <img src="/assets/images/truewisdom_15.svg" alt="TrueWisdom Logo Text" className="h-5" />
        </a>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center items-center gap-x-6 sm:gap-x-10 gap-y-4 mb-8 sm:mb-10">
          <FooterLink href="#beranda">Beranda</FooterLink>
          <FooterLink href="#fitur">Fitur</FooterLink>
          <FooterLink href="#harga">Harga</FooterLink>
          <FooterLink href="#tentang-kami">Tentang Kami</FooterLink>
        </nav>

        {/* Copyright and Company Info */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-base text-brand-purple-dark font-ibm-plex-sans">
            <span>PT Smart Techno Indonesia</span>
            <span>© {new Date().getFullYear()} TrueWisdom. All rights reserved.</span>
          </div>
        </div>
        
        {/* Optional: Larger decorative logo at the very bottom if desired */}
          <img src="/assets/images/truewisdom_16.svg" alt="TrueWisdom" className="mx-auto mt-10" />
      </div>
    </footer>
  );
};

export default Footer;
