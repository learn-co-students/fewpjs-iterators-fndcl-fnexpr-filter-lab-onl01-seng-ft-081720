// Code your solution here


function findMatching(driversArray, driverString) {
    return driversArray.filter( driver =>  {
        return driver.toLowerCase() === driverString.toLowerCase()
    })
}


// RESOURCE: https://www.youtube.com/watch?v=eqPYvrxLm4c
        // indexOf()      -vs-        lastIndexOf()
function fuzzyMatch(driversArray, lettersString) {
    return driversArray.filter( driver => {
        return driver.toLowerCase().indexOf(lettersString.toLowerCase()) === 0
})
}


function matchName(driversObjArray, driverString) {
    return driversObjArray.filter( driver => {
        return driver["name"] === driverString
    })
}
