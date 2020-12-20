// -----------------------------------------------------------------------------

var first = ["James","Darrell","Alicia", "Amber", "Jason", "Brandon", "Dylan"];
var last = ["McKenney","Charles", "Honeycutt"];
var age = 0;
var money = 0;
var looks = getRndInteger(1,100);
var smarts = getRndInteger(1,100);
var health = getRndInteger(1,100);
var happiness = getRndInteger(1,100);

// -----------------------------------------------------------------------------

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
function getRndName() {
document.getElementById("first").innerHTML = first[getRndInteger(0,7)];
document.getElementById("last").innerHTML = last[getRndInteger(0,3)];
}

// -----------------------------------------------------------------------------

getRndName();

// -----------------------------------------------------------------------------

