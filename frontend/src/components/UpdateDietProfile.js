import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useUpdateStatusMutation } from "../slices/usersApiSlice";

const UpdateDietProfile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [goalWeight, setGoalWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [activityLevel, setActivityLevel] = useState("");

  const [updateStatus] = useUpdateStatusMutation();

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

        const profileData = JSON.stringify(data); // Save the retrieved profile data to local storage
        localStorage.setItem("profileData", profileData);

        setIsLoading(false);
      } catch (error) {
        toast.error("Failed to fetch profile data.");
        console.log("Fetch profile data error:", error);
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
      setIsLoading(false);
    } else {
      fetchProfileData();
    }
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (height && weight && goalWeight && age && gender && activityLevel) {
      try {
        const updatedProfile = {
          height,
          weight,
          goalWeight,
          age,
          gender,
          activityLevel,
        };

        const response = await updateStatus(updatedProfile).unwrap();

        toast.success("Diet Profile Updated!");
        console.log("Updated user:", response);

        // Save the updated profile data to local storage
        const profileData = JSON.stringify(updatedProfile);
        localStorage.setItem("profileData", profileData);
      } catch (error) {
        toast.error(error.message);
        console.log("Update failed:", error);
      }
    } else {
      toast.error("Please fill in all the required fields.");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="my-2" controlId="height">
        <Form.Label>Height</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Form.Group className="my-2" controlId="weight">
        <Form.Label>Weight</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Form.Group className="my-2" controlId="goalWeight">
        <Form.Label>Goal Weight</Form.Label>
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

      <Button type="submit" variant="primary" className="mt-3">
        Update Diet Profile
      </Button>
    </Form>
  );
};

export default UpdateDietProfile;
