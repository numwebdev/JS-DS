/*
 * Filename: Fizz-Buzz.js
 * Path: problems\Fizz-Buzz
 * Created Date: Thu, October 7th 2021, 7:14:54 am
 * Author: Num-Dev
 * 
 * Copyright (c) 2021 Num-Dev
 */

const fizzbuzzArr = [];
let i = 1;

const FizzBuzzFun = () => {
    while (i <= 100) {
        if ((i % 3) == 0 && (i % 5) == 0) {
            console.log('FizzBuzz');
            fizzbuzzArr.push('FizzBuzz');
        } else if ((i % 3) == 0) {
            console.log('fizz');
            fizzbuzzArr.push('fizz');
        } else if ((i % 5) == 0) {
            console.log('buzz');
            fizzbuzzArr.push('buzz');
        } else {
            console.log(i);
            fizzbuzzArr.push(i);
        }
        i++;
    }
    return fizzbuzzArr;
}

console.log(FizzBuzzFun());