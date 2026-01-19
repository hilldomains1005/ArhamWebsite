
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { companyInfo } from '../mock';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const About = () => {
  const location = useLocation();
  const [openAccordion, setOpenAccordion] = useState(null);
  const [activeCapability, setActiveCapability] = useState('regulatory-compliance');

  useEffect(() => {
    // Scroll to section if hash is present in URL
    if (location.hash) {
      const elementId = location.hash.substring(1); // Remove the '#' character
      const element = document.getElementById(elementId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Small delay to ensure page is fully rendered
      }
    }
  }, [location]);

  const capabilityTabs = [
    {
      id: 'regulatory-compliance',
      title: 'Regulatory Compliance',
      content: 'All products adhere to international standards such as WHO-GMP, and the company ensures compliance with country-specific regulatory requirements.'
    },
    {
      id: 'custom-documentation',
      title: 'Custom Documentation',
      content: 'The export team at Arham Exports handles end-to-end documentation, ensuring a smooth and compliant export process.'
    },
    {
      id: 'timely-delivery',
      title: 'Timely Delivery',
      content: 'With efficient supply chain management, the company guarantees timely dispatch and delivery of products across borders.'
    },
    {
      id: 'international-partnerships',
      title: 'International Partnerships',
      content: 'Arham Exports collaborates with distributors, importers, government agencies, and healthcare institutions around the globe.'
    },
    {
      id: 'customized-packaging',
      title: 'Customized Packaging',
      content: 'Arham Exports offers multilingual packaging and labelling based on the specific requirements of export markets.'
    }
  ];

  const accordionItems = [
    {
      id: 'raw-material',
      title: 'Raw Material Outsourcing',
      content: 'Arham Exports is the most reliable, efficient, and cost-effective partner to cater to all your raw material outsourcing needs. The company holds a rich and vivid experience in the pharmaceutical and chemical industry. The sustainable expertise comes with the consistent manufacturing, research, and quality-driven processes to provide Pharmaceutical Excipients, Food ingredients / colors and Herbal Extract to our customers. We provide a diverse range of products and services to our customers with an expansive network of suppliers, including industry stalwarts and emerging manufacturers.'
    },
    {
      id: 'tailored-services',
      title: 'Tailored Services',
      content: 'Arham Exports provides tailored outsourcing solutions to the Pharmaceutical and Food Supplement industries and meets their diverse needs. We understand our client\'s needs in-depth and deliver customized solutions that cater to each of their expectations. We are meticulous in verifying specifications and regulatory approvals from multiple and credible sources. We also leverage our broad supplier network to provide tailored services according to the specific requirements of our clients.'
    },
    {
      id: 'quality-assurance',
      title: 'Quality Assurance',
      content: 'Our in-house quality assurance team makes relentless efforts to conduct thorough regular checks and audits of our suppliers, to ensure that the raw materials we source are of top quality and exact reliability that our clients expect from us. The quality assurance comes with acute scrutiny, which includes regulatory approvals, availability of DMFs, and in-house audits that always guide our selection process.'
    },
    {
      id: 'regulatory-compliance',
      title: 'Regulatory Compliance',
      content: 'Compliance with regulatory standards is a priority for Arham Exports. We have a dedicated regulatory and QA team that conducts thorough audits to ensure that all sourced raw materials meet the required regulatory standards before being offered to the clients.'
    },
    {
      id: 'key-benefits',
      title: 'Key Benefits for Clients',
      content: '<ul class="list-disc list-inside space-y-2"><li>Strict QA and Regulatory standards ascertain verification and approval of suppliers.</li><li>Timely resolution of queries and concerns, with a commitment to providing sustainable solutions.</li><li>Regular audits of suppliers to maintain quality and compliance.</li><li>Cost-effective and hassle-free outsourcing solutions.</li></ul>'
    },
    {
      id: 'quality-control',
      title: 'Quality Control Measures',
      content: '<ul class="list-disc list-inside space-y-2"><li>Physical verification of goods before dispatch.</li><li>Regular audits of supplier QC labs.</li><li>Tracking and documentation of all sourced raw materials.</li><li>Compliance with industry best practices and standards.</li></ul>'
    },
    {
      id: 'collaborative',
      title: 'Collaborative Approach',
      content: 'Our collaboration with a client begins by gathering a detailed understanding of customers\' specifications, formulation requirements, and necessary regulatory support. After understanding customers\' exact needs through comprehensive research and analysis, we offer raw materials that are in perfect alignment with customer needs.<br/><br/>If you are looking for Raw Material Outsourcing services, where commitment to quality, regulatory compliance, and client satisfaction is the epitome of collaboration, then Arham Exports is the partner you are looking for.<br/><br/><b>Together we can create a trusted partnership in sourcing pharmaceutical ingredients.</b>'
    }
  ];

  return (
    <div className="pt-10 min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            About <span className="text-teal-600">Us</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-5xl mx-auto text-lg text-gray-600 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: companyInfo.aboutUsDescription }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20" id='why-arham'>
        {/* Why Arham Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Why <span className="text-teal-600">Arham</span>?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Arham Exports does much more than move goods. We move markets forward. Breaking new ground through our technical expertise with ideas and creating opportunities through innovation.
          </p>
        </motion.div>

        {/* Accordions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4" value={openAccordion} onValueChange={setOpenAccordion}>
            {accordionItems.map((item) => (
              <AccordionItem 
                key={item.id} 
                value={item.id} 
                className={`border-2 rounded-lg px-6 transition-all duration-300 ${
                  openAccordion === item.id
                    ? 'border-teal-500 bg-teal-50 shadow-lg'
                    : 'border-gray-200 bg-white'
                }`}
              >
                <AccordionTrigger className="hover:no-underline">
                  <h3 className={`text-lg font-semibold text-left ${
                    openAccordion === item.id
                      ? 'text-teal-700'
                      : 'text-gray-900'
                  }`}>
                    {item.title}
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  <div dangerouslySetInnerHTML={{ __html: item.content }} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Our Capabilities Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 pt-16 border-t border-gray-200 scroll-mt-20"
          id='capabilities'
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center">
            Our <span className="text-teal-600">Capabilities</span>
          </h2>
          <div className="w-full px-4 sm:px-6 lg:px-8 py-10">
            {/* Tabs Navigation */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-6 sm:mb-6">
              {capabilityTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCapability(tab.id)}
                  className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full text-s sm:text-sm lg:text-lg font-medium transition-all duration-300 whitespace-nowrap ${
                    activeCapability === tab.id
                      ? 'bg-gray-900 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
              <AnimatePresence mode="wait">
                {capabilityTabs.map((tab) => 
                  activeCapability === tab.id && (
                    <motion.div
                      key={tab.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
                    >
                      <div className="bg-gradient-to-br from-teal-50 to-white p-6 sm:p-8 lg:p-10 rounded-3xl border border-teal-100 shadow-sm">
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">{tab.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-base sm:text-lg">{tab.content}</p>
                      </div>
                    </motion.div>
                  )
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
