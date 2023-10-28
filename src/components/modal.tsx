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
        max-xl:w-screen min-h-[835px] rounded-[40px] max-md:rounded-none max-xl:overflow-hidden"
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
            <p className="leading-[1.2] text-colorBlue font-extrabold max-md:border-b max-md:border-dashed max-md:border-colorBlue max-md:w-[135px] max-md:leading-[1.4]">
              ТЦ Принц Плаза
            </p>
            <p className="leading-[1.2] max-md:leading-[1.4]">Москва, м. Рассказовка</p>
          </div>
        </div>
        {step !== 9 && (
          <div className="w-[938px] flex gap-x-[20px] max-lg:gap-x-[34px] max-lg:w-full max-h-[52px]">
            <div className="flex flex-col justify-between w-[800px] max-lg:w-full">
              <div className="h-[6px] bg-white rounded">
                <div
                  className="bg-colorBlue h-full rounded"
                  style={{ width: `${step * 12.5}%` }}
                ></div>
              </div>
              <div className="flex gap-x-6">
                {step !== 1 && step !== 9 && (
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
                  <span className="font-extrabold leading-none">
                    {step}/8.{" "}
                  </span>
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
        )}
        {step !== 9 && (
          <h2 className="text-4xl max-sm:text-2xl font-extrabold mt-10 mb-6 max-sm:mb-5">
            {title}
          </h2>
        )}
        {step === 9 && (
          <>
            <h2 className="text-4xl font-extrabold text-colorGreen leading-none mb-5">
              Заказ принят!
            </h2>
            <p className="text-2xl leading-none font-bold max-lg:text-lg max-lg:max-w-[252px] text-center max-lg:leading-none max-lg:font-extrabold">
              Наш менеджер свяжется с вами
            </p>
            <div className="w-[644px] h-[644px] relative  max-md:w-[474px] max-md:h-[474px] max-md:mt-10">
            <img
                src={require("../images/human.svg").default}
                alt="Человек"
                className="absolute z-10"
              />
              <img
                src={require("../images/rainbow-2.svg").default}
                alt="Радуга"
                className="absolute top-[153px] right-[-230px] max-lg:hidden"
              />
              <img
                src={require("../images/firecracker.svg").default}
                alt="Хлопушка"
                className="absolute top-[100px] right-[594px] max-lg:hidden"
              />
              <img
                src={require("../images/arc-1.svg").default}
                alt="Узор"
                className="absolute bottom-[491px] right-[618px] max-md:w-[143px] max-md:h-[108px] max-md:bottom-[373px] max-md:right-[299px] max-md:rotate-[300deg]"
              />
              <img
                src={require("../images/arc-2.svg").default}
                alt="Узор"
                className="absolute top-[357px] left-[-233px]"
              />
              <img
                src={require("../images/arc-3.svg").default}
                alt="Узор"
                className="absolute bottom-[19px] right-[365px] max-md:w-[226px] max-md:h-[206px] max-md:bottom-[-54px] max-md:right-[237px]"
              />
              <img
                src={require("../images/arc-4.svg").default}
                alt="Узор"
                className="absolute bottom-[273px] right-[18px] max-md:w-[131px] max-md:top-[25px] max-md:right-[45px]"
              />
              <img
                src={require("../images/arc-5.svg").default}
                alt="Узор"
                className="absolute bottom-[568px] left-[626px]"
              />
              <img
                src={require("../images/arc-6.svg").default}
                alt="Узор"
                className="absolute top-[405px] right-[-177px]"
              />
            </div>

            <div className="w-[1280px] min-h-[835px] max-xl:w-screen overflow-hidden absolute"></div>
          </>
        )}
        {children}
        {step !== 1 && step !== 9 && (
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
