import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { useLanguage } from "../../contexts/LanguageContext";

function ProjectCards(props) {
  const { t } = useLanguage();
  
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>
          <h3>{props.title}</h3>
        </Card.Title>
        <Card.Text style={{
          textAlign: "justify",
          wordSpacing: "-0.5px",
          hyphens: "auto",
          lineHeight: "1.5",
          textJustify: "inter-word"
        }}>
          {props.description}
        </Card.Text>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : t("github")}
          </Button>
          {"\n"}
          {"\n"}

          {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {t("demo")}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
