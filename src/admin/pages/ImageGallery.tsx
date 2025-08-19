import React, { useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import { Image, Trash2, Upload, Search } from 'lucide-react';

interface ImageItem {
  id: number;
  name: string;
  src: string;
  category: string;
  uploadDate: string;
  size: string;
}

// Örnek veriler
const sampleImages: ImageItem[] = [
  {
    id: 1,
    name: 'mermer-tasarim-1.jpg',
    src: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3',
    category: 'Mermer',
    uploadDate: '15.05.2023',
    size: '2.4 MB'
  },
  {
    id: 2,
    name: 'spa-merkezi-3.jpg',
    src: 'https://images.unsplash.com/photo-1531112998834-7dca0038b658?ixlib=rb-4.0.3',
    category: 'Spa',
    uploadDate: '23.06.2023',
    size: '1.8 MB'
  },
  {
    id: 3,
    name: 'dis-mekan-4.jpg',
    src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3',
    category: 'Dış Mekan',
    uploadDate: '10.07.2023',
    size: '3.2 MB'
  },
  {
    id: 4,
    name: 'banyo-tasarim-2.jpg',
    src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3',
    category: 'Banyo',
    uploadDate: '05.08.2023',
    size: '1.5 MB'
  },
  {
    id: 5,
    name: 'mermer-detay-7.jpg',
    src: 'https://images.unsplash.com/photo-1634979149798-e9a118734e93?ixlib=rb-4.0.3',
    category: 'Mermer',
    uploadDate: '18.09.2023',
    size: '2.1 MB'
  },
  {
    id: 6,
    name: 'wellness-spa-6.jpg',
    src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3',
    category: 'Spa',
    uploadDate: '27.10.2023',
    size: '2.7 MB'
  }
];

const ImageGallery: React.FC = () => {
  const [images, setImages] = useState<ImageItem[]>(sampleImages);
  const [searchTerm, setSearchTerm] = useState('');
  const [dragActive, setDragActive] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Tümü');

  const categories = ['Tümü', 'Mermer', 'Spa', 'Dış Mekan', 'Banyo'];
  
  // Filtreleme fonksiyonu
  const filteredImages = images.filter(image => {
    const matchesSearch = image.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Tümü' || image.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDelete = (id: number) => {
    if (window.confirm('Bu görseli silmek istediğinizden emin misiniz?')) {
      setImages(prevImages => prevImages.filter(img => img.id !== id));
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    // Gerçek uygulamada burada dosya yükleme işlemleri yapılacak
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // Örnek olarak yeni bir görsel ekleyelim
      const file = e.dataTransfer.files[0];
      
      const newImage: ImageItem = {
        id: images.length + 1,
        name: file.name,
        src: URL.createObjectURL(file), // Gerçek uygulamada buraya backend'den dönen URL gelecek
        category: 'Diğer',
        uploadDate: new Date().toLocaleDateString('tr-TR'),
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`
      };
      
      setImages(prevImages => [...prevImages, newImage]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Gerçek uygulamada burada dosya yükleme işlemleri yapılacak
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      const newImage: ImageItem = {
        id: images.length + 1,
        name: file.name,
        src: URL.createObjectURL(file), // Gerçek uygulamada buraya backend'den dönen URL gelecek
        category: 'Diğer',
        uploadDate: new Date().toLocaleDateString('tr-TR'),
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`
      };
      
      setImages(prevImages => [...prevImages, newImage]);
    }
  };

  return (
    <AdminLayout title="Görsel Yönetimi">
      <div className="mb-6 flex flex-col md:flex-row gap-4 justify-between">
        <div className="relative flex-1">
          <Search className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" size={18} />
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Görsel ara..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex space-x-2">
          <select
            className="px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          
          <label className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors flex items-center gap-2 cursor-pointer">
            <Upload size={18} />
            <span>Yükle</span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
              multiple
            />
          </label>
        </div>
      </div>

      {/* Sürükle Bırak Alanı */}
      <div
        className={`border-2 border-dashed rounded-lg p-8 mb-6 text-center ${
          dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <Image className="mx-auto mb-3 text-gray-400" size={48} />
        <p className="text-gray-500">Görselleri buraya sürükleyip bırakın veya</p>
        <label className="mt-2 inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors cursor-pointer">
          Bilgisayardan Seç
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
            multiple
          />
        </label>
      </div>

      {/* Görsel Galerisi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map(image => (
          <div key={image.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden group">
            <div className="aspect-square relative overflow-hidden">
              <img
                src={image.src}
                alt={image.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                <button
                  onClick={() => handleDelete(image.id)}
                  className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
            <div className="p-3">
              <h3 className="text-sm font-medium truncate" title={image.name}>{image.name}</h3>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{image.category}</span>
                <span>{image.uploadDate}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredImages.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-500">Görsel bulunamadı.</p>
        </div>
      )}
    </AdminLayout>
  );
};

export default ImageGallery;
