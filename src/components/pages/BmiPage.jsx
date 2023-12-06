import { Context } from "../BmiApp";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

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
