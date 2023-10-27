import { observer } from "mobx-react";
import { useState } from "react";

type TCounterProps = {
  children: React.ReactNode;
  onIncrement: React.MouseEventHandler<HTMLButtonElement>;
  onDecrement: React.MouseEventHandler<HTMLButtonElement>;
}

const Counter: React.FC<TCounterProps> = ({ children, onIncrement, onDecrement }) => {

  

  return (
    <div className="flex items-center gap-x-5 max-sm:gap-x-3">
      <div className="w-[45px] h-[45px]">
        <button
          className="bg-background-btn-decr w-[105px] h-[105px] ml-[-30px] mt-[-24px]
      cursor-pointer"
          onClick={onDecrement}
        ></button>
      </div>
      <p className="text-4xl text-colorGreen font-black max-sm:text-2xl max-sm:mb-3">
        {children}
      </p>
      <div className="w-[45px] h-[45px]">
        <button
          className="bg-background-btn-inc w-[105px] h-[105px] ml-[-30px] mt-[-24px]
      cursor-pointer"
          onClick={onIncrement}
        ></button>
      </div>
    </div>
  )
}

export default Counter;