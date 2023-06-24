"use client" ;
import React from 'react'

import {SlSocialInstagram , SlSocialTwitter , SlSocialFacebook , } from 'react-icons/sl'

function page() {


    

  return (
    <div className=' flex flex-col align-middle justify-center  mdl:py-3  gap-5 lgl:gap-8 mdl:px-10 xl:px-4  h-[150vh] ' >

        <div className="text-White text-center  ">
            <h1 className="text-6xl font-bold">Let's Talk</h1>
            <h1 className="">"Break the virtual ice - reach out and let's start a conversation."</h1>
        </div>

<div className="emailpart text-center rounded-s-md border-green-600 text-White ">
   <a href="mailto:@lawgicalinsights@gmail.com" className=" border rounded-md border-green-600 pt-3 pb-3 pl-8 pr-8 text-lg  hover:text-Green">Mail</a>
</div>
<div className=" lg:hidden mt-16 flex align-middle justify-center gap-2 items-center">
    <a href="http://" target="_blank" >

    <span className='w-10 h-10 text-xl bg-LightestNavy rounded-full inline-flex items-center justify-center hover:text-Green cursor-pointer hover:-translate-y-2 transition-all duration-300'><SlSocialInstagram /></span></a>
    <a href="http://" target="_blank" >
    <span className='w-10 h-10 text-xl bg-LightestNavy rounded-full inline-flex items-center justify-center hover:text-Green cursor-pointer hover:-translate-y-2 transition-all duration-300'><SlSocialFacebook/></span></a>
      <a href="http://" target="_blank" >
    <span className='w-10 h-10 text-xl bg-LightestNavy rounded-full inline-flex items-center justify-center hover:text-Green cursor-pointer hover:-translate-y-2 transition-all duration-300'><SlSocialTwitter/></span>
</a>
</div>

    </div>
  )
}

export default page