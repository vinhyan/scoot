import React from "react";
//components
import Banner from "../components/Banner";
import JoinCareers from "../components/CareersPage/JoinCareers";
import Positions from "../components/CareersPage/Positions";
import ScrollTop from "../components/ScrollTop";
//images
import bgDesktop from "../images/careers-locations-hero-desktop.jpg";
import bgTablet from "../images/careers-locations-hero-tablet.jpg";
import bgMobile from "../images/careers-location-hero-mobile.jpg";
//animation
import { motion } from "framer-motion";
import { PageAnimate } from "../animation";

const Careers = () => {
  return (
    <motion.div variants={PageAnimate} initial="hide" animate="show">
      <Banner
        title="Careers"
        bgDesktop={bgDesktop}
        bgTablet={bgTablet}
        bgMobile={bgMobile}
      />
      <JoinCareers />
      <Positions />
      <ScrollTop />
    </motion.div>
  );
};

export default Careers;
