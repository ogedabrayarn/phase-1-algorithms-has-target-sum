function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i = 0; i < array.length; i++){
    const pairSum = target - array[i]
    for(let j = 0 ; j < array.length; j++){
      if(array[j] === pairSum) return true;
    }
  }
   return false;
}


/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3))

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5))

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
  
  console.log("Expecting: false");
  console.log("=>", (hasTargetSum([4], 5)))
}

module.exports = hasTargetSum;
