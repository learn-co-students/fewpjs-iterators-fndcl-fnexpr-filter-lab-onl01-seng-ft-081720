// Code your solution here
function findMatching (drivers, search) {
    return drivers.filter(match =>
        match.toLowerCase() === search.toLowerCase()
    )
}

function fuzzyMatch(array, search) {
    return array.filter(match =>
        match.toLowerCase().indexOf(search.toLowerCase()) === 0
        )
}

function matchName(array, search){
    return array.filter(match =>
        match.name === search
        )
}