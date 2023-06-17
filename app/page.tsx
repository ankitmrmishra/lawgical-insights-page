"use client";
import React from 'react';

import Navbar from '@/components/navbar'
import SocialMedia from '@/components/SocialMedia'
import Email from '@/components/email'
import Introduction from '@/components/introduction'
import Blogs from '@/components/Blogs';
import About from '@/components/about';
import { GraphQLClient , gql } from 'graphql-request';
import { motion } from 'framer-motion'

import Link from 'next/link';




export default function Home() {

  return (
    
    <main className='w-full h-screen text-LightSlate bg-bodyColor overflow-x-hidden overflow-y-scroll'>
      <Navbar/>
      <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
      <motion.div
       initial={{opacity:0 }} 
    animate={{opacity:1 }} 
    transition={{duration:0.5}}
      className="remaning-portion-1 social-media-banner hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
        <SocialMedia/>
      </motion.div>
      <motion.div
       initial={{y:98, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:0.3 , delay:0.3}}
      className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
        <Introduction/>
     
      </motion.div>
      
      <motion.div
       initial={{y:98, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:0.1 , delay:0.5}}
      className="remaning-portion-3 email-sections hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0">
<Email/>
      </motion.div>
      </div>
      
      <div className="w-full h-[88vh] xl:flex flex-col items-center gap-20 justify-between">
        <Blogs/>
        
<About/>
      </div>
    </main>
    )
}
