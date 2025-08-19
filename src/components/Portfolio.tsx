import React, { useState } from 'react';
import { ExternalLink, Calendar, MapPin, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data/mockData';

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { id: 'all', name: 'Tüm Projeler' },
    { id: 'mermer', name: 'Mermer İşçiliği' },
    { id: 'spa', name: 'Spa & Wellness' },
    { id: 'sauna', name: 'Sauna & Hamam' },
    { id: 'havuz', name: 'Havuz Projeleri' },
    { id: 'spor', name: 'Spor Tesisleri' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const selectedProjectData = selectedProject 
    ? projects.find(p => p.id === selectedProject)
    : null;

  const nextImage = () => {
    if (selectedProjectData && selectedProjectData.images.length > 1) {
      setCurrentImageIndex((prev) => 
        (prev + 1) % selectedProjectData.images.length
      );
    }
  };

  const prevImage = () => {
    if (selectedProjectData && selectedProjectData.images.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProjectData.images.length - 1 : prev - 1
      );
    }
  };

  const categoryColors = {
    mermer: 'from-gray-600 to-gray-800',
    spa: 'from-blue-600 to-teal-600',
    sauna: 'from-red-600 to-orange-600',
    havuz: 'from-blue-400 to-blue-600',
    spor: 'from-green-600 to-green-800'
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Projelerimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            500+ başarılı projemizden seçilmiş örnekler. 
            Her projede kalite, estetik ve müşteri memnuniyeti önceliğimiz.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-red-600 to-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => {
                setSelectedProject(project.id);
                setCurrentImageIndex(0);
              }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Category Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-semibold bg-gradient-to-r ${categoryColors[project.category]}`}>
                  {categories.find(cat => cat.id === project.category)?.name}
                </div>

                {/* View Project Icon */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 text-gray-800" />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Project Details */}
                <div className="space-y-2">
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{project.completedDate}</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <User className="w-4 h-4 mr-2" />
                    <span>{project.client}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && selectedProjectData && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="relative">
                {/* Image Gallery */}
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={selectedProjectData.images[currentImageIndex]}
                    alt={selectedProjectData.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Navigation Arrows */}
                  {selectedProjectData.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          prevImage();
                        }}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5 text-gray-800" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage();
                        }}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                      >
                        <ChevronRight className="w-5 h-5 text-gray-800" />
                      </button>
                    </>
                  )}

                  {/* Image Indicators */}
                  {selectedProjectData.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {selectedProjectData.images.map((_, imageIndex) => (
                        <button
                          key={`image-indicator-${imageIndex}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex(imageIndex);
                          }}
                          className={`w-2 h-2 rounded-full transition-all ${
                            imageIndex === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {selectedProjectData.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {selectedProjectData.description}
                </p>

                {/* Project Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Konum</h4>
                    <p className="text-gray-600">{selectedProjectData.location}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Tamamlanma</h4>
                    <p className="text-gray-600">{selectedProjectData.completedDate}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Müşteri</h4>
                    <p className="text-gray-600">{selectedProjectData.client}</p>
                  </div>
                </div>

                {/* Project Features */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Proje Özellikleri</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedProjectData.features.map((feature, featureIndex) => (
                      <div key={`feature-${featureIndex}`} className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-red-600 to-blue-600 rounded-full mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8 pt-6 border-t">
                  <button className="w-full bg-gradient-to-r from-red-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-blue-700 transition-all">
                    Benzer Proje İçin Teklif Al
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
