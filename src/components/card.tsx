import Button from "@components/button";
import ButtonCroppedLeft from "@components/buttonCroppedLeft";
import ButtonCropped from "@components/buttonCropped";
import { useEffect, useState } from "react";

type TCardProps = {
  title: string;
};

const Card: React.FC<TCardProps> = ({ title }) => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const isBase = title === "Базовый";
  const isSuper = title === "Супер-праздник";
  const isCool = title === "Улетный";

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

  const container = isBase
    ? `rounded-[15px] bg-white w-[295px] h-[465px] p-5 flex flex-col gap-y-6 
    max-sm:bg-background-programm max-sm:mt-[-25px] max-sm:ml-[-20px] max-sm:w-[375px] max-sm:h-[426px]
    p-5 max-sm:p-[60px] max-sm:bg-transparent`
    : isCool
      ? `rounded-[15px] bg-white w-[295px] max-sm:w-[375px] h-[465px] max-sm:h-[458px] max-sm:mt-[-25px] max-sm:ml-[-20px] 
    p-5 max-sm:p-[60px] flex flex-col gap-y-6 max-sm:bg-background-programm-cool max-sm:bg-transparent`
      : `rounded-[15px] bg-white w-[295px] max-sm:w-[375px] h-[465px] max-sm:h-[530px] 
      max-sm:mt-[-25px] max-sm:ml-[-20px] p-5 max-sm:p-[60px] flex flex-col gap-y-6 max-sm:bg-background-programm-super max-sm:bg-transparent`;

  const wrapper = isBase
    ? `max-sm:w-[335px] max-sm:h-[366px]`
    : isCool
    ? `max-sm:w-[335px] max-sm:h-[398px]`
    : `max-sm:w-[335px] max-sm:h-[470px]`;

  return (
    <div className={wrapper}>
      <div className={`${container} sm:shadow-custom`}>
        <h3 className="font-extrabold text-lg leading-none">{title}</h3>
        <ul className="flex flex-col gap-y-4 max-sm:gap-y-2">
          <li className="flex gap-x-[10px] items-center">
            <div
              className="bg-colorBlue w-[24px] h-[24px] flex justify-center 
          items-center rounded-[8px]"
            >
              <img
                src={require("../images/tickets.svg").default}
                alt="Иконка"
                className="w-[15px] h-[12px]"
              />
            </div>
            <p className="leading-none">5 билетов</p>
          </li>
          <li className="flex gap-x-[10px] items-center">
            <div
              className="bg-colorBlue w-[24px] h-[24px] flex justify-center 
          items-center rounded-[8px]"
            >
              <img
                src={require("../images/VIP.svg").default}
                alt="Иконка"
                className="w-[15px] h-[12px]"
              />
            </div>
            <p className="leading-none">VIP комната (2ч.)</p>
          </li>
          <li className="flex gap-x-[10px] items-center">
            <img
              src={require("../images/adults.svg").default}
              alt="Иконка"
              className="w-[24px]"
            />
            <p className="leading-none">Взрослые бесплатно</p>
          </li>
          <li
            className={`flex gap-x-[10px] items-center min-h-[24px] ${isBase ? "max-sm:hidden" : ""
              }`}
          >
            <div
              className={
                isBase
                  ? `flex justify-center items-center rounded-[8px]`
                  : `bg-colorBlue w-[24px] h-[24px] flex justify-center items-center rounded-[8px]`
              }
            >
              <img
                src={
                  isBase
                    ? require("../images/cross.svg").default
                    : require("../images/animation.svg").default
                }
                alt="Иконка"
                className={isBase ? `w-[17px] h-[17px]` : `w-[15px] h-[12px]`}
              />
            </div>
            <p
              className={isBase ? `leading-none text-colorGrey` : `leading-none`}
            >
              Анимационная программа
            </p>
          </li>
          <li
            className={`flex gap-x-[10px] items-center min-h-[24px] ${(isBase || isCool) ? "max-sm:hidden" : ""
              }`}
          >
            <div
              className={
                !isSuper
                  ? `flex justify-center items-center rounded-[8px]`
                  : `bg-colorBlue w-[24px] h-[24px] flex justify-center items-center rounded-[8px]`
              }
            >
              <img
                src={
                  !isSuper
                    ? require("../images/cross.svg").default
                    : require("../images/party.svg").default
                }
                alt="Иконка"
                className={!isSuper ? `w-[17px] h-[17px]` : `w-[15px] h-[12px]`}
              />
            </div>
            <p
              className={
                !isSuper ? `leading-none text-colorGrey` : `leading-none`
              }
            >
              Серебряная дискотека
            </p>
          </li>
          <li
            className={`flex gap-x-[10px] items-center min-h-[24px] ${(isBase || isCool) ? "max-sm:hidden" : ""
              }`}
          >
            <div
              className={
                !isSuper
                  ? `flex items-center rounded-[8px] w-[26px] h-[24px]`
                  : `bg-colorBlue w-[26px] h-[24px] flex justify-center items-center rounded-[8px]`
              }
            >
              <img
                src={
                  !isSuper
                    ? require("../images/cross.svg").default
                    : require("../images/soap.svg").default
                }
                alt="Иконка"
                className={!isSuper ? `w-[17px] h-[17px]` : `w-[15px] h-[12px]`}
              />
            </div>
            <p
              className={
                !isSuper ? `leading-none text-colorGrey` : `leading-none`
              }
            >
              Мыльные пузыри с погружением
            </p>
          </li>
        </ul>
        <div className="flex flex-col gap-y-[17px]">
          <ul className="flex gap-x-[30px]">
            <li>
              <p className="text-center text-xs">Будни</p>
              <p className="text-lg font-black text-colorGreen">7 900 ₽</p>
            </li>
            <li>
              <p className="text-xs">Выходные</p>
              <p className="text-lg font-black text-colorGreen">9 900 ₽</p>
            </li>
            <li>
              <p className="text-xs">+1 гость</p>
              <p className="text-lg font-black text-colorGreen">1 200 ₽</p>
            </li>
          </ul>
          <Button />
          {isSmallScreen && (isBase || isSuper) && <ButtonCroppedLeft text="Выбрать" />}
          {isSmallScreen && isCool && <ButtonCropped text="Выбрать" />}
        </div>
      </div>
    </div>

  );
};

export default Card;
