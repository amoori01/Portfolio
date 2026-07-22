import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import EmployeeManagement from "../../Assets/Projects/ChatGPT Image Jul 22, 2026, 09_58_46 PM.png";
import Qoqor from "../../Assets/Projects/image copy.png";
import EduManage from "../../Assets/Projects/ChatGPT Image Jul 22, 2026, 04_32_54 PM.png";
import BookingSystem from "../../Assets/Projects/image.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EduManage}
              isBlog={false}
              title="EduManage"
              description="EduManage is an enterprise-grade School ERP (Enterprise Resource Planning) platform designed to streamline educational institution management through automation, data-driven insights, and modern cloud-native architecture."
              ghLink="https://github.com/amoori01/School-hub.git"
              demoLink="https://schoolhu.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BookingSystem}
              isBlog={false}
              title="Booking System"
              description="A simple booking system built with Ruby. This repository contains a small application for creating and managing bookings (rooms, appointments, or similar) with clear and easy-to-follow instructions."
              ghLink="https://github.com/amoori01/Booking-System-by-Ruby.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Qoqor}
              isBlog={false}
              title="Qoqor"
              description="This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules."
              ghLink="https://github.com/amoori01/Qoqor-react.git"
              demoLink="https://qoqor-project.netlify.app/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EmployeeManagement}
              isBlog={false}
              title="Employee-Management"
              description="A modular monolith employee operations platform that manages authentication, employee records, leave workflows, grievance handling, dashboards, and database-backed session management. Built with a NestJS 11 API backend, Prisma ORM, PostgreSQL 15, and a Next.js 16 frontend, it serves role-based workflows for administrators and employees"
              ghLink="https://github.com/ADVFINALPROJ2/Employee-Management.git"
            />
          </Col>
{/*
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
*/}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
