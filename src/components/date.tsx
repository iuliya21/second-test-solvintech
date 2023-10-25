import ButtonCropped from "@components/buttonCropped";
import ButtonCroppedLeft from "@components/buttonCroppedLeft";
import { useEffect, useState } from "react";

const Date = () => {

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
    ? `relative z-0 flex justify-between w-[522px] 
  h-[212px] py-10 pl-[33px] pr-10 max-sm:pl-10 max-sm:w-[335px] rounded-[15px]`
    : `relative z-0 flex justify-between w-[522px] 
  h-[212px] py-10 pl-[33px] pr-10`

  const containerBackgroungGreen = isSmallScreen
    ? `bg-background-frame-date-sm`
    : `bg-background-calendar`

  const containerBackgroungRed = isSmallScreen
    ? `bg-background-frame-date-sm-left`
    : `bg-background-calendar-harder`

  return (
    <>
      <div className="flex gap-x-[60px] max-md:flex-col-reverse max-md:gap-y-5">
        <div className="flex gap-x-5 items-center max-sm:gap-x-2">
          <img
            src={require("../images/left-green.svg").default}
            alt="Стрелка влево"
            className="cursor-pointer w-[14px] h-[30px]"
          />
          <ul className="flex gap-x-4 leading-none text-2xl max-md:text-base items-center max-md:font-bold">
            <li>9.11</li>
            <li>10.11</li>
            <li className="text-white bg-colorGreen px-2 py-1 rounded-lg">
              11.11
            </li>
            <li>12.11</li>
            <li>13.11</li>
          </ul>
          <img
            src={require("../images/right-green.svg").default}
            alt="Стрелка вправо"
            className="cursor-pointer w-[14px] h-[30px]"
          />
        </div>
        <div>
          <div className="flex gap-x-5  max-md:gap-x-2 max-md:justify-center max-md:flex-row-reverse">
            <img
              src={require("../images/calendar-month.svg").default}
              alt="Календарь"
              className="cursor-pointer"
            />
            <p className="px-5 py-[10px] max-md:p-[10px] text-2xl text-colorGrey font-bold rounded-lg bg-white">
              11.11.2023
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-5 justify-center mt-7 max-md:mt-5">
        <div
          className={`${container} ${containerBackgroungGreen}`}
          style={{ backgroundPositionY: "40%", backgroundPositionX: "50%" }}
        >
          <div
            className="hidden max-sm:flex justify-center items-center bg-background-message-sm 
            absolute w-[100px] h-[60px] z-10 right-[57px] top-[35px] pr-2"
            style={{ backgroundPositionY: "30%", backgroundPositionX: "50%" }}
          >
            <p className="text-[10px] font-bold leading-none">Загрузка <br/> центра</p>
          </div>
          <div className="absolute hidden max-sm:block right-[8px] top-[15px]">
            <img
              src={require("../images/loading-center-green-sm.svg").default}
              alt="Датчик загрузки"
            />
          </div>
          <div className="flex flex-col gap-y-6 max-sm:gap-y-2">
            <p className="text-4xl max-sm:text-lg font-extrabold leading-none max-sm:leading-none max-sm:my-4">
              14:00 - 16:00
            </p>
            {!isSmallScreen && <ButtonCropped text="Выбрать" />}
            {isSmallScreen && <ButtonCroppedLeft text="Выбрать" />}
          </div>
          <div
            className="right-[42px] bottom-[34px] absolute w-[160px] h-[100px] bg-background-message z-10
            max-sm:hidden flex justify-center items-center pr-5"
            style={{ backgroundPositionY: "30%", backgroundPositionX: "45%" }}
          >
            <p className="leading-[1.2]">Загрузка <br /> центра</p>
          </div>
          <img
            src={require("../images/loading-center-green.svg").default}
            alt="Датчик загрузки"
            className="mr-[-28px] mt-[-15px] w-[85px] h-[164px] max-sm:hidden"
          />
        </div>
        <div
          className="relative z-0 flex justify-between 
          bg-background-calendar-harder w-[522px] 
          h-[212px] py-10 pl-[33px] pr-10 max-sm:hidden"
          style={{ backgroundPositionY: "40%", backgroundPositionX: "50%" }}
        >
          <div
            className="left-[40px] top-[42px] absolute bg-background-message-left z-10
            max-sm:hidden w-[160px] h-[100px] flex justify-center items-center pl-3"
            style={{ backgroundPositionY: "30%", backgroundPositionX: "45%" }}
          >
            <p className="leading-[1.2]">Загрузка <br /> центра</p>
          </div>
          <img
            src={require("../images/loading-center-red.svg").default}
            alt="Датчик загрузки"
            className="mt-[-15px] ml-[-23px] w-[85px] h-[164px]"
          />
          <div className="flex flex-col gap-y-6">
            <p className="text-4xl font-extrabold leading-none">
              16:00 - 18:00
            </p>
            <ButtonCroppedLeft text="Выбрать" />
          </div>
        </div>
        <div
          className={`${container} ${containerBackgroungRed}`}
          style={{ backgroundPositionY: "40%", backgroundPositionX: "50%" }}
        >
          <div
            className="hidden max-sm:flex justify-center items-center bg-background-message-sm 
            absolute w-[100px] h-[60px] z-10 right-[57px] top-[35px] pr-2"
            style={{ backgroundPositionY: "30%", backgroundPositionX: "50%" }}
          >
            <p className="text-[10px] font-bold leading-none">Загрузка <br /> центра</p>
          </div>
          <div className="absolute hidden max-sm:block right-[8px] top-[15px]">
            <img
              src={require("../images/loading-center-red-sm.svg").default}
              alt="Датчик загрузки"
            />
          </div>
          <div
            className="left-[40px] top-[42px] absolute bg-background-message-left z-10
            max-sm:hidden w-[160px] h-[100px] flex justify-center items-center pl-3"
            style={{ backgroundPositionY: "30%", backgroundPositionX: "45%" }}
          >
            <p className="leading-[1.2]"> Загрузка <br /> центра</p>
          </div>
          <img
            src={require("../images/loading-center-red.svg").default}
            alt="Датчик загрузки"
            className="mt-[-15px] ml-[-23px] w-[85px] h-[164px] max-sm:hidden"
          />
          <div className="flex flex-col gap-y-6 max-sm:gap-y-0">
            <p className="text-4xl max-sm:text-lg font-extrabold leading-none max-sm:leading-none max-sm:my-4">
              16:00 - 18:00
            </p>
            {!isSmallScreen && <ButtonCroppedLeft text="Выбрать" />}
            {isSmallScreen && <ButtonCropped text="Выбрать" />}
          </div>
        </div>
        <div
          className="relative z-0 flex justify-between bg-background-calendar 
          w-[522px] h-[212px] py-[40px] pl-[40px] pr-[33px] max-sm:hidden"
          style={{ backgroundPositionY: "40%", backgroundPositionX: "50%" }}
        >
          <div className="flex flex-col gap-y-6">
            <p className="text-4xl font-extrabold leading-none">
              14:00 - 16:00
            </p>
            <ButtonCropped text="Выбрать" />
          </div>
          <div
            className="right-[35px] bottom-[34px] absolute w-[160px] h-[100px] bg-background-message z-10
            max-sm:hidden flex justify-center items-center pr-5"
            style={{ backgroundPositionY: "30%", backgroundPositionX: "45%" }}
          >
            <p className="leading-[1.2]">Загрузка <br /> центра</p>
          </div>
          <img
            src={require("../images/loading-center-green.svg").default}
            alt="Датчик загрузки"
            className="mr-[-28px] mt-[-15px] w-[85px] h-[164px]"
          />
        </div>
      </div>
    </>
  );
};

export default Date;
