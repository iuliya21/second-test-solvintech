import Button from "./button";

type TCardQuestProps = {
  title: string;
};

const CardQuest: React.FC<TCardQuestProps> = ({ title }) => {
  return (
    <div
      className="flex flex-col gap-y-6 w-[295px] h-[548px] bg-white 
    rounded-[15px] p-5 shadow-custom"
    >
      <h3 className="text-2xl font-bold leading-none min-h-[48px]">{title}</h3>
      <img
        src={
          title === "Щенячий патруль возвращается"
            ? require("../images/paw-patrol.svg").default
            : require("../images/minecraft.svg").default
        }
        alt={title}
      />
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
      <Button />
    </div>
  );
};

export default CardQuest;
