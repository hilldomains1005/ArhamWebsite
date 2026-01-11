
import React from 'react';
import { motion } from 'framer-motion';

const Hero3D = () => {
  return (
    <div className="w-full h-full absolute top-0 right-0 z-0 overflow-hidden pointer-events-none">
       {/* Animated Blobs to simulate depth and 3D feel */}
       <motion.div 
         animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
         }}
         transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear" 
         }}
         className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-gradient-to-br from-teal-400 to-blue-500 rounded-full blur-3xl opacity-20 mix-blend-multiply"
       />
       
       <motion.div 
         animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
         }}
         transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear" 
         }}
         className="absolute bottom-[-10%] right-[20%] w-[600px] h-[600px] bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20 mix-blend-multiply"
       />

       <motion.div 
          animate={{ 
             y: [0, -50, 0],
          }}
          transition={{ 
             duration: 15,
             repeat: Infinity,
             ease: "easeInOut" 
          }}
          className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-gradient-to-br from-orange-300 to-yellow-300 rounded-full blur-3xl opacity-20 mix-blend-multiply"
       />
    </div>
  );
};

export default Hero3D;
