// Code your solution here
function findMatching(drivers, string) {
    return drivers.filter( possibleMatch => 
        possibleMatch.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(possibleMatch =>
        possibleMatch[0] === string[0])
}

function matchName(drivers, string) {
    return drivers.filter(possibleMatch => 
        possibleMatch.name === string)
}