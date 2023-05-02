//Write a function that takes a string as input and returns true if the string is a palindrome (a word, phrase, or sequence that reads the same backwards as forwards).

let str1 = "abba";
let str2 = "tacocat";
let str3 = "abbc";

function reverseStr(str1) {
  let reverseStr1 = "";
  reverseStr2 = str1.reverse();
  if (reverseStr1 === str1) {
    return true;
  } else {
    return false;
  }
}

reverseStr(str1);
