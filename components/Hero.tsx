"use client";

import MagicButton from './ui/MagicButton'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { FaCalendarCheck, FaDownload } from "react-icons/fa6";
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="pb-20 pt-36 overflow-x-hidden relative" id="about">
      {/* Spotlight Animations */}
      <div className="overflow-x-hidden" >
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Grid Background */}
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.02] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      {/* Split Hero Layout */}
      <div className='flex justify-center relative my-10 z-10' >
        <div className='max-w-[89vw] md:max-w-5xl lg:max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center' >
          
          {/* Left Column: Text & CTA */}
          <div className='lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-start' >
            <h2 className='uppercase tracking-widest text-xs text-blue-100 max-w-80' >
              Senior React Native Developer Portfolio
            </h2>
            <TextGenerateEffect
              words="Helping Startups Build Scalable Mobile Products"
              className="text-[40px] md:text-5xl lg:text-6xl font-bold leading-tight"
            />
            
            <p className="md:tracking-wider mb-8 mt-4 text-sm md:text-lg lg:text-xl text-[#C1C2D3]">
              I build production-ready apps with React Native, TypeScript, Node.js, and Firebase—specializing in booking platforms, marketplaces, and workforce scheduling.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start">
              <a href="mailto:asimmehar124@gmail.com?subject=Book%20a%20Call%20-%20Mobile%20Product%20Consultation">
                <MagicButton
                  title="Book a Call"
                  icon={<FaCalendarCheck />}
                  position="right"
                />
              </a>
              <a href="mailto:asimmehar124@gmail.com?subject=Requesting%20Resume">
                <MagicButton
                  title="Download Resume"
                  icon={<FaDownload />}
                  position="right"
                  otherClasses="!bg-[#161A31] border border-white/[0.1] text-white"
                />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Photo / Premium Graphic */}
          <div className='lg:col-span-5 flex justify-center items-center' >
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-[2px] overflow-hidden bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] shadow-2xl">
              <div className="w-full h-full bg-[#04071D] rounded-full flex items-center justify-center relative overflow-hidden backdrop-blur-3xl">
                {/* Custom Glowing Dev Graphic SVG */}
                <svg
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[80%] h-[80%] opacity-85"
                >
                  <defs>
                    <linearGradient id="gradient-avatar" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#CBACF9" />
                      <stop offset="100%" stopColor="#8d6ae6" />
                    </linearGradient>
                    <filter id="glow-filter" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="8" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>
                  {/* Glowing background circle */}
                  <circle cx="100" cy="100" r="70" fill="url(#gradient-avatar)" opacity="0.15" filter="url(#glow-filter)" />
                  {/* Smartphone Frame outline */}
                  <rect x="65" y="30" width="70" height="140" rx="14" stroke="url(#gradient-avatar)" strokeWidth="4" opacity="0.6" />
                  <line x1="90" y1="40" x2="110" y2="40" stroke="url(#gradient-avatar)" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
                  <circle cx="100" cy="155" r="5" fill="url(#gradient-avatar)" opacity="0.6" />
                  {/* Code Brackets overlay */}
                  <path d="M40 75L25 90L40 105" stroke="#CBACF9" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M160 75L175 90L160 105" stroke="#CBACF9" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M110 70L90 120" stroke="#CBACF9" strokeWidth="3" strokeLinecap="round" />
                  {/* React Native style orbiting rings */}
                  <ellipse cx="100" cy="100" rx="85" ry="30" stroke="#CBACF9" strokeWidth="1" strokeDasharray="5 5" transform="rotate(30 100 100)" opacity="0.4" />
                  <ellipse cx="100" cy="100" rx="85" ry="30" stroke="#CBACF9" strokeWidth="1" strokeDasharray="5 5" transform="rotate(-30 100 100)" opacity="0.4" />
                </svg>

                {/* Micro-animating orb */}
                <div className="absolute top-10 right-10 w-4 h-4 bg-[#CBACF9] rounded-full animate-pulse blur-[1px]" />
                <div className="absolute bottom-16 left-12 w-6 h-6 bg-[#393BB2] rounded-full animate-bounce opacity-40" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero
