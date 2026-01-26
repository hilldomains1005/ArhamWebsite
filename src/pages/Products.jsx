
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { products, foodColoursProducts } from '../mock';
import { Search } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui/accordion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';

const Products = () => {
  const navigate = useNavigate();
  // const [searchTerm, setSearchTerm] = useState('');
  const categoryRefs = useRef({});

  // const filteredProducts = products.filter((product) => {
  //   const search = searchTerm.toLowerCase();
  //   return (
  //     product.name.toLowerCase().includes(search) ||
  //     product.category.toLowerCase().includes(search) ||
  //     product.cas.toLowerCase().includes(search)
  //   );
  // });

  // Group food colours products by category
  const groupedByCategory = foodColoursProducts.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
       <div className="py-12">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900"><span className='text-teal-600'>Our</span> Products</h1>
         </div>
       </div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
         <Tabs defaultValue="excipients" className="w-full">
           <TabsList className="grid w-full max-w-md grid-cols-2 h-auto bg-gray-200 rounded-lg p-1">
             <TabsTrigger value="excipients" className="text-lg py-4 px-6 font-semibold text-gray-700 hover:text-gray-900 data-[state=active]:bg-teal-600 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-md transition-all">Excipients</TabsTrigger>
             <TabsTrigger value="food-colours" className="text-lg py-4 px-6 font-semibold text-gray-700 hover:text-gray-900 data-[state=active]:bg-teal-600 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-md transition-all">Food Colours</TabsTrigger>
           </TabsList>

           <TabsContent value="excipients" className="mt-4">
             {/* <div className="relative max-w-xl mb-8">
               <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
               <input 
                 type="text"
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
                 placeholder="Search by name, CAS number, or category..." 
                 className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all shadow-sm"
               />
             </div> */}
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                {products.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-4 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                  >
                    
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-teal-600 transition-colors">
                      {product.name}
                    </h3>
                    {
                      product.category &&
                      <div className="flex justify-between items-start mb-4">
                        
                          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 uppercase tracking-wide">
                            {product.category}
                          </span>
                      </div>
                    }
                    <Accordion type="single" collapsible className="mb-4 md:mb-6">
                      {product.industryDetails.map((detail, idx) => (
                        <AccordionItem key={idx} value={`item-${idx}`}>
                          <AccordionTrigger className="text-sm font-semibold text-gray-700 hover:text-gray-900">
                            {detail.name}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-600 text-sm">
                            <div dangerouslySetInnerHTML={{ __html: detail.functionalApplication }} />
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>

                    <button 
                      onClick={() => navigate('/contact')}
                      className="w-full py-3 rounded-lg border border-gray-200 text-gray-700 font-medium hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300">
                      Request Quote
                    </button>
                  </motion.div>
                ))}
             </div>
           </TabsContent>

           <TabsContent value="food-colours" className="mt-4">
             <Accordion 
               type="single" 
               collapsible 
               className="w-full"
               onValueChange={(value) => {
                 setTimeout(() => {
                   if (categoryRefs.current[value]) {
                     categoryRefs.current[value].scrollIntoView({ behavior: 'smooth', block: 'start' });
                   }
                 }, 100);
               }}
             >
               {Object.entries(groupedByCategory).map(([category, categoryProducts], categoryIdx) => (
                 <AccordionItem 
                   key={categoryIdx} 
                   value={`category-${categoryIdx}`}
                   ref={(el) => {
                     if (el) categoryRefs.current[`category-${categoryIdx}`] = el;
                   }}
                 >
                   <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-teal-600 bg-gray-100 hover:bg-teal-50 px-4 py-3 rounded-lg transition-colors">
                     {category}
                   </AccordionTrigger>
                   <AccordionContent className="pt-4">
                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                       {categoryProducts.map((product, index) => (
                         <motion.div
                           key={product.id}
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ delay: index * 0.1 }}
                           className="bg-white rounded-2xl p-4 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                         >
                           <div className="flex justify-between items-start mb-4">
                             <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 uppercase tracking-wide">
                               {product.industry}
                             </span>
                           </div>
                           
                           <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-teal-600 transition-colors">
                             {product.name}
                           </h3>

                           <button 
                             onClick={() => navigate('/contact')}
                             className="w-full py-3 rounded-lg border border-gray-200 text-gray-700 font-medium hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300">
                             Request Quote
                           </button>
                         </motion.div>
                       ))}
                     </div>
                   </AccordionContent>
                 </AccordionItem>
               ))}
             </Accordion>
           </TabsContent>
         </Tabs>
       </div>
    </div>
  );
};

export default Products;
