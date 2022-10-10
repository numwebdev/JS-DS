const points = ["Banana", "Orange", "Coconut", "Mango"];

//sort an array in descending order
points.sort();

//reverse the array
points.reverse();


const num1 = [11, 2, 32, 5, 12];

//Creates a new array by performing a function on each array element
const num2 = numbers1.map(myFunction);
function myFunction(value, index, array) {
    return value * 4;
}

//Creates a new array with all array elements that passes a test
const num3 = num1.filter(myFunction);
function myFunction(value, index, array) {
    return value > 19;
}

//The every() method checks if all array values pass a test
let all1 = num1.every(myFunction);

function myFunction(value) {
    return value > 11;
}

//The some() method checks if some array values pass a test
let all2 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 13;
}
