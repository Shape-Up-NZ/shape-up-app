import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import WorkoutPlannerIcon from "../components/WorkoutPlannerIcon";
// import CalorieLogIcon from "../components/CalorieLogIcon";
// import BMRIcon from "../components/BMRIcon";
// import CreateAccountIcon from "../components/CreateAccountIcon";
import Footer from "../components/Footer";

const FeaturesPage = () => {
  return (
    <>
      <>
        <Container className="mt-4">
          <h2 className="text-center mb-4">App Features</h2>
          <Row className="justify-content-center">
            <Col xs={12} md={6} lg={4}>
              <Card className="mb-4 text-center">
                <Card.Body>
                  {/* <WorkoutPlannerIcon size={60} /> */}
                  <Card.Title className="mt-3">Workout Database</Card.Title>
                  <Card.Text>
                    Our workout database is a comprehensive resource for anyone
                    looking to improve their fitness. Find the perfect routine to target your specific goals.
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
                  {/* <WorkoutPlannerIcon size={60} /> */}
                  <Card.Title className="mt-3">Nutrition Checker</Card.Title>
                  <Card.Text>
                    With Nutrition Checker, you can quickly and easily see the
                    nutritional value of any food,including calories, fat,
                    protein, carbohydrates
                  </Card.Text>
                  <Link
                    to="/pages/nutrition-checker"
                    className="btn btn-primary"
                  >
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
                  <Link to="/pages/bmr-calculator" className="btn btn-primary">
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
            <Col xs={12} md={6} lg={4}>
              <Card className="mb-4 text-center">
                <Card.Body>
                  <Card.Title className="mt-3">Meal Planner</Card.Title>
                  <Card.Text>
                    The Meal Planner is a feature that helps you plan your meals
                    for the Day. The Meal Planner is a great way to save time
                    and money, and to eat healthier!
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
                  <Card.Title className="mt-3">Water Intake Log</Card.Title>
                  <Card.Text>
                    Feature that helps you track how much water you drink each
                    day. You can enter the amount of water you drink each time
                    you take a drink.
                  </Card.Text>
                  <Link to="/pages/workouts" className="btn btn-primary">
                    Learn More
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
      <Footer />
    </>
  );
};

export default FeaturesPage;
