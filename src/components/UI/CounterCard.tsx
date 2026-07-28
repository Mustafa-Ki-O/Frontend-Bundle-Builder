import type React from "react"
import VariantSelector from "./VariantSelector"
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


    return(
        <div className={className? 'flex justify-center gap-[19px] w-full border-2 border-step rounded-[10px] shadow-sm hover:shadow-lg cursor-pointer p-[11px]' : className} id={id}>
            <div className="relative w-[100%]">
                <div className="absolute left-0 top-0 rounded-xl bg-primary text-white text-[12px]">
                    {badge}
                </div>
                <img src={image} alt={image} width={'100px'} />
            </div>

            <div className="flex-1 flex flex-col justify-start items-center gap-[10px]">
                <h2 className="text-[16px] text-text font-semibold text-start">
                    {name}
                </h2>
                 <h2 className="text-[12px] text-text/60 font-semibold text-start">
                    {text}
                </h2><span className="underline text-blue">Learn more</span>
                <div className="flex justify-start items-center gap-[6px]">
                    {variants.map((variant,i)=>(
                    <VariantSelector key={i} variant={variant.name} img={variant.img} selecetStatus={false} />
                ))}
                </div>
                
            </div>
        </div>
    )
}
export default Card