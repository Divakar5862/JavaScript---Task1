// Displaying a player's health via object properties

var player1;
var player2;
var showPlayerHealth;

showPlayerHealth = function (playerName, playerHealth, playerHealthMultiplier) {
    console.log(playerName + " has health " + (playerHealth * playerHealthMultiplier));
};

player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50,
    healthMultiplier: 2
};

player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40,
    healthMultiplier: 1.5
};

showPlayerHealth(player1.name, player1.health, player1.healthMultiplier);
showPlayerHealth(player2.name, player2.health, player2.healthMultiplier);



/* Further Adventures
 *
 * 1) Add a new property to the player objects
 *    called healthMultiplier.
 */

// Already done above



/* 2) Add a third parameter to the definition
 *    of the showPlayerHealth function
 *    called playerHealthMultiplier
 */

// Already done above



/* 3) Update the function so that the health
 *    displayed is first multiplied by
 *    the health multiplier.
 */

// Already done above



/* 4) Add the player's healthMultiplier property
 *    as a third argument to the two calls
 *    to the showPlayerHealth function.
 */

// Already done above