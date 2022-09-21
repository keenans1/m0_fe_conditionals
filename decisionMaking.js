// This exercise file is a little different from the others you have seen so far. Read carefully!
// Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
// Spend some time changing the variables and running the file to see how the story changes.


var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  "You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!";
} else if (bearChoice === 2) {
  "You tell the bear the " + bearClothing + " is too small and it starts to cry!";
} else if (bearChoice === 3) {
  "You run as fast as you can into the next room. It's full of snakes!";
} else {
  "You stay with the bear and become it's best friend!";
}


// Questions
// 1. In English, using technical vocabulary, describe what is happening between lines 12 and 16.

// line 12 is checking if the doorchoice is number 1, if it is then the bear clothing variable is set to hat
// but if the door choice is any nunber except 1, then the bear clothing string is set to scarf

// 2. What variable has a new value assigned to it after the first if statement executes?

// bearClothing

// 3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

// scarf

// 4. In English, using technical vocabulary, describe what is happening between lines lines 25 and 33.

// if the door choice is equal to 1, the code executes and no other else if/else is checked, if it is not 1 then the next else if is checked
// if the door choice is equal to 2, the code executes and no other else if/else is checked, if door choice != 2, the next condition is checked
// if the door choice is equal to 3, the code executes and the else is not checked.
// if the door choice is not equal to 1 2 or 3, the last else statement is ran
// in a nutshell the code checks from top to bottom if the door choice meets any conditions, and if it doesnt, the else is ran
// but if a condition is met before the else, that condition is ran and the code will terminate

// because bear choice is set to 1, the if statement (and only the if statement) is executed
// so the final output will be "You offer the bear your hat and the bear shows you a secret passage out!"

// 5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

// "You run as fast as you can into the next room. It's full of snakes!"

// 6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

// "You tell the bear the scarf is too small and it starts to cry!"

// 7. What is your favorite ending?

// "You stay with the bear and become it's best friend!"
