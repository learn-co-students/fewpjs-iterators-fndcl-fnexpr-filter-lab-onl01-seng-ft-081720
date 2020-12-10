function findMatching(drivers,name) {
   let matching =  drivers.filter(function(n){
      return n.toUpperCase() === name.toUpperCase()
   })
   return matching
}

function fuzzyMatch(drivers,name) {
    let fuzzy = drivers.filter(function(n) {
        return n.slice(0,name.length).toUpperCase() === name.toUpperCase()
    })
    return fuzzy
}

function matchName(drivers,name) {
    let match = drivers.filter(function(n){
      return n.name.slice(0,name.length).toUpperCase() === name.toUpperCase()
    })
    return match
}