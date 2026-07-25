"use client";

import React from "react";
import { FaCalendarAlt, FaStore, FaSlidersH, FaMapMarkerAlt } from "react-icons/fa";

const Specialties = () => {
  const list = [
    {
      title: "Booking Apps",
      desc: "Resource scheduling, multi-timezone calendars, slot conflicts resolution, and automated reminders.",
      icon: <FaCalendarAlt className="text-3xl text-purple" />,
      color: "from-pink-500/20 to-purple/20",
      borderGlow: "group-hover:border-pink-500/50"
    },
    {
      title: "Marketplace Apps",
      desc: "Double-sided professional listings, Stripe Connect split-payments, WebSocket instant chats, and rating frameworks.",
      icon: <FaStore className="text-3xl text-blue-500" />,
      color: "from-blue-500/20 to-cyan-500/20",
      borderGlow: "group-hover:border-blue-500/50"
    },
    {
      title: "SaaS Platforms",
      desc: "Mobile-first technician dispatching, inventory logs, dynamic digital sign sheets, and deep offline caching systems.",
      icon: <FaSlidersH className="text-3xl text-emerald-500" />,
      color: "from-emerald-500/20 to-teal-500/20",
      borderGlow: "group-hover:border-emerald-500/50"
    },
    {
      title: "On-Demand Services",
      desc: "Live GPS updates, background geoposition tracking, socket-based dispatching, and high-priority push events.",
      icon: <FaMapMarkerAlt className="text-3xl text-amber-500" />,
      color: "from-amber-500/20 to-orange-500/20",
      borderGlow: "group-hover:border-amber-500/50"
    }
  ];

  return (
    <section className="py-20 bg-black-100" id="specialties">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="heading mb-12">
          What I Help <span className="text-purple">Build & Scale</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {list.map((spec, i) => (
            <div 
              key={i}
              className={`group relative overflow-hidden rounded-3xl border border-white/[0.05] bg-[#04071D] p-8 flex flex-col justify-between h-72 transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${spec.borderGlow}`}
            >
              {/* Card Radial Hover Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${spec.color} opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none`} />
              
              <div className="flex flex-col gap-6 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center group-hover:scale-110 transition duration-300">
                  {spec.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {spec.title}
                </h3>
              </div>
              
              <p className="text-[#BEC1DD] text-sm leading-relaxed relative z-10 font-medium">
                {spec.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
