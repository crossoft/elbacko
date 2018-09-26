var spaceType = require('./spaceType.js');
var space = require('./space.js');
var dict = require("dict");

var board = [];
var spaceTypes = dict({
	"start" : new spaceType("start", 1, "Brown", "", []),
	"normal" : new spaceType("normal", 1, "Green", "", []),
	"elbacko" : new spaceType("elbacko", 3, "Red", "", []),

	"wagon" : new spaceType("wagon", 1, "Green", "", []),
	"alamo" : new spaceType("alamo", 1, "Grey-Brown", "", []),
	"end" : new spaceType("end", 3, "Brown", "", [])


});

var board = [];
// lay out the board
for (var i = 0; i < 77; i++) {
	var newSpace = new space(i);
	if (i == 0) {
		newSpace.spaceType = spaceTypes.get("start");
	} else if (i == 6 || i == 12 || i == 17 || i == 30 || i == 41 || i == 50 || i == 57 || i == 61 || i == 67 || i == 73) {
		newSpace.spaceType = spaceTypes.get("elbacko");
	} else if (i = 21 || i = 25 || i == 36){
	newSpace.spaceType = spaceTypes.get("wagon");
	} else if (i == 55) {
		newSpace.spaceType = spaceTypes.get("alamo");
	} else if (i == 77){
		newSpace.spaceType = spaceTypes.get("end");
	} else 
		newSpace.spaceType = spaceTypes.get("normal");


console.log("Space " + i + ": " + newSpace.spaceType.name);
	board.push(newSpace);
}


