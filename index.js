// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching (drivers, str) {
    return drivers.filter(driver => driver.toLowerCase ()=== str.toLowerCase());
}
console.log (findMatching(drivers, 'Bobby'))

function fuzzyMatch (drivers, str) {
    return drivers.filter (driver => driver.startsWith(str));

}

function matchName (drivers, str) {
    return drivers.filter (driver => driver.name ===str);
}