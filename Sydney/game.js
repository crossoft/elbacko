var player = require('./player.js');
var spaceType = require('./spaceType.js');
var space = require('./space.js');
var dict = require('dict');
var readline = require("readline-sync");
var players = [];
var board = []; 
var bank = {
	inventory : new dict({})
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rollDice() {
	return [ getRandomInt(1, 6), getRandomInt(1, 6) ];
}

function isGameOver() {
	var  isOver = isOver;
	players.forEach(p => { if (board[p.space].spaceType.name == "end") isOver = true; });	
	return isOver ;
}

function addPlayerMoneyRound(player) {
	player.inventory.set("silver", player.inventory.get("silver",0) + 1);
}

function outputCurrentInventory(player, description) {
	console.log("player #" + player.ordinal +
		" has " + 
		player.inventory.get("silver",0) +
		" silver coins "
		);
	//console.log(currentPlayer.inventory.get("silver", 0) + " silver coins");
}

function backToStart(player){
	console.log("BACK TO START!!!");
	player.space = 0
}

function handlePlayerMove(player)



const BANK_GOLD_START = 50;
const BANK_SILVER_START = 78;
const PLAYER_GOLD_START = 1;
const PLAYER_SILVER_START = 5;
const START_SPACE = 0   

var spaceTypes = dict({
	"start" : new spaceType("start", 1, "Brown", "", []),
	"normal" : new spaceType("normal", 1, "Green", "", []),
	"elbacko" : new spaceType("elbacko", 3, "Red", "", []),
	"wagon" : new spaceType("wagon", 1, "Brown", "", []),
	"alamo" : new spaceType("alamo", 1, "Green", "", []),
	"end" : new spaceType("end", 1, "Brown", "", [])
});
		
// lay out the board
for (var i = 0; i < 10; i++) {
	var newSpace = new space(i);
	if (i == 0) {
		newSpace.spaceType = spaceTypes.get("start");
	} else if (i == 6) {
		newSpace.spaceType = spaceTypes.get("elbacko");
	} else {
		newSpace.spaceType = spaceTypes.get("normal");
	}
	console.log("Space " + i + ": " + newSpace.spaceType.name);
	board.push(newSpace);
}

// create the bank
bank.inventory.set("silver", BANK_SILVER_START);
bank.inventory.set("gold", BANK_GOLD_START);

var playerCount = readline.question("How many players?");
console.log("");

for (var p = 1; p <= playerCount; p++) {
	var newPlayer = new player(p);
    console.log("Player #" + p);
	newPlayer.inventory.set("gold", PLAYER_GOLD_START);
	newPlayer.inventory.set("silver",PLAYER_SILVER_START);
	players.push(newPlayer);
}

var playerPointer = 0;

while (!isGameOver()) {
	var currentPlayer = players[playerPointer];
	var roll = rollDice();
	console.log("I just rolled " + roll[0] + " and " + roll[1]);
	console.log("Player " + players[playerPointer].ordinal + " turn");
	handlePlayerMove(player,number
		player.space += number;
		{
		}
		}
	handlePlayerMove(currentPlayer,
	playerPointer++;
	if (playerPointer >= playerCount) {
		playerPointer = 0;
	} 
	addPlayerMoneyRound(currentPlayer);  
  outputCurrentInventory(currentPlayer);
}
	newmethod handlePlayerMove howmuchtheyrollednumber newmethod
	
player.space