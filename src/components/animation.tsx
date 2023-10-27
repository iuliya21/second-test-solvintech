import { ReactNode, useEffect, useState } from "react";
import Button from "./button";
import ButtonCropped from "./buttonCropped";

type TAnimationProps = {
  children: ReactNode;
};

const Animation: React.FC<TAnimationProps> = ({ children }) => {

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

  const container = isSmallScreen
    ? `bg-background-animation-1 w-[375px] h-[286px] mt-[-20px] ml-[-20px] p-[45px]`
    : `w-[295px] h-[548px] shadow-custom bg-white rounded-[15px] p-5`;

  const wrapper = isSmallScreen
    ? `w-[335px] h-[223px]`
    : ``;

  return (
    <div className="flex gap-x-10">
      <img
        src={require("../images/left.svg").default}
        alt="Стрелка"
        className="cursor-pointer 
        max-xl:hidden"
      />
      <div className="flex gap-7 flex-wrap justify-center max-sm:gap-10">
        <div className={wrapper}>
          <div className={`${container} flex flex-col`}>
            <div className="flex flex-col max-sm:flex-row max-sm:justify-between max-sm:mb-6">
              <div className="flex flex-col max-sm:max-w-[128px]">
                <h3 className="text-2xl font-bold leading-none">Без аниматора</h3>
                <p className="text-colorGreen font-bold text-lg mt-6 mb-[30px] leading-none max-sm:mb-[0px]">
                  Бесплатно
                </p>
              </div>
              {!isSmallScreen && (
                <img
                  src={require("../images/animator-none.svg").default}
                  alt="Аниматор"
                  className="w-[179px] h-[315px] self-center mb-[25px]"
                />
              )}
              {isSmallScreen && (
                <img src={require("../images/sad-smile.svg").default} alt="Грусть" className="w-[88px] h-[88px]" />
              )}
            </div>
            <div className="self-center">
              {isSmallScreen ? <ButtonCropped text="Выбрать" /> : <Button />}
            </div>
          </div>
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
