import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import GradientButton from "../components/atoms/GradientButton";
import TypewriterEffect from "../components/molecules/TypewriterEffect";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import AppFooter from "../components/organisms/Footer";
import bgImage from "../assets/images/CL1_3994.jpg";
import Experience from "./Experience";
import Skills from "./Skills";

const Dashboard = () => {
  return (
    <div>
      <NavbarComponent />
      <div
        style={{
          minHeight: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${bgImage})`,
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
        <GradientButton />{" "}
      </div>
      <AboutMe />
      <Skills/>
      <Experience/>
      <Contact />
      <AppFooter />
    </div>
  );
};

export default Dashboard;

//https://drive.google.com/file/d/1VMNvnI8AQxoNrlF1IRo3ZnyvrmfXu8_r/view?usp=sharing