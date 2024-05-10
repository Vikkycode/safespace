import React,{useState} from 'react'


const ToggleContext = React.createContext()

export const useToggleContext = () =>{
    return React.useContext(ToggleContext)
}

export const ToggleProvider = ({children}) =>{
    const [isOpen, setIsOpen]= useState(false);

    const handleToggle = () => setIsOpen(!isOpen)
    return (
        <ToggleContext.Provider value={{isOpen,handleToggle}}>
        {children}
        </ToggleContext.Provider>
    )}