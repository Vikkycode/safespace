import React from 'react'
import LazyLoad from 'react-lazy-load'

const LazyLoadedImage =React.memo(
  ({src, alt,className,height}) => {
   return (
     <LazyLoad>
         <img src={src} height={height} className={className} alt={alt} />
     </LazyLoad>
   )
 }
)
export default LazyLoadedImage