import React from 'react'

const StatInfoCard = ({count, label}) => {
     return (
          <div className='flex-1 flex gap-3 md:gap-5 bg-gradient-to-b from-[#d4b99d] to-[#c0802d] rounded-[14px] p-5 hover:shadow-[0_0_20px_#c0802d] transition duration-300'>
               <h4 className='text-4xl md:text-5xl font-medium text-[#b56141]'>{count}</h4>
               <p className='text-sm md:text-[16px] font-semibold text-black leading-6 whitespace-pre-line'>{label}</p>
          </div>
     )
}

export default StatInfoCard