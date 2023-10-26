import { observer } from "mobx-react-lite";
import counterStep from "../stores/storeStep";

const Button = observer(() => {
  
  const { next } = counterStep;

  return (
    <button onClick={() => next()} className="leading-none uppercase cursor-pointer
     text-white font-black bg-colorBlue h-[72px] rounded-[15px] flex justify-center 
     items-center gap-x-[10px] max-sm:hidden w-[255px]">
      <img
        src={require("../images/button-icon.svg").default}
        alt="Иконка кнопки"
      />
      Выбрать
    </button>
  );
});

export default Button;
