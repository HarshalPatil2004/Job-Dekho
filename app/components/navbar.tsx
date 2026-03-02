'use client'

import React, { useState, useEffect } from 'react';

// Defining types for better TS support
type NavItem = 'Home' | 'About' | 'Job' | 'Services' | 'Contact Us';

const Navbar: React.FC = () => {
  const navItems: NavItem[] = ['Home', 'About', 'Job', 'Services', 'Contact Us'];
  const [activeItem, setActiveItem] = useState<NavItem>('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Fixes hydration issues by ensuring component is mounted before rendering browser-specific logic
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const handleNavClick = (item: NavItem) => {
    setActiveItem(item);
    
    // Convert 'Contact Us' to 'contact-us'
    const sectionId = item.toLowerCase().replace(/\s+/g, '-');
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setMobileMenuOpen(false);
  };

  // Avoid rendering parts of the UI that depend on client-state until mounted
  if (!mounted) return null;

  return (
    <nav className="bg-slate-900 h-16 flex items-center justify-between px-4 sm:px-12 sticky top-0 z-[100] shadow-md">
      {/* Logo */}
      <div 
        className="font-bold text-2xl text-blue-500 cursor-pointer select-none" 
        onClick={() => handleNavClick('Home')}
      >
        Job <span className="text-white">Dekho</span>
      </div>

      {/* Mobile Toggle Button */}
      <button
        className="sm:hidden flex flex-col justify-center items-center w-8 h-8 text-white focus:outline-none z-50"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <div className="relative w-6 h-5">
          <span className={`absolute block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 top-2' : 'top-0'}`}></span>
          <span className={`absolute block w-6 h-0.5 bg-white top-2 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`absolute block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 top-2' : 'top-4'}`}></span>
        </div>
      </button>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center space-x-2">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => handleNavClick(item)}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ease-in-out
              ${activeItem === item
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-slate-950/95 backdrop-blur-sm transition-transform duration-300 sm:hidden flex flex-col items-center justify-center space-y-8 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => handleNavClick(item)}
            className={`text-2xl font-bold uppercase tracking-widest ${activeItem === item ? 'text-blue-500' : 'text-white'}`}
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;