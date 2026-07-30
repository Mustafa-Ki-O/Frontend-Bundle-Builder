type CounterProps = {
  value: number;
  onIncrease?: () => void;
  onDecrease?: () => void;
  min?: number;
  color?:string;
  disabled? : boolean;
};



const Counter = ({disabled,color, value, onIncrease, onDecrease, min = 0 }: CounterProps) => {
  return (
    <div className="flex items-center gap-[10px]  px-[2px] py-[4px] ">
      <button
        type="button"
        
        onClick={onDecrease}
        disabled={value <= min || disabled}
        className={`w-6 h-6 flex rounded-[4px] items-center justify-center ${color ? `bg-${color}` : "bg-[#F0F4F7]"}  font-semibold text-text disabled:opacity-30 disabled:border-[2px] disabled:border-#E6EBF0 cursor-pointer disabled:cursor-not-allowed`}
      >
        -
      </button>

      <span className="text-sm  w-4 text-center select-none">
        {value ? value : 0}
      </span>

      <button
        type="button"
        disabled={disabled}
        onClick={onIncrease}
        className={`w-6 h-6 flex rounded-[4px] items-center justify-center ${color ? `bg-${color}` : "bg-[#F0F4F7]"}  font-semibold text-text  disabled:opacity-30 disabled:border-[2px] disabled:border-#E6EBF0 cursor-pointer disabled:cursor-not-allowed `}
      >
        +
      </button>
    </div>
  );
};

export default Counter;