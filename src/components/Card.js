import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
//animation
import { motion } from "framer-motion";

const Card = ({
  title,
  content,
  buttonContent,
  featureImg,
  button,
  isReverse,
  link,
}) => {


  return (
    <StyledCard >
      <div className={`feature ${isReverse ? "reverse" : ""}`}>
        <img className="feature-img" src={featureImg} alt={title} />
        <div className="description">
          <h2>{title}</h2>
          <p>{content}</p>
          {button ? (
            <Link className="button" to={link}>
              {buttonContent}
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </StyledCard>
  );
};

const StyledCard = styled(motion.div)`
  .feature {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .description {
      flex-basis: 445px;

      p {
        padding: 24px 0 40px 0;
      }
    }
    .feature-img {
      display: block;
      border-radius: 50%;
      height: 445px;
    }
  }

  .reverse {
    flex-direction: row-reverse;
  }

  //tablet
  @media (max-width: 1340px) {
    .feature {
      flex-direction: column;

      .description {
        margin-top: 56px;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
      }
    }
  }

  //mobile
  @media (max-width: 670px) {
    .feature {
      h2 {
        font-size: 32px;
      }

      .feature-img {
        flex-basis: 311px;
        height: 311px;
      }
    }
  }
`;

export default Card;
