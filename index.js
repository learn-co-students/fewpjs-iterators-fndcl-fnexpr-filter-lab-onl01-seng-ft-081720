// Code your solution here
function findMatching(arr, str) {
    return arr.filter(function (driver) {
        return driver.toLowerCase() === str.toLowerCase();
    });
};

function fuzzyMatch(arr, str) {
    return arr.filter(function(driver) {
        return driver.split("").splice(0, str.length).join("") === str;
    });
}

function matchName(arr, str) {
    return arr.filter(function(driverObj) {
        return driverObj["name"] == str;
    });
}