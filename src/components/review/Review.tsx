import { useBundle } from "../../context/BundleContext"
import ReviewStep from "../UI/ReviewStep"
import catalogData from '@/data/catalog.json'
const Review = () => {

    const {bundle } = useBundle()
    
    
    return (
        <section className="flex-1 pt-[15px]  w-full md:max-w-[399px]   bg-background  rounded-[10px]">
        <h5 className="px-[15px] uppercase text-step text-[12px]">
            Review
        </h5>
        <div className="flex flex-col justify-center items-start gap-[10px] p-[20px] pb-[31px] w-full">
         <div className="flex flex-col justify-start gap-[5px]  pb-[31px] w-full">
        <h5 className=" text-[#1F1F1F] text-[22px] font-semibold text-start">
            Your security system
        </h5>
        <h5 className=" text-text text-[14px]">
            Review your personalized protection system designed to keep what matters most safe.
        </h5>
        </div>

           <div id="review-steps" className="flex flex-col justify-center items-start gap-[10px] w-full">
            {catalogData.steps.map((step) => {
                const selectedProductsStep = step.products.filter((product,i)=>{
                    const productCart = bundle.cart[product.id] || {};
                    return Object.values(productCart).some((qty)=>qty>0)
                })
                if (selectedProductsStep.length === 0) return null;
                // <ReviewStep key={i} stepName={cart}/>
            
                return (
                            <ReviewStep 
                                key={step.id} 
                                stepTitle={step.id} 
                                products={selectedProductsStep} 
                            />
                )
            })}
           </div>

        </div>


        </section>
    )
}
export default Review