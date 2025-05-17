import React from 'react'

import PROFILE_PIC from '../assets/images/profile-pic.jpeg'
import { ABOUT_ME } from '../utils/data'

const AboutMe = () => {
     return (
          <section id = "about" className='container mx-auto px-8 py-16'>

               <h4 className='block lg:hidden w-[200px] section-title text-left mb-10'>About Me</h4>

               <div className='flex flex-col lg:flex-row gap-16 items-start justify-between'>
                    <div className='hidden lg:block'>
                         <img src={PROFILE_PIC} alt="Profile" className='profile-pic-about' />
                    </div>

                    <div className='flex-1'>
                         <h4 className='hidden lg:block w-[200px] section-title text-left text-white'>About Me</h4>
                         
                         <p className='text-sm text-justify leading-6 whitespace-pre-line lg:mt-4 text-white'>
                              {ABOUT_ME.content}
                         </p>

                         <div className='flex gap-4 mt-6 '>
                              {ABOUT_ME.socialLinks.map((item) => (
                                   <a key = {item.label} 
                                        href = {item.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className='cursor-pointer group'
                                   >
                                        <item.icon 
                                             className='text-2xl text-[#b56141] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:translate-y-[-2px] group-hover:text-[#F6A64F]' 
                                        />
                                   </a>
                              ))}
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default AboutMe