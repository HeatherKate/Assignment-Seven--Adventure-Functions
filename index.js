/*
	Below is a small script which generates random adventures. There are two problems which are marked below with "TODO". Your assignment is to solve those TODOs and get this script really up to snuff.
*/

var monsters = [
	"dragon",
	"troll",
	"alien mothership",
	"illithid"
];

var weapons = [
	"deadly dagger",
	"artful axe",
	"skillful swordplay",
	"menacing mace"
];

var actions = [
	"defeated",
	"attacked",
	"ran from",
	"talked to"
];



var newAdventureButton = document.getElementById("new_adventure");

/*
var heroGender;
if (Math.random() > 0.5 {
    heroGender = "hero";
} else {
	heroGender = "heroine";
}

/*
	TODO: The following three lines of code have a lot of repetition and are ripe for turning into a function! Create a function to handle choosing a random element from an array instead of doing the math each time.
*/
function game() {
	var heroGender = Math.random() > 0.5 ? "hero" : "heroine";
	
	function getRandom(choice) {
		var chosenChoice = Math.floor(Math.random() * choice.length);
		return choice[chosenChoice]
	}

	var chosenMonster = getRandom(monsters);
	var chosenWeapon = getRandom(weapons);
	var chosenAction = getRandom(actions);

	// 		== THIS ^^^^ IS REPLACING THE FOLLOWING: == 
	//var chosenMonster = Math.floor(Math.random() * monsters.length);
	//
	//var chosenWeapon = Math.floor(Math.random() * weapons.length);
	//
	//var chosenAction = Math.floor(Math.random() * actions.length);

	var output = "Armed with only their " +
		chosenWeapon +
		" our " +
		heroGender +
		" " +
		chosenAction +
		" the evil " +
		chosenMonster +
		"!";
	
	document.getElementById("adventure").innerText = output;
}

newAdventureButton.onclick = game;


/*
	TODO: Right now the "new adventure!" button doesn't work. Create a function to bind to that button so that the user can create a new adventure without refreshing the page.
*/

/*
	Optional: Create several more types of adventures, weapons, actions, etc.

	Optional: Allow the user to interact with the story more than just clicking
	the "new adventure!" button. You'll need to create variables to keep track
	of state.

	Optional (advanced): Use document.location.hash in a way which allows the
	user to bookmark a specific story that they like and return to it later.
*/