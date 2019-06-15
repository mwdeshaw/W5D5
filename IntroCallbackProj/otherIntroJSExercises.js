//addNumbers
const readline = require('readline');
const reader = readline.createInterface({

  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft === 0) {
    console.log("NUMNUMNUM I'M FULL NOW!")
    return completionCallback(sum);
  }
  if (numsLeft < 0) {
    return console.log("Invalid number!");
  }

  reader.question("FEED ME ANY NUMBER", function (inputNum) {
      console.log(`You fed me ${inputNum}`);

    numsLeft -= 1;
    let inputInt = parseInt(inputNum, 10);
    sum += inputInt;
    console.log(`Current sum is ${sum}`);
    addNumbers(sum, numsLeft, completionCallback);
    });
}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));