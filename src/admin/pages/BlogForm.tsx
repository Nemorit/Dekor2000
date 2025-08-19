import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminLayout from '../components/AdminLayout';
import { Save, X, Image as ImageIcon } from 'lucide-react';

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
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor massa at libero tincidunt, vel ultrices nisi tincidunt. Duis facilisis magna vel lectus interdum, in commodo mi facilisis. Vivamus fermentum libero nec tellus congue, at ultricies urna facilisis. Phasellus sagittis nisi in velit aliquam, vel tempor velit aliquam.\n\nVestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Maecenas vel lacus nec arcu pellentesque lacinia. Quisque eget eros eu felis pulvinar sollicitudin. Cras fringilla justo id ligula commodo, vitae ultricies justo aliquam. Nullam bibendum venenatis massa, ut hendrerit nisi sodales ac.',
    category: 'Mermer',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3',
    author: 'Ahmet Yılmaz',
    publishDate: '15.05.2023',
    status: 'published'
  }
  // Diğer bloglar...
];

const BlogForm: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isEditMode = id !== 'new';
  
  const [formData, setFormData] = useState<Partial<BlogPost>>({
    title: '',
    summary: '',
    content: '',
    category: 'Mermer',
    image: '',
    author: 'Admin',
    status: 'draft'
  });
  
  const [errors, setErrors] = useState<Partial<Record<keyof BlogPost, string>>>({});
  const [imagePreview, setImagePreview] = useState<string>('');
  
  const categories = ['Mermer', 'Spa', 'Mimari', 'İç Mekan', 'Dış Mekan'];

  useEffect(() => {
    // Edit modu ise blog verisini yükle
    if (isEditMode && id) {
      const blogId = parseInt(id, 10);
      const blog = sampleBlogs.find(blog => blog.id === blogId);
      
      if (blog) {
        setFormData(blog);
        setImagePreview(blog.image);
      } else {
        // Blog bulunamadı, listeye yönlendir
        navigate('/admin/blogs');
      }
    }
  }, [isEditMode, id, navigate]);

  const validateForm = () => {
    const newErrors: Partial<Record<keyof BlogPost, string>> = {};
    
    if (!formData.title) newErrors.title = 'Başlık gereklidir';
    if (!formData.summary) newErrors.summary = 'Özet gereklidir';
    if (!formData.content) newErrors.content = 'İçerik gereklidir';
    if (!formData.image && !imagePreview) newErrors.image = 'Görsel gereklidir';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Gerçek uygulamada burada API'ye resim yükleme yapılacak
      // Şimdilik yerel bir URL oluşturuyoruz
      const imageUrl = URL.createObjectURL(file);
      
      setFormData(prev => ({ ...prev, image: imageUrl }));
      setImagePreview(imageUrl);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    // Gerçek uygulamada burada API'ye kayıt işlemi yapılacak
    console.log('Form data submitted:', formData);
    
    // Başarılı kayıttan sonra blog listesine yönlendir
    navigate('/admin/blogs');
  };

  return (
    <AdminLayout title={isEditMode ? 'Blog Yazısını Düzenle' : 'Yeni Blog Yazısı'}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sol Kolon - Ana Detaylar */}
          <div className="md:col-span-2 space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Başlık
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.title ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.title && <p className="mt-1 text-sm text-red-500">{errors.title}</p>}
            </div>
            
            <div>
              <label htmlFor="summary" className="block text-sm font-medium text-gray-700 mb-1">
                Özet
              </label>
              <textarea
                id="summary"
                name="summary"
                rows={2}
                value={formData.summary}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.summary ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.summary && <p className="mt-1 text-sm text-red-500">{errors.summary}</p>}
            </div>
            
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                İçerik
              </label>
              <textarea
                id="content"
                name="content"
                rows={12}
                value={formData.content}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.content ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.content && <p className="mt-1 text-sm text-red-500">{errors.content}</p>}
              <p className="mt-1 text-xs text-gray-500">
                Markdown formatı desteklenmektedir.
              </p>
            </div>
          </div>
          
          {/* Sağ Kolon - Görseller ve Meta Bilgiler */}
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-medium mb-3">Yayın Bilgileri</h3>
              
              <div className="mb-3">
                <label htmlFor="author" className="block text-sm text-gray-600 mb-1">
                  Yazar
                </label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="category" className="block text-sm text-gray-600 mb-1">
                  Kategori
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div className="mb-3">
                <label htmlFor="status" className="block text-sm text-gray-600 mb-1">
                  Durum
                </label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                >
                  <option value="published">Yayınla</option>
                  <option value="draft">Taslak Olarak Kaydet</option>
                </select>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-medium mb-3">Kapak Görseli</h3>
              
              {imagePreview ? (
                <div className="mb-3">
                  <div className="relative aspect-video rounded-md overflow-hidden">
                    <img 
                      src={imagePreview} 
                      alt="Kapak görseli önizleme" 
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setImagePreview('');
                        setFormData(prev => ({ ...prev, image: '' }));
                      }}
                      className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                    >
                      <X size={14} />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="mb-3">
                  <div className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center">
                    <ImageIcon className="mb-2 text-gray-400" size={36} />
                    <p className="text-sm text-gray-500 text-center mb-2">
                      Kapak görseli yükleyin veya sürükleyip bırakın
                    </p>
                    <label className="inline-block px-3 py-2 bg-gray-100 text-gray-700 text-sm rounded-md hover:bg-gray-200 cursor-pointer">
                      Bilgisayardan Seç
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </label>
                    {errors.image && <p className="mt-2 text-sm text-red-500">{errors.image}</p>}
                  </div>
                </div>
              )}
              
              <p className="text-xs text-gray-500">
                Önerilen boyut: 1200x630px, maksimum boyut: 2MB
              </p>
            </div>
          </div>
        </div>
        
        {/* Form Kontrolleri */}
        <div className="flex justify-end space-x-3 pt-4 border-t">
          <button
            type="button"
            onClick={() => navigate('/admin/blogs')}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            İptal
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
          >
            <Save size={18} />
            <span>{isEditMode ? 'Güncelle' : 'Kaydet'}</span>
          </button>
        </div>
      </form>
    </AdminLayout>
  );
};

export default BlogForm;
