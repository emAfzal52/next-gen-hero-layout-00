
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Technologies from '../components/Technologies';
import InnovativeSolutions from '../components/InnovativeSolutions';
import TrustedBy from '../components/TrustedBy';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <Technologies />
        <InnovativeSolutions />
        <TrustedBy />
      </main>
    </div>
  );
};

export default Index;
