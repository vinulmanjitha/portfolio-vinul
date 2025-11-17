import React, { useState, useEffect } from "react";
import NavbarComponent from "../components/NavbarComponent";
import GradientButton from "../components/atoms/GradientButton";
import TypewriterEffect from "../components/molecules/TypewriterEffect";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import AppFooter from "../components/organisms/Footer";
import bgImage from "../assets/images/CL1_3994.jpg";
import bgImageMobile from "../assets/images/CL1_3994Mobile.jpg";
import Experience from "./Experience";
import Skills from "./Skills";

const Dashboard = () => {
  const [bg, setBg] = useState(bgImage);
  const [fade, setFade] = useState(false);

  const updateBackground = () => {
    setFade(true);

    setTimeout(() => {
      if (window.innerWidth <= 768) {
        setBg(bgImageMobile);
      } else {
        setBg(bgImage);
      }
      setFade(false); 
    }, 200);
  };

  useEffect(() => {
    updateBackground(); 

    window.addEventListener("resize", updateBackground);

    return () => window.removeEventListener("resize", updateBackground);
  }, []);

  return (
    <div>
      <NavbarComponent />

      <div
        style={{
          minHeight: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "opacity 0.8s ease-in-out",
          opacity: fade ? 0 : 1,
        }}
      >
        <TypewriterEffect
          text="Hello, I am Vinul Lewangama. Software Developer"
          speed={150}
        />
      </div>

      <div
        style={{ minHeight: "10vh", display: "flex", justifyContent: "center" }}
      >
        <GradientButton />
      </div>

      <AboutMe />
      <Skills />
      <Experience />
      <Contact />
      <AppFooter />
    </div>
  );
};

export default Dashboard;
