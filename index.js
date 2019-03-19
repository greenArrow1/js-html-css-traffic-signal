// function Person (name, age){
// 	this.name = name;
//   this.age = age;
//   this.getNameAge = function() {
//   return `the name is ${this.name} and age is ${this.age}`;
//   }
// }

// var person1 = new Person('Json', 25);
// console.log(person1, person1.getNameAge());

// class Car{
// constructor (name, model){
// this.name = name;
// this.model = model;
// }
// get details (){
// return this.prepareDetails();
// }
// prepareDetails(){
// return `the details are ${this.name} and ${this.model}`;
// }
// }
// Car.prototype.abc =function (){
// return alert('wooya');
// };
// var car1 = new Car('Porche', 'cayman');
// console.log(car1);
// console.log(car1.details);
// car1.abc();
// document.write(car1.details);
import './style.css';
let red = document.getElementById('red');

let yellow = document.getElementById('yellow');
let green = document.getElementById('green');
let ready = 0;
let stop = 1;
let start = 0;
let count = 5;

function startFunc() {
  setInterval(() => {
     count = 5;
    if (ready) {
      red.setAttribute("style", "background-color: white;");
      yellow.setAttribute("style", "background-color: yellow;");
      green.removeAttribute("style", "background-color: white;");
      start = 1;
      ready =0;
    }
    else if (start) {
      red.setAttribute("style", "background-color: white;");
      yellow.setAttribute("style", "background-color: white;");
      green.setAttribute("style", "background-color: green;");
      start =0;
      stop =1;
    }
    else {
      red.setAttribute("style", "background-color: red;");
      yellow.setAttribute("style", "background-color: white;");
      green.setAttribute("style", "background-color: white;");
      ready = 1;
      stop =0;
    }
  }, 5000);
  setInterval(()=>{  
    count--;
    let app = document.getElementById('app').innerHTML = `Time remaining - ${count}`;
  },1000)
}

startFunc();
