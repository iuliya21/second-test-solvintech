import Button from "@components/button";

type TCardProps = {
  title: string;
};

const Card: React.FC<TCardProps> = ({ title }) => {
  const isBase = title === "Базовый";
  const isSuper = title === "Супер-праздник";

  return (
    <div className="rounded-[15px] bg-white w-[295px] h-[465px] p-5 flex flex-col gap-y-6">
      <h2 className="font-extrabold text-lg leading-none">{title}</h2>
      <ul className="flex flex-col gap-y-4">
        <li className="flex gap-x-[10px] items-center">
          <div className="bg-colorBlue w-[24px] h-[24px] flex justify-center items-center rounded-[8px]">
            <img
              src={require("../images/tickets.svg").default}
              alt="Иконка"
              className="w-[15px] h-[12px]"
            />
          </div>
          <p className="leading-none">5 билетов</p>
        </li>
        <li className="flex gap-x-[10px] items-center">
          <div className="bg-colorBlue w-[24px] h-[24px] flex justify-center items-center rounded-[8px]">
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
        <li className="flex gap-x-[10px] items-center min-h-[24px]">
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
        <li className="flex gap-x-[10px] items-center min-h-[24px]">
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
            className={!isSuper ? `leading-none text-colorGrey` : `leading-none`}
          >
            Серебряная дискотека
          </p>
        </li>
        <li className="flex gap-x-[10px] items-center min-h-4">
          <div className={
              !isSuper
                ? `flex items-center rounded-[8px] w-[26px] h-[24px]`
                : `bg-colorBlue w-[26px] h-[24px] flex justify-center items-center rounded-[8px]`
            }>
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
            className={!isSuper ? `leading-none text-colorGrey` : `leading-none`}
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
      </div>
    </div>
  );
};

export default Card;
