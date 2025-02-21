
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const stages = [
  {
    stage: 'Stage 1',
    title: 'Evaluation',
    description: 'We begin by understanding your business processes, identifying key bottlenecks, inefficiencies, and opportunities where AI can have the greatest impact. We also assign a dollar value to the changes AI can make, ensuring the solution delivers measurable results. Finally, we define the desired outcomes for your AI agent.'
  },
  {
    stage: 'Stage 2',
    title: 'Validation',
    description: 'Based on insights from the evaluation phase, we develop a prototype tailored to your business needs. This step tests the AI agent on a small scale, refining its output to align with your desired outcomes and validating performance. Adjustments are made to ensure accuracy and effectiveness.'
  },
  {
    stage: 'Stage 3',
    title: 'Implementation',
    description: 'With a validated prototype, we proceed to full-scale AI agent implementation. Our agents integrate seamlessly with your systems and workflows, ensuring no disruptions while delivering consistent, measurable results aligned with Stage One outcomes. As your business grows, our AI agents adapt to remain effective and aligned with your evolving needs.'
  }
];

const OurProcess = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-sm font-semibold text-primary mb-2">OUR PROCESS</h2>
          <h3 className="text-3xl font-bold mb-4">Custom AI Agents That Deliver Exactly What You Need</h3>
          <p className="text-muted-foreground">
            Over the past two years, we've developed and deployed AI agents for businesses tackling different challenges. 
            This experience has helped us craft a proven process that ensures every AI agent delivers measurable value.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {stages.map((stage, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <div className="text-sm font-semibold text-primary mb-2">{stage.stage}</div>
                <CardTitle>{stage.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{stage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
