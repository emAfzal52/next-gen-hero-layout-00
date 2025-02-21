
import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const cases = [
  {
    title: 'Blackstone Grills Igniting Outdoor Passion',
    company: 'Blackstone Grills Shopify-hosted grill store',
    challenge: 'Needed a platform to showcase products and connect with grilling enthusiasts.',
    solution: 'Developed an interactive e-commerce platform with community features.',
    impact: 'Increased sales by 150% and grew community engagement by 200%.',
    image: '/lovable-uploads/8cad1eb9-bff8-407e-b94c-642359afd673.png'
  },
  {
    title: 'AI-Powered Customer Service Revolution',
    company: 'Global Tech Solutions',
    challenge: 'Managing high volume of customer inquiries efficiently.',
    solution: 'Implemented AI chatbot with natural language processing.',
    impact: 'Reduced response time by 80% and improved customer satisfaction.',
    image: '/lovable-uploads/8cad1eb9-bff8-407e-b94c-642359afd673.png'
  },
  {
    title: 'Healthcare Analytics Transformation',
    company: 'MedTech Innovations',
    challenge: 'Optimizing patient care and resource allocation.',
    solution: 'Developed predictive analytics platform.',
    impact: 'Improved patient outcomes by 40% and reduced costs by 25%.',
    image: '/lovable-uploads/8cad1eb9-bff8-407e-b94c-642359afd673.png'
  }
];

const CaseStudies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCase = () => {
    setCurrentIndex((prev) => (prev + 1) % cases.length);
  };

  const prevCase = () => {
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Case Study</h2>
        <div className="relative">
          <Card className="bg-gradient-to-r from-orange-400 to-amber-500 p-1 rounded-2xl">
            <CardContent className="bg-white p-6 rounded-xl">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src={cases[currentIndex].image} 
                    alt={cases[currentIndex].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">{cases[currentIndex].title}</h3>
                  <p className="text-gray-600">{cases[currentIndex].company}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Challenge:</h4>
                      <p className="text-gray-600">{cases[currentIndex].challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Solution:</h4>
                      <p className="text-gray-600">{cases[currentIndex].solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Impact:</h4>
                      <p className="text-gray-600">{cases[currentIndex].impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevCase}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextCase}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
