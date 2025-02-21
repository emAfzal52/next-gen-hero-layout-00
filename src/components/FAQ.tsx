
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"

const faqs = [
  {
    question: 'What is included in the AI Audit?',
    answer: 'Our AI Audit includes a comprehensive analysis of your business processes, identification of automation opportunities, and a detailed roadmap for AI implementation. We provide specific recommendations tailored to your business needs and goals.'
  },
  {
    question: 'What use cases are covered by the Ready-to-Deploy AI Agents?',
    answer: 'Our Ready-to-Deploy AI Agents cover various use cases including customer service, lead qualification, appointment scheduling, data analysis, and more. Each agent can be customized to fit your specific requirements.'
  },
  {
    question: 'How long does it take to implement a Ready-to-Deploy AI Agent?',
    answer: 'Implementation typically takes 1-2 weeks, depending on the complexity of integration and customization requirements. We work closely with your team to ensure a smooth deployment process.'
  },
  {
    question: 'What makes Custom AI Agents different from Ready-to-Deploy options?',
    answer: 'Custom AI Agents are built from the ground up to address your unique business challenges. They offer deeper integration with your existing systems and can be fully tailored to your specific workflows and requirements.'
  },
  {
    question: 'What does pricing start at for Custom AI Agents?',
    answer: 'Custom AI Agent pricing varies based on the complexity of your requirements, integration needs, and scale of implementation. Contact us for a detailed quote tailored to your project.'
  },
  {
    question: 'Is there ongoing support for the AI Agents?',
    answer: 'Yes, we provide comprehensive ongoing support for all our AI Agents. This includes maintenance, updates, performance monitoring, and continuous optimization to ensure optimal results.'
  },
  {
    question: 'Can I upgrade from a Ready-to-Deploy Agent to a Custom AI Agent?',
    answer: 'Yes, you can upgrade from a Ready-to-Deploy Agent to a Custom AI Agent at any time. We'll work with you to understand your growing needs and develop a custom solution that builds upon your existing implementation.'
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Your Questions, Answered</h2>
          <p className="text-muted-foreground">
            We understand adopting AI can feel daunting, so we've answered common questions
            about custom AI agents and implementation. Still have questions? Let's chat! Book a
            call, and we'll show you how AI can transform your business.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
