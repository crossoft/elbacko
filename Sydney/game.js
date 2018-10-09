var player = require('./player.js');
var spaceType = require('./spaceType.js');
var space = require('./space.js');
var dict = require('dict');
var readline = require("readline-sync");

var board = [];

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


var playerCount = readline.question("How many players?");
console.log("");
for (var p = 1; p <= playerCount; p++) {
var newPlayer = new player(p);
  console.log("Player #" + p);
  
}

