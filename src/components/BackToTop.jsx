import React,{useEffect} from 'react'
import {CircleArrowUp} from 'lucide-react'
import { useToggleContext } from '../hooks/contexts/toggleContext'
const BacktoTop = () => {
    const {invisible, handleInvisible} = useToggleContext()

    useEffect(()=>{
        const handleBacktoTopButton = ()=>{
            const handleTop = document.documentElement.scrollTop || document.body.scrollTop
            handleInvisible(handleTop > 190);
        }
        window.addEventListener('scroll',handleBacktoTopButton)

    return () =>{
        window.removeEventListener('scroll',handleBacktoTopButton)
    }
    },[])

    const scrollTop = () => {
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
  return (
    <>
        <div
        >
        <CircleArrowUp 
        className={`${invisible ? 'block bottom-10 right-10 fixed text-white p-2 cursor-pointer bg-[#415D49] h-[50px] w-[50px] rounded-full':'hidden fixed bottom-40 right-6 bg-[#415D49]'}`}
        onClick={scrollTop}
        size={10}
        />
        </div>
    </>
  )
}

export default BacktoTop
