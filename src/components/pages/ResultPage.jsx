import { useContext } from "react";
import Context from "../BmiApp";
import useNavigateToHome from "../hooks/useNavigateToHome";
import { useNavigate } from "react-router-dom";

function ResultPage() {
  const { username, userInfo } = useContext(Context);
  useNavigateToHome(username);
  const navigate = useNavigate();
  return (
    <>
      <h1>{userInfo.username}</h1>
      <h1>{userInfo.userGender}</h1>
      <h1>{userInfo.userHeight}</h1>
      <h1>{userInfo.userAge}</h1>
      <h1>{userInfo.userWeight}</h1>
    </>
  );
}

export default ResultPage;
