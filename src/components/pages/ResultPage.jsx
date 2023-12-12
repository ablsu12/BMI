import useNavigateToHome from '../hooks/useNavigateToHome'
import BPageTitle from '../BPageTitle'
import BTitle from '../BTitle'
import BButton from '../BButton'
import { CircleSlider } from 'react-circle-slider'
import useCustomContext from '../context/customContext'
import { useNavigate } from 'react-router-dom'
import BImageButton from '../BImageButton'
import React from 'react'

function ResultPage() {
  const text = {
    title: 'BMI RESULT',
    buttonValue: 'Details',
  }
  const { userInfo } = useCustomContext()
  useNavigateToHome(userInfo.username)
  const navigate = useNavigate()

  return (
    <div className={'h-screen p-6'}>
      <header className={'h-1/6'}>
        <BPageTitle title={text.title} />
      </header>
      <main className={'h-4/6 flex flex-col justify-around items-center'}>
        <div className={'h-full flex flex-col justify-around items-center'}>
          <div
            className={
              'circle-container w-64 h-64 flex justify-center items-center ' +
              'rounded-full shadow-2xl bg-blue-50'
            }
          >
            <CircleSlider
              min={5}
              max={30}
              value={userInfo.bmi.toFixed(2)}
              disabled
              progressColor={'#6C63FF'}
              circleColor={'rgba(0,0,0,0.56)'}
              progressWidth={16}
              circleWidth={16}
              knobRadius={0}
            />
          </div>
          <h1
            className={
              'relative text-4xl font-bold bottom-2 text-primary-color'
            }
          >
            {userInfo.bmi.toFixed(2)}
          </h1>
          <BTitle title={`You have ${userInfo.status} body weight`} />
        </div>
      </main>
      <footer className={'h-1/6 flex justify-center'}>
        <BButton
          buttonValue={text.buttonValue}
          buttonHandler={() => {
            navigate('/DetailsPage')
          }}
        />
      </footer>
    </div>
  )
}

export default ResultPage
