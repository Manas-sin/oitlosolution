import React from 'react'
import  { useEffect, useState } from "react";
import Slider from "@/components/Slider";
import Headtwo from "@/components/head2";
import Headthree from "@/components/head3";
import Sectionbottom from "@/components/sectionbottom";
import Footer from "@/components/Footer";
import Right from "@/components/Right";
import Sectionbottomtwo from "@/components/sectionbottomtwo";
import Sectionbottomconsulting from "@/components/Sectionbottomconsulting";
import Cloudcomputingarea from "@/components/Cloudcomputingarea";
import About from '@/components/aboutcomp';
import Aboutcomp from '@/components/aboutcomp';
const Cloudcomputing = () => {
  return (
    <>
    <main className="page-wrapper">
    {/* one */}
     <Headtwo />
     <Headthree />
    <Aboutcomp />
     <Footer />
     <Right />
   </main>
</>
  )
}

export default Cloudcomputing