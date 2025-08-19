import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const ProtectedRoute: React.FC = () => {
  const { isAuthenticated } = useAuth();

  // Kullanıcı kimliği doğrulanmamışsa login sayfasına yönlendir
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  // Kimlik doğrulanmışsa alt rotaları render et
  return <Outlet />;
};

export default ProtectedRoute;
