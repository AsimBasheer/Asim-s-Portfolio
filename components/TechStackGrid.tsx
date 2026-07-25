"use client";

import React from "react";
import { FaReact, FaNodeJs, FaNetworkWired, FaTools, FaCloudUploadAlt, FaMobileAlt } from "react-icons/fa";
import { SiTypescript, SiFirebase } from "react-icons/si";

const TechStackGrid = () => {
  const stack = [
    {
      name: "React Native",
      category: "Cross-Platform Framework",
      icon: <FaReact className="text-3xl text-purple" />,
      desc: "Architecting high-fps bridges, custom native modules, and complex UI layouts using gesture handlers."
    },
    {
      name: "TypeScript",
      category: "Programming Language",
      icon: <SiTypescript className="text-3xl text-blue-500" />,
      desc: "Enforcing strict compile-time type safety across database schemas, APIs, and client states."
    },
    {
      name: "Node.js",
      category: "Backend Environment",
      icon: <FaNodeJs className="text-3xl text-emerald-500" />,
      desc: "Building highly-concurrent REST / WebSocket server interfaces and dynamic data syncing systems."
    },
    {
      name: "Firebase Suite",
      category: "BaaS Ecosystem",
      icon: <SiFirebase className="text-3xl text-amber-500" />,
      desc: "Integrating Realtime Database syncs, FireStore, Cloud Functions, and Firebase Cloud Messaging."
    },
    {
      name: "REST & GraphQL APIs",
      category: "API Integration",
      icon: <FaNetworkWired className="text-3xl text-cyan-500" />,
      desc: "Designing clean endpoint schemas with local DB mappings (WatermelonDB/SQLite) for offline-first usage."
    },
    {
      name: "CI/CD & Fastlane",
      category: "DevOps Pipeline",
      icon: <FaTools className="text-3xl text-pink-500" />,
      desc: "Automating testing builds, code sign sheets, and beta releases via GitHub Actions and Fastlane."
    },
    {
      name: "App Store Publishing",
      category: "App Deployment",
      icon: <FaCloudUploadAlt className="text-3xl text-sky-500" />,
      desc: "Managing internal testing tracks, production certificates, store review compliance, and live rollouts."
    },
    {
      name: "Performance Audit",
      category: "App Optimization",
      icon: <FaMobileAlt className="text-3xl text-teal-500" />,
      desc: "Optimizing JS bundle sizes, RAM usages, memory leaks, and flatlist renders to guarantee a smooth 60fps."
    }
  ];

  return (
    <section className="py-24 bg-[#04071D] relative overflow-hidden" id="tech">
      <div className="absolute inset-0 bg-grid-white/[0.01] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black-100 via-transparent to-black-100 z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-20">
        <h1 className="heading mb-4">
          My Core <span className="text-purple">Tech Stack</span>
        </h1>
        <p className="text-center text-sm md:text-base text-[#BEC1DD] max-w-xl mx-auto mb-16 leading-relaxed">
          Technologies and developer tools I leverage daily to construct production-ready mobile apps that businesses scale and maintain confidently.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stack.map((item, i) => (
            <div 
              key={i}
              className="group p-6 rounded-2xl border border-white/[0.05] bg-[#04071D] backdrop-blur-xl flex flex-col justify-between h-64 hover:border-purple/35 transition duration-300 relative overflow-hidden"
            >
              {/* Glow backdrop card */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-purple/10 rounded-full blur-2xl group-hover:scale-150 transition duration-300" />
              
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center group-hover:rotate-6 transition duration-300">
                  {item.icon}
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-purple transition duration-200">
                    {item.name}
                  </h3>
                  <span className="text-[10px] uppercase tracking-wider text-purple/80 font-bold">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <p className="text-xs md:text-sm text-[#BEC1DD] leading-relaxed mt-4">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackGrid;
