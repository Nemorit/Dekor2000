import React, { useState } from 'react';
import { Save, Edit2, Settings, Layout, Image as ImageIcon, Info, Phone } from 'lucide-react';

interface SectionData {
  id: string;
  title: string;
  description: string;
  isEditing: boolean;
  fields: {
    [key: string]: {
      type: 'text' | 'textarea' | 'image' | 'color';
      value: string;
      label: string;
    }
  };
}

const ContentManager: React.FC = () => {
  const [sections, setSections] = useState<SectionData[]>([
    {
      id: 'hero',
      title: 'Ana Sayfa Hero Bölümü',
      description: 'Ana sayfadaki büyük tanıtım bölümü',
      isEditing: false,
      fields: {
        title: {
          type: 'text',
          value: 'Modern Yaşam Alanlarının Lüks Dokunuşu',
          label: 'Başlık'
        },
        subtitle: {
          type: 'text',
          value: 'Evinize ve iş yerinize estetik ve kalite katacak özel tasarımlar',
          label: 'Alt Başlık'
        },
        backgroundImage: {
          type: 'image',
          value: 'https://images.unsplash.com/photo-1634979149798-e9a118734e93?ixlib=rb-4.0.3',
          label: 'Arkaplan Görseli'
        },
        buttonText: {
          type: 'text',
          value: 'Hizmetlerimizi Keşfedin',
          label: 'Buton Metni'
        },
        buttonColor: {
          type: 'color',
          value: '#1E40AF',
          label: 'Buton Rengi'
        }
      }
    },
    {
      id: 'about',
      title: 'Hakkımızda Bölümü',
      description: 'Şirket hakkında genel bilgiler',
      isEditing: false,
      fields: {
        title: {
          type: 'text',
          value: 'Dekor 2000 Hakkında',
          label: 'Başlık'
        },
        description: {
          type: 'textarea',
          value: '20 yılı aşkın tecrübemizle mermer ve doğal taş sektöründe öncü firmalardan biriyiz. Ev, ofis ve ticari mekanlar için özel tasarımlar sunarak yaşam alanlarınıza değer katıyoruz.',
          label: 'Açıklama'
        },
        image: {
          type: 'image',
          value: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3',
          label: 'Görsel'
        }
      }
    },
    {
      id: 'services',
      title: 'Hizmetlerimiz Bölümü',
      description: 'Sunulan hizmetlerin listesi',
      isEditing: false,
      fields: {
        title: {
          type: 'text',
          value: 'Profesyonel Hizmetlerimiz',
          label: 'Başlık'
        },
        description: {
          type: 'textarea',
          value: 'Mermer ve doğal taş uygulamalarında alanında uzman ekibimizle birlikte kaliteli hizmet sunuyoruz.',
          label: 'Açıklama'
        }
      }
    },
    {
      id: 'contact',
      title: 'İletişim Bölümü',
      description: 'İletişim bilgileri ve form',
      isEditing: false,
      fields: {
        title: {
          type: 'text',
          value: 'Bizimle İletişime Geçin',
          label: 'Başlık'
        },
        address: {
          type: 'textarea',
          value: 'Barbaros Mah. Ihlamur Sok. No:12 Ataşehir / İstanbul',
          label: 'Adres'
        },
        email: {
          type: 'text',
          value: 'info@dekor2000.com',
          label: 'E-posta'
        },
        phone: {
          type: 'text',
          value: '+90 (212) 555 6789',
          label: 'Telefon'
        },
        mapLocation: {
          type: 'text',
          value: '41.015137,28.979530',
          label: 'Harita Konumu (Enlem,Boylam)'
        }
      }
    },
    {
      id: 'seo',
      title: 'SEO ve Meta Bilgileri',
      description: 'Site genelinde SEO ayarları',
      isEditing: false,
      fields: {
        siteTitle: {
          type: 'text',
          value: 'Dekor 2000 | Mermer ve Spa Tesisleri',
          label: 'Site Başlığı'
        },
        siteDescription: {
          type: 'textarea',
          value: 'Dekor 2000 ile mermer, granit ve doğal taş uygulamaları. Ev ve işyerleri için özel tasarım çözümleri. Spa tesisleri kurulumu ve danışmanlık.',
          label: 'Site Açıklaması'
        },
        keywords: {
          type: 'text',
          value: 'mermer, granit, doğal taş, spa tesisi, iç mekan tasarım, banyo yenileme, mutfak tezgahı',
          label: 'Anahtar Kelimeler'
        }
      }
    }
  ]);

  // Düzenleme modunu açma/kapama
  const toggleEdit = (index: number) => {
    setSections(prev => prev.map((section, i) => 
      i === index ? { ...section, isEditing: !section.isEditing } : section
    ));
  };

  // Alan değerini güncelleme
  const updateField = (sectionIndex: number, fieldKey: string, newValue: string) => {
    setSections(prev => prev.map((section, i) => 
      i === sectionIndex 
        ? {
            ...section, 
            fields: {
              ...section.fields,
              [fieldKey]: {
                ...section.fields[fieldKey],
                value: newValue
              }
            }
          } 
        : section
    ));
  };

  // Değişiklikleri kaydetme
  const saveChanges = (index: number) => {
    // Burada normalde API'ye kayıt yapılacak
    console.log('Saved section:', sections[index]);
    
    // Düzenleme modunu kapat
    toggleEdit(index);
  };

  // Bölüm ikonu seçme
  const getSectionIcon = (id: string) => {
    switch (id) {
      case 'hero': return <Layout size={20} />;
      case 'about': return <Info size={20} />;
      case 'services': return <Settings size={20} />;
      case 'contact': return <Phone size={20} />;
      case 'seo': return <Settings size={20} />;
      default: return <Settings size={20} />;
    }
  };

  const renderFieldValue = (field: any) => {
    if (field.type === 'image') {
      return (
        <div className="flex items-center">
          <img 
            src={field.value} 
            alt={field.label}
            className="h-10 w-auto object-cover rounded-md mr-2"
          />
          <span className="text-sm text-gray-500 truncate">{field.value}</span>
        </div>
      );
    } 
    
    if (field.type === 'color') {
      return (
        <div className="flex items-center">
          <div 
            className="w-5 h-5 rounded-full mr-2"
            style={{ backgroundColor: field.value }}
          ></div>
          <span className="text-sm text-gray-500">{field.value}</span>
        </div>
      );
    } 
    
    if (field.type === 'textarea') {
      return (
        <p className="text-sm text-gray-700 whitespace-pre-wrap line-clamp-2">
          {field.value}
        </p>
      );
    } 
    
    return (
      <p className="text-sm text-gray-700">
        {field.value}
      </p>
    );
  };

  return (
    <div className="space-y-6">
      {sections.map((section, index) => (
        <div key={section.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex justify-between items-center p-4 border-b border-gray-100">
            <div className="flex items-center">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-md mr-3">
                {getSectionIcon(section.id)}
              </div>
              <div>
                <h2 className="font-medium">{section.title}</h2>
                <p className="text-sm text-gray-500">{section.description}</p>
              </div>
            </div>
            <button
              onClick={() => toggleEdit(index)}
              className="p-2 text-blue-500 hover:bg-blue-50 rounded-full transition-colors"
            >
              <Edit2 size={18} />
            </button>
          </div>
          
          <div className="p-4">
            {section.isEditing ? (
              <div className="space-y-4">
                {Object.entries(section.fields).map(([key, field]) => (
                  <div key={key} className="grid grid-cols-12 gap-4 items-start">
                    <div className="col-span-3">
                      <label htmlFor={`${section.id}-${key}`} className="block text-sm font-medium text-gray-700">
                        {field.label}
                      </label>
                    </div>
                    <div className="col-span-9">
                      {field.type === 'text' && (
                        <input
                          type="text"
                          id={`${section.id}-${key}`}
                          value={field.value}
                          onChange={(e) => updateField(index, key, e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      )}
                      
                      {field.type === 'textarea' && (
                        <textarea
                          id={`${section.id}-${key}`}
                          value={field.value}
                          onChange={(e) => updateField(index, key, e.target.value)}
                          rows={3}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      )}
                      
                      {field.type === 'image' && (
                        <div>
                          {field.value && (
                            <div className="mb-2">
                              <img 
                                src={field.value} 
                                alt={field.label} 
                                className="h-20 w-auto object-cover rounded-md"
                              />
                            </div>
                          )}
                          <div className="flex items-center gap-3">
                            <input
                              type="text"
                              id={`${section.id}-${key}`}
                              value={field.value}
                              onChange={(e) => updateField(index, key, e.target.value)}
                              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Görsel URL'si"
                            />
                            <button 
                              type="button"
                              className="px-3 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 flex items-center gap-1"
                            >
                              <ImageIcon size={16} />
                              <span className="text-sm">Seç</span>
                            </button>
                          </div>
                        </div>
                      )}
                      
                      {field.type === 'color' && (
                        <div className="flex items-center gap-2">
                          <input
                            type="color"
                            id={`${section.id}-${key}-color`}
                            value={field.value}
                            onChange={(e) => updateField(index, key, e.target.value)}
                            className="w-10 h-10 rounded-md border-0 p-0 cursor-pointer"
                          />
                          <input
                            type="text"
                            id={`${section.id}-${key}`}
                            value={field.value}
                            onChange={(e) => updateField(index, key, e.target.value)}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                
                <div className="flex justify-end mt-4 pt-2 border-t">
                  <button
                    onClick={() => toggleEdit(index)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 mr-3 hover:bg-gray-50"
                  >
                    İptal
                  </button>
                  <button
                    onClick={() => saveChanges(index)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
                  >
                    <Save size={16} />
                    <span>Değişiklikleri Kaydet</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                {Object.entries(section.fields).map(([key, field]) => (
                  <div key={key} className="grid grid-cols-12 gap-4 py-2 border-b border-gray-100 last:border-0">
                    <div className="col-span-3 text-sm font-medium text-gray-600">
                      {field.label}
                    </div>
                    <div className="col-span-9">
                      {renderFieldValue(field)}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentManager;
