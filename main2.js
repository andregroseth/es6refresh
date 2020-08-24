// // CONST & LET
// let name = 'John';
// let test;

// name = 'Jack';

// const person = {
//   name: 'John',
//   age: 33
// }

// person.name = "Jack";
// console.log(`person.name = ${person.name}`)

// const nums = [1, 2, 3, 4];
// console.log(`nums = ${nums}`)
// nums.push(5);
// console.log(`nums.push(5) = ${nums}`);

// ARROW FUNCTIONS

// function sayHello() {
//   console.log('Say Hello function');
// }

// // basic arrow function
// const sayHello = () => {
//   console.log('Say Hello Function')
// }

// sayHello()

// one line arrow functions do not need {}
const sayHello = (name) => console.log('Say Hello Function ' + name);

// call sayHello function
sayHello('test')

// Create fruits array
const fruits = ['Apples', 'Oranges', 'Grapes'];

console.log('')
console.log('FOREACH:')
// FOREACH
console.log('Use FOREACH to create Fruit array:')
fruits.forEach((fruit, index) => console.log(fruit));

console.log('')
console.log('MAP:')
// MAP
console.log('Use MAP function to create a upper case single fruit array')
const singleFruit = fruits.map((fruit) => fruit.slice(0,-1).toUpperCase());
console.log(singleFruit)

// FILTER
console.log('')
console.log('FILTER:')
const people = [
  {id: 1, name: 'Karen'},
  {id: 2, name: 'Bob'},
  {id: 3, name: 'Sharon'},
]
console.log(people)
const people2 = people.filter(person => person.id !== 2);
console.log(people2);

// SPREAD 
console.log('')
console.log('SPREAD:')

const arr = [1,2,3];
console.log(arr)
const arr2 = [...arr, 4];
console.log(arr2);
const arr3 = [...arr.filter(num => num !== 2)]
console.log(arr3)

console.log('')
const person1 = {
  name: 'Brad',
  age: 36
};
console.log(person1);

const person2 = {
  ...person1,
  email: 'brad@gmail.com'
};

console.log(person2);

// DESTRUCTURING
console.log('')
console.log('DESTRUCTURING:')

const profile = {
  name: 'John Doe',
  address: {
    street: '40 Main st',
    city: 'Boston'
  },
  hobbies: ['movies', 'music']
};
// destructuring
const { name , address, hobbies } = profile;
const { street, city} = profile.address
// without destructuring
console.log(profile.name);
// with destructuring
console.log(name);
console.log(name, address, hobbies[0]);
console.log(city);

// CLASSES
console.log('')
console.log('CLASSES:')

class Person {
  // constructor is a method.
  // method is a function inside a class.
  // constructor runs automatically when you instantiate an object from a class.
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() { 
    return `Hello, my name is ${this.name} and I am ${this.age}`
  }

}

const person3 = new Person('John',33)
const person4 = new Person('Sara',28)

console.log(person3);
console.log(person4);

console.log(person3.greet());
console.log(person4.greet());

// SUBCLASSES 
console.log('')
console.log('SUBCLASSES')

class Customer extends Person {
  constructor(name, age, balance) {
    super(name, age);
    this.balance = balance;
  }

  info() {
    return (
      `${this.name} owes ${this.balance}`
      )
  }
}

const customer5 = new Customer('Kevin', 32, 300)

console.log(customer5);
console.log(customer5.info());






