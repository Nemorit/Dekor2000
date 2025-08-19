import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import AdminLayout from './AdminLayout';

const ProtectedRoute: React.FC = () => {
  const { isAuthenticated } = useAuthContext();

  // Kullanıcı kimliği doğrulanmamışsa login sayfasına yönlendir
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  // Kimlik doğrulanmışsa AdminLayout ile birlikte alt rotaları render et
  return (
    <AdminLayout title="Yönetim Paneli">
      <Outlet />
    </AdminLayout>
  );
};

export default ProtectedRoute;
