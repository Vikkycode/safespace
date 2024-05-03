import React from 'react'
import Button from './Button'
const Donate =React.memo(() => {
   return (
     <section>
     <div 
     class="max-w-screen-xl py-8 sm:h-screen  sm:py-12  lg:py-8  px-4 sm:px-6 lg:pl-4 lg:pr-20">
       <h1 
        data-aos="fade up"
        data-aos-duration="1000"
       className='text-[16px] leading-[27.3px] py-4 font-bold text-center text-gray-900 md:text-3xl sm:pb-20'>Support our mission!</h1>
       <div class="grid grid-cols-1 gap-y-8 sm:w-full bg-[#f6f6f6] lg:p-20 lg:grid-cols-2 lg:items-center lg:gap-x-16">
         <div class="text-center sm:text-start lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
           <div className='flex flex-col'>
           <div
            data-aos="fade up"
            data-aos-duration="1000"
           >
           <p class="mt-4 text-[#757575] font-[500] font-sans text-sm sm:text-xl leading-[34.12px] sm:w-[1079px] h-[82px]">
            
           Be a lifeline for survivors. Your donation empowers healing and fosters resilience. Support our mission today.
           </p>
           </div>
           </div>
           <div 
            data-aos="fade up"
            data-aos-duration="1000"
           class="mt-4 md:mt-8">
           <Button href='/donate' title={"Donate"}/>
         </div>
         </div>
       </div>
     </div>
   </section>
   )
 }
)

export default Donate