import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/me.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillFacebook,
} from "react-icons/ai";
import Animate from "../Animate";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <Animate animation="slide-up" delay={0.2}>
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
            </Animate>
            <Animate animation="fade-in" delay={0.4}>
              <p className="home-about-body">
                <b>Bachelor of Information Technology</b> graduated in 2024
                <br />
                <br />I am proficient in programming languages such as
                <i>
                  <b className="purple"> C#, Javascript, Python </b>
                </i>
                <br />
                <br />
                <b className="purple">Expertise:</b> Full-stack web development with experience in React, Node.js and ASP.NET
                <br />
                <br />
                <b className="purple">Objective:</b> Seeking a suitable position to develop skills and contribute value to the company
              </p>
            </Animate>
          </Col>
          <Col md={4} className="myAvtar">
            <Animate animation="slide-left" delay={0.3}>
              <Tilt>
                <img
                  src={myImg}
                  className="img-fluid"
                  alt="avatar"
                  style={{
                    maxHeight: "350px",
                    maxWidth: "100%",
                    borderRadius: "50%",
                    border: "2px solid #623686",
                    boxShadow: "0 0 15px #623686"
                  }}
                />
              </Tilt>
            </Animate>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <Animate animation="slide-up" delay={0.6}>
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/reseter1"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.facebook.com/profile.php?id=100070421161033&locale=vi_VN"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillFacebook />
                  </a>
                </li>
              </ul>
            </Animate>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
