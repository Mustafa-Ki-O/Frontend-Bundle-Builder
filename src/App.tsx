
import './App.css'
import Review from './components/review/Review'
import Steps from './components/steps/Steps'
import { BundleProvider } from './context/BundleContext'


function App() {


  return (
    <>
    <BundleProvider>
      <div className="font-sans flex gap-[13px] justify-center items-start">
        <Steps />
        <Review />
      </div>
    </BundleProvider>


      
    </>
  )
}

export default App
