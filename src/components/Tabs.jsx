import React from 'react'
import { motion } from 'framer-motion';

const Tabs = ({ tabList, activeTab, onChange }) => {

     const getActiveStyles = (value) => {
          return activeTab === value
               ? "text-white bg-gradient-to-r from-[#F6A64F] to-[#b56141]"
               : "text-[#b56141] bg-transparent"
     }

     return (
          <div className='flex items-center justify-center mt-10 mb-4 sm:my-10'>
               <div className='bg-[#fff6eb] rounded-2xl md:rounded-full flex flex-wrap items-center justify-center gap-y-2 sm:gap-y-0 py-2 px-2'>
                    {tabList.map((tab) => (
                         <motion.button 
                              key = {tab.id}
                              initial = {{ opacity: 0.8, scale: 1 }} 
                              animate = {{
                                   opacity: activeTab === tab.value ? 1 : 0.8,
                                   scale: activeTab === tab.value ? 1.05 : 1
                              }}
                              transition={{ duration: 0.2 }}
                              className={`text-sm md:text-[15px] ${getActiveStyles(tab.value)} rounded-full px-4 lg:px-10 py-[6px] md:py-3`}
                              onClick={() => onChange(tab.value)}
                         >
                              {tab.label}
                         </motion.button>
                    ))}
               </div>
          </div>
     )
}

export default Tabs