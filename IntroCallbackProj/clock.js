class Clock {
  constructor() {
    let x = new Date();
    this.hours = x.getHours();
    this.minutes = x.getMinutes();
    this.seconds = x.getSeconds();

    this.printTime();
    this._tick();
  }

  printTime() {
    this.seconds++;
    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes++;
    }
    if (this.minutes === 60) {
      this.minutes = 0;
      this.hours++;
    }
    if (this.hours > 24) {
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
    };
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    let boundPrintTime = this.printTime.bind(this);
    setInterval(function(){
      boundPrintTime();
    }, 1000);
  }
}

const clock = new Clock();