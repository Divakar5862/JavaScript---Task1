// A function that adds properties to an object

var planet1 = { name: "Jupiter", radius: 69911 };

var calculateSizes = function (planet) {
    var r = planet.radius;
    planet.area = 4 * 3.142 * r * r;
    planet.volume = 4 * 3.142 * r * r * r / 3;
    planet.diameter = 2 * r; // add diameter property
};

var displaySizes = function (planet) {
    console.log(planet.name);
    console.log("surface area = " + planet.area + " square km");
    console.log("volume = " + planet.volume + " cubic km");
    console.log("diameter = " + planet.diameter + " km"); // display diameter
};

calculateSizes(planet1);
displaySizes(planet1);