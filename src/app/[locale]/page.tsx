"use client";

import React from "react";
import HomePage from "@/components/HomePage";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {

  return (
    <div className="flex flex-col justify-center items-center max-w-screen-2xl m-auto">
      <HomePage />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Portfolio />
      <Footer className="w-1/2 text-center" />
    </div >
  );
}