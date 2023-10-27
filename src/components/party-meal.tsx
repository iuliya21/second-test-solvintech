import { useEffect, useState } from "react";
import Counter from "./counter";

type TPartyMealProps = {
  mirror: boolean;
  meal: string;
  title: string;
  price: number;
};

const PartyMeal: React.FC<TPartyMealProps> = ({
  mirror,
  meal,
  title,
  price,
}) => {
  const [count, setCount] = useState(10);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isSmallScreen = windowWidth < 640;

  const wrapper = isSmallScreen ? `w-[335px] h-[151px]` : `w-[406px] h-[151px]`;

  const background = isSmallScreen
    ? mirror
      ? `bg-background-meal-left-small`
      : `bg-background-meal-small`
    : mirror
    ? `bg-background-meal-left`
    : `bg-background-meal`;

  const container = isSmallScreen
    ? `w-[375px] h-[211px] mt-[-25px] ml-[-20px] pl-[38px] p-[40px] pt-[25px] gap-x-4`
    : `w-[466px] h-[211px] pl-[48px] p-[40px] pt-[25px] mt-[-25px] ml-[-30px] gap-x-6`;

  return (
    <div className={wrapper}>
      <div className={`${container} ${background} flex items-center`}>
        <div className={`${meal} w-[165px] h-[111px] bg-cover rounded-[15px] max-sm:w-[138px]`}></div>
        <div>
          <h3 className="leading-[1.2] text-2xl font-bold max-sm:text-lg">{title}</h3>
          <p className="text-colorGreen leading-none mt-2 mb-3 max-sm:mb-5">
            {price}₽ / ШТ
          </p>
          <Counter onIncrement={increment} onDecrement={decrement}>
            {count}
          </Counter>
        </div>
      </div>
    </div>
  );
};

export default PartyMeal;
