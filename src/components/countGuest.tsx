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
      : `bg-background-countguest w-[530px] h-[480px] flex 
  flex-col relative z-10 justify-between mt-[-25px] ml-[-30px] p-[70px]`;

  const wrapper = `w-[470px] h-[420px]`

  return (
    <div className={wrapper}>
      <div
        className={container}
      >
        <div>
          <div className="flex gap-x-10">
            <div className="max-w-[178px] max-sm:max-w-[91px]">
              <h3 className="text-4xl font-extrabold leading-none max-sm:text-lg">
                Дети
              </h3>
              <p className="text-2xl font-bold leading-none text-colorGrey mt-1 max-sm:text-[13px]">
                +1 200₽ за ребенка
              </p>
            </div>
            <div className="flex items-center gap-x-5">
              <div className="w-[45px] h-[45px]">
                <button className="bg-background-btn-decr w-[105px] h-[105px] ml-[-30px] mt-[-24px]
                cursor-pointer" onClick={() => setCountGuestChild((prev) => prev - 1)}>
                </button>
              </div>
              <p className="text-4xl text-colorGreen font-black max-sm:text-2xl max-sm:mb-3">
                {countGuestChild}
              </p>
              <div className="w-[45px] h-[45px]">
                <button className="bg-background-btn-inc w-[105px] h-[105px] ml-[-30px] mt-[-24px]
                cursor-pointer" onClick={() => setCountGuestChild((prev) => prev + 1)}>
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-x-10 mt-10">
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
            <div className="flex items-center gap-x-5">
              <div className="w-[45px] h-[45px]">
                <button className="bg-background-btn-decr w-[105px] h-[105px] ml-[-30px] mt-[-24px]
                cursor-pointer" onClick={() => setCountGuestAdults((prev) => prev - 1)}>
                </button>
              </div>
              <p className="text-4xl text-colorGreen font-black max-sm:text-2xl max-sm:mb-3">
                {countGuestAdults}
              </p>
              <div className="w-[45px] h-[45px]">
                <button className="bg-background-btn-inc w-[105px] h-[105px] ml-[-30px] mt-[-24px]
                cursor-pointer" onClick={() => setCountGuestAdults((prev) => prev + 1)}>
                </button>
              </div>

            </div>
          </div>
        </div>

        {countGuestChild <= 20 ? (
          <div className="flex justify-center mt-[56px] max-sm:mt-5 items-center">
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
    </div>

  );
});

export default CountGuest;
