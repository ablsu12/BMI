import React, { lazy, Suspense, useEffect, useMemo, useState } from 'react'
import { CustomContext } from './context/customContext'
import { Routes, Route } from 'react-router-dom'
const WelcomePage = lazy(() => import('./pages/WelcomePage'))
const BmiPage = lazy(() => import('./pages/BmiPage'))
const ResultPage = lazy(() => import('./pages/ResultPage'))
const DetailsPage = lazy(() => import('./pages/DetailsPage'))

const BmiApp = () => {
  const [userInfo, setUserInfo] = useState({
    username: '',
    userGender: null,
    userHeight: 177,
    userWeight: 60,
    userAge: 22,
    bmi: null,
    status: null,
  })
  const status = (bmi) => {
    if (bmi <= 18.5) return 'Underweight 😕'
    else if (bmi > 18.5 && bmi <= 24.9) return 'Normal 🤗'
    else if (bmi >= 25 && bmi <= 29.9) return 'Overweight 🫥'
    else if (bmi >= 30) return 'Obesity 🫨'
  }
  const calculateBMI = () => {
    const { userWeight, userHeight } = userInfo
    const bmiValue = userWeight / (userHeight / 100) ** 2
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      bmi: bmiValue,
      status: status(bmiValue),
    }))
  }

  useEffect(() => {
    calculateBMI()
  }, [userInfo.userWeight, userInfo.userHeight])
  const contextValue = useMemo(() => {
    return {
      userInfo,
      setUserInfo,
    }
  }, [userInfo])

  return (
    <CustomContext value={contextValue}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/BmiPage" element={<BmiPage />} />
          <Route path={'/ResultPage'} element={<ResultPage />} />
          <Route path={'/DetailsPage'} element={<DetailsPage />} />
        </Routes>
      </Suspense>
    </CustomContext>
  )
}

export default BmiApp
