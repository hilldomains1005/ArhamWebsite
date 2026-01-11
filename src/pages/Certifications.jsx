
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certifications } from '../mock';
import { Award, ShieldCheck, FileCheck, Globe, X } from 'lucide-react';

const iconMap = {
  Award: Award,
  ShieldCheck: ShieldCheck,
  FileCheck: FileCheck,
  Globe: Globe
};

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="bg-white py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Accreditations & Certifications</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our commitment to quality is validated by leading global regulatory bodies.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => {
            const Icon = iconMap[cert.icon] || Award;
            return (
              <motion.div
                key={cert.id}
                layoutId={`card-${cert.id}`}
                onClick={() => setSelectedCert(cert)}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl cursor-pointer border border-gray-100 transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mb-6 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                  <Icon size={32} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-500">{cert.issuer}</p>
                <div className="mt-6 text-xs font-semibold text-teal-600 uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity">
                  View Certificate
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedCert(null)}>
            <motion.div
              layoutId={`card-${selectedCert.id}`}
              className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white text-gray-800 transition-colors z-10"
              >
                <X size={24} />
              </button>
              
              <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                <img 
                  src={selectedCert.image} 
                  alt={selectedCert.name} 
                  className="w-full h-[400px] object-cover"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedCert.name}</h3>
                <p className="text-gray-600 mb-4">Issued by: <span className="font-semibold">{selectedCert.issuer}</span></p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  This certification validates our compliance with international standards for quality management and safety protocols in pharmaceutical exports.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Certifications;
