import Modal from "@components/modal";
import Programs from "@components/programs";
import Card from "@components/card";
import Date from "@components/date";
import { observer } from "mobx-react-lite";
import counterStep from "../stores/storeStep";
import CountGuest from "./countGuest";

const App = observer(() => {
  const { step } = counterStep;

  let stepNameCurrent;
  let titleModal;

  switch (step) {
    case 1:
      stepNameCurrent = "Программа";
      titleModal = "Праздничные программы";
      break;
    case 2:
      stepNameCurrent = "Гости";
      titleModal = "Сколько будет гостей?";
      break;
    case 3:
      stepNameCurrent = "Даты";
      titleModal = "Выберите подходящую дату";
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
      </Modal>
    </div>
  );
});

export default App;
