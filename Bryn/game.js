var readline = require("readline-sync");
var spaceType = require('./spaceType.js');
var space = require('./space.js');
var player = require('./player.js');
var dict = require("dict");

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isGameOver() {
	return false 
}

function rollDice() {

	console.log("Dice rolled! :)")

	return [getRandomInt(1, 6), getRandomInt(1, 6)];

	console.log(getRandomInt(1, 6));
}

var players = [];
var board = [];

// creating space types

var spaceTypes = dict({
	"start" : new spaceType("start", 1, "Brown", "", []),
	"normal" : new spaceType("normal", 1, "Green", "", []),
	"elbacko" : new spaceType("elbacko", 3, "Red", "", []),
	"wagon" : new spaceType("wagon", 1, "Green", "", []),
	"alamo" : new spaceType("alamo", 1, "Grey-Brown", "", []),
	"end" : new spaceType("end", 3, "Brown", "", [])
});

var bank = {
	inventory : new dict({})
};

//creating constants

const BANK_GOLD_START = 50;
const BANK_SILVER_START = 30;
const PLAYER_GOLD_START = 1;
const PLAYER_SILVER_START = 5;


/****************************/
// lay out the board
/****************************/

for (var i = 0; i <= 77; i++) {

	var newSpace = new space(i);
	if (i == 0) {
		newSpace.spaceType = spaceTypes.get("start");
	} else if (i == 6 || i == 12 || i == 17 || i == 30 || i == 41 || 
			i == 50 || i == 57 || i == 61 || i == 67 || i == 73) {
		newSpace.spaceType = spaceTypes.get("elbacko");
	} else if (i == 21 || i == 25 || i == 36){
	    newSpace.spaceType = spaceTypes.get("wagon");
	} else if (i == 55) {
		newSpace.spaceType = spaceTypes.get("alamo");
	} else if (i == 77) {
		newSpace.spaceType = spaceTypes.get("end");
	} else 
		newSpace.spaceType = spaceTypes.get("normal");


	console.log("Space " + i + ": " + newSpace.spaceType.name);
	board.push(newSpace);
}

/****************************/
// loading the bank
/****************************/
bank.inventory.set("silver", BANK_SILVER_START);
bank.inventory.set("gold", BANK_GOLD_START);



/****************************/
// Ask how many players
/****************************/

var playerCount = readline.question("How many players?");
console.log("");

//
// Create the players
//

for (var p = 1; p <= playerCount; p++) {

	var newPlayer = new player(p);

	newPlayer.inventory.set("gold", PLAYER_GOLD_START);
	newPlayer.inventory.set("silver", PLAYER_SILVER_START);

	console.log("Player #" + p);
	// push adds something to an array
	players.push(newPlayer);
}


// GAME LOOP! //

var playerPointer = 0;

while (isGameOver()) {

	rollDice();

	console.log("Player " + players[playerPointer].ordinal + "turn");
// console.log prints out a line 
	playerPointer++;
	if (playerPointer>= playerCount) { 
		playerPointer = 0;
	}
}

// ++ means add one to it	
// console.log is an action that prints things out (?)
// {} are a group of actions or things