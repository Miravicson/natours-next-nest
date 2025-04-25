import React from 'react';

import AboutSection from '@/components/about/AboutSection';
import BookSection from '@/components/bookings/BookSection';
import FeaturesSection from '@/components/features/FeaturesSection';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import NavigationBar from '@/components/navigation/NavigationBar';
import StoriesSection from '@/components/stories/StoriesSection';
import ToursSection from '@/components/tours/ToursSection';

function Home() {
  return (
    <>
      <NavigationBar />
      <Header />
      <main>
        <AboutSection />
        <FeaturesSection />
        <ToursSection />
        <StoriesSection />
        <BookSection />
      </main>
      <Footer />
    </>
  );
}

export default Home;
