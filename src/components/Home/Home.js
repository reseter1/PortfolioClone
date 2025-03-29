import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Animate from "../Animate";
import { useLanguage } from "../../contexts/LanguageContext";

function Home() {
  const { t } = useLanguage();

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <Animate animation="slide-right" delay={0.2}>
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  {t("hiThere")}{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>
              </Animate>

              <Animate animation="slide-right" delay={0.4}>
                <h1 className="heading-name">
                  {t("im")}
                  <strong className="main-name"> Reseter</strong>
                </h1>
              </Animate>

              <Animate animation="fade-in" delay={0.6}>
                <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </Animate>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <Animate animation="zoom-in" delay={0.5}>
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                />
              </Animate>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
