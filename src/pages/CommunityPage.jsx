import React from 'react'
const Logo = React.lazy(()=> import('../components/Logo'))
const CommunityForum = () => {
  return (
    <section className="space-y-4 py-6 sm:pt-10 sm:pb-20 ">
         <div className='flex flex-col'>
        <div className='flex justify-center items-center flex-col'>
            <div className='flex justify-center items-center py-10  space-x-4'>
                <Logo className="h-[32px] w-[32px] sm:h-[92.63px] sm:w-[84.3px] text-[#415D43]" />
                <h1 className='font-[800] text-xl lg:text-[70px] lg:leading-[119.42px] capitalize'>community</h1>
            </div>
        </div>
        <div className='py-6 px-4 sm:px-0 mx-4 sm:mx-20 sm:h-[412px] sm:max-w-[1257px] bg-[#f6f6f6]'>
            <h1 className='font-medium text-sm text-center  sm:text-3xl pb-10'>“don’t Listen to what they say”</h1>
            <p className='font-sans font-[400] text-center  text-[10px] sm:text-xl text-[#757575]'>join the biggest community of survivors</p>

        <div className='sm:mx-20 sm:mt-10'>
          <div className='capitalize'>
            <h1 className='font-bold py-4 text-xl sm:text-2xl'>share</h1>
            <a href="" className='font-[400] text-sm sm:text-xl text-[#415D43]'>share your experience with trusted counsellors.</a>
          </div>
          <div className='capitalize '>
            <h1 className='font-bold py-4 text-xl sm:text-2xl'>choose</h1>
            <a href="" className='font-[400] text-sm sm:text-xl text-[#415D43]'>choose the conversation that works for you.</a>
          </div>
        </div>
        </div>
        
            
            {/* <div className='text-center sm:text-end mt-10 sm:mr-10'>
            <Button title={"Contact us"} />
            </div> */}
        </div>
    </section>
  )
}

export default CommunityForum