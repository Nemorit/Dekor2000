import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import ImageGallery from './pages/ImageGallery';
import BlogList from './pages/BlogList';
import BlogForm from './pages/BlogForm';
import ContentManager from './pages/ContentManager';
import ProtectedRoute from './components/ProtectedRoute';

const AdminRouter: React.FC = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/admin/login" element={<LoginPage />} />
        
        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/images" element={<ImageGallery />} />
          <Route path="/admin/blogs" element={<BlogList />} />
          <Route path="/admin/blog/new" element={<BlogForm />} />
          <Route path="/admin/blog/edit/:id" element={<BlogForm />} />
          <Route path="/admin/content" element={<ContentManager />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default AdminRouter;
