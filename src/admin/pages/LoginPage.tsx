import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!username || !password) {
      setError('Lütfen kullanıcı adı ve şifre giriniz.');
      return;
    }
    
    const success = login(username, password);
    if (success) {
      navigate('/admin');
    } else {
      setError('Kullanıcı adı veya şifre yanlış.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-red-600 to-blue-600 p-6">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-red-700 font-bold text-2xl">D</span>
              </div>
            </div>
          </div>
          <h2 className="text-center text-2xl font-bold text-white mt-4">
            Dekor 2000 Admin Panel
          </h2>
        </div>
        
        <div className="p-8">
          <form onSubmit={handleSubmit}>
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-md">
                {error}
              </div>
            )}
            
            <div className="mb-6">
              <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-700">
                Kullanıcı Adı
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Kullanıcı adınızı girin"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
                Şifre
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Şifrenizi girin"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-600 to-blue-600 text-white py-2 rounded-md hover:from-red-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Giriş Yap
            </button>
          </form>
          
          <div className="mt-6 text-center text-sm">
            <p className="text-gray-500">
              Demo kullanıcı: <span className="font-medium">admin</span> | Şifre: <span className="font-medium">dekor2000</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
