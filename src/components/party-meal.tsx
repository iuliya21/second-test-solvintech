import { useEffect, useState } from "react";
import Counter from "./counter";

type TPartyMealProps = {
  mirror: boolean;
  meal: string;
  title: string;
  price: number;
}

const PartyMeal: React.FC<TPartyMealProps> = ({ mirror, meal, title, price }) => {

  const [count, setCount] = useState(10);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  }

  const decrement  = () => {
    setCount(prevCount => prevCount - 1);
  }


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

  const wrapper = `w-[406px] h-[151px]`;

  const background = mirror
  ? `bg-background-meal`
  : `bg-background-meal-left`

  const container = isSmallScreen
  ? ``
  : `w-[466px] h-[211px] p-[40px] pt-[25px] mt-[-25px] ml-[-30px]`;

  return (
    <div className={wrapper}>
      <div className={`${container} ${background} flex gap-x-6 items-center`}>
        <div className={`bg-${meal} w-[165px] h-[111px] bg-cover`}></div>
        <div>
          <h3 className="leading-[1.2] text-2xl font-bold">{title}</h3>
          <p className="text-colorGreen leading-none mt-2 mb-3">{price}₽ / ШТ</p>
          <Counter onIncrement={increment} onDecrement={decrement}>
            {count}
          </Counter>
        </div>
      </div>
    </div>

  )
}

export default PartyMeal;