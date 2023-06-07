import { useState, useEffect } from "react";
import { Form, Button, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import { useUpdateStatusMutation } from "../slices/usersApiSlice";
import Loader from "./Loader";

const UpdateDietProfile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [goalWeight, setGoalWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [goal, setGoal] = useState("");

  const [updateStatus] = useUpdateStatusMutation();

  const [calories, setCalories] = useState(0);
  const [protein, setProtein] = useState(0);
  const [fat, setFat] = useState(0);
  const [carbs, setCarbs] = useState(0);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch("/api/user/status");
        const data = await response.json();

        setHeight(data.height);
        setWeight(data.weight);
        setGoalWeight(data.goalWeight);
        setAge(data.age);
        setGender(data.gender);
        setActivityLevel(data.activityLevel);
        setGoal(data.goal);

        const profileData = JSON.stringify(data); // Save the retrieved profile data to local storage
        localStorage.setItem("profileData", profileData);

        setIsLoading(false);
      } catch (err) {
        toast.error("Failed to fetch profile data.");
        toast.error(err?.data?.message || err.error);
        setIsLoading(false);
      }
    };

    const profileData = localStorage.getItem("profileData");
    if (profileData) {
      const parsedData = JSON.parse(profileData);
      setHeight(parsedData.height);
      setWeight(parsedData.weight);
      setGoalWeight(parsedData.goalWeight);
      setAge(parsedData.age);
      setGender(parsedData.gender);
      setActivityLevel(parsedData.activityLevel);
      setGoal(parsedData.goal);
      setIsLoading(false);
    } else {
      fetchProfileData();
    }
  }, []);

  useEffect(() => {
    if (weight && activityLevel && goal) {
      const activityMultiplier = {
        sedentary: 1.4,
        lightlyActive: 1.6,
        active: 1.8,
        veryActive: 2.0,
      }[activityLevel];

      let calculatedCalories = weight * 22 * activityMultiplier;
      let calculatedProtein = weight * 2.2;

      switch (goal) {
        case "Cutting":
          calculatedCalories -= 500;
          break;
        case "Bulking":
          calculatedCalories += 500;
          break;
        default:
          break;
      }

      let calculatedFat = (calculatedCalories * 0.25) / 9; // Convert to grams
      let calculatedCarbs =
        (calculatedCalories - (calculatedProtein * 4 + calculatedFat * 9)) / 4; // Convert to grams

      setCalories(calculatedCalories);
      setProtein(calculatedProtein);
      setFat(calculatedFat);
      setCarbs(calculatedCarbs);
    }
  }, [weight, activityLevel, goal]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (
      height &&
      weight &&
      goalWeight &&
      age &&
      gender &&
      activityLevel &&
      goal
    ) {
      try {
        const updatedProfile = {
          height,
          weight,
          goalWeight,
          age,
          gender,
          activityLevel,
          goal,
        };

        const response = await updateStatus(updatedProfile).unwrap();

        toast.success("Diet Profile Updated!");

        // Save the updated profile data to local storage
        const profileData = JSON.stringify(updatedProfile);
        localStorage.setItem("profileData", profileData);
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    } else {
      toast.error("Please fill in all the required fields.");
    }
  };

  return (
    <>
      <Form onSubmit={submitHandler}>
        <Form.Group className="my-2" controlId="height">
          <Form.Label>Height (CM)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="weight">
          <Form.Label>Weight (KG)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="goalWeight">
          <Form.Label>Goal Weight (KG)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter goal weight"
            value={goalWeight}
            onChange={(e) => setGoalWeight(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="age">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="gender">
          <Form.Label>Gender</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="activityLevel">
          <Form.Label>Activity Level</Form.Label>
          <Form.Control
            as="select"
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
          >
            <option value="">Select activity level</option>
            <option value="sedentary">SEDENTARY</option>
            <option value="lightlyActive">LIGHTLY ACTIVE</option>
            <option value="active">ACTIVE</option>
            <option value="veryActive">VERY ACTIVE</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="goal">
          <Form.Label>Goal</Form.Label>
          <Form.Control
            as="select"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          >
            <option value="">Select goal</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Cutting">Cutting</option>
            <option value="Bulking">Bulking</option>
          </Form.Control>
        </Form.Group>

        {isLoading && <Loader />}

        <Button type="submit" variant="primary" className="mt-3">
          Update Diet Profile
        </Button>
      </Form>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Calories</th>
            <th>Protein (Grams)</th>
            <th>Fat (Grams)</th>
            <th>Carbs (Grams)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{Math.round(calories)}</td>
            <td>{Math.round(protein)} Grams of Protein</td>
            <td>{Math.round(fat)} Grams of Fats</td>
            <td>{Math.round(carbs)} Grams of Carbs</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default UpdateDietProfile;
