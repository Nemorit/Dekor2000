import React, { useEffect, useState } from 'react';
import { ChevronRight, Award, Users, Building2 } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop",
      title: "Premium Mermer İşçiliği",
      subtitle: "20+ Yıllık Deneyimimizle Lüks Yaşam Alanları Yaratıyoruz"
    },
    {
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop",
      title: "Spa & Wellness Uzmanı",
      subtitle: "Modern Spa Merkezleri ve Termal Tesisler İnşa Ediyoruz"
    },
    {
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=1920&h=1080&fit=crop",
      title: "Geleneksel Hamam Sanatı",
      subtitle: "Türk Hamamı Geleneğini Modern Teknolojiyle Buluşturuyoruz"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const stats = [
    { icon: <Building2 className="w-8 h-8" />, number: "500+", text: "Tamamlanan Proje" },
    { icon: <Users className="w-8 h-8" />, number: "250+", text: "Mutlu Müşteri" },
    { icon: <Award className="w-8 h-8" />, number: "20+", text: "Yıl Deneyim" }
  ];

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center bg-fixed"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            {/* Main Content */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="block">{heroSlides[currentSlide].title}</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                {heroSlides[currentSlide].subtitle}
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="group bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-red-700 hover:to-red-800 transition-all transform hover:scale-105 shadow-xl">
                  <span className="flex items-center justify-center">
                    Projelerimizi İnceleyin
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all shadow-xl">
                  Ücretsiz Teklif Al
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center space-x-4 text-white">
                  <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-3xl font-bold">{stat.number}</div>
                    <div className="text-gray-300 text-sm">{stat.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 text-white animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm">Aşağı Kaydırın</span>
          <ChevronRight className="w-5 h-5 rotate-90" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
