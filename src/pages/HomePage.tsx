import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Blog />
      <Contact />
    </>
  );
};

export default HomePage;
