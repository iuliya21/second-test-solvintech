import { observer } from "mobx-react-lite";
import counterStep from "../stores/storeStep";

type TModalProps = {
  title: string;
  children: React.ReactNode;
  step: number;
  stepName: string | undefined;
};

const Modal: React.FC<TModalProps> = observer(
  ({ title, children, step, stepName }) => {
    const { prev } = counterStep;

    return (
      <div
        className="relative items-center flex-col my-[124px] max-lg:my-0 py-[31px] 
        max-lg:p-[20px] max-lg:pb-[40px] bg-backgroundColorModal flex w-[1280px] 
        max-xl:w-screen min-h-[835px] rounded-[40px] max-md:rounded-none overflow-hidden"
      >
        <div
          className="bg-close-button w-[30px] h-[30px] absolute top-10 right-10 
        max-md:top-[27px] 
        max-md:right-[20px] cursor-pointer "
        ></div>
        <div
          className="flex items-center h-[38px] gap-x-3 mb-[44px] max-sm:mb-[29px] 
        max-sm:self-start"
        >
          <img
            src={require("../images/icon-place.svg").default}
            alt="Иконка местоположения"
            className="w-[24px] h-[24px]"
          />
          <div>
            <p className="leading-[1.2] text-colorBlue font-extrabold">
              ТЦ Принц Плаза
            </p>
            <p className="leading-[1.2]">Москва, м. Рассказовка</p>
          </div>
        </div>
        <div
          className="w-[938px] flex gap-x-[20px] max-lg:gap-x-[34px] max-lg:w-full max-h-[52px]"
        >
          <div className="flex flex-col justify-between w-[800px] max-lg:w-full">
            <div className="h-[6px] bg-white rounded">
              <div
                className="bg-colorBlue h-full rounded"
                style={{ width: `${step * 12.5}%` }}
              ></div>
            </div>
            <div className="flex gap-x-6">
              {step !== 1 && (
                <button
                  onClick={() => prev()}
                  className="hidden bg-background-btn-prev cursor-pointer w-[31px] h-[22px]
                  max-sm:block bg-contain bg-no-repeat"
                ></button>
              )}
              <div
                className="flex gap-x-[6px] bg-colorBlue rounded-[10px]
                rounded-tl-none max-w-min px-[10px] py-1 text-white"
              >
                <span className="font-extrabold leading-none">{step}/8. </span>
                <span className="leading-none">{stepName}</span>
              </div>
            </div>
          </div>
          <div className="h-[52px] w-[118px] max-sm:w-[98px]">
            <div
              className="pb-3 flex flex-col gap-y-[6px] justify-center bg-svg-background max-lg:bg-svg-background-small
              w-[178px] max-sm:w-[148px] h-[114px] max-sm:min-w-[108px] ml-[-30px] mt-[-24px] max-lg:pr-4 max-sm:pr-0 max-sm:pl-2"
            >
              <p className="text-center font-bold text-sm leading-none">
              Итог
            </p>
            <p className="text-center font-bold text-xl leading-none text-colorGreen">
              34 500₽
            </p>
            </div>
          </div>
        </div>
        <h2 className="text-4xl max-sm:text-2xl font-extrabold mt-10 mb-6 max-sm:mb-5">
          {title}
        </h2>
        {children}
        {step !== 1 && (
          <button
            onClick={() => prev()}
            className="bg-background-btn-prev cursor-pointer 
            w-[46px] h-[33px] absolute top-10 left-10 max-sm:hidden"
          ></button>
        )}
      </div>
    );
  }
);

export default Modal;
