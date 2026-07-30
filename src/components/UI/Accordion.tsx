import { useBundle } from "../../context/BundleContext";
import polygon from "/vectors/polygon-1.svg";

type AccordionProps = {
  open: boolean;
  children?: React.ReactNode;
  title: string;
  step: string;
  logo: string;
  selectedNum: number;
  onToggle: () => void;
};
const Accordion = ({
  open,
  children,
  title,
  step,
  logo,
  selectedNum,
  onToggle,
}: AccordionProps) => {


    return(
        <>
        <div  className={`flex py-[6px] rounded-md flex-col items-start justify-center gap-[5px] ${open ? 'bg-background' : 'bg-white'}`}>
            <h5 className="px-[15px] text-step text-[10px]">
                {step}
            </h5>
            <div className={`w-full  flex flex-col justify-center items-center ${open ? 'border-t  border-t-1 border-t-step h-full' : 'border-t  border-t-1 border-t-step border-b  border-b-1 border-b-step'}   px-[15px] py-[20px] `}>
           <button
            type="button"
            onClick={onToggle}
            className="flex justify-between z-100 items-center w-full text-left focus:outline-none cursor-pointer"
            aria-expanded={open}
            >
              <div className="flex flex-1 justify-start items-center gap-[8px]">
                <img src={logo} className="w-[26px]" alt={`${title} icon`} />
                <h2 className="text-[22px] font-semibold text-text">
                  {title}
                </h2>
              </div>
    
              <div className="flex justify-center items-center gap-[4px]">
                {open && (
                  <h5 className="text-[14px] text-primary font-semibold">
                    {selectedNum} selected
                  </h5>
                )}
                <img
                  src={polygon}
                  className={`w-[12px] transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`}
                  alt="toggle accordion"
                />
              </div>
        </button>

        {/* {open && (
          <div className={`mt-[15px] transition-all duration-300 ${open ? 'scale-x-100' : 'scale-x-0'}`}>
            {children}
          </div>
        )} */}
          <div
            className={`mt-[15px] transition-all duration-300 transform origin-top-left ${
              open
                ? 'scale-y-100 opacity-100 h-auto visible'
                : 'scale-y-0 opacity-30 h-0 overflow-hidden invisible'
            }`}
          >
            {children}
          </div>
      </div>
    </div>
   </>
  );
};

export default Accordion;