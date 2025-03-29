import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useLanguage } from "../../contexts/LanguageContext";

function AboutCard() {
  const { t } = useLanguage();
  
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {t("greeting")} <span className="purple">{t("name")} </span>
            {t("from")} <span className="purple">{t("country")}</span>
            <br />
            {t("seekingPosition")}
            <br />
            {t("education")}
            <br />
            <br />
            {t("otherActivities")}
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> {t("playingGames")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("listeningToMusic")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("readingBooks")}
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
