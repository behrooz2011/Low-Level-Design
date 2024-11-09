// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

class Elevator {
  constructor(totalFloors) {
    this.totalFloors = totalFloors;
    this.direction = "up";
    this.upQ = [];
    this.downQ = [];
    this.currentFloor = 0;
    this.floorList = [];
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    // this.doorStatus = "closed"
  }
  requestFloor(floor) {
    console.log("Current Floor is: ", this.currentFloor);
    if (!this.floorList.includes(floor)) {
      this.floorList.push(floor);
    }
    this.floorList.sort((a, b) => a - b);
    console.log("floorList: ", this.floorList);
  }

  logStringsEveryFourSeconds() {
    if (this.floorList.length > 0) {
      setTimeout(() => {
        this.floorList.sort((a, b) => a - b);
        console.log("--floorList Exists --", this.floorList);
        if (this.floorList[0]) {
          this.currentFloor = this.floorList[0];
          console.log("curr floor:", this.currentFloor);
          this.floorList.shift();
        }
        this.logStringsEveryFourSeconds();
      }, 4000);
    }
  }

  askForInput() {
    this.rl.question("Enter the floor number: ", (userInput) => {
      if (userInput.toLowerCase() === "exit") {
        rl.close(); // Close the readline interface
        return;
      }
      this.requestFloor(Number(userInput)); // Add the new string
      this.logStringsEveryFourSeconds();
      this.askForInput(); // Ask for input again
    });
  }
  start() {
    this.askForInput();
  }
}
let elev = new Elevator(10);
elev.start();
// elev.requestFloor(2)
// elev.requestFloor(4)
// elev.requestFloor(3)
// elev.requestFloor(2)
// elev.requestFloor(2)
