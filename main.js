  // CONST & LET

// let name = 'John';
// let test;

// console.log(name);

// name = 'Jack';

// console.log(name);

// const person = {
//   name: 'John',
//   age: 33
// };

// console.log(person);
// person.name = 'Jack';
// console.log(person);

// const numbers = [1,2,3,4];
// console.log(numbers);
// numbers.push(5);
// console.log(numbers);
// numbers.push(3);
// console.log(numbers);
// numbers.push(7);
// console.log(numbers);
// // inserts number at beginning
// numbers.unshift(10);
// console.log(numbers);

  // ARROW FUNCTIONS

// //REGULAR FUNCTION
// function sayHello() {
//   console.log('hello');
// }
// sayHello();

  //ARROW FUNCTION
// const sayHello = () => {
//   console.log('Hello')
// }
// sayHello();

// //ARROW FUNCTION WITH PARAMETERS
// const sayHello = (name) => {
//   console.log('Hello '+ name);
// }
// sayHello('Brad');

//ARROW FUNCTION WITH PARAMETERS AND TEMPLATE LITERALS (TEMPLATE STRINGS) so you dont have to concatinate strings like = console.log('Hello '+ name);
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

// const sayHello = (name) => {
//   console.log(`Hello ${name}`);
// }
// sayHello('Brad');

// // FOREACH (loop array and return fruit with index)
const fruits = ['Apples', 'Oranges', 'Grapes'];

fruits.forEach((fruit, index) => {
  console.log(fruit, index);
});

// MAP (map array and remove last letter with slice. Then make all letters uppercase)
const singleFruit = fruits.map((fruit) => fruit.slice(0,-1).toUpperCase());

console.log(singleFruit);

// FIlTER (use filter to make a new array without the person with id = 2)
const people = [
  {id: 1, name: 'Karen'},
  {id: 2, name: 'Bob'},
  {id: 3, name: 'Sharon'}
];

const people2 = people.filter((person) => person.id !== 2);
console.log(people2);

// SPREAD 
// use spread operator to make a copy of arr and and 4 to end of the copy named arr2

const arr = [1,2,3];
const arr2 = [...arr, 4];

console.log(arr2);

// use spread operator to make a copy og arr and then use filter to remove the number 2
const arr3 = [...arr.filter((num) => num !== 2)];

console.log(arr3);


// use spread operator to make a copy of person1 and make a person2 with the information from person1 with added email

const person = {
  name: 'Brad',
  age: 36
}
console.log(person);

const updatedPerson = {
  ...person,
  email: 'brad@gmail.com'
}
console.log(updatedPerson);

// DESTRUCTURING

const profile = {
  name: 'John Doe',
  address: {
    street: ' 40 Main st',
    city: 'Boston'
  },
  hobbies: ['movies','music']
};
// pulling name, address and hobbies out of profile
const { name, address, hobbies } = profile;
// pulling street and city out of address in profile
const { street, city } = profile.address

console.log(name, street, city, hobbies[0]);

// CLASSES 
// Classes can have properties and methods(functions)

class Person {
  //use constructor method
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and  I am ${this.age}`;
  }
}

//Instantiate new object
const person1 = new Person('John', 33);
//Instantiate new object
const person2 = new Person('Sara',28);

console.log(person1.age, person2);

console.log(person1.greet());
console.log(person2.greet());


// SUBCLASSES
class Customer extends Person {
  constructor(name, age, balance) {
  // use super to inherit properties from Person
    super(name, age);
    this.balance = balance;
  }
}
//Instantiate new object
const customer1 = new Customer('Kevin', 32, 300)

console.log(customer1);