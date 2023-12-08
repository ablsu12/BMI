import Context from "../BmiApp";
import { useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import BPageTitle from "../BPageTitle";
import BInfoBox from "../BInfoBox";
import BImageButton from "../BImageButton";
import BButton from "../BButton";
import BBoxTitle from "../BBoxTitle";
import BBoxImage from "../BBoxImage";
import BErrorPopUp from "../BErrorPopUp";
import useNavigateToHome from "../hooks/useNavigateToHome";

const BmiPage = () => {
  const path = {
    backwardPath: `${process.env.PUBLIC_URL}/Icon/backward-icon.png`,
    malePath: `${process.env.PUBLIC_URL}/Icon/male-icon.png`,
    femalePath: `${process.env.PUBLIC_URL}/Icon/female-icon.png`,
    plusPath: `${process.env.PUBLIC_URL}/Icon/plus-icon.png`,
    minusPath: `${process.env.PUBLIC_URL}/Icon/minus-icon.png`,
  };
  const text = {
    heightText: "HEIGHT",
    ageText: "AGE",
    weightText: "WEIGHT",
  };
  const {
    username,
    userGender,
    setUserGender,
    userHeight,
    setUserHeight,
    userWeight,
    setUserWeight,
    userAge,
    setUserAge,
    userInfo,
    setUserInfo,
  } = useContext(Context);
  const navigate = useNavigate();
  useNavigateToHome(username);
  const [genderErr, setGenderErr] = useState({
    isOpen: false,
    message: null,
  });
  const closeErrModalHandler = () => {
    setGenderErr((prevState) => ({
      ...prevState,
      isOpen: false,
      message: null,
    }));
  };
  useEffect(() => {
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      username,
      userGender,
      userHeight,
      userWeight,
    }));
  }, [username, userGender, userHeight, userWeight, userAge]);
  const isInfoValid = Object.values(userInfo).every((value) => value);
  return (
    <div className={"flex flex-col items-center"}>
      {genderErr.isOpen && (
        <BErrorPopUp
          message={genderErr.message}
          onClose={closeErrModalHandler}
        />
      )}
      <header className={"w-full h-1/6 flex flex-col mt-5"}>
        <BPageTitle />
        <div className={"grid grid-cols-6 items-center"}>
          <BImageButton
            clickHandler={() => {
              navigate("/");
            }}
          >
            <img
              src={path.backwardPath}
              alt={"backward"}
              className={"col-span-1 px-4"}
            />
          </BImageButton>
          <BBoxTitle title={`Hi ${username} 👋🏽`} />
        </div>
      </header>
      <main className={"grid my-5"}>
        <div className={"gender flex justify-around items-center mt-4"}>
          <BInfoBox
            size={"sm"}
            clickHandler={() => {
              setUserGender("male");
            }}
          >
            <BImageButton>
              <BBoxImage path={path.malePath} isIcon />
            </BImageButton>
          </BInfoBox>
          <BInfoBox
            size={"sm"}
            clickHandler={() => {
              setUserGender("female");
            }}
          >
            <BImageButton>
              <BBoxImage path={path.femalePath} isIcon />
            </BImageButton>
          </BInfoBox>
        </div>
        <div className={"height flex justify-center items-center mt-4"}>
          <BInfoBox size={"lg"}>
            <BBoxTitle title={text.heightText} />
            <BBoxTitle title={`${userHeight}cm`} />
            <input
              min={80}
              max={230}
              type={"range"}
              onChange={(e) => {
                setUserHeight(e.target.value);
              }}
              className={
                "w-4/5 h-0.5 mb-2 appearance-none rounded-full outline-none bg-primary-color"
              }
            />
          </BInfoBox>
        </div>
        <div className={"weight-age flex justify-around items-center mt-4"}>
          <BInfoBox size={"sm"}>
            <BBoxTitle title={text.weightText} />
            <BBoxTitle title={userWeight} />
            <div className={"flex w-full justify-around items-center"}>
              <BImageButton
                clickHandler={() => {
                  setUserWeight((prevWeight) => ++prevWeight);
                }}
              >
                <BBoxImage path={path.plusPath} />
              </BImageButton>
              <BImageButton
                clickHandler={() => {
                  setUserWeight((prevWeight) => --prevWeight);
                }}
              >
                <BBoxImage path={path.minusPath} />
              </BImageButton>
            </div>
          </BInfoBox>
          <BInfoBox size={"sm"}>
            <BBoxTitle title={text.ageText} />
            <BBoxTitle title={userAge} />
            <div className={"flex w-full justify-around items-center"}>
              <BImageButton
                clickHandler={() => {
                  setUserAge((prevAge) => ++prevAge);
                }}
              >
                <BBoxImage path={path.plusPath} />
              </BImageButton>
              <BImageButton
                clickHandler={() => {
                  setUserAge((prevAge) => --prevAge);
                }}
              >
                <BBoxImage path={path.minusPath} />
              </BImageButton>
            </div>
          </BInfoBox>
        </div>
      </main>
      <footer className={"w-full flex justify-center items-end"}>
        <BButton
          buttonValue={"Calculate BMI"}
          buttonHandler={() => {
            try {
              if (isInfoValid) navigate("/ResultPage");
              else {
                throw new Error("Please select your gender 🫥");
              }
            } catch (e) {
              setGenderErr((prevState) => ({
                ...prevState,
                isOpen: true,
                message: e.message,
              }));
            }
          }}
        />
      </footer>
    </div>
  );
};

export default BmiPage;
