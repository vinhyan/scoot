import React from "react";
//components
import Card from "../Card";
import Values from "../Values";
//images
import joinUs from "../../images/join-us.jpg";
//patterns
import leftDownArrow from "../../patterns/left-downward-arrow.svg";
import circle from "../../patterns/circle.svg";
//style
import styled from "styled-components";
import { CardContainer } from "../../UtilStyle";
//animation
import { SlideInRight } from "../../animation";


const JoinCareers = () => {

  return (
    <StyledJoinCareers>
      <CareersCard variants={SlideInRight}>
        <Card
          title="Care to join our mission?"
          content="We’re always looking for ambitious individuals to help us on our journey. If you’re 
  passionate about our mission to provide clean, accessible transport to improve urban 
  living we want to hear from you!"
          featureImg={joinUs}
          button={true}
          buttonContent="Say Hello"
          link={""}
          isReverse={true}
        />
        <img className="circle" src={circle} alt="circle" />
        <img className="arrow" src={leftDownArrow} alt="arrow" />
      </CareersCard>
      <Values title="Why join us?" />
    </StyledJoinCareers>
  );
};
const StyledJoinCareers = styled.div`
  overflow-x: hidden;
`;

const CareersCard = styled(CardContainer)`
  .circle {
    position: absolute;
    top: 0;
    right: -344px;
  }
  .arrow {
    position: absolute;
    right: 0;
    top: 307px;
  }

  @media (max-width: 768px) {
    .arrow {
      left: 40px;
    }
  }

  @media (max-width: 680px) {
    .circle {
      display: none;
    }
    .arrow {
      top: 173px;
    }
  }
`;

export default JoinCareers;
