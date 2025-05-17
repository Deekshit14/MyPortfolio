import React from 'react'

const ContactInfoCard = ({icon, text}) => {
     return (
          <div className='flex items-center gap-5 bg-[#2c2f3f] rounded-lg border border-[#454a64] px-4 py-3 mb-5'>
               <div className='w-10 h-10 text-xl text-white flex items-center justify-center bg-gradient-to-r from-[#F6A64F] to-[#b56141] rounded-lg flex-shrink-0 self-start'>
                    {icon}
               </div>

               <p className='text-[#b56141] text-xs md:text-sm break-words whitespace-normal overflow-hidden'>{text}</p>
          </div>
     )
}

export default ContactInfoCard