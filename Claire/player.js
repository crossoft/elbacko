var dict = require("dict");
function Player(ordinal)
						{
	this.ordinal = ordinal;
	this.color = "black";
	this.space = 0;
	this.inventory = new dict({});
//dictionary = a name. (a name that isn't known yet. .like "gold" and "silver")
}
module.exports = Player;