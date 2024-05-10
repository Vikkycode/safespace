import React from 'react'
import { Link as RouterLink } from "react-router-dom";

const Button =React.memo(({title,href, onClick}) => {
   return (
     <button 
     onClick={onClick}
     aria-label={title} 
     className='inline-flex relative rounded-md gap-5 sm:gap-10 h-[21px] w-[100px] sm:h-[78px] sm:w-[191px] text-center items-center justify-center p-4 sm:p-10 bg-[#415D43] border border-[#415D43] text-[#415D43]  hover:bg-transparent  hover:duration-300 transition-all'>
         <RouterLink 
         to={href}
         aria-label={title}  
         className='capitalize rounnded-sm font-sans font-[600] text-[11px] sm:text-xl text-[#ffffff] hover:text-[#415D43]'>{title}</RouterLink>
     </button>
   )
 }
)
export default Button