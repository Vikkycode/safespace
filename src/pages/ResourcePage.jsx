import React,{Suspense} from 'react'
import { Loader } from 'lucide-react'
const Logo = React.lazy(()=> import('../components/Logo'))
const ResourcesAccordion = React.lazy(()=> import('../components/ResourcesAccordion'))
const ResourcePage = () => {
  return (
    <section className='mx-auto max-w-screen-xl sm:py-12 space-y-8 lg:py-16 px-4 sm:px-6  lg:px-20'>
        <div>
        <div className='flex justify-center items-center flex-col'>
            <div 
             data-aos="fade up"
             data-aos-duration="3000"
            className='flex justify-center items-center'>
                <Logo className="h-[32px] w-[32px] sm:h-[92.63px] sm:w-[84.3px] text-[#415D43]" />
                <h1 className='font-[800] text-xl lg:text-[70px] lg:leading-[119.42px] capitalize'>Resources page</h1>
            </div>
            <div 
             data-aos="fade up"
             data-aos-duration="3000"
            className='text-start'>
                <p className='font-[400] sm:text-xl font-sans text-[#757575]'>Here, you'll find helpful support services, educational materials, and ways to get involved.</p>
            </div>
        </div>
        </div>
        <h2 
         data-aos="fade up"
         data-aos-duration="3000"
        className='font-medium text-2xl text-center'>key Resources</h2>
        <Suspense fallback={<Loader />}>
        <ResourcesAccordion />
        </Suspense>
        <p 
         data-aos="fade up"
         data-aos-duration="3000"
        className='font-[400] text-2xl font-sans text-center'>Last updated 26th February, 2024</p>
    </section>
  )
}

export default ResourcePage