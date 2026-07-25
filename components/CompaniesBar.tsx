"use client";

import React from 'react'

const CompaniesBar = () => {
  const brandList = [
    { name: "Shift Fish", role: "Workforce Management" },
    { name: "Haptickk", role: "Service Marketplace" },
    { name: "FixTrack", role: "SaaS Field Service" },
    { name: "FridayNight PA", role: "Live Sports Streaming" }
  ];

  return (
    <section className="w-full py-12 bg-black-200 border-y border-white/[0.05] relative overflow-hidden" id="companies">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#04071D] via-transparent to-[#04071D] z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-20">
        <p className="text-center text-sm uppercase tracking-widest text-[#BEC1DD] mb-8 font-semibold">
          COMPANIES & PRODUCTS I HAVE HELPED BUILD AND DEPLOY LIVE
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 lg:gap-24">
          {brandList.map((brand, i) => (
            <div 
              key={i} 
              className="flex flex-col items-center justify-center group transition duration-300"
            >
              <h3 className="text-2xl md:text-3xl font-extrabold text-white opacity-70 group-hover:opacity-100 transition duration-300 tracking-tight bg-gradient-to-r from-white to-[#BEC1DD] bg-clip-text text-transparent group-hover:from-white group-hover:to-[#CBACF9]">
                {brand.name}
              </h3>
              <span className="text-[10px] md:text-xs font-medium text-[#C1C2D3] uppercase mt-1 opacity-50 group-hover:opacity-80 transition duration-300">
                {brand.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CompaniesBar
