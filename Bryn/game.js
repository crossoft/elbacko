var spaceType = require('./spaceType.js');
var space = require('./space.js');
var dict = require("dict");

var spaceTypes = new dict({});

var board = [];
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
