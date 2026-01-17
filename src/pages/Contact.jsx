
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

import axios from 'axios';
import { toast } from 'sonner';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    subject: 'Product Inquiry',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`/functions/contact`, formData);
      toast.success('Message sent successfully! We will get back to you soon.');
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        subject: 'Product Inquiry',
        message: ''
      });
    } catch (error) {
      console.error(error);
      toast.error('Failed to send message. Please try again or mail on info@arhamexp.com.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get in Touch</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Have a query about our products or want to discuss a partnership? We are here to help.
              </p>
            </div>

            <div className="space-y-8">
              <ContactItem 
                icon={<MapPin className="w-6 h-6 text-teal-600" />}
                title="Global Headquarters"
                content={<>123 Business Park, Export Zone,<br />Ahmedabad, Gujarat 380001, India</>}
              />
              <ContactItem 
                icon={<Phone className="w-6 h-6 text-purple-600" />}
                title="Phone"
                content="+91 99999 99999"
              />
              <ContactItem 
                icon={<Mail className="w-6 h-6 text-orange-600" />}
                title="Email"
                content="info@arhamexp.com"
              />
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
               <h3 className="font-bold text-gray-900 mb-2">Business Hours</h3>
               <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM (IST)</p>
               <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">First Name</label>
                  <input 
                    type="text" 
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Last Name</label>
                  <input 
                    type="text" 
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all" 
                    required 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all" 
                  required 
                />
              </div>

              <div className="space-y-2">
                 <label className="text-sm font-medium text-gray-700">Subject</label>
                 <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                 >
                    <option>Product Inquiry</option>
                    <option>Partnership Proposal</option>
                    <option>Career Opportunity</option>
                    <option>Other</option>
                 </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Message</label>
                <textarea 
                  rows="4" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all" 
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-gray-900 text-white font-bold py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'} <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const ContactItem = ({ icon, title, content }) => (
  <div className="flex items-start gap-4">
    <div className="p-3 bg-gray-50 rounded-lg shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);

export default Contact;
