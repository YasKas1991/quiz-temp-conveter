const person = {
  name: "John",
  age: 30,
  greet() {
    console.log(this);
    console.log(`Hi, I'm ${this.name}`);
  },
  greet2: () => {
    console.log(this);
    console.log(`Hi, I'm ${this.name}`);
  },
  greet3: function () {
    console.log(this);
    console.log(`Hi, I'm ${this.name}`);
  },

  // TODO: Use a nested object with nested methods
  greet4: {
    msg: "Good morning",
    sayHello() {
      console.log(this);
      console.log(`${this.msg} ${this.name}`);
    },
    saySomethingElse: () => {
      console.log(this);
      console.log(`${this.msg} ${this.name}`);