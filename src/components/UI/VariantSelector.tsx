const VariantSelector = ({img,variant,selecetStatus}:{img:string,variant:string,selecetStatus:boolean}) => {


    return(
        <div className={`flex justify-center items-center gap-0 px-[3px] py-[1px] ${selecetStatus ? "border-[0.5px] border-[#0AA288] bg-[#1DF0BB0A]" : "border-[0.5px] border-[#CCCCCC] bg-white"}`}>
            <img src={img} width={'28px'} alt=""/>
            <p className="text-#1F1F1F text-[10px]">
                {variant}
            </p>
        </div>
    )
}
export default VariantSelector