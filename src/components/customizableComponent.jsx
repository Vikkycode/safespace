import React from 'react'
import { useCustomization } from '../hooks/customizationContext'

const CustomizableComponent = () => {
    const {textSize,colorTheme} = useCustomization();
  return (
    // <div className={`text-[${textSize}] text-[${colorTheme === 'text-white' ? 'text-black':'text-white'}] bg-[${colorTheme === 'bg-black' ? 'bg-white':'bg-black'}]`}>customizableComponent</div>
    <div style={{fontSize: textSize, backgroundColor:colorTheme ? 'lightblue': 'black'}}>
      hello world
    </div>
  )
}

export default CustomizableComponent