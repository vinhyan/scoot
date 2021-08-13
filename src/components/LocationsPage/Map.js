import React from "react";
//style
import styled from "styled-components";
//images
import worldMap from "../../images/world-map-desktop.png";
import worldMapTablet from "../../images/world-map-tablet.png";
import worldMapMobile from "../../images/world-map-mobile.png";
//animation
import { motion } from "framer-motion";
import { ZoomOutAnimate, SlideInLeft } from "../../animation";

const Map = () => {
  return (
    <StyledLocations>
      <Hide>
        <StyledMap variants={ZoomOutAnimate}>
          <img className="map-desktop" src={worldMap} alt="world-map" />
          <img className="map-tablet" src={worldMapTablet} alt="world-map" />
          <img className="map-mobile" src={worldMapMobile} alt="world-map" />
          <GeoTag location="New York" locationCode="ny" />
          <GeoTag location="London" locationCode="ldn" />
          <GeoTag location="Yokohama" locationCode="ykhm" />
          <GeoTag location="Jakarta" locationCode="jkrt" />
        </StyledMap>
      </Hide>
      <div className="location-list-mobile">
        <motion.div variants={SlideInLeft}>New York</motion.div>
        <motion.div variants={SlideInLeft}>London</motion.div>
        <motion.div variants={SlideInLeft}>Yokohama</motion.div>
        <motion.div variants={SlideInLeft}>Jarkata</motion.div>
      </div>
      <div className="message-us">
        <h2>Your city not listed?</h2>
        <p>
          If you’d like to see Scoot in your hometown, be sure to let us know.
          We track requests and plan launches based on demand. Feel free to
          message us by clicking the link or messaging us on social.
        </p>
        <button className="button">Message Us</button>
      </div>
    </StyledLocations>
  );
};

const GeoTag = ({ location, locationCode }) => {
  return (
    <StyledGeoTag>
      <div className={`geotag ${locationCode}`}>
        <div className="rectangle">
          <h4>{location}</h4>
        </div>
        <div className="triangle"></div>
      </div>
    </StyledGeoTag>
  );
};

const StyledLocations = styled.div`
  margin: 0 165px 120px 165px;

  .location-list-mobile {
    display: none;
  }

  .message-us {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 120px;

    h2 {
      flex-basis: 351px;
    }

    p {
      flex-basis: 445px;
    }
  }
  //tablet
  @media (max-width: 1439px) {
    margin: 0 39px 120px 39px;
  }
  @media (max-width: 1120px) {
    .message-us {
      width: 573px;
      margin: 0 auto;
      max-width: 100%;
      padding-top: 64px;
      flex-direction: column;
      justify-content: center;
      text-align: center;

      h2,
      p {
        flex: 1;
      }
      h2 {
        width: 80%;
      }
      p {
        padding: 40px 0;
      }
    }
  }
  //mobile
  @media (max-width: 768px) {
    .location-list-mobile {
      display: block;
      margin: 40px auto 0 auto;

      div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 311px;
        height: 72px;
        background: rgba(252, 183, 43, 0.15);
        margin: 0 auto 16px auto;
        font-size: 24px;
        color: #495567;
        font-family: "Space Mono", monospace;
      }
    }

    .message-us {
      h2 {
        font-size: 32px;
      }
    }
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const StyledMap = styled(motion.div)`
  position: relative;
  width: 1110px;
  margin: 0 auto;

  .map-desktop {
    display: block;
  }
  .map-tablet,
  .map-mobile {
    display: none;
  }

  //tablet
  @media (max-width: 1439px) {
    width: 689px;
    margin: 0 auto;

    .map-desktop {
      display: none;
    }
    .map-tablet {
      display: block;
      margin: 0 auto;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    .map-desktop,
    .map-tablet {
      display: none;
    }
    .map-mobile {
      display: block;
      margin: 0 auto;
      width: 100%;
    }
  }
`;

const StyledGeoTag = styled.div`
  .geotag {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;

    .rectangle {
      width: 189px;
      height: 72px;
      background-color: #fcb72b;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .triangle {
      width: 0;
      height: 0;
      border-left: 16px solid transparent;
      border-right: 16px solid transparent;
      border-top: 16px solid #fcb72b;
    }
  }

  .ny {
    top: 71px;
    left: 147px;
  }
  .ldn {
    top: 18px;
    left: 393px;
  }
  .ykhm {
    top: 78px;
    left: 856px;
  }
  .jkrt {
    top: 251px;
    left: 779px;
  }

  //tablet
  @media (max-width: 1439px) {
    .geotag {
      .rectangle {
        width: 120px;
        height: 32px;
        h4 {
          font-size: 13px;
        }
      }
      .triangle {
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 8px solid #fcb72b;
      }
    }
    .ny {
      top: 52px;
      left: 98px;
    }
    .ldn {
      top: 25px;
      left: 243px;
    }
    .ykhm {
      top: 65px;
      left: 530px;
    }
    .jkrt {
      top: 169px;
      left: 480px;
    }
  }

  @media (max-width: 768px) {
    .ny,
    .ldn,
    .ykhm,
    .jkrt {
      display: none;
    }
  }
`;
export default Map;
