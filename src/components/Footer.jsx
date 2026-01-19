
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight">
              <span className="text-teal-400">Arham</span> Exports
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Connecting global healthcare with premium quality pharmaceutical and chemical exports. Bridging gaps, ensuring quality, and delivering excellence worldwide.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white border-b border-gray-700 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Home</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Our Products</Link></li>
              <li><Link to="/certifications" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Certifications</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white border-b border-gray-700 pb-2 inline-block">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">About Us</Link></li>
              <li><a href="/about#why-arham" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Why Arham?</a></li>
              <li><a href="/about#capabilities" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Our Capabilities</a></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Careers</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white border-b border-gray-700 pb-2 inline-block">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-gray-400">
                <MapPin className="mt-1 flex-shrink-0 text-teal-400" size={18} />
                <span>123 Business Park, Export Zone,<br />Ahmedabad, Gujarat 380001, India</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-400">
                <Phone className="flex-shrink-0 text-teal-400" size={18} />
                <span>+91 99999 99999</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-400">
                <Mail className="flex-shrink-0 text-teal-400" size={18} />
                <span>info@arhamexp.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Arham Exports. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
