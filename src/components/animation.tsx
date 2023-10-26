import { ReactNode } from "react";
import Button from "./button";

type TAnimationProps = {
  children: ReactNode;
};

const Animation: React.FC<TAnimationProps> = ({ children }) => {
  return (
    <div className="flex gap-x-10">
      <img
        src={require("../images/left.svg").default}
        alt="Стрелка"
        className="cursor-pointer 
        max-xl:hidden"
      />
      <div className="flex gap-x-7">
        <div className="flex flex-col w-[295px] h-[548px] bg-white rounded-[15px] p-5 shadow-custom">
          <h3 className="text-2xl font-bold leading-none">Без аниматора</h3>
          <p className="text-colorGreen font-bold text-lg mt-6 mb-[30px] leading-none">
            Бесплатно
          </p>
          <img
            src={require("../images/animator-none.svg").default}
            alt="Аниматор"
            className="w-[179px] h-[315px] self-center mb-[25px]"
          />
          <Button />
        </div>
        {children}
      </div>
      <img
        src={require("../images/right.svg").default}
        alt="Стрелка"
        className="cursor-pointer
         max-xl:hidden"
      />
    </div>
  );
};

export default Animation;
