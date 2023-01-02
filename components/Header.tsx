import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"
import { Typewriter } from 'react-simple-typewriter'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

type Props = {}

export default function Header({ }: Props) {
    return (
        <div className='snap-start h-screen'>
            <header className='flex px-4 p-2 justify-between fixed top-0 w-screen'>
                <motion.div
                    initial={{ opacity: 0, x: -100, rotate: 0 }}
                    whileInView={{
                        opacity: 1, x: 0,
                    }}
                    transition={{ duration: 1.5 }}
                >
                    <SocialIcon url="https://twitter.com/jaketrent" fgColor='gray' bgColor='transparent' />
                    <SocialIcon url="https://youtube.com/jaketrent" fgColor='gray' bgColor='transparent' />
                    <SocialIcon url="https://instragram.com/jaketrent" fgColor='gray' bgColor='transparent' />
                    <SocialIcon url="https://linkedin.com/jaketrent" fgColor='gray' bgColor='transparent' />
                    <SocialIcon url="https://facebook.com/jaketrent" fgColor='gray' bgColor='transparent' />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{
                        opacity: 1, x: 0, rotate: [0, 90, 0],
                    }}
                    transition={{ duration: 1.5 }}
                    className='flex items-center h-fit w-fit pr-6'>
                    <SocialIcon url="https://email.com/jaketrent" fgColor='gray' bgColor='transparent' />
                    <div className='hidden sm:inline-flex'>Get in Touch</div>
                </motion.div>

            </header>


            
            {/* PIC and Text  */}
            <motion.div
                initial={{ opacity: 0, y: -200 }}
                whileInView={{
                    opacity: 1, y: 0,
                }}
                transition={{ duration: 1.5 }} className='flex relative h-screen flex-col gap-y-4  justify-center items-center'>
                <img className='rounded-full w-[84px] h-[84px] object-cover' src="https://www.upwork.com/profile-portraits/c1qsAag4Devv0SGTAgnz6MkHdC4hvJZOJcsXgTznnxl9M3hHhc5-st7rIhdFUC8nXx" alt="Ahmad image" />
                <motion.div initial={{ opacity: 0, y: -200 }}
                    whileInView={{
                        opacity: 1, y: 0, scale: [1,2,3,1,2,1],
                    }}
                    transition={{ duration: 2.5 }} className='w-[390px] h-[390px]  border-opacity-10 absolute  border border-yellow-300 opacity-40  rounded-full' />
                <p className='tracking-[.35em] text-gray-100 opacity-40 '>Software Engineer</p>
                <div className='text-[24px]'>
                    <Typewriter
                        words={['Full Stack Developer', 'Mern Stack Developer', 'UI UX Designer', 'React Developer']}
                        loop={5}
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}

                    />
                    <Cursor cursorColor='yellow' />
                </div>
                <div className='flex space-x-4 text-gray-100 opacity-40 text-sm'>
                    <motion.div initial={{ opacity: 0, x: -90 }}
                        whileInView={{
                            opacity: 1, x: 0,
                        }}
                        transition={{ duration: 2.5 }}>About</motion.div>
                    <motion.div initial={{ opacity: 0, x: -90 }}
                        whileInView={{
                            opacity: 1, x: 0,
                        }}
                        transition={{ duration: 1.5 }}>Skills</motion.div>
                    <motion.div initial={{ opacity: 0, x: 200 }}
                        whileInView={{
                            opacity: 1, x: 0,
                        }}
                        transition={{ duration: 1.5 }}>Experiene</motion.div>
                    <motion.p initial={{ opacity: 0, x: 70 }}
                        whileInView={{
                            opacity: 1, x: 0,
                        }}
                        transition={{ duration: 1.5 }}>Projects</motion.p>
                </div>
            </motion.div>

        </div>
    )
}