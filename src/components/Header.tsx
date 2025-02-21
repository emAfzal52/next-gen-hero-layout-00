
import React from 'react';
import { Button } from './ui/button';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold">Cogent</a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#projects" className="text-sm font-medium hover:text-primary/80 transition-colors">
              Projects
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary/80 transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-sm font-medium hover:text-primary/80 transition-colors">
              FAQ
            </a>
            <a href="#tutorials" className="text-sm font-medium hover:text-primary/80 transition-colors">
              Tutorials
            </a>
          </nav>

          <Button className="bg-black text-white hover:bg-black/90">
            Book a Free Discovery Call
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
