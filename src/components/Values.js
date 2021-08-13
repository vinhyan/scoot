import React from "react";
//style
import styled from "styled-components";
//images
import ourTech from "../images/our-tech.jpg";
import ourIntegrity from "../images/our-integrity.jpg";
import ourCommunity from "../images/our-community.jpg";
//animation
import { motion } from "framer-motion";
import { ScrollAnimate, SlideInLeft } from "../animation";
import { useScroll } from "./useScroll";

const Values = ({ title }) => {
  const [element, controls] = useScroll();

  return (
    <StyledValues ref={element} animate={controls} variants={ScrollAnimate}>
      <h2>{title}</h2>
      <div className="values-container">
        <Value
          title="Our tech"
          content="We’re using cutting edge technology to drive accessible urban transportation forward. 
          Our fully electric scooters are a joy to ride!"
          valueImg={ourTech}
          valueNumb="01"
        />
        <Value
          title="Our integrity"
          content="We are fully committed to deliver a great yet safe, sustainable micro-mobility experience
            in every city we serve."
          valueImg={ourIntegrity}
          valueNumb="02"
        />
        <Value
          title="Our community"
          content="We support every community we serve. All workers are paid a living wage based on their
            location and are Scoot employees."
          valueImg={ourCommunity}
          valueNumb="03"
        />
      </div>
    </StyledValues>
  );
};

const Value = ({ title, content, valueImg, valueNumb }) => {
  return (
    <StyledValue variants={SlideInLeft}>
      <div className="value-img">
        <img src={valueImg} alt={title} />
        <div className="circle-numb">
          <h4>{valueNumb}</h4>
        </div>
      </div>
      <h4 className="title">{title}</h4>
      <p>{content}</p>
    </StyledValue>
  );
};

//Styling
const StyledValues = styled(motion.div)`
  padding: 120px 150px;

  h2 {
    text-align: center;
  }
  .values-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  //tablet
  @media (max-width: 1000px) {
    padding: 0 140px 120px 140px;

    .values-container {
      flex-direction: column;
    }
  }

  //mobile
  @media (max-width: 590px) {
    padding: 0 17px 145px 17px;
    h2 {
      font-size: 32px;
    }
  }
`;

const StyledValue = styled(motion.div)`
  flex-basis: 350px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 15px 0 15px;
  text-align: center;

  .title {
    padding-bottom: 27px;
  }

  .value-img {
    img {
      display: block;
      border-radius: 50%;
      max-width: 100%;
    }
  }
  .circle-numb {
    width: 96px;
    height: 96px;
    border-radius: 50%;
    background-color: #fcb72b;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    bottom: 34px;
    color: #495567;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 590px) {
    .title {
      font-size: 24px;
    }
  }
`;

export default Values;
