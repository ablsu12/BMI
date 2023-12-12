import useCustomContext from '../context/customContext'
import BPageTitle from '../BPageTitle'
import BInfoBox from '../BInfoBox'
import useNavigateToHome from '../hooks/useNavigateToHome'
import BTitle from '../BTitle'
import BButton from '../BButton'
import React from 'react'

export function DetailsPage() {
  const text = {
    title: 'SUMMARY',
    buttonValue: 'Download user info',
  }
  const { userInfo } = useCustomContext()
  useNavigateToHome(userInfo.username)
  const handleDownloadClick = () => {
    const jsonString = JSON.stringify(userInfo)
    const blob = new Blob([jsonString], { type: 'application/json' })
    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = 'userInfo.json'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }
  return (
    <div className={'h-screen flex flex-col items-center py-8'}>
      <header className={'h-1/6'}>
        <BPageTitle title={text.title} />
      </header>
      <main className={'h-4/6 flex flex-col justify-evenly'}>
        <BInfoBox size={'lg'}>
          <BTitle
            title={`Your BMI ${userInfo.bmi.toFixed(2)} ${userInfo.status}`}
          />
        </BInfoBox>
        <BInfoBox size={'xl'}>
          <div className={'w-full h-full grid grid-cols-2'}>
            <section
              className={
                'grid grid-rows-4 justify-center items-center font-mono p-2'
              }
            >
              <h3>Less than 18.5</h3>
              <h3>18.5 to 24.9</h3>
              <h3>25 to 29.9</h3>
              <h3>30 or above</h3>
            </section>
            <section
              className={
                'grid grid-rows-4 justify-center items-center font-bold p-2'
              }
            >
              <h3>Underweight</h3>
              <h3>Healthy</h3>
              <h3>Overweight</h3>
              <h3>Obese</h3>
            </section>
          </div>
        </BInfoBox>
      </main>
      <footer>
        <BButton
          buttonValue={text.buttonValue}
          buttonHandler={handleDownloadClick}
        />
      </footer>
    </div>
  )
}

export default DetailsPage
