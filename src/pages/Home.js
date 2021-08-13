import React from "react";
//components
import Intro from "../components/HomePage/Intro";
import Features from "../components/HomePage/Features";
import ScrollTop from "../components/ScrollTop";
//animation
import { motion } from "framer-motion";
import { PageAnimate } from "../animation";

const Home = () => {
  return (
    <motion.div variants={PageAnimate} initial="hide" animate="show">
      <Intro />
      <Features />
      <ScrollTop />
    </motion.div>
  );
};

export default Home;
