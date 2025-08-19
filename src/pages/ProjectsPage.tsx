import React, { useState } from 'react';

const ProjectsPage: React.FC = () => {
  // Örnek proje verileri
  const projects = [
    {
      id: 1,
      title: 'Lüks Villa Renovasyonu',
      category: 'Konut',
      location: 'Bodrum, Muğla',
      image: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-4.0.3',
      description: 'Bodrumda bulunan bir villa için özel tasarım mermer ve doğal taş uygulamaları. Banyo, mutfak ve zemin kaplamaları tamamen yenilendi.',
      date: 'Mart 2023'
    },
    {
      id: 2,
      title: 'Otel Spa Merkezi',
      category: 'Spa',
      location: 'Antalya',
      image: 'https://images.unsplash.com/photo-1531112998834-7dca0038b658?ixlib=rb-4.0.3',
      description: '5 yıldızlı otel için eksiksiz bir spa ve wellness merkezi tasarımı ve uygulaması. Türk hamamı, sauna ve masaj odaları içermektedir.',
      date: 'Ekim 2022'
    },
    {
      id: 3,
      title: 'Ofis Binası Lobby',
      category: 'Ticari',
      location: 'İstanbul',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3',
      description: 'Levent\'te bulunan ofis binasının giriş lobisi için özel tasarım mermer zemin ve duvar kaplamaları.',
      date: 'Temmuz 2022'
    },
    {
      id: 4,
      title: 'Modern Apartman Dairesi',
      category: 'Konut',
      location: 'İzmir',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3',
      description: 'İzmir\'de bulunan lüks konut projesi için mutfak, banyo ve salon uygulamaları. Özel tasarım mermer masa dahil edilmiştir.',
      date: 'Mayıs 2022'
    },
    {
      id: 5,
      title: 'Restoran Renovasyonu',
      category: 'Ticari',
      location: 'İstanbul',
      image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3',
      description: 'Nişantaşı\'nda bulunan bir restoran için iç mekan tasarımı ve doğal taş uygulamaları. Bar ve açık mutfak alanı dahil edilmiştir.',
      date: 'Şubat 2022'
    },
    {
      id: 6,
      title: 'Butik Otel',
      category: 'Turizm',
      location: 'Kapadokya, Nevşehir',
      image: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?ixlib=rb-4.0.3',
      description: 'Kapadokya\'da bulunan butik otel için özel taş işleme teknikleri kullanılarak yapılan renovasyon projesi.',
      date: 'Aralık 2021'
    },
    {
      id: 7,
      title: 'Yalı Renovasyonu',
      category: 'Konut',
      location: 'Bebek, İstanbul',
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3',
      description: 'Boğaz kıyısındaki tarihi yalı için özel restorasyon teknikleri kullanılarak yapılan mermer ve taş uygulamaları.',
      date: 'Eylül 2021'
    },
    {
      id: 8,
      title: 'AVM Ortak Alanları',
      category: 'Ticari',
      location: 'Ankara',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3',
      description: 'Ankara\'da bulunan alışveriş merkezi için zemin kaplamaları ve dekoratif mermer uygulamaları.',
      date: 'Haziran 2021'
    },
  ];

  // Kategori filtreleme için
  const [activeCategory, setActiveCategory] = useState('Tümü');
  const categories = ['Tümü', 'Konut', 'Ticari', 'Spa', 'Turizm'];

  const filteredProjects = activeCategory === 'Tümü' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Projelerimiz</h1>
      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
        Dekor 2000 olarak tamamladığımız bazı projelerimizi inceleyebilirsiniz. Konut, ticari alanlar, spa merkezleri ve daha fazlası için özel tasarım çözümlerimiz.
      </p>
      
      {/* Kategori Filtreleme */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full ${
              activeCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            } transition-colors`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Projeler Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-blue-500">{project.category}</span>
                <span className="text-xs text-gray-500">{project.date}</span>
              </div>
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-3 text-sm">{project.description}</p>
              <div className="flex items-center text-sm text-gray-500">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {project.location}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* CTA Bölümü */}
      <div className="mt-16 bg-gray-50 p-8 rounded-xl text-center">
        <h2 className="text-2xl font-semibold mb-4">Sizin Projeniz İçin Hazırız</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Hayalinizdeki projeyi gerçekleştirmek için bizimle iletişime geçin. Ücretsiz keşif ve fiyat teklifi sunuyoruz.
        </p>
        <a 
          href="/iletisim" 
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          Projeniz İçin Teklif Alın
        </a>
      </div>
    </section>
  );
};

export default ProjectsPage;
