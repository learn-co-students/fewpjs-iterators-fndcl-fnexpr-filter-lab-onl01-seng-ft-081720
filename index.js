function findMatching(drivers, string){
    return drivers.filter (driver => driver.toLowerCase() === string.toLowerCase() )
    // let result = drivers.filter(driver => driver.name === driver )
    // if (result){
    //     return result.name
    //   }
    // arr.filter(n => {
    //     return ;

}

function fuzzyMatch(drivers, string){
    return drivers.filter(function(driver) {
        return driver.toLowerCase().startsWith(string.toLowerCase()) 
    })
}

function matchName(drivers, string){
    return drivers.filter(driver => driver.name === string )

}