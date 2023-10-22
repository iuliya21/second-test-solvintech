import { observer } from "mobx-react-lite";
import counterStep from "../stores/storeStep";

type TButtonCroppedProps = {
  text: string;
};

const ButtonCropped: React.FC<TButtonCroppedProps> = observer(({ text }) => {
  const { next } = counterStep;

  return (
    <button
      onClick={() => next()}
      className={`gap-x-[10px] text-white font-black leading-none uppercase cursor-pointer bg-background-btn-continue w-[255px] h-[72px] flex justify-center items-center`}
    >
      <img
        src={require("../images/button-icon.svg").default}
        alt="Иконка кнопки"
        className="w-[15px] h-[17px]"
      />
      {text}
    </button>
  );
});

export default ButtonCropped;
