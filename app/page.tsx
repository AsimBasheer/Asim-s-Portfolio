"use client";

import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import { navItems } from "../data";
import CompaniesBar from "@/components/CompaniesBar";
import AboutMe from "@/components/AboutMe";
import Specialties from "@/components/Specialties";
import RecentProjects from "@/components/RecentProjects";
import Approach from "@/components/Approach";
import TechStackGrid from "@/components/TechStackGrid";
import Footer from "@/components/Footer";

// Completely disable static generation and prerendering
export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-x-hidden" >
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <CompaniesBar />
        <AboutMe />
        <Specialties />
        <RecentProjects />
        <Approach />
        <TechStackGrid />
        <Footer />
      </div>
    </main>
  );
}
