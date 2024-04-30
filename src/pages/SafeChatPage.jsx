import React,{Suspense} from 'react'
import { Loader } from 'lucide-react'
import safechat from '../assets/images/Chat.png'
import {AiOutlineFacebook,AiOutlineTwitter,AiOutlineLinkedin,AiOutlineInstagram,AiFillPhone} from 'react-icons/ai'
const LazyLoadedImage = React.lazy(()=> import('../components/LazyLoadedImage'))
const Button = React.lazy(()=> import('../components/Button'))
const Logo = React.lazy(()=> import('../components/Logo'))
const SafeChatAccordion = React.lazy(()=> import('../components/SafeChatAccordion'))

const SafeChatPage = () => {
  return (
    <section className='py-6 h-full'>
    <div className='flex flex-col'>
   <div className='flex justify-center items-center flex-col'>
       <div 
        data-aos="fade up"
        data-aos-duration="3000"
       className='flex justify-center items-center py-10 sm:py-0  space-x-4'>
           <LazyLoadedImage 
           src={safechat} 
           className="h-[32px] w-[32px] sm:h-[92.63px] sm:w-[129px] text-[#415D43]" 
           alt='safe chat icon' />
           <h1 className='font-[800] text-xl lg:text-[70px] lg:leading-[119.42px] capitalize'>Safe Chat</h1>
       </div>
   </div>
   <div 
    data-aos="fade up"
    data-aos-duration="3000"
   className='sm:py-6 px-4 sm:px-6 mx-4 sm:mx-20 sm:h-[412px] text-center sm:max-w-[1257px]'>
       <p className='font-sans font-[400] text-[10px] sm:text-xl text-[#757575] hidden sm:block'>Our confidential chat support service provides a safe and supportive space for survivors of SGBV.</p>
       <h2 className='font-bold text-center sm:text-left mt-4
        sm:mt-40 text-xs sm:text-2xl'>How it works</h2>
   </div>

   <div className='flex flex-col justify-between items-center'>
   <div className='py-6 px-4 sm:-mt-40 flex justify-between gap-4 items-center flex-col sm:flex-row'>
     <div className='w-[350px] sm:w-[322px] h-[187px] text-center bg-[#f9f9f9] gap-[20px] flex flex-col justify-start py-4 px-3 items-center'>
       <div 
        data-aos="fade up"
        data-aos-duration="3000"
       className='flex justify-center items-center space-x-2'>
       <h1 className='font-bold text-xl sm:text-2xl text-center'>stage </h1>
       <p className='bg-[#415D43] h-[16px] w-[16px] sm:h-[31px] sm:w-[31px] flex justify-center items-center rounded-full text-white text-xs'>1</p>
       </div>
       <p className='font-sans font-bold text-xs text-[#415D43]  sm:text-2xl capitalize'>Anonymous and secure</p>
       <p className='font-sans font-[400] text-xs text-[#757575]  sm:text-xl '>get support without revealing your identity.</p>
     </div>
     <div className='w-[350px] sm:w-[322px] h-[187px] text-center bg-[#f9f9f9] gap-[20px] flex flex-col justify-start py-4 px-3 items-center'>
       <div 
        data-aos="fade up"
        data-aos-duration="3000"
       className='flex justify-center items-center space-x-2'>
       <h1 className='font-bold text-xl sm:text-2xl text-center'>stage </h1>
       <p className='bg-[#415D43] h-[16px] w-[16px] sm:h-[31px] sm:w-[31px] flex justify-center items-center rounded-full text-white text-xs'>2</p>
       </div>
       <p className='font-sans font-bold text-xs text-[#415D43]  sm:text-2xl capitalize'>trained support rep</p>
       <p className='font-sans font-[400] text-xs text-[#757575]  sm:text-xl '>our team is here to help you with everything you need</p>
     </div>
     <div 
      data-aos="fade up"
      data-aos-duration="3000"
     className='w-[350px] sm:w-[322px] h-[187px] text-center bg-[#f9f9f9] gap-[20px] flex flex-col justify-start py-4 px-3 items-center'>
       <div className='flex justify-center items-center space-x-2'>
       <h1 className='font-bold text-xl sm:text-2xl text-center'>stage </h1>
       <p className='bg-[#415D43] h-[16px] w-[16px] sm:h-[31px] sm:w-[31px] flex justify-center items-center rounded-full text-white text-xs'>3</p>
       </div>
       <p className='font-sans font-bold capitalize text-xs text-[#415D43]  sm:text-2xl'>24/7 service</p>
       <p className='font-sans font-[400] text-xs text-[#757575]  sm:text-xl '>we are available 24 hours a day, 7 days a week</p>
     </div>
     </div>
     <div 
      data-aos="fade up"
      data-aos-duration="3000"
     className='mx-20'>
        <h1 className='font-bold text-xs sm:text-2xl text-left'>chat with us directly here!</h1>
       <textarea name="" id="" placeholder='Type A Message...' className='h-[190px] w-[327px] sm:h-[302px] sm:w-[1000px] resize-none py-6 px-4  bg-[#f6f6f6]' cols="150" rows="30"></textarea>
       <div 
        data-aos="fade up"
        data-aos-duration="3000"
       className='text-end sm:text-center'>
       <Button title="Send message" />
       </div>
     </div>
     <div 
      data-aos="fade up"
      data-aos-duration="3000"
     className='mx-20'>
        <h1 className='font-medium text-2xl text-left hidden sm:block'>please note:</h1>
        <p className='font-semibold sm:text-xl text-[#757575] py-4 hidden sm:block'>If you are in immediate danger or experiencing a crisis, please seek emergency assistance.</p>
        <p className='font-[600] font-sans text-sm block sm:hidden'>Emergency assistance</p>
        <h1 className='font-bold text-xs sm:text-2xl py-4 text-[#757575]'>we recommend using a private device and network to ensure your safety and confidentiality</h1>
       <textarea name="" id="" placeholder='Start Chatting Now...' className='h-[190px] w-[327px]  sm:h-[302px] sm:w-[1000px] resize-none py-6 px-4  bg-[#f6f6f6]' cols="150" rows="30"></textarea>
       <div 
        data-aos="fade up"
        data-aos-duration="3000"
       className='text-end sm:text-center flex justify-between items-center'>
        <a href="#"className='font-[400] text-2xl text-[#415D43] hidden sm:block'>FAQs</a>
        <div 
         data-aos="fade up"
         data-aos-duration="3000"
        className='invisible sm:visible '>
       <Button title="emergency" />
        </div>
       <div 
        data-aos="fade up"
        data-aos-duration="3000"
       className='visible sm:invisible '>
       <Button title="emergency" />
       </div>
       </div>
     </div>
   </div>
   <div className='mx-4 sm:mx-20 flex justify-center items-start flex-col'>
            <div 
             data-aos="fade up"
             data-aos-duration="3000"
            className='flex justify-center items-center py-10  space-x-4 border-b-2 pb-4 text-black'>
                <Logo className="h-[32px] w-[32px] sm:h-[92.63px] sm:w-[84.3px] text-[#415D43]" />
                <h1 className='font-[800] text-xl lg:text-[70px] lg:leading-[119.42px] capitalize'>FAQs</h1>
            </div>
            <div className='flex items-start flex-col pt-4'>
                <div 
                 data-aos="fade up"
                 data-aos-duration="3000"
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
          <AiFillPhone />
          </a>
        </div>
        <div
         data-aos="fade up"
         data-aos-duration="3000"
        >
          <p className='font-medium text-sm'>Below are the most frequently asked questions about SafeSpace.</p>
        </div>
        </div>
        </div>
        <div 
         data-aos="fade up"
         data-aos-duration="3000"
        className='mx-4 sm:mx-20'>
        <Suspense fallback={<Loader />}>
        <SafeChatAccordion />
        </Suspense>
        </div>
   </div>
</section>
  )
}

export default SafeChatPage