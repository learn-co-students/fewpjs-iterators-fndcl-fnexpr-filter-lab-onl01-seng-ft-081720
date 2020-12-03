// Code your solution here
function findMatching(arr, string){
    return arr.filter(a => {return a.toLowerCase() == string.toLowerCase()})
}

function fuzzyMatch(arr, string){
    return arr.filter(a => a.toLowerCase().indexOf(string.toLowerCase()) == 0)
}

function matchName(arr, string){
    return arr.filter(a => a.name.toLowerCase() == string.toLowerCase())
}