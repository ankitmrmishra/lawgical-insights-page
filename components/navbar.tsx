"use client";
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import logo from "../public/assets/Images/Copy of lawgical insights.png"
const navbar = () => {
  return (
    <div className='w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4'>
<div className='max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between'>
    <motion.div 
    initial={{opacity:0}} 
    animate={{opacity:1}} 
    transition={{duration:0.1}}>
<Image src={logo} alt="logo" className='w-60' />
    </motion.div>
    <div className='hidden mdl:inline-flex items-center gap-7'>
<ul className='flex text-[13px] gap-7 mr-28'>
    <Link href="#home" className='flex items-center gap-1 font-medium text-textDark hover:text-Green cursor-pointer duration-300 nav-link'>
        <motion.li
        initial={{y:-10, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:0.1 , delay:0.2}}
        >Home</motion.li>
    </Link>
     <Link href="#home" className='flex items-center gap-1 font-medium text-textDark hover:text-Green cursor-pointer duration-300 nav-link'>
         <motion.li
        initial={{y:-10, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:0.1 , delay:0.3}}
        >Blogs</motion.li>
    </Link>
     <Link href="#home" className='flex items-center gap-1 font-medium text-textDark hover:text-Green cursor-pointer duration-300 nav-link'>
         <motion.li
        initial={{y:-10, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:0.1 , delay:0.4}}
        >Latest in Law</motion.li>
    </Link>
     <Link href="#about" className='flex items-center gap-1 font-medium text-textDark hover:text-Green cursor-pointer duration-300 nav-link'>
         <motion.li
        initial={{y:-10, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:0.1 , delay:0.5}}
        >About</motion.li>
    </Link>
     <Link href="#home" className='flex items-center gap-1 font-medium text-textDark hover:text-Green cursor-pointer duration-300 nav-link'>
         <motion.li
        initial={{y:-10, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:0.1 , delay:0.6}}
        >Contact</motion.li>
    </Link>
    
</ul>
    </div>
    {/* Small screen icon here */}
    <div className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-5xl text-Green cursor-pointer overflow-hidden group ">
        <span className='w-full h-[2px] inline-flex group-hover:translate-x-2 transition-all ease-in-out duration-300 text-black bg-Green'></span>
        <span className='w-full h-[2px] transform translate-x-2 inline-flex group-hover:-translate-x-1 transition-all ease-in-out duration-300 text-black bg-Green'></span>
        <span className='w-full h-[2px] inline-flex group-hover:translate-x-1 transition-all ease-in-out duration-300 text-black bg-Green'></span>
    </div>
    </div>
</div>

    
    
  )
}

export default navbar