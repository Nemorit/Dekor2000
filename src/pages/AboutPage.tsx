import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Hakkımızda</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <img
            src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3"
            alt="Dekor 2000 Hakkında"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">20 Yıllık Tecrübe</h2>
          <p className="text-gray-600 mb-4">
            2000 yılında kurulan firmamız, mermer ve doğal taş sektöründe 20 yılı aşkın tecrübesiyle müşterilerine hizmet vermektedir. Ev, ofis ve ticari mekanlar için özel tasarımlar sunarak yaşam alanlarınıza değer katıyoruz.
          </p>
          <p className="text-gray-600 mb-4">
            Uzman kadromuz ve yenilikçi yaklaşımımızla, mermer ve doğal taş ürünlerinin tasarımından uygulamasına kadar tüm süreçlerde kaliteli hizmet sunmayı ilke edinmiş bulunmaktayız.
          </p>
          <p className="text-gray-600 mb-6">
            Modern üretim tesislerimiz ve tecrübeli ekibimizle, projelerinizi en ince detayına kadar planlayarak, zamanında ve bütçenize uygun şekilde hayata geçiriyoruz.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Misyonumuz</h3>
              <p className="text-sm text-gray-600">
                Kaliteli ürün ve hizmet sunarak müşterilerimizin yaşam kalitesini artırmak ve sektörde öncü bir marka olmak.
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Vizyonumuz</h3>
              <p className="text-sm text-gray-600">
                Yenilikçi tasarım anlayışımız ve müşteri memnuniyeti odaklı çalışmalarımızla sektörde referans noktası olmak.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Değerlerimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold mb-3">Kalite</h3>
            <p className="text-gray-600">
              Her projede en kaliteli malzemeleri kullanarak, uzun ömürlü ve estetik çözümler sunuyoruz.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold mb-3">Müşteri Memnuniyeti</h3>
            <p className="text-gray-600">
              Müşterilerimizin beklentilerini karşılamak ve aşmak için her detayı titizlikle planlıyoruz.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold mb-3">Yenilikçilik</h3>
            <p className="text-gray-600">
              Sektördeki yenilikleri yakından takip ederek, modern tasarım anlayışıyla projelerimizi hayata geçiriyoruz.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Ekibimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3"
              alt="Ahmet Yılmaz"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="font-semibold">Ahmet Yılmaz</h3>
            <p className="text-sm text-gray-500">Kurucu / CEO</p>
          </div>
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3"
              alt="Ayşe Demir"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="font-semibold">Ayşe Demir</h3>
            <p className="text-sm text-gray-500">Tasarım Direktörü</p>
          </div>
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3"
              alt="Mehmet Kaya"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="font-semibold">Mehmet Kaya</h3>
            <p className="text-sm text-gray-500">Üretim Müdürü</p>
          </div>
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3"
              alt="Zeynep Aksoy"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="font-semibold">Zeynep Aksoy</h3>
            <p className="text-sm text-gray-500">Proje Yöneticisi</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
