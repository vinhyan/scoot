import React from "react";

//component
import Card from "../Card";
//images
import telemetry from "../../images/telemetry.jpg";
import nearYou from "../../images/near-you.jpg";
import payments from "../../images/payments.jpg";
//patterns
import rightArrow from "../../patterns/right-arrow.svg";
import leftDownArrow from "../../patterns/left-downward-arrow.svg";
import circle from "../../patterns/circle.svg";
//style
import styled from "styled-components";
import { CardContainer } from "../../UtilStyle";
//animation
import { motion } from "framer-motion";
import { useScroll } from "../useScroll";
import { ScrollAnimate, SlideInLeft, SlideInRight } from "../../animation";

const Features = () => {
  const [element, controls] = useScroll();

  return (
    <StyledFeatures ref={element} animate={controls} variants={ScrollAnimate}>
      <FeatureCard variants={SlideInRight}>
        <Card
          title="Easy to use riding telemetry"
          content="The Scoot app is available with riding telemetry. This means it
                can show you your average speed, how long you've been using the
                scooter, your traveling distance, and many more things all in an
                easy to use app."
          featureImg={telemetry}
          button={true}
          buttonContent="Learn More"
          isReverse={true}
          link="/about"
        />
        <img className="circle" src={circle} alt="circle" />
        <img className="arrow" src={leftDownArrow} alt="arrow" />
      </FeatureCard>
      <FeatureCard variants={SlideInLeft}>
        <Card
          title="Coming to a city near you"
          content="Scoot is available in 4 major cities so far. We’re expanding
          rapidly, so be sure to let us know if you want to see us in your
          hometown. We’re aiming to let our scooters loose on 23 cities over
          the coming year."
          featureImg={nearYou}
          button={true}
          buttonContent="Learn More"
          isReverse={false}
          link="/locations"
        />
        <img className="circle2" src={circle} alt="circle" />
        <img className="arrow2" src={rightArrow} alt="arrow" />
      </FeatureCard>
      <FeatureCard variants={SlideInRight}>
        <Card
          title="Zero hassle payments"
          content="Our payment is as easy as one two three. We accept most credit
          cards and debit cards. You can also link your PayPal account
          inside the app. Need to pay later? No worries! You can defer
          payment for up to a month."
          featureImg={payments}
          button={true}
          buttonContent="Learn More"
          isReverse={true}
          link="/about"
        />
        <img className="circle" src={circle} alt="circle" />
        <img className="arrow3" src={leftDownArrow} alt="arrow" />
      </FeatureCard>
    </StyledFeatures>
  );
};

const StyledFeatures = styled(motion.div)`
  padding: 40px 0;
  overflow-x: hidden;

  //tablet
  @media (max-width: 1230px) {
    padding: 0;
  }
`;

const FeatureCard = styled(CardContainer)`
  margin: 160px 0;

  .circle {
    position: absolute;
    top: 0;
    right: -344px;
  }

  .arrow {
    position: absolute;
    top: 307px;
    right: 0;
  }

  .circle2 {
    position: absolute;
    top: 0;
    left: -344px;
  }

  .arrow2 {
    position: absolute;
    top: 0;
    left: 0;
  }

  .arrow3 {
    position: absolute;
    top: 85px;
    right: -380px;
  }

  //tablet
  @media (max-width: 1230px) {
    margin: 0 auto 120px 0;
  }

  @media (max-width: 768px) {
    .arrow {
      left: 40px;
    }
  }

  //mobile
  @media (max-width: 670px) {
    .circle,
    .circle2 {
      display: none;
    }

    .arrow {
      top: 173px;
    }

    .arrow3 {
      top: 7px;
      left: 162px;
      right: auto;
    }
  }

  @media (max-width: 460px) {
    .arrow2 {
      left: auto;
      right: 113px;
    }
  }
`;

export default Features;
