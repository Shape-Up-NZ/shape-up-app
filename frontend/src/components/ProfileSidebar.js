import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProfileSidebar = () => {
  return (
    <ListGroup>
      <ListGroup.Item>
        <Link to="/pages/profile/update">Update Profile</Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <Link to="/pages/profile/diet">Update Diet Profile</Link>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default ProfileSidebar;
