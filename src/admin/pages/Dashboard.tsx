import React from 'react';
import { Image, FileText, PieChart, Calendar, UserCheck } from 'lucide-react';

const Dashboard: React.FC = () => {
  // Bu kısımda normalde API'den veriler çekilir
  const stats = [
    { id: 1, name: 'Toplam Görsel', value: '48', icon: <Image size={20} />, color: 'bg-blue-500' },
    { id: 2, name: 'Blog Yazıları', value: '12', icon: <FileText size={20} />, color: 'bg-green-500' },
    { id: 3, name: 'Aylık Ziyaretçi', value: '3,240', icon: <PieChart size={20} />, color: 'bg-purple-500' },
    { id: 4, name: 'Son Güncelleme', value: 'Bugün', icon: <Calendar size={20} />, color: 'bg-amber-500' },
    { id: 5, name: 'Aktif Kullanıcı', value: '2', icon: <UserCheck size={20} />, color: 'bg-red-500' },
  ];

  const recentActivities = [
    { id: 1, action: 'Blog yazısı eklendi', item: 'Mermer Bakımı Hakkında', time: '10 dk önce' },
    { id: 2, action: 'Görsel yüklendi', item: 'projelerimiz/spa_merkezi_5.jpg', time: '2 saat önce' },
    { id: 3, action: 'İçerik güncellendi', item: 'Ana Sayfa Hero Bölümü', time: '6 saat önce' },
    { id: 4, action: 'Blog güncellendi', item: 'Doğal Taş Seçim Rehberi', time: 'Dün' },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center">
              <div className={`${stat.color} p-2 rounded-md text-white mr-4`}>
                {stat.icon}
              </div>
              <div>
                <p className="text-sm text-gray-500">{stat.name}</p>
                <p className="text-xl font-semibold">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Son Aktiviteler */}
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold mb-4">Son Aktiviteler</h2>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex border-b border-gray-100 pb-3 last:border-0">
                <div className="w-2 bg-blue-500 rounded-full mr-4"></div>
                <div>
                  <p className="font-medium">{activity.action}</p>
                  <p className="text-sm text-gray-500">{activity.item}</p>
                  <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hızlı İşlemler */}
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold mb-4">Hızlı İşlemler</h2>
          <div className="grid grid-cols-2 gap-3">
            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex flex-col items-center justify-center">
              <Image size={24} className="mb-2 text-blue-500" />
              <span className="text-sm">Yeni Görsel Ekle</span>
            </button>
            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex flex-col items-center justify-center">
              <FileText size={24} className="mb-2 text-green-500" />
              <span className="text-sm">Blog Yazısı Ekle</span>
            </button>
            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex flex-col items-center justify-center">
              <PieChart size={24} className="mb-2 text-purple-500" />
              <span className="text-sm">İstatistikler</span>
            </button>
            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex flex-col items-center justify-center">
              <Calendar size={24} className="mb-2 text-amber-500" />
              <span className="text-sm">İçerik Takvimi</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
