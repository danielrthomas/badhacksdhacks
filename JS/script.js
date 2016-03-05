var display = document.getElementById("display");
var entry = "";
var savedValue = "";
var isValue = false;
var operation = "";

var one = document.getElementById("button-1");
var two = document.getElementById("button-2");
var three = document.getElementById("button-3");
var four = document.getElementById("button-4");
var five = document.getElementById("button-5");
var six = document.getElementById("button-6");
var seven = document.getElementById("button-7");
var eight = document.getElementById("button-8");
var nine = document.getElementById("button-9");
var zero = document.getElementById("button-0");

var plus = document.getElementById("button-+");
var minus = document.getElementById("button--");
var multiply = document.getElementById("button-*");
var divide = document.getElementById("button-/");

function display(varia){
	display.innerHTML = varia;
}

function output(number) {
	entry = entry + number;
	display(entry);
	entry = entry.parseFloat();
}

one.onclick = function(e){output('1');}
two.onclick = function(e){output('2');}
three.onclick = function(e){output('3');}
four.onclick = function(e){output('4');}
five.onclick = function(e){output('5');}
six.onclick = function(e){output('6');}
seven.onclick = function(e){output('7');}
eight.onclick = function(e){output('8');}
nine.onclick = function(e){output('9');}
zero.onclick = function(e){output('0');}

function operator(ope){
	if(isValue){
		operate();
	}
	savedValue = entry;
	operation = ope;
	isValue = true;
	entry = "";
}

