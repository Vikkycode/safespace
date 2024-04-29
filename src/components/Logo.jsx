import React from 'react'
import safelogo from '../assets/icons/safelogo.svg'
const LazyLoadedImage = React.lazy(()=> import('../components/LazyLoadedImage'))
const Logo = ({className}) => {
  return (
    <>
    <LazyLoadedImage 
    src={safelogo} 
    className={className} 
    alt="safespace logo" />
    </>
  )
}

export default Logo