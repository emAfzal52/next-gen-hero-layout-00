
import React from 'react';

const technologies = [
  { name: 'ChatGPT', logo: '/lovable-uploads/1ae376a5-5d9e-48c5-8581-28a6ec9d716b.png' },
  { name: 'Bard', logo: '/lovable-uploads/1ae376a5-5d9e-48c5-8581-28a6ec9d716b.png' },
  { name: 'OpenAI', logo: '/lovable-uploads/1ae376a5-5d9e-48c5-8581-28a6ec9d716b.png' },
  { name: 'Google AI', logo: '/lovable-uploads/1ae376a5-5d9e-48c5-8581-28a6ec9d716b.png' },
  { name: 'Midjourney', logo: '/lovable-uploads/1ae376a5-5d9e-48c5-8581-28a6ec9d716b.png' },
  { name: 'Stability.ai', logo: '/lovable-uploads/1ae376a5-5d9e-48c5-8581-28a6ec9d716b.png' },
  { name: 'Bing', logo: '/lovable-uploads/1ae376a5-5d9e-48c5-8581-28a6ec9d716b.png' },
];

const Technologies = () => {
  return (
    <section className="py-16 overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Technologies</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          We ensure the highest quality development services & solutions by using a wide range of the latest technologies. 
          We have a certified and experienced team of developers that can provide cutting-edge solutions using this technology stack.
        </p>
        <div className="relative">
          <div className="flex space-x-12 animate-marquee">
            {[...technologies, ...technologies].map((tech, index) => (
              <div key={index} className="flex items-center justify-center min-w-[120px]">
                <img src={tech.logo} alt={tech.name} className="h-12 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
