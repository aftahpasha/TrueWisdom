import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';


import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Button from './ui/Button';

const NavLink = ({ href, children }) => (
  <Link
    href={href}
    className="text-brand-purple-dark hover:text-brand-purple font-medium transition-colors duration-300"
    scroll={href.startsWith('#') ? false : undefined}
  >
    {children}
  </Link>
);

const Navbar = ({ authenticated = false }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleAuthAction = (action) => {
    if (action === 'Masuk') {
      router.push('/sign-in');
    } else {
      router.push('/register');
    }
    // Add actual authentication logic here
  };

  const navLinks = [
    { href: '/', text: 'Beranda' },
    { href: '#fitur', text: 'Fitur' },
    { href: '#harga', text: 'Harga' },
    { href: '#tentang-kami', text: 'Tentang Kami' },
  ];

  return (
    <nav className={`${isScrolled ? 'fixed' : 'absolute'} top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
      ? 'bg-white shadow-sm'
      : 'bg-[rgba(229,211,253,0.20)] backdrop-blur-md'
      }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 h-[76px] flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <img src="/assets/images/union_18.svg" alt="TrueWisdom Logo Icon" className="h-8 w-8" />
          <img src="/assets/images/truewisdom_17.svg" alt="TrueWisdom Logo Text" className="h-5" />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map(link => (
            <NavLink key={link.text} href={link.href}>{link.text}</NavLink>
          ))}
        </div>

        {authenticated ?
          /* Profile Buttons - Desktop */
          <div className="hidden lg:block dropdown dropdown-hover">
            <Button type="button" variant="outline" size="sm" className="w-full rounded-full bg-white flex justify-center items-center">
              <img src="/assets/images/avatar.jpg" alt="Avatar" className="h-10 w-10 object-cover rounded-full mr-2" />
              <span className='font-medium text-lg mr-4'>Stephen</span>
              <img src="/assets/images/arrow_down_primary.svg" alt="Arrow Down" className="object-contain" />
            </Button>
            <ul tabIndex="0" className="dropdown-content menu rounded-lg shadow bg-white">
              <li>
                <Link href="/dashboard" className='text-brand-purple flex items-center gap-2'>
                  <img src="/assets/images/dashboard_primary.svg" alt="Arrow Down" className="object-contain" />
                  <p className='font-medium text-lg'>Dashboard</p>
                </Link>
              </li>
              <li>
                <button className='text-error flex items-center gap-2' type="button">
                  <img src="/assets/images/logout_error.svg" alt="Arrow Down" className="object-contain" />
                  <p className='font-medium text-lg'>Keluar</p>
                </button>
              </li>
            </ul>
          </div>
          :
          /* Auth Buttons - Desktop */
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="outline" size="sm" onClick={() => handleAuthAction('Masuk')}>
              Masuk
            </Button>
            <Button variant="primary" size="sm" onClick={() => handleAuthAction('Daftar')}>
              Daftar
            </Button>
          </div>
        }

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-brand-purple-dark focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {
        isMobileMenuOpen && (
          <div className={`lg:hidden ${isScrolled ? 'fixed' : 'absolute'} top-[76px] left-0 right-0 bg-white shadow-lg py-4 animate-slide-in-left ${!isMobileMenuOpen && 'animate-slide-out-left'}`}>
            <div className="container mx-auto px-4 sm:px-6">
              <div className="flex flex-col space-y-4">
                {navLinks.map(link => (
                  <NavLink key={link.text} href={link.href}>{link.text}</NavLink>
                ))}
                {authenticated ?
                  /* Profile Buttons - Mobile */
                  <div>
                    <div className="dropdown dropdown-hover">
                      <Button type="button" variant="outline" size="sm" className="w-full rounded-full bg-white flex justify-center items-center">
              <img src="/assets/images/avatar.jpg" alt="Avatar" className="h-10 w-10 object-cover rounded-full mr-2" />
              <span className='font-medium text-lg mr-4'>Stephen</span>
              <img src="/assets/images/arrow_down_primary.svg" alt="Arrow Down" className="object-contain" />
                      </Button>
                      <ul tabIndex="0" className="dropdown-content menu rounded-lg shadow bg-white">
                        <li>
                          <Link href="/dashboard" className='text-brand-purple flex items-center gap-2'>
                            <img src="/assets/images/dashboard_primary.svg" alt="Arrow Down" className="object-contain" />
                            <p className='font-medium text-lg'>Dashboard</p>
                          </Link>
                        </li>
                        <li>
                          <button className='text-error flex items-center gap-2' type="button">
                            <img src="/assets/images/logout_error.svg" alt="Arrow Down" className="object-contain" />
                            <p className='font-medium text-lg'>Keluar</p>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  :
                  /* Auth Buttons - Mobile */
                  <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                    <Button variant="outline" size="md" className="w-full" onClick={() => handleAuthAction('Masuk')}>
                      Masuk
                    </Button>
                    <Button variant="primary" size="md" className="w-full" onClick={() => handleAuthAction('Daftar')}>
                      Daftar
                    </Button>
                  </div>
                }
              </div>
            </div>
          </div>
        )
      }
    </nav >
  );
};

export default Navbar;