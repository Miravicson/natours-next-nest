import React from 'react';

import AboutSection from '@/components/AboutSection';
import BookSection from '@/components/BookSection';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import NavigationBar from '@/components/NavigationBar';
import StoriesSection from '@/components/StoriesSection';

const Home: React.FC = () => {
  return (
    <>
      <NavigationBar />
      <Header />
      <main>
        <AboutSection />
        <FeaturesSection />
        <StoriesSection />
        <BookSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
