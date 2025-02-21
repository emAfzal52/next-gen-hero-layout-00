
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AIIndustries from '../components/AIIndustries';
import Technologies from '../components/Technologies';
import InnovativeSolutions from '../components/InnovativeSolutions';
import CaseStudies from '../components/CaseStudies';
import OurProcess from '../components/OurProcess';
import ClientTestimonials from '../components/ClientTestimonials';
import Tutorials from '../components/Tutorials';
import FAQ from '../components/FAQ';
import Pricing from '../components/Pricing';
import TrustedBy from '../components/TrustedBy';
import Footer from '../components/Footer';

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
        <ClientTestimonials />
        <Tutorials />
        <FAQ />
        <Pricing />
        <TrustedBy />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
