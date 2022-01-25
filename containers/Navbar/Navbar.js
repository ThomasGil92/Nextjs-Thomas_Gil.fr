import ThemeButton from "../UI/ThemeButton";
import { Navbar as Navigation, Nav, NavDropdown } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";

const Navbar = () => {
  const theme = useSelector((state) => state.theme);
  const [homeNavBgColor, setHomeNavBgColor] = useState("rgb(0,0,0,0)");

  const handleScroll = () => {
    if (window.scrollY > 64) {
      setHomeNavBgColor("rgb(0,0,0,1)");
    }
    if (window.scrollY <= 64) {
      setHomeNavBgColor("rgb(0,0,0,0)");
    }
  };

  useEffect(() => {
    if (window.location.href.includes("mentions-legales")) {
      setHomeNavBgColor("rgb(0,0,0,1)");
    } else {
      window.addEventListener("scroll", handleScroll);
      if (window.innerWidth < 576) {
        setHomeNavBgColor("rgb(0,0,0,1)");
      }
    }
  }, []);

  return (
    <Navigation
      variant="dark"
      className="px-0 px-md-5 text-white"
      style={{
        backgroundColor: homeNavBgColor,
        transition: "all 0.4s ease",
        width: "100vw",
      }}
      expand="lg"
      fixed="top"
      collapseOnSelect
    >
      <Link href={"/"} passHref>
        <Navigation.Brand className="mx-auto mx-md-0 mr-0 mr-md-5">
          <h2 className="mb-0 text-light">Thomas Gil</h2>
        </Navigation.Brand>
      </Link>
      <Navigation.Toggle
        id="test"
        className="mr-3 mr-md-0 text-white"
        aria-controls="basic-navbar-nav"
      />
      <Navigation.Collapse id="basic-navbar-nav">
        <Nav
          className={
            theme === "light"
              ? `mobile_navbar px-3 d-flex w-100 justify-space-between`
              : `mobile_navbar_dark px-3 d-flex w-100 justify-space-between`
          }
        >
          <React.Fragment>
            <Nav.Link href="/#top">Qui suis-je?</Nav.Link>
            <Nav.Link href="/#skills">Compétences</Nav.Link>
            <Nav.Link href="/#lastProject">Dernier projet</Nav.Link>
            <Nav.Link href="/#prices">Tarifs</Nav.Link>
            <Nav.Link href="/#contact">Contact</Nav.Link>
            <NavDropdown.Divider />
            <Nav.Link href="#" className="ml-md-auto">
              <ThemeButton />
            </Nav.Link>
          </React.Fragment>

          <div className=" d-flex ml-md-4 mt-2 my-md-auto">
            <Link href={"https://github.com/ThomasGil92/"}>
              <div
                title="Mon profile Github"
                className={`${styles.socialButton} d-flex align-items-center justify-content-center ml-1`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-github text-dark"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </div>
            </Link>
            <Link href={"https://github.com/ThomasGil92/"}>
              <div
                title="Mon profile Malt"
                className={`${styles.socialButton} d-flex align-items-center justify-content-center ml-1`}
              >
                <img width="16" height="16" src="/img/malt.png" />
              </div>
            </Link>
          </div>
        </Nav>
      </Navigation.Collapse>
    </Navigation>
  );
};
export default Navbar;
