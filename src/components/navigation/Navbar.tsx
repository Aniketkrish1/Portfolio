'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Systems' },
  { id: 'systems', label: 'Ecosystem' },
  { id: 'contact', label: 'Contact' },
];

const GITHUB_URL = 'https://github.com/Aniketkrish1';
const LINKEDIN_URL = 'https://linkedin.com/in/aniketkrish1';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = NAV_LINKS.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      let currentActive = '';
      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition) {
          currentActive = section.id;
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
    </svg>
  );

  const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0a0a0b]/80 backdrop-blur-md border-b border-[#1f1f23] py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <div className="flex-shrink-0">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="font-display font-bold text-lg text-[#f0ece5] tracking-wider"
            >
              ANIKET
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`font-mono text-xs uppercase tracking-widest transition-colors duration-200 ${
                    activeSection === link.id
                      ? 'text-[#3ecf8e]'
                      : 'text-[#8a8a8e] hover:text-[#f0ece5]'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4 border-l border-[#1f1f23] pl-6">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8a8a8e] hover:text-[#f0ece5] transition-colors"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8a8a8e] hover:text-[#f0ece5] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </div>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
                className="ml-4 inline-flex items-center gap-2 bg-[#3ecf8e]/10 border border-[#3ecf8e]/30 text-[#3ecf8e] px-5 py-2 text-xs font-mono uppercase tracking-wider rounded-full hover:bg-[#3ecf8e]/20 hover:border-[#3ecf8e]/50 transition-all"
              >
                Let&apos;s Connect
              </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 z-50 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span
              className={`block w-6 h-[2px] bg-[#f0ece5] transition-transform duration-300 origin-center ${
                isMobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-[2px] bg-[#f0ece5] transition-opacity duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span
              className={`block w-6 h-[2px] bg-[#f0ece5] transition-transform duration-300 origin-center ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''
              }`}
            ></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0a0a0b]/95 backdrop-blur-xl flex flex-col justify-center items-center md:hidden"
          >
            <nav className="flex flex-col items-center space-y-8">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`font-display text-2xl tracking-wide transition-colors ${
                    activeSection === link.id ? 'text-[#3ecf8e]' : 'text-[#f0ece5]'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              
              <div className="flex items-center space-x-8 pt-8 border-t border-[#1f1f23]">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8a8a8e] hover:text-[#f0ece5] transition-colors"
                >
                  <GitHubIcon />
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8a8a8e] hover:text-[#f0ece5] transition-colors"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
