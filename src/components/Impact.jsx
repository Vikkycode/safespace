import React from 'react'
import Button from './Button'

const Impact = () => {
  return (
 
<section>
  <div class="max-w-screen-xl py-8 sm:h-screen  sm:py-12  lg:py-8  px-4 sm:px-6 lg:pl-4 lg:pr-20">
    <h1 className='text-[16px] leading-[27.3px] py-4 font-bold text-center text-gray-900 md:text-3xl'>Our impacts</h1>
    <div class="grid grid-cols-1 gap-y-8 sm:w-full sm:bg-[#f6f6f6] lg:p-20 lg:grid-cols-2 lg:items-center lg:gap-x-16">
      <div class="text-start lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
        <div className='flex flex-col'>
        <div className='hidden sm:block'>
        <h2 class="text-xl font-bold sm:text-2xl">0ur Vision</h2>
        <p class="mt-4 text-[#757575] font-sans sm:text-2xl text-center sm:text-start w-[266px] h-[33px] sm:w-[1079px] sm:h-[82px]">
         
We offer a safe, supportive platform for survivors of sexual and gender-based violence, promoting community connections, resource access, and advocacy for change, ensuring confidentiality and respect.
        </p>
        </div>
        <div className='sm:text-left text-center'>
        <h2 class="text-xl font-bold sm:text-2xl hidden sm:block">Our Mission</h2>
        <p class="mt-4 text-gray-600 sm:text-2xl sm:w-[1047px] text-center h-[54px]">
        we offer confidential, inclusive space for survivors of sexual and gender-based violence to connect, access resources, and share experiences, empowering them for healing and community.
        </p>
        </div>
        </div>
        <div class="mt-16 text-center  sm:text-left md:mt-8">
        <Button href='/about' title={"About us"}/>
      </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Impact