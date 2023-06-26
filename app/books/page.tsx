"use client"

import React from 'react'
import BookCard from '@/pages/items/bookCard'
import {motion} from 'framer-motion'
const page = () => {
  return (
    <div  className='max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-5 lgl:gap-8 mdl:px-10 xl:px-4 p-7 sm:mt-9'> <div className="titiles flex items-center gap-4 justify-center align-middle ">

        <span className='w-[10vw] h-[1px]  bg-Green'></span>
       <motion.h1
      variants={
        {
            hidden:{opacity:0, y:80},
            visible:{opacity:1, y:0},
        
        }
      }
      initial="hidden"
      animate="visible"
      transition={{duration:0.7 , delay:0.25}}
      className="text-4xl lg:text-6xl text-White  font-heading items-center">
      
        Books</motion.h1>
        
        <span className='w-[10vw] h-[1px]  bg-Green'></span>
         </div>
    <div className="  lg:grid grid-cols-3 gap-5 flex flex-col justify-center align-middle items-center p-7  lg:ml-0">
         <BookCard coverPhoto='https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781499806250/pride-and-prejudice-9781499806250_hr.jpg' backCover='https://i0.wp.com/www.lyricsstory.net/wp-content/uploads/2021/08/Pride-Prejudice-2005-Cast-Cast-Of-Pride-Prejudice-2005.gsr_.jpg' title='Pride and Prejudice' 
         content='
         Unravel the tapestry of pride and allow humility to thread compassion and understanding, weaving a world that embraces diversity. Break the chains of prejudice, unlocking the beauty that lies beneath surface judgments. Let love be the guiding partner in the dance between pride and prejudice, fostering unity and acceptance. Peel back the layers of pride to reveal the authentic connections that flourish when prejudice is cast aside
         '
         
         />
         <BookCard coverPhoto='https://s26162.pcdn.co/wp-content/uploads/2018/02/gatsby-original2.jpg' backCover='https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2013/4/30/1367315868031/F-Scott-Fitzgerald-008.jpg?width=300&quality=45&auto=format&fit=max&dpr=2&s=dfe4c70c02b31d3a21068874bd6bd3f8' title='Pride and Prejudice' 
         content='
         Unravel the tapestry of pride and allow humility to thread compassion and understanding, weaving a world that embraces diversity. Break the chains of prejudice, unlocking the beauty that lies beneath surface judgments. Let love be the guiding partner in the dance between pride and prejudice, fostering unity and acceptance. Peel back the layers of pride to reveal the authentic connections that flourish when prejudice is cast aside
         '
         
         />
         <BookCard coverPhoto='https://s26162.pcdn.co/wp-content/uploads/2021/10/bravenewworld.jpg' backCover='https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/7/23/1437648591143/bf4a0165-7a72-442f-8efe-1213b96d8fbf-1020x612.jpeg?width=465&quality=85&dpr=1&s=none' title='Pride and Prejudice' 
         content='
         Unravel the tapestry of pride and allow humility to thread compassion and understanding, weaving a world that embraces diversity. Break the chains of prejudice, unlocking the beauty that lies beneath surface judgments. Let love be the guiding partner in the dance between pride and prejudice, fostering unity and acceptance. Peel back the layers of pride to reveal the authentic connections that flourish when prejudice is cast aside
         '
         
         />
         <BookCard coverPhoto='https://s26162.pcdn.co/wp-content/uploads/2021/10/39739_0d64668dff792ed1_b.jpg' backCover='https://i0.wp.com/www.lyricsstory.net/wp-content/uploads/2021/08/Pride-Prejudice-2005-Cast-Cast-Of-Pride-Prejudice-2005.gsr_.jpg' title='Pride and Prejudice' 
         content='
         Unravel the tapestry of pride and allow humility to thread compassion and understanding, weaving a world that embraces diversity. Break the chains of prejudice, unlocking the beauty that lies beneath surface judgments. Let love be the guiding partner in the dance between pride and prejudice, fostering unity and acceptance. Peel back the layers of pride to reveal the authentic connections that flourish when prejudice is cast aside
         '
         
         />
         <BookCard coverPhoto='https://s26162.pcdn.co/wp-content/uploads/2021/10/The-Catcher-in-the-Rye-First-Edition-cover-E.-Michael-Mitchell.jpg' backCover='https://i0.wp.com/www.lyricsstory.net/wp-content/uploads/2021/08/Pride-Prejudice-2005-Cast-Cast-Of-Pride-Prejudice-2005.gsr_.jpg' title='Pride and Prejudice' 
         content='
         Unravel the tapestry of pride and allow humility to thread compassion and understanding, weaving a world that embraces diversity. Break the chains of prejudice, unlocking the beauty that lies beneath surface judgments. Let love be the guiding partner in the dance between pride and prejudice, fostering unity and acceptance. Peel back the layers of pride to reveal the authentic connections that flourish when prejudice is cast aside
         '
         
         />
         <BookCard coverPhoto='https://s26162.pcdn.co/wp-content/uploads/2018/10/invisibleman-1509049531-640x996.jpg' backCover='https://i0.wp.com/www.lyricsstory.net/wp-content/uploads/2021/08/Pride-Prejudice-2005-Cast-Cast-Of-Pride-Prejudice-2005.gsr_.jpg' title='Pride and Prejudice' 
         content='
         Unravel the tapestry of pride and allow humility to thread compassion and understanding, weaving a world that embraces diversity. Break the chains of prejudice, unlocking the beauty that lies beneath surface judgments. Let love be the guiding partner in the dance between pride and prejudice, fostering unity and acceptance. Peel back the layers of pride to reveal the authentic connections that flourish when prejudice is cast aside
         '
         
         />
       
    </div>
       
   
    </div>
  )
}

export default page