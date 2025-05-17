import React, { useState } from 'react'
import { SKILL_TABS, SKILLS } from '../utils/data'
import Tabs from '../components/Tabs';
import SkillCard from '../components/SkillCard';
import { motion } from 'framer-motion';

const TechnicalProficiency = () => {

     const [tabData, setTabData] = useState(SKILLS);
     const [activeTab, setActiveTab] = useState("all");

     const handleTabValueChange = (value) => {
          if (value === "all") {
               setTabData(SKILLS);
               setActiveTab("all");
               return;
          }

          const updatedList = SKILLS.filter((skill) => skill.type === value);
          setTabData(updatedList);

          setActiveTab(value);
     }

     return (
          <section id="skills" className='mt-20'>
               <div className='container mx-auto p-4 sm:p-10'>
                    <div className='w-full lg:w-[60vw] mx-auto'>
                         <h4 className='section-title'>
                              Technical Proficiency
                         </h4>

                         <p className='text-sm text-center mt-4 leading-6 text-white'>
                              A versatile developer with a strong foundation in both frontend and backend technologies. Proficient in building modern web applications, RESTful APIs, and database management. Passionate about learning new technologies and improving coding skills.
                         </p>
                    </div>

                    <Tabs
                         tabList={SKILL_TABS}
                         activeTab={activeTab}
                         onChange={handleTabValueChange}
                    />

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                         {tabData.map((skill, index) => (
                              <motion.div key={skill.id}
                                   initial = {{ opacity: 0, y: 20 }}
                                   animate = {{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.4, delay: index * 0.1 }}
                              >
                                   <SkillCard
                                        icon={<skill.icon className="w-6 h-6 text-[#F6A64F]" />}
                                        skillName={skill.skill}
                                        description={skill.description}
                                        progress={skill.progress}
                                   />
                              </motion.div>
                         ))}
                    </div>
               </div>
          </section>
     )
}

export default TechnicalProficiency