// Code your solution here
function findMatching(drivers, str) {
    const result = drivers.filter(driver => driver.toLowerCase() === str.toLowerCase());
    return result
}

function fuzzyMatch(drivers, name) {
    const str = name.toLowerCase()
    const result = drivers.filter(driver => driver.toLowerCase().startsWith(str));
    return result
}

function matchName(drivers, name) {
    const result = drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
    return result
}