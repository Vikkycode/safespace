import React from 'react'
import { teamsData } from '../utils/data'
import {CheckCircle,Globe2Icon,Users} from 'lucide-react'
import {useSpring, animated} from 'react-spring'
const LazyLoadedImage = React.lazy(()=> import('../components/LazyLoadedImage'))
const Logo = React.lazy(()=> import('../components/Logo'))
const Button = React.lazy(()=> import('../components/Button'))

const Number = ({n})=>{
    const {number} = useSpring({
        from:{ number:0},
        number:n,
        delay:4000,
        config:{mass:1, tension:20, friction:10},
    })

    return <animated.div>{number.to((n)=> n.toFixed(0))}</animated.div>
}

const AboutPage =() => {
     return (
       <section className='class="space-y-4 py-6 sm:py-20"'>
            <div className='flex flex-col'>
           <div className='flex justify-center items-center flex-col'>
               <div 
                data-aos="fade up"
                data-aos-duration="1000"
               className='flex justify-center items-center py-10  space-x-4'>
                   <Logo className="h-[32px] w-[32px] sm:h-[92.63px] sm:w-[84.3px] text-[#415D43]" />
                   <h1 className='font-[800] text-xl lg:text-[70px] lg:leading-[119.42px] capitalize'>about us</h1>
               </div>
           </div>
           <div 
            data-aos="fade up"
            data-aos-duration="1000"
           className='py-6 px-4 sm:px-6 mx-4 sm:mx-20 sm:h-[412px] sm:max-w-[1257px] bg-[#f6f6f6]'>
               <h1 className='font-[700] text-sm sm:text-2xl pb-10'>Our Mission</h1>
               <p className='font-sans font-[400] text-[10px] sm:text-xl text-[#757575]'>we offer confidential, inclusive space for survivors of sexual and gender-based violence to connect, access resources, and share experiences, empowering them for healing and community.</p>
               <h1 className='font-[700] text-sm sm:text-2xl text-start sm:text-center mt-20'>Values</h1>
              <ul 
               data-aos="fade up"
               data-aos-duration="1000"
              className='flex items-center justify-between mt-10 capitalize'>
               <li className='font-sans font-[400] text-[10px] sm:text-xl text-[#757575]'>survor centered</li>
               <li className='font-sans font-[400] text-[10px] sm:text-xl text-[#757575]'>
   Confidentiality</li>
               <li className='font-sans font-[400] text-[10px] sm:text-xl text-[#757575]'>empowerment</li>
              </ul>
           </div>
           <div 
            data-aos="fade up"
            data-aos-duration="1000"
           className='sm:h-[140vh]'>
               <h1 className='font-bold text-start pl-4 text-xl sm:text-2xl'>Meet the team</h1>
               <div className='grid grid-cols-2 grid-rows-3 sm:grid-cols-3 sm:grid-rows-3 '>
               {teamsData?.map((item, index)=>(
                   <div 
                   key={index} 
                  >
                   <div 
                    data-aos="fade up"
                    data-aos-duration="1000"
                   className='flex justify-center flexwrap items-center  flex-col'>
                       <LazyLoadedImage 
                       src={item.image} 
                       className='h-[121px] w-[154.44px] sm:h-[322px] sm:w-[411px] object-cover' 
                       alt={item.name}
                       />
                   <div 
                    data-aos="fade up"
                    data-aos-duration="1000"
                   className='flex flex-col items-center sm:items-start  justify-start'>
                   <h1 className='font-bold text-sm sm:text-2xl'>{item.name}</h1>
                   <p className='font-[400] text-sm sm:text-xl'>{item.role}</p>
                       </div>
                   </div>
                   </div>
               ))}
               </div>
           </div>
               <div className='flex justify-around flex-col items-center sm:bg-[#D9d9d9] space-y-4 sm:space-y-0 sm:h-[40vh] sm:w-full sm:flex-row'>
                   <h1 
                    data-aos="fade up"
                    data-aos-duration="1000"
                   className='font-bold text-sm block sm:hidden'>our impacts</h1>
                   <ul 
                    data-aos="fade up"
                    data-aos-duration="1000"
                   className='flex items-center justify-center space-x-4 bg-[#D9d9d9] w-full '>
                       <CheckCircle className='text-[#415D48] h-[20px] w-[20px] sm:h-[65px] sm:w-[65px]' />
                       <li className='flex flex-col'>
                        <div className='flex items-center'>
                        <h1 className='font-bold text-xl sm:text-4xl text-center'><Number n={5000} /></h1>
                           <p className='font-bold text-xl sm:text-4xl text-center'>+</p>
                        </div>
                           <p className='font-[400]  text-sm sm:text-xl text-center capitalize'>users empowered</p>
                       </li>
                   </ul>
                   <ul 
                    data-aos="fade up"
                    data-aos-duration="1000"
                   className='flex items-center justify-center space-x-4 bg-[#D9d9d9] w-full'>
                       <Globe2Icon className='text-[#415D48] h-[20px] w-[20px] sm:h-[65px] sm:w-[65px]' />
                       <li className='flex flex-col'>
                        <div className='flex items-center'>
                        <h1 className='font-bold text-xl sm:text-4xl text-center'><Number n={1000} /></h1>
                           <p className='font-bold text-xl sm:text-4xl text-center'>+</p>
                        </div>
                           <p className='font-[400]  text-sm sm:text-xl text-center capitalize'>registered users</p>
                       </li>
                   </ul>
                   <ul 
                    data-aos="fade up"
                    data-aos-duration="1000"
                   className='flex items-center justify-center space-x-4 bg-[#D9d9d9] w-full'>
                       <Users className='text-[#415D48] h-[20px] w-[20px] sm:h-[65px] sm:w-[65px]' />
                       <li className='flex flex-col'>
                        <div className='flex items-center'>
                        <h1 className='font-bold text-xl sm:text-4xl text-center'><Number n={700} /></h1>
                           <p className='font-bold text-xl sm:text-4xl text-center'>+</p>
                        </div>
                           <p className='font-[400]  text-sm sm:text-xl text-center capitalize'>awards received</p>
                       </li>
                   </ul>
               </div>
               <div 
                data-aos="fade up"
                data-aos-duration="1000"
               className='text-center sm:text-end mt-10 sm:mr-10'>
               <Button href={'/contact'} title={"Contact us"} />
               </div>
           </div>
       </section>
     )
   }

export default AboutPage