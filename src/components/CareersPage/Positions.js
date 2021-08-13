import React from "react";
//style
import styled from "styled-components";
//animation
import { motion } from "framer-motion";
import { useScroll } from "../useScroll";
import { ScrollAnimate, SlideInLeft } from "../../animation";

const Positions = () => {
  const [element, controls] = useScroll();

  return (
    <StyledPositions ref={element} animate={controls} variants={ScrollAnimate}>
      <Position title="General Manager" area="Jakarta, Indonesia" />
      <Position title="UI/UX Designer" area="Yokohama, Japan" />
      <Position
        title="Blog Content Copywriter"
        area="New York, United States"
      />
      <Position title="Graphic Designer" area="New York, United States" />
      <Position title="Fleet Supervisor" area="Jakarta, Indonesia" />
      <Position title="UX Analyst" area="London, United Kingdom" />
    </StyledPositions>
  );
};

const Position = ({ title, area }) => {
  return (
    <StyledPosition variants={SlideInLeft}>
      <div className="detail">
        <h4>{title}</h4>
        <p>{area}</p>
      </div>
      <button className="button">Apply</button>
    </StyledPosition>
  );
};

const StyledPositions = styled(motion.div)`
  padding: 0 165px 136px 165px;

  //tablet
  @media (max-width: 950px) {
    padding: 0 39px 106px 39px;
  }
`;

const StyledPosition = styled(motion.div)`
  background-color: #f2f5f9;
  padding: 32px 40px 35px 40px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  .detail {
    p {
      padding-top: 8px;
    }
  }

  //tablet
  @media (max-width: 680px) {
    flex-direction: column;
    align-items: center;
    padding: 36px 32px 32px 32px;

    .detail {
      text-align: center;
      padding-bottom: 16px;
      h4 {
        font-size: 18px;
      }
    }
  }

  @media (max-width: 375px) {
    .button {
      width: 100%;
    }
  }
`;

export default Positions;
