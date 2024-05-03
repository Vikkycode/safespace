import React from 'react'
import Button from './Button'
import hero from '../assets/images/pic.webp'
import LazyLoadedImage from './LazyLoadedImage'

const Hero =React.memo(() => {
    return (
      <section>
    <div class="mx-auto max-w-screen-xl sm:py-12  lg:py-16 px-4 sm:px-6  lg:px-20">
      <div class="grid grid-cols-1  gap-8 lg:grid-cols-1 lg:gap-10">
      <div 
       class="p-4  lg:py-24 lg:pl-20  bg-black/40  sm:h-[504px] h-64 w-[330px] sm:w-[1120px] absolute space-y-8 ">
          <h2 
           data-aos="fade up"
           data-aos-duration="1000"
          class="text-3xl font-bold sm:text-[70px] text-[#ffffff] sm:leading-[119.42px]">SafeSpace Heroes</h2>
          <p 
           data-aos="fade up"
           data-aos-duration="1000"
          class="mt-4 text-white sm:mb-16 sm:font-[400] text-sm sm:text-[24px] sm:leading-[32.68px] sm:text-[#ffffff] sm:h-[66px] sm:w-[874px]">
          Your anonymous support network for healing from sexual and gender-based violence.
          </p>
          <Button 
           data-aos="fade up"
           data-aos-duration="1000"
          href={'/forum'} title="join forum"/>
        </div>
        <div class="h-64 rounded-lg sm:h-80 lg:h-[504px] lg:w-full">
          <LazyLoadedImage
            alt="safe space banner hero"
            src={hero}
            className="inset-0 h-64 w-96  sm:h-80 lg:h-[504px] lg:w-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
    )
  }
) 
export default Hero