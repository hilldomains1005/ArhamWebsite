
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { companyInfo, boardMembers } from '../mock';
import { Target, Eye, Users } from 'lucide-react';

const About = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState(searchParams.get('tab') || 'vision');

  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  const tabs = [
    { id: 'vision', label: 'Vision', icon: Eye },
    { id: 'goals', label: 'Goals', icon: Target },
    { id: 'board', label: 'Board of Directors', icon: Users },
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
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
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed"
          >
            {companyInfo.description}
          </motion.p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gray-900 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:border-gray-300'
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === 'vision' && (
              <motion.div
                key="vision"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="max-w-4xl mx-auto"
              >
                <div className="bg-gradient-to-br from-teal-50 to-white p-10 rounded-3xl border border-teal-100 shadow-sm text-center">
                   <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Vision & Mission</h2>
                   <div className="grid md:grid-cols-2 gap-12 text-left">
                      <div>
                        <h3 className="text-xl font-bold text-teal-700 mb-4 flex items-center gap-2">
                           <Eye className="w-6 h-6" /> Vision
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{companyInfo.vision}</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-purple-700 mb-4 flex items-center gap-2">
                           <Target className="w-6 h-6" /> Mission
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{companyInfo.mission}</p>
                      </div>
                   </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'goals' && (
              <motion.div
                key="goals"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="max-w-3xl mx-auto"
              >
                 <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-lg">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Strategic Goals</h2>
                    <ul className="space-y-6">
                      {companyInfo.goals.map((goal, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm">
                            {idx + 1}
                          </span>
                          <span className="text-gray-700 text-lg">{goal}</span>
                        </li>
                      ))}
                    </ul>
                 </div>
              </motion.div>
            )}

            {activeTab === 'board' && (
              <motion.div
                key="board"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="grid md:grid-cols-3 gap-8"
              >
                {boardMembers.map((member) => (
                  <div key={member.id} className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500 h-64 w-full"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                      <p className="text-sm font-medium text-teal-600 mb-4">{member.role}</p>
                      <p className="text-gray-600 text-sm">{member.bio}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default About;
