
import React from 'react';

const solutions = [
  {
    title: 'AI Workflow Automation',
    description: 'Our AI workflow automation solutions streamline business operations by automating repetitive tasks.',
    icon: '🔄',
  },
  {
    title: 'AI Agent Development',
    description: 'Develop custom AI agents that enhance productivity and decision-making capabilities.',
    icon: '🤖',
  },
  {
    title: 'AI Website Integration',
    description: 'Seamlessly integrate AI capabilities into your existing web infrastructure.',
    icon: '🌐',
  },
  {
    title: 'AI Sales Agent',
    description: 'Implement AI-powered sales assistants to boost conversion rates.',
    icon: '💼',
  },
  {
    title: 'Custom AI Models',
    description: 'Build and train custom AI models tailored to your specific business needs.',
    icon: '🧠',
  },
  {
    title: 'Robotic Process Automation',
    description: 'Automate manual processes with intelligent RPA solutions.',
    icon: '⚙️',
  },
];

const InnovativeSolutions = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Innovative Solutions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 card-hover"
            >
              <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">{solution.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
              <p className="text-muted-foreground">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovativeSolutions;
