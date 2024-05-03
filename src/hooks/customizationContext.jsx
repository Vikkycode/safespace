import React,{useState} from 'react'

const CustomizationContext = React.createContext()

export const useCustomization = ()=>{
  return React.useContext(CustomizationContext)
}
export const CustomizationProvider = ({children}) =>{
  const [textSize,setTextSize] = useState('150px');
  const [colorTheme, setColorTheme] = useState('#000')

  const setTextSizePreference = (size) =>{
    setTextSize(size)
}

  const setColorThemePreference = (theme) =>{
    setColorTheme(theme)
  }

  return (
    <CustomizationContext.Provider
    value={{
      textSize,
      setTextSizePreference,
      colorTheme, 
      setColorThemePreference}}>
      {children}
    </CustomizationContext.Provider>
  )
}