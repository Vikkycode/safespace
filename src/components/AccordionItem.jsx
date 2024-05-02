import React from 'react'

const AccordionItem = React.memo(({title, detail}) => {
    return (
      <details 
      data-aos="fade up"
      data-aos-duration="3000"
      class="group [&_summary::-webkit-details-marker]:hidden" open>
        <summary
         data-aos="fade up"
         data-aos-duration="3000"
          class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg  text-gray-900"
        >
          <h2 
          class="font-medium text-sm sm:text-xl border-b-2 border-black w-full pb-5 capitalize">{title}</h2>
          <svg
            class="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
    
        <p 
         data-aos="fade up"
         data-aos-duration="1000"
        class="mt-4 px-4 leading-relaxed text-[#757575] text-sm font-[400] font-sans ">
       {detail}
        </p>
      </details>
    )
  }
)

export default AccordionItem