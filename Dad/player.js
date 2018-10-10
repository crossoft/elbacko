var dict = require("dict");

function Player(ordinal) {
	this.ordinal = ordinal;
	this.color = "black";
	this.space = 0;
	this.inventory = new dict({});

	// a dictionary is a name you give an object (or something) 
}

module.exports = Player;

