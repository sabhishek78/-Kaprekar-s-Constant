// Kaprekar's Constant
// Allowed Time: 50 mins

// 6174 is known as one of Kaprekar's constants, after the Indian mathematician D. R. Kaprekar. Number 6174 is notable for 
// the following rule:

// - Take any four-digit number, using at least two different digits (leading zeros are allowed).
// - Arrange the digits in descending and then in ascending order to get two four-digit numbers, adding leading zeros if necessary.
// - Subtract the smaller number from the bigger number.
// - Go back to step 2 and repeat.

// The above process, known as Kaprekar's routine, will always reach its fixed point, 6174, in at most 7 iterations. 
// Once 6174 is reached, the process will continue yielding 7641 – 1467 = 6174. 

// For example, choose 3524:
// `
// 5432 – 2345 = 3087
// 8730 – 0378 = 8352
// 8532 – 2358 = 6174
// 7641 – 1467 = 6174
// `

// Write a recursive function that will return the number of times it will take to get from a number to 6174 (the above example would equal 3).


// 495 would produce the following: 
// 0495 to 9540 - 459, 9081 to 9810 - 189, 9621 to 9621 - 1269, 8352 to 8532 - 2358 answer: 4

// # Examples

// ```
// kaprekar(6621) // 5
// kaprekar(6554) // 4 
// kaprekar(1234) //3
// ```

// Notes

// If the subtracted number is less than 1000, add an extra zero to that number. The number 1111 will equal 0000, so this number (1111) is invalid
function sort(text) {
    return text.split('').sort().join('');
}
function padToFour(number) {
  return number.padStart(4,'0');
}
function reverseString(str) {
    return str.split("").reverse().join("");
}
function kaprekar(number){
  let  count=0;
   if(number===undefined || isNaN(number)){
    return "invalid input";
  }
  else if(number===0){
    return 0;
  }
  else{
    return kaprekarIterate(number,count);
  }
 
}
function kaprekarIterate(diff,count){
let string=padToFour(sort(diff.toString()));
console.log('string='+string);
let number=Math.abs(parseInt(string)-parseInt(reverseString(string)));
count++;
return number!==6174?kaprekarIterate(number,count):count;
}

console.log(kaprekar(95));
console.log(kaprekar(3524));
console.log(kaprekar(6554));
console.log(kaprekar(1234));
console.log(kaprekar());
console.log(kaprekar(0));
console.log(kaprekar(000));
console.log(kaprekar(1));
console.log(kaprekar('1'));
console.log(kaprekar('a12'));