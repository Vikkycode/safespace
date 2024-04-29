import React from 'react'
const LazyLoadedImage = React.lazy(()=> import('../components/LazyLoadedImage'))
const Testimony = () => {
  return (
    <section class="bg-white">
  <div class="mx-auto max-w-screen-xl px-4  sm:px-6 lg:px-8 py-2 lg:py-16">

  <h1 className='text-[16px] leading-[27.3px] py-4 font-bold text-center text-gray-900 md:text-3xl sm:pb-20'>Testimonials</h1>
    <div class="mt-8 justify-center text-center grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
      <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
        <div class="flex items-center gap-4">
          <div>
          </div>
        </div>
        <p class="mt-4 text-[#000] w-[322px] sm:w-full font-sans font-[400] text-sm sm:text-[16px] leading-[10.89px">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a
          consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus
          error officiis atque voluptates magnam!
        </p>
        <div className='border-[1px] my-2 sm:my-10 border-black'></div>
        <div className='flex justify-center items-center space-x-5'>
        <LazyLoadedImage
            alt="avatar"
            src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
            className="size-14 rounded-full object-cover"
          />
          <div>
            <p class="mt-0.5 text-sm sm:text-[16px] leading-[17.06px] sm:leading-[27.3px] font-bold  text-[#000]
                ">Paul Starr, 23</p>
            <p className='text-sm sm:text-[16px] leading-[17.06px] sm:leading-[27.3px] font-[400]  text-[#000'>survivors</p>
          </div>
        </div>
      </blockquote>

      <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
        <div class="flex items-center gap-4">
          <div>
          </div>
        </div>
        <p class="mt-4 text-[#000] font-sans font-[400] text-[16px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a
          consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus
          error officiis atque voluptates magnam!
        </p>
        <div className='border-[1px] my-10 border-black'></div>
        <div className='flex items-center space-x-5'>
        <LazyLoadedImage
            alt="avatar"
            src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
        className="size-14 rounded-full object-cover"
          />
          <div>
            <p class="mt-0.5 text-[16px] leading-[27.3px] font-bold  text-[#000]
                ">Paul Starr, 23</p>
            <p className='text-[16px] leading-[21.79px] font-[400]  text-[#000'>survivors</p>
          </div>
        </div>
      </blockquote>

      <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
        <div class="flex items-center gap-4">
          <div>
          </div>
        </div>

        <p class="mt-4 text-[#000] font-sans font-[400] text-[16px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a
          consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus
          error officiis atque voluptates magnam!
        </p>
        <div className='border-[1px] my-10 border-black'></div>
        <div className='flex items-center space-x-5'>
        <LazyLoadedImage
            alt="avatar"
            src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
            className="size-14 rounded-full object-cover"
          />
          <div>
            <p class="mt-0.5 text-[16px] leading-[27.3px] font-bold  text-[#000]
                ">Paul Starr, 23</p>
            <p className='text-[16px] leading-[21.79px] font-[400]  text-[#000]'>survivors</p>
          </div>
        </div>
      </blockquote>
    </div>
  </div>
</section>
  )
}
export default Testimony