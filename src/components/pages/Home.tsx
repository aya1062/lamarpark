import React from 'react';
import Hero from '../sections/Hero';
import FeaturedProperties from '../sections/FeaturedProperties';
import AboutSection from '../sections/AboutSection';
import Testimonials from '../sections/Testimonials';

const Home = () => {
  return (
    <div className="space-y-16">
      <Hero />
      <FeaturedProperties />
      <AboutSection />
      <Testimonials />
    </div>
  );
};

export default Home;