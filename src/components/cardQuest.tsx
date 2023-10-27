import { useEffect, useState } from "react";
import Button from "./button";
import ButtonCropped from "./buttonCropped";
import ButtonCroppedLeft from "./buttonCroppedLeft";

type TCardQuestProps = {
  title: string;
};

const CardQuest: React.FC<TCardQuestProps> = ({ title }) => {

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

  const isPawPatrol = title === "Щенячий патруль возвращается";

  const wrapper = isSmallScreen
    ? `w-[335px] h-[633px]`
    : ``;

  const container = isSmallScreen
    ? isPawPatrol
      ? `bg-background-animation-2 w-[376px] h-[693px] ml-[-20px] mt-[-23px] py-[50px] px-[44px]` // маленький экран щенячий патруль
      : `bg-background-animation-3 w-[376px] h-[693px] ml-[-20px] mt-[-25px] py-[50px] px-[44px]` // маленький экран майнкрафт
    : `w-[295px] h-[548px] bg-white rounded-[15px] p-5 shadow-custom`; // большой экран

  return (
    <div className={wrapper}>
      <div
        className={`${container} flex flex-col gap-y-6`}
      >
        <h3 className="text-2xl font-bold leading-none min-h-[48px]">{title}</h3>
        <img
          src={
            isSmallScreen
              ? isPawPatrol
                ? require("../images/paw-patrol-small.svg").default
                : require("../images/minecraft-small.svg").default
              : isPawPatrol
                ? require("../images/paw-patrol.svg").default
                : require("../images/minecraft.svg").default
          }
          
          alt={title}
        />
        <div className="flex flex-col gap-y-6 max-sm:gap-y-4">
          <p className="text-colorGreen font-bold leading-none text-lg">
            Включено в программу
          </p>
          <ul className="flex flex-col gap-y-3">
            <li className="flex items-center gap-x-2">
              <div className="w-2 h-2 bg-colorBlue rounded"></div>
              <p className="max-w-[239px] text-sm leading-none">
                Полет в бухту приключений, ведь щенки рождены летать
              </p>
            </li>
            <li className="flex items-center gap-x-2">
              <div className="w-2 h-2 bg-colorBlue rounded"></div>
              <p className="text-sm leading-none max-w-[239px]">
                "Потуши огонь": опасное задание от Маршалла и новоиспеченных
                спасателей
              </p>
            </li>
            <li className="flex items-center gap-x-2">
              <div className="w-2 h-2 bg-colorBlue rounded"></div>
              <p className="text-sm leading-none max-w-[239px]">Тяф-тяф буги: покажем как щенки умеют зажигать</p>
            </li>
          </ul>
        </div>

        <div className="flex justify-center">
          {isSmallScreen ? isPawPatrol ? <ButtonCroppedLeft text="Выбрать" /> : <ButtonCropped text="Выбрать" /> : <Button />}
        </div>

      </div>
    </div>

  );
};

export default CardQuest;
