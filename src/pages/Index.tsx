
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import LeadershipSection from '@/components/LeadershipSection';
import HotelShowSection from '@/components/HotelShowSection';
import EventsSection from '@/components/EventsSection';
import GemStonesSection from '@/components/GemStonesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="leadership">
        <LeadershipSection />
      </div>
      <div id="hotel-show">
        <HotelShowSection />
      </div>
      <div id="events">
        <EventsSection />
      </div>
      <div id="gemstones">
        <GemStonesSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
