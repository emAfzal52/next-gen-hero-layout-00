
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const tutorials = [
  {
    title: 'How to Build an AI Agent to Convert Leads from Social Media Ads',
    description: 'Learn how to create an AI agent that handles inquiries from paid social media ads, automates lead qualification, and effortlessly schedules bookings.',
    image: '/lovable-uploads/e51560f2-5ee7-4a81-9404-8e77e062535d.png'
  },
  {
    title: 'How to Build Your Own AI Voice Assistant',
    description: 'Learn how to create your own AI voice assistant with this step-by-step guide using VAPI and n8n!',
    image: '/lovable-uploads/ccf6f9be-6d67-4126-a356-7acdbe0b8fb3.png'
  }
];

const Tutorials = () => {
  return (
    <section id="tutorials" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-sm font-semibold text-primary mb-2">AI AGENT TUTORIALS</h2>
          <h3 className="text-3xl font-bold mb-4">Learn How to Build AI Agents</h3>
          <p className="text-muted-foreground">
            Get started with our step-by-step tutorials on building custom AI agents for various use cases.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {tutorials.map((tutorial, index) => (
            <Card key={index} className="overflow-hidden card-hover">
              <img 
                src={tutorial.image} 
                alt={tutorial.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-2">{tutorial.title}</h4>
                <p className="text-muted-foreground mb-4">{tutorial.description}</p>
                <Button variant="outline">Watch Tutorial</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button>View All Tutorials</Button>
        </div>
      </div>
    </section>
  );
};

export default Tutorials;
