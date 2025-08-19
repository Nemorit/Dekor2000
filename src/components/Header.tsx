import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

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

  const navItems = [
    { name: 'Ana Sayfa', href: '#home' },
    { name: 'Hakkımızda', href: '#about' },
    { name: 'Hizmetlerimiz', href: '#services' },
    { name: 'Projelerimiz', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'İletişim', href: '#contact' }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-900 to-red-900 text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>+90 262 123 45 67</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>info@dekor2000.com.tr</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>20+ Yıllık Deneyim | 500+ Başarılı Proje</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div>
                <img
                  src="/src/assets/dekor2000logo4848.png"
                  alt="Dekor 2000"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-lg object-cover"
                />
              </div>
              <div>
                <h1 className={`text-2xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                  DEKOR 2000
                </h1>
                <p className={`text-sm ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}>
                  Premium Mermer & Spa Uzmanı
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors hover:text-red-600 ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <button className="bg-gradient-to-r from-red-600 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all">
                Teklif Al
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 rounded-md ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 font-medium hover:text-red-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full bg-gradient-to-r from-red-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all">
                Teklif Al
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
