import React from 'react'
import aboutImage from '../assets/about.jpg'
import { ABOUT_TEXT } from '../constants'
import { motion } from "framer-motion"

const About = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h2 className='my-20 text-center text-4xl'>About
                <span className='text-neutral-500'> Me</span>
            </h2>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2 px-4 lg:px-0'>
                    <div className='flex items-center justify-center h-full'>
                        <motion.img 
                            className='rounded-2xl' 
                            src={aboutImage} 
                            alt="" 
                            initial={{ opacity: 0, scale: 0.8 }} 
                            whileInView={{ opacity: 1, scale: 1 }} 
                            transition={{ duration: 0.8 }}
                        />
                    </div>
                </div>
                <div className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:justify-start'>
                        <motion.p 
                            className='max-w-xl py-6' 
                            initial={{ opacity: 0, x: -50 }} 
                            whileInView={{ opacity: 1, x: 0 }} 
                            transition={{ duration: 0.8 }}
                        >
                            {ABOUT_TEXT}
                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About