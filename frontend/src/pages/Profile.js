import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import FormContainer from "../components/FormContainer";
import UpdateProfile from "../components/UpdateProfile";
import UpdateDietProfile from "../components/UpdateDietProfile";
import { setCredentials } from "../slices/authSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(setCredentials(userInfo));
  }, [userInfo, dispatch]);

  return (
    <FormContainer>
      <h1>Update Profile</h1>
      <UpdateProfile userInfo={userInfo} dispatch={dispatch} />

      <h1>Update Your Goal</h1>

      <UpdateDietProfile />
    </FormContainer>
  );
};

export default Profile;
