import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const ProfileSidebar = () => {
  const location = useLocation();

  return (
    <ListGroup>
      <ListGroup.Item
        as={Link}
        to="/pages/profile/update"
        active={location.pathname === "/pages/profile/update"}
      >
        Update Profile
      </ListGroup.Item>

      <ListGroup.Item
        as={Link}
        to="/pages/profile/diet"
        active={location.pathname === "/pages/profile/diet"}
      >
        Update Diet Profile
      </ListGroup.Item>

      <ListGroup.Item
        as={Link}
        to="/pages/profile/meal-plan"
        active={location.pathname === "/pages/profile/meal-plan"}
      >
        Meal Plan
      </ListGroup.Item>

      <ListGroup.Item
        as={Link}
        to="/pages/profile/water-intake"
        active={location.pathname === "/pages/profile/water-intake"}
      >
        Water Intake
      </ListGroup.Item>
    </ListGroup>
  );
};

export default ProfileSidebar;
