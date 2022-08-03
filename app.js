// Declaring a variable
//Keywowrd identifier/Variable

var firstName  = 'Desmond'; //string datatypes
let lastName = 'Agbesi';    //string datatypes
let age = 10;               //number datatypes
let isSingle = true;        //boolean daatatypes
let children = ['Bright', 'Bless', 'Dorothy', 'David']; //arrays
let others = {
  favColor: 'Red',
  favSport: 'Football',
  favFood: 'Waakye'
}                           //objects
const fullName = firstName + " " + lastName; //concantenation
const mySelf = ` My name is ${fullName}. I am ${age} years old. I come from `; //string interpolation

// console.log(mySelf);


//STRINGS
let sentence = 'This is a story of a brother, who slept and woke up in forever-land. He looked around, no thing familiar, he wondered how he got to be there. He took walk and around the city, and saw this brick house with small door';
console.log(sentence.length);
console.log(sentence.split("."));
console.log(sentence.replace("walk", "a walk"))
console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());
console.log(sentence.startsWith('T'));
console.log(sentence.endsWith('z'));
console.log(sentence.includes('brother'));

ARRAY
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

console.log(days.length);

let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

days = days.push('Staturday');
console.log(days); // this will return the number of items in an arrary after it has updated the list


let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

days.push('Staturday');// adds new items to an array from the back
console.log(days);     // returns the whole items in the array after it has added a new item
console.log(days.pop()); //removes the last item in an array (works from the back)

console.log(days.shift()) // this is same as push but adds items infront of the array
console.log(days.unshift()) // this is same as pop but removes items infront of the array

console.log(days.indexOf('Wednesday'));// this is to get the index of the items from the list
console.log(days[4]); // to find the item at the specified index

days[0] = 'Sunday'; // replaces item in at the specified index
 console.log(days);

//OBJECTS
 
let person = {
  firstName: 'Bless',
  lastName: 'Adzorlolo',
  age: 25,
};

console.log(person.firstName);
console.log(Object.keys(person)); //shows the keys declared
console.log(Object.values(person));
console.log(Object.entries(person));
console.log(Object.length(person));


