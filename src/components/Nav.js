import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
//style
import styled from "styled-components";
//logo
import logo from "../logo.svg";
//icon
import burger from "../icons/hamburger.svg";
import close from "../icons/close.svg";

const Nav = () => {
  const { pathname } = useLocation();
  const [navActive, setNavActive] = useState(false);

  useEffect(() => {
    setNavActive(false);
  }, [pathname]);

  const appDownloadClick = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    setNavActive(false);
  };

  return (
    <>
      <StyledNav>
        <img
          className="toggle-nav"
          onClick={() => setNavActive(!navActive)}
          src={navActive ? close : burger}
          alt="nav-menu"
        />
        <Link to="/scoot">
          <img id="logo" src={logo} alt="logo" />
        </Link>
        <nav
          className={`${navActive ? "active" : ""}`}
          role="navigation"
          aria-labelledby="primary"
        >
          <ul>
            <li>
              <Link
                to="/scoot/about"
                style={pathname === "/scoot/about" ? { color: "#fcb72b" } : {}}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/scoot/locations"
                style={
                  pathname === "/scoot/locations" ? { color: "#fcb72b" } : {}
                }
              >
                Locations
              </Link>
            </li>
            <li>
              <Link
                to="/scoot/careers"
                style={
                  pathname === "/scoot/careers" ? { color: "#fcb72b" } : {}
                }
              >
                Careers
              </Link>
            </li>
          </ul>
          <button onClick={appDownloadClick} className="button">
            Get Scootin
          </button>
        </nav>
      </StyledNav>
      <Overlay
        onClick={() => {
          setNavActive(false);
        }}
        navActive={navActive}
      ></Overlay>
    </>
  );
};

const StyledNav = styled.header`
  min-height: 96px;
  padding: 22px 165px;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background-color: #ffffff;

  .toggle-nav {
    display: none;
  }

  #logo {
    display: block;
    flex-basis: 108px;
  }

  nav {
    display: flex;
    align-items: center;
    flex: 1;
    padding-left: 58px;

    ul {
      width: 100%;
      display: flex;

      li {
        list-style: none;
        padding-right: 32px;
      }
    }
  }

  //tablet
  @media (max-width: 1024px) {
    padding: 22px 40px;
  }

  //mobile
  @media (max-width: 730px) {
    justify-content: center;
    min-height: 64px;

    .toggle-nav {
      position: absolute;
      display: block;
      left: 32px;
    }

    #logo {
      display: block;
      flex-basis: 75.5px;
      height: 20px;
    }

    nav {
      width: 256px;
      position: absolute;
      flex-direction: column;
      top: 64px;
      left: 0;
      transform: translate(-100%);
      height: calc(100vh - 64px);
      background-color: #333a44;
      padding: 64px 32px 24px 32px;
      justify-content: space-between;
      transition: all 0.5s ease-in;

      ul {
        flex-direction: column;
        li {
          padding-bottom: 24px;
        }

        a {
          color: #ffffff;
          font-size: 18px;
        }
      }
    }
    .active {
      transform: translate(0);
    }
  }
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #000000;
  z-index: 3;
  opacity: ${(props) => (props.navActive ? "0.75" : "0")};
  transition: all 0.5s ease-in;
  pointer-events: ${(props) => (props.navActive ? "all" : "none")};
`;
export default Nav;
