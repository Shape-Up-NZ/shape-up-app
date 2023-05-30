import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import WorkoutPlannerIcon from "../components/WorkoutPlannerIcon";
// import CalorieLogIcon from "../components/CalorieLogIcon";
// import BMRIcon from "../components/BMRIcon";
// import CreateAccountIcon from "../components/CreateAccountIcon";

const FeaturesPage = () => {
  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">App Features</h2>
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4}>
          <Card className="mb-4 text-center">
            <Card.Body>
              {/* <WorkoutPlannerIcon size={60} /> */}
              <Card.Title className="mt-3">Workout Planner</Card.Title>
              <Card.Text>
                Plan and track your workouts with our intuitive workout planner.
                Stay organized and motivated on your fitness journey.
              </Card.Text>
              <Link to="/pages/workouts" className="btn btn-primary">
                Learn More
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Card className="mb-4 text-center">
            <Card.Body>
              {/* <CalorieLogIcon size={60} /> */}
              <Card.Title className="mt-3">Calorie Log</Card.Title>
              <Card.Text>
                Log and monitor your daily calorie intake. Keep track of your
                nutrition and make informed decisions about your diet.
              </Card.Text>
              <Link to="/pages/calorielog" className="btn btn-primary">
                Learn More
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Card className="mb-4 text-center">
            <Card.Body>
              {/* <BMRIcon size={60} /> */}
              <Card.Title className="mt-3">BMR Calculator</Card.Title>
              <Card.Text>
                Calculate your Basal Metabolic Rate (BMR) to determine your
                daily calorie needs. Get insights into your metabolism.
              </Card.Text>
              <Link to="/pages/bmrcalculator" className="btn btn-primary">
                Learn More
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Card className="mb-4 text-center">
            <Card.Body>
              {/* <CreateAccountIcon size={60} /> */}
              <Card.Title className="mt-3">Create Account</Card.Title>
              <Card.Text>
                Create a personalized account to access additional features,
                save your progress, and customize your experience.
              </Card.Text>
              <Link to="/pages/register" className="btn btn-primary">
                Learn More
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FeaturesPage;
