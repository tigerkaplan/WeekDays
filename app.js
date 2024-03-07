// let number = prompt("Please enter a number between 1 to 5");

// switch (number) { // "1" "2" "3" "4" "5" // string
//   case "1":
//     // codes
//     console.log("Entered number is 1");
//     break;
//   case "2":
//     console.log("Entered number is 2");
//     break;
//   case "3":
//     console.log("Entered number is 3");
//     break;
//   case "4":
//     console.log("Entered number is 4");
//     break;
//   case "5":
//     console.log("Entered number is 5");
//     break;

//     default:
//     console.log("Please enter a number between 1 to 5");
//     break;
// }

/////////////////////////////////////////////////

let newLine = "\r\n";

let text =
  "1- Monday" +
  newLine +
  "2- Tuesday" +
  newLine +
  "3- Wednesday" +
  newLine +
  "4- Thursday" +
  newLine +
  "5- Friday" +
  newLine +
  "6- Saturday" +
  newLine +
  "7- Sunday" +
  newLine;

let value = prompt("Please make a choice");
switch (value) {
  case "1":
    console.log("It is Monday");
    break;
  case "2":
    console.log("It is Tuesday");
    break;
  case "3":
    console.log("It is Wednesday");
    break;
  case "4":
    console.log("It is Thursday");
    break;
  case "5":
    console.log("It is Friday");
    break;
  case "6":
    console.log("It is Saturday");
    break;
  case "7":
    console.log("It is Sunday");
    break;
  default:
    console.log("Please make a choice");
    break;
}
