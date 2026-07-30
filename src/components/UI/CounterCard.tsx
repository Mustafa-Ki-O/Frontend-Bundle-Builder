import type React from "react"
import VariantSelector from "./VariantSelector"
import Counter from "./QuantitySelector"
import { useBundle } from "../../context/BundleContext"

type variant ={
    count:number,
    img:string,
    name:string
}

interface props {
    id:string,
    nextStep:number,
    className:string,
    name:string,
    text:string,
    image:string,
    variants:variant[],
    badge?:string,
    price:number,
    comparePrice:number,
    children?:React.ReactNode
}
const Card = ({className,id,nextStep,name,text,image,variants,badge,price,comparePrice,children}:props) => {

const { bundle,updateVariant,goToNextStep,saveBundle, selectVariant ,getSelectedProductsCountForStep } = useBundle();

const activeVariantId = bundle.selectedVariants[id] || variants[0]?.name;
const currentQuantity = bundle.cart[id]?.[activeVariantId] || 0;


const productVariantsCart = bundle.cart[id] || {};
const totalProductQuantity = Object.values(productVariantsCart).reduce((sum, qty) => sum + qty, 0);

const multiplier = totalProductQuantity > 0 ? totalProductQuantity : 1;



const handleQuantityChange = (newQuantity: number) => {
  if (!activeVariantId) return;

 
  updateVariant(id, activeVariantId, newQuantity);
};
    return(
        <div id={id} className={`flex justify-center  bg-white margin-auto items-start gap-[19px] w-[100%]  rounded-[10px]  hover:shadow-lg p-[11px] h-full max-w-[738px] ${className} ${totalProductQuantity > 0 ? "border-[2px] border-primary":" border-none" }` } >
            <div className="relative flex items-center justify-center self-stretch min-w-[100px]">
                {badge && (
                <div className="absolute px-[6px] py-[2px] left-0 top-0 rounded-xl bg-primary text-white text-[12px]">
                    {badge}
                </div>
                )}

                <img src={image} alt={name} className="w-[100px] h-auto object-contain" />
            </div>

            <div className=" flex w-full flex-col justify-center items-start gap-[5px]">
                <h2 className="text-[16px] text-text font-semibold text-start">
                    {name}
                </h2>
                 <h2 className="text-[12px] text-text/60 font-semibold text-start">
                    {text}<span className="underline text-[12px] text-primary">Learn more</span>
                </h2>
                
                <div className="flex justify-start items-center gap-[6px]">
                    {variants.length > 1 &&  variants.map((variant,i)=>{
                        const isSelected = activeVariantId === variant.name
                        return(
                             <VariantSelector key={i} variant={variant.name} img={variant.img} selecetStatus={isSelected} 
                             onClick={() => selectVariant(id, variant.name)} />
                        )
                    }
                   
                )}
                </div>
                <div className="flex justify-between  items-center w-full gap-[10px]">
                    <Counter value={currentQuantity} 
                     onIncrease={() => handleQuantityChange(currentQuantity + 1)}
                     onDecrease={() => handleQuantityChange(currentQuantity - 1)}/>
                    
                    <div className="flex-1 flex flex-col justify-center items-end gap-[1px]">
                        {comparePrice > 0 && (
                            <p className="text-[16px] line-through text-compare text-end">
                           $ {comparePrice *  multiplier  }
                        </p>
                        )}
                        
                        <p className="text-[16px] text-text text-end ">
                           $ {price * multiplier }
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Card