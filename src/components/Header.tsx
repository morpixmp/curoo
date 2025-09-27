import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Heart } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-2 px-4 animate-gradient-x">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} className="animate-pulse" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} className="animate-pulse" />
              <span>info@healinghands.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="animate-pulse">🚨 24/7 Emergency Care Available</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-2xl py-2 border-b border-purple-100' : 'bg-white/80 backdrop-blur-md py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3 group">
              <div className="relative w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Heart className="text-white animate-pulse" size={20} />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 rounded-full animate-ping opacity-20"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">Healing Hands</h1>
                <p className="text-sm text-gray-600 font-medium">Medical Center</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="relative text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="relative text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="relative text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium group"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection('doctors')}
                className="relative text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium group"
              >
                Doctors
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="relative text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            </nav>

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('appointment')}
              className="hidden md:block relative bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white px-6 py-3 rounded-full hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 font-medium transform hover:scale-105 overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative">Book Appointment</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 hover:text-blue-600 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} className="transform rotate-180 transition-transform duration-300" /> : <Menu size={24} className="transform transition-transform duration-300" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-purple-200 animate-slideDown">
              <nav className="flex flex-col space-y-4 pt-4">
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium text-left transform hover:translate-x-2"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium text-left transform hover:translate-x-2"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium text-left transform hover:translate-x-2"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('doctors')}
                  className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium text-left transform hover:translate-x-2"
                >
                  Doctors
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium text-left transform hover:translate-x-2"
                >
                  Contact
                </button>
                <button
                  onClick={() => scrollToSection('appointment')}
                  className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-medium text-left transform hover:scale-105"
                >
                  Book Appointment
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;