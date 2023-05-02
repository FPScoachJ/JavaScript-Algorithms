//Write a function that takes a string as input and returns true if the string is a palindrome (a word, phrase, or sequence that reads the same backwards as forwards).

const str1 = "abba";


function reverseStr(str1) {
  const splitStr1 = str1.split("");
  const reverseStr1 = splitStr1.reverse();
  reverseStr1 = str1.join("");
  if (reverseStr1 === str1) {
    return true;
  } else {
    return false;
  }
}

reverseStr(str1);

// using built in methods
function palindromeChecker(str) {
  const reversedWord = str.split("").reverse().join("");
  if (reversedWord === str) {
    return true;
  } else {
    return false;
  }
}
// reverse loop
function palindromeChecker2(str) {
  let reversedString = "";
  for (let index = str.length - 1; index >= 0; index--) {
    reversedString += str[index];
  }
  if (reversedString === str) {
    return true;
  } else {
    return false;
  }
}
// one liner
const isPalindrome = (str) => str.split("").reverse().join("");

console.log(palindromeChecker2("racecar"));
console.log(palindromeChecker2("book"));
console.log(palindromeChecker2("tacocat"));