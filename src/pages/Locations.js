import React from "react";
//components
import Banner from "../components/Banner";
import Map from "../components/LocationsPage/Map";
import ScrollTop from "../components/ScrollTop";
//images
import bgDesktop from "../images/careers-locations-hero-desktop.jpg";
import bgTablet from "../images/careers-locations-hero-tablet.jpg";
import bgMobile from "../images/careers-location-hero-mobile.jpg";
//animation
import { motion } from "framer-motion";
import { PageAnimate } from "../animation";

const Locations = () => {
  return (
    <motion.div variants={PageAnimate} initial="hide" animate="show">
      <Banner
        title="Locations"
        bgDesktop={bgDesktop}
        bgTablet={bgTablet}
        bgMobile={bgMobile}
      />
      <Map />
      <ScrollTop />
    </motion.div>
  );
};

export default Locations;
