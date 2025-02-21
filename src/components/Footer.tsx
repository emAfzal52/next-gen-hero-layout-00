
import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Logo</h3>
            <p className="text-muted-foreground">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary">AI Workflow Automation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">AI Website Integration</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">AI Agent Development</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">AI Sales Agent</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-muted-foreground hover:text-primary">Home</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary">Services</a></li>
              <li><a href="#about-us" className="text-muted-foreground hover:text-primary">About Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><a href="#news" className="text-muted-foreground hover:text-primary">News and Updates</a></li>
              <li><a href="#careers" className="text-muted-foreground hover:text-primary">Careers</a></li>
              <li><a href="#community" className="text-muted-foreground hover:text-primary">Community Involvement</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Cogent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
