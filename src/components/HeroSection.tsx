
import React from 'react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              AI Automation <br />
              <span className="text-primary">&amp; Development Company</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Boost Your Business Success through AI
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-white">AI</span>
              </div>
              <div>
                <p className="text-lg">Hi, I'm Ava what AI solution do you want?</p>
                <p className="text-sm text-muted-foreground">Talk to Ava</p>
              </div>
            </div>
            <div className="flex items-center space-x-12 pt-8">
              <div>
                <p className="text-3xl font-bold">50+</p>
                <p className="text-sm text-muted-foreground">Our developers</p>
              </div>
              <div>
                <p className="text-3xl font-bold">80+</p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold">1M+</p>
                <p className="text-sm text-muted-foreground">Revenue in sales</p>
              </div>
            </div>
          </div>
          <div className="relative animate-fade-in-up">
            <div className="absolute inset-0 bg-gradient-radial from-pink-500/20 to-transparent rounded-full blur-3xl"></div>
            <img 
              src="/lovable-uploads/9d16365f-991b-446b-8683-c7942f0aef52.png"
              alt="AI Assistant"
              className="relative z-10 w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
