import React,{Suspense} from 'react'
import { featureItems } from '../utils/data'

import diversity from '../assets/images/Diversity.webp'
import selfcare from '../assets/images/Selfcare.webp'
import target from '../assets/images/Target.webp'
import chat from '../assets/images/Chat.webp'
const Button = React.lazy(()=> import('../components/Button'))
const LazyLoadedImage = React.lazy(()=> import('../components/LazyLoadedImage'))
const Team =React.memo(() => {
    return (
  <section class="flex justify-between px-4 flex-col sm:flex-row sm:px-6  lg:px-20">
    <div class=" lg:py-24">
      <div data-aos="fade up" 
      data-aos-duration="1000"
      class="mx-auto max-w-xl text-center sm:text-start">
        <h2 
        data-aos="fade up" 
        data-aos-duration="1000"
        class="text-[16px] leading-[27.3px] py-4 font-[700] text-start text-gray-900 md:text-3xl">
        Join Our Team
        </h2>
        <p 
        data-aos="fade up" 
        data-aos-duration="1000"
        class="text-[#757575] font-[400] font-sans md:text-sm md:text-2xl md:mt-4 md:block text-center sm:text-start w-[350px] sm:w-[501px] sm:h-[198px]">
        we are seeking dedicated individuals passionate about supporting survivors of sexual and gender-based violence to empower them and create positive change, and explorie opportunities to create a safer, more supportive world.
        </p>
        <div 
        data-aos="fade up" 
        data-aos-duration="1000"
        class="mt-4 md:mt-8">
          <Button href={'/safechat'} title={"join us"}/>
        </div>
      </div>
    </div>
    <div 
    className="grid grid-cols-2 gap-x-2 sm:gap-x-6 mt-10  sm:grid-cols-2">
            <span 
            data-aos="fade up" 
            data-aos-duration="1000"
            className="inline-flex flex-col justify-center items-center bg-[#f6f6f6] h-[110px] w-[165px] sm:h-[223px] sm:w-[290px]  p-3">
              <LazyLoadedImage 
              src={diversity} 
              className='h-[84px] object-contain w-[61px]' 
              alt="diversity"
              />
            <h2 className="mt-2 font-[400] text-sm sm:text-xl font-sans">Diversity</h2>
            </span>
  
            <span 
            data-aos="fade up" 
            data-aos-duration="1000"
            className="inline-flex flex-col justify-center items-center rounded-lg bg-[#f6f6f6] h-[110px] w-[165px] sm:h-[223px] sm:w-[290px]  p-3">
              <LazyLoadedImage 
              src={target} 
              className='h-[84px] object-contain w-[61px]' 
              alt="we give way" />
            <h2 className="mt-2 font-[400] text-sm sm:text-xl font-sans">we give ways</h2>
            </span>
  
            <span 
            data-aos="fade up" 
            data-aos-duration="1000"
            className="inline-flex  mt-4 md:mt-8 flex-col justify-center items-center rounded-lg bg-[#f6f6f6] h-[110px] w-[165px] sm:h-[223px] sm:w-[290px]  p-3">
              <LazyLoadedImage 
              src={selfcare} 
              className='h-[84px] w-[61px] object-contain' 
              alt="self care" 
              />
            <h2 className="mt-2 font-[400] text-sm sm:text-xl font-sans">Self care</h2>
            </span>
  
            <span 
            data-aos="fade up" 
            data-aos-duration="1000"
            className="inline-flex mt-4 md:mt-8 flex-col justify-center items-center rounded-lg bg-[#f6f6f6] h-[110px] w-[165px] sm:h-[223px] sm:w-[290px]  p-3">
              <LazyLoadedImage 
              src={chat} 
              className='h-[84px] object-contain w-[61px]' 
              alt="safe chat" />
            <h2 className="mt-2 font-[400] text-sm sm:text-xl font-sans">safe chat</h2>
            </span>
        </div>
  </section>
    )
  }
) 
export default Team