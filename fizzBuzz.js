// function fizzBuzz(i){
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("fizz buzz");
//   } else if (i % 3 === 0) {
//     console.log("fizz");
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//   } else console.log(i);
// }

// fizzBuzz(15);

function fizzBuzz(i){
  switch (true) {
    case (i % 3 === 0 && i % 5 === 0):
      console.log("fizz buzz");
      break;
    case (i % 3 === 0):
      console.log("fizz");
      break;
    case (i % 5 === 0):
      console.log("buzz");
      break;
    default:
      console.log(i);
      break;
  }
}

fizzBuzz(99);