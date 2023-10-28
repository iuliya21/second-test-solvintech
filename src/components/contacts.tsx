import { useEffect, useState } from "react";
import ButtonCropped from "./buttonCropped";

const Contacts = () => {
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
    ? `w-[335px] h-[357px]`
    : `w-[490px] h-[357px] relative z-10`;

  const container = isSmallScreen
    ? `w-[375px] h-[417px] bg-background-frame-birthday-small ml-[-20px] mt-[-23px] px-[70px] pt-[60px]`
    : `w-[550px] h-[417px] bg-background-contacts ml-[-30px] mt-[-23px] px-[70px] pt-[60px]`;

  return (
    <div className={wrapper}>
      <form className={`${container} flex flex-col gap-y-10 items-center`}>
        <div className="flex flex-col gap-y-6">
          <input type="text" className="p-[10px] shadow-custom rounded-lg w-[390px] max-sm:w-[257px] leading-[1.2]" placeholder="Ваше имя"/>
          <input type="email" className="p-[10px] shadow-custom rounded-lg w-[390px] max-sm:w-[257px] leading-[1.2]" placeholder="Ваш Email"/>
          <input type="phone" className="p-[10px] shadow-custom rounded-lg w-[390px] max-sm:w-[257px] leading-[1.2]" placeholder="Ваш телефон"/>
        </div>
        <ButtonCropped text="Отправить" />
      </form>
    </div>
  );
};

export default Contacts;
