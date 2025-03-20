import React, { useEffect, useState } from "react";
import Slider from "@/components/Slider";
import Headtwo from "@/components/head2";
import Headthree from "@/components/head3";




import Sectionbottom from "@/components/sectionbottom";
import Footer from "@/components/Footer";
import Right from "@/components/Right";
import Sectionbottomtwo from "@/components/sectionbottomtwo";

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <>
        <main className="page-wrapper">
         {/* one */}
          <Headtwo />
          <Headthree />
          <Slider />
          <Sectionbottomtwo />
          <Sectionbottom />
          <Footer />
          <Right />
        </main>
        <div className="rainbow-back-top">
          <i className="feather-arrow-up" />
        </div>
      </>
    )
  );
};

export default Index;