var spaceType = require('./spaceType.js');
var space = require('./space.js');
var dict = require("dict");

var board = [];
var spaceTypes = dict({
	"start" : new spaceType("start", 1, "Brown", "", []),
	"normal" : new spaceType("normal", 1, "Green", "", []),
	"elbacko" : new spaceType("elbacko", 3, "Red", "", [])
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