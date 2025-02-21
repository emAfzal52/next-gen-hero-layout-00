
import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';

const plans = [
  {
    name: 'AI Audit',
    price: '$500',
    subtitle: 'One-Time Cost',
    description: 'Discover where AI can transform your business.',
    features: [
      'Analyze your processes to identify bottlenecks.',
      'Highlight opportunities where AI can deliver value.',
      'Provide a 6-month actionable roadmap for AI integration.',
    ]
  },
  {
    name: 'Ready-to-Deploy AI Agents',
    price: '$3,000',
    subtitle: 'One-Time Cost',
    description: 'Leverage 30+ pre-built AI agents for instant impact.',
    features: [
      'Choose from a library of 30+ AI agents tailored for various use cases.',
      'Seamless integration with your existing systems.',
      'Customizable to align with your specific business needs.',
    ]
  },
  {
    name: 'Custom AI Agents',
    price: 'Custom Pricing',
    subtitle: 'Contact Us',
    description: 'Tailored AI solutions built specifically for your business.',
    features: [
      'AI agents designed from scratch to address your unique challenges.',
      'Fully scalable and integrated into your workflows.',
      'Ongoing support to ensure optimal performance.',
    ]
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-sm font-semibold text-primary mb-2">PRICING</h2>
          <h3 className="text-3xl font-bold mb-4">Your Trusted Experts for AI That Works for You</h3>
          <p className="text-muted-foreground">
            Off-the-shelf AI solutions often fall short, wasting time and resources. We craft custom
            AI agents tailored to your business needs. With 30+ agents deployed across industries,
            we leverage advanced LLMs and seamless integrations to deliver real results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className="relative card-hover">
              <CardHeader>
                <div className="px-3 py-1 bg-black text-white text-sm rounded-full w-fit mb-4">
                  {plan.name}
                </div>
                <div className="text-3xl font-bold">{plan.price}</div>
                <div className="text-sm text-muted-foreground">{plan.subtitle}</div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={index === 2 ? "default" : "outline"}>
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
