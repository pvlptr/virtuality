export class Settings {
  public slowMotion:boolean;
  public constantDelay:number;
  public randomDelay:number;

  constructor() {
    this.slowMotion = false;
    this.constantDelay = 1000;
    this.randomDelay = 1500;
  }

  calculateDelay():number {
    if (this.slowMotion) {
      return this.constantDelay + this.randomDelay * Math.random();
    } else {
      return 0;
    }
  }

}
