var display = document.getElementById("display");
var entry = "";
var savedValue = "";
var secondValue = false;

function output(number) {
	entry = entry + number;
	display.innerHTML = entry;
	entry = entry.parseFloat();
};