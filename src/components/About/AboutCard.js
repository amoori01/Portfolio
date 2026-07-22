import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
      Hi everyone! I’m <span className="purple">Omer Jafar</span>{" "}
      from <span className="purple">Addis Ababa, Ethiopia</span>.
      <br />
      I’m currently a{" "}
      <span className="purple">second-year Software Engineering student</span> at{" "}
      <span className="purple">BITS College</span>.
      <br />
      I’m passionate about{" "}
      <span className="purple">
        Backend Development, Web Technologies, and Software Engineering
      </span> , and I enjoy building practical applications while continuously learning
    new technologies.
      <br />
    <br />
    Outside of coding, I love engaging in activities that keep me
    creative and inspired:
    </p>

    <ul>
      <li className="about-activity">
      <ImPointRight /> Building Personal Projects 💻
    </li>
      <li className="about-activity">
      <ImPointRight /> Learning New Technologies 📚
    </li>
    <li className="about-activity">
    <ImPointRight /> Playing Basketball 🏀
    </li>
    <li className="about-activity">
    <ImPointRight /> Watching Anime 🍿
    </li>
    </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">OJ</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
