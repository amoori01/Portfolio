import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/OJ_avatar_circle_only.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a Software Engineering student who enjoys turning ideas into practical, user-focused applications.
              I have a strong interest in full-stack web development and continuously expand my skills by building 
              real-world projects and learning modern technologies.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, TypeScript, Java, Ruby, and SQL,{" "}
                </b>
              </i>
               and I enjoy working across both backend and frontend stacks.
               My passion lies in creating 
               <i>
                <b className="purple">
                  {" "}
                  efficient, scalable, and user-friendly applications{" "}
                </b>
              </i>
               that solve real-world problems.
              <br />
              <br />
              My primary stack includes
              <i>
                <b className="purple">
                  {" "}
                  React, Next.js, NestJS, and Ruby on Rails,{" "}
                </b>
              </i>
              with experience working with
              <i> 
                <b className="purple">
                  {""}
                  PostgreSQL, MySQL, Docker, Git, and REST APIs.
                </b>
              </i>
              <br />
              <br />
              My key areas of interest include
              <i>
                <b className="purple">
                  {" "}
                  backend engineering, scalable web applications, system design, and software architecture.{" "}
                </b>
              </i>
              I enjoy solving complex problems, writing clean and maintainable code, 
              and creating applications that deliver a great user experience.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> React, Next.js, NestJS, and Ruby on Rails,
              </b> while continuously exploring new technologies 
                and best practices to grow as a software engineer.{" "}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
