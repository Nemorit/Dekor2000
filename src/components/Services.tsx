import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { services } from '../data/mockData';

const Services: React.FC = () => {
  const serviceIcons = {
    mermer: '🏛️',
    spa: '🧘‍♀️', 
    sauna: '🔥',
    havuz: '🏊‍♂️',
    spor: '🏋️‍♂️'
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            20 yıllık deneyimimizle mermer işçiliğinden spa tesislerine, 
            lüks yaşam alanları yaratıyoruz. Her projede kalite ve estetik bir arada.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Service Icon & Title */}
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">
                  {serviceIcons[service.category]}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {service.features.map((feature, index) => (
                  <div key={`${service.id}-feature-${index}`} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className="group/btn w-full bg-gradient-to-r from-red-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-700 hover:to-blue-700 transition-all transform hover:scale-105">
                <span className="flex items-center justify-center">
                  Detaylı Bilgi Al
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* Additional Services Section */}
        <div className="mt-20 bg-white rounded-2xl p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Neden Dekor 2000?
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Sektördeki deneyimimiz ve müşteri odaklı yaklaşımımızla fark yaratıyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">20+</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Yıllık Deneyim</h4>
              <p className="text-gray-600 text-sm">Sektörel uzmanlık ve tecrübe</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">✓</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Kalite Garantisi</h4>
              <p className="text-gray-600 text-sm">Premium malzeme ve işçilik</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Hızlı Teslimat</h4>
              <p className="text-gray-600 text-sm">Zamanında proje teslimi</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💎</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Premium Hizmet</h4>
              <p className="text-gray-600 text-sm">Lüks ve konfor odaklı</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
