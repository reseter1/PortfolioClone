import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import project1 from "../../Assets/Projects/project1.png";
import project2 from "../../Assets/Projects/project2.png";
import project3 from "../../Assets/Projects/project3.png";
import Animate from "../Animate";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <Animate animation="slide-down" delay={0.2}>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
        </Animate>
        <Row style={{ justifyContent: "center", paddingBottom: "10px", marginBottom: "45px" }}>
          <Col md={4} className="project-card">
            <Animate animation="slide-up" delay={0.3}>
              <ProjectCard
                imgPath={project1}
                isBlog={false}
                title="Express GenAI API"
                description="This project provides an API server to interact with AI models, supporting text generation and text-to-speech (TTS)."
                ghLink="https://github.com/reseter1/ExpressGenAIAPI"
                demoLink="https://genai-reseter.apidog.io/"
              />
            </Animate>
          </Col>
          <Col md={4} className="project-card">
            <Animate animation="slide-up" delay={0.5}>
              <ProjectCard
                imgPath={project2}
                isBlog={false}
                description="PureHealthTT is a simple e-commerce website selling fruits and vegetables built on Laravel with all the necessary features."
                title="PureHealthTT"
                ghLink="https://github.com/reseter1/PureHealthTT"
                demoLink="https://purehealthtt.zoneitshop.com/"
              />
            </Animate>
          </Col>

          <Col md={4} className="project-card">
            <Animate animation="slide-up" delay={0.7}>
              <ProjectCard
                imgPath={project3}
                isBlog={false}
                title="Free Trial ChatGPT Plus"
                description="Provide ChatGPT Plus account information updated real-time completely free, community purpose."
                demoLink="https://gptplus-reseter.hackershack.net/login/"
              />
            </Animate>
          </Col>
        </Row>
      </Container>
    </Container >
  );
}

export default Projects;
