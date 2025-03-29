import React, { useState, useEffect, useRef } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { MdLanguage } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";
import { useLanguage } from "../contexts/LanguageContext";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const audioRef = useRef(null);
  const { t, toggleLanguage, language } = useLanguage();

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(err => {
        console.log("Error playing audio:", err);
      });
    }
  };

  window.addEventListener("scroll", scrollHandler);

  return (
    <>
      <audio ref={audioRef} src={process.env.PUBLIC_URL + "/button_effect.mp3"} preload="auto"></audio>
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColour ? "sticky" : "navbar"}
      >
        <Container>
          <Navbar.Brand href="/" className="d-flex" onClick={playSound}>
            <img src={logo} className="img-fluid logo" alt="brand" />
            <span className="reseter-text">Reseter</span>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(expand ? false : "expanded");
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/"
                  onClick={() => {
                    playSound();
                    updateExpanded(false);
                  }}
                >
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> {t("home")}
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/about"
                  onClick={() => {
                    playSound();
                    updateExpanded(false);
                  }}
                >
                  <AiOutlineUser style={{ marginBottom: "2px" }} /> {t("about")}
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/project"
                  onClick={() => {
                    playSound();
                    updateExpanded(false);
                  }}
                >
                  <AiOutlineFundProjectionScreen
                    style={{ marginBottom: "2px" }}
                  />{" "}
                  {t("projects")}
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/resume"
                  onClick={() => {
                    playSound();
                    updateExpanded(false);
                  }}
                >
                  <CgFileDocument style={{ marginBottom: "2px" }} /> {t("resume")}
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  onClick={(e) => {
                    e.preventDefault();
                    playSound();
                    alert(t("comingSoon"));
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <ImBlog style={{ marginBottom: "2px" }} /> {t("blogs")}
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className="fork-btn">
                <Button
                  href="https://github.com/reseter1"
                  target="_blank"
                  className="fork-btn-inner"
                  onClick={playSound}
                >
                  <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                  <AiFillStar style={{ fontSize: "1.1em" }} />
                </Button>
              </Nav.Item>

              <Nav.Item className="fork-btn">
                <Button
                  className="fork-btn-inner language-btn"
                  onClick={() => {
                    playSound();
                    toggleLanguage();
                  }}
                >
                  <MdLanguage style={{ fontSize: "1.2em" }} />{" "}
                  <span>{language === "en" ? "VI" : "EN"}</span>
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
