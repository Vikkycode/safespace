import React,{useState} from 'react'
const ToggleContext = React.createContext()

export const useToggleContext = () =>{
    return React.useContext(ToggleContext)
}

export const ToggleProvider = ({children}) =>{
    const [isOpen, setIsOpen]= useState(false);
    const [invisible, setInvisible] = useState(false);

    const handleToggle = () => setIsOpen(!isOpen)
    const handleInvisible = () => setInvisible(!invisible)
    return (
        <ToggleContext.Provider value={{isOpen,invisible,handleToggle,handleInvisible}}>
        {children}
        </ToggleContext.Provider>
    )}
