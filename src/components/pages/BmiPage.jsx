import { Context } from "../BmiApp";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const BmiPage = () => {
  const { username } = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    if (!username) navigate("/");
  }, [username]);
  return (
    <>
      <h1>{`Hello ${username}`}</h1>
    </>
  );
};

export default BmiPage;
