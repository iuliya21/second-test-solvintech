import { useState } from "react";
import { observer } from "mobx-react-lite";
import ButtonCropped from "@components/buttonCropped";

const CountGuest = observer(() => {
  const [countGuestChild, setCountGuestChild] = useState(10);
  const [countGuestAdults, setCountGuestAdults] = useState(10);

  return (
    <div
      className="bg-background-countguest w-[470px] h-[420px] flex flex-col p-10 relative z-10 justify-between"
      style={{ backgroundPositionY: "40%", backgroundPositionX: "50%" }}
    >
      <div className="flex mb-[17px]">
        <div className="max-w-[178px]">
          <h3 className="text-4xl font-extrabold leading-none">Дети</h3>
          <p className="text-2xl font-bold leading-none text-colorGrey mt-1">
            +1 200₽ за ребенка
          </p>
        </div>
        <div className="flex items-center">
          <img
            src={require("../images/decrement.svg").default}
            alt="Минус"
            className="cursor-pointer"
            onClick={() => setCountGuestChild((prev) => prev - 1)}
          />
          <p className="text-4xl text-colorGreen font-black">
            {countGuestChild}
          </p>
          <img
            src={require("../images/increment.svg").default}
            alt="Плюс"
            className="cursor-pointer"
            onClick={() => setCountGuestChild((prev) => prev + 1)}
          />
        </div>
      </div>
      <div className="flex">
        <div className="max-w-[178px] flex flex-col">
          <h3 className="text-4xl font-extrabold leading-none">Взрослые</h3>
          <p className="text-2xl font-bold leading-none text-colorGrey mt-1">
            Бесплатно
          </p>
        </div>
        <div className="flex items-center max-w-[172px]">
          <img
            src={require("../images/decrement.svg").default}
            alt="Минус"
            className="cursor-pointer"
            onClick={() => setCountGuestAdults((prev) => prev - 1)}
          />
          <p className="text-4xl text-colorGreen font-black">
            {countGuestAdults}
          </p>
          <img
            src={require("../images/increment.svg").default}
            alt="Плюс"
            className="cursor-pointer"
            onClick={() => setCountGuestAdults((prev) => prev + 1)}
          />
        </div>
      </div>
      {countGuestChild <= 20 ? (
        <div className="flex justify-center mt-10 items-center">
          <ButtonCropped text="Продолжить" />
        </div>
      ) : (
        <div className="flex justify-center flex-col items-center">
          <div className="bg-colorRed w-6 h-6 flex justify-center items-center rounded-lg mb-3">
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
  );
});

export default CountGuest;
