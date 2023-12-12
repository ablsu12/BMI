// WelcomePage.jsx
import React, { useEffect, useState } from "react";
import BErrorPopUp from "../BErrorPopUp";
import BPageTitle from "../BPageTitle";
import BButton from "../BButton";
import { useNavigate } from "react-router-dom";
import BInput from "../BInput";
import useCustomContext from "../context/customContext";

const WelcomePage = () => {
  const text = {
    title: "BMI CALCULATOR",
    buttonValue: "Get Started",
  };
  const imagePath = `${process.env.PUBLIC_URL}/images/DC.jpg`;
  const [isScreenTall, setIsScreenTall] = useState(window.innerHeight < 815);
  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useCustomContext();
  const [usernameErr, setUsernameErr] = useState({
    isOpen: false,
    message: null,
  });
  const inputHandler = (e) =>
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      username: e.target.value,
    }));
  const startedBtnHandler = () => {
    try {
      if (userInfo.username.trim() && isNaN(userInfo.username))
        navigate("/BmiPage");
      else throw new Error("Your name incorrect 🫥");
    } catch (e) {
      setUsernameErr((prevState) => ({
        ...prevState,
        isOpen: true,
        message: e.message,
      }));
    }
  };
  useEffect(() => {
    const handleResize = () => {
      setIsScreenTall(window.innerHeight < 815);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const closeErrModalHandler = () => {
    setUsernameErr((prevState) => ({
      ...prevState,
      isOpen: false,
      message: null,
    }));
  };
  return (
    <>
      <div className={"w-full h-screen flex flex-col items-center px-16"}>
        {usernameErr.isOpen && (
          <BErrorPopUp
            message={usernameErr.message}
            onClose={closeErrModalHandler}
          />
        )}
        <header className={"w-full pt-3"}>
          <BPageTitle title={text.title} />
        </header>
        <main
          className={
            "w-full h-4/6 py-1 flex flex-col items-center justify-between "
          }
        >
          <img src={imagePath} alt={"DoctorImage"} className={"w-80"} />
          <h1
            className={
              "text-xl text-secondary-color font-bold md:text-3xl mt-2"
            }
          >
            Let’s help you get better!!!
          </h1>
          {!isScreenTall && (
            <p
              className={
                "w-72 mt-14 pb-8 text-justify font-thin md:w-96 text-lg"
              }
            >
              This app can you calculate your body mass index (BMI). Your BMI
              can help you determine if you are at a healthy weight, or if you
              need to make changes to your diet or exercise habits.
            </p>
          )}
        </main>
        <footer
          className={"w-full h-1/6 flex flex-col items-center justify-center"}
        >
          <BInput
            inputPlaceholder={"Enter your name"}
            inputHandler={inputHandler}
            inputType={"text"}
          />
          <BButton
            buttonValue={text.buttonValue}
            buttonHandler={startedBtnHandler}
          />
        </footer>
      </div>
    </>
  );
};
export default WelcomePage;
