import React from 'react'
import {AiOutlineFacebook,AiOutlineTwitter,AiOutlineLinkedin,AiOutlineInstagram,AiFillPhone} from 'react-icons/ai'
const Logo = React.lazy(()=> import('../components/Logo'))
const ContactUsPage =React.memo(() => {
    return (
      <section className='py-6 h-full'>
           <div className='flex flex-col'>
          <div 
          data-aos="fade up"
          data-aos-duration="1000"
          className='flex justify-center items-center flex-col'>
              <div className='flex justify-center items-center py-10  space-x-4'>
                  <Logo className="h-[32px] w-[32px] sm:h-[92.63px] sm:w-[84.3px] text-[#415D43]" />
                  <h1 className='font-[800] text-xl lg:text-[70px] lg:leading-[119.42px] capitalize'>Contact us</h1>
              </div>
          </div>
          <div 
          data-aos="fade up"
          data-aos-duration="1000"
          className='py-6 px-4 sm:px-6 mx-4 sm:mx-20 sm:h-[412px] text-center sm:max-w-[1257px]'>
              <h1 className='font-[700] text-sm sm:text-2xl pb-10'>reach out to us, we are available to help</h1>
              <p className='font-sans font-[400] text-[10px] sm:text-xl text-[#757575]'>join hands to get rid of SGBV</p>
          </div>
          <div 
           data-aos="fade up"
           data-aos-duration="1000"
          className='py-6 px-4 sm:px-6 mx-4 sm:mx-20 sm:-mt-40 flex justify-betweeen gap-4 items-center flex-col sm:flex-row'>
            <div 
            className='w-[350px] sm:w-[302px] h-[187px] text-center bg-[#f9f9f9] gap-[20px] flex flex-col justify-start pt-8 items-center hover:bg-[#415D43] hover:text-white duration-500 transition-all'>
              <h1 className='font-bold sm:text-2xl text-center'>Call our emergency line</h1>
              <p className='font-sans font-[400] sm:text-xl'>+234(0) 9025076961</p>
            </div>
            <div 
            className='w-[350px] sm:w-[302px] h-[187px]text-center bg-[#f9f9f9] gap-[20px] py-6  flex flex-col justify-center items-center hover:bg-[#415D43] hover:text-white duration-500 transition-all'>
              <h1 className='font-bold sm:text-2xl text-center'>send us an email</h1>
              <p className='font-sans font-[400] sm:text-xl'>info@safeher.org</p>
              <p className='font-sans font-[400] sm:text-xl'>support@safeher.com</p>
            </div>
            <div 
            className='w-[350px] sm:w-[302px] h-[187px] text-center bg-[#f9f9f9] gap-[20px] flex flex-col justify-center items-center hover:bg-[#415D43] hover:text-white duration-500 transition-all'>
              <h1 className='font-bold sm:text-2xl text-center'>visit our branch office</h1>
              <p className='font-sans font-[400] sm:text-xl'>The city of Refugee: No 14, Station Road, Along Royalton Hotel, GRA, Ilorin.</p>
            </div>
            <div 
            className='w-[350px] sm:w-[302px] py-6 sm:h-[187px]text-center bg-[#f9f9f9] gap-[20px] flex flex-col justify-center items-center hover:bg-[#415D43] hover:text-white duration-500 transition-all'>
              <h1 className='font-bold sm:text-2xl text-center'>connect with us</h1>
              <p className='font-sans font-[400] sm:text-xl'>stay connected with us on our media platforms</p>
              <div 
               data-aos="fade up"
               data-aos-duration="1000"
              className='flex items-center justify-between space-x-6'>
            <a 
            href='#' className='text-[#757575] font-[14px]'>
            <AiOutlineFacebook />
            </a>
            <a href='#' className='text-[#757575] font-[14px]'>
            <AiOutlineTwitter />
            </a>
            <a href='#' className='text-[#757575] font-[14px]'>
            <AiOutlineLinkedin />
            </a>
            <a href='#' className='text-[#757575] font-[14px]'>
            <AiOutlineInstagram />
            </a>
            <a href='#' className='text-[#757575] font-[14px]'>
            <AiFillPhone />
            </a>
          </div>
        </div>
            </div>
          </div>
      </section>
    )
  }
)
export default ContactUsPage