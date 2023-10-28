import { useEffect, useState } from "react";
import ButtonCropped from "./buttonCropped";
import ButtonCroppedLeft from "./buttonCroppedLeft";

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

  const wrapper = isSmallScreen ? `w-[335px] h-[683px]` : `w-[490px] h-[520px] relative z-10`;
  const container = isSmallScreen
    ? `w-[375px] h-[743px] bg-background-total-price-small ml-[-20px] mt-[-23px] px-[60px] pt-[58px]`
    : `w-[550px] h-[580px] bg-background-total-price ml-[-30px] mt-[-23px] px-[70px] pt-[58px]`;

  return (
    <div className={wrapper}>
      <form className={container}>
        <h4 className="text-lg text-colorBlue font-extrabold leading-none mb-1">
          Именинник
        </h4>
        <p className="text-colorBlue text-[13px] leading-none">Вера, 6 лет</p>
        <div className="my-[10px] h-[2px] bg-colorBlue w-full rounded-sm"></div>
        <ul className="leading-none flex flex-col gap-y-[10px] max-h-[170px] max-sm:max-h-full overflow-y-scroll max-sm:overflow-y-visible scrollbar mr-[-24px] max-sm:mr-0">
          <li className="flex justify-between">
            <div>
              <h5 className="text-lg font-extrabold mb-1 leading-none">
                Программа
              </h5>
              <p className="text-[13px] text-colorGrey">Базовый тариф</p>
            </div>
            <p className="mr-[18px] max-sm:mr-0 text-colorGreen text-xl font-bold">
              34 500₽
            </p>
          </li>
          <li className="flex justify-between">
            <div>
              <h5 className="text-lg font-extrabold mb-1 leading-none">
                Гости
              </h5>
              <p className="text-[13px] text-colorGrey">
                12 детей / 6 взрослых
              </p>
            </div>
            <p className="mr-[18px] max-sm:mr-0 text-colorGreen text-xl font-bold">
              + 5 000₽
            </p>
          </li>
          <li className="flex justify-between">
            <div>
              <h5 className="text-lg font-extrabold mb-1 leading-none">Дата</h5>
              <p className="text-[13px] text-colorGrey">11.11.23 16:00-18:00</p>
            </div>
            <p className="mr-[18px] max-sm:mr-0 text-colorGreen text-xl font-bold">
              + 4 900₽
            </p>
          </li>
          <li className="flex justify-between">
            <div>
              <h5 className="text-lg font-extrabold mb-1 leading-none">
                Аниматор
              </h5>
              <p className="text-[13px] text-colorGrey">Без аниматора</p>
            </div>
            <p className="mr-[18px] max-sm:mr-0 text-colorGrey text-xl font-bold">0₽</p>
          </li>
          <li className="flex justify-between">
            <div>
              <h5 className="text-lg font-extrabold mb-1 leading-none">Квест</h5>
              <p className="text-[13px] text-colorGrey">Название квеста</p>
            </div>
            <p className="mr-[18px] max-sm:mr-0 text-colorGreen text-xl font-bold">
              + 5 000₽
            </p>
          </li>
          <li className="flex justify-between">
            <div className="max-sm:max-w-[138px]">
              <h5 className="text-lg font-extrabold mb-1 leading-none">
              Праздничный стол
              </h5>
              <p className="text-[13px] text-colorGrey">Пицца (10)</p>
              <p className="text-[13px] text-colorGrey">Картошка-фри (10)</p>
              <p className="text-[13px] text-colorGrey">Напитки (20)</p>
              <p className="text-[13px] text-colorGrey">Торт (1)</p>
            </div>
            <p className="mr-[18px] max-sm:mr-0 text-colorGreen text-xl font-bold">
              + 20 000₽
            </p>
          </li>
        </ul>
        <div className="my-[10px] h-[2px] bg-colorBlue w-full rounded-sm"></div>
        <div className="flex justify-between items-center mb-6 max-sm:mb-10">
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
          {isSmallScreen ? <ButtonCroppedLeft text="Забронировать"/> : <ButtonCropped text="Забронировать" />}
        </div>
      </form>
    </div>
  );
};

export default TotalPrice;
