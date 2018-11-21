var readline = require("readline-sync");
var spaceType = require('./spaceType.js');
var space = require('./space.js');
var player = require('./player.js');
var dict = require("dict");
var players = []; 
var board = [];
var bank = {
	inventory : new dict({})
};

/************************/
// Inventory
/************************/
 
function outputCurrentInventory(player, description) {		
	console.log("Player #" + player.ordinal + " has " + player.inventory.get("silver",0) + " silver coins");
///  console.log(" You now have...calculating... " + currentPlayer.inventory.get("silver",0) +" silver coins!");
}

/************************/
// Back to Start
/************************/

function backToStart(player){
	console.log("BACK TO START :P!!");
	player.space = START_SPACE;
}



/************************/
// Adding Money
/************************/

	

function addPlayerMoneyRound(player)  {
	addPlayerMoney(player,"silver",SILVER_PER_ROUND)
}

function addPlayerMoney(player,type,amount){
	player.inventory.set(type, player.inventory.get(type, 0) + amount);
}

/************************/
// Player Move
/************************/
function handlePlayerMove(player,number) {
	player.space += number; 
}



/************************/
// Roll Dice
/************************/

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rollDice() {
	return [getRandomInt(1,6), getRandomInt(1,6)];
}

/************************/
// Game Loop Over
/************************/

function isGameOver() {
	var isOver = false;
	players.forEach(p => { if (board[p.space].spaceType.name == "end") isOver = true; });	
	return isOver; 
}


/************************/
// Constants
/************************/


const BANK_GOLD_START = 30;
const BANK_SILVER_START = 75;
const PLAYER_GOLD_START = 1;
const PLAYER_SILVER_START = 5;
const SILVER_PER_ROUND = 1;
const START_SPACE = 0

/************************/
// lay out the board
/************************/


var spaceTypes = dict({
	"start"  : new spaceType("start", 1, "Brown", "", []),
	"normal" : new spaceType("normal", 1, "Green", "", []),
	"elbacko": new spaceType("elbacko", 3, "Red", "", []),
	"wagon"  : new spaceType("wagon", 1, "Mauve", "", []),
	"alamo"  : new spaceType("alamo", 1, "Brown", "", []),
	"end"    : new spaceType("end", 3, "Brown", "", [])
});




for (var i = 0; i <= 77; i++) {
	var newSpace = new space(i);
	if (i == 0) {
		newSpace.spaceType = spaceTypes.get("start");

	} else if (i == 6||i == 12|| i==17 ||i ==30 || i == 41||
		i==50||i==57||i==61||i==67||i==73) {
		newSpace.spaceType = spaceTypes.get("elbacko");

	} else if (i == 21||i == 25||i==36)	{
		newSpace.spaceType = spaceTypes.get("wagon")

	} else if (i==53){
		newSpace.spaceType = spaceTypes.get("alamo")
	
	} else if (i==77){
		newSpace.spaceType = spaceTypes.get("end")

	} else {
		newSpace.spaceType = spaceTypes.get("normal");
	}
	console.log("Space " + i + ": " + newSpace.spaceType.name);
	board.push(newSpace);
}

/***************************/
// loading the bank
/***************************/


bank.inventory.set("gold", BANK_GOLD_START);
bank.inventory.set("silver", BANK_SILVER_START);

/************************/
// Creating the Bank
/************************/


bank.inventory.set("silver", 120);
bank.inventory.set("gold", 35);





/***************************/
//Ask how many players
/***************************/

var playerCount = readline.question("How many players?");
console.log("");

/***************************/
//Create the Players
/***************************/


for (var p = 1; p <= playerCount; p++) {
	var newPlayer= new player(p);

	newPlayer.inventory.set("gold", PLAYER_GOLD_START);
	newPlayer.inventory.set("silver", PLAYER_SILVER_START);

	console.log("Player #" + p);

	// push adds something to an array
	players.push(newPlayer);
}

/************************/
// Game Loop
/************************/

var playerPointer = 0;

while (!isGameOver()) {
	var currentPlayer = players[playerPointer];
	var roll = rollDice();
	console.log("Rolled: " + roll[0] + ", " + roll[1]);
	console.log("Player" + players[playerPointer].ordinal + "turn");

	handlePlayerMove(currentPlayer, roll[0] + roll[1]);

	playerPointer++;
	if (playerPointer >= playerCount) {
		playerPointer = 0;
	}

	addPlayerMoneyRound(currentPlayer);
	outputCurrentInventory(currentPlayer);
	
}
