
import './App.css'
import Review from './components/review/Review'
import Steps from './components/steps/Steps'

function App() {


  return (
    <>
      <div className="font-sans flex gap-[13px] justify-center items-start">
        <Steps />
        <Review />
      </div>
    </>
  )
}

export default App
