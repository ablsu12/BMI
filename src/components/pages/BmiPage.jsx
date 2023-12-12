import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import BPageTitle from '../BPageTitle'
import BInfoBox from '../BInfoBox'
import BImageButton from '../BImageButton'
import BButton from '../BButton'
import BTitle from '../BTitle'
import BBoxImage from '../BBoxImage'
import BErrorPopUp from '../BErrorPopUp'
import useNavigateToHome from '../hooks/useNavigateToHome'
import useCustomContext from '../context/customContext'

const BmiPage = () => {
  const path = {
    malePath: `${process.env.PUBLIC_URL}/Icon/male-icon.png`,
    femalePath: `${process.env.PUBLIC_URL}/Icon/female-icon.png`,
    plusPath: `${process.env.PUBLIC_URL}/Icon/plus-icon.png`,
    minusPath: `${process.env.PUBLIC_URL}/Icon/minus-icon.png`,
  }
  const text = {
    title: 'BMI CALCULATOR',
    heightText: 'HEIGHT',
    ageText: 'AGE',
    weightText: 'WEIGHT',
    buttonValue: 'Calculate BMI',
  }
  const { userInfo, setUserInfo } = useCustomContext()
  const navigate = useNavigate()
  useNavigateToHome(userInfo.username)
  const [genderErr, setGenderErr] = useState({
    isOpen: false,
    message: null,
  })
  const infoIsValid = Object.values(userInfo).every((value) => value)
  const calculatedBtnHandler = () => {
    try {
      if (infoIsValid) navigate('/ResultPage')
      else {
        throw new Error('Please select your gender 🫥')
      }
    } catch (e) {
      setGenderErr((prevState) => ({
        ...prevState,
        isOpen: true,
        message: e.message,
      }))
    }
  }
  const closeErrModalHandler = () => {
    setGenderErr((prevState) => ({
      ...prevState,
      isOpen: false,
      message: null,
    }))
  }
  return (
    <div className={'flex flex-col items-center py-8'}>
      {genderErr.isOpen && (
        <BErrorPopUp
          message={genderErr.message}
          onClose={closeErrModalHandler}
        />
      )}
      <header className={'w-full h-1/6 flex flex-col mt-5'}>
        <BPageTitle title={text.title} />
      </header>
      <main className={'grid my-5'}>
        <div className={'gender flex justify-around items-center mt-4'}>
          <BInfoBox
            size={'sm'}
            clickHandler={() => {
              setUserInfo((prevInfo) => ({
                ...prevInfo,
                userGender: 'male',
              }))
            }}
          >
            <BImageButton>
              <BBoxImage path={path.malePath} isIcon />
            </BImageButton>
          </BInfoBox>
          <BInfoBox
            size={'sm'}
            clickHandler={() => {
              setUserInfo((prevInfo) => ({
                ...prevInfo,
                userGender: 'female',
              }))
            }}
          >
            <BImageButton>
              <BBoxImage path={path.femalePath} isIcon />
            </BImageButton>
          </BInfoBox>
        </div>
        <div className={'height flex justify-center items-center mt-4'}>
          <BInfoBox size={'lg'}>
            <BTitle title={text.heightText} />
            <BTitle title={`${userInfo.userHeight}cm`} />
            <input
              min={120}
              max={220}
              type={'range'}
              onChange={(e) => {
                setUserInfo((prevInfo) => ({
                  ...prevInfo,
                  userHeight: e.target.value,
                }))
              }}
              className={
                'w-4/5 h-0.5 mb-2 appearance-none rounded-full outline-none bg-primary-color'
              }
            />
          </BInfoBox>
        </div>
        <div className={'weight-age flex justify-around items-center mt-4'}>
          <BInfoBox size={'sm'}>
            <BTitle title={text.weightText} />
            <BTitle title={userInfo.userWeight} />
            <div className={'flex w-full justify-around items-center'}>
              <BImageButton
                clickHandler={() => {
                  setUserInfo((prevInfo) => ({
                    ...prevInfo,
                    userWeight: prevInfo.userWeight++,
                  }))
                }}
              >
                <BBoxImage path={path.plusPath} />
              </BImageButton>
              <BImageButton
                clickHandler={() => {
                  setUserInfo((prevInfo) => ({
                    ...prevInfo,
                    userWeight: prevInfo.userWeight--,
                  }))
                }}
              >
                <BBoxImage path={path.minusPath} />
              </BImageButton>
            </div>
          </BInfoBox>
          <BInfoBox size={'sm'}>
            <BTitle title={text.ageText} />
            <BTitle title={userInfo.userAge} />
            <div className={'flex w-full justify-around items-center'}>
              <BImageButton
                clickHandler={() => {
                  setUserInfo((prevInfo) => ({
                    ...prevInfo,
                    userAge: prevInfo.userAge++,
                  }))
                }}
              >
                <BBoxImage path={path.plusPath} />
              </BImageButton>
              <BImageButton
                clickHandler={() => {
                  setUserInfo((prevInfo) => ({
                    ...prevInfo,
                    userAge: prevInfo.userAge--,
                  }))
                }}
              >
                <BBoxImage path={path.minusPath} />
              </BImageButton>
            </div>
          </BInfoBox>
        </div>
      </main>
      <footer className={'w-full flex justify-center items-end'}>
        <BButton
          buttonValue={text.buttonValue}
          buttonHandler={calculatedBtnHandler}
        />
      </footer>
    </div>
  )
}

export default BmiPage
