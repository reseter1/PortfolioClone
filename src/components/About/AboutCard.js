import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nguyen Huu Tai </span>
            from <span className="purple">Vietnam.</span>
            <br />
            Currently, I am seeking a suitable position that aligns with my skills and aspirations.
            <br />
            I have graduated with a Bachelor's degree in Information Technology from Ho Chi Minh City University of Transport.
            <br />
            <br />
            Apart from coding, here are some other activities that I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
