// Code your solution here
// let arr = [1, 2, 3, 4, 5, 6];
// let even = [];
// think of using .filter as using a for loop for(var i = 0; i < array.length; i++){
  // if (array[i] % 2 === 0) even.push(array[i]);
// }

// turns in this when using the .filter method
// let even = array.filter(n => {
//   return n % 2  === 0;
// });

function findMatching(drivers, string) {
  return drivers.filter(drivers => drivers.toLowerCase().indexOf(string.toLowerCase()) === 0 
  )
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(drivers => drivers.toLowerCase().indexOf(string.toLowerCase()) === 0 
  )
}

function matchName(drivers, string) {
  return drivers.filter(drivers => drivers.name === string )
}