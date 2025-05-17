import React from 'react'
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState, useCallback } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { CERTIFICATES } from '../utils/data';
import CertificateCard from '../components/CertificateCard';

const MyCertificates = () => {
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
          <section id="certificates" className=' mt-5 sm:mt-14'>
               <div className='container mx-auto px-2 sm:px-8 md:px-0 lg:px-10 py-10'>
                    <div className='w-full lg:w-[60vw] mx-auto'>
                         <h4 className='section-title'>Recent Certification</h4>

                         <p className='text-sm text-center mt-4 leading-6 text-white'>
                              I’m continuously expanding my skill set through hands-on learning and professional certifications. Here are some of my most recent achievements that reflect my commitment to growth in technology and development.
                         </p>
                    </div>

                    <div className='relative'>
                         <div className='overflow-hidden' ref={emblaRef}>
                              <div className='flex pt-14 pb-8'>
                                   {CERTIFICATES.map((certificate) => (
                                        <div
                                             key={certificate.id}
                                             className='min-w-[100%] md:min-w-[50%]  text-white'
                                        >
                                             <CertificateCard
                                                  key={certificate.id}
                                                  imgUrl={certificate.image}
                                                  title={certificate.title}
                                                  link={certificate.link}
                                             />
                                        </div>
                                   ))}
                              </div>
                         </div>

                         {/* Navigation Button */}
                         <button
                              className={`arrow-btn -left-1 lg:-left-0
                                        ${!canScrollPrev ? "opacity-50 cursor-not-allowed" : ""}`
                              }
                              onClick={() => emblaApi && emblaApi.scrollPrev()}
                              disabled={!canScrollPrev}
                         >
                              <IoIosArrowForward className='rotate-180 text-white' />
                         </button>

                         <button
                              className={`arrow-btn -right-1 lg:-right-0
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
export default MyCertificates