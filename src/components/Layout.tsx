import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Seo from './SEO';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Seo />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
