import { useEffect, useState } from "react";
import ButtonCropped from "./buttonCropped";

const Birthday = () => {
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

  const wrapper = isSmallScreen
    ? `mt-5 w-[335px] h-[357px]`
    : `mt-5 w-[490px] h-[299px]`;

  const container = isSmallScreen
    ? `bg-background-frame-birthday-small w-[375px] h-[417px] 
  mt-[-21px] ml-[-20px] p-[60px] pb-[70px] gap-y-7`
    : `bg-background-frame-birthday w-[550px] h-[359px] 
  mt-[-25px] ml-[-30px] p-[70px] gap-y-10`;

  return (
    <div className={`${wrapper} relative z-20`}>
      <form className={`flex flex-col ${container} `}>
        <div className="flex flex-col gap-6">
          <input
            type="text"
            className="p-[10px] rounded-lg leading-[1.2] shadow-custom"
            placeholder="Имя"
          />
          <div className="flex justify-between max-sm:flex-col max-sm:gap-y-6">
            <div className="flex p-[10px] gap-x-[10px] rounded-lg items-center shadow-custom">
              <p className="text-colorGrey leading-[1.2]">Дата рождения</p>
              <div className="bg-colorGreen rounded-lg px-3 py-[6px] flex gap-x-2 items-center">
                <img
                  src={require("../images/calendar-month.svg").default}
                  alt="Календарь"
                  className="w-3 h-[14px]"
                />
                <p className="text-colorWhite leading-none text-xs font-bold ">
                  10.11.2004
                </p>
              </div>
            </div>
            <div className="max-w-[135px] flex items-center justify-center gap-x-2 p-[10px] rounded-lg shadow-custom">
              <p className="text-colorGrey leading-[1.2]">Пол</p>
              <div className="flex gap-x-2">
                <img src={require("../images/boy.svg").default} alt="Мальчик" />
                <div className="bg-colorGreen w-6 h-6 flex py-1 justify-center rounded-lg">
                  <img
                    src={require("../images/girl.svg").default}
                    alt="Девочка"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <ButtonCropped text="Продолжить" />
        </div>
      </form>
    </div>
  );
};

export default Birthday;
