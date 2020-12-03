
function findMatching(drivers, string) {
    return drivers.filter( d => d.toUpperCase() == string.toUpperCase() )
}

function fuzzyMatch(drivers, string) {
    return drivers.filter( d => d.startsWith(string))
}

function matchName(drivers, string) {
    return drivers.filter( d => d.name == string )
}