import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const FeatureCard = ({ title, description, link }) => {
  return (
    <Card className="mb-4 text-center">
      <Card.Body>
        <Card.Title className="mt-3">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Link to={link} className="btn btn-primary">
          Learn More
        </Link>
      </Card.Body>
    </Card>
  );
};

const FeaturesPage = () => {
  const features = [
    {
      title: "Workout Database",
      description:
        "Our workout database is a comprehensive resource for anyone looking to improve their fitness. Find the perfect routine to target your specific goals.",
      link: "/pages/workouts",
    },
    {
      title: "Nutrition Checker",
      description:
        "With Nutrition Checker, you can quickly and easily see the nutritional value of any food, including calories, fat, protein, carbohydrates.",
      link: "/pages/nutrition-checker",
    },
    {
      title: "BMR Calculator",
      description:
        "Calculate your Basal Metabolic Rate (BMR) to determine your daily calorie needs. Get insights into your metabolism.",
      link: "/pages/bmr-calculator",
    },
    {
      title: "Create Account",
      description:
        "Create a personalized account to access additional features, save your progress, and customize your experience.",
      link: "/pages/register",
    },
    {
      title: "Meal Planner",
      description:
        "The Meal Planner is a feature that helps you plan your meals for the Day. The Meal Planner is a great way to save time and money, and to eat healthier!",
      link: "/pages/profile/meal-plan",
    },
    {
      title: "Water Intake Log",
      description:
        "Feature that helps you track how much water you drink each day. You can enter the amount of water you drink each time you take a drink.",
      link: "/pages/profile/meal-plan",
    },
  ];

  return (
    <>
      <Container className="mt-4">
        <h2 className="text-center mb-4">App Features</h2>
        <Row className="justify-content-center">
          {features.map((feature, index) => (
            <Col key={index} xs={12} md={6} lg={4}>
              <FeatureCard
                title={feature.title}
                description={feature.description}
                link={feature.link}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default FeaturesPage;
