function findMatching(drivers, string){
   let newDrivers = drivers.filter(n => {
       return n.toUpperCase() === string.toUpperCase();
   });
   return newDrivers

}

function fuzzyMatch(drivers, string){
    let match = drivers.filter(function(driver){
        return driver.split("").slice(0, string.length).join("") === string
    })
    return match
 }

 function matchName(drivers, string){
     return drivers.filter(function (driver){
         return driver.name === string
     })
}

// This function takes an array of drivers and a string as arguments. 
// In this function, each element of the drivers array is a JavaScript object that has a property of name. 
// The function should return each element whose name property matches the provided string argument.