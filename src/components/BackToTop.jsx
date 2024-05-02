import React,{useState,useEffect} from 'react'
import {CircleArrowUp} from 'lucide-react'
const BacktoTop = React.memo(() => {
        const [invisible, setInvisible] = useState(false)
        useEffect(()=>{
            const handleBacktoTopButton = React.memo(()=>{
                    const handleTop = document.documentElement.scrollTop || document.body.scrollTop
                    setInvisible(handleTop > 190);
                })
            window.addEventListener('scroll',handleBacktoTopButton)
        return () =>{
            window.removeEventListener('scroll',handleBacktoTopButton)
        }
        },[])
        const scrollTop =React.memo(() => {
                window.scrollTo({
                    top:0,
                    behavior:'smooth'
                })
            })
      return (
        <>
            <CircleArrowUp 
            className={`${invisible ? 'block bottom-10 right-10 fixed text-white p-2 cursor-pointer bg-[#415d43] h-[50px] w-[50px] rounded-full':'hidden fixed bottom-40 right-6 bg-[#415d43]'}`}
            onClick={scrollTop}
            size={10}
            />
        </>
      )
    }
) 
export default BacktoTop