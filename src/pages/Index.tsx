
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import LeadershipSection from '@/components/LeadershipSection';
import EventsSection from '@/components/EventsSection';
import GemStonesSection from '@/components/GemStonesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <LeadershipSection />
      <EventsSection />
      <GemStonesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
