type CounterProps = {
  value: number;
  onIncrease?: () => void;
  onDecrease?: () => void;
  min?: number;
};



const Counter = ({ value, onIncrease, onDecrease, min = 0 }: CounterProps) => {
  return (
    <div className="flex items-center gap-[10px]  px-[2px] py-[4px] ">
      <button
        type="button"
        onClick={onDecrease}
        disabled={value <= min}
        className="w-6 h-6 flex rounded-[4px] items-center justify-center  bg-[#F0F4F7] font-semibold text-text disabled:opacity-30 disabled:border-[2px] disabled:border-#E6EBF0 cursor-pointer disabled:cursor-not-allowed"
      >
        -
      </button>

      <span className="text-sm  w-4 text-center select-none">
        {value ? value : 0}
      </span>

      <button
        type="button"
        onClick={onIncrease}
        className="w-6 h-6 flex rounded-[4px]  items-center justify-center font-semibold text-text cursor-pointer bg-[#F0F4F7]"
      >
        +
      </button>
    </div>
  );
};

export default Counter;