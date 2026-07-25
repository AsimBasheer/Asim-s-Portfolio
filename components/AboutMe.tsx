"use client";

import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import dp from "../public/linkedProfile.png";


const AboutMe = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="about-details">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Image + Big Philosophy Statement */}
          <div className="lg:col-span-6 flex flex-col justify-start">

            {/* Profile Image - now properly contained and responsive */}
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] aspect-square mb-8 mx-auto lg:mx-0">
              <Image
                src={dp}
                alt="Asim Bashir"
                fill
                sizes="(max-width: 1024px) 320px, 360px"
                className="rounded-full object-cover"
                priority
              />
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-8">
            &quot;Building a successful mobile product isn&apos;t just about shipping features—it&apos;s about creating something <span className="text-purple">users trust</span>, businesses can <span className="text-purple">scale</span>, and engineering teams can confidently <span className="text-purple">maintain</span>. That&apos;s the gap I work in.&quot;
            </h2>

            <div className="h-[2px] w-32 bg-gradient-to-r from-purple to-blue-500 mb-8" />

            <p className="text-lg text-[#C1C2D3] font-medium leading-relaxed mb-6">
              I&apos;m a Senior React Native Engineer with 6+ years of experience helping startups build scalable mobile products, specializing in booking platforms, marketplaces, on-demand services, and workforce management.
            </p>

            <p className="text-base text-[#BEC1DD] leading-relaxed mb-6">
              I build production-ready apps with React Native, Node.js, TypeScript, Firebase, REST APIs, and CI/CD, delivering reliable solutions businesses depend on.
            </p>
          </div>

          {/* Right Column: Bio & Checklist */}
          <div className="lg:col-span-6 flex flex-col gap-8 bg-[#04071D] border border-white/[0.05] p-8 md:p-10 rounded-3xl backdrop-blur-xl relative">
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple/10 rounded-full blur-[80px]" />

            <div>
              <h3 className="text-xl font-bold text-white mb-4">Lifecycle Ownership</h3>
              <p className="text-[#BEC1DD] text-sm md:text-base leading-relaxed">
                I&apos;ve worked through software agencies building, launching, and maintaining apps live on the App Store and Google Play—involved across the full lifecycle, not just writing code: feature planning, API integration, performance optimization, and managing production releases.
              </p>
            </div>

            <div className="h-[1px] w-full bg-white/[0.05]" />

            <div>
              <h3 className="text-xl font-bold text-white mb-6">What You Can Expect From Me</h3>
              <ul className="flex flex-col gap-4">
                {[
                  { text: "Ownership from planning to deployment", bold: "Ownership" },
                  { text: "Clear, proactive communication with regular progress updates", bold: "Proactive Communication" },
                  { text: "Clean, scalable architecture built to survive real usage, not just a demo", bold: "Clean Architecture" },
                  { text: "Honest technical calls, even when it means telling you a feature isn't worth building yet", bold: "Honesty" },
                  { text: "Delivery you can actually plan around", bold: "Predictable Delivery" }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FaCheckCircle className="text-purple text-lg mt-1 shrink-0" />
                    <p className="text-[#C1C2D3] text-sm md:text-base">
                      <strong className="text-white">{item.bold}: </strong>{item.text.replace(item.bold, "")}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;