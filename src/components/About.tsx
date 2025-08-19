import React from 'react';
import { Users, Award, Target, Heart } from 'lucide-react';
import { teamMembers, companyInfo } from '../data/mockData';

const About: React.FC = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Kalite",
      description: "En yüksek kalite standartlarında, premium malzemelerle çalışıyoruz."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Güven",
      description: "20+ yıllık deneyimimizle müşterilerimizin güvenini kazandık."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Hassasiyet",
      description: "Her detaya özen göstererek, mükemmel sonuçlar elde ediyoruz."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Memnuniyet",
      description: "Müşteri memnuniyeti bizim için her şeyden daha değerlidir."
    }
  ];

  const milestones = [
    { year: "2003", title: "Şirket Kuruluşu", description: "Dekor 2000 mermer işçiliği alanında kuruldu" },
    { year: "2008", title: "Spa Uzmanlığı", description: "Spa ve wellness merkezi projelerine odaklandık" },
    { year: "2012", title: "100. Proje", description: "100. başarılı projemizi tamamladık" },
    { year: "2018", title: "Premium Segment", description: "Lüks villa ve otel projelerine yoğunlaştık" },
    { year: "2024", title: "500+ Proje", description: "500'den fazla başarılı proje portföyümüz" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hakkımızda
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {companyInfo.experience} yıldır mermer işçiliği ve spa tesisleri alanında 
            lider konumdayız. Kalite ve güven ilkelerimizle Kocaeli ve çevresinde 
            {companyInfo.projectsCompleted}+ başarılı projeye imza attık.
          </p>
        </div>

        {/* Company Story */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Hikayemiz
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  2003 yılında kurulan Dekor 2000, İzmit merkezli bir aile şirketi olarak 
                  mermer işçiliği alanında faaliyet göstermeye başladı. Kurucu Mehmet Demir'in 
                  inşaat mühendisliği birikimi ve sektörel tecrübesiyle güçlü temeller üzerine inşa edildi.
                </p>
                <p>
                  Yıllar içinde spa ve wellness merkezi projelerine odaklanarak, bu alanda 
                  uzmanlaştık. Geleneksel Türk hamamı mimarisi ile modern spa teknolojilerini 
                  harmanlayan projelerimizle sektörde fark yaratmaya devam ediyoruz.
                </p>
                <p>
                  Bugün, 20+ yıllık deneyimimizle Kocaeli bölgesinin en güvenilir mermer ve 
                  spa uzmanı şirketi konumundayız. Premium kalite anlayışımızla her projede 
                  müşteri beklentilerini aşmayı hedefliyoruz.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-red-600 to-blue-600 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">{companyInfo.projectsCompleted}+</div>
                    <div className="text-sm opacity-90">Tamamlanan Proje</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">{companyInfo.happyClients}+</div>
                    <div className="text-sm opacity-90">Mutlu Müşteri</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">{companyInfo.experience}+</div>
                    <div className="text-sm opacity-90">Yıllık Deneyim</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">5</div>
                    <div className="text-sm opacity-90">Hizmet Alanı</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full opacity-20" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full opacity-30" />
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Değerlerimiz
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={value.title} className="text-center group">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center text-white bg-gradient-to-r ${
                  index === 0 ? 'from-red-500 to-red-600' :
                  index === 1 ? 'from-blue-500 to-blue-600' :
                  index === 2 ? 'from-green-500 to-green-600' :
                  'from-purple-500 to-purple-600'
                } group-hover:scale-110 transition-transform duration-300`}>
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Yolculuğumuz
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-600 to-blue-600 rounded-full" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-2xl font-bold text-red-600 mb-2">
                        {milestone.year}
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="w-6 h-6 bg-white border-4 border-red-600 rounded-full relative z-10" />
                  
                  <div className="w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Uzman Ekibimiz
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-center group">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-red-600 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {member.experience}
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h4>
                <div className="text-red-600 font-semibold mb-4">
                  {member.position}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
                
                <div className="mt-4 text-xs text-gray-500">
                  {member.experience} yıl deneyim
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-red-600 to-blue-600 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Deneyimli Ekibimizle Tanışın
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            20+ yıllık sektörel deneyimimiz ve uzman kadromuzla projeniz için 
            en iyi çözümleri sunmaya hazırız.
          </p>
          <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
            Ücretsiz Danışmanlık Al
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
