
import React from 'react';
import { Card, CardContent } from './ui/card';

const testimonials = [
  {
    name: 'Sue',
    role: 'Founder, Tiny Thunder',
    image: '/lovable-uploads/accf512d-598f-4966-842e-4830951d820d.png',
    testimonial: 'This was an extremely tough project, but Ehmad went the extra mile to understand what I wanted and delivered exceptional results. Giant thumbs up!'
  },
  {
    name: 'Scott',
    role: 'Founder, Aurora',
    image: '/lovable-uploads/accf512d-598f-4966-842e-4830951d820d.png',
    testimonial: 'Ehmad and his team at Cogent have been absolutely incredible to work with. They are highly professional, extremely prompt, and bring a diverse range of skill sets to the table.'
  },
  {
    name: 'Kara',
    role: 'Co-founder, Narratize',
    image: '/lovable-uploads/accf512d-598f-4966-842e-4830951d820d.png',
    testimonial: 'I am so grateful that we got connected to Ehmad and his team! The speed at which we have been able to develop new features because of them has been incredible.'
  }
];

const ClientTestimonials = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-sm font-semibold text-primary mb-2">TESTIMONIALS</h2>
          <h3 className="text-3xl font-bold mb-4">What Our Clients Say</h3>
          <p className="text-muted-foreground">
            Don't just take our word for it. Hear from some of our amazing clients about their
            experience working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground">{testimonial.testimonial}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
