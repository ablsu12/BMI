// WelcomePage.jsx
<<<<<<< HEAD
import React, { useContext, useEffect, useState } from "react";
=======
import React, { useEffect, useState } from "react";
>>>>>>> origin/feature
import { BLoginError } from "../BLoginError";
import BPageTitle from "../BPageTitle";
import BInput from "../BInput";
import BButton from "../BButton";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import { Context } from "../BmiApp";

const WelcomePage = () => {
  const {
    username,
    setUsername,
    isScreenWide,
    setIsScreenWide,
    isScreenTall,
    setIsScreenTall,
  } = useContext(Context);
  const imagePath = `${process.env.PUBLIC_URL}/images/DC.jpg`;
  const imagePath2 = `${process.env.PUBLIC_URL}/images/DC2.jpg`;
  const navigate = useNavigate();
  const [isUsernameCorrect, setIsUsernameCorrect] = useState(true);
=======

const WelcomePage = ({ username, setUsername }) => {
  const [isScreenWide, setIsScreenWide] = useState(window.innerWidth > 548);
  const imagePath = `${process.env.PUBLIC_URL}/images/DC.jpg`;
  const imagePath2 = `${process.env.PUBLIC_URL}/images/DC2.jpg`;
  const navigate = useNavigate();
  const [isUsernameCorrect, setIsUsernameCorrect] = useState(false);
>>>>>>> origin/feature
  const closeModalHandler = () => {
    setIsUsernameCorrect((prevCondition) => !prevCondition);
  };
  const nameInputHandler = (e) => setUsername(e.target.value);
  const startedBtnHandler = function () {
    try {
      if (username.trim() && isNaN(username)) navigate("/BmiPage");
      else throw new Error("Your name incorrect 🫥");
    } catch (e) {
      setIsUsernameCorrect((prevState) => !prevState);
    }
  };
  useEffect(() => {
    const handleResize = () => {
      setIsScreenWide(window.innerWidth > 548);
<<<<<<< HEAD
      setIsScreenTall(window.innerHeight < 815);
=======
>>>>>>> origin/feature
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
<<<<<<< HEAD

  return (
    <>
      <div className={"w-full h-screen flex flex-col items-center px-16"}>
        {!isUsernameCorrect && (
=======
  return (
    <>
      <div className={"w-full h-screen flex flex-col items-center px-16"}>
        {isUsernameCorrect && (
>>>>>>> origin/feature
          <BLoginError
            message={"Your name incorrect 🫥"}
            onClose={closeModalHandler}
          />
        )}
<<<<<<< HEAD
        <header>
=======
        <header className={"w-full"}>
>>>>>>> origin/feature
          <BPageTitle />
        </header>
        <main
          className={
            "w-full h-4/6 py-4 flex flex-col items-center justify-between "
          }
        >
          <img
            src={`${isScreenWide ? imagePath2 : imagePath}`}
            alt={"DoctorImage"}
            className={"w-72 md:w-2/4 h-4/6 mb-2"}
          />
<<<<<<< HEAD
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
=======
          <h1 className={"text-xl text-secondary-color font-bold md:text-3xl mt-2"}>
            Let’s help you get better!!!
          </h1>
          <p
            className={"w-72 mt-14 pb-8 text-justify font-thin md:w-96 text-lg"}
          >
            This app can you calculate your body mass index (BMI). Your BMI can
            help you determine if you are at a healthy weight, or if you need to
            make changes to your diet or exercise habits.
          </p>
>>>>>>> origin/feature
        </main>
        <footer
          className={"w-full h-1/6 flex flex-col items-center justify-end"}
        >
          <BInput
            inputPlaceholder={"Enter your name"}
            inputHandler={nameInputHandler}
            inputType={"text"}
          />
          <BButton
            buttonValue={"Get Started"}
            buttonHandler={startedBtnHandler}
          />
        </footer>
      </div>
    </>
  );
};

export default WelcomePage;
