// Given an array of strings, use a function to reverse 
//all the elements in the string in ascending order and 
//the specific elements in descending order
function reversing(arr){
  const reversed = arr.map(item => {
    const reversed2 = item.split('').reverse().join('');
    return reversed2;
  
})
}


// Given an array of objects, each object representing a person with a 
//name and age property, write a function that returns the sum of all people 
//who are less than 18 years.
const people = [
  { name: 'Alice', age: 17 },
  { name: 'Eunice', age: 22 },
  { name: 'Charlie', age: 14 },
  { name: 'Max', age: 19 },
];

function sumOfUnder18(details);
 sum = 0
 let addition = people.filter(item =>{
     if(people.age < 18){
      return sum += people.age;
     }
 })

let totalSum = sumOfUnder18(people)
console.log(totalSum)

// Using JS functions and an array of numbers, return positive if 
// an element within the array is positive, negative if an element is 
// negative, else zero
// let numbers = [1,-2,7,-9,8,-6,,3,4,5]

function finding(numbers1)
 let  numbers = numbers1.map(item => {
  if(item < 0){
    return "negative"
  } else if(item > 0){
    return "positive"
  } else {
    return "zero"
  }
 });

let numerals = finding(numbers1);
console.log(numerals) 

// Given an array of objects, where each object represents 
//an employee with an id, name, and salary property, write a 
////function that returns a new array of employee objects sorted by 
//their salary in ascending order.

function employeeSalary(arr){
const sorted = arr.sort((sideA, sideB) => {
  return sideA.salary - sideB.salary;
});

return sorted;
}





