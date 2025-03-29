import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLanguage } from "../contexts/LanguageContext";

function Footer() {
  const { t } = useLanguage();
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>{t("designedAndDevelopedBy")}</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>{t("copyright").replace("2024", year)}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <h3 className="mb-2">
            {t("originalCopyright")}{" "}
            <a
              href="https://github.com/soumyajit4419/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-link"
            >
              Portfolio
            </a>
          </h3>

        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
