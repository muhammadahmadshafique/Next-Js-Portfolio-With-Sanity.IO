import React from 'react'
import { SocialIcon } from 'react-social-icons';
import Header from '../components/Header';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Projects from '../components/Projects';

type Props = {}

export default function index({}: Props) {
  return (
    <div className='snap-y snap-mandatory w-screen h-screen overflow-scroll bg-[rgb(36,36,36)] overflow-x-hidden text-white scrollbar scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-yellow-300 scrollbar-track-gray-900'>
      <Header/>
      <About/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Contact/>


    </div>
  )
}