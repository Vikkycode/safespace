import React from 'react'
import LazyLoad from 'react-lazy-load'

const LazyLoadedImage = ({src, alt,className}) => {
  return (
    <LazyLoad>
        <img src={src} className={className} alt={alt} />
    </LazyLoad>
  )
}

export default LazyLoadedImage