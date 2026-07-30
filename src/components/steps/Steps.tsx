import { useEffect, useState } from "react"
import Accordion from "../UI/Accordion"
// import logo from '@/assets/vectors/livestream.svg'
import catalogData from '@/data/catalog.json'
import Card from "../UI/CounterCard"
import { useBundle } from "../../context/BundleContext"
const Steps = () => {


    const {bundle, getSelectedProductsCountForStep  ,setStep} = useBundle();


const handleToggle = (stepNumber: number) => {

        if (bundle.currentStep === stepNumber) {
           setStep(null);
        } else {
            setStep(stepNumber); 
        }
    };

const handleNextClick = () => {
    setStep(); 
   
};


    // const steps = catalogData.steps.map((_,i) => i+1);
   

    return (
        <section className="flex-1  w-full md:w-[768px]   bg-background  rounded-[10px]">
            {catalogData.steps.map((step,i) => {               
                const stepProductIds = step.products.map((product) => product.id);
                const nextStep =   catalogData?.steps[i+1]?.title ;
                const isOpen = bundle.currentStep === step.stepNumber;
                return(
                <Accordion

                    key={step.id}
                    open={isOpen}
                    title={step.title}
                    step={`STEP ${step.stepNumber} OF ${catalogData.steps.length}`}
                    logo={step.logo}
                    selectedNum={getSelectedProductsCountForStep(stepProductIds)}
                    onToggle={() => handleToggle(step.stepNumber)}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 items-start  gap-[19px] w-full pt-[15px]">
                        {step.products.map((product) => (
                            <Card
                                key={product.id}
                                id={product.id}
                                nextStep={step.stepNumber + 1}
                                className="custom-card-class"
                                name={product.title}
                                text={product.description}
                                image={product.image}
                                badge={product.discountText || undefined}
                                price={product.price}
                                comparePrice={product.comparePrice || 0}
                                variants={product.variants.map(v => ({
                                    name: v.label,
                                    img: v.thumbnail || "",
                                    count: 0
                                }))}
                            />
                        ))}
                    </div>
                    {nextStep && (
                        <div className="flex justify-center pt-[15px] w-[100%]">
                        <button 
                        onClick={handleNextClick}
                    className="cursor-pointer rounded-[7px] px-[24px] py-[5px] bg-transparent border-[1px] border-primary text-[18px] text-primary mx-auto" 
                    >
                        Next : {nextStep}
                    </button>
                    </div>
                    )}
                    
                    
                </Accordion>
            )})}
        </section>
    )
}

export default Steps