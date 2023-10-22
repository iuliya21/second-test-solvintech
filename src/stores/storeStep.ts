import { makeAutoObservable } from 'mobx';

class StepCounter {
  step = 1;

  constructor() {
    makeAutoObservable(this);
  }

  next = () => {
    this.step += 1;
  }

  prev = () => {
    this.step -= 1;
  }
}

export default new StepCounter();