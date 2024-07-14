// Using existing objects in an array

var place1 = { name : "The Pyramids", country : "Egypt" };
var place2 = { name : "The Grand Canyon", country : "USA" };
var place3 = { name : "Bondi Beach", country : "Australia" };

var thisYear = [ place1, place2 ];
var nextYear = [ place3 ];

console.log(thisYear);
console.log(nextYear);

// 1) Add place1 to the nextYear array.
nextYear.push(place1);

console.log("After adding place1 to nextYear:");
console.log(thisYear);
console.log(nextYear);