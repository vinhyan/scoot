import React from "react";
//components
import Card from "../Card";
//image
import digital from "../../images/digital-era.jpg";
import betterLiving from "../../images/better-living.jpg";
//patterns
import circle from "../../patterns/circle.svg";
import leftUpArrow from "../../patterns/left-upward-arrow.svg";
import rightArrow from "../../patterns/right-arrow.svg";
//style
import styled from "styled-components";
import { CardContainer } from "../../UtilStyle";
//animation
import { SlideInLeft, SlideInRight } from "../../animation";


const Mission = () => {

  return (
    <StyledMission>
      <MissionCard variants={SlideInRight}>
        <Card
          title="Mobility for the digital era"
          content="Getting around should be simple (and even fun!) for everyone. We embrace technology to 
            provide low cost, smart access to scooters at your fingertips."
          featureImg={digital}
          button={false}
          isReverse={true}
        />
        <img className="circle" src={circle} alt="circle" />
        <img className="arrow" src={leftUpArrow} alt="arrow" />
      </MissionCard>
      <MissionCard variants={SlideInLeft}>
        <Card
          title="Better urban living"
          content="We’re helping connect cities and bring people closer together. Our scooters are also 
          fully-electric and we offset the minimal carbon footprint for each ride."
          featureImg={betterLiving}
          button={false}
          isReverse={false}
        />
        <img className="circle2" src={circle} alt="circle" />
        <img className="arrow2" src={rightArrow} alt="arrow" />
      </MissionCard>
    </StyledMission>
  );
};

const StyledMission = styled.div`
  overflow-x: hidden;
`;

const MissionCard = styled(CardContainer)`
  .circle {
    position: absolute;
    top: 0;
    right: -344px;
  }
  .arrow {
    position: absolute;
    top: 255px;
    right: 0;
  }
  .circle2 {
    position: absolute;
    top: 0;
    left: -344px;
  }
  .arrow2 {
    position: absolute;
    top: 8px;
    left: 0;
  }
  //tablet
  @media (max-width: 768px) {
    .arrow {
      left: 32px;
    }
  }
  //mobile
  @media (max-width: 680px) {
    .circle,
    .circle2 {
      display: none;
    }
    .arrow {
      top: 133px;
    }

    .arrow2 {
      top: -10px;
    }
  }
  @media (max-width: 460px) {
    .arrow2 {
      left: auto;
      right: 32px;
    }
  }
`;

export default Mission;
