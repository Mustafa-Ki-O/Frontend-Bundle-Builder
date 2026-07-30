
import './App.css'
import Review from './components/review/Review'
import Steps from './components/steps/Steps'
import { BundleProvider } from './context/BundleProvider'


function App() {


  return (
    <>
    <BundleProvider>
      <div className="pt-[30px]  md:p-[40px]   font-sans flex flex-col md:flex-row gap-[13px] justify-center items-center md:items-start">
        <h1 className='text-[32px] font-semibold md:hidden text-center'>
          Let's get started
        </h1>
        <Steps />
        <Review />
      </div>
    </BundleProvider>


      
    </>
  )
}

export default App
