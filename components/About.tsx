import React from 'react'
import { motion } from "framer-motion"
import Wave from './Wave'

type Props = {}

export default function About({ }: Props) {
    return (
        <div className='snap-center relative h-screen w-screen'>
            <Wave/>
            <div className='flex flex-col  justify-center items-center md:flex md:flex-row md:w-[70%] mx-auto  md:gap-x-24 h-screen '>
                
                <motion.img 
                    initial={{ opacity: 0, x: -100, rotate: 0 }}
                    whileInView={{
                        opacity: 1, x: 0,
                    }}
                    transition={{ duration: 1.5 }} 
                    className='w-[50%] md:w-[35%] object-cover mx-auto rounded-full' src="./aa.jpeg" alt="" />
                <motion.div 
                    initial={{ opacity: 0, x: 100, rotate: 0 }}
                    whileInView={{
                        opacity: 0.5, x: 0,
                    }}
                    transition={{ duration: 2 }} 
                    className='w-[90%] mx-auto flex flex-col gap-y-2  opacity-40'>
                    <h3 className='text-[24px] underline underline-offset-1 decoration-yellow-300'>Who am i </h3>
                    <p>🏅 Expert in MERN stack developer proficient with React.js, MongoDB, Node.js. 🏅 I'm specialized in top-tier development and developed many Web & Mobile applications for start-ups, enterprises, and agencies. I will develop a website with React.js along with back-end Node.js with an Eye-catching look and Pixel-perfect design. Hi, My name is <span className='text-yellow-500 underline'>Muhammad Ahmad</span></p>
                </motion.div>
            </div>
        </div>
    )
}