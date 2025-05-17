import React from 'react'

const SkillCard = ({icon, skillName, description, progress}) => {
     return (
          // <div className='bg-[#030b1b] rounded-2xl border border-[#fce8d4] p-4'>
          // <div className='bg-[#08132b] hover:bg-[#212836] rounded-2xl border border-[#fce8d4] p-4'>
          <div className='bg-[#08132b]  rounded-2xl border border-[#fce8d4] p-4 hover:shadow-[0_0_20px_#fce8d4] transition duration-300'>
               <div className='flex gap-3'>
                    <div className='w-10 h-10 flex items-center justify-center bg-gradient-to-b from-[#fdeddd] to-[#ffffff] rounded-[7px]'>
                         {icon}
                    </div>

                    <div className='flex-1'>
                         <div className='flex items-center justify-between'>
                              <p className='text-[13px] text-white font-medium'>{skillName}</p>
                              <p className='text-xs text-[#b56141] font-medium'>{progress} %</p>
                         </div>

                         <div className='w-full bg-[#FFFCF8] rounded-md h-[5px] relative mt-2'>
                              <div className='bg-[#F6A64F] h-[5px] rounded-md' style={{width: `${progress}%`}}></div>
                         </div>
                    </div>
               </div>

               <p className='text-sm text-gray-300 text-justify leading-5 mt-2 md:min-h-[90px] md:max-h-[90px]'>{description}</p>
          </div>
     )
}

export default SkillCard