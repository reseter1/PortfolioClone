import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/nguyenhuutai.cv.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { useLanguage } from "../../contexts/LanguageContext";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const { t } = useLanguage();
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setLoading(false);
  }

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;{t("downloadCV")}
          </Button>
        </Row>

        <Row className="resume">
          {loading ? (
            <div className="pdf-loader">
              <div className="pdf-loader-animation">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <p>{t("cvLoading")}</p>
            </div>
          ) : null}
          <Document
            file={pdf}
            className="d-flex justify-content-center"
            onLoadSuccess={onDocumentLoadSuccess}
            loading={
              <div className="pdf-loader">
                <div className="pdf-loader-animation">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <p>{t("cvLoading")}</p>
              </div>
            }
          >
            <Page
              pageNumber={pageNumber}
              scale={width > 786 ? 1.7 : 0.6}
              className={loading ? "pdf-hidden" : "pdf-visible"}
              style={!loading ? { animation: "pdf-appear 0.8s ease-out forwards" } : {}}
            />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;{t("downloadCV")}
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
