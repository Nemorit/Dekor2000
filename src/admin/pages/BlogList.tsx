import React, { useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import { Plus, Edit2, Trash2, ChevronRight, Clock, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  summary: string;
  content: string;
  category: string;
  image: string;
  author: string;
  publishDate: string;
  status: 'published' | 'draft';
}

// Örnek blog verileri
const sampleBlogs: BlogPost[] = [
  {
    id: 1,
    title: 'Mermerin Modern Mimarideki Yeri',
    summary: 'Günümüz mimarisinde mermer kullanımının inceliklerini ve yaratıcı uygulamaları ele alıyoruz.',
    content: 'Lorem ipsum dolor sit amet...',
    category: 'Mermer',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3',
    author: 'Ahmet Yılmaz',
    publishDate: '15.05.2023',
    status: 'published'
  },
  {
    id: 2,
    title: 'Spa Tesislerinde Tasarım Trendleri',
    summary: 'Spa ve wellness merkezleri için 2023 yılının öne çıkan tasarım trendlerini inceliyoruz.',
    content: 'Lorem ipsum dolor sit amet...',
    category: 'Spa',
    image: 'https://images.unsplash.com/photo-1531112998834-7dca0038b658?ixlib=rb-4.0.3',
    author: 'Zeynep Kaya',
    publishDate: '23.06.2023',
    status: 'published'
  },
  {
    id: 3,
    title: 'Doğal Taş Seçimi Nasıl Yapılmalı?',
    summary: 'Projeleriniz için doğru doğal taş seçimi yapmanın püf noktalarını paylaşıyoruz.',
    content: 'Lorem ipsum dolor sit amet...',
    category: 'Mermer',
    image: 'https://images.unsplash.com/photo-1634979149798-e9a118734e93?ixlib=rb-4.0.3',
    author: 'Mehmet Demir',
    publishDate: '10.07.2023',
    status: 'published'
  },
  {
    id: 4,
    title: 'Sürdürülebilir Mimari ve Doğal Malzemeler',
    summary: 'Çevre dostu yapıların inşasında mermer ve doğal taş kullanımının avantajları.',
    content: 'Lorem ipsum dolor sit amet...',
    category: 'Mimari',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3',
    author: 'Ayşe Yıldız',
    publishDate: '05.08.2023',
    status: 'draft'
  }
];

const BlogList: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>(sampleBlogs);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tümü');

  const categories = ['Tümü', 'Mermer', 'Spa', 'Mimari', 'İç Mekan'];

  // Filtreleme fonksiyonu
  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Tümü' || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDelete = (id: number) => {
    if (window.confirm('Bu blog yazısını silmek istediğinizden emin misiniz?')) {
      setBlogs(prevBlogs => prevBlogs.filter(blog => blog.id !== id));
    }
  };

  return (
    <AdminLayout title="Blog Yönetimi">
      <div className="mb-6 flex flex-col md:flex-row gap-4 justify-between">
        <div className="relative flex-1">
          <Search className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" size={18} />
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Blog yazılarında ara..."
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
          
          <Link
            to="/admin/blog/new"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors flex items-center gap-2"
          >
            <Plus size={18} />
            <span>Yeni Yazı</span>
          </Link>
        </div>
      </div>

      {/* Blog Listesi */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="grid grid-cols-12 bg-gray-50 border-b border-gray-200 p-4 font-medium text-sm text-gray-600">
          <div className="col-span-5">Başlık</div>
          <div className="col-span-2">Kategori</div>
          <div className="col-span-2">Tarih</div>
          <div className="col-span-1">Durum</div>
          <div className="col-span-2 text-right">İşlemler</div>
        </div>

        {filteredBlogs.map(blog => (
          <div key={blog.id} className="grid grid-cols-12 border-b border-gray-100 last:border-0 p-4 items-center hover:bg-gray-50">
            <div className="col-span-5">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded overflow-hidden flex-shrink-0 mr-3">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-medium">{blog.title}</h3>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-1">{blog.summary}</p>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-700">{blog.category}</span>
            </div>
            <div className="col-span-2 flex items-center text-sm text-gray-500">
              <Clock size={14} className="mr-1" />
              {blog.publishDate}
            </div>
            <div className="col-span-1">
              <span className={`inline-block px-2 py-1 rounded text-xs ${
                blog.status === 'published' 
                ? 'bg-green-100 text-green-700' 
                : 'bg-amber-100 text-amber-700'
              }`}>
                {blog.status === 'published' ? 'Yayında' : 'Taslak'}
              </span>
            </div>
            <div className="col-span-2 flex justify-end space-x-2">
              <button 
                onClick={() => {/* Edit işlemi */}}
                className="p-2 text-blue-500 hover:bg-blue-50 rounded-full transition-colors"
              >
                <Edit2 size={16} />
              </button>
              <button 
                onClick={() => handleDelete(blog.id)}
                className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
              >
                <Trash2 size={16} />
              </button>
              <button className="p-2 text-gray-400 hover:bg-gray-50 rounded-full transition-colors">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredBlogs.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-500">Blog yazısı bulunamadı.</p>
        </div>
      )}
    </AdminLayout>
  );
};

export default BlogList;
