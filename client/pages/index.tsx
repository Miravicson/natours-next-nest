import React from 'react';

import AboutSection from '@/components/about/AboutSection';
// import BookSection from '@/components/BookSection';
import FeaturesSection from '@/components/features/FeaturesSection';
// import Footer from '@/components/Footer';
import Header from '@/components/header/Header';
import NavigationBar from '@/components/navigation/NavigationBar';
import ToursSection from '@/components/tours/ToursSection';
// import StoriesSection from '@/components/StoriesSection';

const Home: React.FC = () => {
  return (
    <>
      <NavigationBar />
      <Header />
      <main>
        <AboutSection />
        <FeaturesSection />
        <ToursSection />
        {/* <StoriesSection /> */}
        {/* <BookSection /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
