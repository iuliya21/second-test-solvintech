import { makeAutoObservable } from 'mobx';

class Order {
  programm = "";
  countChildren = 0;
  countAdult = 0;
  date = "";
  time = "";
  nameChild = "";
  birthday = "";
  male = "";
  animator = false;
  quest = "";
  pizza = 0;
  frenchFries = 0;
  nuggets = 0;
  drinks = 0;
  cakes = 0;

  constructor() {
    makeAutoObservable(this);
  }

  recordProgramm = (str: string) => {
    this.programm += str;
  }

}

export default new Order();