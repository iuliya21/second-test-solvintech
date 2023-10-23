import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import ButtonCropped from "@components/buttonCropped";

const CountGuest = observer(() => {
  const [countGuestChild, setCountGuestChild] = useState(10);
  const [countGuestAdults, setCountGuestAdults] = useState(10);

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

  const container = (errorCount && isSmallScreen)
    ? `bg-background-count-middle w-[335px] h-[344px] flex 
  flex-col p-10 relative z-10 max-sm:gap-y-[24px]`
    : isSmallScreen
    ? `bg-background-count-small w-[335px] h-[288px] flex 
  flex-col p-10 relative z-10 justify-between`
    : `bg-background-countguest w-[470px] h-[420px] flex 
  flex-col p-10 relative z-10 justify-between`;

  return (
    <div
      className={container}
      style={{ backgroundPositionY: "40%", backgroundPositionX: "50%" }}
    >
      <div>
        <div className="flex mb-[17px]">
          <div className="max-w-[178px] max-sm:max-w-[91px]">
            <h3 className="text-4xl font-extrabold leading-none max-sm:text-lg">
              Дети
            </h3>
            <p className="text-2xl font-bold leading-none text-colorGrey mt-1 max-sm:text-[13px]">
              +1 200₽ за ребенка
            </p>
          </div>
          <div className="flex items-center max-sm:my-[-30px] max-sm:pt-2 max-sm:ml-[15px]">
            <img
              src={require("../images/decrement.svg").default}
              alt="Минус"
              className="cursor-pointer max-sm:mx-[-15px]"
              onClick={() => setCountGuestChild((prev) => prev - 1)}
            />
            <p className="text-4xl text-colorGreen font-black max-sm:text-2xl max-sm:mb-3">
              {countGuestChild}
            </p>
            <img
              src={require("../images/increment.svg").default}
              alt="Плюс"
              className="cursor-pointer max-sm:mx-[-15px]"
              onClick={() => setCountGuestChild((prev) => prev + 1)}
            />
          </div>
        </div>
        <div className="flex">
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
          <div className="flex items-center max-sm:my-[-40px] max-sm:ml-[17px]">
            <img
              src={require("../images/decrement.svg").default}
              alt="Минус"
              className="cursor-pointer max-sm:mx-[-15px]"
              onClick={() => setCountGuestAdults((prev) => prev - 1)}
            />
            <p className="text-4xl text-colorGreen font-black max-sm:text-2xl max-sm:mb-3">
              {countGuestAdults}
            </p>
            <img
              src={require("../images/increment.svg").default}
              alt="Плюс"
              className="cursor-pointer max-sm:mx-[-15px]"
              onClick={() => setCountGuestAdults((prev) => prev + 1)}
            />
          </div>
        </div>
      </div>

      {countGuestChild <= 20 ? (
        <div className="flex justify-center mt-10 max-sm:mt-5 items-center">
          <ButtonCropped text="Продолжить" />
        </div>
      ) : (
        <div className="flex justify-center flex-col items-center">
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
  );
});

export default CountGuest;
