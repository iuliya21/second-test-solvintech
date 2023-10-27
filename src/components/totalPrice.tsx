import { useEffect, useState } from "react";
import ButtonCropped from "./buttonCropped";

const TotalPrice = () => {
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

  const wrapper = isSmallScreen ? `` : `w-[490px] h-[520px] relative z-10`;
  const container = isSmallScreen
    ? ``
    : `w-[550px] h-[580px] bg-background-total-price ml-[-30px] mt-[-23px] px-[70px] pt-[58px]`;

  return (
    <div className={wrapper}>
      <form className={container}>
        <h4 className="text-lg text-colorBlue font-extrabold leading-none mb-1">
          Именинник
        </h4>
        <p className="text-colorBlue text-[13px] leading-none">Вера, 6 лет</p>
        <div className="my-[10px] h-[2px] bg-colorBlue w-full rounded-sm"></div>
        <ul className="leading-none flex flex-col gap-y-[10px] max-h-[170px] overflow-y-scroll scrollbar mr-[-24px]">
          <li className="flex items-center justify-between">
            <div>
              <h5 className="text-lg font-extrabold mb-1 leading-none">
                Программа
              </h5>
              <p className="text-[13px] text-colorGrey">Базовый тариф</p>
            </div>
            <p className="mr-[18px] text-colorGreen text-xl font-bold">
              34 500₽
            </p>
          </li>
          <li className="flex items-center justify-between">
            <div>
              <h5 className="text-lg font-extrabold mb-1 leading-none">
                Гости
              </h5>
              <p className="text-[13px] text-colorGrey">12 детей / 6 взрослых</p>
            </div>
            <p className="mr-[18px] text-colorGreen text-xl font-bold">
            + 5 000₽
            </p>
          </li>
          <li className="flex items-center justify-between">
            <div>
              <h5 className="text-lg font-extrabold mb-1 leading-none">
              Дата
              </h5>
              <p className="text-[13px] text-colorGrey">11.11.23 16:00-18:00</p>
            </div>
            <p className="mr-[18px] text-colorGreen text-xl font-bold">
            + 4 900₽
            </p>
          </li>
          <li className="flex items-center justify-between">
            <div>
              <h5 className="text-lg font-extrabold mb-1 leading-none">
                Аниматор
              </h5>
              <p className="text-[13px] text-colorGrey">Без аниматора</p>
            </div>
            <p className="mr-[18px] text-colorGrey text-xl font-bold">
            0₽
            </p>
          </li>
          <li className="flex items-center justify-between">
            <div>
              <h5 className="text-lg font-extrabold mb-1 leading-none">
                Угощения
              </h5>
              <p className="text-[13px] text-colorGrey">10 пицц / 2 торта</p>
            </div>
            <p className="mr-[18px] text-colorGreen text-xl font-bold">
              8 000₽
            </p>
          </li>
        </ul>
        <div className="my-[10px] h-[2px] bg-colorBlue w-full rounded-sm"></div>
        <div className="flex justify-between items-center mb-6">
          <p className="text-lg text-colorBlue font-extrabold leading-none mb-1">
            Итого
          </p>
          <p className="text-colorGreen font-bold text-xl">00 000₽</p>
        </div>
        <input
          type="text"
          placeholder="Промокод"
          className="leading-[1.2] p-[10px] w-full shadow-custom rounded-lg"
        />
        <div className="flex justify-center mt-10">
          <ButtonCropped text="Забронировать" />
        </div>
      </form>
    </div>
  );
};

export default TotalPrice;
