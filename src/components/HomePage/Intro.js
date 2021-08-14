import React from "react";
//icons
import locate from "../../icons/locate.svg";
import scooter from "../../icons/scooter.svg";
import ride from "../../icons/ride.svg";
//patterns
import whiteCircles from "../../patterns/white-circles.svg";
//image
import bgImg from "../../images/home-hero-desktop.jpg";
import bgTablet from "../../images/home-hero-tablet.jpg";
import bgMobile from "../../images/home-hero-mobile.jpg";
//style
import styled from "styled-components";
//animation
import { motion } from "framer-motion";
import {
  TitleAnimate,
  PathRight,
  ArrowLeft,
  ScrollAnimate,
  SlideInLeft,
} from "../../animation";
import { useScroll } from "../useScroll";

const Intro = () => {
  const appDownloadClick = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const [element, controls] = useScroll();

  return (
    <StyledIntro>
      <div className="background">
        <motion.div variants={TitleAnimate} className="description">
          <h1>Scooter sharing made simple</h1>
          <p>
            Scoot takes the hassle out of urban mobility. Our bikes are placed
            in convenient locations in each of our cities. Use our app to locate
            the nearest bike, unlock it with a tap, and you’re away!
          </p>
          <button onClick={appDownloadClick} className="button">
            Get Scootin
          </button>
        </motion.div>
        <svg
          id="line"
          xmlns="http://www.w3.org/2000/svg"
          width="203"
          height="15"
        >
          <motion.path
            variants={PathRight}
            fill="none"
            stroke="#FCB72B"
            strokeWidth="15"
            d="M203 7.5H.5"
          />
        </svg>
        <svg
          id="right-arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="452"
          height="151"
        >
          <g
            fill="none"
            fillRule="evenodd"
            stroke="#FCB72B"
            strokeLinejoin="bevel"
            strokeWidth="15"
          >
            <motion.path variants={ArrowLeft} d="M0 8h270.115v99.369h176.263" />
            <motion.path
              variants={PathRight}
              d="M407.952 145.444l38.426-38.426-38.426-38.426"
            />
          </g>
        </svg>
        <img id="white-circles" src={whiteCircles} alt="pattern" />
      </div>

      <FunctionSpotlights
        ref={element}
        animate={controls}
        variants={ScrollAnimate}
      >
        <motion.div variants={SlideInLeft} className="spotlight">
          <img src={locate} alt="locate" />
          <div className="detail">
            <h2>Locate with app</h2>
            <p>
              Use the app to find the nearest scooter to you. We are
              continuously placing scooters in the areas with most demand, so
              one should never be too far away.
            </p>
          </div>
        </motion.div>
        <motion.div variants={SlideInLeft} className="spotlight">
          <img src={scooter} alt="scooter" />
          <div className="detail">
            <h2>Pick your scooter</h2>
            <p>
              We show the most important info for the scooters closest to you.
              So you know how much charge they have left and can see roughly how
              much it will cost.
            </p>
          </div>
        </motion.div>
        <motion.div variants={SlideInLeft} className="spotlight">
          <img src={ride} alt="ride" />
          <div className="detail">
            <h2>Enjoy the ride</h2>
            <p>
              Scan the QR code and the bike will unlock. Retract the cable lock,
              put on a helmet, and you’re off! Always lock bikes away from
              walkways and accessibility ramps.
            </p>
          </div>
        </motion.div>
        <svg
          id="greyline"
          width="974"
          height="15"
          viewBox="0 0 974 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            variants={PathRight}
            d="M973.5 7.5H0.5"
            stroke="#E5ECF4"
            strokeWidth="15"
          />
        </svg>
        <svg
          id="greyline-mobile"
          width="16"
          height="974"
          viewBox="0 0 16 974"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            variants={PathRight}
            d="M7.94932 973.051V0.949318"
            stroke="#E5ECF4"
            strokeWidth="15"
          />
        </svg>
      </FunctionSpotlights>
    </StyledIntro>
  );
};

const StyledIntro = styled.div`
  overflow: hidden;
  .background {
    background-image: url(${bgImg});
    background-size: cover;
    background-position: center;
    height: 650px;
    position: relative;
    z-index: 1;

    .description {
      h1 {
        color: #ffffff;
        width: 500px;
        position: absolute;
        top: 153px;
        left: 165px;
      }
      p {
        color: #ffffff;
        width: 405px;
        position: absolute;
        top: 305px;
        left: 260px;
        text-align: justify;
      }

      .button {
        position: absolute;
        top: 445px;
        left: 260px;
      }
    }

    #line {
      position: absolute;
      top: 354px;
    }
    #right-arrow {
      position: absolute;
      top: 355px;
      left: 705px;
    }
    #white-circles {
      position: absolute;
      top: 423px;
      right: -48px;
    }
  }

  //tablet
  @media (max-width: 1364px) {
    .background {
      padding-top: 137px;
      .description {
        h1,
        p,
        .button {
          position: static;
          margin: 0 auto;
        }

        h1,
        p {
          width: 573px;
          text-align: center;
        }

        p {
          padding-top: 24px;
        }

        .button {
          margin-top: 32px;
        }
      }
      #line {
        display: none;
      }

      #right-arrow {
        top: 473px;
        left: -127px;
      }
      #white-circles {
        top: 542px;
        right: -31px;
      }
    }
  }

  @media (max-width: 768px) {
    .background {
      background-image: url(${bgTablet});
    }
  }

  //mobile

  @media (max-width: 620px) {
    .background {
      padding: 115px 32px;
      .description {
        width: 100%;
        height: 100%;
        top: 0;

        h1 {
          font-size: 40px;
          width: 100%;
          line-height: 40px;
        }
        p {
          font-size: 15px;
          width: 100%;
          text-align: center;
        }
      }

      #right-arrow {
        left: -312px;
        top: auto;
        bottom: 34px;
      }

      #white-circles {
        display: none;
      }
    }
  }

  @media (max-width: 375px) {
    .background {
      background-image: url(${bgMobile});
    }
  }
`;

const FunctionSpotlights = styled(motion.div)`
  margin-top: 160px;
  margin-left: 160px;
  display: flex;
  width: 1275px;
  max-width: 80%;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;

  .spotlight {
    flex-basis: 350px;
    margin-bottom: 40px;
    z-index: 1;

    .detail {
      h2 {
        font-size: 24px;
        line-height: 28px;
        letter-spacing: -1.07px;
        padding: 40px 0 27px 0;
      }
    }
  }
  #greyline {
    position: absolute;
    right: 350px;
    top: 48px;
  }
  #greyline-mobile {
    display: none;
  }

  //tablet
  @media (max-width: 1230px) {
    margin-bottom: 120px;
  }

  @media (max-width: 875px) {
    margin: 122px auto;

    .spotlight {
      flex-basis: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      img {
        display: block;
        width: 96px;
        height: 96px;
        max-width: 100%;
      }
      .detail {
        flex-basis: 398px;
      }
    }

    #greyline {
      display: none;
    }

    #greyline-mobile {
      position: absolute;
      display: block;
      bottom: 79px;
      left: 40px;
    }
  }

  //mobile
  @media (max-width: 670px) {
    .spotlight {
      flex-direction: column;

      .detail {
        text-align: center;
        flex: 1;

        h2 {
          font-size: 20px;
        }
      }
    }

    #greyline-mobile {
      display: none;
    }
  }
`;

export default Intro;
