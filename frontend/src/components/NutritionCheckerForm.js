import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";

const NutritionCheckerForm = () => {
  const [foodItem, setFoodItem] = useState("");
  const [nutritionResult, setNutritionResult] = useState(null);

  const handleSearchNutrition = async (e) => {
    try {
      const response = await axios.get(
        `https://api.calorieninjas.com/v1/nutrition?query=${encodeURIComponent(
          foodItem
        )}`,
        {
          headers: {
            "X-Api-Key": "WOO23cTA4ww2yrQ+otISmw==Z3Q2fFBcCTeE3OWj",
          },
        }
      );

      const data = response.data;

      if (data.items.length > 0) {
        setNutritionResult(data.items[0]);
      } else {
        alert("No nutrition information found for that food item");
      }
    } catch (error) {
      console.error("Error fetching nutrition information:", error);
    }
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-md-center">
        <Col md="auto">
        <h2>Nutrition Information Search</h2>
          <Form
            inline
            onSubmit={(e) => {
              e.preventDefault();
              handleSearchNutrition();
            }}
          >
            <Form.Control
              type="text"
              value={foodItem}
              onChange={(e) => setFoodItem(e.target.value)}
              placeholder="Enter food item"
              className="mr-sm-2"
            />
            <Button
              variant="outline-success"
              className="my-3"
              onClick={handleSearchNutrition}
            >
              Get Nutrition
            </Button>
          </Form>
        </Col>
      </Row>

      {nutritionResult && (
        <Row>
          <Col>
            <h2>Nutrition Results</h2>
            <Table striped bordered hover responsive="md">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Serving Size</th>
                  <th>Calories</th>
                  <th>Total Fat</th>
                  <th>Saturated Fat</th>
                  <th>Cholesterol</th>
                  <th>Sodium</th>
                  <th>Carbohydrates</th>
                  <th>Fiber</th>
                  <th>Sugar</th>
                  <th>Protein</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{nutritionResult.name}</td>
                  <td>100g</td>
                  <td>{nutritionResult.calories}</td>
                  <td>{nutritionResult.fat_total_g}g</td>
                  <td>{nutritionResult.fat_saturated_g}g</td>
                  <td>{nutritionResult.cholesterol_mg}mg</td>
                  <td>{nutritionResult.sodium_mg}mg</td>
                  <td>{nutritionResult.carbohydrates_total_g}g</td>
                  <td>{nutritionResult.fiber_g}g</td>
                  <td>{nutritionResult.sugar_g}g</td>
                  <td>{nutritionResult.protein_g}g</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default NutritionCheckerForm;
