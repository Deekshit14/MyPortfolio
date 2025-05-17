import React from 'react'

import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState, useCallback } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { PROJECTS } from '../utils/data';
import ProjectCard from '../components/ProjectCard';

const MyProjects = () => {

     const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
     const [canScrollPrev, setCanScrollPrev] = useState(false);
     const [canScrollNext, setCanScrollNext] = useState(false);

     const updateScrollButtons = useCallback(() => {
          if (!emblaApi)
               return;
          
          setCanScrollPrev(emblaApi.canScrollPrev());
          setCanScrollNext(emblaApi.canScrollNext());
     }, [emblaApi]);


     useEffect(() => {
          if (!emblaApi)
               return;
          
          emblaApi.on("select", updateScrollButtons);
          updateScrollButtons();
     }, [emblaApi, updateScrollButtons]);

     return (
          <section id = "projects" className=' mt-5 sm:mt-14'>
               <div className='container mx-auto px-2 sm:px-8 md:px-10 py-10'>
                    <div className='w-full lg:w-[60vw] mx-auto'>
                         <h4 className='section-title'>Recent Projects</h4>

                         <p className='text-sm text-center mt-4 leading-6 text-white'>
                              From concept to deployment, these projects showcase my technical expertise. <br></br>I focus on clean code, performance and user experience
                         </p>
                    </div>

                    <div className='relative'>
                         <div className='overflow-hidden' ref = {emblaRef}>
                              <div className='flex pt-14 pb-8'>
                                   {PROJECTS.map((project) => (
                                        <div 
                                             key = {project.id} 
                                             className='min-w-[100%] md:min-w-[50%]  text-white'
                                        >
                                             <ProjectCard
                                                  key = {project.id}
                                                  imgUrl = {project.image}
                                                  title = {project.title}
                                                  tags = {project.tags}
                                                  link = {project.link}
                                             />
                                        </div>
                                   ))}
                              </div>
                         </div>

                         {/* Navigation Button */}
                         <button
                              className={`arrow-btn -left-1 sm:-left-3
                                   ${!canScrollPrev ? "opacity-50 cursor-not-allowed" : ""}`
                              }
                              onClick={() => emblaApi && emblaApi.scrollPrev()}
                              disabled={!canScrollPrev}
                         >
                              <IoIosArrowForward className='rotate-180 text-white' />
                         </button>

                         <button
                              className={`arrow-btn -right-1 sm:-right-3 lg:-right-0
                                   ${!canScrollPrev ? "opacity-50 cursor-not-allowed" : ""}`
                              }
                              onClick={() => emblaApi && emblaApi.scrollNext()}
                              disabled={!canScrollNext}
                         >
                              <IoIosArrowForward />
                         </button>
                    </div>
               </div>
          </section>
     )
}

export default MyProjects