import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import {
  Home,
  Image,
  FileText,
  Settings,
  Users,
  LogOut,
  Menu,
  X
} from 'lucide-react';

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, title }) => {
  const { logout, username } = useAuthContext();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const navItems = [
    { icon: <Home size={20} />, label: 'Dashboard', path: '/admin' },
    { icon: <Image size={20} />, label: 'Görseller', path: '/admin/images' },
    { icon: <FileText size={20} />, label: 'Blog Yazıları', path: '/admin/blog' },
    { icon: <Settings size={20} />, label: 'Site İçeriği', path: '/admin/content' },
    { icon: <Users size={20} />, label: 'Kullanıcılar', path: '/admin/users' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-md bg-white shadow-md"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside 
        className={`
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:translate-x-0 fixed lg:relative z-40 w-64 h-full bg-white shadow-md transition-transform duration-300
        `}
      >
        <div className="p-4 border-b">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-md bg-gradient-to-r from-red-600 to-blue-600">
              <span className="text-white font-bold text-sm">D2K</span>
            </div>
            <h1 className="text-xl font-semibold">Dekor 2000</h1>
          </div>
        </div>

        <div className="p-4">
          <p className="text-sm text-gray-500 mb-4">Hoş geldiniz, {username}</p>
          
          <nav className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center px-3 py-2 text-gray-600 rounded-md hover:bg-gray-100 hover:text-gray-900"
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </Link>
            ))}
            <button
              onClick={handleLogout}
              className="w-full flex items-center px-3 py-2 text-gray-600 rounded-md hover:bg-gray-100 hover:text-gray-900"
            >
              <span className="mr-3"><LogOut size={20} /></span>
              Çıkış Yap
            </button>
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm p-4 lg:p-6">
          <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
        </header>
        <div className="p-4 lg:p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
