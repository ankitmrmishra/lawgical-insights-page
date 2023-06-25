"use client";
import React from 'react';

import Navbar from '@/pages/navbar';
import Contact from '@/app/contact/page'
import SocialMedia from '@/pages/SocialMedia'
import Email from '@/pages/email'
import Introduction from './introduction/page';
import Blogs from '@/app/blogs/page';
import About from './about/page';
import Book from './books/page'
import { GraphQLClient , gql } from 'graphql-request';
import { motion } from 'framer-motion'

import Link from 'next/link';




export default function Home() {

  return (
    
    <main className='w-full fixed h-screen text-LightSlate bg-bodyColor overflow-x-hidden overflow-y-scroll   scrollbar-hide'>
     
      <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
      <motion.div
       initial={{opacity:0 }} 
    animate={{opacity:1 }} 
    transition={{duration:0.5 , delay:0.5}}
      className="remaning-portion-1 social-media-banner hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
        <SocialMedia/>
      </motion.div>
      <motion.div
       initial={{y:98, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:0.8 , delay:0.3}}
      className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
        <Introduction />
     
      </motion.div>
      
      <motion.div
       initial={{y:98, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:0.3 , delay:0.6}}
      className="remaning-portion-3 email-sections hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0">
<Email/>
      </motion.div>
      </div>
      
    
        <Blogs/>
        <Book/>
<About/>
<Contact/>
     
      
    </main>
    )
}