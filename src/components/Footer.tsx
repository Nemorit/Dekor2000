import React from 'react';
import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook, ChevronRight } from 'lucide-react';
import { companyInfo } from '../data/mockData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Ana Sayfa', href: '#home' },
    { name: 'Hakkımızda', href: '#about' },
    { name: 'Hizmetlerimiz', href: '#services' },
    { name: 'Projelerimiz', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'İletişim', href: '#contact' }
  ];

  const services = [
    'Premium Mermer İşçiliği',
    'Spa & Wellness Merkezleri',
    'Sauna ve Hamam Yapımı',
    'Havuz Projeleri',
    'Spor Tesisleri'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">D</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{companyInfo.name}</h3>
                  <p className="text-gray-400 text-sm">Premium Mermer & Spa Uzmanı</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {companyInfo.experience} yıllık deneyimimizle mermer işçiliği ve spa tesisleri alanında 
                Kocaeli'nin güvenilir çözüm ortağı. Kalite ve estetik bir arada.
              </p>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Bizi Takip Edin</h4>
              <div className="flex space-x-4">
                {companyInfo.socialMedia.instagram && (
                  <a
                    href={companyInfo.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                )}
                {companyInfo.socialMedia.linkedin && (
                  <a
                    href={companyInfo.socialMedia.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {companyInfo.socialMedia.facebook && (
                  <a
                    href={companyInfo.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Hızlı Erişim</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center text-gray-300 hover:text-white hover:translate-x-2 transition-all group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 group-hover:text-red-400" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Hizmetlerimiz</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="flex items-center text-gray-300 hover:text-white hover:translate-x-2 transition-all group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 group-hover:text-blue-400" />
                    <span className="text-sm">{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">İletişim Bilgileri</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm leading-relaxed">
                  {companyInfo.address.street}<br />
                  {companyInfo.address.city} {companyInfo.address.postal}<br />
                  {companyInfo.address.country}
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a
                  href={`tel:${companyInfo.contact.phone}`}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {companyInfo.contact.phone}
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400" />
                <a
                  href={`mailto:${companyInfo.contact.email}`}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {companyInfo.contact.email}
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h5 className="font-semibold mb-2 text-white">Çalışma Saatleri</h5>
              <div className="text-sm text-gray-300 space-y-1">
                <div>Pzt - Cum: 08:00 - 18:00</div>
                <div>Cumartesi: 09:00 - 17:00</div>
                <div>Pazar: Kapalı</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-1">Projelerimizden Haberdar Olun</h4>
              <p className="text-gray-400 text-sm">Yeni projelerimiz ve özel tekliflerimizden ilk siz haberdar olun.</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 md:w-80 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-red-500 text-white placeholder-gray-400"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-blue-600 rounded-r-lg font-semibold hover:from-red-700 hover:to-blue-700 transition-all">
                Abone Ol
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <div className="mb-2 md:mb-0">
              © {currentYear} {companyInfo.name}. Tüm hakları saklıdır.
            </div>
            <div className="flex space-x-6">
              <a href="/privacy" className="hover:text-white transition-colors">Gizlilik Politikası</a>
              <a href="/terms" className="hover:text-white transition-colors">Kullanım Şartları</a>
              <a href="/cookies" className="hover:text-white transition-colors">Çerez Politikası</a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-red-600 to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform z-40"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
