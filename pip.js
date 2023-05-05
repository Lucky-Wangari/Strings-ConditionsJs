// Write a function that takes a string as input and returns the number of vowels in the string
function addVowels(sentence);
sum = 0
vowels = "a","e","i","o","u";
for(let i = 0; i < sentence.length; i++){
if (i == vowels){
sum += sentence[i]
}
return sum
}

sentence2 = "Today is monday."
sentence3 = sentence2(addVowels)
console.log(sentence3)

//Write a function that takes an array of numbers as input and returns the sum of all the numbers
function addition(numbers);
sum = 0
for(let i = 0; i < numbers.length; i++){
    sum += numbers[i]
}
return sum


//Write a function that takes two numbers as input and returns true if their sum is greater than 100,
// And false otherwise
function addUp(a,b){
    let sum = a + b
    if(sum > 100){
        return true
    } 
    else {
        return false 
    }  
   
}

// Write a function that takes in a array of numbers as a parameter and returns the second largest number in the array

function second_largest(numbers);

    let largest = 0
    let largest2 = 0
    for(let i = 0; i < numbers.length; i++){
        if( numbers[i] != largest && numbers[i] == largest2 ){
            return numbers[i]
        }
    } 


// Write a function that takes a string as a parameter and returns true if the string is a palindrome and false otherwise
function sentence(string);
   let string1 = string.split('').reverse().join('')
   if(string == string1){
     return true
   } else{
    return false
   }