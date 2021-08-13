import React from "react";
//style
import styled from "styled-components";

const Banner = ({ title, bgDesktop, bgTablet, bgMobile }) => {
  return (
    <StyledBanner bgDesktop={bgDesktop} bgTablet={bgTablet} bgMobile={bgMobile}>
      <h1>{title}</h1>
      <svg xmlns="http://www.w3.org/2000/svg" width="234" height="63">
        <g fill="none" fillRule="evenodd">
          <circle cx="31" cy="31.5" r="29.5" stroke="#FFF" strokeWidth="3" />
          <circle cx="117" cy="31.5" r="29.5" stroke="#FFF" strokeWidth="3" />
          <circle cx="203" cy="31.5" r="31" fill="#FFF" />
        </g>
      </svg>
    </StyledBanner>
  );
};

const StyledBanner = styled.div`
  min-height: 200px;
  padding: 72px 165px;
  position: relative;
  margin-bottom: 120px;
  overflow-x: hidden;
  background-image: url(${(props) => props.bgDesktop});

  h1 {
    color: #ffffff;
  }

  svg {
    position: absolute;
    right: -31px;
    top: 50%;
    transform: translateY(-50%);
  }

  //tablet
  @media (max-width: 1024px) {
    padding: 72px 97px;
  }

  @media (max-width: 768px) {
    background-image: url(${(props) => props.bgTablet});
    margin-bottom: 72px;
  }

  @media (max-width: 530px) {
    h1 {
      text-align: center;
      font-size: 40px;
    }
    svg {
      display: none;
    }
  }

  @media (max-width: 375px) {
    background-image: url(${(props) => props.bgMobile});
  }
`;

export default Banner;
