import React from 'react';
// import PROFILE_PIC from '../assets/images/profile_pic.jpeg';
import PROFILE_PIC from '../assets/images/profile-pic.jpeg';
import RESUME from '../assets/DEEKSHIT.pdf';
import ICON_1 from '../assets/images/react-icon.jpeg';
import ICON_2 from '../assets/images/react-icon.png';
import ICON_3 from '../assets/images/react-icon.png';
import ICON_4 from '../assets/images/react-icon.png';
import { STATS } from '../utils/data';
import StatInfoCard from '../components/StatInfoCard';


          

const Hero = () => {
     return (
          <section id = "hero" className='container mx-auto px-8'>
               <div className='flex flex-col lg:flex-row gap-14 items-center justify-between mt-[80px]'>
                    <div className='order-2 lg:order-1 text-center lg:text-left mt-16 lg:mt-0'>
                         <h3 className='text-xl lg:text-2xl font-medium text-white'>👋Hi, I'm Deekshit M</h3>
                         <h1 
                              className='w-full lg:w-[480px] text-4xl lg:text-5xl font-bold leading-[50px] lg:leading-[60px] mt-3 bg-gradient-to-r from-[#F6A64F] to-[#b56141] bg-clip-text text-transparent'
                         >
                              Passionate Full Stack Developer
                         </h1>

                         <p className='w-full lg:w-[500px] text-sm lg:text-base mt-4 text-white'>
                              I'm Full-stack developer with strong expertise in both frontend and backend technologies, specializing in React for frontend development and Spring Boot, Nodejs for backend. Passionate about building efficient, scalable web applications
                         </p>

                         <div className='flex justify-center lg:justify-start gap-4 md:gap-8 mt-6'>
                              <a href="https://github.com/Deekshit14">
                                   <button className='flex-1 md:flex-none action-btn-outline btn-scale-anim'>
                                        View My Work
                                   </button>
                              </a>
                              <a href={RESUME} download>
                                   <button className='flex-1 md:flex-none action-btn btn-scale-anim'>Download Resume</button>
                              </a>
                         </div>
                    </div>

                    <div className='w-[270px] sm:w-[300px] md:w-[370px] h-[288px] md:h-[350px] bg-[#2c2f3f] rounded-3xl relative order-1 lg:order-2 flex items-center justify-center '>
          
                         <img src={PROFILE_PIC} alt="Profile Pic" className='profile-pic rounded-3xl object-cover' />
                         
                         <div className="icon-img -left-7 sm:-left-10 bottom-10 sm:bottom-12 md:bottom-16 rotate-[1.75deg] bg-[#08264d] p-2">
                               <i className="devicon-java-plain text-white colored text-[32px] md:text-[48px]"></i>
                         </div>

                         <div className="icon-img left-5 md:left-10 -bottom-4 sm:-bottom-4 rotate-[2.75deg] bg-[#08264d] p-2 ">
                               <i className="devicon-react-original text-white colored text-[32px] md:text-[48px]"></i>
                         </div>

                         <div className="icon-img sm:left-[110px] md:left-[160px] -bottom-8 sm:-bottom-8 md:-bottom-8 rotate-[3.75deg] bg-[#08264d] p-2 ">
                               <i className="devicon-javascript-plain text-white colored text-[32px] md:text-[48px]"></i>
                         </div>

                         <div className="icon-img left-[200px] md:left-[275px] -bottom-11 sm:-bottom-11 md:-bottom-12 rotate-[4.75deg] bg-[#08264d] p-2">
                               <i className="devicon-spring-original text-white colored text-[32px] md:text-[48px]"></i>
                         </div>
                    </div>
               </div>

               <div className='flex gap-12 mt-16 md:mt-24 flex-wrap'>
                    {STATS.map((item) => (
                         <StatInfoCard key = {item.id} count = {item.count} label = {item.label} />
                    ))}
               </div>
          </section>
     )
}

export default Hero