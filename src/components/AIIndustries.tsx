
import React, { useState } from 'react';

const industries = {
  Healthcare: {
    title: 'Healthcare',
    features: [
      'Automate Patient Management',
      'Streamline Medical Records',
      'Personalize Guest Experience',
      'Optimize Resource Allocation',
      'Enhance Guest Satisfaction'
    ]
  },
  Finance: {
    title: 'Finance',
    features: [
      'Automated Risk Assessment',
      'Fraud Detection',
      'Portfolio Management',
      'Trading Algorithms',
      'Customer Service Automation'
    ]
  },
  Logistics: {
    title: 'Logistics',
    features: [
      'Route Optimization',
      'Inventory Management',
      'Supply Chain Analytics',
      'Demand Forecasting',
      'Fleet Management'
    ]
  },
  Retail: {
    title: 'Retail',
    features: [
      'Personalized Shopping',
      'Inventory Optimization',
      'Customer Analytics',
      'Price Optimization',
      'Supply Chain Management'
    ]
  },
  Manufacturing: {
    title: 'Manufacturing',
    features: [
      'Predictive Maintenance',
      'Quality Control',
      'Production Optimization',
      'Supply Chain Management',
      'Resource Allocation'
    ]
  },
  Startup: {
    title: 'Startup',
    features: [
      'Market Analysis',
      'Customer Segmentation',
      'Growth Optimization',
      'Risk Assessment',
      'Resource Planning'
    ]
  }
};

const AIIndustries = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('Healthcare');

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">AI for Industries</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full aspect-square relative">
              {Object.keys(industries).map((industry, index) => {
                const angle = (index * 360) / Object.keys(industries).length;
                const isSelected = selectedIndustry === industry;
                return (
                  <button
                    key={industry}
                    onClick={() => setSelectedIndustry(industry)}
                    className={`absolute w-20 h-20 rounded-full transition-all duration-300 ${
                      isSelected ? 'scale-110 shadow-lg' : 'hover:scale-105'
                    }`}
                    style={{
                      left: `${50 + 40 * Math.cos((angle * Math.PI) / 180)}%`,
                      top: `${50 + 40 * Math.sin((angle * Math.PI) / 180)}%`,
                      transform: 'translate(-50%, -50%)',
                      background: isSelected ? 'linear-gradient(45deg, #4F46E5, #7C3AED)' : '#fff',
                    }}
                  >
                    <span className={`text-sm font-medium ${isSelected ? 'text-white' : 'text-gray-700'}`}>
                      {industry}
                    </span>
                  </button>
                );
              })}
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/lovable-uploads/4aeaec67-b144-496f-9e0e-5c8212144897.png"
                  alt="AI Industries"
                  className="w-32 h-32 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">{industries[selectedIndustry].title}</h3>
            <div className="space-y-4">
              {industries[selectedIndustry].features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm animate-fade-in"
                >
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIIndustries;
