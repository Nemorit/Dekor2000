import React from 'react';

const ServicesPage: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Hizmetlerimiz</h1>
      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
        Dekor 2000 olarak ev, ofis ve ticari alanlarınız için özel tasarlanmış mermer ve doğal taş uygulamaları sunuyoruz.
        Her projeye özgün bir yaklaşımla, hayalinizdeki yaşam alanlarını gerçeğe dönüştürüyoruz.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3" 
            alt="Mermer Uygulamaları" 
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-3">Mermer Uygulamaları</h2>
            <p className="text-gray-600 mb-4">
              İç ve dış mekanlarda mermer uygulamaları ile yaşam alanlarınıza estetik ve şıklık katıyoruz. Mutfak tezgahları, banyo, zemin kaplamaları ve özel tasarım mermer ürünleri sunuyoruz.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                <span className="text-sm">Mutfak Tezgahları</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                <span className="text-sm">Banyo Uygulamaları</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                <span className="text-sm">Zemin Kaplamaları</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                <span className="text-sm">Özel Tasarım Mermer Ürünleri</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1531112998834-7dca0038b658?ixlib=rb-4.0.3" 
            alt="Spa Tesisleri" 
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-3">Spa & Wellness Tesisleri</h2>
            <p className="text-gray-600 mb-4">
              Lüks spa ve wellness tesisleri için özel tasarım ve uygulama hizmetleri sunuyoruz. Modern ve ferahlatıcı atmosferler yaratarak, misafirlerinize unutulmaz deneyimler sunuyoruz.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                <span className="text-sm">Türk Hamamı Tasarımı</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                <span className="text-sm">Sauna & Buhar Odaları</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                <span className="text-sm">Masaj & Terapi Alanları</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                <span className="text-sm">Havuz & Jakuzi Tasarımları</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?ixlib=rb-4.0.3" 
            alt="İç Mekan Tasarımı" 
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-3">İç Mekan Tasarımı</h2>
            <p className="text-gray-600 mb-4">
              Eviniz veya işyeriniz için estetik ve fonksiyonel iç mekan tasarım hizmetleri sunuyoruz. Doğal taş ve mermer ürünlerin şıklığını mekanınıza taşıyoruz.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                <span className="text-sm">Ev İç Mekan Tasarımı</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                <span className="text-sm">Ofis & Ticari Alan Tasarımı</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                <span className="text-sm">Mobilya & Aksesuar Seçimi</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                <span className="text-sm">Aydınlatma Çözümleri</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3" 
            alt="Dış Cephe Uygulamaları" 
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-3">Dış Cephe Uygulamaları</h2>
            <p className="text-gray-600 mb-4">
              Binanızın dış cephesine estetik ve dayanıklılık katan doğal taş uygulamaları sunuyoruz. Çevre şartlarına dayanıklı ve uzun ömürlü çözümlerle yapınıza değer katıyoruz.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                <span className="text-sm">Doğal Taş Cephe Kaplamaları</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                <span className="text-sm">Mermer Sütunlar</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                <span className="text-sm">Bahçe & Peyzaj Uygulamaları</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                <span className="text-sm">Havuz Kenarı Kaplamaları</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1604709178681-82325c04f8bd?ixlib=rb-4.0.3" 
            alt="Özel Üretim" 
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-3">Özel Üretim Çözümler</h2>
            <p className="text-gray-600 mb-4">
              Hayalinizdeki özel tasarımları gerçeğe dönüştürüyoruz. Kişiye özel mermer ve doğal taş ürünler, mobilyalar ve dekoratif objeler üretiyoruz.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                <span className="text-sm">Özel Tasarım Mermer Mobilya</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                <span className="text-sm">Dekoratif Mermer Objeler</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                <span className="text-sm">Logo & Marka Aplikasyonları</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                <span className="text-sm">Kişiselleştirilmiş Ürünler</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3" 
            alt="Danışmanlık Hizmetleri" 
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-3">Danışmanlık Hizmetleri</h2>
            <p className="text-gray-600 mb-4">
              Projenize en uygun malzeme seçimi ve uygulama tekniği konusunda uzman danışmanlık hizmeti sunuyoruz. Bütçenize uygun en iyi çözümleri buluyoruz.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                <span className="text-sm">Malzeme Seçimi</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                <span className="text-sm">Renk & Desen Danışmanlığı</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                <span className="text-sm">Bütçe Planlaması</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                <span className="text-sm">Bakım & Onarım Tavsiyeleri</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-16 bg-gray-50 p-8 rounded-xl">
        <h2 className="text-2xl font-semibold mb-6 text-center">Hizmet Sürecimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
            <h3 className="font-semibold mb-2">Keşif & Planlama</h3>
            <p className="text-sm text-gray-600">
              Mekanınızı ziyaret ederek ihtiyaçlarınızı belirliyor ve detaylı bir plan oluşturuyoruz.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
            <h3 className="font-semibold mb-2">Tasarım & Malzeme Seçimi</h3>
            <p className="text-sm text-gray-600">
              Projenize özel tasarım ve en uygun malzemeleri sizinle birlikte belirliyoruz.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
            <h3 className="font-semibold mb-2">Uygulama</h3>
            <p className="text-sm text-gray-600">
              Uzman ekibimizle projenizi plana uygun şekilde ve zamanında tamamlıyoruz.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">4</div>
            <h3 className="font-semibold mb-2">Teslim & Bakım</h3>
            <p className="text-sm text-gray-600">
              Projenizi teslim ediyor ve uzun ömürlü kullanım için bakım tavsiyeleri sunuyoruz.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Hizmetlerimiz Hakkında Daha Fazla Bilgi Alın</h2>
        <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
          Projeniz veya sorularınız için bizimle iletişime geçebilirsiniz. Size en uygun çözümleri sunmak için buradayız.
        </p>
        <a 
          href="/iletisim" 
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          İletişime Geçin
        </a>
      </div>
    </section>
  );
};

export default ServicesPage;
