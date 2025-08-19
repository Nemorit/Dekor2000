import { useState, useEffect } from 'react';

// Basit localStorage tabanlı auth hook
export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Sayfa yüklendiğinde localStorage'dan token kontrol et
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('dekor2000_admin_token');
      const storedUsername = localStorage.getItem('dekor2000_admin_username');
      
      if (token) {
        setIsAuthenticated(true);
        setUsername(storedUsername || '');
      } else {
        setIsAuthenticated(false);
        setUsername('');
      }
      setIsLoading(false);
    };
    
    checkAuth();
  }, []);

  // Login fonksiyonu
  const login = (username: string, password: string): boolean => {
    // Gerçek hayatta: API'ye istek atıp token alınması gerekir
    // Basitlik için sabit kullanıcı adı ve şifre kontrolü yapıyoruz
    if (username === 'admin' && password === 'dekor2000') {
      // Güvenlik uyarısı: Gerçek projede asla şifre plain text olmamalı, 
      // backend taraflı kimlik doğrulama ve token sistemi kullanılmalı
      const mockToken = `mock-token-${Date.now()}`;
      localStorage.setItem('dekor2000_admin_token', mockToken);
      localStorage.setItem('dekor2000_admin_username', username);
      setIsAuthenticated(true);
      setUsername(username);
      return true;
    }
    return false;
  };

  // Logout fonksiyonu
  const logout = () => {
    localStorage.removeItem('dekor2000_admin_token');
    localStorage.removeItem('dekor2000_admin_username');
    setIsAuthenticated(false);
    setUsername('');
  };

  return {
    isAuthenticated,
    username,
    isLoading,
    login,
    logout
  };
}
