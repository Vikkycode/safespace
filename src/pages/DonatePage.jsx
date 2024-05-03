import React,{Suspense} from 'react'
import { Loader } from 'lucide-react'
import {AiOutlineFacebook,AiOutlineTwitter,AiOutlineLinkedin,AiOutlineInstagram,AiOutlineWhatsApp} from 'react-icons/ai'
import { Link } from 'react-router-dom'
const Logo = React.lazy(()=> import('../components/Logo'))
const FAQAccordion = React.lazy(()=> import('../components/FAQAccordion'))

const DonatePage =React.memo(() => {
      return (
        <section className='mx-auto max-w-screen-xl sm:py-12 space-y-8 lg:py-16 px-4 sm:px-6  lg:px-20'>
            <div className='flex justify-center items-center flex-col'>
                <div 
                 data-aos="fade up"
                 data-aos-duration="1000"
                className='flex justify-center items-center'>
                    <Logo className="h-[32px] w-[32px] sm:h-[92.63px] sm:w-[84.3px] text-[#415D43]" />
                    <h1 className='font-[800] text-xl lg:text-[70px] lg:leading-[119.42px]'>Support our mission!</h1>
                </div>
    
                <p 
                 data-aos="fade up"
                 data-aos-duration="1000"
                className='font-bold text-center text-sm sm:text-3xl sm:max-w-lg'>small changes make a big impact on people lives
    </p>
                <div 
                 data-aos="fade up"
                 data-aos-duration="1000"
                className='text-start'>
                    <h2 className='font-[400] font-sans sm:text-2xl'>Support Survivors Today</h2>
                    <p className='font-[400] sm:text-xl font-sans text-[#757575]'>please support SafeSpace today by making a donation. Your contribution helps us continue providing essential support services and resources for survivors of sexual and gender-based violence.</p>
                </div>
            </div>
                <div className='text-start flex justify-between items-center'>
                    <div  
                    data-aos="fade up"
                    data-aos-duration="1000">
                    <h3 className='font-[400] text-[10px] sm:text-sm font-sans'>Take future action with a single click.</h3>
                    <p className='font-[400] font-sans text-[10px] sm:text-sm'><span className='text-[#415D43]'>Log in </span>or <span className='text-[#415D43]'>Sign up</span> for <span className='font-bold'>FastAction</span></p>
                    </div>
                    <div 
                     data-aos="fade up"
                     data-aos-duration="1000"
                    className='h-[19px] border border-[#000] w-[107px] py-[16px] px-[13px] gap-[25px] opacity-100 flex justify-center items-center  sm:hidden'>
                        <Link to="" className='font-[400] sm leading-[10.89px]'>fast action</Link>
                    </div>
                </div>
                <div className='space-y-10 justify-start flex'>
                    <form action="">
                        <div 
                         data-aos="fade up"
                         data-aos-duration="1000"
                        className='flex sm:items-center items-start flex-col sm:flex-row sm:space-x-4 pb-8'>
                        <input type="radio" name="" id="" />
                        <p className='font-sans font-[400] text-[10px] sm:text-sm'>one time payment</p>
                        </div>
                        <div 
                         data-aos="fade up"
                         data-aos-duration="1000"
                        className='flex sm:items-center items-start flex-col sm:flex-row sm:space-x-4'>
                        <input type="radio" name="" id="" />
                        <p className='font-sans font-[400] text-[10px] sm:text-sm'>monthly payment</p>
                        </div>
                    </form>
                </div>
                <div className='space-y-4'>
                    <p 
                     data-aos="fade up"
                     data-aos-duration="1000"
                    className='font-sans font-[400] text-[10px] sm:text-sm'>Your monthly gift makes you an important source of support for SafeHer</p>
                    <div className='flex justify-between items-center'>
                    <div 
                     data-aos="fade up"
                     data-aos-duration="1000"
                    className='border border-[#757575] w-[60px] h-[32px]  sm:w-[191px] sm:h-[71px] flex justify-center items-center'>
                        <p className='font-[400] text-[10px] sm:text-xl font-sans'>$25</p>
                    </div>
                    <div 
                     data-aos="fade up"
                     data-aos-duration="1000"
                    className='border border-[#757575] w-[60px] h-[32px]  sm:w-[191px] sm:h-[71px] flex justify-center items-center'>
                        <p className='font-[400] text-[10px] sm:text-xl font-sans'>$25</p>
                    </div>
                    <div 
                     data-aos="fade up"
                     data-aos-duration="1000"
                    className='border border-[#757575] w-[60px] h-[32px]  sm:w-[191px] sm:h-[71px] flex justify-center items-center'>
                        <p className='font-[400] text-[10px] sm:text-xl font-sans'>$200</p>
                    </div>
                    <div 
                     data-aos="fade up"
                     data-aos-duration="1000"
                    className='border border-[#757575] w-[60px] h-[32px]  sm:w-[191px] sm:h-[71px] flex justify-center items-center'>
                        <p className='font-[400] text-[10px] sm:text-xl font-sans'>$500</p>
                    </div>
                    <div 
                     data-aos="fade up"
                     data-aos-duration="1000"
                    className='border border-[#757575] w-[60px] h-[32px]  sm:w-[191px] sm:h-[71px] flex justify-center items-center'>
                        <p className='font-[400] text-[10px] sm:text-xl font-sans'>$1000</p>
                    </div>
                    </div>
                </div>
                <div className='space-y-10'>
                    <form action="">
                        <div 
                         data-aos="fade up"
                         data-aos-duration="1000"
                        className='flex items-center space-x-4 pb-8'>
                        <input type="checkbox" name="" id="" />
                        <p className='font-sans font-[400] text-[10px] sm:text-sm capitalize'>i would like to cover my transaction fee</p>
                        </div>
                        <div 
                         data-aos="fade up"
                         data-aos-duration="1000"
                        className='flex items-center space-x-4'>
                        <input type="checkbox" name="" id="" />
                        <p className='font-sans font-[400]  text-[10px]  sm:text-sm capitalize'>i would like to make payment in honor or memory of someone</p>
                        </div>
                    </form>
                    </div>
    
                    <div 
                     data-aos="fade up"
                     data-aos-duration="1000"
                    className='flex justify-between items-start sm:items-center space-y-4 flex-col sm:flex-row'>
                    <p className='font-sans font-[400] text-[10px] sm:text-2xl text-[#415D43] border-b-2 border-[#415D43]'>donation FAQs</p>
                    <div className='flex justify-between items-center space-x-5'>
                    <div 
                     data-aos="fade up"
                     data-aos-duration="1000"
                    className='border border-[#757575] w-[100px] h-[32px]  sm:w-[191px] sm:h-[71px] flex justify-center items-center'>
                        <p className='font-[400] text-[10px] sm:text-xl font-sans'>Pay with transfer</p>
                    </div>
                    <div 
                     data-aos="fade up"
                     data-aos-duration="1000"
                    className='border border-[#757575] w-[100px]  h-[32px]  sm:w-[191px] sm:h-[71px] flex justify-center items-center'>
                        <p className='font-[400] text-[10px] sm:text-xl font-sans'>Pay with card</p>
                    </div>
                    <div 
                     data-aos="fade up"
                     data-aos-duration="1000"
                    className='border border-[#757575] w-[100px]  h-[32px]  sm:w-[191px] sm:h-[71px] flex justify-center items-center'>
                        <p className='font-[400] text-[10px] sm:text-xl font-sans'>Pay with PayPal</p>
                    </div>
                    </div>
                </div>
                <div className='mx-4 sm:mx-20 flex justify-center items-start sm:items-center flex-col'>
                <div 
                 data-aos="fade up"
                 data-aos-duration="1000"
                className='flex justify-center items-center py-10  space-x-4 border-b-2 pb-4 text-black'>
                    <Logo className="h-[32px] w-[32px] sm:h-[92.63px] sm:w-[84.3px] text-[#415D43]" />
                    <h1 className='font-[800] text-xl lg:text-[70px] lg:leading-[119.42px] capitalize'>Donation FAQS</h1>
                </div>
                <div className='flex items-start sm:items-center  flex-col pt-4'>
                    <div 
                     data-aos="fade up"
                     data-aos-duration="1000"
                    className='flex justify-start space-x-6 items-start'>
              <a href='#' className='text-[#415D43] text-xl sm:text-[32px]'>
              <AiOutlineFacebook />
              </a>
              <a href='#' className='text-[#415D43] text-xl sm:text-[32px]'>
              <AiOutlineTwitter />
              </a>
              <a href='#' className='text-[#415D43] text-xl sm:text-[32px]'>
              <AiOutlineLinkedin />
              </a>
              <a href='#' className='text-[#757575] text-xl sm:text-[32px]'>
              <AiOutlineInstagram />
              </a>
              <a href='#' className='text-[#757575] text-xl sm:text-[32px]'>
              <AiOutlineWhatsApp />
              </a>
            </div>
            <div  data-aos="fade up"
              data-aos-duration="1000">
              <p className='font-medium text-sm'>Below are the most frequently asked questions about SafeSpace.</p>
            </div>
            </div>
            </div>
            <Suspense fallback={<Loader />}>
            <FAQAccordion />
            </Suspense>
        </section>
      )
    }
) 
export default DonatePage