import { useBundle } from "../../context/BundleContext"
import Counter from "./QuantitySelector"

interface ProductVariant {
    label: string;
    thumbnail?: string;
}

interface ProductItem {
    id: string;
    title: string;
    price: number;
    comparePrice?: number;
    variants: ProductVariant[];
}

interface ReviewStepProps {
    stepTitle: string;
    products: ProductItem[];
}

const ReviewStep = ({stepTitle,products}:ReviewStepProps) => {

const {bundle,updateVariant} = useBundle()



    return(
        <div className="pt-[15px] w-full border-t-[0.5px] items-start border-t-step flex flex-col gap-[8px]">
            <h4 className="uppercase text-[#A8B2BD] tracking-[1px] text-[12px] ">
                {stepTitle}
            </h4>
            <div className="flex flex-col w-full gap-[12px]">
                {products.map((product)=>{
                    const productCart = bundle.cart[product.id] || {};
                    
                return(

                <div key={product.id} className="flex flex-col w-full gap-[8px]">
                    {Object.entries(productCart).map(([variantName,quantity])=>{
                        if (quantity <= 0) return null;
                        const variantData = product.variants.find(v => v.label === variantName);
                        const variantImg = variantData?.thumbnail || "";
                        const totalPrice = product.price * quantity;
                        const totalComparePrice = (product.comparePrice || product.price) * quantity;
                    
                        return (
                        <div key={variantName} className="flex w-full gap-[16px] justify-between items-center">
                            <div className="flex justify-between items-center gap-[12px] w-full">
                              <div className="flex-1 flex justify-start items-center gap-[6px] w-full">
                                  {variantImg && (
                                      <img src={variantImg} alt={variantName} className="w-[41px] bg-white rounded-md object-contain" />
                                  )}
                                  <div className="flex flex-col">
                                      <h4 className="text-title text-[12px] ">
                                          {product.title}
                                      </h4>
                                      {/* <span className="text-text/60 text-[12px]">
                                          {variantName}
                                      </span> */}
                                  </div>
                              </div>   
                              
                             
                              <Counter 
                                  color={"white"}
                                  value={quantity}
                                  disabled={product.price === 0}
                                  onIncrease={() => updateVariant(product.id, variantName, quantity + 1)}
                                  onDecrease={() => updateVariant(product.id, variantName, quantity - 1)}
                              />
                          </div> 

                            <div className="whitespace-nowrap flex flex-col justify-center items-end gap-[1px]">
                                {product.comparePrice && product.comparePrice > product.price && (
                                    
                                    <p className="text-[14px] line-through text-step text-end">
                                        ${totalComparePrice }    
                                    </p>
                                )}
                                <p className="text-[14px] text-primary text-end font-semibold">
                                     {totalPrice === 0 ? "FREE" : (`${totalPrice } $`) } 
                                </p>
                        </div>
            </div>
           )
          
            })}
            </div>
        )})}
        </div>
            
    </div>
    )
}
export default ReviewStep