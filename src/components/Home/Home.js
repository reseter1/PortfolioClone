import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import homeLogo2 from "../../Assets/home-main2.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Animate from "../Animate";
import { useLanguage } from "../../contexts/LanguageContext";

function Home() {
  const { t, language } = useLanguage();

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
                <picture>
                  <source media="(max-width: 768px)" srcSet={homeLogo2} />
                  <img
                    src={homeLogo}
                    alt="home pic"
                    className="img-fluid"
                    style={{ maxHeight: "450px" }}
                  />
                </picture>
              </Animate>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="home-timeline-section">
        <Container>
          <Animate animation="slide-up" delay={0.2}>
            <h1 className="project-heading text-center" style={{ paddingBottom: 20 }}>
              {language === 'en' ? (
                <>Learning <strong className="purple">Journey</strong></>
              ) : (
                <>Lộ trình <strong className="purple">học tập</strong></>
              )}
            </h1>
          </Animate>

          <Row style={{ justifyContent: "center", paddingBottom: 50 }}>
            <Col xs={12} className="timeline-container">
              <div className="timeline">
                <div className="timeline-item right">
                  <Animate animation="slide-up" delay={0.4}>
                    <div className="timeline-content">
                      <div className="timeline-date">2022 - {language === 'en' ? 'Present' : 'Hiện tại'}</div>
                      <h3 className="timeline-title">{language === 'en' ? 'Web Development Frameworks' : 'Framework phát triển Web'}</h3>
                      <p className="timeline-company">{language === 'en' ? 'Self-learning & Online Courses' : 'Tự học & Khóa học trực tuyến'}</p>
                      <p className="timeline-description">
                        {language === 'en'
                          ? 'Learning and implementing both frontend and backend web frameworks including React, Node.js, Angular, and various database technologies.'
                          : 'Tiếp cận và học tập các framework backend, frontend trong lập trình ứng dụng web như React, Node.js, Angular và các công nghệ cơ sở dữ liệu khác nhau.'}
                      </p>
                    </div>
                  </Animate>
                </div>
                <div className="timeline-item left">
                  <Animate animation="slide-up" delay={0.6}>
                    <div className="timeline-content">
                      <div className="timeline-date">2021 - 2022</div>
                      <h3 className="timeline-title">{language === 'en' ? 'Systems Analysis & Design' : 'Phân tích & Thiết kế hệ thống'}</h3>
                      <p className="timeline-company">{language === 'en' ? 'University & Personal Projects' : 'Trường đại học & Dự án cá nhân'}</p>
                      <p className="timeline-description">
                        {language === 'en'
                          ? 'Studied systems analysis methodology, software design patterns, and best practices for creating scalable applications.'
                          : 'Học các kiến thức về phương pháp phân tích hệ thống, các mẫu thiết kế phần mềm và các phương pháp tốt nhất để tạo ra các ứng dụng có khả năng mở rộng.'}
                      </p>
                    </div>
                  </Animate>
                </div>
                <div className="timeline-item right">
                  <Animate animation="slide-up" delay={0.8}>
                    <div className="timeline-content">
                      <div className="timeline-date">2020 - 2021</div>
                      <h3 className="timeline-title">{language === 'en' ? 'IT & Programming Fundamentals' : 'Cơ bản về CNTT & Lập trình'}</h3>
                      <p className="timeline-company">{language === 'en' ? 'University Courses' : 'Các khóa học đại học'}</p>
                      <p className="timeline-description">
                        {language === 'en'
                          ? 'Built a solid foundation in computer science and programming principles, including algorithms, data structures, and basic programming concepts.'
                          : 'Xây dựng nền tảng vững chắc về khoa học máy tính và nguyên tắc lập trình, bao gồm thuật toán, cấu trúc dữ liệu và các khái niệm lập trình cơ bản.'}
                      </p>
                    </div>
                  </Animate>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <Home2 />
    </section>
  );
}

export default Home;
