import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AdminRouter from './admin/AdminRouter';

// Placeholder components
const HomePage = () => <div>Ana Sayfa</div>;
const AboutPage = () => <div>Hakkımızda</div>;
const ServicesPage = () => <div>Hizmetlerimiz</div>;
const ProjectsPage = () => <div>Projelerimiz</div>;
const ContactPage = () => <div>İletişim</div>;

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin/*" element={<AdminRouter />} />
        
        {/* Public Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="hakkimizda" element={<AboutPage />} />
          <Route path="hizmetlerimiz" element={<ServicesPage />} />
          <Route path="projelerimiz" element={<ProjectsPage />} />
          <Route path="iletisim" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
