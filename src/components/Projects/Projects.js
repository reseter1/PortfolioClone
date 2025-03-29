import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import project1 from "../../Assets/Projects/project1.png";
import project2 from "../../Assets/Projects/project2.png";
import project3 from "../../Assets/Projects/project3.png";
import Animate from "../Animate";
import { useLanguage } from "../../contexts/LanguageContext";

function Projects() {
  const { t } = useLanguage();
  
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <Animate animation="slide-down" delay={0.2}>
          <h1 className="project-heading">
            {t("myRecentWorks")}
          </h1>
          <p style={{ color: "white" }}>
            {t("someOfMyWorks")}
          </p>
        </Animate>
        <Row style={{ justifyContent: "center", paddingBottom: "10px", marginBottom: "45px" }}>
          <Col md={4} className="project-card">
            <Animate animation="slide-up" delay={0.3}>
              <ProjectCard
                imgPath={project1}
                isBlog={false}
                title={t("project1Title")}
                description={t("project1Desc")}
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
                description={t("project2Desc")}
                title={t("project2Title")}
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
                title={t("project3Title")}
                description={t("project3Desc")}
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
