import React from 'react'
import safe from '../../assets/icons/Vector.png'
import {AiOutlineFacebook,AiOutlineTwitter,AiOutlineLinkedin,AiOutlineInstagram,AiOutlineWhatsApp} from 'react-icons/ai'

const Footer =React.memo(() => {
    return (
    <footer class="bg-[#415D43]">
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="lg:flex lg:justify-around lg:items-start lg:gap-8">
  
          <div className='flex items-start'>
  
          <div className='flex flex-col sm:max-w-md'>
          <div 
           data-aos="fade up"
           data-aos-duration="1000"
          className='flex items-center space-x-4'>
            <img src={safe} className='h-[20px] sm:h-[48px] w-[20px] sm:w-[48px] object-cover' alt="" />
           <p className='font-[400] text-white text-sm sm:text-[24px] leading-[32.68px] font-sans'>SafeSpace</p>
          </div>
            <p 
             data-aos="fade up"
             data-aos-duration="1000"
            class="mt-4 font-sans font-[400] text-white text-sm sm:text-xl">
              Your anonymous support network for healing from sexual and gender-based violence.
            </p>
            <div 
             data-aos="fade up"
             data-aos-duration="1000"
            className='flex items-center justify-start space-x-8 pr-2'>
              <a href='#' className='text-white font-[14px]'>
              <AiOutlineFacebook />
              </a>
              <a href='#' className='text-white font-[14px]'>
              <AiOutlineTwitter />
              </a>
              <a href='#' className='text-white font-[14px]'>
              <AiOutlineLinkedin />
              </a>
              <a href='#' className='text-white font-[14px]'>
              <AiOutlineInstagram />
              </a>
              <a href='#' className='text-white font-[14px]'>
              <AiOutlineWhatsApp />
              </a>
            </div>
          </div>
            <div class="col-span-2 sm:col-span-1 text-[#ffffff]">
              <p 
               data-aos="fade up"
               data-aos-duration="1000"
              class="font-bold text-sm sm:text-[16px] leading-[27.3px] ">Contact Us</p>
              <ul 
               data-aos="fade up"
               data-aos-duration="1000"
              class="mt-6 space-y-4 text-sm ">
                <li>
                  <a href="#" class=" transition text-sm font-sans hover:opacity-75 "> info@safeher.org </a>
                </li>
    
                <li>
                  <a href="#" class="transition text-sm font-sans hover:opacity-75 ">support@safeher.com</a>
                </li>
    
                <li className='sm:w-[218px]'>
                  <a href="#" class="transition text-sm font-sans hover:opacity-75 "> The city of Refugee: No 14, Station Road, Along Royalton Hotel, GRA, Ilorin. </a>
                </li>
  
                <li>
                  <a href="#" class="transition text-sm font-sans hover:opacity-75 "> 1-234-555-HOPE</a>
                </li>
              </ul>
            </div>
          </div>
  
          <div className='flex items-start justify-around sm:space-x-20'>
  
            <div class="col-span-2  text-[#ffffff]">
              <p 
               data-aos="fade up"
               data-aos-duration="1000"
              class="font-bold text-sm sm:text-[16px] leading-[27.3px]">Quick Links</p>
              <ul 
               data-aos="fade up"
               data-aos-duration="1000"
              class="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" class=" transition text-sm font-sans hover:opacity-75 ">home</a>
                </li>
    
                <li>
                  <a href="#" class="transition text-sm font-sans hover:opacity-75 ">About Us</a>
                </li>
    
                <li>
                  <a href="#" class="transition text-sm font-sans hover:opacity-75 "> Get Support</a>
                </li>
  
                <li>
                  <a href="#" class="transition text-sm font-sans hover:opacity-75 "> Resources</a>
                </li>
                <li>
                  <a href="#" class="transition text-sm font-sans hover:opacity-75 "> Community</a>
                </li>
              </ul>
            </div>
    
            <div 
             data-aos="fade up"
             data-aos-duration="1000"
            class="col-span-2 sm:col-span-1 text-[#ffffff]">
              <p 
               data-aos="fade up"
               data-aos-duration="1000"
              class="font-bold text-sm sm:text-[16px] leading-[27.3px] uppercase">Stay Informed</p>
              <form class="w-full">
              <label for="UserEmail" className='text-sm font-sans font-[400]'> Email </label>
              <div
               data-aos="fade up"
               data-aos-duration="1000"
                class=" focus-within:ring sm:flex sm:items-center sm:gap-4"
              >
                <input
                  type="email"
                  id="UserEmail"
                  placeholder="email address"
                  class="w-[192px] h-[39px] sm:w-[299px] border-none focus:border-transparent focus:ring-transparent sm:text-sm"
                />
  
              </div>
              <div 
               data-aos="fade up"
               data-aos-duration="1000"
              className='w-full  mt-4  sm:w-[299px]'>
                <button
                  class="mt-1 h-[39px] w-[192px] sm:w-[299px]   px-6 bg-[#ffffff] text-center text-[#415D43] gap-[10px] py-3 text-sm font-bold uppercase tracking-wide transition-none hover:bg-[#415D43] sm:border  hover:text-white sm:mt-0 sm:w-auto sm:shrink-0"
                >
                  Submit
                </button>
              </div>
            </form>
            </div>
        </div>
          </div>
          <div 
           data-aos="fade up"
           data-aos-duration="1000"
          class="sm:flex mt-5 sm:mt-10 sm:justify-between">
            <p class="text-xs text-white">&copy; 2024. Safespace. All rights reserved.</p>
          </div>
      </div>
    </footer>
    )
  }
) 
export default Footer