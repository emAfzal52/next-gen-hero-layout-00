
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AIIndustries from '../components/AIIndustries';
import Technologies from '../components/Technologies';
import InnovativeSolutions from '../components/InnovativeSolutions';
import CaseStudies from '../components/CaseStudies';
import OurProcess from '../components/OurProcess';
import TrustedBy from '../components/TrustedBy';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AIIndustries />
        <Technologies />
        <InnovativeSolutions />
        <CaseStudies />
        <OurProcess />
        <TrustedBy />
      </main>
    </div>
  );
};

export default Index;
