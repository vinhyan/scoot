import React from "react";
//components
import Banner from "../components/Banner";
import Mission from "../components/AboutPage/Mission";
import Values from "../components/Values";
import Faq from "../components/AboutPage/Faq";
import ScrollTop from "../components/ScrollTop";
//img
import aboutBg from "../images/about-hero-desktop.jpg";
import aboutBgTablet from "../images/about-hero-tablet.jpg";
import aboutBgMobile from "../images/about-hero-mobile.jpg";
//animation
import { motion } from "framer-motion";
import { PageAnimate } from "../animation";

const About = () => {
  return (
    <motion.div variants={PageAnimate} initial="hide" animate="show">
      <Banner
        title="About"
        bgDesktop={aboutBg}
        bgTablet={aboutBgTablet}
        bgMobile={aboutBgMobile}
      />
      <Mission />
      <Values title="Our Values" />
      <Faq />
      <ScrollTop />
    </motion.div>
  );
};

export default About;
