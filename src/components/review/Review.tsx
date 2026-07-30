import { useBundle } from "../../context/BundleContext"
import ReviewStep from "../UI/ReviewStep"
import catalogData from '@/data/catalog.json'
const Review = () => {

    const {bundle ,saveBundle} = useBundle()
    
let subtotalPrice = 0;
let subtotalComparePrice = 0;


Object.entries(bundle.cart).forEach(([productId, variants]) => {
    
    const product = catalogData.steps
        .flatMap(step => step.products)
        .find(p => p.id === productId);

    if (product) {
        Object.entries(variants).forEach(([variantName, qty]) => {
            if (qty > 0) {
                subtotalPrice += product.price * qty;
                subtotalComparePrice += (product.comparePrice || product.price) * qty;
            }
        });
    }
});
    const offerPrice = catalogData.offer?.price || 0;
const offerComparePrice = catalogData.offer?.comparePrice || catalogData.offer?.price || 0;

const priceForTotal = subtotalPrice + offerPrice;
const comparePriceForTotal = subtotalComparePrice + offerComparePrice;


const savedMoney = comparePriceForTotal > priceForTotal 
    ? comparePriceForTotal - priceForTotal 
    : 0;
    return (
        <section className="flex-1 pt-[15px]  w-full md:w-full  lg:max-w-[399px]   bg-background  rounded-[10px]">
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
          {Object.values(bundle.cart).some((productVariants) => 
                Object.values(productVariants).some((qty) => qty > 0)
            ) && catalogData.offer && (
                <div className="flex flex-col gap-[10px] w-full">
                    <div className="pt-[15px] border-t-[0.5px] justify-between items-center border-t-step flex  gap-[8px] w-full">
                <div className="flex justify-start items-center gap-[8px]">
                    <img src={catalogData.offer.logo} className="w-[41px] rounded-md bg-white"/>
                    <h4 className="text-title text-[14px]">
                        {catalogData.offer.title}
                    </h4>

                </div>
                <div className="whitespace-nowrap flex flex-col justify-center items-end gap-[1px]">
                       {catalogData.offer.comparePrice && catalogData.offer.comparePrice  > catalogData.offer.price && (
                           
                           <p className="text-[14px] line-through text-step text-end">
                               ${catalogData.offer.comparePrice }    
                           </p>
                       )}
                       <p className="text-[14px] text-primary text-end font-semibold">
                            {catalogData.offer.price === 0 ? "FREE" : (`${catalogData.offer.price } $`) } 
                       </p>
                        </div>
            </div>
            <div className="flex flex-col gap-[10px] w-full">
            <div className="flex justify-between items-center">
                <img src={"/images/extra/Satisfaction.svg"} className="w-[100px] object-fit" /> 
            <div className="flex flex-col items-end justify-center gap-[4px]">
                <p className="px-[8px] text-[12px] py-[5px] rounded-[3px] bg-primary text-white">
                    as low as $19.19/mo
                </p>
                <div className="flex justify-center items-end gap-[4px]">
                    <h5 className="line-through text-step text-[20px]">
                        ${comparePriceForTotal.toFixed(2)}
                    </h5>
                  <h5 className="text-primary text-[32px]">
                        ${priceForTotal}
                    </h5>
                </div>
             </div>
            </div>
            <h3 className="text-center text-alert text-[12px]">
                Congrats! You’re saving ${savedMoney.toFixed(2)} on your security bundle!
            </h3>
            <button onClick={() => alert("Redirecting to checkout...")} className=" cursor-pointer bg-primary text-white text-[17px] rounded-[4px] px-[16px] py-[13px]">
                Checkout
            </button>
            <button onClick={()=>{
                saveBundle();
                alert("Your security system has been saved successfully!");
                window.location.reload()
            }} className=" italic cursor-pointer text-center text-step underline text-[14px] bg-transparent outline-none border-none">
                Save my system for later
            </button>
            </div>
         </div>
             
            )
           } 
            
        </div>

        </section>
    )
}
export default Review