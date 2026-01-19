
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Globe, Package, Tablet, Tablets, ShieldCheck, Pill } from 'lucide-react';
import { companyInfo } from '../mock';
import Hero3D from '../components/Hero3D';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen md:pt-0 pt-20">
      {/* Hero Section */}
      <section className="relative w-full h-screen bg-gradient-to-br from-gray-50 to-gray-200 overflow-hidden flex items-center">
        {/* 3D Background */}
        <Hero3D />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-none md:pointer-events-auto">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">Pharmaceutical, Food and Chemical</span><br />
                Distribution Partner
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                {companyInfo.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pointer-events-auto">
                <Link to="/products" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg text-white bg-gray-900 hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Explore Products <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg text-gray-900 bg-white border border-gray-200 hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md">
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyInfo.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
              >
                <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600 mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Brief Intro / Features */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
             {/* Abstract Pattern */}
             <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-teal-200 to-transparent transform skew-x-12" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Arham Exports?</h2>
            <p className="text-gray-600">Arham Exports does much more than move goods. We move markets forward. Breaking new ground through our technical expertise with ideas and creating opportunities through innovation.</p>
            <Link to="/about" className="text-teal-600 hover:text-purple-600 transition-colors text-sm">Learn More About Us</Link>          
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Package className="w-8 h-8 text-teal-500" />}
              title="Raw Material Outsourcing"
              desc="Arham Exports is the most reliable, efficient, and cost-effective partner to cater to all your raw material outsourcing needs."
            />
            <FeatureCard 
              icon={<Pill className="w-8 h-8 text-purple-500" />}
              title="Tailored Services"
              desc="Arham Exports provides tailored outsourcing solutions to the Pharmaceutical and Food Supplement industries and meets their diverse needs."
            />
            <FeatureCard 
              icon={<ShieldCheck className="w-8 h-8 text-orange-500" />}
              title="Quality Assurance"
              desc="Our in-house quality assurance team makes relentless efforts to conduct thorough regular checks and audits of our suppliers, to ensure that the raw materials we source are of top quality and exact reliability that our clients expect from us."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300"
  >
    <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{desc}</p>
  </motion.div>
);

export default Home;
