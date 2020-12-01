// Code your solution here
function findMatching(drivers, string){
    return drivers.filter(function (el) {
        return el.toLowerCase().indexOf(string.toLowerCase()) !== -1
    })
}

const fuzzyMatch = (array, string) => {
    return array.filter(x => x.slice(0, string.length) === string)
}

function matchName(drivers, string){
    return drivers.filter(n => n.name === string)
}