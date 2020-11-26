function findMatching(arr, name){
    let newArr = arr.filter(function(x){
        return x.toUpperCase() === name.toUpperCase()
    })    
    return newArr
}

function fuzzyMatch(arr, str){
    let newArr = arr.filter(function(x){
        return x.slice(0, str.length).toUpperCase() === str.toUpperCase()
    })
    return newArr
}

function matchName(arr, str){
    let newArr = arr.filter(function(x){
        return x.name.slice(0, str.length).toUpperCase() === str.toUpperCase()
    })  
    return newArr
}