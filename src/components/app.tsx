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

  const isSmallScreen = windowWidth < 768;

  const { step } = counterStep;

  const titleStep3 = isSmallScreen
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
        {/* {step === 1 ? (
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

            {!isSmallScreen && (
              <img
                src={require("../images/gifts.svg").default}
                alt="Подарки"
                className="absolute max-w-[1353px] h-full top-[100px] right-[-60px]"
              />
            )}
            {!isSmallScreen && (
              <img
                src={require("../images/rainbow.svg").default}
                alt="Радуга"
                className="absolute w-[282px] h-[272px] top-[40%] left-[15px]"
              />
            )}
          </>
        )} */}
        {/* {step === 5 && (
          <Animation>
            <CardQuest title="Щенячий патруль возвращается" />
            <CardQuest title="Стив Майнкрафт" />
          </Animation>
        )} */}
        {/* {step === 6 && ( */}
          <PartyMeal mirror={false} meal="pizza" title="Пицца" price={1000} />
        {/* )} */}
      </Modal>
    </div>
  );
});

export default App;
