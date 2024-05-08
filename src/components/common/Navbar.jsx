import React, { useState } from 'react'
import Logo from '../Logo'
import { Navitems } from '../../utils/data'
import {Menu,SidebarCloseIcon} from 'lucide-react'
import Button from '../Button'
import {Link, useLocation, useNavigate } from "react-router-dom";
const Navbar =React.memo(() => {
        const [isClick, setIsClick] = useState(false)
        const location = useLocation()
        const {pathname} = location
        const navigate  = useNavigate()

        const handleClick = (url) =>{
            navigate.push(url)
            setIsClick(true)
        }
      return (
        <div className='py-10 px-4 sm:px-6  lg:px-20'>
            <nav  
            aria-label="Breadcrumb"
            className='flex justify-between items-center'>
            <Link to={"/"} className='flex items-center space-x-4'>
            <Logo className={"h-[32px] w-[32px] sm:h-[39px] sm:w-[35.18px] object-contain"} />
            <p className='font-[400] text-sm leading-[16.34px] sm:text-[24px] sm:leading-[32.68px] font-sans'>SafeSpace</p>
            </Link>
            <ul className='hidden sm:flex  items-center space-x-8'>
                {Navitems?.map((item, index)=>(
                        <Link key={index}  to={item?.path}
                        className={`font-[400] capitalize text-[24px] leading-[40.94px] text-[#000000] ${ pathname === item?.path ? 'font-[700] text-[#000] duration-300 transition-all': ''}`}>
                            <li>{item.name}</li>
                        </Link>
                ))}
            </ul>
            <div className='hidden sm:flex  items-center justify-centers space-x-10'>
                <Link to={'/contact'} className='capitalize font-sans font-[600] text-[11px] sm:text-xl text-[#415D49] border py-[26px] px-8 hover:bg-[#415D49] hover:text-white hover:duration-300 transition-all'>contact us</Link>
                <Button title={"join forum"}
                href={'/forum'}/>
            </div>
            <Menu 
            size={32} 
            onClick={() => setIsClick(true)}
            className='sm:hidden block'/>
                {isClick && (
            <div 
            data-aos="fade right" 
            data-aos-duration="1000"
            className='bg-white  w-full h-full fixed z-[10] top-0 right-0 flex justify-center items-center'>
            <SidebarCloseIcon size={32} className='fixed top-10 right-5' onClick={() => setIsClick(false)} />
            <ul className='sm:flex  items-center'>
                {Navitems?.map((item, index)=>(
                    <li key={index}>
                        <Link  
                        to={item?.path}
                        className={`font-[400] capitalize text-[24px] leading-[40.94px] text-[#000000] ${ pathname === item?.path ? 'font-[700] text-[#000] duration-300 transition-all': ''}`}
                        onClick={() => handleClick(item.path)}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
            </div>
                )}
            </nav>
        </div>
      )
    }
) 
export default Navbar