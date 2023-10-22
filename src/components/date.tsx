import ButtonCropped from "@components/buttonCropped";
import ButtonCroppedLeft from "@components/buttonCroppedLeft";

const Date = () => {
  return (
    <>
      <div className="flex gap-x-[60px]">
        <div className="flex gap-x-5 items-center">
          <img
            src={require("../images/left-green.svg").default}
            alt="Стрелка влево"
            className="cursor-pointer w-[14px] h-[30px]"
          />
          <ul className="flex gap-x-4 leading-none text-2xl items-center">
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
          <div className="flex gap-x-5">
            <img
              src={require("../images/calendar-month.svg").default}
              alt="Календарь"
              className="cursor-pointer"
            />
            <p className="px-5 py-[10px] text-2xl text-colorGrey font-bold rounded-lg bg-white">
              11.11.2023
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-5 justify-center mt-7">
        <div
          className="relative z-0 flex justify-between bg-background-calendar w-[522px] h-[212px] py-[40px] pl-[40px] pr-[33px]"
          style={{ backgroundPositionY: "40%", backgroundPositionX: "50%" }}
        >
          <div className="flex flex-col gap-y-6">
            <p className="text-4xl font-extrabold leading-none">
              14:00 - 16:00
            </p>
            <ButtonCropped text="Выбрать" />
          </div>
          <div
            className="right-[59px] bottom-[48px] absolute w-[117px] h-[68px] bg-background-message z-10"
            style={{ backgroundPositionY: "30%", backgroundPositionX: "45%" }}
          >
            <p className="leading-[1.2] ml-[17px] mt-[17px]">Загрузка центра</p>
          </div>
          <img
            src={require("../images/loading-center-green.svg").default}
            alt="Датчик загрузки"
            className="mr-[-28px] mt-[-15px] w-[85px] h-[164px]"
          />
        </div>
        <div
          className="relative z-0 flex justify-between bg-background-calendar-harder w-[522px] h-[212px] py-[40px] pl-[33px] pr-[40px]"
          style={{ backgroundPositionY: "40%", backgroundPositionX: "50%" }}
        >
          <div
            className="left-[58px] top-[55px] absolute w-[117px] h-[68px] bg-background-message-left z-10"
            style={{ backgroundPositionY: "30%", backgroundPositionX: "45%" }}
          >
            <p className="leading-[1.2] ml-[35px] mt-[17px]">Загрузка центра</p>
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
          className="relative z-0 flex justify-between bg-background-calendar-harder w-[522px] h-[212px] py-[40px] pl-[33px] pr-[40px]"
          style={{ backgroundPositionY: "40%", backgroundPositionX: "50%" }}
        >
          <div
            className="left-[58px] top-[55px] absolute w-[117px] h-[68px] bg-background-message-left z-10"
            style={{ backgroundPositionY: "30%", backgroundPositionX: "45%" }}
          >
            <p className="leading-[1.2] ml-[35px] mt-[17px]">Загрузка центра</p>
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
          className="relative z-0 flex justify-between bg-background-calendar w-[522px] h-[212px] py-[40px] pl-[40px] pr-[33px]"
          style={{ backgroundPositionY: "40%", backgroundPositionX: "50%" }}
        >
          <div className="flex flex-col gap-y-6">
            <p className="text-4xl font-extrabold leading-none">
              14:00 - 16:00
            </p>
            <ButtonCropped text="Выбрать" />
          </div>
          <div
            className="right-[59px] bottom-[48px] absolute w-[117px] h-[68px] bg-background-message z-10"
            style={{ backgroundPositionY: "30%", backgroundPositionX: "45%" }}
          >
            <p className="leading-[1.2] ml-[17px] mt-[17px]">Загрузка центра</p>
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
