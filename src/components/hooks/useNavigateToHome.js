import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useNavigateToHome = (value) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!value) navigate("/");
  }, [value]);
};
export default useNavigateToHome;
