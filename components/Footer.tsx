"use client";

import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='w-full pb-10 mb-[100px] md:mb-5 relative' id='contact' >
      <div className="absolute inset-0 w-full h-full bg-grid-white/[0.01] pointer-events-none" />

      <div className="flex flex-col items-center relative z-10" >
        <h1 className="heading lg:max-w-[50vw] text-center">
          Let&apos;s Build Something <span className="text-purple">Together</span>
        </h1>
        
        <p className="text-[#BEC1DD] md:mt-10 my-6 text-center max-w-2xl text-base md:text-lg leading-relaxed">
          If you&apos;re building something in booking, on-demand, or marketplace space — send me what you&apos;re working on. I&apos;ll give you a straight answer on scope, timeline, and what I&apos;d do differently, no sales pitch.
        </p>

        <a href="mailto:asimmehar124@gmail.com?subject=Inquiry%20from%20Portfolio&body=Hi%20Asim,%20I'm%20working%20on...">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-20 md:flex-row flex-col justify-between items-center relative z-10 gap-6 border-t border-white/[0.05] pt-8" >
        <p className="md:text-base text-sm md:font-normal font-light text-[#BEC1DD]" >
          Copyright © 2026 Asim Bashir
        </p>

        <div className="flex items-center md:gap-3 gap-6" >
          {socialMedia.map(({id, img, link}) => (
            <div key={id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:border-purple hover:scale-105 transition duration-200" >
              <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <Image src={img} alt={id.toString()} width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer