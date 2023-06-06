import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h1>About Shape Up</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              Shape Up is a fitness web app that helps people reach their
              fitness goals. It provides users with a variety of tools and
              resources, including:
            </p>
            <ul>
              <li>Personal Account</li>
              <li>Diet Profile</li>
              <li>Goal Settings</li>
              <li>Meal Planner</li>
              <li>Water Intake Log</li>
              <li>Workout Database</li>
              <li>Nutrition Checker</li>
              <li>BMR Calculator</li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default AboutUs;
