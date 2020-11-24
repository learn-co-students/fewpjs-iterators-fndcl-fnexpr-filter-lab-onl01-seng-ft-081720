// Code your solution here
function findMatching(list,driver){
    return list.filter(dr => {
        return dr.toLowerCase() === driver.toLowerCase()
    })
}

function fuzzyMatch(list,letter){
    return list.filter(dr => {
        return dr.charAt(0).toLowerCase() === letter.charAt(0).toLowerCase()
    })
}

function matchName(list,name){
    return list.filter(dr => {
        return dr.name === name
    })
}