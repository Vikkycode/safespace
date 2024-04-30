import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <section>
  <div class="mx-auto max-w-screen-xl sm:py-12  lg:py-16 px-4 sm:px-6  lg:px-20">
    <div class="grid grid-cols-1  gap-8 lg:grid-cols-1 lg:gap-10">
    <div 
     class="p-4 lg:py-24 lg:pl-20 bg-black/40 bg- sm:h-[504px] h-64 w-[350px] sm:w-[1120px] absolute space-y-8 z-[1]">
        <h2 
         data-aos="fade up"
         data-aos-duration="3000"
        class="text-3xl font-bold sm:text-[70px] text-[#ffffff] sm:leading-[119.42px]">SafeSpace Heroes</h2>
        <p 
         data-aos="fade up"
         data-aos-duration="3000"
        class="mt-4 text-white sm:mb-16 sm:font-[400] text-sm sm:text-[24px] sm:leading-[32.68px] sm:text-[#ffffff] sm:h-[66px] sm:w-[874px]">
        Your anonymous support network for healing from sexual and gender-based violence.
        </p>
        <Button 
         data-aos="fade up"
         data-aos-duration="3000"
        href={'/forum'} title="join forum"/>
      </div>
      <div class="h-64 rounded-lg sm:h-80 lg:h-[504px] lg:w-full">
        <img
          alt="safe space banner hero"
          src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          class="inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  </div>
</section>
  )
}
export default Hero