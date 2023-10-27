import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import ButtonCropped from "@components/buttonCropped";
import Counter from "./counter";

const CountGuest = observer(() => {

  const [countGuestChild, setCountGuestChild] = useState(10);
  const [countGuestAdults, setCountGuestAdults] = useState(10);

  const incrementChild = () => {
    setCountGuestChild(prevCount => prevCount + 1);
  }

  const decrementChild  = () => {
    setCountGuestChild(prevCount => prevCount - 1);
  }

  const incrementAdult = () => {
    setCountGuestAdults(prevCount => prevCount + 1);
  }

  const decrementAdult  = () => {
    setCountGuestAdults(prevCount => prevCount - 1);
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

  const errorCount = countGuestChild > 20;

  const container =
    errorCount && isSmallScreen
      ? `bg-background-count-middle w-[375px] h-[404px] flex flex-col
       relative z-10 ml-[-20px] mt-[-25px] p-[60px]`
      : isSmallScreen
        ? `bg-background-count-small w-[375px] h-[348px] flex 
      flex-col relative z-10 justify-between ml-[-20px] mt-[-25px] p-[60px]`
        : `bg-background-countguest w-[530px] h-[480px] flex 
      flex-col relative z-10 justify-between mt-[-25px] ml-[-30px] p-[70px]`;

  const wrapper =
    (errorCount && isSmallScreen)
      ? `w-[335px] h-[344px] overflow-hidden`
      : isSmallScreen
        ? `w-[335px] h-[288px]`
        : `w-[470px] h-[420px]`;

  return (
    <div className={wrapper}>
      <div className={container}>
        <div>
          <div className="flex gap-x-10 max-sm:gap-x-[25px]">
            <div className="max-w-[178px] max-sm:w-[91px]">
              <h3 className="text-4xl font-extrabold leading-none max-sm:text-lg ">
                Дети
              </h3>
              <p className="text-2xl font-bold leading-none text-colorGrey mt-1 max-sm:text-[13px]">
                +1 200₽ за ребенка
              </p>
            </div>
            <Counter onIncrement={incrementChild} onDecrement={decrementChild}>
              {countGuestChild}
            </Counter> 
          </div>
          <div className="flex gap-x-10 mt-10 max-sm:gap-x-[25px] max-sm:mt-6">
            <div className="max-w-[178px] max-sm:max-w-[91px] flex flex-col">
              <h3 className="text-4xl font-extrabold leading-none max-sm:text-lg">
                Взрослые
              </h3>
              <p
                className="text-2xl font-bold leading-none text-colorGrey 
          mt-1 max-sm:text-[13px]"
              >
                Бесплатно
              </p>
            </div>
            <Counter onIncrement={incrementAdult} onDecrement={decrementAdult}>
              {countGuestAdults}
            </Counter> 
          </div>
        </div>

        {countGuestChild <= 20 ? (
          <div className="flex justify-center items-center mt-[56px] max-sm:mt-6">
            <ButtonCropped text="Продолжить" />
          </div>
        ) : (
          <div className="flex justify-center flex-col items-center pt-10">
            <div
              className="bg-colorRed w-6 h-6 flex justify-center items-center 
          rounded-lg mb-3"
            >
              <img
                src={require("../images/dangerous.svg").default}
                alt="Восклицательный знак"
                className="w-1"
              />
            </div>
            <p className="text-center text-lg font-extrabold leading-none">
              Вы указали более 20 детей
            </p>
            <p className="text-center text-lg font-extrabold leading-none">
              Пожалуйста, свяжитесь с персональным банкетным менеджером
            </p>
            <p></p>
          </div>
        )}
      </div>
    </div>
  );
});

export default CountGuest;
