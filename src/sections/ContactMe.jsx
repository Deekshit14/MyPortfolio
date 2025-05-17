import React from 'react'
import { ABOUT_ME } from '../utils/data'
import ContactInfoCard from '../components/ContactInfoCard';
import { IoMdMail } from "react-icons/io";
import { IoPhonePortraitOutline } from 'react-icons/io5';
import { MdOutlineWeb } from "react-icons/md";
import { FaLinkedin } from 'react-icons/fa';


const ContactMe = () => {
     return (
          <section id = "contact">
               <div className='container mx-auto p-10'>
                    <div className='w-full lg:w-[60vw] mx-auto'>
                         <h4 className='section-title'>Contact Me</h4>

                         <p className='text-sm text-center mt-4 leading-6 text-white'>
                              An adaptable developer with hands-on experience in the latest tools and frameworks, driven to build high-performance, user-centric applications
                         </p>
                    </div>
                    
                    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-16 mt-16'>
                         <div>
                              <ContactInfoCard icon = {<IoMdMail />} text = {ABOUT_ME.email} />
                              <ContactInfoCard icon = {<IoPhonePortraitOutline />} text = {ABOUT_ME.phone} />
                              <ContactInfoCard icon = {<FaLinkedin />} text = {ABOUT_ME.linkedIn} />
                         </div>

                         <h5 className='md:hidden text-[#b56141] text-lg font-medium mt-7 pb-5'>Contact Form</h5>

                         <form className='flex flex-col'>
                              <input 
                                   type = "text" 
                                   name = "fullname" 
                                   placeholder='Full Name' 
                                   id = "" 
                                   className='input-box' 
                                   autoComplete='off'
                              />

                              <input 
                                   type = "email" 
                                   name = "email" 
                                   placeholder='Email' 
                                   id = "" 
                                   className='input-box' 
                                   autoComplete='off'
                              />

                              <textarea
                                   type = "text" 
                                   name = "message" 
                                   placeholder='Message' 
                                   id = "" 
                                   rows = {3}
                                   className='input-box' 
                                   autoComplete='off'
                              />

                              <button className='action-btn btn-scale-anim'>Submit</button>
                         </form>
                    </div>
               </div>
          </section>
     )
}

export default ContactMe