import Modal from "@components/modal";
import Programs from "@components/programs";
import Card from "@components/card";
import Date from "@components/date";
import { observer } from "mobx-react-lite";
import counterStep from "../stores/storeStep";
import CountGuest from "./countGuest";
import { useEffect, useState } from "react";
import Birthday from "@components/birthday";
import Animation from "@components/animation";
import CardQuest from "./cardQuest";
import PartyMeal from "./party-meal";
import ButtonCropped from "./buttonCropped";
import TotalPrice from "./totalPrice";
import Contacts from "./contacts";

const App = observer(() => {
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

  const isLargeScreen = windowWidth < 1024;
  const isMediumScreen = windowWidth < 768;
  const isSmallScreen = windowWidth < 640;

  const { step } = counterStep;

  const titleStep3 = isMediumScreen
    ? "Выберите дату"
    : "Выберите подходящую дату";

  let stepNameCurrent;
  let titleModal;

  switch (step) {
    case 1:
      stepNameCurrent = "Программа";
      titleModal = "Праздничная программы";
      break;
    case 2:
      stepNameCurrent = "Гости";
      titleModal = "Сколько будет гостей?";
      break;
    case 3:
      stepNameCurrent = "Даты";
      titleModal = titleStep3;
      break;
    case 4:
      stepNameCurrent = "Именинник";
      titleModal = "У кого день рождения?";
      break;
    case 5:
      stepNameCurrent = "Квест";
      titleModal = "Выберите аниматора и квест";
      break;
    case 6:
      stepNameCurrent = "Угощения";
      titleModal = "Праздничный стол";
      break;
    case 7:
      stepNameCurrent = "Стоимость";
      titleModal = "Итоговая стоимость ";
      break;
    case 8:
      stepNameCurrent = "Контакты";
      titleModal = "Контакты для связи";
      break;
    default:
      stepNameCurrent = "Программа";
      titleModal = "Праздничные программы";
      break;
  }

  return (
    <div className="flex justify-center">
      <Modal title={titleModal} step={step} stepName={stepNameCurrent}>
        {step === 1 ? (
          <Programs>
            <Card title="Базовый" />
            <Card title="Улетный" />
            <Card title="Супер-праздник" />
          </Programs>
        ) : null}
        {step === 2 ? (
          <>
            <CountGuest />
            <img
              src={require("../images/party-step2.svg").default}
              alt="Вечеринка"
              className="absolute z-0 right-0 bottom-0 max-sm:hidden"
            />
          </>
        ) : null}
        {step === 3 ? <Date /> : null}
        {step === 4 && (
          <>
            <Birthday />

            {!isLargeScreen && (
              <div className="absolute w-full h-full overflow-hidden left-0 top-0">
                <img
                  src={require("../images/gifts.svg").default}
                  alt="Подарки"
                  className="w-[1363px] h-[941px]"
                />
              </div>
            )}
            {!isLargeScreen && (
              <img
                src={require("../images/rainbow.svg").default}
                alt="Радуга"
                className="absolute w-[282px] h-[272px] top-[326px] left-[50px]"
              />
            )}
          </>
        )}
        {step === 5 && (
          <Animation>
            <CardQuest title="Щенячий патруль возвращается" />
            <CardQuest title="Стив Майнкрафт" />
          </Animation>
        )}
        {step === 6 && (
          <div>
            <div className="flex max-w-[832px] flex-wrap gap-x-5 gap-y-2 max-lg:justify-center">
              <PartyMeal
                mirror={false}
                meal="bg-pizza"
                title="Пицца"
                price={1000}
              />
              <PartyMeal
                mirror={isSmallScreen ? true : false}
                meal={
                  isSmallScreen ? "bg-french-fries-small" : "bg-french-fries"
                }
                title="Картошка-фри"
                price={1000}
              />
              <PartyMeal
                mirror={isSmallScreen ? false : true}
                meal={isSmallScreen ? `bg-nuggets-small` : `bg-nuggets`}
                title="Наггетсы"
                price={1000}
              />
              <PartyMeal
                mirror={true}
                meal="bg-drinks"
                title="Напитки"
                price={1000}
              />
              <PartyMeal
                mirror={false}
                meal="bg-cakes"
                title="Торты"
                price={1000}
              />
            </div>
            <div className="mt-5 flex justify-center">
              <ButtonCropped text="Продолжить" />
            </div>
          </div>
        )}
        {step === 7 && (
          <>
            <TotalPrice />

            <img
              src={require("../images/gifts-total-price-1.svg").default}
              alt="Подарки"
              className="absolute w-[618px] h-[585px] top-[182px] right-[868px]"
            />
            <img
              src={require("../images/gifts-total-price-2.svg").default}
              alt="Подарки"
              className="absolute w-[470px] h-[546px] top-[198px] left-[905px] max-xl:right-[0px] max-xl:hidden"
            />
          </>
        )}
        {step === 8 && (
          <>
            <Contacts />
            <img
              src={require("../images/party-step8.svg").default}
              alt="Вечеринка"
              className="absolute z-0 right-[936px] max-xl:left-0 bottom-[134px] max-md:hidden w-[442px] h-[436px]"
            />
            <img
              src={require("../images/calendar-step8.svg").default}
              alt="Вечеринка"
              className="absolute z-0 right-[-159px] bottom-[91px] max-xl:hidden w-[544px] h-[495px]"
            />
          </>
        )}
      </Modal>
    </div>
  );
});

export default App;
