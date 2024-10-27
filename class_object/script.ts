class Airpod {
  price = 2500; // Variable, yaha hum  let nahi lagate hai
  image = "image/airpod";
  color = "white";

  playmusic() {
    //method, yaha aage hum function nahi likhte hai
    console.log("Music Playing...");
  }

  switchMode(mode: string) {
    console.log(mode);
  }
}

// Example 2

class AirConditioner {
  color = "white";
  category = "AC";
  compony = "Voltus";
  temperature = 22;

  turnOnAc() {
    console.log("Turning on...");
    console.log("Turn on");
  }

  turnOffAc() {
    console.log("Turning off...");
    console.log("Turn off.");
  }

  raiseTemp() {
    this.temperature++;
    console.log("Raise Temp by 1", this.temperature);
  }

  decreseTemp() {
    this.temperature--;
    console.log("decrese temp by 1", this.temperature);
  }
}

// Example 3

type data = string | null;

class Pendrive {
  company = "hp";
  price = 1200;
  Data: null | string = null;

  putData(Data: data) {
    console.log(`Putting some data ${Data}`);
    this.Data = Data;
  }

  getData() {
    console.log(this.Data);
  }
}

let pn = new Pendrive();
pn.putData("212");
pn.getData();

pn.putData(null);
pn.getData();

// class extends

class Food {
  price = 1200;

  eat() {
    console.log("Eating food");
  }
}

class Mithai extends Food {
  name = "Mithai";
  eat(): void {
    console.log("Eatnig mithai");
  }
}

let m = new Mithai();
m.eat();
