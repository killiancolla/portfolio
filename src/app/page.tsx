"use client";

import React from "react";
import NavBar from "@/components/NavBar";
import HomePage from "@/components/HomePage";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Portfolio from "@/components/Portfolio";

export default function Home() {

  return (
    <div className="dark flex flex-col justify-center items-center">
      <NavBar />
      <HomePage />
      <About />
      <Skills />
      <Projects />
      <Portfolio />
    </div >
  );
}
