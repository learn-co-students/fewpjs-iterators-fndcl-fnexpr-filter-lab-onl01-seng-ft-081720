// Code your solution here
function findMatching(arr, str) {
    return arr.filter(function (driver) {
        return driver.toLowerCase() === str.toLowerCase();
    });
};

function fuzzyMatch(arr, str) {
    return arr.filter(function(driver) {
        return driver.slice(0, str.length).toUpperCase() === str.toUpperCase();
    });
}

function matchName(arr, str) {
    return arr.filter(function(driverObj) {
        return driverObj["name"] == str;
    });
} 