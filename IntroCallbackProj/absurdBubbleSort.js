const readline = require('readline');
const reader = readline.createInterface({
  
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
  console.log("Test");
  reader.question(`Is ${el1} > ${el2} (type Yes or No)?`, function (yesOrNo) {
    if (yesOrNo === 'Yes') {
      callback(true);
    } else {
      callback(false);
    }
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i === arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
  } else if (i < arr.length -1) {
      askIfGreaterThan(arr[i], arr[i + 1], function (isGreaterThan) {
        if (isGreaterThan) {
          let swap1 = arr[i];
          let swap2 = arr[i+1];
          arr[i] = swap2;
          arr[i+1] = swap1;
          madeAnySwaps = true;
          innerBubbleSortLoop(arr,i+1, madeAnySwaps, outerBubbleSortLoop);
        } else {
          innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
        }
      });
    }
  }

function absurdBubbleSort(arr, sortCompletionCallback) {
  let madeAnySwaps = true;
  let i = 0;
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps===true) {
      madeAnySwaps = false;
      innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
    } else {
      return sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(madeAnySwaps);
}

// absurdBubbleSort([3, 2, 1], function (arr) {
  
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });