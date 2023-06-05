import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const HomeContent = () => {
  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col className="text-center">
          <h1>The Tools for Your Goals</h1>
          <p>
            Trying to lose weight, tone up, lower your BMI, or invest in your
            overall health? We give you the right features to get there.
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Learn. Track. Improve.</Card.Title>
              <Card.Text>
                Keeping a food diary helps you understand your habits and
                to hit your goals.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Logging Simplified.</Card.Title>
              <Card.Text>
                Save meals and use Quick Tools for
                fast and easy food tracking.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Stay Motivated.</Card.Title>
              <Card.Text>
                Join the World's Largest Fitness Community for advice, tips, and
                support 24/7.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="align-items-center">
        <Col md={6}>
          <h1>Start your fitness journey today!</h1>
          <p>
            Sign up for Shape Up and get started on your path to a healthier
            lifestyle.
          </p>
          <Button
            variant="success"
            className="me-2"
            as={Link}
            to="/pages/register"
          >
            Register
          </Button>
          <Button variant="outline-primary" as={Link} to="/pages/login">
            Login
          </Button>
        </Col>
        <Col md={6}>
          <img
            src="https://landkit.goodthemes.co/assets/img/illustrations/illustration-2.png"
            alt="Banner"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeContent;
