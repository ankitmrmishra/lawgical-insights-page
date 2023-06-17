import React from 'react';
import photoShoot from "../public/assets/Images/photoShoot.jpg"
import Image from 'next/image';
import {BsFillSignpostFill} from 'react-icons/all'
import {  useEffect , useRef } from 'react';
import { useInView , motion, useAnimation } from 'framer-motion';

const About = () => {
    const ref = useRef(null);
    const isInview = useInView(ref, {once:false})
    const mainControls = useAnimation();
    const slideControls = useAnimation();
    
    useEffect(() => {
        if(isInview){
            mainControls.start("visible")
            slideControls.start("visible")
            
            
        }
    })
  

  const skills = ['Reading Books', 'Mandala Artist', 'Content Writer', 'Photography'];

  return (
    <section  ref={ref} 
     id="about" className='lg:max-w-contentContainer flex flex-col align-middle justify-center mx-auto lg:py-10 mdl:py-24  gap-5 lgl:gap-8 mdl:px-10 xl:px-4 sm:p-8 sm:mt-9'>
      <motion.h1
      variants={
        {
            hidden:{opacity:0, y:80},
            visible:{opacity:1, y:0},
        
        }
      }
      initial="hidden"
      whileInView="visible"
      transition={{duration:0.7 , delay:0.25}}
      className="text-4xl lg:text-5xl text-White font-bold font-titleFont">About Me</motion.h1>

      <div className=" flex flex-col lg:flex-row mx-auto lg:gap-32 gap-5">
       
          <div className=' lg:w-[50vw] lg:h-[70vh] flex flex-col lg:gap-5 gap-4 leading-8 font-bodyFont text-LightestSlate 
                w-full xl:w-2/3   '>
            <motion.p
             variants={
        {
            hidden:{opacity:0, y:80},
            visible:{opacity:1, y:0},
        
        }
      }
      initial="hidden"
      animate={mainControls}
      transition={{duration:0.7 , delay:0.45}}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius praesentium saepe, expedita perferendis necessitatibus quasi. Obcaecati magnam minus ea, dicta minima ab temporibus voluptas quo reiciendis at praesentium sint, consequuntur culpa harum? Inventore, voluptas dicta, magnam maiores labore, autem ipsam ipsum amet suscipit neque eaque ex quasi provident repudiandae veniam.
            </motion.p>

              <motion.p
             variants={
        {
            hidden:{opacity:0, y:80},
            visible:{opacity:1, y:0},
        
        }
      }
      initial="hidden"
      animate={mainControls}
      transition={{duration:0.7 , delay:0.65}}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius praesentium saepe, expedita perferendis necessitatibus quasi. Obcaecati magnam minus ea, dim.
            </motion.p>

             <motion.p
             variants={
        {
            hidden:{opacity:0, y:80},
            visible:{opacity:1, y:0},
        
        }
      }
      initial="hidden"
      animate={mainControls}
      transition={{duration:0.7 , delay:0.85}}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius praesentium saepe, expedita perferendis necessitatibus quasi. Obcaecati magnam minus ea, dicta minima a
  </motion.p>
            <motion.p
             variants={
        {
            hidden:{opacity:0, y:80},
            visible:{opacity:1, y:0},
        
        }
      }
      initial="hidden"
      animate={mainControls}
      transition={{duration:0.7 , delay:0.95}}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius praesentium saepe, expedita perferendis necessitatibus quasi. Obcaecati magnam minus ea, dicta minima a
            </motion.p>
        

          <motion.ul
            variants={
        {
            hidden:{opacity:0, y:80},
            visible:{opacity:1, y:0},
        
        }
      }
      initial="hidden"
      animate={mainControls}
      transition={{duration:0.7 , delay:1}}
          
          className="skills-list grid grid-cols-2 gap-3 ">
            {skills && skills.map((skill, i) => <li key={i} className='flex align-middle items-center gap-1 text-Green'><BsFillSignpostFill  />{skill}</li>)}
          </motion.ul>
       
  </div>
       
          <motion.div 
              variants={
        {
            hidden:{opacity:0, x:80},
            visible:{opacity:1, x:0},
        
        }
      }
      initial="hidden"
     whileInView="visible"
      transition={{duration:0.7 , delay:0.5}}
          
          className="wrapper  h-80 relative group  ">
           
            <Image 
            
              className="  shadow-[5px_5px_0px_0px_rgba(100,255,218)] lg:h-full lg:w-[400px] filter mix-blend-normal contrast-100  hover:tranform hover:-translate-y-6 hover:duration-750 duration-700"
              src={photoShoot}
              
           
              
              alt="Headshot"
            />
           
          </motion.div>
       
      </div>
    </section>
  );
};

export default About;