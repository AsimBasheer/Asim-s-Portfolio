"use client";

import { useState, useEffect } from "react";
import { FaLocationArrow, FaTimes, FaCalendarAlt, FaBullseye, FaReact } from "react-icons/fa";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import Image from 'next/image';
import bg from "../public/bg.png";
import { AnimatePresence, motion } from "framer-motion";

type ProjectType = typeof projects[0];

const RecentProjects = () => {
  const [activeProject, setActiveProject] = useState<ProjectType | null>(null);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  return (
    <div className="py-20 bg-black-100 relative" id="projects">
      <h1 className="heading">
        Selected <span className="text-purple">Case Studies</span>
      </h1>
      
      {/* Grid List */}
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-16 mt-10">
        {projects.map((item) => (
          <div
            className="sm:h-[41rem] h-[35rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title={item.title}
              href={item.link}
            >
              {/* Card visual showcase */}
              <div className="relative flex items-center justify-center sm:h-[40vh] h-[30vh] sm:w-[520px] w-[75vw] overflow-hidden mb-8 rounded-2xl">
                <div
                  className="relative w-full h-full overflow-hidden rounded-xl lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image src={bg} alt="bgimg" width={570} height={400} />
                </div>
                <Image
                  src={item.img}
                  alt="cover"
                  width={350}
                  height={260}
                  className="z-10 absolute top-10 w-[70%] bottom-0 rounded-xl rotate-3 object-contain hover:scale-105 transition duration-300"
                />
              </div>

              {/* Title & Des */}
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white">
                {item.title}
              </h1>

              <p
                className="lg:text-lg lg:font-normal font-light text-sm line-clamp-2 text-[#BEC1DD]"
                style={{ margin: "1.5vh 0" }}
              >
                {item.des}
              </p>

              {/* Card Footer: Icons & Actions */}
              <div className="flex items-center justify-between mt-7 mb-3">
                
                {/* Tech Icons */}
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image src={icon} alt="icon" width={40} height={40} className="p-2" />
                    </div>
                  ))}
                </div>

                {/* Case Study Read Button */}
                <div className="flex justify-center items-center gap-4">
                  <button
                    onClick={() => setActiveProject(item)}
                    className="cursor-pointer text-xs md:text-sm font-semibold text-purple hover:underline"
                  >
                    Read Case Study
                  </button>
                  <a 
                    className="flex items-center gap-2 group cursor-pointer text-xs md:text-sm font-bold text-white bg-white/[0.04] border border-white/[0.08] hover:border-purple px-3 py-2 rounded-xl transition duration-200" 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    App Store
                    <FaLocationArrow className="text-purple group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-200" size={10} />
                  </a>
                </div>

              </div>
            </PinContainer>
          </div>
        ))}
      </div>

      {/* Modern Overlay Modal (Framer Motion) */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            
            {/* Dark Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-4xl max-h-[85vh] bg-[#04071D] border border-white/[0.08] rounded-3xl overflow-y-auto p-6 md:p-10 shadow-2xl backdrop-blur-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/[0.05] border border-white/[0.05] hover:bg-white/[0.1] hover:border-white/[0.2] transition duration-200 text-white"
              >
                <FaTimes size={18} />
              </button>

              {/* Modal Content Header */}
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center pb-6 border-b border-white/[0.05] mb-8">
                <div className="w-20 h-20 rounded-2xl border border-white/[0.05] bg-white/[0.02] flex items-center justify-center p-2">
                  <Image src={activeProject.img} alt="logo" width={64} height={64} className="object-contain rounded-xl" />
                </div>
                <div>
                  <h2 className="text-3xl font-extrabold text-white tracking-tight">
                    {activeProject.title}
                  </h2>
                  <p className="text-purple font-semibold text-sm md:text-base mt-1 flex items-center gap-2">
                    <FaReact className="animate-spin-slow" /> {activeProject.caseStudy.role}
                  </p>
                </div>
              </div>

              {/* Case Study Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-[#BEC1DD]">
                
                {/* Left Side: Story Details */}
                <div className="md:col-span-8 flex flex-col gap-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                      <FaCalendarAlt className="text-purple" /> The Challenge
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed font-medium">
                      {activeProject.caseStudy.challenge}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                      <FaLocationArrow className="text-purple rotate-45" /> The Solution
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed font-medium">
                      {activeProject.caseStudy.solution}
                    </p>
                  </div>
                </div>

                {/* Right Side: Metrics, Tech details */}
                <div className="md:col-span-4 flex flex-col gap-6 bg-white/[0.02] border border-white/[0.04] p-6 rounded-2xl relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple/5 rounded-full blur-2xl" />
                  
                  <div>
                    <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                      <FaBullseye className="text-purple" /> Results & Impact
                    </h3>
                    <p className="text-xs md:text-sm leading-relaxed font-medium">
                      {activeProject.caseStudy.impact}
                    </p>
                  </div>

                  <div className="h-[1px] w-full bg-white/[0.05]" />

                  <div>
                    <h3 className="text-base font-bold text-white mb-3">
                      Core Technology
                    </h3>
                    <p className="text-xs font-semibold bg-white/[0.03] text-purple p-3 rounded-lg border border-white/[0.05]">
                      {activeProject.caseStudy.techDetails}
                    </p>
                  </div>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="mt-8 pt-6 border-t border-white/[0.05] flex justify-end gap-4">
                <button
                  onClick={() => setActiveProject(null)}
                  className="px-6 py-3 rounded-xl border border-white/[0.08] hover:bg-white/[0.05] text-white text-sm font-semibold transition duration-200"
                >
                  Close Case Study
                </button>
                <a
                  href={activeProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-purple text-white text-sm font-bold flex items-center gap-2 hover:bg-purple/95 transition duration-200"
                >
                  Check App Store
                  <FaLocationArrow size={10} />
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default RecentProjects;