import { MyContext } from "../BmiApp";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const BmiPage = () => {
  const username = useContext(MyContext);
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
