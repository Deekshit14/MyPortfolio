import React from 'react'

const CertificateCard = ({imgUrl, title, link}) => {
     return (
          <div className='h-full bg-white rounded-xl overflow-hidden shadow-md mx-4 '>
               <img src={imgUrl} alt={title} className='w-full h-72 md:h-80 lg:object-cover' />

               <div className='px-4 py-5 bg-[#332c2c12]'>
                    <h3 className='text-[#0e509b] text-base font-semibold line-clamp-2 overflow-hidden text-ellipsis mb-4'>{title}</h3>
                    {/* <div className='flex flex-wrap gap-2 mt-2 mb-4'>
                         {tags.map((tag, index) => (
                              <span key={index} className='text-xs text-[#b56141] bg-orange-100 px-3 py-1 rounded'>
                                   {tag}
                              </span>
                         ))}
                    </div> */}
                    {/* <span className='text-[#1d1a1a] text-sm font-medium'>GitHub Link:</span> */}
                    <div className='text-gray-600 text-sm font-medium'>Certificate Link:</div>
                    <a href={link} target="_blank" className='text-sm text-[#4177b5] py-1 break-words whitespace-normal overflow-hidden'> {link}</a>
               </div>
          </div>
     )
}

export default CertificateCard